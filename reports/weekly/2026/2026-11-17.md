# OpenClaw Weekly Update

生成时间：2026-11-17T05:19:08.390000+08:00

## Window

- Start: 2026-11-16T05:19:08.390000+08:00
- End: 2026-11-17T05:19:08.390000+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 320
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 394596
- Repo forks at scan time: 82907

## New Capability Signals

- **Telegram widgets:** Render interactive widgets as Telegram messages (#196991) Thanks @obviyus. [v2026.11.5-beta.4]
- feat(update): keep each release in its own directory on OpenClaw-owned installs (#198835)
- feat(ui): redesign tool-call rendering, grouping, and lifecycle narration (#198133)
- feat(tencent): add Hy4 Flash to TokenHub and TokenPlan (#199957)
- feat(ui): show skills used in conversation details (#196065)
- feat(minimax): add MiniMax-H3-Image support (#196627)
- feat(openclaw-id): choose and change member roles on the Access page (#197770)
- feat(exec): write background exec output to a file named in the exit wake (#199992)
- feat(ci): measure inclusive Node compile-cache treatments (#199987)
- feat(skills): add bundled create-blobster skill and CLI renderer
- feat(templates): finish Add in a retryable setup conversation (#198603)
- feat(templates): open Control UI chat and create the agent without a plan (#198070)
- feat: open ClawHub catalog reviews in desktop apps (#198571)
- feat(diagnostics): attribute session actor authority payload bytes (#199767)
- feat(openclaw-id): carry the Discovery origin in node join links (#197538)

## Important Fixes And Hardening

- fix(exec): count only real services against the exec service cap (#200250)
- fix: keep credential diagnostics responsive on slow filesystems (#200222)
- fix(web): honor OpenClaw ID permissions in browser notifications (#200205)
- fix(onboard): import memories through the running Gateway
- fix(signal): links with non-English characters are shown twice (#199109)
- fix(auth): main does not build after the identity path lookup moved (#200242)
- fix(plugins): reuse captured package metadata during reconstruction (#200229)
- fix: restore hourly catalog, continuation, and replay checks (#200183)
- fix(sessions): stop self-only recall from scanning unrelated sessions (#200202)
- fix(update): --no-restart update fails when the Gateway restarts itself during Doctor's stop (#200181)
- fix(test): retain source scan fixtures after cleanup failure (#200103)
- fix(release): honor scoped 2026.11.5 Telegram waiver (#200206)
- fix(auto-reply): show revoked queued input as a withheld failure instead of a silent cancel (#200213)
- fix(ci): recover stalled release ancestry hydration (#200225)
- fix(release): honor 2026.11.5 performance waiver (#200204)

## Releases This Week

- `v2026.11.4` | stable | 2026-11-16T04:17:42Z | openclaw 2026.11.4
- `v2026.11.5-beta.4` | beta | 2026-11-16T03:12:26Z | openclaw 2026.11.5-beta.4

## Most Active Change Scopes

- `fix`: 57
- `ui`: 45
- `ci`: 23
- `templates`: 23
- `agents`: 16
- `test`: 11
- `release`: 11
- `cli`: 11
- `gateway`: 10
- `update`: 9
- `plugins`: 8
- `sessions`: 5

## Recent Commit Headlines

- 2026-11-16T21:16:36Z | fix(exec): count only real services against the exec service cap (#200250)
- 2026-11-16T21:11:12Z | fix: keep credential diagnostics responsive on slow filesystems (#200222)
- 2026-11-16T21:10:54Z | fix(web): honor OpenClaw ID permissions in browser notifications (#200205)
- 2026-11-16T20:52:54Z | fix(onboard): import memories through the running Gateway
- 2026-11-16T20:23:43Z | fix(signal): links with non-English characters are shown twice (#199109)
- 2026-11-16T20:22:48Z | fix(auth): main does not build after the identity path lookup moved (#200242)
- 2026-11-16T20:00:54Z | fix(plugins): reuse captured package metadata during reconstruction (#200229)
- 2026-11-16T19:59:44Z | fix: restore hourly catalog, continuation, and replay checks (#200183)
- 2026-11-16T19:56:39Z | fix(sessions): stop self-only recall from scanning unrelated sessions (#200202)
- 2026-11-16T19:55:55Z | fix(update): --no-restart update fails when the Gateway restarts itself during Doctor's stop (#200181)
- 2026-11-16T19:41:39Z | refactor(paths): keep identity lookup imports passive (#200203)
- 2026-11-16T19:34:15Z | fix(test): retain source scan fixtures after cleanup failure (#200103)
- 2026-11-16T19:29:59Z | fix(release): honor scoped 2026.11.5 Telegram waiver (#200206)
- 2026-11-16T19:27:56Z | fix(auto-reply): show revoked queued input as a withheld failure instead of a silent cancel (#200213)
- 2026-11-16T19:26:21Z | fix(ci): recover stalled release ancestry hydration (#200225)
- 2026-11-16T19:15:47Z | fix(release): honor 2026.11.5 performance waiver (#200204)
- 2026-11-16T19:13:06Z | fix: isolate transport policy between shared-worker test files (#200101)
- 2026-11-16T19:10:44Z | fix: reduce Gateway stalls during session GitHub actions (#200211)
- 2026-11-16T19:08:43Z | fix: keep native resource startup responsive on slow filesystems (#200216)
- 2026-11-16T19:02:18Z | fix(ai): keep provider checkpoints across model switches (#200208)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
