window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-08-15T20:11:58.302584+08:00",
  "window": {
    "start_local": "2026-08-14T20:11:58.302584+08:00",
    "end_local": "2026-08-15T20:11:58.302584+08:00",
    "start_utc": "2026-08-14T12:11:58Z",
    "end_utc": "2026-08-15T12:11:58Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 386361,
    "forks": 81206,
    "open_issues": 5539,
    "pushed_at": "2026-08-15T12:04:09Z"
  },
  "summary": {
    "commitCount": 340,
    "releaseCount": 1,
    "stableReleaseCount": 0,
    "betaReleaseCount": 1,
    "stars": 386361,
    "forks": 81206,
    "openIssues": 5539
  },
  "releases": [
    {
      "tag_name": "v2026.8.1-beta.2",
      "published_at": "2026-08-15T05:36:23Z",
      "name": "OpenClaw 2026.8.1-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2"
    }
  ],
  "featureItems": [
    "**Browser extension relay CDP compat:** answer `Target.getBrowserContexts` so Puppeteer-based clients (chrome-devtools-mcp) can drive the paired Chrome without the remote-debugging permission prompt, serve DevTools-style `/json/list` target descriptors, and add `openclaw browser extension cdp` to print the relay endpoint plus auth header for external CDP clients. Thanks @vincentkoc. [v2026.8.1-beta.2]",
    "**Fish Audio speech:** add hosted S2.1 synthesis with streaming, voice notes, voice discovery, and telephony, plus local Fish S2 Pro reference-voice streaming in native macOS Talk. Thanks @Conan-Scott, @vincentkoc, and @Patrick-Erichsen. [v2026.8.1-beta.2]",
    "**Control UI update recovery:** the \"A new version is available\" Reload button now waits out the gateway restart that stranded the chunk and reloads as soon as it answers, instead of silently doing nothing and leaving a manual hard reload as the only way out. Thanks @vincentkoc. [v2026.8.1-beta.2]",
    "**Trusted-proxy browser pairing:** optionally auto-approve new Control UI and WebChat devices from allowlisted proxy identities with non-admin scope caps, while keeping existing-device upgrades manual. Thanks @vincentkoc. [v2026.8.1-beta.2]",
    "**Channel plugin ingress monitors:** add a shared plugin SDK monitor for durable admission, polling, pruning, claim identity validation, adoption handoff, and shutdown, and migrate IRC, Synology Chat, and Google Chat to the shared lifecycle. Thanks @vincentkoc and @shakkernerd. [v2026.8.1-beta.2]",
    "**External gateway supervision:** add `OPENCLAW_SUPERVISOR_MODE=external` for lifecycle owners such as OCM, preserving verified restart and deferral behavior without exposing native service authority, blocking native service mutation and self-update, and providing a versioned atomic restart-handoff consume contract. Thanks @shakkernerd. [v2026.8.1-beta.2]",
    "**ClickClack guided setup:** configure ClickClack from `openclaw onboard` or `openclaw channels add clickclack` with URL, token, and workspace prompts, default-account env fallback, nonfatal live connection validation, and gateway-aware next steps that connect automatically when OpenClaw is already running. Thanks @shakkernerd and @vincentkoc. [v2026.8.1-beta.2]",
    "**ClickClack bot collaboration:** add opt-in bot-authored inbound dispatch with explicit sender authorization, mention gating, retry-safe loop protection, and independent thread budgets while keeping bot traffic denied by default. Thanks @jjjhenriksen, @shakkernerd, and @vincentkoc. [v2026.8.1-beta.2]"
  ],
  "fixItems": [
    "Fixed Crabbox hydration on unprivileged cloud sandboxes by falling back to a user-writable pnpm store when the shared `/var/cache/crabbox` cache is unavailable, preserving the hardlink import mode after hydration, and making Docker an explicit routed capability instead of an implicit install requirement. Thanks @vincentkoc and @joshavant. [v2026.8.1-beta.2]",
    "fix(gateway): restart after prepared maintenance suspension (#124157)",
    "fix(session-catalog): preserve explicit agent ownership across UI and CLI (#123899)",
    "fix(agents): deliver Codex input choices in Telegram and web chat (#124146)",
    "fix(cua): initialize execution resources on first use (#124156)",
    "fix(auto-reply): reject undelivered ask_user prompts (#124148)",
    "fix(cli): migrate apply refusal suggests a valid preview command (#124149)",
    "fix(computer-use): repair artifact verification and post-approval descriptor found by the Linux gate (#124128)"
  ],
  "topScopes": [
    {
      "scope": "ui",
      "count": 67
    },
    {
      "scope": "gateway",
      "count": 34
    },
    {
      "scope": "test",
      "count": 22
    },
    {
      "scope": "ci",
      "count": 20
    },
    {
      "scope": "cli",
      "count": 16
    },
    {
      "scope": "fix",
      "count": 14
    },
    {
      "scope": "agents",
      "count": 9
    },
    {
      "scope": "macos",
      "count": 9
    }
  ],
  "headlineCommits": [
    "fix(gateway): restart after prepared maintenance suspension (#124157)",
    "test(tooling): remove obsolete runner facades (#124159)",
    "fix(session-catalog): preserve explicit agent ownership across UI and CLI (#123899)",
    "fix(agents): deliver Codex input choices in Telegram and web chat (#124146)",
    "fix(cua): initialize execution resources on first use (#124156)",
    "fix(auto-reply): reject undelivered ask_user prompts (#124148)",
    "test: remove UI and native test residue (#124152)",
    "fix(cli): migrate apply refusal suggests a valid preview command (#124149)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
