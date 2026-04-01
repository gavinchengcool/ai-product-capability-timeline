window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-01T20:47:46.196192+08:00",
  "window": {
    "start_local": "2026-03-31T20:47:46.196192+08:00",
    "end_local": "2026-04-01T20:47:46.196192+08:00",
    "start_utc": "2026-03-31T12:47:46Z",
    "end_utc": "2026-04-01T12:47:46Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 344068,
    "forks": 68180,
    "open_issues": 16889,
    "pushed_at": "2026-04-01T12:44:32Z"
  },
  "summary": {
    "commitCount": 357,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 344068,
    "forks": 68180,
    "openIssues": 16889
  },
  "releases": [
    {
      "tag_name": "v2026.3.31",
      "published_at": "2026-03-31T20:54:44Z",
      "name": "openclaw 2026.3.31",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.3.31"
    },
    {
      "tag_name": "v2026.3.31-beta.1",
      "published_at": "2026-03-31T19:47:04Z",
      "name": "OpenClaw 2026.3.31-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.3.31-beta.1"
    }
  ],
  "featureItems": [
    "ACP/plugins: add an explicit default-off ACPX plugin-tools MCP bridge config, document the trust boundary, and harden the built-in bridge packaging/logging path so global installs and stdio MCP sessions work reliably. (#56867) Thanks @joe2643. [v2026.3.31]",
    "Agents/LLM: add a configurable idle-stream timeout for embedded runner requests so stalled model streams abort cleanly instead of hanging until the broader run timeout fires. (#55072) Thanks @liuy. [v2026.3.31]",
    "Agents/MCP: materialize bundle MCP tools with provider-safe names (`serverName__toolName`), support optional `streamable-http` transport selection plus per-server connection timeouts, and preserve real tool results from aborted/error turns unless truncation explicitly drops them. (#49505) Thanks @ziomancer. [v2026.3.31]",
    "Android/notifications: add notification-forwarding controls with package filtering, quiet hours, rate limiting, and safer picker behavior for forwarded notification events. (#40175) Thanks @nimbleenigma. [v2026.3.31]",
    "Background tasks: add the first linear task flow control surface with `openclaw flows list|show|cancel`, keep manual multi-task flows separate from one-task auto-sync flows, and surface doctor recovery hints for obviously orphaned or broken flow/task linkage. Thanks @mbelinky and @vincentkoc. [v2026.3.31]",
    "Channels/QQ Bot: add QQ Bot as a bundled channel plugin with multi-account setup, SecretRef-aware credentials, slash commands, reminders, and media send/receive support. (#52986) Thanks @sliverp. [v2026.3.31]",
    "Tasks: add a minimal SQLite-backed task flow registry plus task-to-flow linkage scaffolding, so orchestrated work can start gaining a first-class parent record without changing current task delivery behavior. Thanks @mbelinky and @vincentkoc. [v2026.3.31]",
    "Tasks: persist blocked state on one-task task flows and let the same flow reopen cleanly on retry, so blocked detached work can carry a parent-level reason and continue without fragmenting into a new job. Thanks @mbelinky and @vincentkoc. [v2026.3.31]"
  ],
  "fixItems": [
    "Config/SecretRef + Control UI: harden SecretRef redaction round-trip restore, block unsafe raw fallback (force Form mode when raw is unavailable), and preflight submitted-config SecretRefs before config write RPC persistence. (#58044) Thanks @joshavant. [v2026.3.31]",
    "Gateway/OpenAI HTTP: restore default operator scopes for bearer-authenticated requests that omit `x-openclaw-scopes`, so headless `/v1/chat/completions` and session-history callers work again after the recent method-scope hardening. (#57596) Thanks @openperf. [v2026.3.31]",
    "Harden async approval followup delivery in webchat-only sessions (#57359) Thanks @joshavant. [v2026.3.31]",
    "ACP/plugins: add an explicit default-off ACPX plugin-tools MCP bridge config, document the trust boundary, and harden the built-in bridge packaging/logging path so global installs and stdio MCP sessions work reliably. (#56867) Thanks @joe2643. [v2026.3.31]",
    "CI/dev checks: default local `pnpm check` to a lower-memory typecheck/lint path while keeping CI on the normal parallel path, and harden Telegram test typing/literals around native TypeScript-Go tooling crashes. [v2026.3.31-beta.1]",
    "Config/SecretRef + Control UI: harden SecretRef redaction round-trip restore, block unsafe raw fallback (force Form mode when raw is unavailable), and preflight submitted-config SecretRefs before config write RPC persistence. (#58044) Thanks @joshavant. [v2026.3.31-beta.1]",
    "Gateway/OpenAI HTTP: restore default operator scopes for bearer-authenticated requests that omit `x-openclaw-scopes`, so headless `/v1/chat/completions` and session-history callers work again after the recent method-scope hardening. (#57596) Thanks @openperf. [v2026.3.31-beta.1]",
    "Harden async approval followup delivery in webchat-only sessions (#57359) Thanks @joshavant. [v2026.3.31-beta.1]"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 74
    },
    {
      "scope": "fix",
      "count": 65
    },
    {
      "scope": "docs",
      "count": 21
    },
    {
      "scope": "ci",
      "count": 17
    },
    {
      "scope": "tasks",
      "count": 16
    },
    {
      "scope": "build",
      "count": 16
    },
    {
      "scope": "changelog",
      "count": 11
    },
    {
      "scope": "refactor",
      "count": 10
    }
  ],
  "headlineCommits": [
    "fix: correct flows docs to tasks (#58690) (thanks @neeravmakwana)",
    "refactor: route session target matching through plugin parsers",
    "fix: add ZAI GLM-5.1 and GLM-5V Turbo support (#58793) (thanks @tomsun28)",
    "refactor: dedupe auth profile store normalization",
    "fix: preserve telegram exec approval topic routing",
    "fix: add changelog for auth profile store load crash (#58923) (thanks @openperf)",
    "fix(auth-profiles ): ensure credential key and token are strings to prevent crash",
    "fix: unify structured provider failover classification (#58856) (thanks @aaron-he-zhu)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
