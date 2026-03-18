#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const MEMORY_DIR = path.join(ROOT, "memory");
const PUBLIC_DIR = path.join(ROOT, "public");

const OPENCLAW_DELTA_PATH = path.join(MEMORY_DIR, "latest-delta.json");
const PRODUCT_DATA_PATH = path.join(PUBLIC_DIR, "product-data.js");
const MEMORY_OUTPUT_PATH = path.join(MEMORY_DIR, "daily-ai-product-delta.json");
const PUBLIC_JSON_OUTPUT_PATH = path.join(PUBLIC_DIR, "daily-ai-product-delta.json");
const PUBLIC_MD_OUTPUT_PATH = path.join(PUBLIC_DIR, "daily-ai-product-delta.md");

const PRODUCT_META = [
  {
    id: "openclaw",
    label: "OpenClaw",
    category: "general",
    automationStatus: "live_daily",
    sourceLabel: "GitHub releases / commits / merged PR",
    freshnessMode: "live_24h",
    freshnessNote: "True rolling 24-hour delta refreshed daily at 20:00 Asia/Shanghai.",
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    category: "general",
    automationStatus: "baseline_snapshot",
    sourceLabel: "OpenAI ChatGPT release notes",
    freshnessMode: "latest_official_wave",
    freshnessNote: "Latest official dated update window exported from the current product baseline.",
  },
  {
    id: "claude",
    label: "Claude",
    category: "general",
    automationStatus: "baseline_snapshot",
    sourceLabel: "Anthropic Claude release notes",
    freshnessMode: "latest_official_wave",
    freshnessNote: "Latest official dated update window exported from the current product baseline.",
  },
  {
    id: "codex",
    label: "Codex CLI",
    category: "developer",
    automationStatus: "baseline_snapshot",
    sourceLabel: "OpenAI Codex official releases / release notes",
    freshnessMode: "latest_official_wave",
    freshnessNote: "Latest official dated update window exported from the current product baseline.",
  },
  {
    id: "claude-code",
    label: "Claude Code CLI",
    category: "developer",
    automationStatus: "baseline_snapshot",
    sourceLabel: "Anthropic Claude Code official releases",
    freshnessMode: "latest_official_wave",
    freshnessNote: "Latest official dated update window exported from the current product baseline.",
  },
  {
    id: "codex-app",
    label: "Codex App",
    category: "developer",
    automationStatus: "baseline_snapshot",
    sourceLabel: "OpenAI Codex app / product updates",
    freshnessMode: "latest_official_wave",
    freshnessNote: "Latest official dated update window exported from the current product baseline.",
  },
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeText(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function formatShanghai(date) {
  const formatter = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(
    formatter
      .formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+08:00`;
}

function formatDate(value) {
  return value ? String(value).slice(0, 10) : "";
}

function buildRequestedWindow(generatedAt) {
  const end = generatedAt;
  const start = new Date(end.getTime() - 24 * 60 * 60 * 1000);
  return {
    start_local: formatShanghai(start),
    end_local: formatShanghai(end),
  };
}

function loadMultiProductData() {
  const source = fs.readFileSync(PRODUCT_DATA_PATH, "utf8");
  const context = { window: {}, console };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: PRODUCT_DATA_PATH });
  if (!context.window.MULTI_PRODUCT_DATA) {
    throw new Error(`window.MULTI_PRODUCT_DATA not found in ${PRODUCT_DATA_PATH}`);
  }
  return context.window.MULTI_PRODUCT_DATA;
}

function normalizeMeta(meta, automationStatus) {
  const normalized = Array.isArray(meta)
    ? meta
        .filter((item) => item && item.label && item.value)
        .map((item) => ({
          label: String(item.label),
          value: String(item.value),
        }))
    : [];
  normalized.push({
    label: "自动化状态",
    value:
      automationStatus === "live_daily"
        ? "已接每天 20:00 自动刷新"
        : "当前仍是官方基线快照，尚未接每日抓取",
  });
  return normalized;
}

function normalizeOpenClaw(openclawDelta, generatedAt) {
  const repo = openclawDelta.repo || {};
  const summary = openclawDelta.summary || {};
  return {
    id: "openclaw",
    label: "OpenClaw",
    category: "general",
    automationStatus: "live_daily",
    freshness: {
      mode: "live_24h",
      is_live_24h: true,
      note: "True rolling 24-hour delta refreshed daily at 20:00 Asia/Shanghai.",
    },
    generatedAt: openclawDelta.generatedAt || formatShanghai(generatedAt),
    window: openclawDelta.window || null,
    meta: normalizeMeta(
      [
        {
          label: "窗口",
          value: `${formatDate(openclawDelta.window?.start_local)} 至 ${formatDate(openclawDelta.window?.end_local)}`,
        },
        {
          label: "GitHub 增量",
          value: `${summary.commitCount || 0} commits / ${summary.releaseCount || 0} releases`,
        },
        {
          label: "最近 push",
          value: repo.pushed_at ? formatDate(repo.pushed_at) : "未知",
        },
        {
          label: "来源",
          value: "GitHub releases / commits / merged PR",
        },
      ],
      "live_daily",
    ),
    featureItems: openclawDelta.featureItems || [],
    fixItems: openclawDelta.fixItems || [],
    releases: openclawDelta.releases || [],
    topScopes: openclawDelta.topScopes || [],
    note: openclawDelta.note || "",
  };
}

function normalizeBaselineProduct(meta, productData) {
  const latestDelta = productData.latestDelta || {};
  const rows = Array.isArray(productData.rows) ? productData.rows : [];
  return {
    id: meta.id,
    label: meta.label,
    category: meta.category,
    automationStatus: meta.automationStatus,
    freshness: {
      mode: meta.freshnessMode,
      is_live_24h: false,
      note: meta.freshnessNote,
    },
    generatedAt: latestDelta.generatedAt || productData.generatedAt || "",
    window: latestDelta.window || null,
    meta: normalizeMeta(latestDelta.meta, meta.automationStatus),
    featureItems: latestDelta.featureItems || [],
    fixItems: latestDelta.fixItems || [],
    releases: latestDelta.releases || [],
    topScopes: latestDelta.topScopes || [],
    note: `Source baseline from public/product-data.js. Latest timeline date: ${rows.at(-1)?.date || "unknown"}.`,
  };
}

function buildPayload() {
  const generatedAtDate = new Date();
  const generatedAt = formatShanghai(generatedAtDate);
  const requestedWindow = buildRequestedWindow(generatedAtDate);
  const openclawDelta = readJson(OPENCLAW_DELTA_PATH);
  const multiProductData = loadMultiProductData();

  const products = PRODUCT_META.map((meta) => {
    if (meta.id === "openclaw") {
      return normalizeOpenClaw(openclawDelta, generatedAtDate);
    }
    return normalizeBaselineProduct(meta, multiProductData[meta.id] || {});
  });

  return {
    generatedAt,
    timezone: "Asia/Shanghai",
    requestedWindow,
    note: "OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.",
    summary: {
      productCount: products.length,
      live24hProducts: products.filter((product) => product.freshness.is_live_24h).length,
      latestOfficialWaveProducts: products.filter(
        (product) => product.freshness.mode === "latest_official_wave",
      ).length,
    },
    products,
  };
}

function buildMarkdown(payload) {
  const lines = [
    "# Daily AI Product Delta",
    "",
    `- Generated at: ${payload.generatedAt}`,
    `- Requested window: ${formatDate(payload.requestedWindow.start_local)} to ${formatDate(payload.requestedWindow.end_local)}`,
    `- Coverage: ${payload.summary.productCount} products`,
    `- Live 24h feeds: ${payload.summary.live24hProducts}`,
    `- Latest official wave snapshots: ${payload.summary.latestOfficialWaveProducts}`,
    `- Note: ${payload.note}`,
    "",
  ];

  for (const product of payload.products) {
    lines.push(`## ${product.label}`);
    lines.push("");
    lines.push(`- Freshness: ${product.freshness.mode}`);
    lines.push(
      `- Window: ${formatDate(product.window?.start_local) || "n/a"} to ${formatDate(product.window?.end_local) || "n/a"}`,
    );
    lines.push(`- Generated at: ${product.generatedAt || "n/a"}`);

    for (const item of product.meta || []) {
      lines.push(`- ${item.label}: ${item.value}`);
    }

    lines.push("- Feature signals:");
    if ((product.featureItems || []).length) {
      for (const item of product.featureItems) {
        lines.push(`  - ${item}`);
      }
    } else {
      lines.push("  - No feature items recorded.");
    }

    lines.push("- Fixes and constraints:");
    if ((product.fixItems || []).length) {
      for (const item of product.fixItems) {
        lines.push(`  - ${item}`);
      }
    } else {
      lines.push("  - No fix items recorded.");
    }

    if (product.note) {
      lines.push(`- Note: ${product.note}`);
    }
    lines.push("");
  }

  return `${lines.join("\n").trim()}\n`;
}

function main() {
  const payload = buildPayload();
  const payloadText = `${JSON.stringify(payload, null, 2)}\n`;
  const markdown = buildMarkdown(payload);

  writeText(MEMORY_OUTPUT_PATH, payloadText);
  writeText(PUBLIC_JSON_OUTPUT_PATH, payloadText);
  writeText(PUBLIC_MD_OUTPUT_PATH, markdown);

  process.stdout.write(
    `${JSON.stringify(
      {
        memory: MEMORY_OUTPUT_PATH,
        publicJson: PUBLIC_JSON_OUTPUT_PATH,
        publicMarkdown: PUBLIC_MD_OUTPUT_PATH,
      },
      null,
      2,
    )}\n`,
  );
}

main();
