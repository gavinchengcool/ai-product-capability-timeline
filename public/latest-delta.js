window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-10-16T23:38:41.154834+08:00",
  "window": {
    "start_local": "2026-10-15T23:38:41.154834+08:00",
    "end_local": "2026-10-16T23:38:41.154834+08:00",
    "start_utc": "2026-10-15T15:38:41Z",
    "end_utc": "2026-10-16T15:38:41Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 392171,
    "forks": 82460,
    "open_issues": 9405,
    "pushed_at": "2026-10-16T15:38:06Z"
  },
  "summary": {
    "commitCount": 992,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 392171,
    "forks": 82460,
    "openIssues": 9405
  },
  "releases": [
    {
      "tag_name": "v2026.10.10-beta.1",
      "published_at": "2026-10-15T18:03:07Z",
      "name": "openclaw 2026.10.10-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.1"
    },
    {
      "tag_name": "v2026.10.4",
      "published_at": "2026-10-16T00:36:19Z",
      "name": "openclaw 2026.10.4",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.10.4"
    }
  ],
  "featureItems": [
    "**Cloud sessions:** move sessions between local and cloud from session menus, organize cloud environments by repository, support repository environment recipes with verified Node toolchains, save suggested cloud profiles on first use, show snapshot startup progress, start sessions while the first snapshot uploads, ready workers for empty-workspace sessions, report slow dispatch phases, and keep cloud setup secrets behind scoped egress grants. (#171690, #170892, #170862, #170796, #170875, #170895, #171729, #170929, #171749, #171073, #170810) Thanks @VACInc. [v2026.10.10-beta.1]",
    "**Desktop apps and first run:** support local Gateways in the Windows desktop app, start fresh Tauri installs with a local Gateway, start fresh macOS installs in guided dashboard setup, guide missing native permissions in chat, and choose inference automatically during first-run setup. (#169522, #169512, #169568, #169635, #169628) [v2026.10.10-beta.1]",
    "**Local setup:** offer optional memory embedding setup, add managed llama.cpp OCR and vision setup, and allow non-interactive llama.cpp embedding-only setup. (#163693, #148193, #170153) Thanks @PollyBot13, @duyufansh2008, and @dh-js. [v2026.10.10-beta.1]",
    "**Bun runtime:** build standalone OpenClaw executables with Bun, add an opt-in pinned Bun runtime that rejects unpinnable paths before changing anything, and start the Gateway faster on Bun. (#172384, #168832, #168982, #169543) Thanks @vincentkoc. [v2026.10.10-beta.1]",
    "**Experimental PostgreSQL:** add an experimental PostgreSQL engine for the Workboard store, select the shared-state engine at its owner, generate PostgreSQL DDL from canonical SQLite schemas, add PostgreSQL migrations with capability admission and exact schema-drift checks, preserve PostgreSQL stores in backups and updates, and add verified offline database port tooling. (#169214, #171962, #168219, #169933, #172265, #170828, #170518, #171368, #171265, #170037, #170055, #170059, #171350, #171484, #171518, #171795, #172046, #171545) Thanks @vincentkoc and @joshavant. [v2026.10.10-beta.1]",
    "**Session personalization:** personalize session backgrounds, add per-session speech bubbles and prompt reactions, show session-specific previews for public links, and match public conversation pages to the chat design with copy buttons. (#168301, #168861, #169527, #168156) Thanks @vyctorbrzezowski and @VACInc. [v2026.10.10-beta.1]",
    "**Control UI navigation:** organize personal navigation in a compact sidebar rail with real shortcut icons, filter sidebar users by online status, keep New conversation visible across sidebar modes, show session details beside wide conversations, make colored sessions easier to scan, inspect attached automations from session hovercards, put everyday session actions first, and make release updates discoverable from the account menu. (#168325, #168997, #172243, #170771, #170707, #170382, #172240, #168616, #172544, #100024) Thanks @fuller-stack-dev, @shakkernerd, and @VACInc. [v2026.10.10-beta.1]",
    "**Control UI chat:** group session context and task progress in Details, clarify the session details inspector, render assistant directives and an embed tag, show readable tweet preview cards, load older history in larger pages, shrink the composer in existing sessions, search emoji by name in the reaction picker, add manual code folding to session diffs, and show or hide values in secure entry prompts. (#161674, #172436, #64104, #168213, #170481, #171637, #172577, #172350, #169925, #172549) Thanks @vyctorbrzezowski, @obviyus, @Takhoffman, @Patrick-Erichsen, and @jacobtomlinson. [v2026.10.10-beta.1]"
  ],
  "fixItems": [
    "fix(gateway): expose recovery startup timing breakdown (#174357)",
    "fix(workers): ship Windows permission helper in portable archives (#174362)",
    "fix(ci): preserve offline build consumers in deadcode checks (#174358)",
    "perf(sessions): reuse bounded worker history projections (#174275)",
    "fix(sessions): stop retrying replaced delivery endpoints on every restart (#174278)",
    "perf(gateway): cut allocation hotspots under concurrent agent turns (#174130)",
    "fix(ci): report failed shard invocations with output tails",
    "perf(sessions): keep context accounting bounded on large sessions (#174274)"
  ],
  "topScopes": [
    {
      "scope": "ui",
      "count": 221
    },
    {
      "scope": "fix",
      "count": 88
    },
    {
      "scope": "ci",
      "count": 43
    },
    {
      "scope": "tests",
      "count": 40
    },
    {
      "scope": "gateway",
      "count": 39
    },
    {
      "scope": "agents",
      "count": 36
    },
    {
      "scope": "refactor",
      "count": 29
    },
    {
      "scope": "sessions",
      "count": 27
    }
  ],
  "headlineCommits": [
    "fix(gateway): expose recovery startup timing breakdown (#174357)",
    "feat(identity): support configurable GitHub Enterprise coauthor credit (#173513)",
    "refactor(ui): derive settings agent projections from their owners (#174337)",
    "fix(workers): ship Windows permission helper in portable archives (#174362)",
    "fix(ci): preserve offline build consumers in deadcode checks (#174358)",
    "refactor(test): remove dead script report fixture branches (#174356)",
    "test(process, state, plugins, codex, ui): remove low-value tests (batch d119) (#173126)",
    "refactor(ui): reuse disposable listeners for plugin components (#174346)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
