window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-23T20:53:05.387117+08:00",
  "window": {
    "start_local": "2026-05-22T20:53:05.387117+08:00",
    "end_local": "2026-05-23T20:53:05.387117+08:00",
    "start_utc": "2026-05-22T12:53:05Z",
    "end_utc": "2026-05-23T12:53:05Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 374102,
    "forks": 77768,
    "open_issues": 7178,
    "pushed_at": "2026-05-23T12:52:08Z"
  },
  "summary": {
    "commitCount": 269,
    "releaseCount": 1,
    "stableReleaseCount": 0,
    "betaReleaseCount": 1,
    "stars": 374102,
    "forks": 77768,
    "openIssues": 7178
  },
  "releases": [
    {
      "tag_name": "v2026.5.22-beta.1",
      "published_at": "2026-05-23T09:59:56Z",
      "name": "openclaw 2026.5.22-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.22-beta.1"
    }
  ],
  "featureItems": [
    "QA-Lab/diagnostics: extend the OpenTelemetry smoke harness to prove trace, metric, and log export, and add first-class Prometheus and observability smoke aliases. [v2026.5.22-beta.1]",
    "Plugin SDK: add a generic channel-message poll sender so channel plugins can expose poll delivery without depending on channel-specific SDK facades. [v2026.5.22-beta.1]",
    "Maintainer skills: add `openclaw-landable-bug-sweep` for producing five small, reviewed, CI-green OpenClaw bugfix PRs from issue/PR sweeps. [v2026.5.22-beta.1]",
    "Control UI/chat: add search and Load More pagination to the chat session picker, keeping initial session loads bounded while making older conversations reachable. (#85237) Thanks @amknight. [v2026.5.22-beta.1]",
    "xAI/Grok: reuse xAI OAuth auth profiles for Grok `web_search`, thread active-agent auth through web search, add Grok model aliases, and let media providers declare default operation timeouts. (#85182) Thanks @fuller-stack-dev. [v2026.5.22-beta.1]",
    "Plugin SDK: add row-level session workflow helpers and deprecate `loadSessionStore` so plugins can read and patch sessions without depending on the legacy whole-store shape. (#84693) Thanks @efpiva. [v2026.5.22-beta.1]",
    "Plugins/SDK: add a general `embeddingProviders` capability contract and registration API so embeddings can become a reusable provider surface outside memory-specific adapters. [v2026.5.22-beta.1]",
    "QA-Lab: add curated mock JSONL replay fixtures and first-drift reporting for runtime-parity audits. (#80323, refs #80176) Thanks @100yenadmin. [v2026.5.22-beta.1]"
  ],
  "fixItems": [
    "fix(integrations): enforce channel read target allowlists [AI]. (#84982) Thanks @pgondhi987. [v2026.5.22-beta.1]",
    "fix: constrain Windows task script names [AI]. (#85064) Thanks @pgondhi987. [v2026.5.22-beta.1]",
    "fix(config): validate browser sandbox bind sources [AI]. (#84799) Thanks @pgondhi987. [v2026.5.22-beta.1]",
    "fix(cron): route topic targets through channel plugins",
    "fix(agents): simplify subagent completion handoff",
    "fix(release): allow large beta smoke run lists",
    "fix(bootstrap): guard bootstrap name checks against undefined names (#85523) (#85615)",
    "fix(cli): waitForever must keep the event loop alive (#85694)"
  ],
  "topScopes": [
    {
      "scope": "ui",
      "count": 26
    },
    {
      "scope": "fix",
      "count": 25
    },
    {
      "scope": "docs",
      "count": 24
    },
    {
      "scope": "ci",
      "count": 16
    },
    {
      "scope": "gateway",
      "count": 13
    },
    {
      "scope": "release",
      "count": 9
    },
    {
      "scope": "installer",
      "count": 9
    },
    {
      "scope": "ci(release)",
      "count": 8
    }
  ],
  "headlineCommits": [
    "fix(cron): route topic targets through channel plugins",
    "fix(agents): simplify subagent completion handoff",
    "fix(release): allow large beta smoke run lists",
    "ci(release): isolate npm publish concurrency",
    "ci(release): allow beta publish after npm preflight",
    "ci(release): retry child workflow polling",
    "ci(release): poll child workflows through actions api",
    "fix(bootstrap): guard bootstrap name checks against undefined names (#85523) (#85615)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
