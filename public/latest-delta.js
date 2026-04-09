window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-04-09T20:54:05.478107+08:00",
  "window": {
    "start_local": "2026-04-08T20:54:05.478107+08:00",
    "end_local": "2026-04-09T20:54:05.478107+08:00",
    "start_utc": "2026-04-08T12:54:05Z",
    "end_utc": "2026-04-09T12:54:05Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 352906,
    "forks": 71190,
    "open_issues": 17877,
    "pushed_at": "2026-04-09T12:39:29Z"
  },
  "summary": {
    "commitCount": 320,
    "releaseCount": 2,
    "stableReleaseCount": 1,
    "betaReleaseCount": 1,
    "stars": 352906,
    "forks": 71190,
    "openIssues": 17877
  },
  "releases": [
    {
      "tag_name": "v2026.4.9",
      "published_at": "2026-04-09T02:25:28Z",
      "name": "openclaw 2026.4.9",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.9"
    },
    {
      "tag_name": "v2026.4.9-beta.1",
      "published_at": "2026-04-09T01:26:28Z",
      "name": "openclaw 2026.4.9-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.4.9-beta.1"
    }
  ],
  "featureItems": [
    "Memory/dreaming: add a grounded REM backfill lane with historical `rem-harness --path`, diary commit/reset flows, cleaner durable-fact extraction, and live short-term promotion integration so old daily notes can replay into Dreams and durable memory without a second memory stack. Thanks @mbelinky. [v2026.4.9]",
    "Control UI/dreaming: add a structured diary view with timeline navigation, backfill/reset controls, traceable dreaming summaries, and a grounded Scene lane with promotion hints plus a safe clear-grounded action for staged backfill signals. (#63395) Thanks @mbelinky. [v2026.4.9]",
    "QA/lab: add character-vibes evaluation reports with model selection and parallel runs so live QA can compare candidate behavior faster. [v2026.4.9]",
    "iOS: pin release versioning to an explicit CalVer in `apps/ios/version.json`, keep TestFlight iteration on the same short version until maintainers intentionally promote the next gateway version, and add the documented `pnpm ios:version:pin -- --from-gateway` workflow for release trains. (#63001) Thanks @ngutman. [v2026.4.9]",
    "Memory/dreaming: add a grounded REM backfill lane with historical `rem-harness --path`, diary commit/reset flows, cleaner durable-fact extraction, and live short-term promotion integration so old daily notes can replay into Dreams and durable memory without a second memory stack. Thanks @mbelinky. [v2026.4.9-beta.1]",
    "Control UI/dreaming: add a structured diary view with timeline navigation, backfill/reset controls, traceable dreaming summaries, and a grounded Scene lane with promotion hints plus a safe clear-grounded action for staged backfill signals. (#63395) Thanks @mbelinky. [v2026.4.9-beta.1]",
    "QA/lab: add character-vibes evaluation reports with model selection and parallel runs so live QA can compare candidate behavior faster. [v2026.4.9-beta.1]",
    "iOS: pin release versioning to an explicit CalVer in `apps/ios/version.json`, keep TestFlight iteration on the same short version until maintainers intentionally promote the next gateway version, and add the documented `pnpm ios:version:pin -- --from-gateway` workflow for release trains. (#63001) Thanks @ngutman. [v2026.4.9-beta.1]"
  ],
  "fixItems": [
    "Security/dotenv: block runtime-control env vars plus browser-control override and skip-server env vars from untrusted workspace `.env` files, and reject unsafe URL-style browser control override specifiers before lazy loading. (#62660, #62663) Thanks @eleqtrizit. [v2026.4.9]",
    "Security/dependency audit: force `basic-ftp` to `5.2.1` for the CRLF command-injection fix and bump Hono plus `@hono/node-server` in production resolution paths. [v2026.4.9]",
    "Memory/dreaming: harden grounded backfill inputs, diary writes, status payloads, and diary action classification by preserving source-day labels, rejecting missing or symlinked targets cleanly, normalizing diary headings in gateway backfills, and tightening claim splitting plus diary source metadata. Thanks @mbelinky. [v2026.4.9]",
    "Plugins/contracts: keep test-only helpers out of production contract barrels, load shared contract harnesses through bundled test surfaces, and harden guardrails so indirect re-exports and canonical `*.test.ts` files stay blocked. (#63311) Thanks @altaywtf. [v2026.4.9]",
    "Security/dotenv: block runtime-control env vars plus browser-control override and skip-server env vars from untrusted workspace `.env` files, and reject unsafe URL-style browser control override specifiers before lazy loading. (#62660, #62663) Thanks @eleqtrizit. [v2026.4.9-beta.1]",
    "Security/dependency audit: force `basic-ftp` to `5.2.1` for the CRLF command-injection fix and bump Hono plus `@hono/node-server` in production resolution paths. [v2026.4.9-beta.1]",
    "Memory/dreaming: harden grounded backfill inputs, diary writes, status payloads, and diary action classification by preserving source-day labels, rejecting missing or symlinked targets cleanly, normalizing diary headings in gateway backfills, and tightening claim splitting plus diary source metadata. Thanks @mbelinky. [v2026.4.9-beta.1]",
    "Plugins/contracts: keep test-only helpers out of production contract barrels, load shared contract harnesses through bundled test surfaces, and harden guardrails so indirect re-exports and canonical `*.test.ts` files stay blocked. (#63311) Thanks @altaywtf. [v2026.4.9-beta.1]"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 97
    },
    {
      "scope": "fix",
      "count": 39
    },
    {
      "scope": "ui",
      "count": 25
    },
    {
      "scope": "refactor",
      "count": 19
    },
    {
      "scope": "matrix",
      "count": 9
    },
    {
      "scope": "plugins",
      "count": 8
    },
    {
      "scope": "ci",
      "count": 8
    },
    {
      "scope": "build",
      "count": 7
    }
  ],
  "headlineCommits": [
    "fix(qqbot): enforce media storage boundary for all outbound local file paths [AI] (#63271)",
    "Matrix: drop dead legacy crypto wrapper",
    "fix: provider-qualified session context limits (#62493) (thanks @neeravmakwana)",
    "fix: exclude DM participant lists from iMessage self-chat check",
    "fix: start tailscale exposure before sidecars",
    "fix: allow CLI task cancel for stuck background tasks (#62506) (thanks @neeravmakwana)",
    "fix: preserve iMessage self-chat aliases (#61619) (thanks @neeravmakwana)",
    "fix: keep gateway RPC up during startup (#63480)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
