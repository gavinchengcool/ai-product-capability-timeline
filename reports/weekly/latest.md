# OpenClaw Weekly Update

生成时间：2026-06-17T22:44:43.659011+08:00

## Window

- Start: 2026-06-16T22:44:43.659011+08:00
- End: 2026-06-17T22:44:43.659011+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 531
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 379166
- Repo forks at scan time: 79355

## New Capability Signals

- Providers/models: add GLM-5.2 support and Claude Haiku 4.5 catalog entries while keeping provider-qualified model IDs normalized across OpenRouter and Google Vertex paths. (#92796, #90116, #92627, #91218) Thanks @arkyu2077, @liuhao1024, @bymle, @maaron34, and @lijenhsin. [v2026.6.8]
- Agent commands: support `/btw` in CLI-backed sessions and keep CLI usage-error exits classified as usage failures instead of successful runs. (#92669, #92162) Thanks @joshavant, @Pandah97, and @marcospaulo. [v2026.6.8]
- Usage hooks: add built-in full footer rendering, default footer templates, per-turn usage state, credential-aware limits, and fixed-decimal formatting for usage-bar templates. (#92657, #89835, #89629) Thanks @Marvinthebored. [v2026.6.8]
- feat(docker): support offline setup reruns (#89062)
- feat(agents): trace compaction summarization model calls
- ci: add security-sensitive file guard
- android: add release signing sync
- android: add release preflight lane
- feat(codex): support app-server network proxy profiles (#93538)
- feat(cohere): add provider plugin
- feat(security): emit audit summary events
- feat(plugins): emit security events for installs
- feat(agents): emit security events for exec approvals
- feat(gateway): emit security events for auth handshakes
- feat(gateway): emit security events for device pairing

## Important Fixes And Hardening

- fix(clickclack): clear gateway status after poll failures
- fix(qa-channel): clear gateway status after poll failures
- fix(doctor): clear inert legacy cron notify markers (#89396)
- fix(scripts): make fast commits skip hooks
- fix(secrets): explicitly pass BWS_SERVER_URL to resolver for self-hosted instances (#93929)
- fix(testing): relax gateway chat async waits
- fix(testing): use UUIDs for Telegram credential leases
- fix(testing): use UUIDs for cross-OS release probes
- fix(testing): use UUIDs for Vitest include files
- fix(testing): use UUIDs for macOS Discord smoke nonces
- fix(testing): use UUIDs for npm update guest scripts
- fix(testing): use UUIDs for Parallels background scripts
- fix(testing): recognize signaled Parallels server exits
- fix(testing): normalize QA compose service lookup
- fix(testing): avoid Parallels guest script collisions

## Releases This Week

- `v2026.6.8` | stable | 2026-06-16T16:32:26Z | openclaw 2026.6.8

## Most Active Change Scopes

- `agents`: 134
- `fix`: 42
- `qa`: 24
- `ui`: 23
- `commands`: 23
- `release`: 22
- `testing`: 15
- `providers`: 15
- `android`: 13
- `plugins`: 12
- `ci`: 12
- `codex`: 12

## Recent Commit Headlines

- 2026-06-17T14:40:43Z | fix(clickclack): clear gateway status after poll failures
- 2026-06-17T14:18:33Z | fix(qa-channel): clear gateway status after poll failures
- 2026-06-17T14:05:53Z | refactor(plugins): remove unused session helpers
- 2026-06-17T14:21:22Z | fix(doctor): clear inert legacy cron notify markers (#89396)
- 2026-06-17T14:19:21Z | chore(ui): refresh it control ui locale
- 2026-06-17T14:17:52Z | chore(ui): refresh fa control ui locale
- 2026-06-17T14:17:37Z | chore(ui): refresh nl control ui locale
- 2026-06-17T14:17:33Z | chore(ui): refresh vi control ui locale
- 2026-06-17T14:16:55Z | chore(ui): refresh th control ui locale
- 2026-06-17T14:16:38Z | chore(ui): refresh pl control ui locale
- 2026-06-17T14:16:03Z | chore(ui): refresh id control ui locale
- 2026-06-17T14:15:41Z | chore(ui): refresh tr control ui locale
- 2026-06-17T14:15:35Z | chore(ui): refresh uk control ui locale
- 2026-06-17T14:15:04Z | chore(ui): refresh ar control ui locale
- 2026-06-17T14:14:37Z | chore(ui): refresh fr control ui locale
- 2026-06-17T14:14:21Z | chore(ui): refresh ko control ui locale
- 2026-06-17T14:14:14Z | chore(ui): refresh es control ui locale
- 2026-06-17T14:14:10Z | chore(ui): refresh ja-JP control ui locale
- 2026-06-17T14:13:23Z | chore(ui): refresh zh-TW control ui locale
- 2026-06-17T14:13:20Z | chore(ui): refresh pt-BR control ui locale

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
