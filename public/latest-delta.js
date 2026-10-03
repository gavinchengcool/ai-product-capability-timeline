window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-10-03T23:17:39.151457+08:00",
  "window": {
    "start_local": "2026-10-02T23:17:39.151457+08:00",
    "end_local": "2026-10-03T23:17:39.151457+08:00",
    "start_utc": "2026-10-02T15:17:39Z",
    "end_utc": "2026-10-03T15:17:39Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 391230,
    "forks": 82238,
    "open_issues": 9199,
    "pushed_at": "2026-10-03T15:17:09Z"
  },
  "summary": {
    "commitCount": 618,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 391230,
    "forks": 82238,
    "openIssues": 9199
  },
  "releases": [
    {
      "tag_name": "v2026.9.8",
      "published_at": "2026-10-03T03:21:47Z",
      "name": "openclaw 2026.9.8",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.9.8"
    }
  ],
  "featureItems": [
    "feat(plugins): refuse foreign live-owner SDK workspace mutations (routing 2/4 follow-up) (#164203)",
    "feat: prepare cloud workers for enterprise repositories (#160108)",
    "feat(diagnostics): record RPC response bytes and main-thread heap delta per method (#164335)",
    "feat(memory): let the memory slot own the pre-compaction flush (#162177)",
    "feat(state): incognito actor memory and Codex history routing (P5c, inactive) (#164224)",
    "feat(ui): show when a chat is waiting on subagents (#164190)",
    "feat(gateway): route pairing and default approvals through the live owner (#164075)",
    "feat(update): adopt immutable installations and prepare sealed generations without activating them (#163799)"
  ],
  "fixItems": [
    "fix(update): publish the repair deadline result when the Gateway is still starting (#164337)",
    "fix(cli): respect --format text when fetching web pages (#162036)",
    "fix(sessions): release discarded tool output backing strings (#164361)",
    "fix(cli): avoid hangs on FIFO config file inputs (#164161)",
    "fix: retain admitted agent context after auth refresh (#164340)",
    "fix(memory): session memory sync fails with too many SQL variables on large session stores (#164336)",
    "fix(codex): prevent stale native sessions from mutating successors (#164197)",
    "fix(gateway): serialize recovery source reads with publication"
  ],
  "topScopes": [
    {
      "scope": "gateway",
      "count": 55
    },
    {
      "scope": "test",
      "count": 50
    },
    {
      "scope": "fix",
      "count": 42
    },
    {
      "scope": "ui",
      "count": 33
    },
    {
      "scope": "agents",
      "count": 29
    },
    {
      "scope": "sessions",
      "count": 26
    },
    {
      "scope": "plugins",
      "count": 26
    },
    {
      "scope": "ci",
      "count": 20
    }
  ],
  "headlineCommits": [
    "refactor(tlon): remove unused request options (#164345)",
    "fix(update): publish the repair deadline result when the Gateway is still starting (#164337)",
    "fix(cli): respect --format text when fetching web pages (#162036)",
    "test(sessions,commands,cron,daemon): remove low-value tests (batch d177) (#164353)",
    "fix(sessions): release discarded tool output backing strings (#164361)",
    "test(startup): configure the historical webhook repair fixture",
    "refactor(secrets): move providerless refs to Doctor (#163350)",
    "chore(ui): refresh control ui locales (#164358)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
