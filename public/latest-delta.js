window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-22T20:54:47.702053+08:00",
  "window": {
    "start_local": "2026-04-21T20:54:47.702053+08:00",
    "end_local": "2026-04-22T20:54:47.702053+08:00",
    "start_utc": "2026-04-21T12:54:47Z",
    "end_utc": "2026-04-22T12:54:47Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 362168,
    "forks": 73973,
    "open_issues": 19188,
    "pushed_at": "2026-04-22T12:18:15Z"
  },
  "summary": {
    "commitCount": 290,
    "releaseCount": 4,
    "stableReleaseCount": 2,
    "betaReleaseCount": 2,
    "stars": 362168,
    "forks": 73973,
    "openIssues": 19188
  },
  "releases": [
    {
      "tag_name": "v2026.4.21",
      "published_at": "2026-04-22T04:18:58Z",
      "name": "openclaw 2026.4.21",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.21"
    },
    {
      "tag_name": "v2026.4.20",
      "published_at": "2026-04-21T19:19:35Z",
      "name": "openclaw 2026.4.20",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.20"
    },
    {
      "tag_name": "v2026.4.20-beta.2",
      "published_at": "2026-04-21T17:44:40Z",
      "name": "openclaw 2026.4.20-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.20-beta.2"
    },
    {
      "tag_name": "v2026.4.20-beta.1",
      "published_at": "2026-04-21T13:34:18Z",
      "name": "openclaw 2026.4.20-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.20-beta.1"
    }
  ],
  "featureItems": [
    "Onboard/wizard: restyle the setup security disclaimer with a single yellow warning banner, section headings and bulleted checklists, and un-dim the note body so key guidance is easy to scan; add a loading spinner during the initial model catalog load so the wizard no longer goes blank while it runs; add an \"API key\" placeholder to provider API key prompts. (#69553) Thanks @Patrick-Erichsen. [v2026.4.20]",
    "Models/costs: support tiered model pricing from cached catalogs and configured models, and include bundled Moonshot Kimi K2.6/K2.5 cost estimates for token-usage reports. (#67605) Thanks @sliverp. [v2026.4.20]",
    "BlueBubbles/groups: forward per-group `systemPrompt` config into inbound context `GroupSystemPrompt` so configured group-specific behavioral instructions (for example threaded-reply and tapback conventions) are injected on every turn. Supports `\"*\"` wildcard fallback matching the existing `requireMention` pattern. Closes #60665. (#69198) Thanks @omarshahine. [v2026.4.20]",
    "Plugins/tasks: add a detached runtime registration contract so plugin executors can own detached task lifecycle and cancellation without reaching into core task internals. (#68915) Thanks @mbelinky. [v2026.4.20]",
    "QA/CI: make `openclaw qa suite` and `openclaw qa telegram` fail by default when scenarios fail, add `--allow-failures` for artifact-only runs, and tighten live-lane defaults for CI automation. (#69122) Thanks @joshavant. [v2026.4.20]",
    "Onboard/wizard: restyle the setup security disclaimer with a single yellow warning banner, section headings and bulleted checklists, and un-dim the note body so key guidance is easy to scan; add a loading spinner during the initial model catalog load so the wizard no longer goes blank while it runs; add an \"API key\" placeholder to provider API key prompts. (#69553) Thanks @Patrick-Erichsen. [v2026.4.20-beta.2]",
    "Models/costs: support tiered model pricing from cached catalogs and configured models, and include bundled Moonshot Kimi K2.6/K2.5 cost estimates for token-usage reports. (#67605) Thanks @sliverp. [v2026.4.20-beta.2]",
    "BlueBubbles/groups: forward per-group `systemPrompt` config into inbound context `GroupSystemPrompt` so configured group-specific behavioral instructions (for example threaded-reply and tapback conventions) are injected on every turn. Supports `\"*\"` wildcard fallback matching the existing `requireMention` pattern. Closes #60665. (#69198) Thanks @omarshahine. [v2026.4.20-beta.2]"
  ],
  "fixItems": [
    "Exec/YOLO: stop rejecting gateway-host exec in `security=full` plus `ask=off` mode via the Python/Node script preflight hardening path, so promptless YOLO exec once again runs direct interpreter stdin and heredoc forms such as `node <<'NODE' ... NODE`. [v2026.4.20]",
    "fix(qqbot): add SSRF guard to direct-upload URL paths in uploadC2CMedia and uploadGroupMedia [AI-assisted]. (#69595) Thanks @pgondhi987. [v2026.4.20]",
    "fix(gateway): enforce allowRequestSessionKey gate on template-rendered mapping sessionKeys. (#69381) Thanks @pgondhi987. [v2026.4.20]",
    "fix(security): block MINIMAX_API_HOST workspace env injection and remove env-driven URL routing [AI-assisted]. (#67300) Thanks @pgondhi987. [v2026.4.20]",
    "Security/dotenv: block all `OPENCLAW_*` keys from untrusted workspace `.env` files so workspace-local env loading fails closed for new runtime-control variables instead of silently inheriting them. (#473) [v2026.4.20]",
    "Agents/gateway tool: extend the agent-facing `gateway` tool's config mutation guard so model-driven `config.patch` and `config.apply` cannot rewrite operator-trusted paths (sandbox, plugin trust, gateway auth/TLS, hook routing and tokens, SSRF policy, MCP servers, workspace filesystem hardening) and cannot bypass the guard by editing per-agent sandbox, tools, or embedded-Pi overrides in place under `agents.list[]`. (#69377) Thanks @eleqtrizit. [v2026.4.20]",
    "Exec/YOLO: stop rejecting gateway-host exec in `security=full` plus `ask=off` mode via the Python/Node script preflight hardening path, so promptless YOLO exec once again runs direct interpreter stdin and heredoc forms such as `node <<'NODE' ... NODE`. [v2026.4.20-beta.2]",
    "fix(qqbot): add SSRF guard to direct-upload URL paths in uploadC2CMedia and uploadGroupMedia [AI-assisted]. (#69595) Thanks @pgondhi987. [v2026.4.20-beta.2]"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 51
    },
    {
      "scope": "ci",
      "count": 37
    },
    {
      "scope": "docs",
      "count": 27
    },
    {
      "scope": "test",
      "count": 24
    },
    {
      "scope": "refactor",
      "count": 20
    },
    {
      "scope": "agents",
      "count": 10
    },
    {
      "scope": "deps",
      "count": 8
    },
    {
      "scope": "cli",
      "count": 7
    }
  ],
  "headlineCommits": [
    "fix(qqbot): add interaction intents (#70143)",
    "fix: require cli auth epoch version (#70132)",
    "fix: update cli session changelog (#70132)",
    "test(cli): cover oauth auth epoch continuity",
    "fix(cli): stabilize oauth session auth epochs",
    "fix(plugins): avoid doctor crash on legacy interactive state (#70135)",
    "chore(pi): remove local pr prompts",
    "fix(config): accept truncateAfterCompaction (#68395)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
