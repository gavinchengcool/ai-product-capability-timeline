#!/usr/bin/env python3

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REPORTS_WEEKLY = ROOT / "reports" / "weekly"
MEMORY_DIR = ROOT / "memory"
PUBLIC_DIR = ROOT / "public"

LATEST_JSON_PATH = REPORTS_WEEKLY / "latest.json"
LATEST_DELTA_MEMORY_PATH = MEMORY_DIR / "latest-delta.json"
LATEST_DELTA_PUBLIC_PATH = PUBLIC_DIR / "latest-delta.js"
HEATMAP_INCREMENTAL_MEMORY_PATH = MEMORY_DIR / "heatmap-incremental-rows.json"
HEATMAP_INCREMENTAL_PUBLIC_PATH = PUBLIC_DIR / "heatmap-incremental.js"
TIMELINE_HTML_PATH = PUBLIC_DIR / "timeline-heatmap.html"
INDEX_HTML_PATH = PUBLIC_DIR / "index.html"


def load_latest_report() -> dict:
    if not LATEST_JSON_PATH.exists():
        raise SystemExit(f"Latest report JSON not found: {LATEST_JSON_PATH}")
    return json.loads(LATEST_JSON_PATH.read_text(encoding="utf-8"))


def build_delta_payload(report: dict) -> dict:
    releases = report.get("releases_in_window", [])
    stable_releases = [release for release in releases if not release.get("prerelease")]
    beta_releases = [release for release in releases if release.get("prerelease")]
    return {
        "generatedAt": report["generated_at"],
        "window": report["window"],
        "repo": report["repo"],
        "summary": {
            "commitCount": report.get("commit_count", 0),
            "releaseCount": len(releases),
            "stableReleaseCount": len(stable_releases),
            "betaReleaseCount": len(beta_releases),
            "stars": report["repo"].get("stars", 0),
            "forks": report["repo"].get("forks", 0),
            "openIssues": report["repo"].get("open_issues", 0),
        },
        "releases": releases[:6],
        "featureItems": report.get("feature_items", [])[:8],
        "fixItems": report.get("fix_items", [])[:8],
        "topScopes": report.get("top_scopes", [])[:8],
        "headlineCommits": report.get("commit_headlines", [])[:8],
        "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。",
    }


def write_json(path: Path, payload: dict) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def write_public_js(path: Path, payload: dict) -> None:
    path.write_text(
        "window.OPENCLAW_LATEST_DELTA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def write_public_rows_js(path: Path, rows: list[dict]) -> None:
    path.write_text(
        "window.OPENCLAW_HEATMAP_INCREMENTAL_ROWS = "
        + json.dumps(rows, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def local_date(iso_text: str | None) -> str:
    if not iso_text:
        return ""
    return str(iso_text)[:10]


def join_parts(*parts: str) -> str:
    return " ".join(part for part in parts if part)


def build_heatmap_incremental_row(report: dict) -> dict | None:
    date = local_date(report.get("window", {}).get("end_local") or report.get("generated_at"))
    if not date:
        return None

    feature_items = report.get("feature_items", [])
    fix_items = report.get("fix_items", [])
    headline_commits = report.get("commit_headlines", [])
    corpus = "\n".join([*feature_items, *fix_items, *headline_commits]).lower()
    axis_entries: dict[str, str] = {}

    if any(token in corpus for token in ("slack", "feishu", "webchat", "whatsapp", "telegram", "zalo", "signal")):
        axis_entries["channels"] = join_parts(
            "Feishu cards / reactions / reasoning stream 继续扩张。" if "feishu" in corpus else "",
            "Slack interactive replies 与 DM block 保留继续增强。" if "slack" in corpus else "",
            "WebChat 可切换隐藏 tool calls / thinking blocks。" if "webchat" in corpus else "",
            "WhatsApp / Telegram / Zalo / Signal 相关兼容修补继续推进。"
            if any(token in corpus for token in ("whatsapp", "telegram", "zalo", "signal"))
            else "",
        )

    if any(token in corpus for token in ("glm-5", "openrouter", "openai-compatible", "openai-completions", "codex cli", "anthropic", "provider")):
        axis_entries["models"] = join_parts(
            "GLM-5-turbo 进入 provider 支持集合。" if "glm-5" in corpus else "",
            "OpenRouter 运行时能力探测继续修补。" if "openrouter" in corpus else "",
            "OpenAI-compatible 接口兼容与 strict-tools 行为继续校正。"
            if any(token in corpus for token in ("openai-compatible", "openai-completions"))
            else "",
            "Codex CLI auth profile sync 继续补强。" if "codex cli" in corpus else "",
        )

    if any(token in corpus for token in ("browser", "tool calls", "thinking blocks", "web fetch", "plugin-sdk")):
        axis_entries["tools"] = join_parts(
            "Browser existing-session / MCP attach 模式继续简化并加固。" if "browser" in corpus else "",
            "WebChat 侧工具调用与 thinking 可见性得到更细控制。"
            if any(token in corpus for token in ("tool calls", "thinking blocks"))
            else "",
            "plugin-sdk 构建与重复安装路径继续收敛。" if "plugin-sdk" in corpus else "",
        )

    if any(token in corpus for token in ("android", "ios", "macos", "windows")):
        axis_entries["devices"] = join_parts(
            "Android settings UI、dark theme 和扫码体验继续迭代。" if "android" in corpus else "",
            "iOS onboarding welcome pager 进入主线。" if "ios" in corpus else "",
            "macOS canvas actions 被进一步限制到 trusted surfaces。" if "macos" in corpus else "",
            "Windows 重启与清理过程的可见控制台问题被压下去。" if "windows" in corpus else "",
        )

    if any(token in corpus for token in ("gateway", "heartbeat", "compaction", "session", "plugin", "config baseline", "control ui", "pairing")):
        axis_entries["control"] = join_parts(
            "Gateway health monitor、pairing 与 watch 链路继续打磨。" if "gateway" in corpus else "",
            "Heartbeat 增加 isolatedSession，运行隔离更明确。" if "heartbeat" in corpus else "",
            "Compaction timeout、计数持久化和 sanity check 继续加固。" if "compaction" in corpus else "",
            "Session / plugin 路由与配置基线继续收敛。"
            if any(token in corpus for token in ("session", "plugin"))
            else "",
        )

    if any(token in corpus for token in ("security", "ssrf", "token leak", "auth.mode=none", "trusted surfaces", "allowlist", "sanitize")):
        axis_entries["security"] = join_parts(
            "Telegram media transport policy 继续向 SSRF 边界对齐。" if "ssrf" in corpus else "",
            "Docker build context 的 gateway token 泄露风险被继续压住。" if "token leak" in corpus else "",
            "auth.mode=none 相关 pairing bypass 再次被封口。" if "auth.mode=none" in corpus else "",
            "trusted surfaces 与 external content sanitize 继续收紧。"
            if any(token in corpus for token in ("trusted surfaces", "sanitize"))
            else "",
        )

    if any(token in corpus for token in ("docker", "health monitor", "updater", "runtime image", "lsof", "build", "restart", "cleanup", "cron")):
        axis_entries["ops"] = join_parts(
            "Docker 补上 OPENCLAW_TZ、apt-get upgrade 与 runtime lsof 等运维细节。" if "docker" in corpus else "",
            "Gateway health monitor 的 stale threshold / restart controls 变得可配置。"
            if "health monitor" in corpus
            else "",
            "服务重装、重启与 cleanup 路径继续修补。"
            if any(token in corpus for token in ("updater", "restart", "cleanup"))
            else "",
            "构建内存回归与 cron 死锁等运行期问题继续收敛。"
            if any(token in corpus for token in ("build", "cron"))
            else "",
        )

    summary_labels = [
        "移动端入口" if axis_entries.get("devices") else "",
        "渠道互动" if axis_entries.get("channels") else "",
        "gateway / 会话控制面" if axis_entries.get("control") else "",
        "Docker / 运维" if axis_entries.get("ops") else "",
        "模型兼容" if axis_entries.get("models") else "",
        "browser / tools" if axis_entries.get("tools") else "",
        "安全边界" if axis_entries.get("security") else "",
    ]
    summary_labels = [label for label in summary_labels if label]

    return {
        "date": date,
        "stage": "openclaw",
        "summary": (
            f"{'、'.join(summary_labels[:4])}继续增强，最近一天的增量也并入主矩阵。"
            if summary_labels
            else "最近一天仍有 GitHub 增量，主矩阵已同步吸收。"
        ),
        "axisEntries": axis_entries,
        "source": "daily-incremental",
        "generatedAt": report.get("generated_at"),
    }


def load_incremental_rows() -> list[dict]:
    if not HEATMAP_INCREMENTAL_MEMORY_PATH.exists():
        return []
    payload = json.loads(HEATMAP_INCREMENTAL_MEMORY_PATH.read_text(encoding="utf-8"))
    if isinstance(payload, list):
        return [item for item in payload if isinstance(item, dict) and item.get("date")]
    return []


def upsert_incremental_row(rows: list[dict], new_row: dict | None) -> list[dict]:
    merged = {row["date"]: row for row in rows if row.get("date")}
    if new_row and new_row.get("date"):
        merged[new_row["date"]] = new_row
    return [merged[date] for date in sorted(merged)]


def sync_index_html() -> None:
    INDEX_HTML_PATH.write_text(TIMELINE_HTML_PATH.read_text(encoding="utf-8"), encoding="utf-8")


def main() -> None:
    report = load_latest_report()
    delta_payload = build_delta_payload(report)
    incremental_rows = upsert_incremental_row(load_incremental_rows(), build_heatmap_incremental_row(report))
    write_json(LATEST_DELTA_MEMORY_PATH, delta_payload)
    write_public_js(LATEST_DELTA_PUBLIC_PATH, delta_payload)
    write_json(HEATMAP_INCREMENTAL_MEMORY_PATH, incremental_rows)
    write_public_rows_js(HEATMAP_INCREMENTAL_PUBLIC_PATH, incremental_rows)
    sync_index_html()
    print(
        json.dumps(
            {
                "latestReport": str(LATEST_JSON_PATH),
                "latestDeltaMemory": str(LATEST_DELTA_MEMORY_PATH),
                "latestDeltaPublic": str(LATEST_DELTA_PUBLIC_PATH),
                "heatmapIncrementalMemory": str(HEATMAP_INCREMENTAL_MEMORY_PATH),
                "heatmapIncrementalPublic": str(HEATMAP_INCREMENTAL_PUBLIC_PATH),
                "syncedIndex": str(INDEX_HTML_PATH),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
