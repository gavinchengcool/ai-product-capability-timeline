# OpenClaw Weekly Update

生成时间：2026-08-29T23:48:49.647262+08:00

## Window

- Start: 2026-08-28T23:48:49.647262+08:00
- End: 2026-08-29T23:48:49.647262+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 546
- Releases in window: 1
- Stable releases in window: 0
- Beta releases in window: 1
- Repo stars at scan time: 387985
- Repo forks at scan time: 81476

## New Capability Signals

- **Model selection scopes:** add configurable model-selection scopes while preserving the canonical provider and runtime policy path. (#127813) Thanks @Marvinthebored and @Peetiegonzalez. [v2026.9.1-beta.1]
- feat(control-ui): show cloud worker service and profile on session placements (#132405)
- feat(ui): show node worker-slot utilization as segmented pips in the placement picker and Devices settings (#132394)
- feat(crabbox): allow profiles without a default machine class (#131009)
- feat(buzz): preserve bot identities when adding named accounts (#132226)
- feat(hovercard): show PR co-authors as a facepile (#132275)
- feat: configure Code Mode per model with inherited defaults (#132332)
- feat(qa): add Convex-leased Telegram userbot proof (#131715)
- feat(gateway): auto-apply safe doctor config migrations at startup (#132135)
- feat(hovercard): show the PR author beside the number (#132107)
- feat(ui): expand video attachments in the media overlay (#132131)
- feat(ui): render queued follow-ups as transcript bubbles (#131909)
- feat(visitor-access): internal Cloudflare Access visitor plugin (#132073)
- feat(docker): install openssh-client in the runtime image (#131710)
- feat(release): reuse exact full release candidates (#131818)

## Important Fixes And Hardening

- fix(agents): account summarization model usage (#131115)
- fix(doctor): preserve OpenAI auth rotation state (#130763)
- fix(test): join tsgo cleanup after operation timeout (#132654)
- fix(signal): preserve messages redelivered behind a busy lane (#128093)
- fix(qa): stop hung packaged bootstrap subprocesses (#132659)
- fix(agents): keep CLI tool args from start blocks (#120737)
- fix(tavily): resolve dedicated tool SecretRefs (#131082)
- fix(plugins): isolate malformed manifest schemas from plugin load and config validation (#119825)
- fix(ci): prevent docs agent from throttling its own run (#132640)
- fix: clean up health tests after failed or delayed setup (#132653)
- perf(test): consolidate duplicate sweeper close-reopen proof (#132656)
- fix(release): validate complete ClawHub recovery audits (#132642)
- perf(test): avoid inventory scans for exact test validation (#132652)
- fix(policy): scan keyed agent evidence (#126935)
- perf(parallel): keep search limits on the lightweight descriptor (#132647)

## Releases This Week

- `v2026.9.1-beta.1` | beta | 2026-08-28T20:43:46Z | openclaw 2026.9.1-beta.1

## Most Active Change Scopes

- `ui`: 57
- `test`: 46
- `fix`: 39
- `release`: 25
- `agents`: 22
- `ci`: 20
- `qa`: 17
- `gateway`: 16
- `docs`: 13
- `macos`: 12
- `codex`: 11
- `browser`: 11

## Recent Commit Headlines

- 2026-08-29T15:47:21Z | fix(agents): account summarization model usage (#131115)
- 2026-08-29T15:44:13Z | fix(doctor): preserve OpenAI auth rotation state (#130763)
- 2026-08-29T15:41:06Z | fix(test): join tsgo cleanup after operation timeout (#132654)
- 2026-08-29T15:39:10Z | fix(signal): preserve messages redelivered behind a busy lane (#128093)
- 2026-08-29T15:38:25Z | fix(qa): stop hung packaged bootstrap subprocesses (#132659)
- 2026-08-29T15:34:15Z | fix(agents): keep CLI tool args from start blocks (#120737)
- 2026-08-29T15:29:25Z | fix(tavily): resolve dedicated tool SecretRefs (#131082)
- 2026-08-29T15:24:38Z | chore(ui): refresh control ui locales (#132661)
- 2026-08-29T15:21:15Z | fix(plugins): isolate malformed manifest schemas from plugin load and config validation (#119825)
- 2026-08-29T15:17:18Z | fix(ci): prevent docs agent from throttling its own run (#132640)
- 2026-08-29T15:15:51Z | fix: clean up health tests after failed or delayed setup (#132653)
- 2026-08-29T15:15:32Z | test: clean up state and async task fixtures (#132643)
- 2026-08-29T15:13:28Z | perf(test): consolidate duplicate sweeper close-reopen proof (#132656)
- 2026-08-29T15:12:12Z | fix(release): validate complete ClawHub recovery audits (#132642)
- 2026-08-29T15:09:58Z | perf(test): avoid inventory scans for exact test validation (#132652)
- 2026-08-29T15:06:34Z | fix(policy): scan keyed agent evidence (#126935)
- 2026-08-29T15:05:02Z | improve(ui): smoother chat history loading with an in-flow earlier-history boundary (#132493)
- 2026-08-29T15:03:46Z | docs: clarify paired-node Codex continuation limits (#132637)
- 2026-08-29T15:03:05Z | perf(parallel): keep search limits on the lightweight descriptor (#132647)
- 2026-08-29T15:02:51Z | fix(sessions): keep reset history closed after compaction (#132606)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
