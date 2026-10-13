# OpenClaw Weekly Update

生成时间：2026-10-14T02:34:02.707446+08:00

## Window

- Start: 2026-10-13T02:34:02.707446+08:00
- End: 2026-10-14T02:34:02.707446+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 1045
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 391871
- Repo forks at scan time: 82404

## New Capability Signals

- **Meta Muse Wonder:** adds `meta/muse-wonder-1.0` with text and image input, tools, streaming, encrypted reasoning replay, and a 1,048,576-token context window; Spark remains the onboarding default. (#170232) Thanks @RomneyDa. [v2026.10.5-beta.3]
- feat: preserve PostgreSQL stores in backups and updates (#170828)
- feat(plugins): let plugins steer a session's active run (#170152)
- feat(cloud): support repository environment recipes (#170862)
- feat: save suggested cloud profiles on first use (#170875)
- feat(ui): organize cloud environments by repository (#170892)
- feat: show cloud snapshot startup progress (#170895)
- feat(cloud): provision verified Node toolchains (#170796)
- feat(plugins): fork a session's live context for background side questions (#170146)
- feat(secrets): add scoped setup egress grants (#170810)
- feat(agents): end runs after confirmed final source replies (#170653)
- improve(ui): keep New conversation visible across sidebar modes (#170771)
- feat(ci): add opt-in smaller Testbox qualification profiles (#170747)
- feat: isolate Agents API sessions from Gateway tools and MCP (#170728)
- feat: connect MCP apps through a principal-bound relay plugin (#168233)

## Important Fixes And Hardening

- fix(ui): sidebar view stays selected when its panel is collapsed (#171163)
- perf(memory): skip empty standing-intent transactions (#171254)
- fix(gateway): attribute slow chat admission and persistence waits (#171250)
- fix: refresh macOS permission cards after denying access (#171175)
- fix(testing): restore environment after team fixture generation
- perf(state): skip historical migrations on first database creation (#171214)
- fix(codex): stop the version probe from opening stdin (#171248)
- fix(qwen): honor reasoning overrides after payload replacement
- fix(ui): stop polling operator-only surfaces for session readers (#171223)
- perf(gateway): report placement changes from committed receipts (#171232)
- fix(gateway): use monotonic clock for MCP loopback capture idle deadline (#170495)
- fix(channels): keep capability probe deadline on the monotonic clock (#170500)
- fix(ci): align sidebar and performance scan entrypoints (#171230)
- perf(sessions): release writer between actor append commands (#171225)
- fix: Teams message reads and searches hide fetched text (#171153)

## Releases This Week

- `v2026.10.5-beta.3` | beta | 2026-10-13T10:00:37Z | openclaw 2026.10.5-beta.3
- `v2026.10.3` | stable | 2026-10-13T13:49:25Z | openclaw 2026.10.3

## Most Active Change Scopes

- `gateway`: 115
- `ui`: 109
- `fix`: 79
- `sessions`: 58
- `agents`: 50
- `ci`: 47
- `test`: 41
- `update`: 35
- `state`: 17
- `sqlite`: 17
- `control-ui`: 16
- `memory`: 15

## Recent Commit Headlines

- 2026-10-13T18:33:14Z | fix(ui): sidebar view stays selected when its panel is collapsed (#171163)
- 2026-10-13T18:30:08Z | perf(memory): skip empty standing-intent transactions (#171254)
- 2026-10-13T18:29:00Z | fix(gateway): attribute slow chat admission and persistence waits (#171250)
- 2026-10-13T18:28:50Z | refactor(subagents): reduce spawn and completion database overhead (#171137)
- 2026-10-13T18:28:20Z | fix: refresh macOS permission cards after denying access (#171175)
- 2026-10-13T18:27:31Z | refactor(media): consolidate ignored-response cancellation tests (#166374)
- 2026-10-13T18:08:43Z | test(qa-lab): diagnose bootstrap group assertion failures
- 2026-10-13T17:50:09Z | fix(testing): restore environment after team fixture generation
- 2026-10-13T18:24:59Z | perf(state): skip historical migrations on first database creation (#171214)
- 2026-10-13T18:24:37Z | fix(codex): stop the version probe from opening stdin (#171248)
- 2026-10-13T18:20:32Z | refactor(ui): use shared tabs for the meeting reader (#170314)
- 2026-10-13T18:03:08Z | fix(qwen): honor reasoning overrides after payload replacement
- 2026-10-13T18:17:26Z | fix(ui): stop polling operator-only surfaces for session readers (#171223)
- 2026-10-13T18:16:57Z | refactor(plugin-sdk): remove retired Telegram command UI facade (#166401)
- 2026-10-13T18:16:36Z | perf(gateway): report placement changes from committed receipts (#171232)
- 2026-10-13T18:16:16Z | fix(gateway): use monotonic clock for MCP loopback capture idle deadline (#170495)
- 2026-10-13T18:15:38Z | fix(channels): keep capability probe deadline on the monotonic clock (#170500)
- 2026-10-13T18:15:11Z | fix(ci): align sidebar and performance scan entrypoints (#171230)
- 2026-10-13T18:14:41Z | perf(sessions): release writer between actor append commands (#171225)
- 2026-10-13T18:14:24Z | fix: Teams message reads and searches hide fetched text (#171153)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
