# OpenClaw Weekly Update

生成时间：2026-11-03T04:55:39.362381+08:00

## Window

- Start: 2026-11-02T04:55:39.362381+08:00
- End: 2026-11-03T04:55:39.362381+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 453
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 393749
- Repo forks at scan time: 82757

## New Capability Signals

- feat(database): recover retained workspace owners without waking workers (#190842)
- feat: fork threaded conversations with Telegram support (#190783)
- feat(plugins): plugins can run a hidden forked turn of a session with their own tools (#190950)
- feat(plugins): skill authoring runtime for plugins that own an agent skills folder (#190983)
- feat(plugins): plugins can post background notices to the session generation they observed (#190893)
- feat(agents): explain why a tool is or isn't available, for doctor, /learn and plugins (#190919)
- feat(plugins): plugin commands can continue the agent with a replacement prompt, on every channel (#190908)
- feat(cron): expose selected agent failure observations to plugins (#190727)
- feat(database): recover selected session skill and workspace dependencies (#190833)
- feat(backup): exclude registered worktree templates on request (#190822)
- feat(database): prepare an exact PostgreSQL state namespace (#190832)
- feat(beam): allow owned publication by restricted guests (#190912)
- feat(plugins): run_stopped hook for confirmed user stops (#190906)
- feat(diagnostics): account for SQLite reads below the heavy-read threshold (#190907)
- ci: support empty admission args on Bash 3.2 (#190747)

## Important Fixes And Hardening

- fix(cron): scheduler fails to start after a long-running job is interrupted (#191422)
- fix(doctor): explain workspace imports blocked by earlier refusals (#191442)
- fix: X activity stream memory grows without bound when mentions are slow (#191161)
- fix(ui): keep PDF readers open when file metadata refreshes (#189828)
- fix(agents): Gateway freezes for seconds when an ingress agent run loads plugins (#191404)
- fix(codex): refresh inherited workspace instructions on the next turn (#191439)
- fix(macos): iMessage replies stop after app updates until Automation is re-granted (#186107)
- fix: environment-selected dev profiles target the wrong Gateway port (#191428)
- fix(agents): reject FIFO native-hook credentials without blocking (#191423)
- fix(ai): keep the Responses request builder private
- fix(ios): parallel tool calls show no result after their outputs arrive (#171976)
- fix(gateway): public sessions resend unchanged bodies for matching validators (#191101)
- fix: skip command catalog requests for disabled shared sessions (#191402)
- fix(auto-reply): keep system events off channel binding owners during init (#191370)
- fix(state): trust the published header over a stale deferred admission (#191357)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `fix`: 61
- `improve(ui)`: 49
- `ui`: 44
- `test`: 27
- `ci`: 27
- `agents`: 17
- `plugins`: 13
- `gateway`: 12
- `cli`: 11
- `update`: 11
- `doctor`: 8
- `database`: 7

## Recent Commit Headlines

- 2026-11-02T20:50:05Z | fix(cron): scheduler fails to start after a long-running job is interrupted (#191422)
- 2026-11-02T20:49:37Z | fix(doctor): explain workspace imports blocked by earlier refusals (#191442)
- 2026-11-02T20:47:39Z | fix: X activity stream memory grows without bound when mentions are slow (#191161)
- 2026-11-02T20:45:55Z | fix(ui): keep PDF readers open when file metadata refreshes (#189828)
- 2026-11-02T20:40:52Z | fix(agents): Gateway freezes for seconds when an ingress agent run loads plugins (#191404)
- 2026-11-02T20:34:50Z | improve: reduce repeated tool preparation and expose prompt timings (#191437)
- 2026-11-02T20:32:02Z | fix(codex): refresh inherited workspace instructions on the next turn (#191439)
- 2026-11-02T20:28:57Z | test(telegram): require the pending poll vote before ordering (#191431)
- 2026-11-02T20:21:34Z | test(muse): expire settlement timeout after turn admission
- 2026-11-02T20:22:57Z | fix(macos): iMessage replies stop after app updates until Automation is re-granted (#186107)
- 2026-11-02T20:20:01Z | fix: environment-selected dev profiles target the wrong Gateway port (#191428)
- 2026-11-02T20:14:01Z | feat(database): recover retained workspace owners without waking workers (#190842)
- 2026-11-02T20:11:09Z | fix(agents): reject FIFO native-hook credentials without blocking (#191423)
- 2026-11-02T20:09:08Z | refactor(music): separate provider host contracts (#190549)
- 2026-11-02T19:48:14Z | fix(ai): keep the Responses request builder private
- 2026-11-02T19:49:55Z | test: trim implied fallback assertions (#191393)
- 2026-11-02T19:49:27Z | fix(ios): parallel tool calls show no result after their outputs arrive (#171976)
- 2026-11-02T19:46:00Z | fix(gateway): public sessions resend unchanged bodies for matching validators (#191101)
- 2026-11-02T19:41:48Z | chore(ui): refresh control ui locales (#191410)
- 2026-11-02T19:34:46Z | fix: skip command catalog requests for disabled shared sessions (#191402)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
