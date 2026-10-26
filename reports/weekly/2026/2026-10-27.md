# OpenClaw Weekly Update

生成时间：2026-10-27T01:43:42.967760+08:00

## Window

- Start: 2026-10-26T01:43:42.967760+08:00
- End: 2026-10-27T01:43:42.967760+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 835
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 393138
- Repo forks at scan time: 82647

## New Capability Signals

- feat: report update outcomes by default without identifiers (#154067)
- feat(talk): let connected clients speak short results (#184546)
- feat(sessions): archive oversized transcripts as bounded cold chunks (#183827)
- feat(subagents): let spawners request blind children that omit model identity and workspace (#182272)
- feat(gateway): run managed services from standalone artifacts (#183838)
- improve(ui): refine Absolutely theme contrast and surfaces (#183405)
- feat(acpx): let operators keep Gateway env out of ACP agents (#179899)

## Important Fixes And Hardening

- fix(agents): keep watched-session changes after conversation history (#182354)
- fix: scope Workboard benchmark controls to the toolbar (#184825)
- perf(control-ui): restore composer controls from the cached snapshot (#184383)
- fix(ui): wait for committed post-deploy navigation
- fix(gateway): silent exec-completion prompts show as user messages in imported Claude CLI history (#174780)
- perf(gateway): reuse session event envelope scratch tuples (#184729)
- fix: renew OAuth credentials during long custom transport attempts (#184791)
- perf(test): reuse native update builds and remove duplicate flows (#184706)
- perf(plugins): avoid redundant memory prompt array copies (#184779)
- fix: stop model fallback on transcript admission conflicts (#177956)
- fix: wait for expired MCP HTTP session recovery on explicit retry (#177427)
- perf(nodes): reuse the committed device index for discovery (#184783)
- fix(codex): recover tool summaries after unfinished earlier work (#181718)
- fix: internalize sqlite commit receipt helper (#184808)
- fix: retain SQLite lease measurement root (#184800)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `gateway`: 99
- `agents`: 90
- `fix`: 75
- `ui`: 60
- `refactor`: 50
- `test`: 37
- `plugins`: 32
- `sessions`: 25
- `state`: 19
- `core,plugins,ui`: 13
- `infra`: 12
- `codex`: 10

## Recent Commit Headlines

- 2026-10-26T17:42:58Z | fix(agents): keep watched-session changes after conversation history (#182354)
- 2026-10-26T17:41:49Z | fix: scope Workboard benchmark controls to the toolbar (#184825)
- 2026-10-26T17:41:09Z | test: track the pinned Codex version in native hook pressure (#184817)
- 2026-10-26T17:30:51Z | chore: merge main for post-deploy readiness repair
- 2026-10-26T17:28:08Z | perf(control-ui): restore composer controls from the cached snapshot (#184383)
- 2026-10-26T17:21:50Z | fix(ui): wait for committed post-deploy navigation
- 2026-10-26T17:09:37Z | fix(gateway): silent exec-completion prompts show as user messages in imported Claude CLI history (#174780)
- 2026-10-26T17:08:10Z | chore: keep CLI config patch predicate module-local (#184824)
- 2026-10-26T17:07:25Z | perf(gateway): reuse session event envelope scratch tuples (#184729)
- 2026-10-26T17:06:00Z | feat: report update outcomes by default without identifiers (#154067)
- 2026-10-26T17:02:28Z | fix: renew OAuth credentials during long custom transport attempts (#184791)
- 2026-10-26T16:59:54Z | perf(test): reuse native update builds and remove duplicate flows (#184706)
- 2026-10-26T16:59:13Z | perf(plugins): avoid redundant memory prompt array copies (#184779)
- 2026-10-26T16:58:29Z | fix: stop model fallback on transcript admission conflicts (#177956)
- 2026-10-26T16:56:05Z | fix: wait for expired MCP HTTP session recovery on explicit retry (#177427)
- 2026-10-26T16:55:30Z | perf(nodes): reuse the committed device index for discovery (#184783)
- 2026-10-26T16:54:05Z | fix(codex): recover tool summaries after unfinished earlier work (#181718)
- 2026-10-26T16:51:41Z | fix: internalize sqlite commit receipt helper (#184808)
- 2026-10-26T16:50:20Z | fix: retain SQLite lease measurement root (#184800)
- 2026-10-26T16:48:48Z | perf(ui): speed up filtering large agent skills lists (#184701)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
