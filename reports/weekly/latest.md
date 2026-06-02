# OpenClaw Weekly Update

生成时间：2026-06-02T23:51:24.346521+08:00

## Window

- Start: 2026-06-01T23:51:24.346521+08:00
- End: 2026-06-02T23:51:24.346521+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 268
- Releases in window: 1
- Stable releases in window: 0
- Beta releases in window: 1
- Repo stars at scan time: 376216
- Repo forks at scan time: 78602

## New Capability Signals

- Skills: let proposals carry approved support files under standard skill folders, with scanner, hash, and rollback safeguards. Thanks @shakkernerd. [v2026.6.1-beta.2]
- Skills: add Skill Workshop with pending proposals, CLI/Gateway review actions, rollback metadata, and the `skill_workshop` agent tool. Thanks @shakkernerd. [v2026.6.1-beta.2]
- Skill Workshop: add the Control UI navigation, styled dashboard, proposal today view, revision dialog, file preview modal, searchable preview files, reusable session handoff, and localized strings. [v2026.6.1-beta.2]
- iOS: add hosted push relay defaults, realtime Talk playback, and a guarded WebSocket ping path for more reliable mobile sessions. (#88096, #88105, #88231) [v2026.6.1-beta.2]
- iOS: support native iPad display layouts. [v2026.6.1-beta.2]
- Workboard: add orchestration primitives and agent coordination tools for multi-agent planning and run tracking. (#87469) [v2026.6.1-beta.2]
- Code mode: add internal namespaces for scoped agent/global sessions and exact namespace tool dispatch. (#88043) [v2026.6.1-beta.2]
- Code mode: add MCP API files and docs for code-mode integrations. [v2026.6.1-beta.2]
- Control UI: add a Dreaming-tab agent selector and propagate the selected agent through Dreaming status, diary, and diary actions. (#78748) Thanks @stevenepalmer. [v2026.6.1-beta.2]
- Control UI: add calmer chat composer controls, local draft typing state, and first-output latency instrumentation for active chat entry. (#88772, #88998) Thanks @vincentkoc. [v2026.6.1-beta.2]
- Plugins: add a SecretRef provider integration manifest contract and extract shared LLM core packages for provider/plugin reuse. (#82326, #88117) [v2026.6.1-beta.2]
- Providers: add MiniMax M3 model support. (#88860) [v2026.6.1-beta.2]
- Doctor: add disk space health checks and stabilize post-upgrade JSON probes. [v2026.6.1-beta.2]
- Skills: add the core skills index and centralize skills runtime loading, status, filtering, and prompt formatting. [v2026.6.1-beta.2]
- feat(plugin-sdk): add resolve_exec_env hook

## Important Fixes And Hardening

- Cron: keep update delivery validation scoped, harden restart state, and retire MCP runtimes on isolated cron cleanup. [v2026.6.1-beta.2]
- Memory: serialize QMD update/embed writes per store, reduce Linux watcher fan-out, retry transient FileProvider-backed reads, preserve phase signals on read errors, harden envelope metadata sanitization, reattach Linux native watchers when directories are recreated, and rewrite generated transcript paths on rollover so memory/search state survives concurrent gateway and CLI activity. (#66339, #85931, #89185, #89188, #85351) Thanks @openperf, @amittell, @RomneyDa, and @NianJiuZst. [v2026.6.1-beta.2]
- Security/config parsing: reject unsafe OAuth/token lifetimes, retry-after delays, inbound timestamps, response body sizes, command timeout config, sandbox observer token TTLs, and gateway WebSocket calls after close. [v2026.6.1-beta.2]
- Gateway/session state: list commands from the Gateway plugin registry, harden MCP loopback tool schemas, hide phantom agent-store rows from `sessions.list`, make task persistence failures explicit, and carry session UUIDs on interactive dispatch events. [v2026.6.1-beta.2]
- Performance: prebuild QA runtime probes with generated plugin assets but without CLI startup metadata. [v2026.6.1-beta.2]
- Performance: skip declaration bundling for runtime-only CLI startup and gateway watch build profiles. [v2026.6.1-beta.2]
- Performance: reuse prepared provider handles, strict tool schemas, gateway runtime metadata, session maintenance config, plugin metadata, bundled skill allowlists, package-local plugin artifacts, single-entry store writes, and validated/serialized session prompt blobs. [v2026.6.1-beta.2]
- fix(test): stabilize ARM extension timer tests
- fix: recover suspicious gateway startup configs (#89480)
- fix(kimi): strip anthropic cache markers
- fix: restore Skill Workshop view switcher
- fix(update): keep plugin repair fetch failures nonblocking
- fix(test): isolate gateway CPU QA state
- fix(models): preserve provider prompt cache boundaries
- fix(google): forward Gemini stop sequences

## Releases This Week

- `v2026.6.1-beta.2` | beta | 2026-06-01T21:56:19Z | openclaw 2026.6.1-beta.2

## Most Active Change Scopes

- `refactor`: 65
- `gateway`: 31
- `e2e`: 25
- `fix`: 19
- `scripts`: 12
- `memory`: 10
- `agents`: 9
- `test`: 7
- `ci`: 7
- `codex`: 6
- `release`: 6
- `docs`: 4

## Recent Commit Headlines

- 2026-06-02T15:41:19Z | test(gateway): defer sidecars in tools invoke e2e
- 2026-06-02T02:09:36Z | fix(test): stabilize ARM extension timer tests
- 2026-06-02T14:12:35Z | fix: recover suspicious gateway startup configs (#89480)
- 2026-06-02T13:59:36Z | fix(kimi): strip anthropic cache markers
- 2026-06-02T13:57:27Z | fix: restore Skill Workshop view switcher
- 2026-06-02T13:56:46Z | docs(changelog): note update repair stall handling
- 2026-06-02T13:55:35Z | fix(update): keep plugin repair fetch failures nonblocking
- 2026-06-02T13:27:11Z | fix(test): isolate gateway CPU QA state
- 2026-06-02T13:19:52Z | fix(models): preserve provider prompt cache boundaries
- 2026-06-02T13:15:45Z | docs: clarify autoreview follow-up scope
- 2026-06-02T13:02:27Z | fix(google): forward Gemini stop sequences
- 2026-06-02T12:58:40Z | fix: audit and repair hooks token reuse with Gateway auth
- 2026-06-02T12:39:48Z | fix(memory): avoid optional vector status dereference
- 2026-06-02T12:30:53Z | fix(memory): force provider-none indexes to FTS-only vectors
- 2026-06-02T12:25:10Z | fix(scripts): avoid dead child assignment in fd repro
- 2026-06-02T12:22:43Z | fix(memory): initialize provider-none lifecycle during sync
- 2026-06-02T12:17:07Z | fix(memory): report provider-none probes as FTS-only
- 2026-06-02T12:12:14Z | fix(scripts): avoid spread in runtime output collection
- 2026-06-02T12:10:29Z | fix(scripts): clean memory fd temp dirs after preindex failures
- 2026-06-02T12:03:49Z | fix(memory): scope provider-none FTS bypass

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
