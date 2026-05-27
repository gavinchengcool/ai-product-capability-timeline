window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-27T22:48:59.801312+08:00",
  "window": {
    "start_local": "2026-05-26T22:48:59.801312+08:00",
    "end_local": "2026-05-27T22:48:59.801312+08:00",
    "start_utc": "2026-05-26T14:48:59Z",
    "end_utc": "2026-05-27T14:48:59Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 375015,
    "forks": 78178,
    "open_issues": 6880,
    "pushed_at": "2026-05-27T14:48:10Z"
  },
  "summary": {
    "commitCount": 566,
    "releaseCount": 3,
    "stableReleaseCount": 1,
    "betaReleaseCount": 2,
    "stars": 375015,
    "forks": 78178,
    "openIssues": 6880
  },
  "releases": [
    {
      "tag_name": "v2026.5.26",
      "published_at": "2026-05-27T11:27:24Z",
      "name": "openclaw 2026.5.26",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.26"
    },
    {
      "tag_name": "v2026.5.26-beta.2",
      "published_at": "2026-05-27T05:46:50Z",
      "name": "openclaw 2026.5.26-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.2"
    },
    {
      "tag_name": "v2026.5.26-beta.1",
      "published_at": "2026-05-26T21:10:33Z",
      "name": "openclaw 2026.5.26-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.1"
    }
  ],
  "featureItems": [
    "Transcripts: add core transcript capture and source-provider support for transcript-backed meeting summaries, including the renamed Transcripts docs, CLI surface, source-provider chunks, and cleaned user-turn persistence. [v2026.5.26]",
    "Auth: add named model login profiles and supported credential migration for Hermes, OpenCode, and Codex auth profiles, with explicit opt-out and non-interactive controls. (#85667) Thanks @fuller-stack-dev. [v2026.5.26]",
    "Diagnostics: trace gateway secret preparation, classify skill/tool usage, surface model stream progress, add OpenTelemetry LLM content spans, and expose alertable telemetry for blocked tools, failover, stale sessions, liveness, oversized payloads, and webhook ingress. (#83019, #80370, #86191) [v2026.5.26]",
    "Channels: add Signal reaction approvals, iMessage thumb approval reactions, and WhatsApp thumb approval reaction support so mobile approval flows work without textual `/approve` commands. (#85894, #85952, #85477) [v2026.5.26]",
    "Plugin SDK: add reaction approval helpers and keep diagnostic event root exports discoverable across function-name and alias-bound module graphs. (#86735, #87084) [v2026.5.26]",
    "Android/iOS: add the Android pair-new-gateway action and improve mobile Talk mode surfaces, including iOS realtime Talk mode and Android offline voice/gateway recovery. (#86798, #86355) Thanks @ngutman. [v2026.5.26]",
    "QA-Lab: add `qa coverage --match <query>` so focused proof selection can discover matching scenarios from existing metadata before running live or remote lanes. [v2026.5.26]",
    "Control UI: add an ephemeral Activity tab for sanitized live tool activity summaries without persisting raw telemetry. Fixes #12831. Thanks @BunsDev. [v2026.5.26]"
  ],
  "fixItems": [
    "Security/content boundaries: validate Browser snapshot tab URLs against SSRF policy before ChromeMCP or direct CDP reads, sanitize queued system-event text so untrusted plugin/channel labels cannot spoof nested prompt markers, wrap fetched file text and metadata as external content, apply ClickClack `allowFrom` sender allowlists before agent dispatch, reject RPCs from invalidated device-token clients during rotation, require staged sandbox media refs, and scrub serialized tool-call text from replies. (#78526, #87094, #87062, #83741, #70707, #86924) Thanks @zsxsoft, @ttzero25, and @mmaps. [v2026.5.26]",
    "Install/release: bound Docker package build, inventory, pack, and tarball preparation with process-group timeouts; pin shrinkwrap patch drift to the pnpm lock; harden macOS restart and dSYM packaging; and run release Docker/live timeout wrappers in the foreground so child processes cannot wedge gates. [v2026.5.26]",
    "Security: avoid printing Gateway tokens in Docker, validate plugin model-pattern regexes safely, escape transcript metadata field names, harden session allowlist glob matching, audit Claude permission overrides under YOLO, and require explicit allow for ACP auto approvals. (#85849, #85934, #86046, #86557) [v2026.5.26]",
    "Security/Audit: flag webhook `hooks.token` reuse of active Gateway password auth in `openclaw security audit` while keeping password-mode startup compatibility. (#84338) Thanks @coygeek. [v2026.5.26]",
    "Security audit: warn when YOLO OpenClaw exec policy overrides a restrictive raw Claude `--permission-mode` for managed live sessions. (#86557) Thanks @sallyom. [v2026.5.26]",
    "Performance: cache plugin metadata snapshots, package realpaths, stable gateway metadata, model cost indexes, channel resolution, usage-cost indexes, and session/auth hot-path facts so common Gateway and reply paths do less rediscovery. (#84649, #85843, #86517, #86678) [v2026.5.26]",
    "Security/content boundaries: validate Browser snapshot tab URLs against SSRF policy before ChromeMCP or direct CDP reads, sanitize queued system-event text so untrusted plugin/channel labels cannot spoof nested prompt markers, wrap fetched file text and metadata as external content, apply ClickClack `allowFrom` sender allowlists before agent dispatch, reject RPCs from invalidated device-token clients during rotation, require staged sandbox media refs, and scrub serialized tool-call text from replies. (#78526, #87094, #87062, #83741, #70707, #86924) Thanks @zsxsoft, @ttzero25, and @mmaps. [v2026.5.26-beta.2]",
    "Install/release: bound Docker package build, inventory, pack, and tarball preparation with process-group timeouts; pin shrinkwrap patch drift to the pnpm lock; harden macOS restart and dSYM packaging; and run release Docker/live timeout wrappers in the foreground so child processes cannot wedge gates. [v2026.5.26-beta.2]"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 86
    },
    {
      "scope": "test",
      "count": 61
    },
    {
      "scope": "e2e",
      "count": 46
    },
    {
      "scope": "refactor",
      "count": 38
    },
    {
      "scope": "agents",
      "count": 35
    },
    {
      "scope": "gateway",
      "count": 29
    },
    {
      "scope": "ci",
      "count": 28
    },
    {
      "scope": "codex",
      "count": 20
    }
  ],
  "headlineCommits": [
    "fix(e2e): bound Open WebUI control probes",
    "fix(qa): keep Matrix mention preview finals strict",
    "test(qa): assert final-first Matrix mention previews",
    "fix(qa): use read failure for Matrix mention progress",
    "fix(e2e): bound ClawHub preflight waits",
    "fix(qa): relax Matrix artifact modes on Windows",
    "fix(auto-reply): suppress reasoning-prefixed NO_REPLY",
    "fix(e2e): bound kitchen sink log scans"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
