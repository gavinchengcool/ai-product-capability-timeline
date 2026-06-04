# OpenClaw Weekly Update

生成时间：2026-06-04T22:26:41.590592+08:00

## Window

- Start: 2026-06-03T22:26:41.590592+08:00
- End: 2026-06-04T22:26:41.590592+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 562
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 376767
- Repo forks at scan time: 78733

## New Capability Signals

- Policy: add data-handling conformance checks and reject unsupported policy keys. (#87056, #87074) Thanks @giodl73-repo. [v2026.6.2-beta.1]
- UI/mobile: add Workboard keyboard movement controls, tighten Workboard card operations, improve Android companion-first shell UX, and document chat ACK timing metadata. (#89802) Thanks @vincentkoc. [v2026.6.2-beta.1]
- Skills: let proposals carry approved support files under standard skill folders, with scanner, hash, and rollback safeguards. Thanks @shakkernerd. [v2026.6.1]
- Skills: add Skill Workshop with pending proposals, CLI/Gateway review actions, rollback metadata, and the `skill_workshop` agent tool. Thanks @shakkernerd. [v2026.6.1]
- Skill Workshop: add the Control UI navigation, styled dashboard, proposal today view, revision dialog, file preview modal, searchable preview files, reusable session handoff, and localized strings. [v2026.6.1]
- iOS: add hosted push relay defaults, realtime Talk playback, and a guarded WebSocket ping path for more reliable mobile sessions. (#88096, #88105, #88231) [v2026.6.1]
- iOS: support native iPad display layouts. [v2026.6.1]
- Workboard: add orchestration primitives and agent coordination tools for multi-agent planning and run tracking. (#87469) [v2026.6.1]
- Code mode: add internal namespaces for scoped agent/global sessions and exact namespace tool dispatch. (#88043) [v2026.6.1]
- Code mode: add MCP API files and docs for code-mode integrations. [v2026.6.1]
- Control UI: add a Dreaming-tab agent selector and propagate the selected agent through Dreaming status, diary, and diary actions. (#78748) Thanks @stevenepalmer. [v2026.6.1]
- Control UI: add calmer chat composer controls, local draft typing state, and first-output latency instrumentation for active chat entry. (#88772, #88998) Thanks @vincentkoc. [v2026.6.1]
- Plugins: add a SecretRef provider integration manifest contract and extract shared LLM core packages for provider/plugin reuse. (#82326, #88117) [v2026.6.1]
- Providers: add MiniMax M3 model support. (#88860) [v2026.6.1]
- Doctor: add disk space health checks and stabilize post-upgrade JSON probes. [v2026.6.1]

## Important Fixes And Hardening

- Chat/UI/Gateway: preserve visible chat stream text, clear stale stream buffers before terminal commits, reconcile completed sends, scroll pending sends into view, harden Workboard dialog accessibility, stabilize WebChat prompt-cache affinity, overlap chat catalog startup, render chat history incrementally, lazy-load usage dashboard, and report gateway health auth diagnostics. (#89337) Thanks @RomneyDa. [v2026.6.2-beta.1]
- Security/config/tooling: reject corrupt shell snapshots, suspicious gateway startup configs, malformed release/test/tooling/Docker/perf numeric limits, oversized audit responses, unsafe exec precheck env, and invalid pending-agent SQLite scaffold denials. (#89701, #89705, #89480, #81488) Thanks @RomneyDa and @mmaps. [v2026.6.2-beta.1]
- Release/CI/E2E: restore package changelog extraction after the post-2026.6.1 version bump, keep hydrated pnpm modules under `node_modules` for ARM/Linux package lifecycle scripts, keep OpenAI live-cache prerequisites advisory while Anthropic prerequisites stay blocking, retry Windows Parallels background log appends on transient file-lock errors, bound candidate GitHub and cross-OS Discord fetches, harden ARM smoke/browser checks, show Docker build heartbeats, reset Crabbox pnpm hydrate state, and isolate Testbox/Docker/release journey artifacts. [v2026.6.2-beta.1]
- Cron: keep update delivery validation scoped, harden restart state, and retire MCP runtimes on isolated cron cleanup. [v2026.6.1]
- Memory: serialize QMD update/embed writes per store, reduce Linux watcher fan-out, retry transient FileProvider-backed reads, preserve phase signals on read errors, harden envelope metadata sanitization, reattach Linux native watchers when directories are recreated, and rewrite generated transcript paths on rollover so memory/search state survives concurrent gateway and CLI activity. (#66339, #85931, #89185, #89188, #85351) Thanks @openperf, @amittell, @RomneyDa, and @NianJiuZst. [v2026.6.1]
- Security/config parsing: reject unsafe OAuth/token lifetimes, retry-after delays, inbound timestamps, response body sizes, command timeout config, sandbox observer token TTLs, and gateway WebSocket calls after close. [v2026.6.1]
- Gateway/session state: list commands from the Gateway plugin registry, harden MCP loopback tool schemas, hide phantom agent-store rows from `sessions.list`, make task persistence failures explicit, and carry session UUIDs on interactive dispatch events. [v2026.6.1]
- Performance: prebuild QA runtime probes with generated plugin assets but without CLI startup metadata. [v2026.6.1]
- Performance: skip declaration bundling for runtime-only CLI startup and gateway watch build profiles. [v2026.6.1]
- Performance: reuse prepared provider handles, strict tool schemas, gateway runtime metadata, session maintenance config, plugin metadata, bundled skill allowlists, package-local plugin artifacts, single-entry store writes, and validated/serialized session prompt blobs. [v2026.6.1]
- fix(acp): default parent commentary in progress mode
- fix(config): accept shared progress commentary (#89505) (thanks @100yenadmin)
- fix(acp): preserve parent streaming off overrides (#89505) (thanks @100yenadmin)
- fix(acp): satisfy relay lint checks (#89505) (thanks @100yenadmin)
- fix(acp): harden parent commentary progress (#89505) (thanks @100yenadmin)

## Releases This Week

- `v2026.6.2-beta.1` | beta | 2026-06-03T23:46:41Z | openclaw 2026.6.2-beta.1
- `v2026.6.1` | stable | 2026-06-03T19:35:12Z | openclaw 2026.6.1

## Most Active Change Scopes

- `docs`: 428
- `e2e`: 20
- `fix`: 13
- `acp`: 10
- `release`: 7
- `test`: 7
- `agents`: 6
- `changelog`: 6
- `gateway`: 5
- `plugins`: 4
- `canvas`: 4
- `testing`: 4

## Recent Commit Headlines

- 2026-06-04T14:26:27Z | docs: document channel utility helpers
- 2026-06-04T14:22:14Z | docs: document session web tools
- 2026-06-04T14:17:38Z | docs: document media session tools
- 2026-06-04T14:14:36Z | docs: document built-in tool helpers
- 2026-06-04T14:11:57Z | docs: document tool utility helpers
- 2026-06-04T14:08:39Z | docs: document subagent registry helpers
- 2026-06-04T14:05:53Z | docs: document subagent helpers
- 2026-06-04T14:03:05Z | docs: document session tools
- 2026-06-04T14:01:08Z | docs: document session services
- 2026-06-04T13:42:30Z | docs(acp): document parent commentary default
- 2026-06-04T13:42:25Z | fix(acp): default parent commentary in progress mode
- 2026-06-04T13:58:14Z | docs: document sandbox helpers
- 2026-06-04T13:55:11Z | docs: document provider tool helpers
- 2026-06-04T13:51:24Z | docs: document model selection helpers
- 2026-06-04T02:46:53Z | test(gateway): extend vitest idle watchdog
- 2026-06-04T13:48:36Z | docs: document agent runtime helpers
- 2026-06-04T13:46:22Z | docs: document exec and harness helpers
- 2026-06-04T13:43:42Z | docs: document embedded subscribe helpers
- 2026-06-04T13:41:21Z | docs: document runner root helpers
- 2026-06-04T13:38:52Z | docs: document runner message helpers

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
