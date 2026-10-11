window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-10-12T00:51:20.255054+08:00",
  "window": {
    "start_local": "2026-10-11T00:51:20.255054+08:00",
    "end_local": "2026-10-12T00:51:20.255054+08:00",
    "start_utc": "2026-10-10T16:51:20Z",
    "end_utc": "2026-10-11T16:51:20Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 391678,
    "forks": 82343,
    "open_issues": 9482,
    "pushed_at": "2026-10-11T16:51:12Z"
  },
  "summary": {
    "commitCount": 577,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 391678,
    "forks": 82343,
    "openIssues": 9482
  },
  "releases": [
    {
      "tag_name": "v2026.10.5-beta.1",
      "published_at": "2026-10-11T13:08:24Z",
      "name": "openclaw 2026.10.5-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1"
    },
    {
      "tag_name": "v2026.10.1",
      "published_at": "2026-10-10T23:54:03Z",
      "name": "openclaw 2026.10.1",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.10.1"
    }
  ],
  "featureItems": [
    "**Worker-local inference:** add a native worker inference runtime with Gateway dispatch, client placement, required worker policy and destination checks before local inference, and clear setup-failure explanations. (#158902, #163645, #163646, #163647, #166611, #166613, #165960) Thanks @RomneyDa. [v2026.10.5-beta.1]",
    "**X channel:** add the X (Twitter) mentions channel plugin with Activity API streaming and backfill, repository-question guest mode with hidden same-agent helpers, GitHub-verified repository writers, and daily and monthly X API cost limits. (#165138, #165337, #165376, #165354, #165543, #168071, #165351) Thanks @obviyus. [v2026.10.5-beta.1]",
    "**Channel progress:** show useful Telegram and Discord progress by default, add per-tool glyphs to Discord progress drafts, restore per-tool emoji on Telegram tool rows, and hide routine Slack reaction rows. (#166861, #168032, #167392, #166880) Thanks @obviyus, @keshavbotagent, and @notmnp. [v2026.10.5-beta.1]",
    "**Anthropic and Claude CLI:** support Claude Haiku 5.5, show newly listed Claude models without waiting for an OpenClaw release, list each Claude CLI model once, and keep logged-out Claude CLI models listed with a login reason. (#166706, #167658, #166311, #166338, #167942) Thanks @RomneyDa and @obviyus. [v2026.10.5-beta.1]",
    "**OpenAI:** support custom realtime voice endpoints, show account chat models missing from the manifest, surface new ChatGPT-login models without a release, and stop offering ChatGPT-only or bundled-Codex-rejected models that would fail. (#165632, #162563, #167387, #167633, #167975) Thanks @jacobtomlinson and @obviyus. [v2026.10.5-beta.1]",
    "**Voice calls:** add per-call briefs, call reports, live steering, callbacks, and voicemail detection to voice calls. (#165716) Thanks @mbelinky and @jacobtomlinson. [v2026.10.5-beta.1]",
    "**Control UI customization:** let themes customize Control UI branding, use agent avatars or unlocked Lobsterdex icons for browser tabs, choose favicon shapes, and add seven Lobsterdex character variants. (#168027, #165201, #166325, #167809, #159815) Thanks @vyctorbrzezowski, @jacobtomlinson, and @hannesrudolph. [v2026.10.5-beta.1]",
    "**Terminal:** add configurable terminal fonts with built-in Nerd Font icons. (#166180) Thanks @jacobtomlinson. [v2026.10.5-beta.1]"
  ],
  "fixItems": [
    "**Telegram:** keep streamed replies from vanishing when their replacement never lands, retry preview edits after transient errors, keep delegated progress and media-run progress cards live, honor explicit reply tags during partial streaming, keep pending questions through settings commands, restore verbose diagnostics, treat GIFs as videos, and harden spooled turn adoption. (#164649, #165072, #166101, #167362, #167895, #168004, #168016, #168011, #103695, #167470) Thanks @jayzhou2309, @obviyus, @jmar5439, @vincentkoc, and @mgr-nick. [v2026.10.5-beta.1]",
    "fix: retain Discord native commands in conversation history (#169200)",
    "fix(test): isolate built smoke runtime state",
    "fix(ui): repair Activity and Usage test contracts",
    "fix(ui): bound shared boot chunks after Solid ports",
    "perf(sessions): reuse transcript projection facts within reads (#169201)",
    "fix(build): keep Solid tag declarations in the shared owner",
    "fix(ui): await rendered palette settings readiness in tests"
  ],
  "topScopes": [
    {
      "scope": "ui",
      "count": 92
    },
    {
      "scope": "gateway",
      "count": 46
    },
    {
      "scope": "agents",
      "count": 35
    },
    {
      "scope": "fix",
      "count": 34
    },
    {
      "scope": "sessions",
      "count": 32
    },
    {
      "scope": "ci",
      "count": 24
    },
    {
      "scope": "test",
      "count": 22
    },
    {
      "scope": "update",
      "count": 19
    }
  ],
  "headlineCommits": [
    "test(state): wait for publication deletion receipt installation",
    "fix: retain Discord native commands in conversation history (#169200)",
    "refactor: drop remaining over-defensive plugin and Gateway machinery (#169198)",
    "refactor(ui): migrate shared launchers, panels, and dialogs to Solid (#168791)",
    "test: avoid shadowed smoke guard binding",
    "fix(test): isolate built smoke runtime state",
    "fix(ui): repair Activity and Usage test contracts",
    "test(core,plugins): remove low-value tests (batch d053) (#169218)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
