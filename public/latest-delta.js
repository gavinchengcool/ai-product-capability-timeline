window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-13T20:55:10.967897+08:00",
  "window": {
    "start_local": "2026-04-12T20:55:10.967897+08:00",
    "end_local": "2026-04-13T20:55:10.967897+08:00",
    "start_utc": "2026-04-12T12:55:10Z",
    "end_utc": "2026-04-13T12:55:10Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 356197,
    "forks": 72178,
    "open_issues": 18370,
    "pushed_at": "2026-04-13T12:35:31Z"
  },
  "summary": {
    "commitCount": 179,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 356197,
    "forks": 72178,
    "openIssues": 18370
  },
  "releases": [
    {
      "tag_name": "v2026.4.12",
      "published_at": "2026-04-13T12:35:53Z",
      "name": "openclaw 2026.4.12",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.12"
    },
    {
      "tag_name": "v2026.4.12-beta.1",
      "published_at": "2026-04-12T23:27:07Z",
      "name": "openclaw 2026.4.12-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.12-beta.1"
    }
  ],
  "featureItems": [
    "QA/lab: add Convex-backed pooled Telegram credential leasing plus `openclaw qa credentials` admin commands and broker setup docs. (#65596) Thanks @joshavant. [v2026.4.12]",
    "Memory/Active Memory: add a new optional Active Memory plugin that gives OpenClaw a dedicated memory sub-agent right before the main reply, so ongoing chats can automatically pull in relevant preferences, context, and past details without making users remember to manually say \"remember this\" or \"search memory\" first. Includes configurable message/recent/full context modes, live `/verbose` inspection, advanced prompt/thinking overrides for tuning, and opt-in transcript persistence for debugging. (#63286) Thanks @Takhoffman. [v2026.4.12]",
    "macOS/Talk: add an experimental local MLX speech provider for Talk Mode, with explicit provider selection, local utterance playback, interruption handling, and system-voice fallback. (#63539) Thanks @ImLukeF. [v2026.4.12]",
    "CLI/exec policy: add a local `openclaw exec-policy` command with `show`, `preset`, and `set` subcommands for synchronizing requested `tools.exec.*` config with the local exec approvals file, plus follow-up hardening for node-host rejection, rollback safety, and sync conflict detection. (#64050) [v2026.4.12]",
    "Gateway: add a `commands.list` RPC so remote gateway clients can discover runtime-native, text, skill, and plugin commands with surface-aware naming and serialized argument metadata. (#62656) Thanks @samzong. [v2026.4.12]",
    "Models/providers: add per-provider `models.providers.*.request.allowPrivateNetwork` for trusted self-hosted OpenAI-compatible endpoints, keep the opt-in scoped to model request surfaces, and refresh cached WebSocket managers when request transport overrides change. (#63671) Thanks @qas. [v2026.4.12]",
    "QA/testing: add a `--runner multipass` lane for `openclaw qa suite` so repo-backed QA scenarios can run inside a disposable Linux VM and write back the usual report, summary, and VM logs. (#63426) Thanks @shakkernerd. [v2026.4.12]",
    "Matrix/partial streaming: add MSC4357 live markers to draft preview sends and edits so supporting Matrix clients can render a live/typewriter animation and stop it when the final edit lands. (#63513) Thanks @TigerInYourDream. [v2026.4.12]"
  ],
  "fixItems": [
    "Security/busybox: remove busybox/toybox from interpreter-like safe bins (#65713) Thanks @pgondhi987. [v2026.4.12]",
    "Security/Approval: prevent empty approver list from granting explicit approval authorization (#65714) Thanks @pgondhi987. [v2026.4.12]",
    "Security/Shell: broaden shell-wrapper detection and block env-argv assignment injection (#65717) Thanks @pgondhi987. [v2026.4.12]",
    "Dreaming/narrative: harden transient narrative cleanup by retrying timed-out deletes, scrubbing stale dreaming session artifacts through the lock-aware session-store path, and isolating transient narrative session keys per workspace. (#65320, #61674) [v2026.4.12]",
    "CLI/exec policy: add a local `openclaw exec-policy` command with `show`, `preset`, and `set` subcommands for synchronizing requested `tools.exec.*` config with the local exec approvals file, plus follow-up hardening for node-host rejection, rollback safety, and sync conflict detection. (#64050) [v2026.4.12]",
    "QA/Telegram: add a live `openclaw qa telegram` lane for private-group bot-to-bot checks, harden its artifact handling, and preserve native Telegram command reply threading for QA verification. (#64303) Thanks @obviyus. [v2026.4.12]",
    "Dreaming/narrative: harden transient narrative cleanup by retrying timed-out deletes, scrubbing stale dreaming session artifacts through the lock-aware session-store path, and isolating transient narrative session keys per workspace. (#65320, #61674) [v2026.4.12-beta.1]",
    "fix(feishu): guard app registration fetches"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 26
    },
    {
      "scope": "gateway",
      "count": 21
    },
    {
      "scope": "agents",
      "count": 17
    },
    {
      "scope": "test",
      "count": 8
    },
    {
      "scope": "qa",
      "count": 7
    },
    {
      "scope": "memory-core",
      "count": 7
    },
    {
      "scope": "ci",
      "count": 6
    },
    {
      "scope": "release",
      "count": 6
    }
  ],
  "headlineCommits": [
    "test: fix macos parallels gateway fallback",
    "fix(feishu): guard app registration fetches",
    "fix(feishu): break auth login barrel cycle",
    "fix(feishu): keep channel auth on local api barrel",
    "fix(feishu): avoid sdk facade cycles",
    "fix(ci): verify bundled plugin runtime deps",
    "feat: Streamline Feishu channel onboarding with QR code scan-to-create flow (#65680)",
    "test(release): align pack size budget assertion"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
