# OpenClaw Weekly Update

生成时间：2026-10-25T23:06:56.873490+08:00

## Window

- Start: 2026-10-24T23:06:56.873490+08:00
- End: 2026-10-25T23:06:56.873490+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 765
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 393016
- Repo forks at scan time: 82607

## New Capability Signals

- feat(android): show gateway session groups in the sidebar (#164857)
- feat(inworld): add speakingRate and deliveryMode options, list TTS-2 models (#167951)
- feat(ios): hide automation sessions from ordinary session lists (#178620)
- feat(nextcloud-talk): send native voice replies (#178521)
- feat(cli): show approval scopes on pending node pairing requests (#178455)
- feat(nextcloud-talk): preserve quoted message context (#178077)
- feat(cli): show plugin trust status in plugins list output (#178483)
- feat(standalone): experimental AOT build modes (#183224)
- feat: add an opt-in experimental AOT artifact workflow (#183185)
- feat(android): photo + voice note keep one message shape through send and transcription (#174152)
- feat(doctor): report automations that will lose access or pause (#182328)
- feat(lint): default local lint to the pinned Bun fork (#183123)
- feat: record model changes in chat (#182742)
- feat(memory-lancedb): add offline table optimization (#182530)
- feat(perf): attribute retained compiled code to scripts (#182801)

## Important Fixes And Hardening

- fix(ui): scope streaming benchmarks to the workload (#183650)
- fix(standalone): unblock source AOT builds with shared chunks (#183654)
- fix: avoid sorts on non-null PostgreSQL partial indexes (#183443)
- fix(plugins): plugin session actions, hooks, and subagent-end notifications fail during a plugin reload (#182310)
- perf(gateway): renew publication leases off the main thread (#183596)
- perf: reduce unrelated work during chat streaming (#183643)
- fix(sessions): reuse prepared sharing facts during publication (#183609)
- fix(gateway): interrupt worker teardown during shutdown (#183579)
- perf(ui): share list and avatar subscriptions (#183544)
- perf: share PostgreSQL I/O across four process workers (#182888)
- fix(workers): restore portable AOT worker exec (#183626)
- perf(ui): keep Chat code out of New Session plugin activation (#183553)
- perf(database): share PostgreSQL catalog column scans (#183598)
- fix(workers): restore setup in builds without function source (#183611)
- fix: model maintained performance script roots (#183612)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `refactor`: 108
- `fix`: 81
- `ui`: 53
- `gateway`: 45
- `agents`: 38
- `test`: 36
- `sessions`: 35
- `perf`: 22
- `plugins`: 20
- `codex`: 15
- `standalone`: 12
- `memory`: 12

## Recent Commit Headlines

- 2026-10-25T15:00:15Z | test(core): remove low-value tests (batch d540) (#183631)
- 2026-10-25T14:59:59Z | fix(ui): scope streaming benchmarks to the workload (#183650)
- 2026-10-25T14:58:58Z | fix(standalone): unblock source AOT builds with shared chunks (#183654)
- 2026-10-25T14:54:43Z | test(browser,channels,runtime): remove low-value tests (batch d539) (#183633)
- 2026-10-25T14:54:19Z | test: remove low-value tests (batch d537) (#183619)
- 2026-10-25T14:50:40Z | refactor: deslop media, backup and transport fixtures (#183640)
- 2026-10-25T14:49:06Z | fix: avoid sorts on non-null PostgreSQL partial indexes (#183443)
- 2026-10-25T14:41:41Z | fix(plugins): plugin session actions, hooks, and subagent-end notifications fail during a plugin reload (#182310)
- 2026-10-25T14:38:24Z | perf(gateway): renew publication leases off the main thread (#183596)
- 2026-10-25T14:34:47Z | perf: reduce unrelated work during chat streaming (#183643)
- 2026-10-25T14:23:29Z | refactor: deslop browser, policy and internal operation owners (#183584)
- 2026-10-25T14:18:29Z | fix(sessions): reuse prepared sharing facts during publication (#183609)
- 2026-10-25T14:17:32Z | fix(gateway): interrupt worker teardown during shutdown (#183579)
- 2026-10-25T14:12:15Z | perf(ui): share list and avatar subscriptions (#183544)
- 2026-10-25T14:11:16Z | refactor: reduce duplicate native tooling test work (#183520)
- 2026-10-25T14:11:13Z | refactor: deslop terminal, UI and media fixtures (#183616)
- 2026-10-25T14:08:17Z | ci: lower test-lines ceiling to 6,362,000 (#183628)
- 2026-10-25T14:04:09Z | perf: share PostgreSQL I/O across four process workers (#182888)
- 2026-10-25T14:04:06Z | fix(workers): restore portable AOT worker exec (#183626)
- 2026-10-25T14:03:44Z | refactor: deslop talk, plugin and UI fixtures (#183627)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
