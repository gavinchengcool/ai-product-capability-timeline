# OpenClaw Weekly Update

生成时间：2026-11-24T06:57:52.005473+08:00

## Window

- Start: 2026-11-23T06:57:52.005473+08:00
- End: 2026-11-24T06:57:52.005473+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 231
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 395113
- Repo forks at scan time: 82967

## New Capability Signals

- Webhooks: accept bodies up to 1 MiB, report rejected requests, and fan out batched Gmail notifications. (#200514, #130002) Authored by @steipete. Thanks @garrytan and @obviyus. [v2026.11.10-beta.2]
- feat(agents): keep idle prompt caches warm with read-only prewarms (#204219)
- feat(diagnostics): identify in-process spawn fallbacks (#204217)
- feat: let admins share specific projects with restricted roles (#203470)
- feat(agents): compact from the warm prompt cache on every route (#204111)
- feat: filter shared sessions by owner or involvement (#203063)
- improve(ui): make theme background artwork opt-in (#203308)
- feat(release): release fast-track system (#201080)

## Important Fixes And Hardening

- fix(openai): embed system prompt in input on ChatGPT Responses when uncached (#202372) (#202720)
- fix: preserve managed GitHub exec on packaged Windows (#201712)
- fix: remove repeated details after an update rolls back (#204253)
- fix(release): retry immutable ClawHub recovery transfers (#204254)
- fix(ci): remove mobile qualification from Gateway validation (#200555)
- fix: schedule Template automations in the adding device’s time zone
- fix: unblock local checks by removing dead exports (#204246)
- fix(models): show provider plugin labels in the Control UI (#204230)
- fix(ui): resume Logs auto-follow when WebKit delivers a wheel's scroll late (#204247)
- fix: let Windows updates restart after a rollback (#204224)
- fix(update): keep a Gateway's own update running when it first reports ready (#204215)
- fix(subagents): preserve yield settlement after child cleanup (#203222)
- fix: open the submission view for pending Templates (#202791)
- fix(ui): keep a reader who reaches the top of a chat at the top (#204220)
- fix: update plugins after the new Gateway starts (#204127)

## Releases This Week

- `v2026.11.10-beta.2` | beta | 2026-11-23T12:48:59Z | openclaw 2026.11.10-beta.2
- `v2026.11.7` | stable | 2026-11-23T01:33:51Z | openclaw 2026.11.7

## Most Active Change Scopes

- `fix`: 72
- `ui`: 27
- `agents`: 16
- `gateway`: 15
- `update`: 14
- `ci`: 12
- `test`: 12
- `release`: 9
- `refactor`: 4
- `improve`: 4
- `tlon`: 3
- `docs`: 3

## Recent Commit Headlines

- 2026-11-23T22:48:03Z | fix(openai): embed system prompt in input on ChatGPT Responses when uncached (#202372) (#202720)
- 2026-11-23T22:45:47Z | test(gateway): drop the stale mid-turn revocation step from screen routing
- 2026-11-23T22:32:26Z | fix: preserve managed GitHub exec on packaged Windows (#201712)
- 2026-11-23T22:31:55Z | fix: remove repeated details after an update rolls back (#204253)
- 2026-11-23T22:23:49Z | test(gateway): assert the structured denial for revoked session history (#204255)
- 2026-11-23T22:14:13Z | fix(release): retry immutable ClawHub recovery transfers (#204254)
- 2026-11-23T22:07:01Z | fix(ci): remove mobile qualification from Gateway validation (#200555)
- 2026-11-23T21:55:33Z | feat(agents): keep idle prompt caches warm with read-only prewarms (#204219)
- 2026-11-23T21:54:23Z | fix: schedule Template automations in the adding device’s time zone
- 2026-11-23T21:50:19Z | fix: unblock local checks by removing dead exports (#204246)
- 2026-11-23T21:47:16Z | fix(models): show provider plugin labels in the Control UI (#204230)
- 2026-11-23T21:39:52Z | fix(ui): resume Logs auto-follow when WebKit delivers a wheel's scroll late (#204247)
- 2026-11-23T21:23:54Z | fix: let Windows updates restart after a rollback (#204224)
- 2026-11-23T21:19:41Z | feat(diagnostics): identify in-process spawn fallbacks (#204217)
- 2026-11-23T21:16:04Z | refactor: drop mid-request authority re-checks in the last gateway, session and node-host refusals (R6d part 4) (#204191)
- 2026-11-23T21:09:22Z | fix(update): keep a Gateway's own update running when it first reports ready (#204215)
- 2026-11-23T21:02:08Z | fix(subagents): preserve yield settlement after child cleanup (#203222)
- 2026-11-23T20:58:15Z | fix: open the submission view for pending Templates (#202791)
- 2026-11-23T20:55:45Z | fix(ui): keep a reader who reaches the top of a chat at the top (#204220)
- 2026-11-23T20:53:27Z | improve: start automatic compaction at 85% of the window on every route (#204210)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
