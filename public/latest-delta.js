window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-27T21:12:06.740523+08:00",
  "window": {
    "start_local": "2026-04-26T21:12:06.740523+08:00",
    "end_local": "2026-04-27T21:12:06.740523+08:00",
    "start_utc": "2026-04-26T13:12:06Z",
    "end_utc": "2026-04-27T13:12:06Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 365162,
    "forks": 74778,
    "open_issues": 6975,
    "pushed_at": "2026-04-27T13:09:50Z"
  },
  "summary": {
    "commitCount": 697,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 365162,
    "forks": 74778,
    "openIssues": 6975
  },
  "releases": [
    {
      "tag_name": "v2026.4.25",
      "published_at": "2026-04-27T12:45:30Z",
      "name": "OpenClaw 2026.4.25",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.25"
    },
    {
      "tag_name": "v2026.4.25-beta.4",
      "published_at": "2026-04-26T13:24:41Z",
      "name": "openclaw 2026.4.25-beta.4",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.25-beta.4"
    }
  ],
  "featureItems": [
    "TTS/WhatsApp: add `/tts latest` read-aloud support with duplicate suppression and `/tts chat on|off|default` session-scoped auto-TTS overrides, completing the on-demand voice-note UX for current-chat replies. Fixes #66032. [v2026.4.25]",
    "Providers/Azure Speech: add Azure Speech as a bundled TTS provider with Speech-resource auth, voice listing, SSML escaping, native Ogg/Opus voice-note output, and telephony output. (#51776) Thanks @leonchui. [v2026.4.25]",
    "Google Meet: add calendar-backed attendance export workflows, export manifests, dry-run previews, and tool parity for meeting records. [v2026.4.25]",
    "Control UI: add PWA install support and Web Push notifications for Gateway chat. (#44590) Thanks @eduardocruz. [v2026.4.25]",
    "Browser automation: add safe tab URLs in agent responses plus a CDP-native role snapshot fallback with iframe-aware refs, cursor-clickable detection, target attach preparation, and `openclaw browser doctor --deep` live snapshot probing. [v2026.4.25]",
    "Browser/CLI: add `openclaw browser start --headless` as a one-shot local managed browser launch override without rewriting persisted browser config. Thanks @BenediktSchackenberg. [v2026.4.25]",
    "CLI/Crestodian/TUI: add the first-run setup helper, local planner fallback, full-TUI interactive Crestodian, startup progress indicators, context mode selector, and a shorter startup greeting. (#71720, #71760) Thanks @SebTardif and @kevinlin-openai. [v2026.4.25]",
    "Plugins: migrate the local plugin registry automatically during package install/update, keeping install metadata in the plugin index while indexing existing plugin manifests for the new cold registry path. Thanks @vincentkoc and @shakkernerd. [v2026.4.25]"
  ],
  "fixItems": [
    "Security/audit: read channel exposure and plugin allowlist ownership from read-only plugin index metadata so cold audits do not depend on loaded channel runtime. Thanks @shakkernerd. [v2026.4.25]",
    "Security/plugins: keep web-search credential presence checks on cold config, env, and manifest metadata instead of importing web-search provider runtime. Thanks @vincentkoc. [v2026.4.25]",
    "Security/audit: read channel exposure and plugin allowlist ownership from read-only plugin index metadata so cold audits do not depend on loaded channel runtime. Thanks @shakkernerd. [v2026.4.25-beta.4]",
    "Security/plugins: keep web-search credential presence checks on cold config, env, and manifest metadata instead of importing web-search provider runtime. Thanks @vincentkoc. [v2026.4.25-beta.4]",
    "fix(memory): skip qmd vectors in lexical mode",
    "fix: cache plugin discovery realpaths",
    "fix(qa-lab): keep gateway client on generic sdk seam",
    "fix(google-meet): use OpenClaw browser for local joins"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 93
    },
    {
      "scope": "ci",
      "count": 65
    },
    {
      "scope": "test",
      "count": 54
    },
    {
      "scope": "docs",
      "count": 53
    },
    {
      "scope": "gateway",
      "count": 38
    },
    {
      "scope": "agents",
      "count": 35
    },
    {
      "scope": "docker",
      "count": 27
    },
    {
      "scope": "ui",
      "count": 24
    }
  ],
  "headlineCommits": [
    "fix(memory): skip qmd vectors in lexical mode",
    "fix: cache plugin discovery realpaths",
    "ci: match package Telegram harness to release ref",
    "fix(qa-lab): keep gateway client on generic sdk seam",
    "fix(google-meet): use OpenClaw browser for local joins",
    "fix(qa-lab): use generic gateway runtime SDK",
    "fix(opencode): expose Claude thinking levels (#72778)",
    "ci: inline Docker release planning for old refs"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
