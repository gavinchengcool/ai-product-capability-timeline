window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-21T22:35:53.154638+08:00",
  "window": {
    "start_local": "2026-05-20T22:35:53.154638+08:00",
    "end_local": "2026-05-21T22:35:53.154638+08:00",
    "start_utc": "2026-05-20T14:35:53Z",
    "end_utc": "2026-05-21T14:35:53Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 373709,
    "forks": 77623,
    "open_issues": 7359,
    "pushed_at": "2026-05-21T14:35:06Z"
  },
  "summary": {
    "commitCount": 98,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 373709,
    "forks": 77623,
    "openIssues": 7359
  },
  "releases": [
    {
      "tag_name": "v2026.5.20-beta.1",
      "published_at": "2026-05-21T00:11:21Z",
      "name": "openclaw 2026.5.20-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.20-beta.1"
    },
    {
      "tag_name": "v2026.5.19",
      "published_at": "2026-05-20T20:20:53Z",
      "name": "openclaw 2026.5.19",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.19"
    }
  ],
  "featureItems": [
    "Dependencies: bump the bundled Codex harness to `@openai/codex` `0.132.0` and refresh the app-server model-list docs for the new catalog. [v2026.5.20-beta.1]",
    "CLI/policy: add the bundled Policy plugin for policy-backed channel conformance checks, doctor lint findings, and opt-in workspace repair. (#80407) Thanks @giodl73-repo. [v2026.5.20-beta.1]",
    "Providers/xAI: add device-code OAuth login so remote and headless setups can authorize xAI without a localhost browser callback. (#84005) Thanks @fuller-stack-dev. [v2026.5.20-beta.1]",
    "Docker/Podman: add `OPENCLAW_IMAGE_APT_PACKAGES` as the runtime-neutral image build arg for extra apt packages while keeping `OPENCLAW_DOCKER_APT_PACKAGES` as a legacy fallback. (#62431) Thanks @urtabajev. [v2026.5.19]",
    "Mac app: redesign Settings pages with consistent card layouts, cached navigation, cleaner permissions/voice/skills/cron/exec/debug panes, and steadier spacing around the native sidebar. [v2026.5.19]",
    "Skills: add a meme-maker skill for curated template search, local SVG/PNG rendering, Imgflip hosted rendering, and Know Your Meme provenance links. [v2026.5.19]",
    "Browser CLI: add `openclaw browser evaluate --timeout-ms` so long-running page functions can extend both the evaluate action and request timeout budgets. (#83447) Thanks @eefreenyc. [v2026.5.19]",
    "Docker/Podman: add `OPENCLAW_IMAGE_PIP_PACKAGES` for opt-in Python package installation in local image builds. (#83771) Thanks @stephenredmond-straiteis. [v2026.5.19]"
  ],
  "fixItems": [
    "fix(mattermost): fail closed on missing channel type [AI]. (#84091) Thanks @pgondhi987. [v2026.5.20-beta.1]",
    "harden update restart script creation [AI]. (#84088) Thanks @pgondhi987. [v2026.5.20-beta.1]",
    "Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation. [v2026.5.19]",
    "fix(agents): fence embedded session writes",
    "fix(xai): keep OAuth URL clickable (#84927)",
    "Fix stale WebChat typing indicator after terminal session patch (#84565)",
    "perf(plugins): reuse compatible gateway startup registry",
    "fix(tests): wrap kitchen sink pnpm runner"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 9
    },
    {
      "scope": "agents",
      "count": 6
    },
    {
      "scope": "update",
      "count": 6
    },
    {
      "scope": "doctor",
      "count": 5
    },
    {
      "scope": "ci(release)",
      "count": 5
    },
    {
      "scope": "docs",
      "count": 4
    },
    {
      "scope": "cli",
      "count": 4
    },
    {
      "scope": "test",
      "count": 3
    }
  ],
  "headlineCommits": [
    "Policy: add model, network, and MCP conformance checks (#80783)",
    "fix(agents): fence embedded session writes",
    "test: update command auth expectations",
    "docs: remove stale owner tool wording",
    "refactor: remove sender owner tool gating",
    "fix(xai): keep OAuth URL clickable (#84927)",
    "Fix stale WebChat typing indicator after terminal session patch (#84565)",
    "docs: document rejected autoreview findings"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
