# OpenClaw Weekly Update

生成时间：2026-10-31T01:18:18.934591+08:00

## Window

- Start: 2026-10-30T01:18:18.934591+08:00
- End: 2026-10-31T01:18:18.934591+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 454
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 393458
- Repo forks at scan time: 82700

## New Capability Signals

- feat(ui): compact context from the composer usage popover
- feat(exec): keep durable session processes across Gateway restarts (#188465)
- feat: show background work in the sidebar (#188433)
- feat(baseten): support joey-1 decision model
- feat(backup): create PostgreSQL archives while the Gateway runs (#185236)
- feat(model-catalog): rows can state their offered thinking levels; xAI rows own their profiles (#188158)
- feat(codex): host cloud inference on enrolled workers
- feat: add Particle model provider (#187135)
- feat(codex): support command-auth custom Responses providers
- improve(ui): strengthen own-message colors in four dark themes (#188114)
- feat(agents): routes inherit the vendor row's reasoning replay (#187754)
- feat(wear): let OpenClaw be the watch's default assistant (#187587)
- feat(model-catalog): catalog rows own their thinking profile; DeepSeek, Mistral, Moonshot, Kimi move (#187730)
- feat(knowledge): derive entity Timelines from records instead of page prose (#187676)
- feat(cron): apply configured default tools before approval (#187798)

## Important Fixes And Hardening

- Security boundaries: require approval for `test`/`[ -v` operands in exec allowlist mode, refuse browser proxy commands sent through generic node invoke, fail closed when sandboxed spawned children resolve CLI-backed models, carry `workspaceOnly` into Gateway-built delegate and media tools, keep unresolved Microsoft Teams allowlists restrictive, stop crafted Teams HTML from stalling the Gateway before sender checks, refuse embedded Control UI auth on pinned Android Gateway connections, and audit symlinked workspace skill roots. (#180880, #179880, #178742, #185094, #184989, #183438, #180843, #182384; related #111797) Thanks @eleqtrizit, @RomneyDa, @LeizhenZhang, and @dineshsuthar123. [v2026.10.10-beta.5]
- Security: keep browser pairing credentials out of opener process arguments, mask Google OAuth client secrets in logs, redact credentials from MCP CLI inspection, omit credentials from rejected search endpoint errors, and keep malformed piped input from corrupting model credentials. (#170289, #183193, #180321, #182534, #167251; related #180308) Thanks @eleqtrizit, @LeizhenZhang, @RomneyDa, @brandon-julio-t, @wr-web, and @Alix-007. [v2026.10.10-beta.5]
- Performance: bound retained session-fork snapshots, release skill catalogs held by prompt reports, coalesce plugin stream transforms, avoid quadratic native reasoning rescans, reduce memory in retrieval, shell analysis, package capture, and history workers, cut stream dispatch copies and unused node event parsing, stop retention work during shutdown, keep cold catalog waits off `plugins.list`, skip settled subagent rechecks and unused activity roster planning, keep large usage reports and incognito transcripts from exhausting workers, and defer dormant Chat streaming code. (#182544, #183010, #185083, #123120, #172392, #183312, #182613, #181936, #183552, #183931, #185859, #179213, #184539, #184921, #181560, #182182, #183407, #156673, #183198) Thanks @RomneyDa, @nierob-cmd, @vincentkoc, @HerbertHuerto, @AmelioMansour, @yy19971996, and @shakkernerd. [v2026.10.10-beta.5]
- fix(crabbox): require bounded Testbox stop verification (#188539)
- fix(memory): preserve native read permission errors (#188531)
- perf(process): isolate agent exec IO in delegated cgroups (#188379)
- fix: find canonically equivalent skills and changed files (#188528)
- fix(cron): start same-session forced runs after the requesting turn (#188513)
- fix(ui): mobile composer sits too close to the bottom of the screen
- fix(startup): keep webhook decisions startup recorded for channels Doctor left pending (#169778)
- fix: verify backup archives in one streamed pass (#188518)
- fix(ui): composer pickers and buttons look disabled in dark themes (#188515)
- fix: initialize private stores under Linux setgid parents (#188464)
- fix(queue): let owners steer active automation turns (#188514)
- fix: remove redundant iOS message actions button (#181316)

## Releases This Week

- `v2026.10.10-beta.5` | beta | 2026-10-30T03:57:14Z | openclaw 2026.10.10-beta.5
- `v2026.9.36` | stable | 2026-10-29T20:19:38Z | openclaw 2026.9.36

## Most Active Change Scopes

- `fix`: 91
- `ui`: 65
- `test`: 29
- `update`: 21
- `ci`: 15
- `plugins`: 11
- `gateway`: 10
- `release`: 9
- `improve(ui)`: 8
- `tts`: 7
- `sessions`: 7
- `memory`: 6

## Recent Commit Headlines

- 2026-10-30T17:15:51Z | fix(crabbox): require bounded Testbox stop verification (#188539)
- 2026-10-30T17:11:13Z | fix(memory): preserve native read permission errors (#188531)
- 2026-10-30T17:10:26Z | docs(postgres): align supported workflows and recovery guidance (#188537)
- 2026-10-30T17:08:17Z | perf(process): isolate agent exec IO in delegated cgroups (#188379)
- 2026-10-30T17:06:46Z | improve(test): reuse native baseline signing setup (#188533)
- 2026-10-30T17:05:42Z | fix: find canonically equivalent skills and changed files (#188528)
- 2026-10-30T17:04:43Z | feat(ui): compact context from the composer usage popover
- 2026-10-30T17:03:11Z | feat(exec): keep durable session processes across Gateway restarts (#188465)
- 2026-10-30T17:01:31Z | chore(ui): refresh control ui locales (#188536)
- 2026-10-30T17:00:41Z | test(release): flush large child output before exit (#188532)
- 2026-10-30T16:56:32Z | fix(cron): start same-session forced runs after the requesting turn (#188513)
- 2026-10-30T16:55:39Z | fix(ui): mobile composer sits too close to the bottom of the screen
- 2026-10-30T16:55:04Z | refactor(tts): remove obsolete audio cleanup mock (#188493)
- 2026-10-30T16:53:41Z | fix(startup): keep webhook decisions startup recorded for channels Doctor left pending (#169778)
- 2026-10-30T16:52:46Z | fix: verify backup archives in one streamed pass (#188518)
- 2026-10-30T16:48:46Z | refactor(openai): share speech request header resolution (#188482)
- 2026-10-30T16:48:10Z | fix(ui): composer pickers and buttons look disabled in dark themes (#188515)
- 2026-10-30T16:48:04Z | test(usage): prepare journal admission before refresh clocks (#188529)
- 2026-10-30T16:47:35Z | fix: initialize private stores under Linux setgid parents (#188464)
- 2026-10-30T16:45:33Z | improve(ios): separate screenshot boot and inventory timings (#188456)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
