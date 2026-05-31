window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-31T21:06:06.815500+08:00",
  "window": {
    "start_local": "2026-05-30T21:06:06.815500+08:00",
    "end_local": "2026-05-31T21:06:06.815500+08:00",
    "start_utc": "2026-05-30T13:06:06Z",
    "end_utc": "2026-05-31T13:06:06Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 375792,
    "forks": 78456,
    "open_issues": 7028,
    "pushed_at": "2026-05-31T13:05:56Z"
  },
  "summary": {
    "commitCount": 598,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 375792,
    "forks": 78456,
    "openIssues": 7028
  },
  "releases": [
    {
      "tag_name": "v2026.5.30-beta.1",
      "published_at": "2026-05-31T02:39:53Z",
      "name": "openclaw 2026.5.30-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.30-beta.1"
    },
    {
      "tag_name": "v2026.5.28",
      "published_at": "2026-05-30T20:06:10Z",
      "name": "openclaw 2026.5.28",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.28"
    }
  ],
  "featureItems": [
    "Skills: let Skill Workshop proposals carry approved support files under standard skill folders, with scanner, hash, and rollback safeguards. Thanks @shakkernerd. [v2026.5.30-beta.1]",
    "Skills: add Skill Workshop proposals with pending `PROPOSAL.md` drafts, CLI/Gateway review actions, rollback metadata, and the `skill_research` agent tool. Thanks @shakkernerd. [v2026.5.30-beta.1]",
    "iOS: add hosted push relay defaults, realtime Talk playback, and a guarded WebSocket ping path for more reliable mobile sessions. (#88096, #88105, #88231) [v2026.5.30-beta.1]",
    "Workboard: add orchestration primitives and agent coordination tools for multi-agent planning and run tracking. (#87469) [v2026.5.30-beta.1]",
    "Code mode: add internal namespaces for scoped agent/global sessions and exact namespace tool dispatch. (#88043) [v2026.5.30-beta.1]",
    "Control UI: add a Dreaming-tab agent selector and propagate the selected agent through Dreaming status, diary, and diary actions. (#78748) Thanks @stevenepalmer. [v2026.5.30-beta.1]",
    "Plugins: add a SecretRef provider integration manifest contract and extract shared LLM core packages for provider/plugin reuse. (#82326, #88117) [v2026.5.30-beta.1]",
    "Skills: add the core skills index and centralize skills runtime loading, status, filtering, and prompt formatting. [v2026.5.30-beta.1]"
  ],
  "fixItems": [
    "Security/config parsing: reject unsafe OAuth/token lifetimes, retry-after delays, inbound timestamps, response body sizes, command timeout config, sandbox observer token TTLs, and gateway WebSocket calls after close. [v2026.5.30-beta.1]",
    "Performance: prebuild QA runtime probes with generated plugin assets but without CLI startup metadata. [v2026.5.30-beta.1]",
    "Performance: skip declaration bundling for runtime-only CLI startup and gateway watch build profiles. [v2026.5.30-beta.1]",
    "Performance: reuse prepared provider handles, strict tool schemas, gateway runtime metadata, session maintenance config, plugin metadata, bundled skill allowlists, package-local plugin artifacts, single-entry store writes, and validated/serialized session prompt blobs. [v2026.5.30-beta.1]",
    "CLI/auth/doctor/providers: reject malformed numeric/timeout/subcommand-version inputs, ignore workspace dotenv provider credentials, wait for respawn child shutdown, bound heartbeat defaults plus Codex, GitHub Copilot, OpenAI, Anthropic, Google, Feishu, LM Studio, MiniMax, Xiaomi TTS, and local-provider OAuth/token/model requests, harden Codex auth probes, label auth health by agent, preserve explicit agentRuntime pins during Codex model migration, warm provider auth off the main thread, honor Codex response timeouts, stop migrating current Claude Haiku 4.5 profiles to Sonnet, bound local service startup, resolve GPT-5.5 without cached catalog, migrate legacy memory auto-provider config, rewrite non-canonical `api_key` auth profiles, and make doctor restart follow-ups actionable. (#87398, #86281, #87361, #88133, #83655, #87559, #87719, #88088, #85924, #84362) Thanks @Patrick-Erichsen, @samzong, @giodl73-repo, @alkor2000, @mmaps, @nxmxbbd, and @vincentkoc. [v2026.5.28]",
    "Browser/input hardening: reject invalid tab indexes, excessive viewport resizes, explicit zero CDP ports, malformed geolocation options, unsafe screenshot or permission-grant timeouts, loose response-body limits, invalid cookie expiries, and non-finite Browser tool delays/timeouts. [v2026.5.28]",
    "Agents/tool args: harden smart-quoted argument repair for edit arrays and exact escaped arguments so model-produced tool calls recover without corrupting valid input. (#86611) Thanks @ferminquant. [v2026.5.28]",
    "Performance: trust install-record caches between reloads, prefer native JSON parsing, reuse unchanged tool-search catalogs, reuse gateway session and plugin metadata paths, skip unchanged store serialization, patch single-entry session writes, add precomputed session patch writers, reduce store clone allocations, cache manifest model catalog rows and auto-enabled plugin config, avoid full session snapshots for entry reads, defer configured Slack full startup, prefer bundled plugin dist entries, and slim current metadata identity caches. (#87760) [v2026.5.28]"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 51
    },
    {
      "scope": "agents",
      "count": 42
    },
    {
      "scope": "gateway",
      "count": 31
    },
    {
      "scope": "ui",
      "count": 27
    },
    {
      "scope": "refactor",
      "count": 25
    },
    {
      "scope": "ci",
      "count": 22
    },
    {
      "scope": "discord",
      "count": 20
    },
    {
      "scope": "docs",
      "count": 19
    }
  ],
  "headlineCommits": [
    "refactor(openai): confine legacy codex repair to doctor",
    "fix(auto-reply): honor per-model thinking params",
    "refactor(cron): keep legacy notify migration in doctor",
    "fix(exec): allow predicate shell builtins in allowlist mode",
    "test(voice-call): drive Twilio stream failure timers",
    "fix(diagnostics): surface Bonjour state in support exports",
    "perf(cli): narrow gateway dispatch startup",
    "docs: tighten refactor storage policy"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
