# OpenClaw Weekly Update

生成时间：2026-10-29T01:28:59.304912+08:00

## Window

- Start: 2026-10-28T01:28:59.304912+08:00
- End: 2026-10-29T01:28:59.304912+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 520
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 393271
- Repo forks at scan time: 82668

## New Capability Signals

- feat(workers): dispatch own sessions to role-granted cloud profiles
- feat(knowledge): owners can grant group chats access to private knowledge (#186455)
- feat(telemetry): count reporting installations without identifiers (#186569)
- feat(ui): show paused child sessions in the handoff wait line
- feat(knowledge): agents can no longer grow pages past a read-sized budget, and can extract sections instead
- feat(qa): report terminal-aware logical model accounting (#186462)
- feat(memory-lancedb): report health and serve search through the memory provider runtime (#165756)
- feat: enable native plugin UI without a Labs opt-in
- feat(knowledge): consolidate claims by scope and supersede snapshots by their outcome
- feat(mattermost): stop bot-to-bot reply loops and add allowBots (#183239)
- feat(notifications): identify completed sessions by explicit labels (#144862)
- feat(models): let a provider behind a local relay keep the hosted idle timeout (#183637)
- feat(agent): read piped messages in ordinary agent turns (#167122)
- feat: make busy-session messages automatic with coherent security presets (#185477)
- feat(knowledge): reloading Knowledge no longer waits for running agent turns (#186267)

## Important Fixes And Hardening

- fix: distinguish owned processes in native Windows task tests (#186806)
- fix(native): retain messages refused during agent startup (#186860)
- fix: restart notices missing from conversation history (#186547)
- perf(ai): reuse frozen Anthropic HTTP request bytes (#186872)
- fix: avoid cold compilation timing out Windows lifecycle proof (#186868)
- fix: preserve agent creation dialog state during avatar selection (#186899)
- fix: preserve Draft when copying conversations (#186828)
- fix: unblock the mobile link-preview browser test (#186894)
- fix(cron): stop waiting for run completion when interrupted (#186750)
- perf(gateway): reuse full session row encoding across event recipients (#186900)
- fix: recover accepted guest workspace inventory (#186819)
- fix(doctor): recover upgrades with unfinished shared-state columns
- fix(scripts): preserve PR tooling across process handoffs (#185964)
- fix: recover interrupted updates after the original PR closes (#186717)
- perf(doctor): parse session migration manifests once per run (#186880)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `fix`: 94
- `ui`: 77
- `gateway`: 41
- `agents`: 25
- `update`: 24
- `sessions`: 22
- `test`: 21
- `ci`: 15
- `docs`: 11
- `state`: 11
- `knowledge`: 8
- `cron`: 7

## Recent Commit Headlines

- 2026-10-28T17:26:34Z | fix: distinguish owned processes in native Windows task tests (#186806)
- 2026-10-28T17:19:59Z | fix(native): retain messages refused during agent startup (#186860)
- 2026-10-28T17:14:04Z | fix: restart notices missing from conversation history (#186547)
- 2026-10-28T17:11:46Z | perf(ai): reuse frozen Anthropic HTTP request bytes (#186872)
- 2026-10-28T17:08:30Z | refactor(nextcloud-talk): share media diagnostic context (#186911)
- 2026-10-28T17:08:08Z | fix: avoid cold compilation timing out Windows lifecycle proof (#186868)
- 2026-10-28T17:06:12Z | fix: preserve agent creation dialog state during avatar selection (#186899)
- 2026-10-28T16:58:21Z | fix: preserve Draft when copying conversations (#186828)
- 2026-10-28T16:56:55Z | fix: unblock the mobile link-preview browser test (#186894)
- 2026-10-28T16:54:45Z | fix(cron): stop waiting for run completion when interrupted (#186750)
- 2026-10-28T16:54:19Z | perf(gateway): reuse full session row encoding across event recipients (#186900)
- 2026-10-28T16:53:51Z | fix: recover accepted guest workspace inventory (#186819)
- 2026-10-28T16:49:54Z | fix(doctor): recover upgrades with unfinished shared-state columns
- 2026-10-28T16:44:23Z | docs(tools): use registered MCP tool names in the Tool Search examples (#186865)
- 2026-10-28T16:35:15Z | fix(scripts): preserve PR tooling across process handoffs (#185964)
- 2026-10-28T16:33:44Z | refactor(tests): share Doctor peer-link fixture (#186878)
- 2026-10-28T16:30:09Z | fix: recover interrupted updates after the original PR closes (#186717)
- 2026-10-28T16:22:23Z | perf(doctor): parse session migration manifests once per run (#186880)
- 2026-10-28T16:22:08Z | fix(agents): allow bounded recovery after repeated identical tool errors
- 2026-10-28T16:21:30Z | fix(update): finish updates when native process ancestry is unavailable (#186871)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
