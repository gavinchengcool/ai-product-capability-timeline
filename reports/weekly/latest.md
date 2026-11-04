# OpenClaw Weekly Update

生成时间：2026-11-05T02:55:50.455366+08:00

## Window

- Start: 2026-11-04T02:55:50.455366+08:00
- End: 2026-11-05T02:55:50.455366+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 456
- Releases in window: 1
- Stable releases in window: 0
- Beta releases in window: 1
- Repo stars at scan time: 393906
- Repo forks at scan time: 82788

## New Capability Signals

- **Automations:** add persistent streams and richer execution context for durable scheduled work. (#177941, #177942, #179011, #179062, #179669, #182561) Thanks @joshavant, @eleqtrizit, and @jalehman. [v2026.11.5-beta.1]
- **Providers:** add and refine provider integrations, authentication, and model discovery. (#175509, #175729, #180788, #182248; related #175543) Authored by @steipete. Thanks @midhunvnadh, @obviyus, @lavicosa, and @hannesrudolph. [v2026.11.5-beta.1]
- **Memory maintenance:** add safer memory cleanup and maintenance flows. (#182530; fixes #157280) Authored by @steipete. Thanks @islandpreneur007. [v2026.11.5-beta.1]
- feat(storage): support read-only PostgreSQL standby inspection (#192645)
- improve(ui): clarify first-run welcome and memory import (#192209)
- ci(release): add qualified package smoke (#191654)
- improve(ui): clarify new session devices and workspaces (#192044)
- feat(tencent): add hy4 to TokenHub and TokenPlan (#191662)
- feat(beam): preserve live logical conversation handoff (#192513)
- feat(ci): capture owned tree rankings before test execution (#192574)
- feat(ui): add distinct icons for plugin capabilities (#192338)
- feat(ci): freeze prospective graph selection decisions (#192515)
- feat(ci): restore bounded prior test observations (#192514)
- feat(ui): auto-load older sidebar sessions on scroll (#192154)
- feat(ci): capture prospective test launch inputs (#192403)

## Important Fixes And Hardening

- fix(release): waive 2026.11.1 OpenRouter billing failure (#192936)
- fix(ci): route Windows checks to hosted runners (#192805)
- fix(discord): release voice recordings when speaking-end events are lost (#192932)
- fix(plugins): accepted plugin reload handoffs can keep the old turn running (#192892)
- fix(update): show the first failure behind an unfinished recovery refusal (#192919)
- fix(ui): Skill Workshop off state hides errors and loses focus (#192931)
- fix(ui): prevent nested session archive controls from overlapping (#192777)
- fix(ci): exercise native consumers during Boat qualification (#192798)
- fix(ci): remove unused PostgreSQL fingerprint export (#192929)
- fix(workers): honor profile setup-script opt-out (#192538)
- fix(ci): keep plugin scaffold validation on hosted Ubuntu (#192898)
- fix(doctor): keep the cause when a transcript archive migration refuses (#192918)
- fix(ci): reconcile audited 191-line test budget debt (#192905)
- fix(doctor): report supervised launch risk when native reaping is unavailable (#191915)
- fix(cli): show gateway restart flag-conflict reasons (#192478)

## Releases This Week

- `v2026.11.5-beta.1` | beta | 2026-11-04T04:51:56Z | openclaw 2026.11.5-beta.1

## Most Active Change Scopes

- `ui`: 103
- `improve(ui)`: 74
- `ci`: 48
- `fix`: 30
- `test`: 19
- `agents`: 13
- `gateway`: 13
- `codex`: 8
- `release`: 7
- `cron`: 6
- `worktrees`: 6
- `update`: 5

## Recent Commit Headlines

- 2026-11-04T18:54:16Z | chore(ui): refresh control ui locales (#192950)
- 2026-11-04T18:51:38Z | fix(release): waive 2026.11.1 OpenRouter billing failure (#192936)
- 2026-11-04T18:47:51Z | fix(ci): route Windows checks to hosted runners (#192805)
- 2026-11-04T18:45:50Z | fix(discord): release voice recordings when speaking-end events are lost (#192932)
- 2026-11-04T18:39:08Z | fix(plugins): accepted plugin reload handoffs can keep the old turn running (#192892)
- 2026-11-04T18:31:58Z | fix(update): show the first failure behind an unfinished recovery refusal (#192919)
- 2026-11-04T18:29:27Z | fix(ui): Skill Workshop off state hides errors and loses focus (#192931)
- 2026-11-04T18:25:33Z | fix(ui): prevent nested session archive controls from overlapping (#192777)
- 2026-11-04T18:23:44Z | fix(ci): exercise native consumers during Boat qualification (#192798)
- 2026-11-04T18:22:47Z | fix(ci): remove unused PostgreSQL fingerprint export (#192929)
- 2026-11-04T18:14:28Z | fix(workers): honor profile setup-script opt-out (#192538)
- 2026-11-04T18:02:41Z | fix(ci): keep plugin scaffold validation on hosted Ubuntu (#192898)
- 2026-11-04T17:59:15Z | refactor(agents): separate command data from execution context (#192834)
- 2026-11-04T17:55:37Z | fix(doctor): keep the cause when a transcript archive migration refuses (#192918)
- 2026-11-04T17:53:11Z | fix(ci): reconcile audited 191-line test budget debt (#192905)
- 2026-11-04T17:51:15Z | fix(doctor): report supervised launch risk when native reaping is unavailable (#191915)
- 2026-11-04T17:50:03Z | chore(ui): refresh control ui locales (#192923)
- 2026-11-04T17:49:58Z | fix(cli): show gateway restart flag-conflict reasons (#192478)
- 2026-11-04T17:28:23Z | fix(gateway): recover remote workers without blocking readiness (#192542)
- 2026-11-04T17:27:04Z | fix(knowledge): report real write access for a never-written store (#192073)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
