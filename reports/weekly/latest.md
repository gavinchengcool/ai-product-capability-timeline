# OpenClaw Weekly Update

生成时间：2026-11-08T01:02:44.487775+08:00

## Window

- Start: 2026-11-07T01:02:44.487775+08:00
- End: 2026-11-08T01:02:44.487775+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 271
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 394117
- Repo forks at scan time: 82817

## New Capability Signals

- feat(parallel): support Decisions natively and through OpenRouter
- feat(ui): show the next automation run on hover (#194501)
- feat(openclaw-id): add the Control UI account menu, linking dialogs and the Access page (#192352)
- feat(ui): shared InlineAlert for inline errors, warnings and notes (#194124)
- feat(research): add native session research pane (#177232)

## Important Fixes And Hardening

- fix(ui): discard composer draft when a session is archived
- fix(gateway): avoid unused workspace fingerprint reads (#194693)
- fix(update): update summary drops warnings and understates total time on long runs (#194242)
- fix(control-ui): reveal cached Details with the first chat frame (#194639)
- fix(llama-cpp): keep concurrent chats alive when recovery is canceled (#194687)
- fix(build): avoid compiler setup when copying plugin assets (#194680)
- fix(skills): accept inline frontmatter comments without PyYAML (#194653)
- fix(doctor): retained updater runtimes are never reclaimed (#194660)
- fix(ci): recognize the Mantis subprocess test fixture (#194388)
- perf(chat): consolidate retained message derivations (#194675)
- perf(ui): retain device warnings across inventory refreshes (#194668)
- fix(knowledge): make manifest hashes independent of locale (#194646)
- fix(knowledge): include headers in transcript byte limits (#194640)
- perf(ui): reuse syntax highlighting when heavy transcript rows return (#194658)
- fix(ui): preserve New Session during model setup redirects (#194652)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `ui`: 79
- `ci`: 20
- `test`: 14
- `gateway`: 13
- `fix`: 12
- `improve(ci)`: 10
- `ios`: 10
- `update`: 8
- `improve`: 6
- `release`: 6
- `control-ui`: 5
- `doctor`: 5

## Recent Commit Headlines

- 2026-11-07T16:58:59Z | fix(ui): discard composer draft when a session is archived
- 2026-11-07T16:55:04Z | fix(gateway): avoid unused workspace fingerprint reads (#194693)
- 2026-11-07T16:48:47Z | test(ui): measure active accessibility in the engine harness (#194691)
- 2026-11-07T16:46:44Z | fix(update): update summary drops warnings and understates total time on long runs (#194242)
- 2026-11-07T16:43:01Z | fix(control-ui): reveal cached Details with the first chat frame (#194639)
- 2026-11-07T16:39:23Z | improve(ci): cut Node overhead in wrapper fault tests (#194686)
- 2026-11-07T16:38:45Z | fix(llama-cpp): keep concurrent chats alive when recovery is canceled (#194687)
- 2026-11-07T16:37:25Z | test(update): accept ClawHub install records in the legacy operator verifier (#194677)
- 2026-11-07T16:30:18Z | chore: sync main for avatar test fix
- 2026-11-07T16:30:11Z | test(ui): wait for the painted avatar fallback
- 2026-11-07T16:26:49Z | fix(build): avoid compiler setup when copying plugin assets (#194680)
- 2026-11-07T16:24:28Z | fix(skills): accept inline frontmatter comments without PyYAML (#194653)
- 2026-11-07T16:20:36Z | test(ui): sample shared mobile settings insets (#194679)
- 2026-11-07T16:19:24Z | fix(doctor): retained updater runtimes are never reclaimed (#194660)
- 2026-11-07T16:17:30Z | improve(ci): cover Gateway cron completion on PostgreSQL 16 (#194482)
- 2026-11-07T16:16:54Z | fix(ci): recognize the Mantis subprocess test fixture (#194388)
- 2026-11-07T16:13:15Z | perf(chat): consolidate retained message derivations (#194675)
- 2026-11-07T16:09:24Z | perf(ui): retain device warnings across inventory refreshes (#194668)
- 2026-11-07T16:07:49Z | chore: reduce repeated UI CI lifecycle work (#194631)
- 2026-11-07T16:00:32Z | fix(knowledge): make manifest hashes independent of locale (#194646)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
