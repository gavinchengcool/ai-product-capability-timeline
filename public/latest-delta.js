window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-03T20:34:33.830768+08:00",
  "window": {
    "start_local": "2026-04-02T20:34:33.830768+08:00",
    "end_local": "2026-04-03T20:34:33.830768+08:00",
    "start_utc": "2026-04-02T12:34:33Z",
    "end_utc": "2026-04-03T12:34:33Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 346762,
    "forks": 69068,
    "open_issues": 17169,
    "pushed_at": "2026-04-03T12:34:09Z"
  },
  "summary": {
    "commitCount": 362,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 346762,
    "forks": 69068,
    "openIssues": 17169
  },
  "releases": [
    {
      "tag_name": "v2026.4.2",
      "published_at": "2026-04-02T18:30:45Z",
      "name": "openclaw 2026.4.2",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.2"
    }
  ],
  "featureItems": [
    "Tasks/Task Flow: add managed child task spawning plus sticky cancel intent, so external orchestrators can stop scheduling immediately and let parent Task Flows settle to `cancelled` once active child tasks finish. (#59610) Thanks @mbelinky. [v2026.4.2]",
    "Plugins/Task Flow: add a bound `api.runtime.taskFlow` seam so plugins and trusted authoring layers can create and drive managed Task Flows from host-resolved OpenClaw context without passing owner identifiers on each call. (#59622) Thanks @mbelinky. [v2026.4.2]",
    "Android/assistant: add assistant-role entrypoints plus Google Assistant App Actions metadata so Android can launch OpenClaw from the assistant trigger and hand prompts into the chat composer. (#59596) Thanks @obviyus. [v2026.4.2]",
    "Providers/runtime: add provider-owned replay hook surfaces for transcript policy, replay cleanup, and reasoning-mode dispatch. (#59143) Thanks @jalehman. [v2026.4.2]",
    "Plugins/hooks: add `before_agent_reply` so plugins can short-circuit the LLM with synthetic replies after inline actions. (#20067) Thanks @JoshuaLelon. [v2026.4.2]",
    "Feishu/comments: add a dedicated Drive comment-event flow with comment-thread context resolution, in-thread replies, and `feishu_drive` comment actions for document collaboration workflows. (#58497) Thanks @wittam-01. [v2026.4.2]",
    "Diffs: add plugin-owned `viewerBaseUrl` so viewer links can use a stable proxy/public origin without passing `baseUrl` on every tool call. (#59341) Related #59227. Thanks @gumadeiras. [v2026.4.2]",
    "Agents/compaction: add `agents.defaults.compaction.notifyUser` so the `🧹 Compacting context...` start notice is opt-in instead of always being shown. (#54251) Thanks @oguricap0327. [v2026.4.2]"
  ],
  "fixItems": [
    "Providers/Copilot: classify native GitHub Copilot API hosts in the shared provider endpoint resolver and harden token-derived proxy endpoint parsing so Copilot base URL routing stays centralized and fails closed on malformed hints. (#59644) Thanks @vincentkoc. [v2026.4.2]",
    "Feishu/comment threads: harden document comment-thread delivery so whole-document comments fall back to `add_comment`, delayed reply lookups retry more reliably, and user-visible replies avoid reasoning/planning spillover. (#59129) Thanks @wittam-01. [v2026.4.2]",
    "Zalo/webhook replay: scope replay dedupe key by chat and sender so reused message IDs across different chats or senders no longer collide, and harden metadata reads for partially missing payloads. (#58444) [v2026.4.2]",
    "fix(ci): restore talk-voice plugin runtime export",
    "fix(ci): align discord actions contract with config discovery",
    "fix(ci): route telegram test harness through reply runtime",
    "fix(tui): tolerate clock skew in pending-history reconciliation",
    "fix(test): default local Vitest to one worker (#60281)"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 44
    },
    {
      "scope": "fix",
      "count": 44
    },
    {
      "scope": "docs",
      "count": 21
    },
    {
      "scope": "feishu",
      "count": 17
    },
    {
      "scope": "ci",
      "count": 16
    },
    {
      "scope": "refactor",
      "count": 16
    },
    {
      "scope": "tasks",
      "count": 13
    },
    {
      "scope": "exec",
      "count": 12
    }
  ],
  "headlineCommits": [
    "refactor(feishu): split channel runtime seam",
    "test(deepgram): use direct audio test helpers",
    "refactor(feishu): split outbound runtime seam",
    "fix(ci): restore talk-voice plugin runtime export",
    "refactor(feishu): split comment handler seam",
    "fix(ci): align discord actions contract with config discovery",
    "refactor(feishu): split bot runtime seam",
    "refactor: move ollama synthetic auth precedence into extension"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
