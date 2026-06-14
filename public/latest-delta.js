window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-06-14T21:22:32.315883+08:00",
  "window": {
    "start_local": "2026-06-13T21:22:32.315883+08:00",
    "end_local": "2026-06-14T21:22:32.315883+08:00",
    "start_utc": "2026-06-13T13:22:32Z",
    "end_utc": "2026-06-14T13:22:32Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 378652,
    "forks": 79184,
    "open_issues": 7088,
    "pushed_at": "2026-06-14T13:18:54Z"
  },
  "summary": {
    "commitCount": 172,
    "releaseCount": 1,
    "stableReleaseCount": 0,
    "betaReleaseCount": 1,
    "stars": 378652,
    "forks": 79184,
    "openIssues": 7088
  },
  "releases": [
    {
      "tag_name": "v2026.6.8-beta.1",
      "published_at": "2026-06-13T21:49:06Z",
      "name": "openclaw 2026.6.8-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1"
    }
  ],
  "featureItems": [
    "Providers/models: add GLM-5.2 support and Claude Haiku 4.5 catalog entries while keeping provider-qualified model IDs normalized across OpenRouter and Google Vertex paths. (#92796, #90116, #92627, #91218) Thanks @arkyu2077, @liuhao1024, and @bymle. [v2026.6.8-beta.1]",
    "Agent commands: support `/btw` in CLI-backed sessions and keep CLI usage-error exits classified as usage failures instead of successful runs. (#92669, #92162) Thanks @joshavant and @Pandah97. [v2026.6.8-beta.1]",
    "Usage hooks: add built-in full footer rendering, default footer templates, per-turn usage state, credential-aware limits, and fixed-decimal formatting for usage-bar templates. (#92657, #89835, #89629) Thanks @Marvinthebored. [v2026.6.8-beta.1]",
    "Add diagnostics OTEL capability contract tests (#92045)",
    "feat: add tool search directory mode",
    "feat(browser): extend --labels overlay to full-page and element captures (#92834)",
    "feat(providers): add GLM-5.2 support (#92796)",
    "feat: make workspace files panel collapsible"
  ],
  "fixItems": [
    "fix(agents): recover genericized Anthropic thinking errors (#92916)",
    "fix(release): preserve child release check refs",
    "fix(auto-reply): strip delivery hints from leading metadata",
    "fix(plugin-sdk): expose delivery hints without utility imports",
    "fix(auto-reply): share message-tool delivery hints",
    "fix(auto-reply): align message-tool progress gating",
    "fix(auto-reply): deliver channel message-tool final replies",
    "fix(lmstudio): honor thinking off for binary reasoning models (#92002)"
  ],
  "topScopes": [
    {
      "scope": "gateway",
      "count": 16
    },
    {
      "scope": "telegram",
      "count": 15
    },
    {
      "scope": "usage",
      "count": 9
    },
    {
      "scope": "agents",
      "count": 8
    },
    {
      "scope": "openai",
      "count": 7
    },
    {
      "scope": "release",
      "count": 6
    },
    {
      "scope": "auto-reply",
      "count": 6
    },
    {
      "scope": "fix",
      "count": 6
    }
  ],
  "headlineCommits": [
    "refactor: add session accessor seam with gateway consumer (#90463)",
    "fix(agents): recover genericized Anthropic thinking errors (#92916)",
    "fix(release): preserve child release check refs",
    "fix(auto-reply): strip delivery hints from leading metadata",
    "fix(plugin-sdk): expose delivery hints without utility imports",
    "fix(auto-reply): share message-tool delivery hints",
    "test(auto-reply): trim duplicate progress assertion",
    "test(auto-reply): assert allowed suppressed progress gating"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
