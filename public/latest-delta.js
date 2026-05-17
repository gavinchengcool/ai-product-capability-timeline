window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-17T20:48:35.511982+08:00",
  "window": {
    "start_local": "2026-05-16T20:48:35.511982+08:00",
    "end_local": "2026-05-17T20:48:35.511982+08:00",
    "start_utc": "2026-05-16T12:48:35Z",
    "end_utc": "2026-05-17T12:48:35Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 372563,
    "forks": 77223,
    "open_issues": 6907,
    "pushed_at": "2026-05-17T12:46:44Z"
  },
  "summary": {
    "commitCount": 476,
    "releaseCount": 2,
    "stableReleaseCount": 0,
    "betaReleaseCount": 2,
    "stars": 372563,
    "forks": 77223,
    "openIssues": 6907
  },
  "releases": [
    {
      "tag_name": "v2026.5.16-beta.4",
      "published_at": "2026-05-17T04:22:04Z",
      "name": "openclaw 2026.5.16-beta.4",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.4"
    },
    {
      "tag_name": "v2026.5.16-beta.3",
      "published_at": "2026-05-16T19:46:18Z",
      "name": "openclaw 2026.5.16-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.3"
    }
  ],
  "featureItems": [
    "Providers/media: add fal and OpenRouter music-generation providers for the shared `music_generate` tool, including fal MiniMax/ACE/Stable Audio endpoints and OpenRouter Lyria audio output. [v2026.5.16-beta.4]",
    "Mac app remote setup can now be preconfigured from `openclaw-mac configure-remote`, skips onboarding when config is already complete, supports direct LAN/Tailnet gateway URLs, allows private same-origin Control UI loads, and owns the SSH tunnel process when SSH is selected. [v2026.5.16-beta.4]",
    "Providers/xAI: add xAI Grok OAuth login for SuperGrok subscribers, letting `xai/*` models and xAI media/tool providers authenticate without `XAI_API_KEY`. [v2026.5.16-beta.4]",
    "CLI/cron: add `openclaw cron run --wait` with timeout and poll interval controls, plus exact `cron.runs --run-id` filtering so automation can block on one queued manual run. (#81929) Thanks @ificator. [v2026.5.16-beta.4]",
    "Group chat: add core inbound event classification with opt-in `messages.groupChat.unmentionedInbound: \"room_event\"`, so always-on unmentioned room chatter can run as quiet context and speak visibly only via the message tool. (#81317) Thanks @obviyus. [v2026.5.16-beta.4]",
    "Gateway: add opt-in restart trace logs for restart signal, active-work drain, close, next-start, ready, and memory spans. (#82396) Thanks @samzong. [v2026.5.16-beta.4]",
    "Gateway/performance: split startup benchmark HTTP-listen timing from full gateway-ready timing and add post-bind plugin and sidecar diagnostics to restart-readiness traces. (#82603) Thanks @samzong. [v2026.5.16-beta.4]",
    "QA-Lab: add a deterministic local personal-agent scenario pack covering reminders, threaded replies, scoped memory recall, redaction, and safe tool followthrough. (#78219) Thanks @iFiras-Max1. [v2026.5.16-beta.4]"
  ],
  "fixItems": [
    "Cron: reject empty scheduled main/isolated payloads before persisting jobs, keeping runtime stores compatible with malformed-row hardening. [v2026.5.16-beta.4]",
    "Security/audit: add `security.audit.suppressions` for intentionally accepted audit findings, keeping suppressed matches out of the active summary while preserving them in JSON output with an active suppression notice. (#76949) Thanks @100menotu001. [v2026.5.16-beta.4]",
    "Cron: reject empty scheduled main/isolated payloads before persisting jobs, keeping runtime stores compatible with malformed-row hardening. [v2026.5.16-beta.3]",
    "test: harden wsl2 fixtures",
    "fix(update): use post-doctor plugin records",
    "test: harden live transport gates",
    "fix(qa-lab): fail live parity without token usage",
    "fix(macos): avoid cron settings crash"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 94
    },
    {
      "scope": "test",
      "count": 34
    },
    {
      "scope": "agents",
      "count": 24
    },
    {
      "scope": "gateway",
      "count": 23
    },
    {
      "scope": "docs",
      "count": 21
    },
    {
      "scope": "changelog",
      "count": 21
    },
    {
      "scope": "codex",
      "count": 19
    },
    {
      "scope": "ui",
      "count": 19
    }
  ],
  "headlineCommits": [
    "test: harden wsl2 fixtures",
    "fix(update): use post-doctor plugin records",
    "test: harden live transport gates",
    "fix(qa-lab): fail live parity without token usage",
    "test: tolerate degraded live transport state",
    "fix(macos): avoid cron settings crash",
    "fix(qa-lab): expose redacted qa bus tool traces",
    "test: harden live QA transport validation"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
