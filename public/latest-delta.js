window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-09-02T23:25:59.293794+08:00",
  "window": {
    "start_local": "2026-09-01T23:25:59.293794+08:00",
    "end_local": "2026-09-02T23:25:59.293794+08:00",
    "start_utc": "2026-09-01T15:25:59Z",
    "end_utc": "2026-09-02T15:25:59Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 388624,
    "forks": 81602,
    "open_issues": 6058,
    "pushed_at": "2026-09-02T15:25:51Z"
  },
  "summary": {
    "commitCount": 583,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 388624,
    "forks": 81602,
    "openIssues": 6058
  },
  "releases": [
    {
      "tag_name": "v2026.8.2",
      "published_at": "2026-09-01T16:00:56Z",
      "name": "openclaw 2026.8.2",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.8.2"
    }
  ],
  "featureItems": [
    "**Chrome relay wake-up:** support standalone local relays that start on demand, share their paired browser with the Gateway, and remain available to other CDP clients when the Gateway disconnects; see the [Chrome extension guide](https://docs.openclaw.ai/tools/chrome-extension#standalone-direct-loopback-relay) for supported builds and setup. (#128379) [v2026.8.2]",
    "**Background sessions:** start work from New Session without leaving the page with `Cmd/Ctrl+Enter`, retain the selected local, cloud, or paired-device placement, and open the session from its completion notice; use `Cmd/Ctrl+Shift+Enter` when Modifier+Enter is already your normal send shortcut, while explicit Draft visibility still creates a draft. Related #128037. (#128050) Thanks @Takhoffman. [v2026.8.2]",
    "feat: prepare new-session names after idle typing (#133724)",
    "feat(config): add conditional set expectations (#136137)",
    "feat(approvals): make Allow Always durable for MCP tools on OpenClaw-configured servers (#136019)",
    "feat(macos): render Mermaid diagrams in native chat (#135746)",
    "feat(worktrees): raise managed checkout limit to 100 (#135885)",
    "feat(xai): surface SuperGrok usage stats (#135766)"
  ],
  "fixItems": [
    "fix(macos): let browser sidebar expand beyond half width (#136168)",
    "fix(android): mask credentials and refresh secret input state (#136352)",
    "fix(test): synchronize residual descendant readiness (#136185)",
    "fix(release): retain preflight artifact producer for publication (#136336)",
    "fix(test): join failed Gateway client acquisition cleanup (#136344)",
    "fix(packaging): make built package imports side-effect free (#136308)",
    "fix(ui): load heartbeat scratch into the read-only monitor field (#135508)",
    "fix(install): qualify npm 12 archives and prepared plugins (#136316)"
  ],
  "topScopes": [
    {
      "scope": "ui",
      "count": 56
    },
    {
      "scope": "fix",
      "count": 34
    },
    {
      "scope": "agents",
      "count": 34
    },
    {
      "scope": "test",
      "count": 28
    },
    {
      "scope": "plugins",
      "count": 22
    },
    {
      "scope": "ci",
      "count": 20
    },
    {
      "scope": "gateway",
      "count": 20
    },
    {
      "scope": "android",
      "count": 16
    }
  ],
  "headlineCommits": [
    "fix(macos): let browser sidebar expand beyond half width (#136168)",
    "fix(android): mask credentials and refresh secret input state (#136352)",
    "test(android): await outbox publication in branch fixture (#136335)",
    "fix(test): synchronize residual descendant readiness (#136185)",
    "test(ui): unify cloud workspace browser cleanup (#136353)",
    "fix(release): retain preflight artifact producer for publication (#136336)",
    "fix(test): join failed Gateway client acquisition cleanup (#136344)",
    "test(ui): remove vacuous activity receipt checks (#136351)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
