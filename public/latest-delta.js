window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-26T20:36:10.950985+08:00",
  "window": {
    "start_local": "2026-04-25T20:36:10.950985+08:00",
    "end_local": "2026-04-26T20:36:10.950985+08:00",
    "start_utc": "2026-04-25T12:36:10Z",
    "end_utc": "2026-04-26T12:36:10Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 364185,
    "forks": 74579,
    "open_issues": 7262,
    "pushed_at": "2026-04-26T12:23:07Z"
  },
  "summary": {
    "commitCount": 752,
    "releaseCount": 6,
    "stableReleaseCount": 1,
    "betaReleaseCount": 5,
    "stars": 364185,
    "forks": 74579,
    "openIssues": 7262
  },
  "releases": [
    {
      "tag_name": "v2026.4.25-beta.2",
      "published_at": "2026-04-26T12:23:17Z",
      "name": "openclaw 2026.4.25-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.25-beta.2"
    },
    {
      "tag_name": "v2026.4.25-beta.1",
      "published_at": "2026-04-26T11:21:56Z",
      "name": "openclaw 2026.4.25-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.25-beta.1"
    },
    {
      "tag_name": "v2026.4.24",
      "published_at": "2026-04-25T18:15:17Z",
      "name": "openclaw 2026.4.24",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.24"
    },
    {
      "tag_name": "v2026.4.24-beta.5",
      "published_at": "2026-04-25T15:09:26Z",
      "name": "openclaw 2026.4.24-beta.5",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.5"
    },
    {
      "tag_name": "v2026.4.24-beta.4",
      "published_at": "2026-04-25T14:26:47Z",
      "name": "openclaw 2026.4.24-beta.4",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.4"
    },
    {
      "tag_name": "v2026.4.24-beta.3",
      "published_at": "2026-04-25T13:39:59Z",
      "name": "openclaw 2026.4.24-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.24-beta.3"
    }
  ],
  "featureItems": [
    "TTS/WhatsApp: add `/tts latest` read-aloud support with duplicate suppression and `/tts chat on|off|default` session-scoped auto-TTS overrides, completing the on-demand voice-note UX for current-chat replies. Fixes #66032. [v2026.4.25-beta.2]",
    "Providers/Azure Speech: add Azure Speech as a bundled TTS provider with Speech-resource auth, voice listing, SSML escaping, native Ogg/Opus voice-note output, and telephony output. (#51776) Thanks @leonchui. [v2026.4.25-beta.2]",
    "Google Meet: add calendar-backed attendance export workflows, export manifests, dry-run previews, and tool parity for meeting records. [v2026.4.25-beta.2]",
    "Control UI: add PWA install support and Web Push notifications for Gateway chat. (#44590) Thanks @eduardocruz. [v2026.4.25-beta.2]",
    "Browser automation: add safe tab URLs in agent responses plus a CDP-native role snapshot fallback with iframe-aware refs, cursor-clickable detection, target attach preparation, and `openclaw browser doctor --deep` live snapshot probing. [v2026.4.25-beta.2]",
    "Browser/CLI: add `openclaw browser start --headless` as a one-shot local managed browser launch override without rewriting persisted browser config. Thanks @BenediktSchackenberg. [v2026.4.25-beta.2]",
    "CLI/Crestodian/TUI: add the first-run setup helper, local planner fallback, full-TUI interactive Crestodian, startup progress indicators, context mode selector, and a shorter startup greeting. (#71720, #71760) Thanks @SebTardif and @kevinlin-openai. [v2026.4.25-beta.2]",
    "Plugins: migrate the local plugin registry automatically during package install/update, keeping install metadata in the plugin index while indexing existing plugin manifests for the new cold registry path. Thanks @vincentkoc and @shakkernerd. [v2026.4.25-beta.2]"
  ],
  "fixItems": [
    "Security/audit: read channel exposure and plugin allowlist ownership from read-only plugin index metadata so cold audits do not depend on loaded channel runtime. Thanks @shakkernerd. [v2026.4.25-beta.2]",
    "Security/plugins: keep web-search credential presence checks on cold config, env, and manifest metadata instead of importing web-search provider runtime. Thanks @vincentkoc. [v2026.4.25-beta.2]",
    "Security/audit: read channel exposure and plugin allowlist ownership from read-only plugin index metadata so cold audits do not depend on loaded channel runtime. Thanks @shakkernerd. [v2026.4.25-beta.1]",
    "Security/plugins: keep web-search credential presence checks on cold config, env, and manifest metadata instead of importing web-search provider runtime. Thanks @vincentkoc. [v2026.4.25-beta.1]",
    "Agents/tool-result pruning: harden the tool-result character estimator and context-pruning loops against malformed `{ type: \"text\" }` blocks created by void or undefined tool handler results, serializing non-string text payloads for size accounting so they cannot bypass trimming as zero-sized. Fixes #34979. (#51267) Thanks @cgdusek. [v2026.4.24]",
    "Diagnostics: harden tool and model diagnostic events against hostile errors, blocking listeners, and unsafe stability reason fields. Thanks @vincentkoc. [v2026.4.24]",
    "Codex/GPT-5.4: harden fallback, auth-profile, tool-schema, and replay edge cases across native and embedded runtime paths. (#70743) Thanks @100yenadmin. [v2026.4.24]",
    "Agents/tool-result pruning: harden the tool-result character estimator and context-pruning loops against malformed `{ type: \"text\" }` blocks created by void or undefined tool handler results, serializing non-string text payloads for size accounting so they cannot bypass trimming as zero-sized. Fixes #34979. (#51267) Thanks @cgdusek, @alvinttang, and @coffeexcoin. [v2026.4.24-beta.5]"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 153
    },
    {
      "scope": "test",
      "count": 68
    },
    {
      "scope": "plugins",
      "count": 64
    },
    {
      "scope": "docs",
      "count": 39
    },
    {
      "scope": "tts",
      "count": 25
    },
    {
      "scope": "agents",
      "count": 22
    },
    {
      "scope": "cli",
      "count": 20
    },
    {
      "scope": "gateway",
      "count": 16
    }
  ],
  "headlineCommits": [
    "test(extensions): restore transformed dynamic imports",
    "perf: speed up slow test imports",
    "fix(cli): keep channel add plugin install noninteractive",
    "test(plugin-sdk): tighten channel runtime shim scan",
    "docs(plugin-sdk): refresh api baseline",
    "fix(ci): repair main type and lint failures",
    "fix(voice-call): avoid duplicate webhook logs",
    "Merge branch 'main' of https://github.com/openclaw/openclaw"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
