window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-03-23T20:36:49.974626+08:00",
  "window": {
    "start_local": "2026-03-22T20:36:49.974626+08:00",
    "end_local": "2026-03-23T20:36:49.974626+08:00",
    "start_utc": "2026-03-22T12:36:49Z",
    "end_utc": "2026-03-23T12:36:49Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 331416,
    "forks": 64531,
    "open_issues": 14999,
    "pushed_at": "2026-03-23T12:35:57Z"
  },
  "summary": {
    "commitCount": 637,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 331416,
    "forks": 64531,
    "openIssues": 14999
  },
  "releases": [
    {
      "tag_name": "v2026.3.22",
      "published_at": "2026-03-23T11:11:22Z",
      "name": "openclaw 2026.3.22",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.3.22"
    },
    {
      "tag_name": "v2026.3.22-beta.1",
      "published_at": "2026-03-23T09:37:57Z",
      "name": "openclaw 2026.3.22-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.3.22-beta.1"
    }
  ],
  "featureItems": [
    "ClawHub/install: add native `openclaw skills search|install|update` flows plus `openclaw plugins install clawhub:<package>` with tracked update metadata, gateway skill-install/update support for ClawHub-backed requests, and regression coverage/docs for the new source path. [v2026.3.22]",
    "Plugins/marketplaces: add Claude marketplace registry resolution, `plugin@marketplace` installs, marketplace listing, and update support, plus Docker E2E coverage for local and official marketplace flows. (#48058) Thanks @vincentkoc. [v2026.3.22]",
    "Commands/plugins: add owner-gated `/plugins` and `/plugin` chat commands for plugin list/show and enable/disable flows, alongside explicit `commands.plugins` config gating. Thanks @vincentkoc. [v2026.3.22]",
    "Plugins/bundles: add compatible Codex, Claude, and Cursor bundle discovery/install support, map bundle skills into OpenClaw skills, and apply Claude bundle `settings.json` defaults to embedded Pi with shell overrides sanitized. [v2026.3.22]",
    "Agents: add per-agent thinking/reasoning/fast defaults and auto-revert disallowed model overrides to the agent's default selection. Thanks @xuanmingguo and @vincentkoc. [v2026.3.22]",
    "Commands/btw: add `/btw` side questions for quick tool-less answers about the current session without changing future session context, with dismissible in-session TUI answers and explicit BTW replies on external channels. (#45444) Thanks @ngutman. [v2026.3.22]",
    "Sandbox/runtime: add pluggable sandbox backends, ship an OpenShell backend with `mirror` and `remote` workspace modes, and make sandbox list/recreate/prune backend-aware instead of Docker-only. [v2026.3.22]",
    "Sandbox/SSH: add a core SSH sandbox backend with secret-backed key, certificate, and known_hosts inputs, move shared remote exec/filesystem tooling into core, and keep OpenShell focused on sandbox lifecycle plus optional `mirror` mode. [v2026.3.22]"
  ],
  "fixItems": [
    "Security/pairing: bind iOS setup codes to the intended node profile and reject first-use bootstrap redemption that asks for broader roles or scopes. Thanks @tdjackey. [v2026.3.22]",
    "Slack/startup: harden `@slack/bolt` import interop across current bundled runtime shapes so Slack monitors no longer crash with `App is not a constructor` after plugin-sdk bundling changes. (#45953) Thanks @merc1305. [v2026.3.22]",
    "Security/device pairing: harden `device.token.rotate` deny handling by keeping public failures generic while logging internal deny reasons and preserving approved-baseline enforcement. (`GHSA-7jrw-x62h-64p8`) [v2026.3.22]",
    "Security/exec safe bins: remove `jq` from the default safe-bin allowlist and fail closed on the `jq` `env` builtin when operators explicitly opt `jq` back in, so `jq -n env` cannot dump host secrets without an explicit trust path. Thanks @gladiator9797 for reporting. [v2026.3.22]",
    "Security/exec approvals: escape blank Hangul filler code points in approval prompts across gateway/chat and the macOS native approval UI so visually empty Unicode padding cannot hide reviewed command text. [v2026.3.22]",
    "Security/exec approvals: unify transparent dispatch-wrapper handling across resolution and allow-always persistence so wrapper metadata cannot silently drift and broaden approvals. [v2026.3.22]",
    "Security/exec: harden macOS allowlist resolution against wrapper and `env` spoofing, require fresh approval for inline interpreter eval with `tools.exec.strictInlineEval`, wrap Discord guild message bodies as untrusted external content, and add audit findings for risky exec approval and open-channel combinations. [v2026.3.22]",
    "Security/network: harden explicit-proxy SSRF pinning by translating target-hop transport hints onto HTTPS proxy tunnels and failing closed for plain HTTP guarded fetches that cannot preserve pinned DNS. [v2026.3.22]"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 125
    },
    {
      "scope": "refactor",
      "count": 81
    },
    {
      "scope": "fix",
      "count": 62
    },
    {
      "scope": "docs",
      "count": 40
    },
    {
      "scope": "perf",
      "count": 38
    },
    {
      "scope": "ci",
      "count": 31
    },
    {
      "scope": "gateway",
      "count": 14
    },
    {
      "scope": "plugins",
      "count": 13
    }
  ],
  "headlineCommits": [
    "CI: remove npm release preview workflow (#52825)",
    "refactor: isolate attempt context engine thread helpers",
    "test: remove replaced spawn-workspace monolith",
    "test: split attempt spawn-workspace thread fixtures",
    "test: reset line webhook mocks between cases",
    "fix: declare typebox runtime dep for mattermost plugin",
    "fix: refactor deepseek bundled plugin (#48762) (thanks @07akioni)",
    "fix: document Telegram asDocument alias (#52461) (thanks @bakhtiersizhaev)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
