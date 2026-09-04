window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-09-04T23:14:12.280701+08:00",
  "window": {
    "start_local": "2026-09-03T23:14:12.280701+08:00",
    "end_local": "2026-09-04T23:14:12.280701+08:00",
    "start_utc": "2026-09-03T15:14:12Z",
    "end_utc": "2026-09-04T15:14:12Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 388832,
    "forks": 81672,
    "open_issues": 6252,
    "pushed_at": "2026-09-04T15:13:55Z"
  },
  "summary": {
    "commitCount": 442,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 388832,
    "forks": 81672,
    "openIssues": 6252
  },
  "releases": [
    {
      "tag_name": "v2026.9.1",
      "published_at": "2026-09-03T18:31:33Z",
      "name": "openclaw 2026.9.1",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.9.1"
    }
  ],
  "featureItems": [
    "**New models and usage:** support Anthropic Fable 5.1 from shared model metadata, show SuperGrok usage in `openclaw models` and the usage panel, keep GPT-5.6 Ultra selected across runtime boundaries and configured native accounts, and keep Sonnet 5 pricing current on Vertex. Related #135623, #135991, #135664. (#135638, #135766, #135397, #136061, #135761) [v2026.9.1]",
    "**Session naming and switching:** new-session names are prepared after idle typing, switching sessions in large lists is faster with lighter sidebar work and payloads, sidebar catalog groups are capped at five sessions, and New Session and Chat do less startup work. Related #133702. (#133724, #135021, #135332, #135574, #136362, #136021, #136040) Thanks @fuller-stack-dev. [v2026.9.1]",
    "**Control UI layout:** sidebar controls move into the agent header, session context menus are regrouped, the accent color lives with the theme, dashboard widgets fill mobile width, the shared Agent picker and settings pages are streamlined with loading skeletons, hovercards show participants, and Gateway suspension appears in account footers. Related #135506, #135535, #132147. (#134365, #135526, #135547, #133814, #134680, #134684, #134659, #134636, #136542, #136220, #134478, #134764) Thanks @vyctorbrzezowski, @MoerAI, and @Patrick-Erichsen. [v2026.9.1]",
    "feat(gateway): apply more settings without restarting (#138112)",
    "feat(macos): simplify node and device pairing approvals (#138137)",
    "feat(diagnostics): measure gateway RPC latency phases (#138015)",
    "feat: enable Swarm by default (#136514)",
    "feat(ui): make task panels interchangeable (#138077)"
  ],
  "fixItems": [
    "perf: avoid temporary entries in bounded JSON traversal (#138017)",
    "fix(irc): render complete messages before splitting (#138328)",
    "perf: prepare worker trajectory payloads only for recorded events (#138086)",
    "fix(mcp): paginated listings no longer time out after a forward clock step (#137206)",
    "fix(codex): page native transcripts and bound UI previews (#136282)",
    "fix(docs): preserve mirrored ClawHub maturity links (#138241)",
    "fix(test): own UI animation and legacy database setup (#138296)",
    "fix(tts): preserve literal directives in Markdown code (#138319)"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 36
    },
    {
      "scope": "ui",
      "count": 36
    },
    {
      "scope": "test",
      "count": 29
    },
    {
      "scope": "gateway",
      "count": 26
    },
    {
      "scope": "perf",
      "count": 23
    },
    {
      "scope": "ci",
      "count": 22
    },
    {
      "scope": "agents",
      "count": 15
    },
    {
      "scope": "cron",
      "count": 11
    }
  ],
  "headlineCommits": [
    "perf: avoid temporary entries in bounded JSON traversal (#138017)",
    "fix(irc): render complete messages before splitting (#138328)",
    "perf: prepare worker trajectory payloads only for recorded events (#138086)",
    "fix(mcp): paginated listings no longer time out after a forward clock step (#137206)",
    "fix(codex): page native transcripts and bound UI previews (#136282)",
    "feat(gateway): apply more settings without restarting (#138112)",
    "fix(docs): preserve mirrored ClawHub maturity links (#138241)",
    "fix(test): own UI animation and legacy database setup (#138296)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
