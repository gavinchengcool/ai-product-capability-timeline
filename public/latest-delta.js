window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-10-09T02:02:58.807189+08:00",
  "window": {
    "start_local": "2026-10-08T02:02:58.807189+08:00",
    "end_local": "2026-10-09T02:02:58.807189+08:00",
    "start_utc": "2026-10-07T18:02:58Z",
    "end_utc": "2026-10-08T18:02:58Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 391456,
    "forks": 82298,
    "open_issues": 9548,
    "pushed_at": "2026-10-08T18:02:45Z"
  },
  "summary": {
    "commitCount": 393,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 391456,
    "forks": 82298,
    "openIssues": 9548
  },
  "releases": [
    {
      "tag_name": "v2026.9.9",
      "published_at": "2026-10-08T10:23:23Z",
      "name": "openclaw 2026.9.9",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.9.9"
    },
    {
      "tag_name": "v2026.10.1-beta.2",
      "published_at": "2026-10-08T00:41:22Z",
      "name": "openclaw 2026.10.1-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2"
    }
  ],
  "featureItems": [
    "feat(ui): choose unlocked Lobsterdex tab icons (#166325)",
    "feat(ui): use agent avatars for browser tab icons (#165201)",
    "feat: prepare required placement through session owners (#166616)",
    "feat(ios): connect Gateway through native Cloudflare Access (#147244)",
    "feat(ios): own Cloudflare Access browser and profile admission (#147238)",
    "feat: enforce required worker destinations before dispatch (#166613)",
    "feat(catalog): publish curated recommended models per provider in catalog v2 (#166737)",
    "feat(anthropic): support Claude Haiku 5.5 (#166706)"
  ],
  "fixItems": [
    "fix(ci): avoid redundant release validation work and delayed failures (#167356)",
    "perf(acp): move Gateway session metadata to the shared worker (#167086)",
    "perf(sessions): batch manual transcript maintenance in workers (#167070)",
    "fix(sessions): distinguish slow database holders from queued writers (#167332)",
    "fix: hide active memory recall rows when system sessions are hidden (#167357)",
    "perf(agents): reuse verified history images across session turns (#167355)",
    "fix(gateway): report an unreadable state database in deep status (#167352)",
    "perf: reduce SQLite work from idle periodic sweeps (#167268)"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 65
    },
    {
      "scope": "ui",
      "count": 24
    },
    {
      "scope": "gateway",
      "count": 21
    },
    {
      "scope": "agents",
      "count": 20
    },
    {
      "scope": "sessions",
      "count": 17
    },
    {
      "scope": "refactor",
      "count": 12
    },
    {
      "scope": "ci",
      "count": 11
    },
    {
      "scope": "models",
      "count": 11
    }
  ],
  "headlineCommits": [
    "fix(ci): avoid redundant release validation work and delayed failures (#167356)",
    "perf(acp): move Gateway session metadata to the shared worker (#167086)",
    "improve(models): avoid loading unrequested plugin catalogs (#167359)",
    "test(discord): align quiet progress assertions with work status",
    "perf(sessions): batch manual transcript maintenance in workers (#167070)",
    "fix(sessions): distinguish slow database holders from queued writers (#167332)",
    "fix: hide active memory recall rows when system sessions are hidden (#167357)",
    "perf(agents): reuse verified history images across session turns (#167355)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
