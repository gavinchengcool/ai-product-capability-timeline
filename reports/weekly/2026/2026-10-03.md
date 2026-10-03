# OpenClaw Weekly Update

生成时间：2026-10-03T23:17:39.151457+08:00

## Window

- Start: 2026-10-02T23:17:39.151457+08:00
- End: 2026-10-03T23:17:39.151457+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 618
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 391230
- Repo forks at scan time: 82238

## New Capability Signals

- feat(plugins): refuse foreign live-owner SDK workspace mutations (routing 2/4 follow-up) (#164203)
- feat: prepare cloud workers for enterprise repositories (#160108)
- feat(diagnostics): record RPC response bytes and main-thread heap delta per method (#164335)
- feat(memory): let the memory slot own the pre-compaction flush (#162177)
- feat(state): incognito actor memory and Codex history routing (P5c, inactive) (#164224)
- feat(ui): show when a chat is waiting on subagents (#164190)
- feat(gateway): route pairing and default approvals through the live owner (#164075)
- feat(update): adopt immutable installations and prepare sealed generations without activating them (#163799)
- feat(macos): undo archiving and group selected sessions in the native sidebar (#164073)
- feat(state): incognito actor history routing (P5a, inactive) (#164044)
- feat(diagnostics): export the V8 heap-space breakdown (#164057)
- feat(macos): select, batch-edit, and drag sessions in the native sidebar (#164013)
- feat(gateway): route worktree CLI mutations through the live owner (routing 2/4) (#163953)
- feat(state): incognito actor history routing (P5a, inactive) (#163987)
- feat(gateway): route same-root local state mutations through the live owner (routing 1/4) (#163853)

## Important Fixes And Hardening

- fix(update): publish the repair deadline result when the Gateway is still starting (#164337)
- fix(cli): respect --format text when fetching web pages (#162036)
- fix(sessions): release discarded tool output backing strings (#164361)
- fix(cli): avoid hangs on FIFO config file inputs (#164161)
- fix: retain admitted agent context after auth refresh (#164340)
- fix(memory): session memory sync fails with too many SQL variables on large session stores (#164336)
- fix(codex): prevent stale native sessions from mutating successors (#164197)
- fix(gateway): serialize recovery source reads with publication
- perf(gateway): release per-connection state on close (#164307)
- fix: reconcile Windows node results in deeply nested repositories (#164331)
- fix(bench): generate canonical agent rosters for startup (#164322)
- fix(ci): forward live video provider credentials (#164317)
- fix(sessions): Windows sessions.create fails with publication owner is no longer current (#162033)
- fix(test): retain real query factories in environment capture fixture
- fix(qa): compare generated image captions through delivery owner (#164213)

## Releases This Week

- `v2026.9.8` | stable | 2026-10-03T03:21:47Z | openclaw 2026.9.8

## Most Active Change Scopes

- `gateway`: 55
- `test`: 50
- `fix`: 42
- `ui`: 33
- `agents`: 29
- `sessions`: 26
- `plugins`: 26
- `ci`: 20
- `update`: 15
- `state`: 15
- `cli`: 14
- `doctor`: 14

## Recent Commit Headlines

- 2026-10-03T15:17:06Z | refactor(tlon): remove unused request options (#164345)
- 2026-10-03T15:13:28Z | fix(update): publish the repair deadline result when the Gateway is still starting (#164337)
- 2026-10-03T15:13:14Z | fix(cli): respect --format text when fetching web pages (#162036)
- 2026-10-03T15:12:43Z | test(sessions,commands,cron,daemon): remove low-value tests (batch d177) (#164353)
- 2026-10-03T15:12:31Z | fix(sessions): release discarded tool output backing strings (#164361)
- 2026-10-03T15:03:53Z | test(startup): configure the historical webhook repair fixture
- 2026-10-03T15:04:43Z | refactor(secrets): move providerless refs to Doctor (#163350)
- 2026-10-03T15:00:23Z | chore(ui): refresh control ui locales (#164358)
- 2026-10-03T14:57:35Z | fix(cli): avoid hangs on FIFO config file inputs (#164161)
- 2026-10-03T14:53:14Z | fix: retain admitted agent context after auth refresh (#164340)
- 2026-10-03T14:48:51Z | test(doctor,cli,config,sessions): remove low-value tests (batch d176) (#164348)
- 2026-10-03T14:46:55Z | feat(plugins): refuse foreign live-owner SDK workspace mutations (routing 2/4 follow-up) (#164203)
- 2026-10-03T14:42:18Z | feat: prepare cloud workers for enterprise repositories (#160108)
- 2026-10-03T14:39:22Z | chore(deps): update ACP SDK to 1.5.0 (#162954)
- 2026-10-03T14:33:19Z | test: seed session-list cap coverage through transcript import (#164326)
- 2026-10-03T14:33:16Z | fix(memory): session memory sync fails with too many SQL variables on large session stores (#164336)
- 2026-10-03T14:21:43Z | feat(diagnostics): record RPC response bytes and main-thread heap delta per method (#164335)
- 2026-10-03T14:21:33Z | fix(codex): prevent stale native sessions from mutating successors (#164197)
- 2026-10-03T14:18:11Z | test(cron): await owner repair turn admission (#164321)
- 2026-10-03T14:08:07Z | test(ui): track runs admitted by session creation

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
