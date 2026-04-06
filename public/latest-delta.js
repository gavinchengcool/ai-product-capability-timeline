window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-06T20:41:11.763784+08:00",
  "window": {
    "start_local": "2026-04-05T20:41:11.763784+08:00",
    "end_local": "2026-04-06T20:41:11.763784+08:00",
    "start_utc": "2026-04-05T12:41:11Z",
    "end_utc": "2026-04-06T12:41:11Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 349587,
    "forks": 70087,
    "open_issues": 17078,
    "pushed_at": "2026-04-06T12:40:55Z"
  },
  "summary": {
    "commitCount": 678,
    "releaseCount": 1,
    "stableReleaseCount": 1,
    "betaReleaseCount": 0,
    "stars": 349587,
    "forks": 70087,
    "openIssues": 17078
  },
  "releases": [
    {
      "tag_name": "v2026.4.5",
      "published_at": "2026-04-06T03:04:54Z",
      "name": "openclaw 2026.4.5",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.5"
    }
  ],
  "featureItems": [
    "Agents/video generation: add the built-in `video_generate` tool so agents can create videos through configured providers and return the generated media directly in the reply. [v2026.4.5]",
    "Providers/ComfyUI: add a bundled `comfy` workflow media plugin for local ComfyUI and Comfy Cloud workflows, including shared `image_generate`, `video_generate`, and workflow-backed `music_generate` support, with prompt injection, optional reference-image upload, live tests, and output download. [v2026.4.5]",
    "Tools/music generation: add the built-in `music_generate` tool with bundled Google (Lyria) and MiniMax providers plus workflow-backed Comfy support, including async task tracking and follow-up delivery of finished audio. [v2026.4.5]",
    "Providers: add bundled Qwen, Fireworks AI, and StepFun providers, plus MiniMax TTS, Ollama Web Search, and MiniMax Search integrations for chat, speech, and search workflows. (#60032, #55921, #59318, #54648) [v2026.4.5]",
    "Providers/Amazon Bedrock: add bundled Mantle support plus inference-profile discovery and automatic request-region injection so Bedrock-hosted Claude, GPT-OSS, Qwen, Kimi, GLM, and similar routes work with less manual setup. (#61296, #61299) Thanks @wirjo. [v2026.4.5]",
    "Control UI/multilingual: add localized control UI support for Simplified Chinese, Traditional Chinese, Brazilian Portuguese, German, Spanish, Japanese, Korean, French, Turkish, Indonesian, Polish, and Ukrainian. Thanks @vincentkoc. [v2026.4.5]",
    "Plugins: add plugin-config TUI prompts to guided onboarding/setup flows, and add `openclaw plugins install --force` so existing plugin and hook-pack targets can be replaced without using the dangerous-code override flag. (#60590, #60544) [v2026.4.5]",
    "Control UI/skills: add ClawHub search, detail, and install flows directly in the Skills panel. (#60134) Thanks @samzong. [v2026.4.5]"
  ],
  "fixItems": [
    "Security: preserve restrictive plugin-only tool allowlists, require owner access for `/allowlist add` and `/allowlist remove`, fail closed when `before_tool_call` hooks crash, block browser SSRF redirect bypasses earlier, and keep non-interactive auth-choice inference scoped to bundled and already-trusted plugins. (#58476, #59836, #59822, #58771, #59120) Thanks @eleqtrizit and @pgondhi987. [v2026.4.5]",
    "ACPX/runtime: embed the ACP runtime directly in the bundled `acpx` plugin, remove the extra external ACP CLI hop, harden live ACP session binding and reuse, and add a generic `reply_dispatch` hook so bundled plugins like ACPX can own reply interception without hardcoded ACP paths in core auto-reply routing. (#61319) [v2026.4.5]",
    "Plugins/Lobster: harden managed resume validation so invalid TaskFlow resume calls fail earlier, and memoize embedded runtime loading per runner while keeping failed loads retryable. (#61566) Thanks @mbelinky. [v2026.4.5]",
    "fix(openai): soften gpt-5 execution bias prompt",
    "fix(check): repair status report typing drift",
    "perf(test): isolate deep probe finding helper",
    "perf(test): merge secrets runtime snapshot lanes",
    "fix(telegram): restore outbound message splitting for long messages (#57816)"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 90
    },
    {
      "scope": "test",
      "count": 87
    },
    {
      "scope": "ui",
      "count": 56
    },
    {
      "scope": "refactor",
      "count": 45
    },
    {
      "scope": "agents",
      "count": 27
    },
    {
      "scope": "memory-wiki",
      "count": 26
    },
    {
      "scope": "docs",
      "count": 23
    },
    {
      "scope": "infra",
      "count": 23
    }
  ],
  "headlineCommits": [
    "fix(openai): soften gpt-5 execution bias prompt",
    "Revert \"refactor(cli): remove custom cli backends\"",
    "Revert \"refactor(cli): remove bundled cli text providers\"",
    "fix(check): repair status report typing drift",
    "refactor(auth): isolate external oauth overlays",
    "perf(test): isolate deep probe finding helper",
    "perf(test): merge secrets runtime snapshot lanes",
    "fix(telegram): restore outbound message splitting for long messages (#57816)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
