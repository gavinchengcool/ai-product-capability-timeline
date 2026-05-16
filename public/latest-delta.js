window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-16T20:51:59.037643+08:00",
  "window": {
    "start_local": "2026-05-15T20:51:59.037643+08:00",
    "end_local": "2026-05-16T20:51:59.037643+08:00",
    "start_utc": "2026-05-15T12:51:59Z",
    "end_utc": "2026-05-16T12:51:59Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 372311,
    "forks": 77135,
    "open_issues": 7016,
    "pushed_at": "2026-05-16T12:51:52Z"
  },
  "summary": {
    "commitCount": 325,
    "releaseCount": 2,
    "stableReleaseCount": 0,
    "betaReleaseCount": 2,
    "stars": 372311,
    "forks": 77135,
    "openIssues": 7016
  },
  "releases": [
    {
      "tag_name": "v2026.5.16-beta.2",
      "published_at": "2026-05-16T11:29:05Z",
      "name": "openclaw 2026.5.16-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.2"
    },
    {
      "tag_name": "v2026.5.16-beta.1",
      "published_at": "2026-05-16T01:33:32Z",
      "name": "openclaw 2026.5.16-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.1"
    }
  ],
  "featureItems": [
    "Providers/xAI: add xAI Grok OAuth login for SuperGrok subscribers, letting `xai/*` models and xAI media/tool providers authenticate without `XAI_API_KEY`. [v2026.5.16-beta.2]",
    "CLI/cron: add `openclaw cron run --wait` with timeout and poll interval controls, plus exact `cron.runs --run-id` filtering so automation can block on one queued manual run. (#81929) Thanks @ificator. [v2026.5.16-beta.2]",
    "Telegram/group chat: add opt-in `messages.groupChat.ambientTurns: \"room_event\"` handling so always-on ambient chatter can run as quiet room context and speak visibly only via the message tool. (#81317) Thanks @obviyus. [v2026.5.16-beta.2]",
    "Telegram/group chat: add opt-in `messages.groupChat.ambientTurns: \"room_event\"` handling so always-on ambient chatter can run as quiet room context and speak visibly only via the message tool. (#81317) Thanks @obviyus. [v2026.5.16-beta.1]",
    "feat(gateway): add restart trace instrumentation",
    "changelog: dedupe MCP cancellation bullets, add Fixes #82424",
    "OC Path: add dry-run diff output (#81437)",
    "feat(codex): bind context-engine projections to codex threads (#82351)"
  ],
  "fixItems": [
    "Cron: reject empty scheduled main/isolated payloads before persisting jobs, keeping runtime stores compatible with malformed-row hardening. [v2026.5.16-beta.2]",
    "fix: carry gateway restart trace across respawn (#82396) (thanks @samzong)",
    "fix: normalize Xiaomi array tool schemas (#82575)",
    "fix(slack): clarify mention prompt guidance",
    "fix: finalize memory slot warning",
    "fix(config): keep blocked memory slots fatal",
    "fix(config): warn for missing official memory slot",
    "fix(gateway): quiet startup retry closes"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 58
    },
    {
      "scope": "test",
      "count": 44
    },
    {
      "scope": "docs",
      "count": 19
    },
    {
      "scope": "codex",
      "count": 15
    },
    {
      "scope": "agents",
      "count": 13
    },
    {
      "scope": "telegram",
      "count": 13
    },
    {
      "scope": "gateway",
      "count": 12
    },
    {
      "scope": "plugins",
      "count": 11
    }
  ],
  "headlineCommits": [
    "fix: carry gateway restart trace across respawn (#82396) (thanks @samzong)",
    "docs: document gateway restart trace (#82396) (thanks @samzong)",
    "feat(gateway): add restart trace instrumentation",
    "fix: normalize Xiaomi array tool schemas (#82575)",
    "docs: update changelog for Slack mention hints (#82152)",
    "fix(slack): clarify mention prompt guidance",
    "fix: finalize memory slot warning",
    "fix(config): keep blocked memory slots fatal"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
