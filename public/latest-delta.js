window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-25T22:27:27.237342+08:00",
  "window": {
    "start_local": "2026-05-24T22:27:27.237342+08:00",
    "end_local": "2026-05-25T22:27:27.237342+08:00",
    "start_utc": "2026-05-24T14:27:27Z",
    "end_utc": "2026-05-25T14:27:27Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 374556,
    "forks": 77965,
    "open_issues": 6838,
    "pushed_at": "2026-05-25T14:26:39Z"
  },
  "summary": {
    "commitCount": 185,
    "releaseCount": 2,
    "stableReleaseCount": 0,
    "betaReleaseCount": 2,
    "stars": 374556,
    "forks": 77965,
    "openIssues": 6838
  },
  "releases": [
    {
      "tag_name": "v2026.5.24-beta.2",
      "published_at": "2026-05-24T23:49:30Z",
      "name": "openclaw 2026.5.24-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.24-beta.2"
    },
    {
      "tag_name": "v2026.5.24-beta.1",
      "published_at": "2026-05-24T14:42:58Z",
      "name": "openclaw 2026.5.24-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.24-beta.1"
    }
  ],
  "featureItems": [
    "iMessage: support thumb-approval reactions — `👍` (Like tapback) resolves an approval as `allow-once` and `👎` resolves as `deny`, with the explicit-approver allowlist read from `channels.imessage.allowFrom`; `allow-always` stays on the manual `/approve <id> allow-always` text fallback. Mirrors the WhatsApp behavior from #85477. [v2026.5.24-beta.2]",
    "Discord/voice: add realtime wake-name gating with agent-name defaults and raise profile bootstrap context budget for longer `USER.md`/`SOUL.md` files. [v2026.5.24-beta.2]",
    "Image tool: add adaptive model-aware image compression with an `agents.defaults.imageQuality` preference for choosing token-efficient, balanced, or high-detail media handling. [v2026.5.24-beta.2]",
    "Meeting Notes: add a source-only external meeting-notes plugin and SDK source-provider contract outside the core npm package, with auto-start capture config, manual transcript imports, read-only `openclaw meeting-notes` CLI access, and Discord voice as the first live source. [v2026.5.24-beta.2]",
    "QA-Lab/diagnostics: extend the OpenTelemetry smoke harness to prove trace, metric, and log export, and add first-class Prometheus and observability smoke aliases. [v2026.5.24-beta.2]",
    "Plugin SDK: add a generic channel-message poll sender so channel plugins can expose poll delivery without depending on channel-specific SDK facades. [v2026.5.24-beta.2]",
    "Maintainer skills: add `openclaw-landable-bug-sweep` for producing five small, reviewed, CI-green OpenClaw bugfix PRs from issue/PR sweeps. [v2026.5.24-beta.2]",
    "Control UI/chat: add search and Load More pagination to the chat session picker, keeping initial session loads bounded while making older conversations reachable. (#85237) Thanks @amknight. [v2026.5.24-beta.2]"
  ],
  "fixItems": [
    "fix(integrations): enforce channel read target allowlists [AI]. (#84982) Thanks @pgondhi987. [v2026.5.24-beta.2]",
    "fix: constrain Windows task script names [AI]. (#85064) Thanks @pgondhi987. [v2026.5.24-beta.2]",
    "fix(config): validate browser sandbox bind sources [AI]. (#84799) Thanks @pgondhi987. [v2026.5.24-beta.2]",
    "fix(integrations): enforce channel read target allowlists [AI]. (#84982) Thanks @pgondhi987. [v2026.5.24-beta.1]",
    "fix: constrain Windows task script names [AI]. (#85064) Thanks @pgondhi987. [v2026.5.24-beta.1]",
    "fix(config): validate browser sandbox bind sources [AI]. (#84799) Thanks @pgondhi987. [v2026.5.24-beta.1]",
    "fix(gateway): keep session tool mirrors under pressure",
    "fix(agents): release embedded-attempt session lock on every exit path (#86427)"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 24
    },
    {
      "scope": "scripts",
      "count": 14
    },
    {
      "scope": "test",
      "count": 12
    },
    {
      "scope": "e2e",
      "count": 11
    },
    {
      "scope": "android",
      "count": 11
    },
    {
      "scope": "docs",
      "count": 10
    },
    {
      "scope": "agents",
      "count": 7
    },
    {
      "scope": "gateway",
      "count": 6
    }
  ],
  "headlineCommits": [
    "fix(gateway): keep session tool mirrors under pressure",
    "docs: route github creation through agent transcript",
    "test(tools): add unmocked image custom-provider auth regression (#85733)",
    "refactor(plugin-sdk): rename plain text tool-call compat wrapper",
    "docs(skills): defer private release locators",
    "Replace Sharp image backend with Photon (#86437)",
    "fix(agents): release embedded-attempt session lock on every exit path (#86427)",
    "fix: accept OpenClaw voice wake confusions (#86507)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
