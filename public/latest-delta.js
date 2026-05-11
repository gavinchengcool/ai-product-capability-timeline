window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-11T22:15:55.533216+08:00",
  "window": {
    "start_local": "2026-05-10T22:15:55.533216+08:00",
    "end_local": "2026-05-11T22:15:55.533216+08:00",
    "start_utc": "2026-05-10T14:15:55Z",
    "end_utc": "2026-05-11T14:15:55Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 370815,
    "forks": 76640,
    "open_issues": 7374,
    "pushed_at": "2026-05-11T14:15:42Z"
  },
  "summary": {
    "commitCount": 1713,
    "releaseCount": 2,
    "stableReleaseCount": 0,
    "betaReleaseCount": 2,
    "stars": 370815,
    "forks": 76640,
    "openIssues": 7374
  },
  "releases": [
    {
      "tag_name": "v2026.5.10-beta.3",
      "published_at": "2026-05-11T03:28:30Z",
      "name": "openclaw 2026.5.10-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.3"
    },
    {
      "tag_name": "v2026.5.10-beta.2",
      "published_at": "2026-05-10T18:18:58Z",
      "name": "openclaw 2026.5.10-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.2"
    }
  ],
  "featureItems": [
    "Models: add provider-level `localService` startup for on-demand local model servers before OpenAI-compatible requests, including one-shot model probes. [v2026.5.10-beta.3]",
    "Context: add `/context map` to send a treemap image of the current session context contributors. (#79867) [v2026.5.10-beta.3]",
    "Slack: add `unfurlLinks` and `unfurlMedia` config for bot `chat.postMessage` replies, including per-account overrides, so Slack link and media previews can be suppressed without workspace-wide settings. Fixes #48435. (#80145) Thanks @esegev1 and @HemantSudarshan. [v2026.5.10-beta.3]",
    "Slack: add explicit `replyBroadcast` support for text and Block Kit thread replies so agents can opt into Slack's parent-channel `reply_broadcast` behavior. (#64365) Thanks @tony88331. [v2026.5.10-beta.3]",
    "Plugin SDK: deprecate public subpaths currently used by only one or two bundled plugin owners, keeping them importable while steering new plugin code to focused shared SDK seams or plugin-owned APIs. [v2026.5.10-beta.3]",
    "QA/Mantis: add Telegram live PR evidence automation with Convex-leased credentials, Crabbox transcript capture, motion GIF previews, and inline PR comments. [v2026.5.10-beta.3]",
    "QA/Mantis: add a Telegram desktop scenario builder that leases Crabbox, installs native Telegram Desktop, configures an OpenClaw Telegram gateway with leased bot credentials, and records VNC screenshot/video artifacts. [v2026.5.10-beta.3]",
    "Discord/voice: add realtime voice diagnostics for speaker turns, playback resets, barge-in detection, and audio cutoff analysis. [v2026.5.10-beta.3]"
  ],
  "fixItems": [
    "Security/audit: honor `tools.byProvider[\"provider/model\"].deny` when reporting small-model web/browser exposure, so per-model OpenRouter mitigations clear the `models.small_params` exposure signal. Fixes #80118. [v2026.5.10-beta.3]",
    "Security/audit: honor `tools.byProvider[\"provider/model\"].deny` when reporting small-model web/browser exposure, so per-model OpenRouter mitigations clear the `models.small_params` exposure signal. Fixes #80118. [v2026.5.10-beta.2]",
    "fix(gateway): dedupe inflight outbound requests (#68341)",
    "fix(plugin-sdk): restore compact progress draft cap",
    "fix(memory-core): cap MEMORY.md size during dreaming promotions to prevent unbounded growth (#73691)",
    "fix: harden gh config discovery",
    "fix(doctor): surface GH_CONFIG_DIR hint when gh auth lives at a different HOME",
    "fix(cron): mark manual cron runs active (#78243)"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 1386
    },
    {
      "scope": "fix",
      "count": 35
    },
    {
      "scope": "docs",
      "count": 29
    },
    {
      "scope": "codex",
      "count": 29
    },
    {
      "scope": "ci",
      "count": 19
    },
    {
      "scope": "ci(mantis)",
      "count": 16
    },
    {
      "scope": "slack",
      "count": 15
    },
    {
      "scope": "telegram",
      "count": 14
    }
  ],
  "headlineCommits": [
    "test: tighten channel assertion checks",
    "test: verify default account warning copy",
    "test: spell out gateway send responses",
    "test: cover exec safe bin warning text",
    "fix(gateway): dedupe inflight outbound requests (#68341)",
    "test: pin realtime relay requests",
    "test: tighten cli gateway assertions",
    "test: pin browser state errors"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
