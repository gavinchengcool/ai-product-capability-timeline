# OpenClaw Weekly Update

生成时间：2026-09-08T23:27:32.956779+08:00

## Window

- Start: 2026-09-07T23:27:32.956779+08:00
- End: 2026-09-08T23:27:32.956779+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 622
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 389215
- Repo forks at scan time: 81779

## New Capability Signals

- **Code Mode composition:** retain the running JavaScript environment across fast tool replies, add optional TypeScript checks against available tools, and report original-source error locations with bounded console output; explicit yields and resource limits still checkpoint execution. Related #141261. (#141265) Thanks @Takhoffman. [v2026.9.3]
- **Provider account controls:** add and remove individual accounts, manage supported account priority, and clear an agent’s custom order without disconnecting accounts; inherited and provider-managed order remains explicit. (#132451) Thanks @jesse-merhi. [v2026.9.3]
- **Model fallback picker:** choose ordered fallback models from a searchable dropdown, remove selections, and add custom references. Related #137410. (#141330) Thanks @najef1979-code and @shakkernerd. [v2026.9.3]
- **Team Reports:** install the optional Team Reports plugin for authenticated daily, weekly, and monthly GitHub reports and explicitly selected Discord sources, with stored history, optional summaries, people timelines and calendars, coverage warnings, scheduler/source health, and theme-aware report pages. (#139850, #141327, #141384) [v2026.9.3]
- **Chat navigation:** add a previewable position rail for long conversations, including hover previews and direct jumps. Related #138587. (#138603) Thanks @brokemac79. [v2026.9.3]
- feat(canvas): report widget runtime script errors back to the agent (#142225)
- feat(providers): keep registered setup connection-only (#142202)
- feat(models): scope implicit catalogs to configured provider endpoints (#142158)
- feat(ui): search long model menus (#141894)
- feat(cloud): choose an operating system for cloud sessions next to machine class (#142095)
- Feat/add new model (#131598)
- feat(sqlite): select an extension-capable SQLite library for Bun on macOS (#141854)
- feat(cron): explain slow automation list requests (#141805)
- feat(ui): render sidebar and chat from cached state before the Gateway connects (#141121)
- feat(beam): delete beamed sessions from the sidebar row menu (#141467)

## Important Fixes And Hardening

- fix(daemon): Bun runtime probe ignores the Gateway's SQLite library selection (#142186)
- fix(cli): explain environment-disabled automation scheduling (#142185)
- fix(status): show available Gateway self metadata (#142174)
- fix(tui): stop showing a stale model after fallback events (#141436)
- fix(status): surface failed update fetches in plain status (#142199)
- perf(gateway): reuse configured roster membership (#142229)
- fix(ui): numeric step buttons skip the first allowed value (#142201)
- fix: prepare provider runtimes before sticker selection tests (#142234)
- fix(tui): preserve published model availability (#142160)
- fix(cli): reject explicit blank directory limits (#141738)
- fix(terminal): preserve blank lines in multiline table cells (#142196)
- fix(android): avoid false Gateway offline labels in empty chats (#142182)
- fix(macos): make openclaw-mac configure-remote honor app profiles (#142163)
- fix: show repaired skills on first watcher acquisition read (#142123)
- fix(plugins): name the changed facet in plugin registry differences (#142192)

## Releases This Week

- `v2026.9.3` | stable | 2026-09-08T14:15:53Z | openclaw 2026.9.3

## Most Active Change Scopes

- `ui`: 57
- `fix`: 38
- `tests`: 28
- `release`: 27
- `agents`: 25
- `plugins`: 24
- `test`: 22
- `gateway`: 21
- `cli`: 19
- `update`: 15
- `ci`: 13
- `qa`: 11

## Recent Commit Headlines

- 2026-09-08T15:26:31Z | fix(daemon): Bun runtime probe ignores the Gateway's SQLite library selection (#142186)
- 2026-09-08T15:26:15Z | fix(cli): explain environment-disabled automation scheduling (#142185)
- 2026-09-08T15:25:41Z | refactor(sessions): share bounded session selection (#142239)
- 2026-09-08T15:22:43Z | fix(status): show available Gateway self metadata (#142174)
- 2026-09-08T15:22:24Z | fix(tui): stop showing a stale model after fallback events (#141436)
- 2026-09-08T15:14:28Z | chore(skills): remove bundled video-frames skill (#142232)
- 2026-09-08T15:13:32Z | refactor(plugins): separate inspection authority from resource claims (#142214)
- 2026-09-08T15:13:12Z | fix(status): surface failed update fetches in plain status (#142199)
- 2026-09-08T15:11:57Z | perf(gateway): reuse configured roster membership (#142229)
- 2026-09-08T15:11:36Z | feat(canvas): report widget runtime script errors back to the agent (#142225)
- 2026-09-08T15:09:09Z | fix(ui): numeric step buttons skip the first allowed value (#142201)
- 2026-09-08T14:59:30Z | refactor(tests): share API-key credential inputs (#142245)
- 2026-09-08T14:57:28Z | fix: prepare provider runtimes before sticker selection tests (#142234)
- 2026-09-08T14:53:12Z | test: join native triage controllers before fixture cleanup (#142215)
- 2026-09-08T14:52:25Z | feat(providers): keep registered setup connection-only (#142202)
- 2026-09-08T14:50:54Z | fix(tui): preserve published model availability (#142160)
- 2026-09-08T14:49:08Z | fix(cli): reject explicit blank directory limits (#141738)
- 2026-09-08T14:45:37Z | chore(release): update appcast for 2026.9.3 (#142235)
- 2026-09-08T14:45:17Z | fix(terminal): preserve blank lines in multiline table cells (#142196)
- 2026-09-08T14:44:30Z | fix(android): avoid false Gateway offline labels in empty chats (#142182)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
