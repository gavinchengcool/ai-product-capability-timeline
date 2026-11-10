# OpenClaw Weekly Update

生成时间：2026-11-11T02:57:04.103110+08:00

## Window

- Start: 2026-11-10T02:57:04.103110+08:00
- End: 2026-11-11T02:57:04.103110+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 328
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 394300
- Repo forks at scan time: 82857

## New Capability Signals

- feat(diagnostics-otel): opt-in session ids on OTel spans for conversation grouping (#193700)
- feat(ui): add halftone QR previews for public shares (#194559)
- feat(native): expose Systems dashboard route (#164462)
- feat(ui): show a QR code next to the public session link (#180292)
- feat(control-ui): add privacy-safe GitHub feedback links (#194607)
- feat(compaction): make compaction summary char cap configurable via maxSummaryChars (#196207)
- feat: create templates directly from chat (#195730)
- feat(pairing): pair a browser with a short code approved on the host (#191513)

## Important Fixes And Hardening

- fix(ios): stop node retries while the Gateway rate-limits auth (#196796)
- fix(ui): activate shared Markdown preview code controls (#194233)
- perf(ci): share UI inventories across ownership lookups (#195160)
- fix(worktrees): keep dependency copies fast in large gateways (#196768)
- fix(release): accept bare active-parent workflow paths
- fix(bedrock): preserve system separators across cache checkpoints (#196538)
- fix(ui): show empty repository search feedback after loading (#196783)
- fix: resumed database port reports success for a copy that owner admission rejects (#194595)
- fix(ci): preserve prepared package caches in Testbox installs (#196771)
- fix(cli): install PowerShell completion in UTF-16 profiles on Unix (#196755)
- fix(process): disable core dumps for agent commands (#196772)
- fix(sandbox): avoid snapshot overhead for fast checkpoints (#196727)
- fix(browser): start Chromium with long Linux temp paths (#196778)
- fix(telegram): sent-message cache writes fail with "Telegram runtime not initialized" during replies (#193829)
- fix(mcp): mcp add and configure print a literal "\n" before "Configuration was not saved." when the server check fails (#196711)

## Releases This Week

- `v2026.11.3` | stable | 2026-11-10T18:53:07Z | openclaw 2026.11.3

## Most Active Change Scopes

- `ui`: 68
- `fix`: 53
- `release`: 14
- `ci`: 13
- `ios`: 12
- `gateway`: 9
- `improve(ci)`: 8
- `improve(ui)`: 8
- `knowledge`: 8
- `agents`: 8
- `sessions`: 7
- `test`: 7

## Recent Commit Headlines

- 2026-11-10T18:56:42Z | fix(ios): stop node retries while the Gateway rate-limits auth (#196796)
- 2026-11-10T18:53:43Z | refactor(update): remove redundant preflight worktree prune (#196791)
- 2026-11-10T18:43:10Z | fix(ui): activate shared Markdown preview code controls (#194233)
- 2026-11-10T18:39:46Z | perf(ci): share UI inventories across ownership lookups (#195160)
- 2026-11-10T18:39:19Z | fix(worktrees): keep dependency copies fast in large gateways (#196768)
- 2026-11-10T18:37:40Z | fix(release): accept bare active-parent workflow paths
- 2026-11-10T18:35:38Z | fix(bedrock): preserve system separators across cache checkpoints (#196538)
- 2026-11-10T18:32:36Z | fix(ui): show empty repository search feedback after loading (#196783)
- 2026-11-10T18:32:19Z | fix: resumed database port reports success for a copy that owner admission rejects (#194595)
- 2026-11-10T18:31:15Z | fix(ci): preserve prepared package caches in Testbox installs (#196771)
- 2026-11-10T18:30:05Z | fix(cli): install PowerShell completion in UTF-16 profiles on Unix (#196755)
- 2026-11-10T18:24:47Z | chore(sessions): add bounded delivery generation refusal diagnostics
- 2026-11-10T18:23:19Z | improve(exec): reduce CPU spent on streamed command output (#196780)
- 2026-11-10T18:21:23Z | fix(process): disable core dumps for agent commands (#196772)
- 2026-11-10T18:17:48Z | improve(ci): reduce compilation for subagent tests (#196786)
- 2026-11-10T18:17:08Z | fix(sandbox): avoid snapshot overhead for fast checkpoints (#196727)
- 2026-11-10T18:12:39Z | fix(browser): start Chromium with long Linux temp paths (#196778)
- 2026-11-10T18:06:50Z | fix(telegram): sent-message cache writes fail with "Telegram runtime not initialized" during replies (#193829)
- 2026-11-10T18:06:08Z | refactor(test): share attachment session-change regression setup (#196764)
- 2026-11-10T18:04:30Z | fix(mcp): mcp add and configure print a literal "\n" before "Configuration was not saved." when the server check fails (#196711)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
