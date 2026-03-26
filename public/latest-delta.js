window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-03-26T20:43:42.066440+08:00",
  "window": {
    "start_local": "2026-03-25T20:43:42.066440+08:00",
    "end_local": "2026-03-26T20:43:42.066440+08:00",
    "start_utc": "2026-03-25T12:43:42Z",
    "end_utc": "2026-03-26T12:43:42Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 336874,
    "forks": 65977,
    "open_issues": 15676,
    "pushed_at": "2026-03-26T12:35:23Z"
  },
  "summary": {
    "commitCount": 86,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 336874,
    "forks": 65977,
    "openIssues": 15676
  },
  "releases": [
    {
      "tag_name": "v2026.3.24",
      "published_at": "2026-03-25T16:35:52Z",
      "name": "openclaw 2026.3.24",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.3.24"
    },
    {
      "tag_name": "v2026.3.24-beta.2",
      "published_at": "2026-03-25T14:11:48Z",
      "name": "openclaw 2026.3.24-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.3.24-beta.2"
    }
  ],
  "featureItems": [
    "Gateway/OpenAI compatibility: add `/v1/models` and `/v1/embeddings`, and forward explicit model overrides through `/v1/chat/completions` and `/v1/responses` for broader client and RAG compatibility. Thanks @vincentkoc. [v2026.3.24]",
    "Agents/tools: make `/tools` show the tools the current agent can actually use right now, add a compact default view with an optional detailed mode, and add a live \"Available Right Now\" section in the Control UI so it is easier to see what will work before you ask. [v2026.3.24]",
    "Microsoft Teams: migrate to the official Teams SDK and add AI-agent UX best practices including streaming 1:1 replies, welcome cards with prompt starters, feedback/reflection, informative status updates, typing indicators, and native AI labeling. (#51808) [v2026.3.24]",
    "Microsoft Teams: add message edit and delete support for sent messages, including in-thread fallbacks when no explicit target is provided. (#49925) [v2026.3.24]",
    "Skills/install metadata: add one-click install recipes to bundled skills (coding-agent, gh-issues, openai-whisper-api, session-logs, tmux, trello, weather) so the CLI and Control UI can offer dependency installation when requirements are missing. (#53411) Thanks @BunsDev. [v2026.3.24]",
    "Control UI/skills: add status-filter tabs (All / Ready / Needs Setup / Disabled) with counts, replace inline skill cards with a click-to-detail dialog showing requirements, toggle switch, install action, API key entry, source metadata, and homepage link. (#53411) Thanks @BunsDev. [v2026.3.24]",
    "Slack/interactive replies: restore rich reply parity for direct deliveries, auto-render simple trailing `Options:` lines as buttons/selects, improve Slack interactive setup defaults, and isolate reply controls from plugin interactive handlers. (#53389) Thanks @vincentkoc. [v2026.3.24]",
    "CLI/containers: add `--container` and `OPENCLAW_CONTAINER` to run `openclaw` commands inside a running Docker or Podman OpenClaw container. (#52651) Thanks @sallyom. [v2026.3.24]"
  ],
  "fixItems": [
    "Security/sandbox media dispatch: close the `mediaUrl`/`fileUrl` alias bypass so outbound tool and message actions cannot escape media-root restrictions. (#54034) [v2026.3.24]",
    "fix: surface provider-specific rate limit error message (#54433) (#54512)",
    "fix(bluebubbles): auto-allow private network for local serverUrl and add allowPrivateNetwork to channel schema",
    "fix(msteams): align feedback invoke authorization (#55108)",
    "fix(agents): enforce session_status guard after sessionId resolution (#55105)",
    "fix(discord): force fresh gateway reconnects (#54697)",
    "fix(extensions): route fetch calls through fetchWithSsrFGuard (#53929)",
    "fix: add slack upload-file action (#54987) (thanks @kevinlin-openai)"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 25
    },
    {
      "scope": "docs",
      "count": 6
    },
    {
      "scope": "test",
      "count": 4
    },
    {
      "scope": "msteams",
      "count": 3
    },
    {
      "scope": "feishu",
      "count": 3
    },
    {
      "scope": "build",
      "count": 3
    },
    {
      "scope": "ci",
      "count": 3
    },
    {
      "scope": "bluebubbles",
      "count": 2
    }
  ],
  "headlineCommits": [
    "docs: add beta release testing guidance",
    "test: fix bluebubbles attachment ssrf expectations",
    "fix: surface provider-specific rate limit error message (#54433) (#54512)",
    "Matrix: gate verification notices on DM access (#55122)",
    "fix(bluebubbles): auto-allow private network for local serverUrl and add allowPrivateNetwork to channel schema",
    "fix(msteams): align feedback invoke authorization (#55108)",
    "Telegram: enforce DM auth for callbacks (#55112)",
    "fix(agents): enforce session_status guard after sessionId resolution (#55105)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
