# OpenClaw Weekly Update

生成时间：2026-09-26T23:11:43.098930+08:00

## Window

- Start: 2026-09-25T23:11:43.098930+08:00
- End: 2026-09-26T23:11:43.098930+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 545
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 390558
- Repo forks at scan time: 82148

## New Capability Signals

- feat: expose preferred Git release targets in update status (#158926)
- feat: reserve ordered model recommendations in catalog v2 (#158863)
- feat(release): automate iOS and Android store releases (#158807)
- feat(gateway): preserve callback ports on plugin routes (#158360)
- feat(agents): let owners hand keys, config, and skill edits to their agent in chat (#158120)
- feat: curate plugin categories and add Computer use discovery (#158686)
- feat(release): publish npm children in npm-publish behind the single parent approval (#158500)
- feat(ci): add SimSlim and native iOS release qualification (#147770)
- feat: show plugin tool inputs in detail previews (#157946)
- feat: show declared plugin capabilities and setup guides (#157956)
- feat(agentsapi): transfer attachments and hosted files (#154229)
- improve(memory): speed up batched session indexing (#158364)
- feat(meetings): add durable participation foundation (#152327)
- feat(gemini): add google-interactions api backend (#149880)
- feat(update): accept owner-bound repair turns (#147584)

## Important Fixes And Hardening

- fix: rebuild incomplete Git runtimes when source is current (#158931)
- perf(sessions): retain reclamation workers after settled refusals (#158878)
- fix: let setup chat remove configuration overrides (#158873)
- fix: retain parent links in Incognito forks (#158927)
- perf(ui): defer table overflow measurement until layout (#158930)
- perf(agents): coalesce queued provider text appends (#158837)
- fix(codex): use monotonic clock for plugin config discovery deadline (#155863)
- fix(cli): reject blank native hook relay --timeout (#145523)
- fix(memory-core): fall back to FTS on runtime query-embedding failure for optional providers (#156998) (#157032)
- fix(doctor): migrate every agent database before repairs open it (#158584)
- fix: warn agents when background commands cannot wake them (#158884)
- fix(doctor): enforce version-bound plugin convergence (#119857)
- fix(workers): stop checkpoint writes after authority closes (#150611)
- perf(worktrees): avoid repeated cleanup inventories (#158892)
- perf(sessions): bound maintenance planning outside write admission (#158885)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `gateway`: 69
- `ui`: 47
- `fix`: 45
- `test`: 42
- `agents`: 23
- `update`: 17
- `sessions`: 16
- `channels`: 15
- `ci`: 13
- `plugins`: 12
- `qa`: 12
- `codex`: 9

## Recent Commit Headlines

- 2026-09-26T15:08:49Z | chore(lint): drop stale copilot event-bridge max-lines baseline entry
- 2026-09-26T15:06:56Z | fix: rebuild incomplete Git runtimes when source is current (#158931)
- 2026-09-26T14:47:22Z | test(core,ui,plugins): remove low-value tests (batch d017) (#158882)
- 2026-09-26T14:45:26Z | test(agents,gateway,plugins): remove low-value tests (batch d021) (#158919)
- 2026-09-26T14:44:49Z | perf(sessions): retain reclamation workers after settled refusals (#158878)
- 2026-09-26T14:44:03Z | fix: let setup chat remove configuration overrides (#158873)
- 2026-09-26T14:43:30Z | test(core,plugins,chat): remove low-value tests (batch d010) (#158698)
- 2026-09-26T14:41:59Z | test(core,plugins,tooling): remove low-value tests (batch d011) (#158811)
- 2026-09-26T14:39:58Z | refactor(gateway): schedule update checks through the lifetime owner (#158909)
- 2026-09-26T14:31:44Z | fix: retain parent links in Incognito forks (#158927)
- 2026-09-26T14:29:15Z | refactor(plugins): deslop plugin runtime third pass (#158638)
- 2026-09-26T14:27:36Z | perf(ui): defer table overflow measurement until layout (#158930)
- 2026-09-26T14:26:55Z | feat: expose preferred Git release targets in update status (#158926)
- 2026-09-26T14:15:08Z | refactor(telegram): receive webhooks on Gateway routes (#158732)
- 2026-09-26T14:12:03Z | test(ci): replace audit timeout sleep with budget coverage (#138203)
- 2026-09-26T14:09:54Z | test(gateway): isolate session path projection probes
- 2026-09-26T14:01:04Z | refactor(channels): isolate ingress queue contract and failure codec (#158896)
- 2026-09-26T13:57:14Z | perf(agents): coalesce queued provider text appends (#158837)
- 2026-09-26T13:56:39Z | refactor(channels): deslop discord and slack third pass (#158886)
- 2026-09-26T13:52:26Z | fix(codex): use monotonic clock for plugin config discovery deadline (#155863)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
