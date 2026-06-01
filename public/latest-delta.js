window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-06-02T01:09:15.810586+08:00",
  "window": {
    "start_local": "2026-06-01T01:09:15.810586+08:00",
    "end_local": "2026-06-02T01:09:15.810586+08:00",
    "start_utc": "2026-05-31T17:09:15Z",
    "end_utc": "2026-06-01T17:09:15Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 376040,
    "forks": 78539,
    "open_issues": 6997,
    "pushed_at": "2026-06-01T17:08:27Z"
  },
  "summary": {
    "commitCount": 598,
    "releaseCount": 5,
    "stableReleaseCount": 0,
    "betaReleaseCount": 5,
    "stars": 376040,
    "forks": 78539,
    "openIssues": 6997
  },
  "releases": [
    {
      "tag_name": "v2026.6.1-beta.1",
      "published_at": "2026-06-01T09:45:05Z",
      "name": "openclaw 2026.6.1-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.1"
    },
    {
      "tag_name": "v2026.5.31-beta.4",
      "published_at": "2026-06-01T02:04:59Z",
      "name": "openclaw 2026.5.31-beta.4",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.4"
    },
    {
      "tag_name": "v2026.5.31-beta.3",
      "published_at": "2026-05-31T19:19:39Z",
      "name": "openclaw 2026.5.31-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.3"
    },
    {
      "tag_name": "v2026.5.31-beta.2",
      "published_at": "2026-05-31T18:17:21Z",
      "name": "openclaw 2026.5.31-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.2"
    },
    {
      "tag_name": "v2026.5.31-beta.1",
      "published_at": "2026-05-31T17:44:50Z",
      "name": "openclaw 2026.5.31-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.1"
    }
  ],
  "featureItems": [
    "Skills: let proposals carry approved support files under standard skill folders, with scanner, hash, and rollback safeguards. Thanks @shakkernerd. [v2026.6.1-beta.1]",
    "Skills: add Skill Workshop with pending proposals, CLI/Gateway review actions, rollback metadata, and the `skill_workshop` agent tool. Thanks @shakkernerd. [v2026.6.1-beta.1]",
    "Skill Workshop: add the Control UI navigation, styled dashboard, proposal today view, revision dialog, file preview modal, searchable preview files, reusable session handoff, and localized strings. [v2026.6.1-beta.1]",
    "iOS: add hosted push relay defaults, realtime Talk playback, and a guarded WebSocket ping path for more reliable mobile sessions. (#88096, #88105, #88231) [v2026.6.1-beta.1]",
    "iOS: support native iPad display layouts. [v2026.6.1-beta.1]",
    "Workboard: add orchestration primitives and agent coordination tools for multi-agent planning and run tracking. (#87469) [v2026.6.1-beta.1]",
    "Code mode: add internal namespaces for scoped agent/global sessions and exact namespace tool dispatch. (#88043) [v2026.6.1-beta.1]",
    "Code mode: add MCP API files and docs for code-mode integrations. [v2026.6.1-beta.1]"
  ],
  "fixItems": [
    "Cron: keep update delivery validation scoped, harden restart state, and retire MCP runtimes on isolated cron cleanup. [v2026.6.1-beta.1]",
    "Memory: serialize QMD update/embed writes per store, preserve phase signals on read errors, harden envelope metadata sanitization, and rewrite generated transcript paths on rollover so memory/search state survives concurrent gateway and CLI activity. (#66339, #85931) Thanks @openperf and @amittell. [v2026.6.1-beta.1]",
    "Security/config parsing: reject unsafe OAuth/token lifetimes, retry-after delays, inbound timestamps, response body sizes, command timeout config, sandbox observer token TTLs, and gateway WebSocket calls after close. [v2026.6.1-beta.1]",
    "Gateway/session state: list commands from the Gateway plugin registry, harden MCP loopback tool schemas, hide phantom agent-store rows from `sessions.list`, make task persistence failures explicit, and carry session UUIDs on interactive dispatch events. [v2026.6.1-beta.1]",
    "Performance: prebuild QA runtime probes with generated plugin assets but without CLI startup metadata. [v2026.6.1-beta.1]",
    "Performance: skip declaration bundling for runtime-only CLI startup and gateway watch build profiles. [v2026.6.1-beta.1]",
    "Performance: reuse prepared provider handles, strict tool schemas, gateway runtime metadata, session maintenance config, plugin metadata, bundled skill allowlists, package-local plugin artifacts, single-entry store writes, and validated/serialized session prompt blobs. [v2026.6.1-beta.1]",
    "Cron: keep update delivery validation scoped, harden restart state, and retire MCP runtimes on isolated cron cleanup. [v2026.5.31-beta.4]"
  ],
  "topScopes": [
    {
      "scope": "refactor",
      "count": 109
    },
    {
      "scope": "ui",
      "count": 84
    },
    {
      "scope": "fix",
      "count": 57
    },
    {
      "scope": "ci",
      "count": 32
    },
    {
      "scope": "e2e",
      "count": 29
    },
    {
      "scope": "agents",
      "count": 27
    },
    {
      "scope": "test",
      "count": 26
    },
    {
      "scope": "feat",
      "count": 20
    }
  ],
  "headlineCommits": [
    "fix(repro): clean webchat tts proof artifacts",
    "refactor: share startup memory test helpers",
    "fix(e2e): bound cron mcp probe waits",
    "refactor: share startup secrets test helpers",
    "fix(e2e): clean timed-out runtime commands",
    "refactor: share probe request dispatch helper",
    "refactor: share talk transcription relay test setup",
    "fix(codex): abort app-server thread startup cleanly"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
