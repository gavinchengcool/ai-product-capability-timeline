# OpenClaw Weekly Update

生成时间：2026-11-14T02:50:35.139775+08:00

## Window

- Start: 2026-11-13T02:50:35.139775+08:00
- End: 2026-11-14T02:50:35.139775+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 305
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 394378
- Repo forks at scan time: 82883

## New Capability Signals

- feat(openclaw-id): admins turn on remote access over a verified personal sign-in (#198349)
- feat(ui): show and edit each agent's utility model on the Agents page (#197894)
- feat(openclaw-id): Link reuses a still-valid OpenClaw ID sign-in instead of a second device code (#198323)
- feat: show ClawHub finalization status (#195011)
- feat(ui): switch command palette between Search and Compose (#186059)
- feat(database): hold Gateway state ownership in PostgreSQL on all-PostgreSQL installs (#196237)
- feat: keep creative projects grounded in their visual references (#198229)
- feat(database): keep PostgreSQL rollback captures in PostgreSQL (#196236)
- feat(backup): restore PostgreSQL stores into a staging database for restore drills (#194808)
- feat(ui): choose the speech-to-text model from Settings → Talk (#197906)
- feat(browser): open Chrome settings pages from the Control UI Browser panel (#197904)
- feat(ios): manage session groups directly from the group header (#167173)
- feat(ui): search Google from the Browser panel address bar (#197901)
- feat: add an opt-in usage-ranked tool index (#197128)
- feat(ui): add optional inline command trail (#197466)

## Important Fixes And Hardening

- fix(android): update password semantics between provider sign-in steps (#195674)
- fix(android): wrap chat swarm header label and summary counts cleanly (#196042)
- fix(android): disclose automation name and ID in deletion confirmation dialog (#196040)
- fix(android): render full dream diary entry text in Dreaming settings (#195999)
- fix(acp): relay exec approvals when Claude CLI and MCP tool call IDs differ (#197853)
- perf(gateway): share policy decisions across session lineage (#198338)
- fix(ui): automations listener throws on Gateway events while Details props are pending (#198380)
- fix: PR auto-fix stops following review and CI feedback
- fix(telegram): keep DM topic approvals in their conversation (#198038)
- fix(gateway): cancel in-flight MCP listener work when shutdown starts (openclaw-jci6) (#197119)
- fix(agents): allow authorized non-disruptive component work (#198396)
- fix(ios): keep streaming replies in view and stop the jump when they finish (#198326)
- fix(google-meet): cancel interrupted status, transcript and doctor reads (#198372)
- fix(ci): new PostgreSQL suites are omitted from conformance (#198390)
- fix(test): pin direct tools for cron allowlist probe (#198397)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `ui`: 50
- `fix`: 29
- `ci`: 23
- `gateway`: 14
- `test`: 14
- `telegram`: 13
- `agents`: 13
- `cli`: 9
- `android`: 8
- `worktrees`: 8
- `cron`: 7
- `ios`: 6

## Recent Commit Headlines

- 2026-11-13T18:49:02Z | fix(android): update password semantics between provider sign-in steps (#195674)
- 2026-11-13T18:47:23Z | fix(android): wrap chat swarm header label and summary counts cleanly (#196042)
- 2026-11-13T18:45:34Z | fix(android): disclose automation name and ID in deletion confirmation dialog (#196040)
- 2026-11-13T18:44:11Z | fix(android): render full dream diary entry text in Dreaming settings (#195999)
- 2026-11-13T18:42:21Z | chore(ui): refresh control ui locales (#198408)
- 2026-11-13T18:41:59Z | fix(acp): relay exec approvals when Claude CLI and MCP tool call IDs differ (#197853)
- 2026-11-13T18:40:38Z | perf(gateway): share policy decisions across session lineage (#198338)
- 2026-11-13T18:36:48Z | fix(ui): automations listener throws on Gateway events while Details props are pending (#198380)
- 2026-11-13T18:36:28Z | fix: PR auto-fix stops following review and CI feedback
- 2026-11-13T18:33:33Z | fix(telegram): keep DM topic approvals in their conversation (#198038)
- 2026-11-13T18:30:19Z | fix(gateway): cancel in-flight MCP listener work when shutdown starts (openclaw-jci6) (#197119)
- 2026-11-13T18:26:06Z | test(ui): deduplicate Home real-Gateway registration (#198391)
- 2026-11-13T18:23:53Z | fix(agents): allow authorized non-disruptive component work (#198396)
- 2026-11-13T18:21:10Z | feat(openclaw-id): admins turn on remote access over a verified personal sign-in (#198349)
- 2026-11-13T18:18:20Z | fix(ios): keep streaming replies in view and stop the jump when they finish (#198326)
- 2026-11-13T18:17:04Z | fix(google-meet): cancel interrupted status, transcript and doctor reads (#198372)
- 2026-11-13T18:16:03Z | fix(ci): new PostgreSQL suites are omitted from conformance (#198390)
- 2026-11-13T18:08:02Z | fix(test): pin direct tools for cron allowlist probe (#198397)
- 2026-11-13T17:49:52Z | fix(telegram): first DM message lands in root chat when the client creates the topic separately (#169444)
- 2026-11-13T17:30:45Z | fix(telegram): steered answers quote the wrong input (#178124)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
