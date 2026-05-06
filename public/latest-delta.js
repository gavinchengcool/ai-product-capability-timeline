window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-06T21:23:07.982995+08:00",
  "window": {
    "start_local": "2026-05-05T21:23:07.982995+08:00",
    "end_local": "2026-05-06T21:23:07.982995+08:00",
    "start_utc": "2026-05-05T13:23:07Z",
    "end_utc": "2026-05-06T13:23:07Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 368920,
    "forks": 76052,
    "open_issues": 7234,
    "pushed_at": "2026-05-06T13:22:45Z"
  },
  "summary": {
    "commitCount": 370,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 368920,
    "forks": 76052,
    "openIssues": 7234
  },
  "releases": [
    {
      "tag_name": "v2026.5.5",
      "published_at": "2026-05-06T09:00:55Z",
      "name": "openclaw 2026.5.5",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.5"
    }
  ],
  "featureItems": [
    "feat: add user input blocking lifecycle gates (#75035)",
    "pdf: add Codex instructions for extraction fallback (#51329)",
    "feat(plugins): support npm pack installs",
    "changelog: add Matrix approval delivery retry entry (#78179)",
    "changelog: add xAI thinking-profile clamp entry",
    "feat(mantis): capture logged-in discord web evidence",
    "feat: adapt voice surfaces to talk events",
    "feat: unify browser realtime talk clients"
  ],
  "fixItems": [
    "Gateway/shutdown: report structured shutdown warnings and HTTP close timeout warnings through `ShutdownResult` while preserving lifecycle hook hardening. Carries forward #41296. Thanks @edenfunf. [v2026.5.5]",
    "Docker/Gateway: harden the gateway container by dropping `NET_RAW` and `NET_ADMIN` capabilities and enabling `no-new-privileges` in the bundled `docker-compose.yml`. Thanks @VintageAyu. [v2026.5.5]",
    "fix(update): preserve pnpm custom global root (#78393)",
    "fix: make conversation labels work with Codex (#78450)",
    "fix(net): bound guarded fetch dispatcher cleanup",
    "fix(agent): persist visible embedded final replies",
    "fix(reply): preserve private group replies for text turns",
    "ci: harden release validation harness checks"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 58
    },
    {
      "scope": "docs",
      "count": 45
    },
    {
      "scope": "fix",
      "count": 44
    },
    {
      "scope": "ui",
      "count": 19
    },
    {
      "scope": "perf",
      "count": 14
    },
    {
      "scope": "gateway",
      "count": 13
    },
    {
      "scope": "docker",
      "count": 13
    },
    {
      "scope": "plugins",
      "count": 11
    }
  ],
  "headlineCommits": [
    "fix(update): preserve pnpm custom global root (#78393)",
    "test(perf): avoid codex failure runtime plan setup",
    "config: stop automatic writes and guard Nix mutators (#78047)",
    "test(perf): avoid codex hook runtime plan setup",
    "fix: make conversation labels work with Codex (#78450)",
    "test(perf): settle codex hook turn startup",
    "test(perf): narrow codex trajectory import",
    "test(perf): narrow codex harness test import"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
