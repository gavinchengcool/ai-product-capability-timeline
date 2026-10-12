# OpenClaw Weekly Update

生成时间：2026-10-13T04:28:50.395237+08:00

## Window

- Start: 2026-10-12T04:28:50.395237+08:00
- End: 2026-10-13T04:28:50.395237+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 791
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 391785
- Repo forks at scan time: 82377

## New Capability Signals

- **Session notices:** creating many sessions gives the main session one summary of new sessions instead of separate notices that crowd out reminders and wakes. (#168239) [v2026.10.5-beta.2]
- feat(macos): start fresh installs in guided dashboard setup (#169568)
- feat: support local Gateways in the Windows desktop app (#169522)
- feat(database): share experimental database engine adapters (#169933)
- feat: show or hide values in secure entry prompts (#169925)
- feat: experimental PostgreSQL engine for the workboard store (#169214)
- feat: show session-specific previews for public links (#169527)
- feat(agents): prioritize shared private vLLM requests (#129434)
- feat(llama-cpp): add managed local OCR and vision setup (#148193)
- feat: offer optional memory embedding setup (#163693)
- feat(clawrouter): sidebar dashboard for subscription pool headroom (#169514)
- feat(agents): compact ChatGPT sign-in sessions server-side (remote compaction V2) (#168401)

## Important Fixes And Hardening

- Fixed credential leaks across redaction chunk boundaries and redaction stalls on large tool output. (#161480) Thanks @eleqtrizit. [v2026.10.2]
- Fixed replies lost while an agent finishes starting, streamed Telegram replies vanishing when the replacement message never lands, and Telegram treating local owner rejection as ambiguous delivery. (#168826, #164649, #167470) Thanks @xiaozishan, @jayzhou2309, @obviyus, @jmar5439, and @mgr-nick. [v2026.10.2]
- Fixed Claude CLI sessions showing runtime prompts as user messages, routed CLI prompts appearing on the owner's side of history, lost replies after long streamed turns, and post-turn compaction failing without an Anthropic API key. (#166080, #163521, #153545, #162066) Thanks @Marvinthebored, @Peetiegonzalez, @RomneyDa, @rogeriochaves, @zhangguiping-xydt, @obviyus, @methylester, @llmsommelier, and @ajmtrz. [v2026.10.2]
- Fixed subagent and ACP answers being truncated, superseded child answers delivered by late receipts, and requester turns stopping when completion delivery expires. (#165800, #162843, #166139, #164282) Thanks @yetval, @holgergruenhagen, @zyz619963502zyz, @Yun-0000, @michaeljgood71, @Oldrich333, and @obviyus. [v2026.10.2]
- Fixed runs aborted as stalled after completed async tools or while waiting on plugin approval, context-engine advancement lost after steering, and the tool loop refilling from the wrong context window. (#166997, #161821, #168394, #166120) Thanks @SunnyShu0925, @hannesrudolph, @fransqaas, @obviyus, @robertoronderosjr, @ruel225, and @igs-rogenlo. [v2026.10.2]
- Fixed OpenAI turns failing on regex-lookaround tool schemas, ChatGPT websocket expiry and 16 MiB SSE limits, strict chat templates after runtime notices, and Code Mode calls with repeated tool-call IDs. (#166999, #167063, #166853, #167309, #165210) Thanks @scs0209, @cursoragent, @obviyus, @adamjgmiller, @Jackten, @jlapenna, and @RomneyDa. [v2026.10.2]
- Fixed Codex sessions stopping after thread unloads, leaked app-server clients after model discovery timeouts, provider failures shown as a silent stop, and max thinking dropping on cron and hook turns. (#166693, #168365, #165488, #165444) Thanks @jalehman, @Oldrich333, and @obviyus. [v2026.10.2]
- Fixed sessions failing every turn after a truncated image, the agent disowning earlier image answers, and memory_search snake_case arguments being rejected through tool_call. (#166564, #166165, #158632) Thanks @jayzhou2309, @mirasrael, @nogikeyaksh, @masatohoshino, and @obviyus. [v2026.10.2]
- Fixed scheduled cron runs losing the Gateway plugin registry, manual cron runs losing tool access, runs rejected after catalog publication, and preflight compaction skipped for completion turns. (#166991, #168037, #168410, #163117) Thanks @67-luck, @lucianosmori, @obviyus, @RomneyDa, @SunnyShu0925, and @AXEG0. [v2026.10.2]
- Fixed the Control UI hold-to-dictate button stopping on release, typed /stop letting queued turns restart the agent, repeated browser replies after background work, and pending Home creation notices piling up. (#166843, #167860, #166362, #168239) Thanks @alfredjbclaw, @obviyus, @masatohoshino, and @shakkernerd. [v2026.10.2]
- Fixed update failures from absolute avatar paths, refused finalize steps leaving the Gateway stopped, and the SQLite worker launch error hidden behind a TypeError. (#164638, #166548, #165373) Thanks @nitinjwadhawan and @Shirleyyyhk. [v2026.10.2]
- Fixed worker capacity leaks after forced descendant cleanup and browser tab eviction at the managed tab cap. (#168746, #166666) Thanks @aniruddhaadak80, @ruel225, and @obviyus. [v2026.10.2]
- Fixed Feishu replaying obsolete streaming previews, Bedrock custom provider routes using the wrong region, the egress proxy CA rejected by strict TLS clients, and quoted Windows shell arguments in the node host. (#166610, #164406, #165818, #158160) Thanks @rudycelekli, @Takhoffman, @Ayushdevo, @obviyus, @kai-ocean-kurt, @vortexopenclaw, @RyanSandoval, @Dimitri-lcht, and @igs-rogenlo. [v2026.10.2]
- Fixed macOS crashes: the Swift compiler crash in the sidebar picker, Rosetta segfaults, Intel worker startup, and managed llama.cpp setup on macOS below 13.3. (#165573, #165088, #161876, #163358) Thanks @shakkernerd, @NovaUnboundAi, @VACInc, and @xXG0DLessXx. [v2026.10.2]
- fix(update): preserve unsafe Doctor recovery guidance (#170207)

## Releases This Week

- `v2026.10.5-beta.2` | beta | 2026-10-12T12:10:48Z | openclaw 2026.10.5-beta.2
- `v2026.10.2` | stable | 2026-10-12T05:34:44Z | openclaw 2026.10.2

## Most Active Change Scopes

- `ui`: 111
- `gateway`: 72
- `sessions`: 68
- `fix`: 50
- `test`: 44
- `ci`: 41
- `agents`: 32
- `update`: 30
- `state`: 26
- `refactor`: 15
- `docs`: 13
- `doctor`: 12

## Recent Commit Headlines

- 2026-10-12T20:27:34Z | fix(update): preserve unsafe Doctor recovery guidance (#170207)
- 2026-10-12T20:25:53Z | fix: chat turns fail when session receipts exceed transport limits (#169843)
- 2026-10-12T20:23:42Z | fix(auth): invalidate persisted profiles on explicit refresh (#170201)
- 2026-10-12T20:19:49Z | fix: recover interrupted worker claims before turn admission (#170161)
- 2026-10-12T20:19:44Z | test: remove dead single-case fixture branches (#170205)
- 2026-10-12T20:18:09Z | perf(sessions): reuse actor projection receipts for history reads (#170127)
- 2026-10-12T20:17:50Z | fix(database): make shared-state queries portable to PostgreSQL (#170055)
- 2026-10-12T20:17:07Z | test: remove redundant worker probe self-tests (#170197)
- 2026-10-12T20:16:57Z | fix(ui): bind update confirmation to its original Gateway (#170086)
- 2026-10-12T20:15:41Z | fix(plugins): malformed hook fallback lists crash or reroute runs (#169702)
- 2026-10-12T20:15:18Z | perf(gateway): publish session previews and participants from commit receipts (#170105)
- 2026-10-12T20:09:32Z | test(codex): prepare runtime config for native provenance cases
- 2026-10-12T20:12:51Z | refactor(twitch): simplify test fixture scaffolding (#170142)
- 2026-10-12T20:12:46Z | perf(control-ui): let chat load before pinned sessions (#170047)
- 2026-10-12T20:11:46Z | test(ui): share the composer browser fixture lifecycle (#170164)
- 2026-10-12T20:11:25Z | fix(release): recover packaged Gateway port refusals (#170178)
- 2026-10-12T20:10:57Z | fix(test): prepare cold Codex catalogs before benchmarking (#170181)
- 2026-10-12T20:10:17Z | fix(database): preserve shared-state PostgreSQL schema constraints (#170059)
- 2026-10-12T20:08:35Z | refactor(gateway): move startup database work off the main thread (#169880)
- 2026-10-12T20:08:08Z | perf(state): reduce repeated schema checks on Gateway restart (#170017)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
