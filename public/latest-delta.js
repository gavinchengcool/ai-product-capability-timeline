window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-15T21:21:35.113091+08:00",
  "window": {
    "start_local": "2026-05-14T21:21:35.113091+08:00",
    "end_local": "2026-05-15T21:21:35.113091+08:00",
    "start_utc": "2026-05-14T13:21:35Z",
    "end_utc": "2026-05-15T13:21:35Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 372074,
    "forks": 77029,
    "open_issues": 7050,
    "pushed_at": "2026-05-15T13:17:34Z"
  },
  "summary": {
    "commitCount": 255,
    "releaseCount": 3,
    "stableReleaseCount": 1,
    "betaReleaseCount": 2,
    "stars": 372074,
    "forks": 77029,
    "openIssues": 7050
  },
  "releases": [
    {
      "tag_name": "v2026.5.14-beta.2",
      "published_at": "2026-05-15T11:11:27Z",
      "name": "openclaw 2026.5.14-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.2"
    },
    {
      "tag_name": "v2026.5.14-beta.1",
      "published_at": "2026-05-14T21:31:13Z",
      "name": "openclaw 2026.5.14-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.1"
    },
    {
      "tag_name": "v2026.5.12",
      "published_at": "2026-05-14T18:28:04Z",
      "name": "openclaw 2026.5.12",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.12"
    }
  ],
  "featureItems": [
    "Channels/SDK: add normalized command turn facts to channel turn construction and expose command-turn helpers for plugin inbound contexts. [v2026.5.14-beta.2]",
    "Agents/config: support per-agent bootstrap profile overrides for `contextInjection`, `bootstrapMaxChars`, and `bootstrapTotalMaxChars`, inheriting from `agents.defaults` when omitted. Fixes #69966. Thanks @BunsDev. [v2026.5.14-beta.2]",
    "Control UI/i18n: add a `pnpm ui:i18n:report` baseline report for hardcoded-copy focus areas and locale fallback metadata. (#81320) Thanks @samzong. [v2026.5.14-beta.2]",
    "Maintainer tooling: add a repo-local `codex-review` skill for Codex closeout reviews, including local dirty-work and PR-branch review helpers that rerun until no accepted/actionable findings remain and avoid unsupported inline prompts with `--base`. [v2026.5.14-beta.2]",
    "Maintainer tooling: fail CI when pull requests add package patch files or pnpm patched dependencies, preserving the upstream-and-bump dependency workflow. [v2026.5.14-beta.2]",
    "Gateway/startup: add owner-level startup trace attribution for auth, plugin loading, lookup counts, and plugin sidecar services. (#81738) Thanks @samzong. [v2026.5.14-beta.2]",
    "Channels/status reactions: wire `StatusReactionController` into WhatsApp message turns (queued → thinking → tool → done/error lifecycle, on par with Telegram and Discord), add `deploy`/`build`/`concierge` emoji categories with tool-token routing, and replace the status reaction defaults with self-explanatory emoji (🧠 thinking, 🛠️ tool, 💻 coding, 🌐 web, ⏳ stallSoft, ⚠️ stallHard, ✅ done, ❌ error, 🗜️ compacting) so stall and lifecycle reactions read as status indicators instead of emotional commentary. Fixes #59077. (#80612) Thanks @gado-ships-it. [v2026.5.14-beta.2]",
    "Control UI: add a browser-local Text size setting in Appearance and Quick Settings, scaling chat and dense UI text while keeping inputs above the mobile Safari focus-zoom threshold. Fixes #8547. Thanks @BunsDev. [v2026.5.14-beta.2]"
  ],
  "fixItems": [
    "fix(canvas): validate snapshot response formats [AI]. (#81881) Thanks @pgondhi987. [v2026.5.14-beta.2]",
    "Security/Windows ACL audit: classify Anonymous Logon, Guests, Interactive, Local, and Network SIDs as world-equivalent principals so broadly writable paths stay critical instead of being downgraded to group-writable. Fixes #74350. (#74383) Thanks @dwc1997. [v2026.5.14-beta.2]",
    "fix: harden safe-bin argument validation [AI]. (#80999) Thanks @pgondhi987. [v2026.5.14-beta.2]",
    "fix(config): reject auto-managed meta.lastTouched\\* paths in config set/unset (#80856). Thanks @ai-hpc [v2026.5.14-beta.2]",
    "Security/Windows ACL audit: classify Anonymous Logon, Guests, Interactive, Local, and Network SIDs as world-equivalent principals so broadly writable paths stay critical instead of being downgraded to group-writable. Fixes #74350. (#74383) Thanks @dwc1997. [v2026.5.14-beta.1]",
    "fix: harden safe-bin argument validation [AI]. (#80999) Thanks @pgondhi987. [v2026.5.14-beta.1]",
    "fix(config): reject auto-managed meta.lastTouched\\* paths in config set/unset (#80856). Thanks @ai-hpc [v2026.5.14-beta.1]",
    "Security/sandbox: include Windows `USERPROFILE` in the sandbox blocked home roots so credential-bearing binds (such as `.codex`, `.openclaw`, or `.ssh` under the Windows user profile) are denied even when `HOME` points at a different shell home. (#63074) Thanks @luoyanglang. [v2026.5.12]"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 50
    },
    {
      "scope": "ui",
      "count": 25
    },
    {
      "scope": "docs",
      "count": 15
    },
    {
      "scope": "test",
      "count": 12
    },
    {
      "scope": "gateway",
      "count": 11
    },
    {
      "scope": "refactor",
      "count": 7
    },
    {
      "scope": "xiaomi",
      "count": 6
    },
    {
      "scope": "slack",
      "count": 6
    }
  ],
  "headlineCommits": [
    "refactor: assemble channel contexts in core",
    "fix(xiaomi): surface MiMo reasoning-only finals (#60304)",
    "fix: document cron runtime plugin preload (#82111)",
    "fix(cron): align runtime plugin preload mode",
    "fix(cron): lazily load runtime plugins to fix external channel resolution",
    "refactor: centralize channel history window",
    "fix(slack): clarify finalized draft guard",
    "fix(slack): preserve finalized draft after tool warning"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
