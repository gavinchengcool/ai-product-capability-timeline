window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-17T20:49:57.774661+08:00",
  "window": {
    "start_local": "2026-04-16T20:49:57.774661+08:00",
    "end_local": "2026-04-17T20:49:57.774661+08:00",
    "start_utc": "2026-04-16T12:49:57Z",
    "end_utc": "2026-04-17T12:49:57Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 359265,
    "forks": 73094,
    "open_issues": 19013,
    "pushed_at": "2026-04-17T12:47:53Z"
  },
  "summary": {
    "commitCount": 180,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 359265,
    "forks": 73094,
    "openIssues": 19013
  },
  "releases": [
    {
      "tag_name": "v2026.4.15",
      "published_at": "2026-04-16T21:50:22Z",
      "name": "openclaw 2026.4.15",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.15"
    },
    {
      "tag_name": "v2026.4.15-beta.2",
      "published_at": "2026-04-16T19:30:02Z",
      "name": "openclaw 2026.4.15-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.15-beta.2"
    }
  ],
  "featureItems": [
    "Google/TTS: add Gemini text-to-speech support to the bundled `google` plugin, including provider registration, voice selection, WAV reply output, PCM telephony output, and setup/docs guidance. (#67515) Thanks @barronlroth. [v2026.4.15]",
    "Control UI/Overview: add a Model Auth status card showing OAuth token health and provider rate-limit pressure at a glance, with attention callouts when OAuth tokens are expiring or expired. Backed by a new `models.authStatus` gateway method that strips credentials and caches for 60s. (#66211) Thanks @omarshahine. [v2026.4.15]",
    "Memory/LanceDB: add cloud storage support to `memory-lancedb` so durable memory indexes can run on remote object storage instead of local disk only. (#63502) Thanks @rugvedS07. [v2026.4.15]",
    "GitHub Copilot/memory search: add a GitHub Copilot embedding provider for memory search, and expose a dedicated Copilot embedding host helper so plugins can reuse the transport while honoring remote overrides, token refresh, and safer payload validation. (#61718) Thanks @feiskyer and @vincentkoc. [v2026.4.15]",
    "Agents/local models: add experimental `agents.defaults.experimental.localModelLean: true` to drop heavyweight default tools like `browser`, `cron`, and `message`, reducing prompt size for weaker local-model setups without changing the normal path. (#66495) Thanks @ImLukeF. [v2026.4.15]",
    "Google/TTS: add Gemini text-to-speech support to the bundled `google` plugin, including provider registration, voice selection, WAV reply output, PCM telephony output, and setup/docs guidance. (#67515) Thanks @barronlroth. [v2026.4.15-beta.2]",
    "feat: add macOS screen snapshots for monitor preview (#67954) thanks @BunsDev",
    "feat(ui): overhaul settings and slash command UX (#67819) thanks @BunsDev"
  ],
  "fixItems": [
    "Security/approvals: redact secrets in exec approval prompts so inline approval review can no longer leak credential material in rendered prompt content. (#61077, #64790) [v2026.4.15]",
    "Feishu/webhook: harden the webhook transport and card-action replay guards to fail closed on missing `encryptKey` and blank callback tokens — refuse to start the webhook transport without an `encryptKey`, reject unsigned requests when no key is present instead of accepting them, and drop blank card-action tokens before the dedupe claim and dispatcher. Defense-in-depth over the already-closed monitor-account layer. (#66707) Thanks @eleqtrizit. [v2026.4.15]",
    "WhatsApp/Baileys media upload: harden encrypted upload handling so large outbound media sends avoid buffer spikes and reliability regressions. (#65966) Thanks @frankekn. [v2026.4.15]",
    "fix: preserve hello-ok scopes for reused device tokens (#68039)",
    "fix: report shared auth scopes in hello-ok (#67810) thanks @BunsDev",
    "fix(macOS): enable undo/redo in webchat composer text input (#34962)",
    "fix(auth): serialize OAuth refresh across agents to fix #26322 (#67876)",
    "fix(memory-core): preserve vector dims on readonly recovery"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 52
    },
    {
      "scope": "fix",
      "count": 28
    },
    {
      "scope": "ci",
      "count": 17
    },
    {
      "scope": "tests",
      "count": 10
    },
    {
      "scope": "plugins",
      "count": 8
    },
    {
      "scope": "docs",
      "count": 7
    },
    {
      "scope": "build",
      "count": 5
    },
    {
      "scope": "matrix",
      "count": 4
    }
  ],
  "headlineCommits": [
    "fix: preserve hello-ok scopes for reused device tokens (#68039)",
    "feat: add macOS screen snapshots for monitor preview (#67954) thanks @BunsDev",
    "fix: report shared auth scopes in hello-ok (#67810) thanks @BunsDev",
    "Auto-reply: avoid eager bundled route fallback",
    "Tests: narrow session binding contract setup",
    "fix(macOS): enable undo/redo in webchat composer text input (#34962)",
    "Tests: speed up channel setup promotion",
    "Docs: refresh agent instructions"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
