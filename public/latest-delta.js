window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-04T21:16:24.335572+08:00",
  "window": {
    "start_local": "2026-05-03T21:16:24.335572+08:00",
    "end_local": "2026-05-04T21:16:24.335572+08:00",
    "start_utc": "2026-05-03T13:16:24Z",
    "end_utc": "2026-05-04T13:16:24Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 368131,
    "forks": 75801,
    "open_issues": 6789,
    "pushed_at": "2026-05-04T13:13:45Z"
  },
  "summary": {
    "commitCount": 561,
    "releaseCount": 4,
    "stableReleaseCount": 2,
    "betaReleaseCount": 2,
    "stars": 368131,
    "forks": 75801,
    "openIssues": 6789
  },
  "releases": [
    {
      "tag_name": "v2026.5.3-1",
      "published_at": "2026-05-04T09:35:36Z",
      "name": "openclaw 2026.5.3-1",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-1"
    },
    {
      "tag_name": "v2026.5.3",
      "published_at": "2026-05-04T07:01:29Z",
      "name": "OpenClaw 2026.5.3",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.3"
    },
    {
      "tag_name": "v2026.5.3-beta.3",
      "published_at": "2026-05-04T02:20:18Z",
      "name": "openclaw 2026.5.3-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.3"
    },
    {
      "tag_name": "v2026.5.3-beta.2",
      "published_at": "2026-05-03T21:26:05Z",
      "name": "OpenClaw 2026.5.3 beta 2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.2"
    }
  ],
  "featureItems": [
    "Channels/streaming: add unified `streaming.mode: \"progress\"` drafts with auto single-word status labels and shared progress configuration across Discord, Telegram, Matrix, Slack, and Microsoft Teams. [v2026.5.3]",
    "Agents/commands: add `/steer <message>` for queue-independent steering of the active current-session run without starting a new turn when the session is idle. (#76934) [v2026.5.3]",
    "Tools/BTW: add `/side` as a text and native slash-command alias for `/btw` side questions. [v2026.5.3]",
    "QA/Mantis: add a `pnpm openclaw qa mantis discord-smoke` runner and manual GitHub workflow that verify the Mantis Discord bot can see the configured guild/channel, post a smoke message, add a reaction, and upload artifacts. [v2026.5.3]",
    "QA/Slack: add a Slack live transport QA runner with canary and mention-gating coverage for the private bot-to-bot harness. Thanks @vincentkoc. [v2026.5.3]",
    "Gateway/performance: lazy-load early runtime discovery, shutdown hooks, cron, channel-config schema metadata, restart sentinels, and maintenance timers after readiness; trim duplicate plugin auto-enable work and add startup CPU/profile controls. [v2026.5.3]",
    "Channels/WhatsApp: support explicit WhatsApp Channel/Newsletter `@newsletter` outbound message targets with channel session metadata instead of DM routing. Fixes #13417; carries forward the narrow outbound target idea from #13424. Thanks @vincentkoc and @agentz-manfred. [v2026.5.3]",
    "Exec approvals: add a tree-sitter-backed shell command explainer for future approval and command-review surfaces. (#75004) Thanks @jesse-merhi. [v2026.5.3]"
  ],
  "fixItems": [
    "QA/Matrix: keep the mock OpenAI tool-progress provider aligned with exact-marker Matrix prompts so the hardened live preview scenario still forces a deterministic read before final delivery. Thanks @vincentkoc. [v2026.5.3]",
    "QA/Matrix: keep the mock OpenAI tool-progress provider aligned with exact-marker Matrix prompts so the hardened live preview scenario still forces a deterministic read before final delivery. Thanks @vincentkoc. [v2026.5.3-beta.3]",
    "fix: refresh stale codex auth profile routing",
    "fix: proxy direct APNs HTTP2 sessions (#74905)",
    "test: harden plugin and UI isolation checks",
    "fix(types): wire plugin package metadata",
    "fix(gateway): clarify systemd service scope",
    "fix(plugins): clean replaced managed installs"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 71
    },
    {
      "scope": "ui",
      "count": 49
    },
    {
      "scope": "plugins",
      "count": 41
    },
    {
      "scope": "test",
      "count": 27
    },
    {
      "scope": "docs",
      "count": 27
    },
    {
      "scope": "qa",
      "count": 25
    },
    {
      "scope": "ci",
      "count": 24
    },
    {
      "scope": "agents",
      "count": 20
    }
  ],
  "headlineCommits": [
    "test: repair current main checks",
    "chore(ui): refresh fa control ui locale",
    "chore(ui): refresh nl control ui locale",
    "chore(ui): refresh th control ui locale",
    "chore(ui): refresh vi control ui locale",
    "chore(ui): refresh pl control ui locale",
    "chore(ui): refresh id control ui locale",
    "chore(ui): refresh uk control ui locale"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
