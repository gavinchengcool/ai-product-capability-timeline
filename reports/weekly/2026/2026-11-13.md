# OpenClaw Weekly Update

生成时间：2026-11-13T03:14:22.622999+08:00

## Window

- Start: 2026-11-12T03:14:22.622999+08:00
- End: 2026-11-13T03:14:22.622999+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 303
- Releases in window: 1
- Stable releases in window: 0
- Beta releases in window: 1
- Repo stars at scan time: 394405
- Repo forks at scan time: 82884

## New Capability Signals

- feat(google): add Gemini 4 Hydrogen to the catalog
- feat(ui): toggle wrapping on code blocks in your own messages (#197804)
- feat(macos): enroll Mac nodes through OpenClaw ID invitations, with native hosting onboarding (#196759)
- feat(apple): add opt-in OpenClaw ID node foundation (#194201)
- feat(knowledge): route skills by task and keep subject pages current (#197018)
- feat(ui): start New Session in the background with Cmd/Ctrl+Enter (#197481)
- feat(agents): let sessions_spawn target a paired device (#197469)
- feat(google): support Gemini Decision models (#197501)
- feat(advisor): log cancelled in-flight reviews (#197506)
- feat: add native Celeris, Fastino, Nace and Perplexity decisions (#195641)
- feat(advisor): move Advisor out of Labs (still off by default) (#197029)
- feat(claude-cli): managed turns can search the web by default with Claude Code's native WebSearch (#197291)

## Important Fixes And Hardening

- Security: reject malformed URI identifiers using fast-uri 4.2.3 while preserving valid relative references. (#187284) Thanks @RomneyDa and @shakkernerd. [v2026.11.5-beta.2]
- Security: reject oversized bounded collections early in the Discord SDK and its transitive Zod 3 parser without restoring the retired A2UI integration. (#187296 #187303) Thanks @RomneyDa and @shakkernerd. [v2026.11.5-beta.2]
- fix(sessions): remove unused pending-input invitation path (#197839)
- fix(update): reclaim retained runtimes while the Gateway watches directories (#197833)
- perf: reduce Responses continuation comparison allocations (#197579)
- fix(agents): let healthy proxy streams exceed 16 MiB (#197842)
- fix(agents): keep the session system prompt stable across completion wakes (#197835)
- fix(ui): keep Template review file rows visible on phones (#197848)
- fix(channels): cancel pending status read in channels list on Ctrl+C (#197815)
- fix(pr): preserve cache replacement refusal during metadata handoff (#197841)
- perf(gateway): follow publication facts for passive PR subscriptions (#197840)
- fix(sessions): preserve transcript authority across runtime adapters (#184513)
- fix(memory-wiki): cancel interrupted wiki status and doctor reads (#197749)
- fix(pr): refresh bound baselines for pending proof (#196028)
- fix(cron): one-shot details omit seconds and milliseconds (#197791)

## Releases This Week

- `v2026.11.5-beta.2` | beta | 2026-11-12T00:43:25Z | openclaw 2026.11.5-beta.2

## Most Active Change Scopes

- `fix`: 53
- `ui`: 35
- `ci`: 26
- `test`: 21
- `agents`: 13
- `cron`: 11
- `gateway`: 10
- `update`: 9
- `sessions`: 7
- `cli`: 7
- `claude-cli`: 5
- `perf`: 4

## Recent Commit Headlines

- 2026-11-12T19:03:52Z | fix(sessions): remove unused pending-input invitation path (#197839)
- 2026-11-12T18:58:38Z | fix(update): reclaim retained runtimes while the Gateway watches directories (#197833)
- 2026-11-12T18:56:01Z | perf: reduce Responses continuation comparison allocations (#197579)
- 2026-11-12T18:47:55Z | feat(google): add Gemini 4 Hydrogen to the catalog
- 2026-11-12T18:40:13Z | fix(agents): let healthy proxy streams exceed 16 MiB (#197842)
- 2026-11-12T18:39:57Z | refactor(plugins): migrate binding and approval reads to async owners (#192623)
- 2026-11-12T18:12:24Z | fix(agents): keep the session system prompt stable across completion wakes (#197835)
- 2026-11-12T18:06:41Z | fix(ui): keep Template review file rows visible on phones (#197848)
- 2026-11-12T17:59:31Z | refactor(agents): isolate CLI model capabilities (#192613)
- 2026-11-12T17:57:24Z | fix(channels): cancel pending status read in channels list on Ctrl+C (#197815)
- 2026-11-12T17:56:42Z | fix(pr): preserve cache replacement refusal during metadata handoff (#197841)
- 2026-11-12T17:51:05Z | perf(gateway): follow publication facts for passive PR subscriptions (#197840)
- 2026-11-12T17:46:05Z | chore(update): record 2026.11.5-beta.2 in the update compat inventory (#197844)
- 2026-11-12T17:40:51Z | fix(sessions): preserve transcript authority across runtime adapters (#184513)
- 2026-11-12T17:29:02Z | fix(memory-wiki): cancel interrupted wiki status and doctor reads (#197749)
- 2026-11-12T17:17:06Z | fix(pr): refresh bound baselines for pending proof (#196028)
- 2026-11-12T17:03:07Z | feat(ui): toggle wrapping on code blocks in your own messages (#197804)
- 2026-11-12T16:56:51Z | test(update): keep cancellation fixture heartbeat on real time (#197831)
- 2026-11-12T16:53:34Z | chore(ui): refresh control ui locales (#197834)
- 2026-11-12T16:44:54Z | fix(cron): one-shot details omit seconds and milliseconds (#197791)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
