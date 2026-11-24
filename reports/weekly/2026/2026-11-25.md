# OpenClaw Weekly Update

生成时间：2026-11-25T05:36:52.220556+08:00

## Window

- Start: 2026-11-24T05:36:52.220556+08:00
- End: 2026-11-25T05:36:52.220556+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 337
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 395158
- Repo forks at scan time: 82963

## New Capability Signals

- **Templates:** Open a durable chat before completing verified template setup, and allow a previously deleted template agent to be added again. (#196392) (#200628) Related #198475 Thanks @Patrick-Erichsen, @DonnieFi, and @vincentkoc. [v2026.11.10-beta.3]
- **Hooks:** Accept hook bodies up to 1 MiB, report rejected bodies, and handle batched Gmail pushes. (#200514) (#130002) Authored by @steipete. Thanks @garrytan and @obviyus. [v2026.11.10-beta.3]
- feat: let plugin services page through local session catalogs (#204796)
- feat(beam): route scoped continuation and request status (#204580)
- feat(beam): prevent duplicate turns when a Team handoff is retried (#204581)
- feat(beam): clean and enroll source-bound mirror publications (#204586)
- feat(beam): release a publication and resolve its destination (#204575)
- feat(ui): open catalog share links with the current reader’s permissions (#204590)
- feat(beam): publish reviewed packets with conditional receipts (#204567)
- feat(plugins): bind background catalog exports to service ownership (#204577)
- feat(beam): let publishers discover their private catalog operations (#204589)
- feat(plugin-sdk): send a message to the resolved session (#204638)
- feat(beam): read a published snapshot by generation (#204555)
- feat(beam): package a verified native cleaner for offline Gateways (#204593)
- feat(gateway): keep conditional sends on the selected conversation (#204587)

## Important Fixes And Hardening

- fix(ci): stabilize Gateway timing planner fixture (#204894)
- fix(test): reject missing Slack select placeholders (#204886)
- fix(release): pass admitted coverage to build-only publication budget
- fix(release): disable evidence reuse for build-only validation (#204879)
- fix(macos): explain how to connect a named profile to a foreground Gateway (#203723)
- fix(release): trust published waiver verdict in stable closeout
- fix(release): approve fast-track only through GitHub (#204820)
- Fix SQLite fixture lifetimes in startup inspection and rerank tests
- fix(release): prepare fast-track artifacts without validation (#204807)
- fix(scripts): let released catalog readers reach their native resource broker (#204528)
- fix: isolate immutable Gateway service tests from host PIDs
- fix: check update database safety before stopping the Gateway (#204752)
- fix: let a Git install switch back to the npm package (#204835)
- fix(plugins): run session-scoped plugin forks in the admitted session (#204411)
- fix: keep a chat's client capabilities when queued messages resume after a restart (#204787)

## Releases This Week

- `v2026.11.10-beta.3` | beta | 2026-11-24T03:28:03Z | openclaw 2026.11.10-beta.3
- `v2026.11.8` | stable | 2026-11-24T11:54:30Z | openclaw 2026.11.8

## Most Active Change Scopes

- `fix`: 67
- `ci`: 35
- `release`: 27
- `gateway`: 27
- `test`: 26
- `ui`: 26
- `beam`: 16
- `agents`: 13
- `update`: 12
- `refactor`: 6
- `macos`: 4
- `plugins`: 4

## Recent Commit Headlines

- 2026-11-24T21:12:18Z | fix(ci): stabilize Gateway timing planner fixture (#204894)
- 2026-11-24T21:06:36Z | fix(test): reject missing Slack select placeholders (#204886)
- 2026-11-24T20:59:07Z | fix(release): pass admitted coverage to build-only publication budget
- 2026-11-24T20:42:17Z | fix(release): disable evidence reuse for build-only validation (#204879)
- 2026-11-24T20:40:00Z | test(ai): give continuation fixtures writer scope (#204876)
- 2026-11-24T20:32:14Z | fix(macos): explain how to connect a named profile to a foreground Gateway (#203723)
- 2026-11-24T20:31:18Z | test(agents): remove the compaction test facade (#204872)
- 2026-11-24T20:25:50Z | ci(update): prove schema trials and rollback on owner PRs (#204685)
- 2026-11-24T20:24:18Z | fix(release): trust published waiver verdict in stable closeout
- 2026-11-24T20:20:13Z | test(ui): align read-only Home owner scopes (#204871)
- 2026-11-24T20:18:58Z | refactor(gateway): decide what a turn may do once, as a turn grant (#204756)
- 2026-11-24T20:08:22Z | fix(release): approve fast-track only through GitHub (#204820)
- 2026-11-24T20:02:18Z | Fix SQLite fixture lifetimes in startup inspection and rerank tests
- 2026-11-24T20:00:02Z | test: check JSON exports by behavior (#204865)
- 2026-11-24T19:58:09Z | fix(release): prepare fast-track artifacts without validation (#204807)
- 2026-11-24T19:55:24Z | test(ui): preserve pairing error guidance metadata (#204863)
- 2026-11-24T19:51:53Z | fix(scripts): let released catalog readers reach their native resource broker (#204528)
- 2026-11-24T19:50:34Z | fix: isolate immutable Gateway service tests from host PIDs
- 2026-11-24T19:44:32Z | chore: store session member access levels and add the Participate protocol (#204783)
- 2026-11-24T19:43:47Z | fix: check update database safety before stopping the Gateway (#204752)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
