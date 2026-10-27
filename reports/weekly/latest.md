# OpenClaw Weekly Update

生成时间：2026-10-28T00:55:10.468459+08:00

## Window

- Start: 2026-10-27T00:55:10.468459+08:00
- End: 2026-10-28T00:55:10.468459+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 1034
- Releases in window: 3
- Stable releases in window: 2
- Beta releases in window: 1
- Repo stars at scan time: 393205
- Repo forks at scan time: 82661

## New Capability Signals

- feat(knowledge): readable scribe prompts the operator can edit (#185974)
- feat(ui): show yield acknowledgments as agent text and list waited-on sessions
- feat(android): adapt flat large-screen navigation (#143466)
- feat(session-share): filter shared groups by person (#182286)
- feat(knowledge): Scribes tab to start and control knowledge scribes (#185637)
- feat(standalone): expose AOT compiler analysis opt-outs (#185769)
- feat(liquid-ai): add native Decision model provider (#177369)
- feat(knowledge): scribes set themselves up and maintenance finds the review scribe (#185583)
- feat(plugins): plugins can hand running turns to their reloaded version (#185315)
- improve(ui): unify theme surfaces and interaction states (#184991)
- feat(knowledge): include Knowledge tools in coding profile (#185516)
- feat(browser): judge page blockers with Decision models (#179362)
- feat(agents): let sessions_spawn select cyber Access for children (#185230)
- feat(skills): review background learning as drafts with Skill Workshop propose mode (#181747)
- feat: show third-party plugin logos in tool previews (#185172)

## Important Fixes And Hardening

- fix(node): exit when startup is cancelled (#186106)
- perf(gateway): skip redundant fresh-input custody reads (#186087)
- perf(state): skip checkpoint leases for absent projections (#186115)
- perf(agents): keep recent Code Mode burst capacity warm (#186053)
- fix: run discovered models outside the agent workspace (#185829)
- fix(ui): release obsolete history held by widget layouts (#186007)
- fix(cron): spawn-only cron runs deliver a subagent's long answer cut at 4,096 characters (#185985)
- fix(claws): roll back an MCP server whose write committed before the failure (#185854)
- fix: plugin activation reports fail in native apps (#184341)
- fix(gateway-client): hold requests until hello so connect is always the first frame (#185886)
- fix(agents): identify changed facts behind prompt-cache drops (#186095)
- perf(state): release cached evidence error stack retainers (#186100)
- perf(workspace): check selected authority once per effect (#186091)
- fix(update): preserve cron selection through released upgrades (#185723)
- perf(gateway): transfer chat history activity as JSON bytes (#186071)

## Releases This Week

- `v2026.10.10-beta.4` | beta | 2026-10-27T05:39:34Z | openclaw 2026.10.10-beta.4
- `v2026.10.8` | stable | 2026-10-27T11:56:59Z | openclaw 2026.10.8
- `v2026.9.35` | stable | 2026-10-27T02:20:41Z | openclaw 2026.9.35

## Most Active Change Scopes

- `ui`: 126
- `fix`: 124
- `gateway`: 94
- `agents`: 92
- `test`: 71
- `sessions`: 38
- `refactor`: 32
- `state`: 30
- `ci`: 22
- `plugins`: 21
- `infra`: 19
- `update`: 18

## Recent Commit Headlines

- 2026-10-27T16:54:46Z | refactor: use test lifetime for private MCP cleanup (#186119)
- 2026-10-27T16:53:40Z | fix(node): exit when startup is cancelled (#186106)
- 2026-10-27T16:50:48Z | refactor(tests): use real IRC formatter (#186122)
- 2026-10-27T16:45:21Z | perf(gateway): skip redundant fresh-input custody reads (#186087)
- 2026-10-27T16:43:39Z | perf(state): skip checkpoint leases for absent projections (#186115)
- 2026-10-27T16:42:10Z | perf(agents): keep recent Code Mode burst capacity warm (#186053)
- 2026-10-27T16:40:05Z | fix: run discovered models outside the agent workspace (#185829)
- 2026-10-27T16:38:22Z | test: consolidate duplicate fixtures and assertions (#186084)
- 2026-10-27T16:38:00Z | test(ui): await current post-navigation readiness (#186112)
- 2026-10-27T16:37:05Z | fix(ui): release obsolete history held by widget layouts (#186007)
- 2026-10-27T16:36:32Z | fix(cron): spawn-only cron runs deliver a subagent's long answer cut at 4,096 characters (#185985)
- 2026-10-27T16:35:44Z | fix(claws): roll back an MCP server whose write committed before the failure (#185854)
- 2026-10-27T16:32:29Z | fix: plugin activation reports fail in native apps (#184341)
- 2026-10-27T16:31:41Z | fix(gateway-client): hold requests until hello so connect is always the first frame (#185886)
- 2026-10-27T16:30:22Z | fix(agents): identify changed facts behind prompt-cache drops (#186095)
- 2026-10-27T16:29:59Z | test(ui): hold older history through reconnect refreshes (#186111)
- 2026-10-27T16:29:11Z | refactor(test): share device re-pairing setup (#185979)
- 2026-10-27T16:29:07Z | chore(tests): align runtime fixtures and worker inventory (#185780)
- 2026-10-27T16:27:24Z | perf(state): release cached evidence error stack retainers (#186100)
- 2026-10-27T16:25:05Z | perf(workspace): check selected authority once per effect (#186091)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
