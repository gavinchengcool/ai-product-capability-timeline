# OpenClaw Weekly Update

生成时间：2026-10-23T00:08:50.515419+08:00

## Window

- Start: 2026-10-22T00:08:50.515419+08:00
- End: 2026-10-23T00:08:50.515419+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 803
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 392755
- Repo forks at scan time: 82554

## New Capability Signals

- This patch release contains focused reliability fixes only; it does not introduce new user-facing features. [v2026.10.6]
- feat(commands): accept /fast ultra as ultrafast shorthand (#180509)
- feat(cron): add the scheduled-run execution context (no behavior change) (#178933)
- feat(plugins): let requester commands schedule bounded follow-up turns (#180282)
- feat(plugin-sdk): let plugins recover their native children (#180274)
- feat(slack): create public channels from message actions (#163783)
- feat(plugins): expose requester-scoped model catalogs (#180283)
- feat(plugins): let authenticated commands launch native subagents (#180173)
- feat(codex): support read-only plugin tools (#180030)
- feat(plugins): warn when providers close tool dictionaries (#180041)
- feat(release): fetch compatibility inputs from registry (#179093)
- feat(ui): expand Mermaid diagrams with a click (#180048)
- improve: make official support discoverable across OpenClaw (#178816)
- feat: restrict Gateway-local terminals and automation host execution (#177855)
- feat(release): add fast backport conflict probe (#179104)

## Important Fixes And Hardening

- fix(agentsapi): cron job stops right after sending to its own delivery target (#177518)
- fix(ui): keep chat actions and draft restores with current panes (#180623)
- fix(matrix): tag only control commands with command source (#179506)
- fix: browser inspect validation leaves JSON output empty (#176013)
- fix(skills): accept mixed-case --agent ids in skills commands (#180055)
- fix(web-fetch): extract HTML bodies served without a Content-Type (#180064)
- fix(oc-path): resolve and edit quoted Markdown paths (#179821)
- fix(decisions): allow OpenAI batches up to 400 questions (#180210)
- fix(update): restart Gateway after ordinary post-update Doctor failure (#180668)
- fix(x): retire stale snapshots and scope command errors (#180656)
- fix: path JSON refusals leave redirected output empty (#176018)
- fix(oc-path): resolve and edit empty string keys (#175754)
- fix(ui): preserve session loading across catalog scope changes (#180716)
- fix(diagnostics): avoid premature recovery during repeated provider requests (#177557)
- fix(ui): retire bootstrap config reads with the runtime (#180634)

## Releases This Week

- `v2026.10.6` | stable | 2026-10-22T12:53:10Z | openclaw 2026.10.6

## Most Active Change Scopes

- `ui`: 358
- `fix`: 76
- `refactor`: 44
- `plugins`: 23
- `doctor`: 21
- `gateway`: 16
- `release`: 16
- `update`: 13
- `agents`: 13
- `test`: 11
- `feat`: 7
- `sessions`: 6

## Recent Commit Headlines

- 2026-10-22T16:03:08Z | refactor(ui): use Solid cancellation feedback for sign-in wizards (#180726)
- 2026-10-22T16:01:58Z | fix(agentsapi): cron job stops right after sending to its own delivery target (#177518)
- 2026-10-22T16:00:14Z | refactor(ui): share ordinary link activation across navigation (#180691)
- 2026-10-22T15:59:06Z | fix(ui): keep chat actions and draft restores with current panes (#180623)
- 2026-10-22T15:57:30Z | refactor(ui): separate chat grouping and recovery owners (#180724)
- 2026-10-22T15:56:25Z | fix(matrix): tag only control commands with command source (#179506)
- 2026-10-22T15:53:06Z | fix: browser inspect validation leaves JSON output empty (#176013)
- 2026-10-22T15:52:36Z | fix(skills): accept mixed-case --agent ids in skills commands (#180055)
- 2026-10-22T15:52:04Z | fix(web-fetch): extract HTML bodies served without a Content-Type (#180064)
- 2026-10-22T15:50:55Z | fix(oc-path): resolve and edit quoted Markdown paths (#179821)
- 2026-10-22T15:50:28Z | refactor: consolidate single-consumer core surfaces (#180711)
- 2026-10-22T15:45:57Z | fix(decisions): allow OpenAI batches up to 400 questions (#180210)
- 2026-10-22T15:45:32Z | fix(update): restart Gateway after ordinary post-update Doctor failure (#180668)
- 2026-10-22T15:41:25Z | refactor(ui): use async boundaries for memory overview (#180660)
- 2026-10-22T15:40:00Z | fix(x): retire stale snapshots and scope command errors (#180656)
- 2026-10-22T15:39:40Z | refactor: consolidate single-consumer plugin surfaces (#180713)
- 2026-10-22T15:39:27Z | refactor(ui): consume preferences from their existing owner (#180684)
- 2026-10-22T15:36:35Z | fix: path JSON refusals leave redirected output empty (#176018)
- 2026-10-22T15:35:43Z | fix(oc-path): resolve and edit empty string keys (#175754)
- 2026-10-22T15:35:18Z | refactor(ui): route context report errors through Solid boundary (#180718)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
