window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-07-11T20:45:04.889093+08:00",
  "window": {
    "start_local": "2026-07-10T20:45:04.889093+08:00",
    "end_local": "2026-07-11T20:45:04.889093+08:00",
    "start_utc": "2026-07-10T12:45:04Z",
    "end_utc": "2026-07-11T12:45:04Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 382564,
    "forks": 80298,
    "open_issues": 6429,
    "pushed_at": "2026-07-11T12:44:51Z"
  },
  "summary": {
    "commitCount": 486,
    "releaseCount": 1,
    "stableReleaseCount": 0,
    "betaReleaseCount": 1,
    "stars": 382564,
    "forks": 80298,
    "openIssues": 6429
  },
  "releases": [
    {
      "tag_name": "v2026.7.1-beta.5",
      "published_at": "2026-07-11T10:36:02Z",
      "name": "OpenClaw 2026.7.1-beta.5",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.5"
    }
  ],
  "featureItems": [
    "**Meta provider:** add bundled `muse-spark-1.1` Responses API support with streaming, tool calls, encrypted reasoning replay, onboarding, exact-model live validation, and standalone npm/ClawHub distribution as `@openclaw/meta-provider`. (#102873, #103070, #103163) Thanks @HamidShojanazeri, @davemorin, @Solvely-Colin, @jalehman, and @vincentkoc. [v2026.7.1-beta.5]",
    "**Logbook work journal:** add a disabled-by-default bundled plugin that turns paired-node screen snapshots into a private timeline, daily standup, and timeline-grounded Q&A in a plugin-contributed Control UI tab. (#99930) [v2026.7.1-beta.5]",
    "**Android chat code highlighting:** render fenced Kotlin, Swift, TypeScript, JavaScript, Python, Bash, and JSON blocks with bounded, theme-aware syntax colors while preserving plain rendering for unknown, partial, or oversized blocks. (#100217) [v2026.7.1-beta.5]",
    "**Gateway TTS playback:** add an operator-scoped `tts.speak` RPC that returns configured-provider speech as inline whole-clip audio for remote clients. (#100770) [v2026.7.1-beta.5]",
    "**Apple Watch voice turns:** dictate a message from the Watch chat and hear the new OpenClaw reply spoken on the Watch, with explicit silent-message and stop-speaking controls. (#100224) Thanks @vincentkoc. [v2026.7.1-beta.5]",
    "**Conversational onboarding:** add a real agent-loop Crestodian setup flow across the CLI, Gateway, web install, and macOS app, with typed operations, exact approval binding, masked credential prompts, isolated session transcripts, and safe handoff to the normal agent. Thanks @vincentkoc. [v2026.7.1-beta.5]",
    "**Generated session titles:** name new Control UI sessions from their first message, and add default/per-agent `utilityModel` routing for lower-cost session, topic, and thread title generation. Thanks @Juliangsm, @zhangguiping-xydt, and @vincentkoc. [v2026.7.1-beta.5]",
    "**ClawRouter routing and quotas:** add the bundled ClawRouter provider plugin with credential-scoped dynamic model discovery, OpenAI-compatible and native Anthropic/Gemini transports, and managed budget reporting across OpenClaw usage surfaces. (#99658) [v2026.7.1-beta.5]"
  ],
  "fixItems": [
    "**Subprocess, maintenance, and output hardening:** keep child output failures from crashing exec and TUI sessions, isolate remote skill refresh and subagent sweeps, surface skill-scan and approval diagnostics, sanitize ANSI and stray parameter markup without losing visible text, and stop Android audio capture cleanly on device loss. (#100440) Thanks @cxbAsDev, @wendy-chsy, @tzy-17, @nankingjing, @NianJiuZst, @LavyaTandel, and @maweibin. [v2026.7.1-beta.5]",
    "fix(ci): validate older release targets (#103975)",
    "fix(agents): truncate multibyte middleware details at byte limit (#104156)",
    "fix: route node policy plugin approvals (#98561)",
    "fix(tools): reject malformed availability expressions (#92411)",
    "fix(gateway): cap history when numeric limit is huge (#104263)",
    "fix(release): validate Telegram launcher syntax (#104455)",
    "fix(code-mode): report UTF-8 API file byte counts (#104244)"
  ],
  "topScopes": [
    {
      "scope": "release",
      "count": 67
    },
    {
      "scope": "ui",
      "count": 34
    },
    {
      "scope": "agents",
      "count": 28
    },
    {
      "scope": "fix",
      "count": 26
    },
    {
      "scope": "ci",
      "count": 25
    },
    {
      "scope": "gateway",
      "count": 18
    },
    {
      "scope": "macos",
      "count": 13
    },
    {
      "scope": "telegram",
      "count": 11
    }
  ],
  "headlineCommits": [
    "fix(ci): validate older release targets (#103975)",
    "fix(agents): truncate multibyte middleware details at byte limit (#104156)",
    "feat: show Codex transcripts in the sidebar (#104437)",
    "fix: route node policy plugin approvals (#98561)",
    "improve(ci): let Kova own diagnostic build profiles (#104459)",
    "fix(tools): reject malformed availability expressions (#92411)",
    "fix(gateway): cap history when numeric limit is huge (#104263)",
    "fix(release): validate Telegram launcher syntax (#104455)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
