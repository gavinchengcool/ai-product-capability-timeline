window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-09-01T02:16:30.895135+08:00",
  "window": {
    "start_local": "2026-08-31T02:16:30.895135+08:00",
    "end_local": "2026-09-01T02:16:30.895135+08:00",
    "start_utc": "2026-08-30T18:16:30Z",
    "end_utc": "2026-08-31T18:16:30Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 388254,
    "forks": 81512,
    "open_issues": 5894,
    "pushed_at": "2026-08-31T18:15:56Z"
  },
  "summary": {
    "commitCount": 522,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 388254,
    "forks": 81512,
    "openIssues": 5894
  },
  "releases": [
    {
      "tag_name": "v2026.8.1",
      "published_at": "2026-08-31T03:30:51Z",
      "name": "OpenClaw 2026.8.1",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.8.1"
    }
  ],
  "featureItems": [
    "**Automatic self-learning:** capture strong reusable lessons and automatically apply scanner-approved new or Workshop-owned skills by default, while leaving user-authored skill changes pending and preserving explicit off or propose settings. (#115576) [v2026.8.1]",
    "**Conversation-bound automations and loops:** default new agent-turn automations to their originating conversation when creation has session context. Owner-only `/loop` supports fixed-interval or self-paced checks; context-free CLI/API creation stays isolated. (#114328) [v2026.8.1]",
    "**Named agent setup:** choose the first agent name during interactive onboarding or with `--agent-name`, migrate legacy main-session history to its clear owner, and reuse `main` as an ordinary agent ID after required doctor repairs. (#123521, #123609, #123424, #123349) [v2026.8.1]",
    "**Quick Chat and desktop setup:** add macOS dictation, paste-to-app and model controls, Linux agent switching and per-agent routing, and a more complete Linux onboarding flow. (#110994, #110285, #129815) [v2026.8.1]",
    "**Daytona sandboxes:** add a Daytona backend plugin for isolated cloud execution. (#121554) Thanks @mislavivanda and @Patrick-Erichsen. [v2026.8.1]",
    "**Agent interoperability:** add an opt-in A2A 1.0 channel plugin for authenticated text tasks, task polling, and messages to configured peer agents. (#130008) [v2026.8.1]",
    "**Email triggers:** start agent work from configured inbound IMAP mailboxes through a new plugin. (#130230) [v2026.8.1]",
    "**Approval surfaces:** show typed operation-scope summaries on channel cards, add native Teams approve/deny controls, and deliver opted-in PWA approval notifications. (#130116, #129997, #129348) Thanks @Takhoffman. [v2026.8.1]"
  ],
  "fixItems": [
    "fix(ci): record complete native UI file timings (#134283)",
    "perf(ui): prepare usage query predicates once (#134318)",
    "fix(update): recover the managed gateway after a failed CLI update (#119516)",
    "fix(ui): keep images visible during hard refresh (#134310)",
    "fix(sessions): avoid excessive history copies and preserve fork provenance (#134238)",
    "fix(test): preserve Git update fixture identity through postinstall (#134328)",
    "fix(agents): preserve nested tool result delivery state (#134056)",
    "perf(workers): streamline cloud startup and fix bootstrap archive races (#134043)"
  ],
  "topScopes": [
    {
      "scope": "ui",
      "count": 54
    },
    {
      "scope": "test",
      "count": 47
    },
    {
      "scope": "fix",
      "count": 32
    },
    {
      "scope": "docs",
      "count": 24
    },
    {
      "scope": "ci",
      "count": 23
    },
    {
      "scope": "agents",
      "count": 20
    },
    {
      "scope": "cli",
      "count": 16
    },
    {
      "scope": "gateway",
      "count": 15
    }
  ],
  "headlineCommits": [
    "test(tooling): reuse Periphery workflow code fixtures (#134350)",
    "fix(ci): record complete native UI file timings (#134283)",
    "test(macos): remove app profile source invariants (#134288)",
    "test(lmstudio): reuse oversized response source chunks (#134322)",
    "test(infra): load execution policy modules once per suite (#134319)",
    "perf(ui): prepare usage query predicates once (#134318)",
    "refactor: reuse prepared plugin facts during Gateway turns (#134290)",
    "fix(update): recover the managed gateway after a failed CLI update (#119516)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
