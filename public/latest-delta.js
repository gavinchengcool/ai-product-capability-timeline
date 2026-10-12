window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-10-13T04:28:50.395237+08:00",
  "window": {
    "start_local": "2026-10-12T04:28:50.395237+08:00",
    "end_local": "2026-10-13T04:28:50.395237+08:00",
    "start_utc": "2026-10-11T20:28:50Z",
    "end_utc": "2026-10-12T20:28:50Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 391785,
    "forks": 82377,
    "open_issues": 9600,
    "pushed_at": "2026-10-12T20:28:40Z"
  },
  "summary": {
    "commitCount": 791,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 391785,
    "forks": 82377,
    "openIssues": 9600
  },
  "releases": [
    {
      "tag_name": "v2026.10.5-beta.2",
      "published_at": "2026-10-12T12:10:48Z",
      "name": "openclaw 2026.10.5-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2"
    },
    {
      "tag_name": "v2026.10.2",
      "published_at": "2026-10-12T05:34:44Z",
      "name": "openclaw 2026.10.2",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.10.2"
    }
  ],
  "featureItems": [
    "**Session notices:** creating many sessions gives the main session one summary of new sessions instead of separate notices that crowd out reminders and wakes. (#168239) [v2026.10.5-beta.2]",
    "feat(macos): start fresh installs in guided dashboard setup (#169568)",
    "feat: support local Gateways in the Windows desktop app (#169522)",
    "feat(database): share experimental database engine adapters (#169933)",
    "feat: show or hide values in secure entry prompts (#169925)",
    "feat: experimental PostgreSQL engine for the workboard store (#169214)",
    "feat: show session-specific previews for public links (#169527)",
    "feat(agents): prioritize shared private vLLM requests (#129434)"
  ],
  "fixItems": [
    "Fixed credential leaks across redaction chunk boundaries and redaction stalls on large tool output. (#161480) Thanks @eleqtrizit. [v2026.10.2]",
    "Fixed replies lost while an agent finishes starting, streamed Telegram replies vanishing when the replacement message never lands, and Telegram treating local owner rejection as ambiguous delivery. (#168826, #164649, #167470) Thanks @xiaozishan, @jayzhou2309, @obviyus, @jmar5439, and @mgr-nick. [v2026.10.2]",
    "Fixed Claude CLI sessions showing runtime prompts as user messages, routed CLI prompts appearing on the owner's side of history, lost replies after long streamed turns, and post-turn compaction failing without an Anthropic API key. (#166080, #163521, #153545, #162066) Thanks @Marvinthebored, @Peetiegonzalez, @RomneyDa, @rogeriochaves, @zhangguiping-xydt, @obviyus, @methylester, @llmsommelier, and @ajmtrz. [v2026.10.2]",
    "Fixed subagent and ACP answers being truncated, superseded child answers delivered by late receipts, and requester turns stopping when completion delivery expires. (#165800, #162843, #166139, #164282) Thanks @yetval, @holgergruenhagen, @zyz619963502zyz, @Yun-0000, @michaeljgood71, @Oldrich333, and @obviyus. [v2026.10.2]",
    "Fixed runs aborted as stalled after completed async tools or while waiting on plugin approval, context-engine advancement lost after steering, and the tool loop refilling from the wrong context window. (#166997, #161821, #168394, #166120) Thanks @SunnyShu0925, @hannesrudolph, @fransqaas, @obviyus, @robertoronderosjr, @ruel225, and @igs-rogenlo. [v2026.10.2]",
    "Fixed OpenAI turns failing on regex-lookaround tool schemas, ChatGPT websocket expiry and 16 MiB SSE limits, strict chat templates after runtime notices, and Code Mode calls with repeated tool-call IDs. (#166999, #167063, #166853, #167309, #165210) Thanks @scs0209, @cursoragent, @obviyus, @adamjgmiller, @Jackten, @jlapenna, and @RomneyDa. [v2026.10.2]",
    "Fixed Codex sessions stopping after thread unloads, leaked app-server clients after model discovery timeouts, provider failures shown as a silent stop, and max thinking dropping on cron and hook turns. (#166693, #168365, #165488, #165444) Thanks @jalehman, @Oldrich333, and @obviyus. [v2026.10.2]",
    "Fixed sessions failing every turn after a truncated image, the agent disowning earlier image answers, and memory_search snake_case arguments being rejected through tool_call. (#166564, #166165, #158632) Thanks @jayzhou2309, @mirasrael, @nogikeyaksh, @masatohoshino, and @obviyus. [v2026.10.2]"
  ],
  "topScopes": [
    {
      "scope": "ui",
      "count": 111
    },
    {
      "scope": "gateway",
      "count": 72
    },
    {
      "scope": "sessions",
      "count": 68
    },
    {
      "scope": "fix",
      "count": 50
    },
    {
      "scope": "test",
      "count": 44
    },
    {
      "scope": "ci",
      "count": 41
    },
    {
      "scope": "agents",
      "count": 32
    },
    {
      "scope": "update",
      "count": 30
    }
  ],
  "headlineCommits": [
    "fix(update): preserve unsafe Doctor recovery guidance (#170207)",
    "fix: chat turns fail when session receipts exceed transport limits (#169843)",
    "fix(auth): invalidate persisted profiles on explicit refresh (#170201)",
    "fix: recover interrupted worker claims before turn admission (#170161)",
    "test: remove dead single-case fixture branches (#170205)",
    "perf(sessions): reuse actor projection receipts for history reads (#170127)",
    "fix(database): make shared-state queries portable to PostgreSQL (#170055)",
    "test: remove redundant worker probe self-tests (#170197)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
