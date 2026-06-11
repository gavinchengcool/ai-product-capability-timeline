window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-06-11T23:26:48.035207+08:00",
  "window": {
    "start_local": "2026-06-10T23:26:48.035207+08:00",
    "end_local": "2026-06-11T23:26:48.035207+08:00",
    "start_utc": "2026-06-10T15:26:48Z",
    "end_utc": "2026-06-11T15:26:48Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 378170,
    "forks": 79088,
    "open_issues": 8014,
    "pushed_at": "2026-06-11T15:26:20Z"
  },
  "summary": {
    "commitCount": 209,
    "releaseCount": 1,
    "stableReleaseCount": 0,
    "betaReleaseCount": 1,
    "stars": 378170,
    "forks": 79088,
    "openIssues": 8014
  },
  "releases": [
    {
      "tag_name": "v2026.6.6-beta.1",
      "published_at": "2026-06-10T19:33:39Z",
      "name": "OpenClaw 2026.6.6-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.1"
    }
  ],
  "featureItems": [
    "Observability: allow trusted diagnostics channels to capture tool input/output content, add first-assistant-event traces, and warn on slow initial replies. (#91256, #91568, #91583) Thanks @amknight. [v2026.6.6-beta.1]",
    "Channels/mobile: add the QQBot group mention toggle, improve iPad and iPhone control surfaces, and expose the active connection host in the TUI footer. (#91423, #91557, #89909) Thanks @cxyhhhhh, @Solvely-Colin, and @baskduf. [v2026.6.6-beta.1]",
    "feat(skills): allow trusted workshop symlink targets",
    "feat(auto-reply): emit durable tool summaries from CLI runner tool results",
    "feat(telegram): route verbose progress payloads durably instead of into the streaming draft",
    "feat(auto-reply): deliver inter-tool commentary as standalone verbose progress messages",
    "feat(cron): add readable ISO time fields to `cron runs` JSON output (#91471)",
    "Issue 89661: add unit test"
  ],
  "fixItems": [
    "Performance: prewarm TUI runtime plugins, deduplicate plugin auto-enable fanout, trim dense text-delta snapshots, and reuse prepared startup model metadata. (#90782, #89978, #91580, #91531) Thanks @RomneyDa and @ai-hpc. [v2026.6.6-beta.1]",
    "test: harden stalled websocket cleanup",
    "fix: validate workshop support symlink writes",
    "fix: gate Skill Workshop symlink writes",
    "fix: handle explicit silent assistant replies (#92073)",
    "fix(wizard): report keyless web search providers as ready",
    "fix(installer): stop after failed Node package installs",
    "fix(channel): harden local setup trust (#92175)"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 33
    },
    {
      "scope": "foundry",
      "count": 20
    },
    {
      "scope": "reply",
      "count": 16
    },
    {
      "scope": "agents",
      "count": 12
    },
    {
      "scope": "providers",
      "count": 7
    },
    {
      "scope": "cron",
      "count": 6
    },
    {
      "scope": "ci",
      "count": 6
    },
    {
      "scope": "release",
      "count": 6
    }
  ],
  "headlineCommits": [
    "test: harden stalled websocket cleanup",
    "fix: validate workshop support symlink writes",
    "fix: gate Skill Workshop symlink writes",
    "feat(skills): allow trusted workshop symlink targets",
    "fix: handle explicit silent assistant replies (#92073)",
    "fix(wizard): report keyless web search providers as ready",
    "fix(installer): stop after failed Node package installs",
    "fix(channel): harden local setup trust (#92175)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
