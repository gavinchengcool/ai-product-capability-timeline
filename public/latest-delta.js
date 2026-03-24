window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-03-24T20:40:05.777796+08:00",
  "window": {
    "start_local": "2026-03-23T20:40:05.777796+08:00",
    "end_local": "2026-03-24T20:40:05.777796+08:00",
    "start_utc": "2026-03-23T12:40:05Z",
    "end_utc": "2026-03-24T12:40:05Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 333716,
    "forks": 65055,
    "open_issues": 15225,
    "pushed_at": "2026-03-24T12:19:18Z"
  },
  "summary": {
    "commitCount": 221,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 333716,
    "forks": 65055,
    "openIssues": 15225
  },
  "releases": [
    {
      "tag_name": "v2026.3.23",
      "published_at": "2026-03-23T23:15:50Z",
      "name": "2026.3.23",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.3.23"
    }
  ],
  "featureItems": [
    "ModelStudio/Qwen: add standard (pay-as-you-go) DashScope endpoints for China and global Qwen API keys alongside the existing Coding Plan endpoints, and relabel the provider group to `Qwen (Alibaba Cloud Model Studio)`. (#43878) [v2026.3.23]",
    "UI/clarity: consolidate button primitives (`btn--icon`, `btn--ghost`, `btn--xs`), refine the Knot theme to a black-and-red palette with WCAG 2.1 AA contrast, add config icons for Diagnostics/CLI/Secrets/ACP/MCP sections, replace the roundness slider with discrete stops, and improve accessibility with aria-labels across usage filters. (#53272) Thanks @BunsDev. [v2026.3.23]",
    "feat(ui): Control UI polish — skills revamp, markdown preview, agent workspace, macOS config tree (#53411) thanks @BunsDev",
    "msteams: add message edit and delete support (#49925)",
    "feat(csp): support inline script hashes in Control UI CSP (#53307) thanks @BunsDev",
    "style(ui): continue ui clarity pass across theme, config, and usage (#53272) thanks @BunsDev",
    "feat(modelstudio): add standard (pay-as-you-go) DashScope endpoints for Qwen (#43878)",
    "release: add changelog for control UI tarball check"
  ],
  "fixItems": [
    "CLI/channel auth: auto-select the single configured login-capable channel for `channels login`/`logout`, harden channel ids against prototype-chain and control-character abuse, and fall back cleanly to catalog-backed channel installs, so channel auth works again for single-channel setups and on-demand channel installs. (#53254) Thanks @BunsDev. [v2026.3.23]",
    "ClawHub/skills: keep updating already-tracked legacy Unicode slugs after the ASCII-only slug hardening, so older installs do not get stuck behind `Invalid skill slug` errors during `openclaw skills update`. (#53206) Thanks @drobison00. [v2026.3.23]",
    "Security/exec approvals: keep shell-wrapper positional-argv allowlist matching on real direct carriers only by rejecting single-quoted `$0`/`$n` tokens, disallowing newline-separated `exec`, and still accepting `exec --` carrier forms. Thanks @vincentkoc. [v2026.3.23]",
    "fix(agents): harden edit tool recovery (#52516)",
    "test: harden threaded channel follow-ups",
    "test: harden threaded shared-worker suites",
    "fix: widen installer regex allowlists and deduplicate safeExternalHref calls",
    "fix(security): resolve Aisle findings — skill installer validation, terminal sanitization, URL scheme allowlisting (#53471) thanks @BunsDev"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 48
    },
    {
      "scope": "test",
      "count": 32
    },
    {
      "scope": "release",
      "count": 12
    },
    {
      "scope": "refactor",
      "count": 10
    },
    {
      "scope": "build",
      "count": 9
    },
    {
      "scope": "docs",
      "count": 8
    },
    {
      "scope": "plugins",
      "count": 7
    },
    {
      "scope": "ci",
      "count": 7
    }
  ],
  "headlineCommits": [
    "fix(agents): harden edit tool recovery (#52516)",
    "test: defer slack bolt interop for helper-only suites",
    "test: harden threaded channel follow-ups",
    "test: harden threaded shared-worker suites",
    "test: continue vitest threads migration",
    "test: continue vitest threads migration",
    "docs: update CONTRIBUTING.md",
    "fix: widen installer regex allowlists and deduplicate safeExternalHref calls"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
