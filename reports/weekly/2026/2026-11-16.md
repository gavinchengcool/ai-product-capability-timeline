# OpenClaw Weekly Update

生成时间：2026-11-16T02:02:59.099996+08:00

## Window

- Start: 2026-11-15T02:02:59.099996+08:00
- End: 2026-11-16T02:02:59.099996+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 345
- Releases in window: 1
- Stable releases in window: 0
- Beta releases in window: 1
- Repo stars at scan time: 394515
- Repo forks at scan time: 82892

## New Capability Signals

- **Compaction:** support a configurable summary-character limit while retaining foreground request-budget constraints and redacting credentials in quoted summary content. (#196207, #197349) Thanks @aniruddhaadak80, @RomneyDa, @garrytan, @obviyus. [v2026.11.5-beta.3]
- feat(advisor): review subagent runs too
- feat(gateway): identify the serving process in local startup probes (#199356)
- feat(backup): omit Doctor migration originals from archives on request (#194823)
- feat(cron): persist per-job Access selection (#197704)
- feat(ui): show what an idle chat is waiting on (#198891)
- improve(ui): soften New Session composer and tray shadows (#199066)

## Important Fixes And Hardening

- fix: uploaded videos open outside chat instead of playing inline (#197589)
- fix: avoid rehashing unchanged workspaces on first sandbox reuse (#199687)
- fix(cli): show actionable QR pairing failures alongside JSON (#199650)
- fix(cli): show system event remedies alongside JSON (#199670)
- perf(memory): avoid detaching short transcript strings (#199686)
- fix(ui): keep the chat reader's text still while scrolling and while content renders late (#199080)
- fix(channels): keep dead-letter selector remedies in --json errors (#199658)
- perf(sandbox): reuse saved workspace fingerprints during acceptance (#199683)
- fix(cli): show actionable inference preflight errors with JSON (#199639)
- perf(sessions): compact append receipts after replica eviction (#199673)
- fix(ci): restore unused-export checks for QA cron fixtures (#199679)
- fix(skills): Ctrl-C leaves verification requests running (#195342)
- fix(memory-wiki): keep imported Markdown links pointing to generated pages (#199626)
- fix(cli): preserve Gmail setup remedies in JSON failures (#199642)
- fix(cli): keep agent selector guard remedies on JSON failures (#199641)

## Releases This Week

- `v2026.11.5-beta.3` | beta | 2026-11-15T00:31:00Z | openclaw 2026.11.5-beta.3

## Most Active Change Scopes

- `ui`: 93
- `fix`: 25
- `improve(ui)`: 17
- `sessions`: 15
- `cli`: 14
- `ci`: 14
- `gateway`: 12
- `test`: 10
- `cron`: 8
- `update`: 8
- `exec`: 7
- `skills`: 5

## Recent Commit Headlines

- 2026-11-15T17:55:06Z | fix: uploaded videos open outside chat instead of playing inline (#197589)
- 2026-11-15T17:54:36Z | fix: avoid rehashing unchanged workspaces on first sandbox reuse (#199687)
- 2026-11-15T17:53:10Z | fix(cli): show actionable QR pairing failures alongside JSON (#199650)
- 2026-11-15T17:50:07Z | fix(cli): show system event remedies alongside JSON (#199670)
- 2026-11-15T17:37:08Z | perf(memory): avoid detaching short transcript strings (#199686)
- 2026-11-15T17:24:19Z | fix(ui): keep the chat reader's text still while scrolling and while content renders late (#199080)
- 2026-11-15T17:23:57Z | fix(channels): keep dead-letter selector remedies in --json errors (#199658)
- 2026-11-15T17:06:26Z | perf(sandbox): reuse saved workspace fingerprints during acceptance (#199683)
- 2026-11-15T17:05:45Z | feat(advisor): review subagent runs too
- 2026-11-15T17:04:41Z | fix(cli): show actionable inference preflight errors with JSON (#199639)
- 2026-11-15T17:02:41Z | perf(sessions): compact append receipts after replica eviction (#199673)
- 2026-11-15T16:50:48Z | fix(ci): restore unused-export checks for QA cron fixtures (#199679)
- 2026-11-15T16:49:42Z | fix(skills): Ctrl-C leaves verification requests running (#195342)
- 2026-11-15T16:28:28Z | fix(memory-wiki): keep imported Markdown links pointing to generated pages (#199626)
- 2026-11-15T16:24:05Z | fix(cli): preserve Gmail setup remedies in JSON failures (#199642)
- 2026-11-15T16:21:14Z | fix(cli): keep agent selector guard remedies on JSON failures (#199641)
- 2026-11-15T16:17:14Z | fix(ci): retained tooling subsets exceed hosted push capacity (#199662)
- 2026-11-15T16:12:55Z | fix(ci): bind adaptive test volumes to scheduled profiles (#199592)
- 2026-11-15T16:09:49Z | fix(doctor): capture declared SQLite sidecar roots through their database (#199654)
- 2026-11-15T16:06:57Z | fix(agents): stop divergent mid-turn overflow recovery (#199636)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
