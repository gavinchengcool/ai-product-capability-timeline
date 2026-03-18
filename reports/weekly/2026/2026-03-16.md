# OpenClaw Weekly Update

生成时间：2026-03-16T20:00:00.956470+08:00

## Window

- Start: 2026-03-15T20:00:00.956470+08:00
- End: 2026-03-16T20:00:00.956470+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 445
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 316470
- Repo forks at scan time: 60614

## New Capability Signals

- feat(telegram): add configurable silent error replies (#19776)
- CI: add changed extension test lane
- Channels: add contract surface coverage
- Plugins: add Claude marketplace registry installs (#48058)
- Plugins: add auth choice contracts
- Plugins: add provider discovery contracts
- Plugins: add provider auth contracts
- Plugins: add provider wizard contracts
- Plugins: add provider catalog contracts
- Plugins: add provider runtime contracts
- feishu: harden media support and align capability docs (#47968)
- !refactor(browser): remove Chrome extension path and add MCP doctor migration (#47893)
- feishu: add structured card actions and interactive approval flows (#47873)
- Channels: centralize shared interactive rendering
- Channels: add message action capabilities

## Important Fixes And Hardening

- fix(channels): parse bundled targets without plugin registry
- fix(telegram): keep silent error fallback replies quiet
- fix(ui): auto load Usage tab data on navigation
- Tests: harden WhatsApp inbound contract cleanup
- fix(macos): restore debug build helpers (#48046)
- fix: split browser-safe thinking helpers
- fix: retry runtime postbuild skill copy races
- fix: restore effective setup wizard lazy import
- fix: keep gaxios compat off the package root (#47914) (thanks @pdd-cli)
- fix(infra): also wire gaxios-fetch-compat shim into src/index.ts (gateway entry)
- fix(infra): wire gaxios-fetch-compat shim to prevent node-fetch crash on Node.js 25
- fix: harden bonjour retry recovery
- fix: mount CLI auth dirs in docker live tests
- fix: stop bonjour before re-advertising
- fix: unblock docs and registry checks

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `plugins`: 60
- `fix`: 49
- `refactor`: 49
- `tests`: 36
- `docs`: 25
- `status`: 15
- `channels`: 14
- `gateway`: 12
- `slack`: 11
- `cli`: 10
- `telegram`: 9
- `discord`: 7

## Recent Commit Headlines

- 2026-03-16T11:54:44Z | test(telegram): cover shared parsing without registry
- 2026-03-16T11:54:37Z | fix(channels): parse bundled targets without plugin registry
- 2026-03-16T11:51:44Z | Bootstrap: report nested entry import misses
- 2026-03-16T11:39:26Z | Plugins: preserve lazy runtime provider resolution
- 2026-03-16T11:39:20Z | Tests: align media auth fixture with selection checks
- 2026-03-16T11:39:15Z | Cron: isolate active-model delivery tests
- 2026-03-16T11:46:48Z | test(gateway): restore agent request route mock
- 2026-03-16T11:44:10Z | fix(telegram): keep silent error fallback replies quiet
- 2026-03-13T09:37:19Z | fix(ui): auto load Usage tab data on navigation
- 2026-03-16T11:18:34Z | feat(telegram): add configurable silent error replies (#19776)
- 2026-03-16T11:03:17Z | Tests: isolate bundle surface fixtures
- 2026-03-16T10:48:42Z | Tests: scope Codex bundle loader fixture
- 2026-03-16T10:45:56Z | Media: avoid slow auth misses in auto-detect
- 2026-03-16T10:27:44Z | Status: stabilize startup memory probes
- 2026-03-16T10:07:55Z | Channels: fix surface contract plugin lookup
- 2026-03-16T10:05:40Z | Plugin SDK: consolidate shared channel exports
- 2026-03-16T09:51:28Z | Plugin SDK: restore scoped imports for bundled channels
- 2026-03-16T09:34:42Z | BlueBubbles: lazy-load channel runtime paths
- 2026-03-16T09:29:30Z | CI: add changed extension test lane
- 2026-03-16T09:29:21Z | Docs: add extension test workflow

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
