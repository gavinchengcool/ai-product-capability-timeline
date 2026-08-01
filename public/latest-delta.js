window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-08-01T20:47:31.720252+08:00",
  "window": {
    "start_local": "2026-07-31T20:47:31.720252+08:00",
    "end_local": "2026-08-01T20:47:31.720252+08:00",
    "start_utc": "2026-07-31T12:47:31Z",
    "end_utc": "2026-08-01T12:47:31Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 384786,
    "forks": 80865,
    "open_issues": 5669,
    "pushed_at": "2026-08-01T12:45:34Z"
  },
  "summary": {
    "commitCount": 463,
    "releaseCount": 1,
    "stableReleaseCount": 0,
    "betaReleaseCount": 1,
    "stars": 384786,
    "forks": 80865,
    "openIssues": 5669
  },
  "releases": [
    {
      "tag_name": "v2026.7.2-beta.6",
      "published_at": "2026-08-01T05:34:32Z",
      "name": "openclaw 2026.7.2-beta.6",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.6"
    }
  ],
  "featureItems": [
    "**Models and providers:** add Claude Opus 5 across catalog and runtime, Kimi K3, and GPT Live realtime support with the supported Platform API authentication path. (#113391, #113392, #113633; related #113412; #113909, #113354; related #113353) Thanks @fuller-stack-dev, @vincentkoc, and @Solvely-Colin. [v2026.7.2-beta.6]",
    "**Local inference and setup:** detect local inference providers during onboarding, add in-process llama.cpp GGUF inference and Baseten Model API support, discover models from live provider catalogs, and offer model downloads from web and macOS setup. (#108605; related #108604; #109444, #108708; related #108665; #112412; related #112405; #113476) Thanks @fuller-stack-dev. [v2026.7.2-beta.6]",
    "**Sessions and dashboards:** add rewind/fork and branch switching across web and native chat, session boards and dashboards, archived/visibility/draft/incognito session states, and suggestion queues with typing indicators. (#110660, #110857, #110886, #111149, #110644, #110960, #112554, #112787, #113006, #113127, #113173) [v2026.7.2-beta.6]",
    "**Native apps:** bring Quick Chat to macOS and Linux with streaming, routing, context capture, dictation, and model controls; add Linux desktop integration and signed updates; add multi-gateway apps and mobile dashboards; and expand Wear OS companion/Talk support. (#109720, #109947, #110285, #110631, #110632, #110635, #110994, #109236, #108770, #111932; related #111931; #112163, #109341, #109433; related #108781; #109483, #112721) Thanks @sibbl, @IWhatsskill, @Solvely-Colin, and @vincentkoc. [v2026.7.2-beta.6]",
    "**Meetings:** add Teams and Zoom meeting guests, enable Teams, Zoom, and Google Meet plugins by default, and automatically collect durable meeting transcripts. (#109964, #111048, #113022, #113053, #113122) [v2026.7.2-beta.6]",
    "**Channels:** add the Buzz plugin, Slack user-identity and Agent View modes, Telegram Bot API rich blocks and native Markdown lists, and richer Matrix formatting. (#113419, #109837, #103895; related #103673; #107986, #113158, #113199) Thanks @Patrick-Erichsen and @obviyus. [v2026.7.2-beta.6]",
    "**Browser and MCP Apps:** add a secure per-tab browser copilot, batch browser CLI, bounded page-question extraction, a ticketed MCP App host and Control UI bridge, and manifest-declared MCP Apps for native plugins. (#109817, #111457, #113861, #109861; related #109851; #109807, #113224; related #113218) Thanks @anagnorisis2peripeteia, @FMLS, @cursoragent, @hxy91819, and @fuller-stack-dev. [v2026.7.2-beta.6]",
    "**Memory:** add fast active-memory recall, default cross-conversation recall for personal installs, guided imports from Claude Code/Codex/Hermes, and a dedicated Memory settings page. (#108043, #110597, #108977, #114037) [v2026.7.2-beta.6]"
  ],
  "fixItems": [
    "**Security and authorization:** prevent channel allowlists from granting owner access, keep session exports inside the workspace, close a forged-marker/web-search boundary bypass, prevent non-owner ACP session exposure, reject unsafe explicit approval IDs, harden secret redaction and exec/OAuth approvals, validate downloaded install scripts, and prevent insecure secrets-plan writes. (#107403; related #104984; #104708; related #102391; #110417, #110745; related #103055; #111055, #112947, #112952, #112953, #112956, #112946, #112957, #113307; related #90013; #113707) Thanks @obviyus, @yetval, @VACInc, @pgondhi987, and @SebTardif. [v2026.7.2-beta.6]",
    "fix(agents): avoid provider discovery when cache pruning is off (#117396)",
    "fix(tui): cancel buffered submissions on shutdown [AI-assisted] (#117331)",
    "fix(ci): accept attested legacy Telegram evidence (#117330)",
    "fix(plugins): surface actionable doctor warnings (#117357)",
    "fix(ci): use corrected Kova release evaluator (#116920)",
    "fix(ci): stabilize release validation assertions (#117377)",
    "fix(plugins): require tracked owners for targeted updates (#117333)"
  ],
  "topScopes": [
    {
      "scope": "agents",
      "count": 36
    },
    {
      "scope": "merge",
      "count": 35
    },
    {
      "scope": "ui",
      "count": 33
    },
    {
      "scope": "ci",
      "count": 27
    },
    {
      "scope": "gateway",
      "count": 26
    },
    {
      "scope": "talk",
      "count": 26
    },
    {
      "scope": "plugins",
      "count": 20
    },
    {
      "scope": "qa",
      "count": 13
    }
  ],
  "headlineCommits": [
    "fix(agents): avoid provider discovery when cache pruning is off (#117396)",
    "refactor(codex): deduplicate generated protocol schemas (#117382)",
    "Merge pull request #117399 from openclaw/fix-xai-realtime-connect-lifecycle",
    "refactor: compact database-first legacy store guard (#117347)",
    "fix(tui): cancel buffered submissions on shutdown [AI-assisted] (#117331)",
    "chore: merge main into xai realtime lifecycle",
    "fix(ci): accept attested legacy Telegram evidence (#117330)",
    "refactor(doctor): unify legacy auth migration ownership (#117361)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
