window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-30T21:15:21.193722+08:00",
  "window": {
    "start_local": "2026-04-29T21:15:21.193722+08:00",
    "end_local": "2026-04-30T21:15:21.193722+08:00",
    "start_utc": "2026-04-29T13:15:21Z",
    "end_utc": "2026-04-30T13:15:21Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 366657,
    "forks": 75275,
    "open_issues": 6932,
    "pushed_at": "2026-04-30T12:56:25Z"
  },
  "summary": {
    "commitCount": 540,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 366657,
    "forks": 75275,
    "openIssues": 6932
  },
  "releases": [
    {
      "tag_name": "v2026.4.29-beta.1",
      "published_at": "2026-04-30T09:33:26Z",
      "name": "OpenClaw 2026.4.29-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.29-beta.1"
    },
    {
      "tag_name": "v2026.4.27",
      "published_at": "2026-04-29T22:12:19Z",
      "name": "openclaw 2026.4.27",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.27"
    }
  ],
  "featureItems": [
    "Agents/commitments: add opt-in inferred follow-up commitments with hidden batched extraction, per-agent/per-channel scoping, heartbeat delivery, CLI management, a simple `commitments.enabled`/`commitments.maxPerDay` config, and heartbeat-interval due-time clamping so magical check-ins do not echo immediately. (#74189) Thanks @vignesh07. [v2026.4.29-beta.1]",
    "Messages/queue: make `steer` drain all pending Pi steering messages at the next model boundary, keep legacy one-at-a-time steering as `queue`, and add a dedicated steering queue docs page. Thanks @vincentkoc. [v2026.4.29-beta.1]",
    "Messages: add global `messages.visibleReplies` so operators can require visible output to go through `message(action=send)` for any source chat, while `messages.groupChat.visibleReplies` stays available as the group/channel override. Thanks @scoootscooob. [v2026.4.29-beta.1]",
    "Memory/wiki: add agent-facing people wiki metadata, canonical aliases, person cards, relationship graphs, privacy/provenance reports, evidence-kind drilldown, and search modes for person lookup, question routing, source evidence, and raw claims. Thanks @vincentkoc. [v2026.4.29-beta.1]",
    "Active Memory: add optional per-conversation `allowedChatIds` and `deniedChatIds` filters so operators can enable recall only for selected direct, group, or channel conversations while keeping broad sessions skipped. (#67977) Thanks @quengh. [v2026.4.29-beta.1]",
    "Gateway/memory: add a read-only `doctor.memory.remHarness` RPC so operator clients can preview bounded REM dreaming output without running mutation paths. (#66673) Thanks @samzong. [v2026.4.29-beta.1]",
    "Providers/NVIDIA: add the NVIDIA provider with API-key onboarding, setup docs, static catalog metadata, and literal model-ref picker support so NVIDIA hosted models can be selected with their provider prefix intact. (#71204) Thanks @eleqtrizit. [v2026.4.29-beta.1]",
    "Added SQLite-backed plugin state store (`api.runtime.state.openKeyedStore`) for restart-safe keyed registries with TTL, eviction, and automatic plugin isolation. Thanks @amknight. [v2026.4.29-beta.1]"
  ],
  "fixItems": [
    "Security/outbound: strip re-formed HTML tags during plain-text sanitization so nested tag fragments cannot leave a CodeQL-detected `<script>` sequence behind. Thanks @vincentkoc. [v2026.4.29-beta.1]",
    "Security/secrets: compare credential bytes with padded timing-safe buffers instead of hashing candidate passwords before equality checks. Thanks @vincentkoc. [v2026.4.29-beta.1]",
    "Security/QQBot: sanitize debug log arguments before writing to `console.*`, so gateway payload fields cannot forge extra log lines when debug logging is enabled. Thanks @vincentkoc. [v2026.4.29-beta.1]",
    "Security/audit: resolve configured model aliases before model-tier and small-parameter checks, so alias-based GPT-5/Codex configs no longer report false weak-model warnings. Fixes #74455. Thanks @blaspat. [v2026.4.29-beta.1]",
    "Docs/Hetzner: clarify that SSH tunnel access requires `AllowTcpForwarding local` before running `ssh -L`, so hardened VPS sshd configs do not block loopback Gateway access. Fixes #54557; carries forward #54564; refs #54954. Thanks @satishkc7, @blackstrype, and @Aftabbs. [v2026.4.29-beta.1]",
    "Gateway/shutdown: report structured shutdown warnings and HTTP close timeout warnings through `ShutdownResult` while preserving lifecycle hook hardening. Carries forward #41296. Thanks @edenfunf. [v2026.4.29-beta.1]",
    "Security/audit: recognize dangerous node command IDs as valid `gateway.nodes.denyCommands` entries, so audit only warns on real typos or unsupported patterns. (#56923) Thanks @chziyue. [v2026.4.29-beta.1]",
    "Security/Telegram: load Telegram security adapters in read-only audit/doctor, audit malformed Telegram DM `allowFrom` entries even when groups are disabled, and keep allowlist DM audits from counting stale pairing-store senders, so public/shared-DM risk checks stay accurate. Refs #73698. Thanks @xace1825. [v2026.4.29-beta.1]"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 90
    },
    {
      "scope": "ci",
      "count": 58
    },
    {
      "scope": "ui",
      "count": 58
    },
    {
      "scope": "docs",
      "count": 35
    },
    {
      "scope": "test",
      "count": 27
    },
    {
      "scope": "discord",
      "count": 23
    },
    {
      "scope": "plugins",
      "count": 22
    },
    {
      "scope": "agents",
      "count": 15
    }
  ],
  "headlineCommits": [
    "docs(tools): note explicit alsoAllow needed under restrictive profiles (4aa08e9d79)",
    "fix: remove Telegram native draft previews (#75073)",
    "docs(telegram): remove native draft fallback note",
    "test(telegram): cover message-only previews",
    "fix(telegram): remove native draft preview transport",
    "fix(security): stop implicit tool grants from config sections (#47487) (#75055)",
    "fix(macos): keep A2UI canvas content visible (#75039)",
    "fix(macos): repair stale gateway tls pins (#75038)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
