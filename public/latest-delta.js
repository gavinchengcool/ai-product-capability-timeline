window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-03T20:39:10.337009+08:00",
  "window": {
    "start_local": "2026-05-02T20:39:10.337009+08:00",
    "end_local": "2026-05-03T20:39:10.337009+08:00",
    "start_utc": "2026-05-02T12:39:10Z",
    "end_utc": "2026-05-03T12:39:10Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 367738,
    "forks": 75673,
    "open_issues": 6703,
    "pushed_at": "2026-05-03T12:35:59Z"
  },
  "summary": {
    "commitCount": 457,
    "releaseCount": 3,
    "stableReleaseCount": 1,
    "betaReleaseCount": 2,
    "stars": 367738,
    "forks": 75673,
    "openIssues": 6703
  },
  "releases": [
    {
      "tag_name": "v2026.5.2",
      "published_at": "2026-05-02T23:37:55Z",
      "name": "openclaw 2026.5.2",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.2"
    },
    {
      "tag_name": "v2026.5.2-beta.3",
      "published_at": "2026-05-02T22:15:21Z",
      "name": "openclaw 2026.5.2-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.3"
    },
    {
      "tag_name": "v2026.5.2-beta.2",
      "published_at": "2026-05-02T20:40:17Z",
      "name": "openclaw 2026.5.2-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.2"
    }
  ],
  "featureItems": [
    "Gateway/startup and restart: skip plugin-backed auth-profile overlays during startup secrets preflight, reducing gateway readiness latency while keeping reload and OAuth recovery paths overlay-capable; add `openclaw gateway restart --force` and `--wait <duration>`, log active task run IDs before restart deferral timers, and report timeout restarts as explicit forced restarts. (#68327) Thanks @JIRBOY. [v2026.5.2]",
    "Infra/path-guards: add a fast path for canonical absolute POSIX containment checks, avoiding repeated `path.resolve` and `path.relative` work in hot filesystem walkers. Refs #75895, #75575, and #68782. Thanks @Enderfga. [v2026.5.2]",
    "Tools/plugins: add a platform-level tool descriptor planner for descriptor-first visibility, generic availability checks, and executor references, and cache plugin tool descriptors captured from `api.registerTool(...)` so repeated prompt-time planning can skip plugin runtime loading while execution still loads the live plugin tool. (#76079) Thanks @shakkernerd. [v2026.5.2]",
    "Providers/xAI: add Grok 4.3 to the bundled catalog and make it the default xAI chat model. [v2026.5.2]",
    "Google Meet: let API-created rooms set `accessType` and `entryPointAccess`, add `googlemeet end-active-conference` for closing managed spaces after a call, and add `googlemeet test-listen` plus the matching `google_meet` `test_listen` action so transcribe-mode joins wait for real caption or transcript movement before reporting listen-first health. (#74824; refs #72478) Thanks @BsnizND and @DougButdorf. [v2026.5.2]",
    "Plugins/Crestodian: add ClawHub plugin search plus Crestodian plugin list/search/install/uninstall operations, with approval and audit coverage for install and uninstall. [v2026.5.2]",
    "Providers/OpenAI: add `extraBody`/`extra_body` passthrough for OpenAI-compatible TTS endpoints, so custom speech servers can receive fields such as `lang` in `/audio/speech` requests. Fixes #39900. Thanks @R3NK0R. [v2026.5.2]",
    "Channels/WhatsApp: support explicit WhatsApp Channel/Newsletter `@newsletter` outbound message targets with channel session metadata instead of DM routing. Fixes #13417; carries forward the narrow outbound target idea from #13424. Thanks @vincentkoc and @agentz-manfred. [v2026.5.2]"
  ],
  "fixItems": [
    "Security audit/plugins: ignore plugin install backup, disabled, and dependency debris directories when enumerating installed plugin roots, avoiding false-positive findings for `.openclaw-install-backups` after plugin updates. Fixes #75456. [v2026.5.2]",
    "fix(infra): block workspace state-directory env override [AI]. (#75940) Thanks @pgondhi987. [v2026.5.2]",
    "Agents/transcripts: avoid reopening large Pi transcript files through the synchronous session manager for maintenance rewrites, persisted tool-result truncation, manual compaction boundary hardening, and queued compaction rotation. Thanks @mariozechner. [v2026.5.2]",
    "Providers/xAI: give Grok `web_search` a 60s default timeout, harden malformed xAI Responses parsing, and return structured timeout errors instead of aborting the tool call. Fixes #58063 and #58733. Thanks @dnishimura, @marvcasasola-svg, and @Nanako0129. [v2026.5.2]",
    "fix: block workspace CLOUDSDK_PYTHON override and always set trusted interpreter for gcloud. (#74492) Thanks @pgondhi987. [v2026.5.2]",
    "fix(infra): block ambient Homebrew env vars from brew resolution. (#74463) Thanks @pgondhi987. [v2026.5.2]",
    "Security/Windows: ignore workspace `.env` system-path variables and resolve stale-process `taskkill.exe` from the validated Windows install root, preventing repository-local env files from redirecting cleanup helpers. Thanks @pgondhi987. [v2026.5.2]",
    "Security/audit: keep plain `security audit` on the cold config/filesystem path and reserve plugin runtime security collectors for `--deep`, so large plugin installs cannot execute every plugin runtime during routine audits. Thanks @vincentkoc. [v2026.5.2]"
  ],
  "topScopes": [
    {
      "scope": "plugins",
      "count": 91
    },
    {
      "scope": "fix",
      "count": 44
    },
    {
      "scope": "gateway",
      "count": 31
    },
    {
      "scope": "ci",
      "count": 24
    },
    {
      "scope": "release",
      "count": 18
    },
    {
      "scope": "test",
      "count": 17
    },
    {
      "scope": "docs",
      "count": 12
    },
    {
      "scope": "changelog",
      "count": 11
    }
  ],
  "headlineCommits": [
    "test: allow capability provider runtime registry lookup",
    "chore: remove redundant npmignore",
    "perf(gateway): add startup CPU profile option",
    "perf(gateway): defer cron and sentinel startup work",
    "chore: remove stale root tooling files",
    "ci: ignore generated extension viewer asset in lint",
    "test(sandbox): cover registry migration",
    "fix(sandbox): move registry file migration to doctor"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
