window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-01T20:49:06.039061+08:00",
  "window": {
    "start_local": "2026-04-30T20:49:06.039061+08:00",
    "end_local": "2026-05-01T20:49:06.039061+08:00",
    "start_utc": "2026-04-30T12:49:06Z",
    "end_utc": "2026-05-01T12:49:06Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 366993,
    "forks": 75423,
    "open_issues": 6783,
    "pushed_at": "2026-05-01T12:49:02Z"
  },
  "summary": {
    "commitCount": 331,
    "releaseCount": 4,
    "stableReleaseCount": 1,
    "betaReleaseCount": 3,
    "stars": 366993,
    "forks": 75423,
    "openIssues": 6783
  },
  "releases": [
    {
      "tag_name": "v2026.4.29",
      "published_at": "2026-04-30T21:01:08Z",
      "name": "openclaw 2026.4.29",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.29"
    },
    {
      "tag_name": "v2026.4.29-beta.4",
      "published_at": "2026-04-30T20:04:16Z",
      "name": "openclaw 2026.4.29-beta.4",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.29-beta.4"
    },
    {
      "tag_name": "v2026.4.29-beta.3",
      "published_at": "2026-04-30T18:37:22Z",
      "name": "openclaw 2026.4.29-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.29-beta.3"
    },
    {
      "tag_name": "v2026.4.29-beta.2",
      "published_at": "2026-04-30T16:50:22Z",
      "name": "OpenClaw 2026.4.29-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.29-beta.2"
    }
  ],
  "featureItems": [
    "Agents/commitments: add opt-in inferred follow-up commitments with hidden batched extraction, per-agent/per-channel scoping, heartbeat delivery, CLI management, a simple `commitments.enabled`/`commitments.maxPerDay` config, and heartbeat-interval due-time clamping so magical check-ins do not echo immediately. (#74189) Thanks @vignesh07. [v2026.4.29]",
    "Messages/queue: make `steer` drain all pending Pi steering messages at the next model boundary, keep legacy one-at-a-time steering as `queue`, and add a dedicated steering queue docs page. Thanks @vincentkoc. [v2026.4.29]",
    "Messages: add global `messages.visibleReplies` so operators can require visible output to go through `message(action=send)` for any source chat, while `messages.groupChat.visibleReplies` stays available as the group/channel override. Thanks @scoootscooob. [v2026.4.29]",
    "Memory/wiki: add agent-facing people wiki metadata, canonical aliases, person cards, relationship graphs, privacy/provenance reports, evidence-kind drilldown, and search modes for person lookup, question routing, source evidence, and raw claims. Thanks @vincentkoc. [v2026.4.29]",
    "Active Memory: add optional per-conversation `allowedChatIds` and `deniedChatIds` filters so operators can enable recall only for selected direct, group, or channel conversations while keeping broad sessions skipped. (#67977) Thanks @quengh. [v2026.4.29]",
    "Gateway/memory: add a read-only `doctor.memory.remHarness` RPC so operator clients can preview bounded REM dreaming output without running mutation paths. (#66673) Thanks @samzong. [v2026.4.29]",
    "Providers/NVIDIA: add the NVIDIA provider with API-key onboarding, setup docs, static catalog metadata, and literal model-ref picker support so NVIDIA hosted models can be selected with their provider prefix intact. (#71204) Thanks @eleqtrizit. [v2026.4.29]",
    "Added SQLite-backed plugin state store (`api.runtime.state.openKeyedStore`) for restart-safe keyed registries with TTL, eviction, and automatic plugin isolation. Thanks @amknight. [v2026.4.29]"
  ],
  "fixItems": [
    "Security/outbound: strip re-formed HTML tags during plain-text sanitization so nested tag fragments cannot leave a CodeQL-detected `<script>` sequence behind. Thanks @vincentkoc. [v2026.4.29]",
    "Security/secrets: compare credential bytes with padded timing-safe buffers instead of hashing candidate passwords before equality checks. Thanks @vincentkoc. [v2026.4.29]",
    "Security/QQBot: sanitize debug log arguments before writing to `console.*`, so gateway payload fields cannot forge extra log lines when debug logging is enabled. Thanks @vincentkoc. [v2026.4.29]",
    "Security/audit: resolve configured model aliases before model-tier and small-parameter checks, so alias-based GPT-5/Codex configs no longer report false weak-model warnings. Fixes #74455. Thanks @blaspat. [v2026.4.29]",
    "Docs/Hetzner: clarify that SSH tunnel access requires `AllowTcpForwarding local` before running `ssh -L`, so hardened VPS sshd configs do not block loopback Gateway access. Fixes #54557; carries forward #54564; refs #54954. Thanks @satishkc7, @blackstrype, and @Aftabbs. [v2026.4.29]",
    "Gateway/shutdown: report structured shutdown warnings and HTTP close timeout warnings through `ShutdownResult` while preserving lifecycle hook hardening. Carries forward #41296. Thanks @edenfunf. [v2026.4.29]",
    "Security/audit: recognize dangerous node command IDs as valid `gateway.nodes.denyCommands` entries, so audit only warns on real typos or unsupported patterns. (#56923) Thanks @chziyue. [v2026.4.29]",
    "Security/Telegram: load Telegram security adapters in read-only audit/doctor, audit malformed Telegram DM `allowFrom` entries even when groups are disabled, and keep allowlist DM audits from counting stale pairing-store senders, so public/shared-DM risk checks stay accurate. Refs #73698. Thanks @xace1825. [v2026.4.29]"
  ],
  "topScopes": [
    {
      "scope": "refactor",
      "count": 63
    },
    {
      "scope": "fix",
      "count": 51
    },
    {
      "scope": "test",
      "count": 24
    },
    {
      "scope": "e2e",
      "count": 20
    },
    {
      "scope": "gateway",
      "count": 17
    },
    {
      "scope": "plugins",
      "count": 13
    },
    {
      "scope": "docs",
      "count": 11
    },
    {
      "scope": "ci",
      "count": 10
    }
  ],
  "headlineCommits": [
    "fix: preserve OpenAI Codex xhigh thinking policy",
    "refactor: trim shared test helper exports",
    "fix: carry matrix dm allowlist state",
    "docs: note groq manifest catalog migration",
    "fix: declare groq manifest model catalog",
    "fix: declare groq setup auth metadata",
    "fix: allow onboarding config size drops",
    "refactor: trim gateway helper state exports"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
