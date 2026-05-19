window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-19T22:27:17.143063+08:00",
  "window": {
    "start_local": "2026-05-18T22:27:17.143063+08:00",
    "end_local": "2026-05-19T22:27:17.143063+08:00",
    "start_utc": "2026-05-18T14:27:17Z",
    "end_utc": "2026-05-19T14:27:17Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 373178,
    "forks": 77416,
    "open_issues": 7165,
    "pushed_at": "2026-05-19T14:18:02Z"
  },
  "summary": {
    "commitCount": 132,
    "releaseCount": 3,
    "stableReleaseCount": 1,
    "betaReleaseCount": 2,
    "stars": 373178,
    "forks": 77416,
    "openIssues": 7165
  },
  "releases": [
    {
      "tag_name": "v2026.5.19-beta.1",
      "published_at": "2026-05-18T22:58:13Z",
      "name": "openclaw 2026.5.19-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.1"
    },
    {
      "tag_name": "v2026.5.18",
      "published_at": "2026-05-18T18:54:22Z",
      "name": "openclaw 2026.5.18",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.18"
    },
    {
      "tag_name": "v2026.5.18-beta.1",
      "published_at": "2026-05-18T16:13:00Z",
      "name": "openclaw 2026.5.18-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.18-beta.1"
    }
  ],
  "featureItems": [
    "Docker/Podman: add `OPENCLAW_IMAGE_APT_PACKAGES` as the runtime-neutral image build arg for extra apt packages while keeping `OPENCLAW_DOCKER_APT_PACKAGES` as a legacy fallback. (#62431) Thanks @urtabajev. [v2026.5.19-beta.1]",
    "Mac app: redesign Settings pages with consistent card layouts, cached navigation, cleaner permissions/voice/skills/cron/exec/debug panes, and steadier spacing around the native sidebar. [v2026.5.19-beta.1]",
    "Skills: add a meme-maker skill for curated template search, local SVG/PNG rendering, Imgflip hosted rendering, and Know Your Meme provenance links. [v2026.5.19-beta.1]",
    "Browser CLI: add `openclaw browser evaluate --timeout-ms` so long-running page functions can extend both the evaluate action and request timeout budgets. (#83447) Thanks @eefreenyc. [v2026.5.19-beta.1]",
    "Skills: add node inspector debugging, fused diagram generation, and throwaway spike workflow skills. [v2026.5.19-beta.1]",
    "CLI/plugins: add `defineToolPlugin` plus `openclaw plugins build`, `validate`, and `init` for typed simple tool plugins with generated manifest metadata, optional tool declarations, and context factories. [v2026.5.19-beta.1]",
    "Skills: add a Python debugging skill for pdb, breakpoint(), post-mortem inspection, and debugpy remote attach. [v2026.5.19-beta.1]",
    "Plugins/messages: add presentation capability limits for channel renderers, adapt rich message controls before native rendering, and mark legacy `interactive`/Slack directive producer APIs as deprecated. [v2026.5.19-beta.1]"
  ],
  "fixItems": [
    "Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation. [v2026.5.19-beta.1]",
    "Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation. [v2026.5.18]",
    "Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation. [v2026.5.18-beta.1]",
    "fix(cli): preserve first line of channels logs at window boundary (#84106)",
    "Fix config queue overrides for Matrix (#84104)",
    "fix(media): decode remote URL fallback filenames (#84108)",
    "fix(cli): preserve equals in root option values [AI-assisted] (#84107)",
    "fix(cli): reject out-of-range port numbers in parsePort (#83900) (#84008)"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 14
    },
    {
      "scope": "cli",
      "count": 6
    },
    {
      "scope": "mantis",
      "count": 6
    },
    {
      "scope": "codex",
      "count": 6
    },
    {
      "scope": "agents",
      "count": 5
    },
    {
      "scope": "telegram",
      "count": 5
    },
    {
      "scope": "xai",
      "count": 4
    },
    {
      "scope": "ui",
      "count": 4
    }
  ],
  "headlineCommits": [
    "feat(agents): support per-agent local model lean mode (#84073)",
    "fix(cli): preserve first line of channels logs at window boundary (#84106)",
    "Fix config queue overrides for Matrix (#84104)",
    "[codex] Fix Control UI terminal run status recovery (#84112)",
    "fix(media): decode remote URL fallback filenames (#84108)",
    "fix(cli): preserve equals in root option values [AI-assisted] (#84107)",
    "fix(cli): reject out-of-range port numbers in parsePort (#83900) (#84008)",
    "chore: move Motivation section above Change Type in PR template (#84098)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
