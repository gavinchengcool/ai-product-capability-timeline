window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-06-06T21:01:31.719137+08:00",
  "window": {
    "start_local": "2026-06-05T21:01:31.719137+08:00",
    "end_local": "2026-06-06T21:01:31.719137+08:00",
    "start_utc": "2026-06-05T13:01:31Z",
    "end_utc": "2026-06-06T13:01:31Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 377210,
    "forks": 78839,
    "open_issues": 7818,
    "pushed_at": "2026-06-06T12:54:45Z"
  },
  "summary": {
    "commitCount": 112,
    "releaseCount": 1,
    "stableReleaseCount": 0,
    "betaReleaseCount": 1,
    "stars": 377210,
    "forks": 78839,
    "openIssues": 7818
  },
  "releases": [
    {
      "tag_name": "v2026.6.5-beta.1",
      "published_at": "2026-06-06T03:36:51Z",
      "name": "openclaw 2026.6.5-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.1"
    }
  ],
  "featureItems": [
    "Search/providers: add the Parallel bundled web-search plugin, live provider tests, registration contracts, onboarding/docs wiring, and guarded `api.parallel.ai/v1/search` support. (#85158) Thanks @NormallyGaussian. [v2026.6.5-beta.1]",
    "Matrix/channels: add voice-message preflight and thread-aware read/reply behavior, including Matrix QA scenario wiring and docs for voice-message behavior. (#78016, #90415) [v2026.6.5-beta.1]",
    "Google Chat/channels: add native approval card actions and click handling so Google Chat approvals use platform-native cards instead of generic message flow. [v2026.6.5-beta.1]",
    "Memory: QMD search can use the new rerank toggle, and memory adapter status uses the resolved default model identity when checking plain status. (#61834) [v2026.6.5-beta.1]",
    "feat(android): brand onboarding welcome screen",
    "feat(parallel): add Parallel as a bundled web_search provider (#85158)",
    "feat(matrix): handle voice preflight and threads (#90415)"
  ],
  "fixItems": [
    "Security/config/tooling: guard MCP HTTP redirects, protect global agent config defaults, and keep release/test/tooling proof failures bounded and explicit. (#89732, #90145) [v2026.6.5-beta.1]",
    "fix(talk): resolve realtime provider secret refs (#90914)",
    "fix(memory): fail fast when embeddings provider is unavailable",
    "fix(agents): keep safe tool images without native backend",
    "fix(agents): emit terminal abort lifecycle metadata",
    "fix(android): clarify nearby gateway discovery state",
    "fix(android): show configured provider readiness",
    "fix(android): reconnect saved gateway after disconnect"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 21
    },
    {
      "scope": "test",
      "count": 21
    },
    {
      "scope": "android",
      "count": 15
    },
    {
      "scope": "ios",
      "count": 12
    },
    {
      "scope": "deps",
      "count": 5
    },
    {
      "scope": "agents",
      "count": 4
    },
    {
      "scope": "codex",
      "count": 3
    },
    {
      "scope": "changelog",
      "count": 3
    }
  ],
  "headlineCommits": [
    "fix(talk): resolve realtime provider secret refs (#90914)",
    "fix(memory): fail fast when embeddings provider is unavailable",
    "fix(agents): keep safe tool images without native backend",
    "fix(agents): emit terminal abort lifecycle metadata",
    "test(live): tolerate ARM provider drift",
    "feat(android): brand onboarding welcome screen",
    "fix(android): clarify nearby gateway discovery state",
    "chore(android): simplify onboarding entry actions"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
