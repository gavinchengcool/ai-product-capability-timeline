window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-05T21:03:42.714232+08:00",
  "window": {
    "start_local": "2026-05-04T21:03:42.714232+08:00",
    "end_local": "2026-05-05T21:03:42.714232+08:00",
    "start_utc": "2026-05-04T13:03:42Z",
    "end_utc": "2026-05-05T13:03:42Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 368502,
    "forks": 75907,
    "open_issues": 6928,
    "pushed_at": "2026-05-05T12:59:40Z"
  },
  "summary": {
    "commitCount": 285,
    "releaseCount": 4,
    "stableReleaseCount": 1,
    "betaReleaseCount": 3,
    "stars": 368502,
    "forks": 75907,
    "openIssues": 6928
  },
  "releases": [
    {
      "tag_name": "v2026.5.4",
      "published_at": "2026-05-05T08:24:01Z",
      "name": "openclaw 2026.5.4",
      "prerelease": false,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.4"
    },
    {
      "tag_name": "v2026.5.4-beta.3",
      "published_at": "2026-05-05T06:14:48Z",
      "name": "openclaw 2026.5.4-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.3"
    },
    {
      "tag_name": "v2026.5.4-beta.2",
      "published_at": "2026-05-05T01:43:03Z",
      "name": "openclaw 2026.5.4-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.2"
    },
    {
      "tag_name": "v2026.5.4-beta.1",
      "published_at": "2026-05-04T18:22:09Z",
      "name": "openclaw 2026.5.4-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.1"
    }
  ],
  "featureItems": [
    "Models/auth: add `openclaw models auth list [--provider <id>] [--json]` so users can inspect saved per-agent auth profiles without dumping secrets or hitting the old “too many arguments” path. Thanks @vincentkoc. [v2026.5.4]",
    "Control UI/cron: make the New Job sidebar collapsible so the jobs list can reclaim space while keeping the form one click away. Thanks @BunsDev. [v2026.5.4]",
    "Slack/streaming: add `streaming.progress.render: \"rich\"` for Block Kit progress drafts backed by structured progress line data. [v2026.5.4]",
    "Control UI/chat: add an agent-first filter to the chat session picker, keep chat controls/composer responsive across phone/tablet/desktop widths, keep desktop chat controls on one row, avoid duplicate avatar refreshes during initial chat load, and hide that row while scrolling down the transcript. Thanks @BunsDev. [v2026.5.4]",
    "Gateway/diagnostics: add startup phase spans, active work labels, stale terminal bridge markers, and default sync-I/O tracing in `pnpm gateway:watch` so slow Gateway turns are easier to attribute from logs and stability diagnostics. [v2026.5.4]",
    "QA/Mantis: add `pnpm openclaw qa mantis slack-desktop-smoke` to run Slack live QA inside a Crabbox VNC desktop, open Slack Web, and capture desktop screenshots beside the Slack QA artifacts. [v2026.5.4]",
    "QA/Codex harness: add targeted live Docker/Testbox diagnostics, auth preflight checks, cache mount fixes, and app-server protocol checkout discovery so maintainer harness failures are easier to reproduce. Thanks @vincentkoc. [v2026.5.4]",
    "Plugins/SDK: add bounded `before_agent_finalize` retry instructions so workflow plugins can request one more model pass. Thanks @100yenadmin. [v2026.5.4]"
  ],
  "fixItems": [
    "fix(gateway): clamp unbound websocket auth scopes [AI]. (#77413) Thanks @pgondhi987. [v2026.5.4]",
    "fix(device-pair): require pairing scope for pair command [AI]. (#76377) Thanks @pgondhi987. [v2026.5.4]",
    "fix(qqbot): keep private commands off framework surface [AI]. (#77212) Thanks @pgondhi987. [v2026.5.4]",
    "fix: harden backend message action gateway routing [AI]. (#76374) Thanks @pgondhi987. [v2026.5.4]",
    "Security/Windows: validate `SystemRoot`/`WINDIR` env values through the Windows install-root validator and add them to the dangerous-host-env policy when resolving `icacls.exe`/`whoami.exe` for `openclaw security audit`, so workspace `.env` overrides and bare command names cannot redirect Windows ACL helpers to attacker-controlled binaries. (#74458) Thanks @mmaps. [v2026.5.4]",
    "Security/Windows: pin Windows registry-probe `reg.exe` resolution to the canonical Windows install root in install-root probing, so `SystemRoot`/`WINDIR` env overrides cannot redirect registry queries during Windows host detection. (#74454) Thanks @mmaps. [v2026.5.4]",
    "Security/Windows: block `LOCALAPPDATA` from workspace `.env` and resolve Windows update-flow portable Git path prepends from the trusted process-local `LOCALAPPDATA` only, so workspace-supplied values cannot redirect `git` discovery during `openclaw update`. (#77470) Thanks @drobison00. [v2026.5.4]",
    "Security/Windows: route the `.cmd`/`.bat` process wrapper through the shared Windows install-root resolver instead of `process.env.ComSpec`, so workspace dotenv-blocked `SystemRoot`/`WINDIR` overrides and unsafe values like UNC paths or path-lists cannot redirect `cmd.exe` selection on Windows. (#77472) Thanks @drobison00. [v2026.5.4]"
  ],
  "topScopes": [
    {
      "scope": "fix",
      "count": 43
    },
    {
      "scope": "plugins",
      "count": 28
    },
    {
      "scope": "agents",
      "count": 18
    },
    {
      "scope": "docs",
      "count": 14
    },
    {
      "scope": "live",
      "count": 11
    },
    {
      "scope": "changelog",
      "count": 10
    },
    {
      "scope": "gateway",
      "count": 9
    },
    {
      "scope": "update",
      "count": 9
    }
  ],
  "headlineCommits": [
    "fix: avoid early Slack credential leases in Mantis",
    "ci: harden Mantis Crabbox CLI help check",
    "fix: default Mantis Slack desktop smoke to AWS",
    "test(live): skip synthetic auth in provider sweeps",
    "fix(release): accept Docker OCI attestations and xAI reasoning defaults",
    "fix: harden Mantis Slack desktop gateway proof",
    "test(live): bound provider discovery hooks",
    "fix(core): avoid session export filename collisions (#77762)"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
