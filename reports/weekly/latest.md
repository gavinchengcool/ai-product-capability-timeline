# OpenClaw Weekly Update

生成时间：2026-11-27T04:36:34.799279+08:00

## Window

- Start: 2026-11-26T04:36:34.799279+08:00
- End: 2026-11-27T04:36:34.799279+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 380
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 395290
- Repo forks at scan time: 82997

## New Capability Signals

- feat(ui): group automations that need attention (#206111)
- feat(signal): include recent group photos when mentioned (#202586)
- feat(agents): let agents opt into a shared USER.md directory
- feat(signal): let a group reply to the bot count as a mention (#201148)
- feat(gateway): add opt-in supervisor-verified lock recovery (#205888)
- feat: let agents snooze a conversation after replying
- feat: let OpenClaw find and set up the Llama app (#205323)
- feat(release): allow unbounded fast-track for beta prereleases (#205228)
- feat(context): show prompt budget card for /context on every channel (#205780)
- feat(models): split sign out on this device from disconnect account (#205759)
- feat: define exec settings for Dedicated workers (#205571)
- feat: let plugins explain provider errors in chat
- feat: confine native node worker filesystem access (#193823)
- feat: let agents post approved GitHub comments (#204301)
- feat(macos): use the signed-in person's saved session pins

## Important Fixes And Hardening

- fix(android): honor Markdown table column alignment (#205575)
- perf(gateway): reuse session event envelopes across delivery histories (#206144)
- fix(ui): preserve spaces and the caret in Activity session search (#206123)
- fix: remove updater runtimes that shipped releases leave after the installation moves (#206124)
- fix(codex): release the gateway hold when a resumed worker finishes (#206137)
- fix(chat): preserve edited recall stashes after send acceptance (#206117)
- fix: sessions_send recipient's NO_REPLY fails as empty_response and runs model fallback (#206058)
- fix(android): keep the turn recap when returning to a conversation (#205528)
- fix(macos): keep Up in multiline composer drafts (#205434)
- fix(workshop): normalize changes limits before choosing a route (#206091)
- perf(gateway): avoid list projection for transcript recall (#206110)
- fix(codex): explain when a resumed worker has a different parent (#206114)
- fix: reuse prepared middleware for agent tool results (#206108)
- fix(ios): keep shared link captions when the title is blank (#205525)
- fix(gateway): wait for transient SQLite schema custody at startup

## Releases This Week

- `v2026.10.34` | stable | 2026-11-26T01:37:32Z | openclaw 2026.10.34

## Most Active Change Scopes

- `fix`: 119
- `ui`: 37
- `android`: 27
- `ci`: 18
- `gateway`: 16
- `test`: 15
- `improve`: 11
- `codex`: 9
- `update`: 9
- `feat`: 7
- `agents`: 5
- `signal`: 4

## Recent Commit Headlines

- 2026-11-26T20:30:26Z | fix(android): honor Markdown table column alignment (#205575)
- 2026-11-26T20:21:01Z | improve: reduce broker memory when loading plugin and SQLite resources (#206142)
- 2026-11-26T20:19:14Z | perf(gateway): reuse session event envelopes across delivery histories (#206144)
- 2026-11-26T20:18:36Z | fix(ui): preserve spaces and the caret in Activity session search (#206123)
- 2026-11-26T20:11:46Z | feat(ui): group automations that need attention (#206111)
- 2026-11-26T20:11:38Z | feat(signal): include recent group photos when mentioned (#202586)
- 2026-11-26T20:10:26Z | fix: remove updater runtimes that shipped releases leave after the installation moves (#206124)
- 2026-11-26T20:07:21Z | fix(codex): release the gateway hold when a resumed worker finishes (#206137)
- 2026-11-26T20:05:45Z | fix(chat): preserve edited recall stashes after send acceptance (#206117)
- 2026-11-26T20:04:48Z | test(prompts): remove duplicate message schema snapshots (#206127)
- 2026-11-26T20:00:01Z | fix: sessions_send recipient's NO_REPLY fails as empty_response and runs model fallback (#206058)
- 2026-11-26T19:55:59Z | fix(android): keep the turn recap when returning to a conversation (#205528)
- 2026-11-26T19:54:47Z | improve: reduce Gateway broker memory at startup (#206104)
- 2026-11-26T19:42:41Z | fix(macos): keep Up in multiline composer drafts (#205434)
- 2026-11-26T19:42:12Z | chore(ui): refresh control ui locales (#206130)
- 2026-11-26T19:26:25Z | fix(workshop): normalize changes limits before choosing a route (#206091)
- 2026-11-26T19:22:45Z | perf(gateway): avoid list projection for transcript recall (#206110)
- 2026-11-26T19:22:28Z | test(presentation): trim redundant formatting permutations (#206105)
- 2026-11-26T19:21:12Z | fix(codex): explain when a resumed worker has a different parent (#206114)
- 2026-11-26T19:20:51Z | fix: reuse prepared middleware for agent tool results (#206108)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
