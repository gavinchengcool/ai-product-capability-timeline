# OpenClaw Weekly Update

生成时间：2026-10-15T00:01:32.531789+08:00

## Window

- Start: 2026-10-14T00:01:32.531789+08:00
- End: 2026-10-15T00:01:32.531789+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 914
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 391973
- Repo forks at scan time: 82421

## New Capability Signals

- feat(i18n): add Swedish to the Control UI and docs (#62063)
- feat(state): select the shared-state database engine at the state owner (#171962)
- feat(database): add scoped startup migration backups (#171764)
- feat(labs): add experimental Advisor that steers agents off avoidable work (#169564)
- feat(diagnostics): attribute GC metrics by kind and worker (#171923)
- feat(google): add Gemini 4 Argon support (#171852)
- feat(control-ui): include plugin catalogs in locale refresh (#171496)
- feat(team-reports): allow pausing automatic collection (#171840)
- feat: report slow cloud worker dispatch phases (#171749)
- feat(claws): accept portable manifest categories (#171532)
- feat: move sessions between local and cloud from session menus (#171690)
- feat(crabbox): protect cloud setup secrets through egress (#171073)
- feat: expose published ClawHub packages to Gateway (#171622)
- feat(openai): support typed Decisions API evaluations (#166320)
- feat(browser): expose wrapped observations to Code Mode (#164833)

## Important Fixes And Hardening

- fix(ui): refresh retained progress card translations (#172184)
- fix: let guest readers open message attachments (#172202)
- fix: preserve recovery authority rejection errors (#172195)
- fix: guest commands fail during workspace checkpoints (#172137)
- fix(ci): close stale PRs despite automated review activity (#172022)
- fix: retain causes in startup maintenance warnings (#172138)
- fix(update): defer Doctor instead of rolling back when update-driver ancestry is unverified (#172247)
- fix: update person card labels when locale changes (#172140)
- fix(sessions): keep maintenance owner state private
- fix: Gateway repeatedly rebuilds directory watches above 256 agents (#171805)
- fix: keep recovered subagent final replies from disappearing (#171929)
- fix(update): avoid downloading unrelated Git branches (#172199)
- fix(update): Doctor fails after short commands complete (#172132)
- fix(code-mode): stop GC thrash and bound captured output (#172134)
- fix: preserve inbound messages when queued turn preparation fails (#172080)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `ui`: 109
- `gateway`: 91
- `fix`: 89
- `sessions`: 62
- `agents`: 42
- `ci`: 39
- `test`: 28
- `update`: 24
- `plugins`: 20
- `state`: 19
- `sqlite`: 14
- `perf`: 14

## Recent Commit Headlines

- 2026-10-14T15:58:47Z | fix(ui): refresh retained progress card translations (#172184)
- 2026-10-14T15:56:45Z | fix: let guest readers open message attachments (#172202)
- 2026-10-14T15:54:53Z | fix: preserve recovery authority rejection errors (#172195)
- 2026-10-14T15:53:03Z | fix: guest commands fail during workspace checkpoints (#172137)
- 2026-10-14T15:49:27Z | feat(i18n): add Swedish to the Control UI and docs (#62063)
- 2026-10-14T15:46:46Z | fix(ci): close stale PRs despite automated review activity (#172022)
- 2026-10-14T15:44:12Z | test(android): drain speech queue before Wear abort assertion (#172252)
- 2026-10-14T15:43:51Z | fix: retain causes in startup maintenance warnings (#172138)
- 2026-10-14T15:43:40Z | fix(update): defer Doctor instead of rolling back when update-driver ancestry is unverified (#172247)
- 2026-10-14T15:43:29Z | test(ui): use touch input for mobile conversation navigation (#172126)
- 2026-10-14T15:38:20Z | fix: update person card labels when locale changes (#172140)
- 2026-10-14T15:06:56Z | test(ui): await lazy participant artwork before asserting
- 2026-10-14T15:06:46Z | fix(sessions): keep maintenance owner state private
- 2026-10-14T15:30:49Z | refactor(ui): simplify retained chat page snapshots (#171745)
- 2026-10-14T15:28:31Z | test(models): await obsolete catalog worker settlement
- 2026-10-14T15:27:44Z | fix: Gateway repeatedly rebuilds directory watches above 256 agents (#171805)
- 2026-10-14T15:25:39Z | test(cli,agents,infra,ui): remove low-value tests (batch d084) (#172215)
- 2026-10-14T15:23:56Z | refactor(ui): reduce markdown text rendering work (#172035)
- 2026-10-14T15:18:15Z | refactor(ui): remove Lit types from controller consumers (#172073)
- 2026-10-14T15:11:40Z | fix: keep recovered subagent final replies from disappearing (#171929)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
