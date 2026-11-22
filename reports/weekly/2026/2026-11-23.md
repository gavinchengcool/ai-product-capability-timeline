# OpenClaw Weekly Update

生成时间：2026-11-23T02:44:20.819913+08:00

## Window

- Start: 2026-11-22T02:44:20.819913+08:00
- End: 2026-11-23T02:44:20.819913+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 197
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 395046
- Repo forks at scan time: 82952

## New Capability Signals

- feat(cron): back automation off when a provider pushes back (#197395)
- feat: keep lean Gateway worker growth inside a memory budget (#202507)
- feat(update): Git installs update through prepared releases and a resident launcher (#203194)
- feat: run lean core workers in one shared host to cut small-machine memory (#202495)
- feat: unlink an OpenClaw ID claw from its own computer (#201779)
- feat: choose a harness for primary and fallback models in Settings (#203358)
- improve: open a new session from the mobile web rail (#203301)
- feat: browse and search Skills by ClawHub category in the Control UI (#202756)
- improve: make the sidebar divider easier to see in light themes (#203287)
- improve: keep selected device folders compact in new sessions (#203269)
- feat: OpenClaw ID protocol for unlinking a claw from its own computer (#201750)
- ci: add fixed Linux Gateway cold-turn calibration (#203239)

## Important Fixes And Hardening

- fix: connect AI without being asked about conversation history or memory (#202601)
- fix: stop an update before it starts while a node service holds the state database (#203578)
- fix(cli): report host live-session refusals as host limits, not provider rate limits (#202602)
- fix: let a pnpm install update again after an update died after activating (#203486)
- fix: stop asking for Local Network access when setting up OpenClaw on this Mac (#202614)
- fix(config): validate raw configs with the implicit main agent (#203583)
- fix: keep a conversation's OpenAI Responses continuation across background runs (#203568)
- fix: chat-requested updates no longer leave the Gateway stopped (#203555)
- fix(ui): keep first use free of automatic panels (#202599)
- fix: yield progress refresh during native process polling (#203580)
- fix: prioritize recommended models in picker search
- fix(agents): harness history moves only at compaction (#203559)
- fix(agents): count a yield-armed exec wake as continuation evidence (#203554)
- fix(update): load check-release only when it runs (#203533)
- fix: keep a Gateway restart during startup from failing with a state database error (#203530)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `fix`: 103
- `ui`: 23
- `update`: 12
- `improve`: 8
- `feat`: 6
- `agents`: 5
- `gateway`: 5
- `refactor`: 3
- `ci`: 3
- `cli`: 2
- `config`: 2
- `cron`: 2

## Recent Commit Headlines

- 2026-11-22T18:30:02Z | fix: connect AI without being asked about conversation history or memory (#202601)
- 2026-11-22T18:23:58Z | fix: stop an update before it starts while a node service holds the state database (#203578)
- 2026-11-22T18:23:46Z | fix(cli): report host live-session refusals as host limits, not provider rate limits (#202602)
- 2026-11-22T18:23:25Z | fix: let a pnpm install update again after an update died after activating (#203486)
- 2026-11-22T18:20:49Z | fix: stop asking for Local Network access when setting up OpenClaw on this Mac (#202614)
- 2026-11-22T18:20:45Z | fix(config): validate raw configs with the implicit main agent (#203583)
- 2026-11-22T18:12:45Z | fix: keep a conversation's OpenAI Responses continuation across background runs (#203568)
- 2026-11-22T18:10:15Z | fix: chat-requested updates no longer leave the Gateway stopped (#203555)
- 2026-11-22T18:00:38Z | fix(ui): keep first use free of automatic panels (#202599)
- 2026-11-22T17:59:42Z | fix: yield progress refresh during native process polling (#203580)
- 2026-11-22T17:50:17Z | fix: prioritize recommended models in picker search
- 2026-11-22T17:47:10Z | refactor(infra): check exec approvals once at commit (#203572)
- 2026-11-22T17:42:49Z | fix(agents): harness history moves only at compaction (#203559)
- 2026-11-22T17:36:10Z | fix(agents): count a yield-armed exec wake as continuation evidence (#203554)
- 2026-11-22T17:18:43Z | test(update): drop the OCM mid-request authority refusal retired by one-time admission (#203534)
- 2026-11-22T17:15:48Z | fix(update): load check-release only when it runs (#203533)
- 2026-11-22T17:12:06Z | feat(cron): back automation off when a provider pushes back (#197395)
- 2026-11-22T17:11:29Z | refactor(agents): drop tool-caller re-checks from agent tool callers (#203561)
- 2026-11-22T16:58:26Z | fix: keep a Gateway restart during startup from failing with a state database error (#203530)
- 2026-11-22T16:54:27Z | fix: bound the whole Auto Review call to its timeoutSeconds budget (#203433)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
