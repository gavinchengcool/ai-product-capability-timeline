# OpenClaw Weekly Update

生成时间：2026-10-16T23:38:41.154834+08:00

## Window

- Start: 2026-10-15T23:38:41.154834+08:00
- End: 2026-10-16T23:38:41.154834+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 992
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 392171
- Repo forks at scan time: 82460

## New Capability Signals

- **Cloud sessions:** move sessions between local and cloud from session menus, organize cloud environments by repository, support repository environment recipes with verified Node toolchains, save suggested cloud profiles on first use, show snapshot startup progress, start sessions while the first snapshot uploads, ready workers for empty-workspace sessions, report slow dispatch phases, and keep cloud setup secrets behind scoped egress grants. (#171690, #170892, #170862, #170796, #170875, #170895, #171729, #170929, #171749, #171073, #170810) Thanks @VACInc. [v2026.10.10-beta.1]
- **Desktop apps and first run:** support local Gateways in the Windows desktop app, start fresh Tauri installs with a local Gateway, start fresh macOS installs in guided dashboard setup, guide missing native permissions in chat, and choose inference automatically during first-run setup. (#169522, #169512, #169568, #169635, #169628) [v2026.10.10-beta.1]
- **Local setup:** offer optional memory embedding setup, add managed llama.cpp OCR and vision setup, and allow non-interactive llama.cpp embedding-only setup. (#163693, #148193, #170153) Thanks @PollyBot13, @duyufansh2008, and @dh-js. [v2026.10.10-beta.1]
- **Bun runtime:** build standalone OpenClaw executables with Bun, add an opt-in pinned Bun runtime that rejects unpinnable paths before changing anything, and start the Gateway faster on Bun. (#172384, #168832, #168982, #169543) Thanks @vincentkoc. [v2026.10.10-beta.1]
- **Experimental PostgreSQL:** add an experimental PostgreSQL engine for the Workboard store, select the shared-state engine at its owner, generate PostgreSQL DDL from canonical SQLite schemas, add PostgreSQL migrations with capability admission and exact schema-drift checks, preserve PostgreSQL stores in backups and updates, and add verified offline database port tooling. (#169214, #171962, #168219, #169933, #172265, #170828, #170518, #171368, #171265, #170037, #170055, #170059, #171350, #171484, #171518, #171795, #172046, #171545) Thanks @vincentkoc and @joshavant. [v2026.10.10-beta.1]
- **Session personalization:** personalize session backgrounds, add per-session speech bubbles and prompt reactions, show session-specific previews for public links, and match public conversation pages to the chat design with copy buttons. (#168301, #168861, #169527, #168156) Thanks @vyctorbrzezowski and @VACInc. [v2026.10.10-beta.1]
- **Control UI navigation:** organize personal navigation in a compact sidebar rail with real shortcut icons, filter sidebar users by online status, keep New conversation visible across sidebar modes, show session details beside wide conversations, make colored sessions easier to scan, inspect attached automations from session hovercards, put everyday session actions first, and make release updates discoverable from the account menu. (#168325, #168997, #172243, #170771, #170707, #170382, #172240, #168616, #172544, #100024) Thanks @fuller-stack-dev, @shakkernerd, and @VACInc. [v2026.10.10-beta.1]
- **Control UI chat:** group session context and task progress in Details, clarify the session details inspector, render assistant directives and an embed tag, show readable tweet preview cards, load older history in larger pages, shrink the composer in existing sessions, search emoji by name in the reaction picker, add manual code folding to session diffs, and show or hide values in secure entry prompts. (#161674, #172436, #64104, #168213, #170481, #171637, #172577, #172350, #169925, #172549) Thanks @vyctorbrzezowski, @obviyus, @Takhoffman, @Patrick-Erichsen, and @jacobtomlinson. [v2026.10.10-beta.1]
- **Languages:** add Swedish to the Control UI and docs, and include plugin catalogs in locale refresh. (#62063, #171496) Thanks @yeager and @vincentkoc. [v2026.10.10-beta.1]
- **MCP apps and automations:** use MCP plugin apps across conversations and workspace files, trigger automations from MCP events, connect MCP apps through a principal-bound relay plugin, and support principal-bound remote Control UI for trusted plugins. (#161747, #165399, #168233, #170540) [v2026.10.10-beta.1]
- **Plugins and SDK:** allow per-run model fallback overrides, fork a session's live context for background side questions, let plugins steer a session's active run, support Solid Control UI views, add worker-owned keyed state and conversation binding APIs, join service and account scheduling at retirement, complete awaited SQLite compatibility migration paths, and show calm notices for deprecated SDK usage. (#168893, #170146, #170152, #168408, #168478, #168483, #162669, #171443, #171752) Thanks @obviyus, @dwty11, and @joshavant. [v2026.10.10-beta.1]
- **Models and providers:** add Gemini 4 Argon as the default Gemini model with Gemini 3.8 Flash, replace Nemotron 3 Super with Nemotron 3.5 Super VL, add xAI Imagine Image 2.0 without silent image-model fallback, accept the Fish Audio Drama 3 preview, support endpoint-resolved custom model aliases, prefer a newer installed Codex for ChatGPT discovery, and prioritize shared private vLLM requests. (#171852, #172339, #172449, #172445, #170473, #170009, #168228, #129434) Thanks @nv-kasikritc, @jacobtomlinson, @JFLeonM, @xyrolle, @obviyus, @m888m, and @joshavant. [v2026.10.10-beta.1]
- **Usage and accounts:** show active auth subscription blocks, show Ollama cloud balance in status usage, add a ClawRouter sidebar dashboard for subscription pool headroom, show local provider processing with estimated wait time, and show every matched session in a paged usage overview. (#133087, #167474, #169514, #170041, #170369, #169660) Thanks @Leon-SK668, @vincentkoc, and @usimic. [v2026.10.10-beta.1]
- **Model recovery:** use model fallbacks after context-overflow recovery, compact ChatGPT sign-in sessions server-side, end runs after confirmed final source replies, and support typed OpenAI Decisions API evaluations. (#170141, #168401, #170653, #166320) Thanks @amirarenco-create, @obviyus, @RomneyDa, @sunlit-deng, @jjjhenriksen, and @Kimiyu-186. [v2026.10.10-beta.1]
- **Labs Advisor:** add an experimental Advisor that steers agents away from avoidable work. (#169564) Thanks @obviyus. [v2026.10.10-beta.1]

## Important Fixes And Hardening

- fix(gateway): expose recovery startup timing breakdown (#174357)
- fix(workers): ship Windows permission helper in portable archives (#174362)
- fix(ci): preserve offline build consumers in deadcode checks (#174358)
- perf(sessions): reuse bounded worker history projections (#174275)
- fix(sessions): stop retrying replaced delivery endpoints on every restart (#174278)
- perf(gateway): cut allocation hotspots under concurrent agent turns (#174130)
- fix(ci): report failed shard invocations with output tails
- perf(sessions): keep context accounting bounded on large sessions (#174274)
- fix(memory-wiki): refuse malformed input and keep handwritten notes (#173931)
- fix(plugins): admit peers from relocated standalone builds (#174273)
- fix(x): retain work references on follow-up mentions (#174305)
- fix(decisions): stop reporting unconfirmed credentials as ready (#174027)
- fix(ci): repair auth wrapper and unused helper exports (#174296)
- perf(gateway): trim history warmup imports for restart recovery (#174293)
- fix: allow attachment follow-ups in managed project sessions (#173956)

## Releases This Week

- `v2026.10.10-beta.1` | beta | 2026-10-15T18:03:07Z | openclaw 2026.10.10-beta.1
- `v2026.10.4` | stable | 2026-10-16T00:36:19Z | openclaw 2026.10.4

## Most Active Change Scopes

- `ui`: 221
- `fix`: 88
- `ci`: 43
- `tests`: 40
- `gateway`: 39
- `agents`: 36
- `refactor`: 29
- `sessions`: 27
- `test`: 26
- `update`: 26
- `plugins`: 18
- `cron`: 16

## Recent Commit Headlines

- 2026-10-16T15:35:00Z | fix(gateway): expose recovery startup timing breakdown (#174357)
- 2026-10-16T15:33:10Z | feat(identity): support configurable GitHub Enterprise coauthor credit (#173513)
- 2026-10-16T15:31:14Z | refactor(ui): derive settings agent projections from their owners (#174337)
- 2026-10-16T15:30:32Z | fix(workers): ship Windows permission helper in portable archives (#174362)
- 2026-10-16T15:29:30Z | fix(ci): preserve offline build consumers in deadcode checks (#174358)
- 2026-10-16T15:26:50Z | refactor(test): remove dead script report fixture branches (#174356)
- 2026-10-16T15:26:06Z | test(process, state, plugins, codex, ui): remove low-value tests (batch d119) (#173126)
- 2026-10-16T15:23:32Z | refactor(ui): reuse disposable listeners for plugin components (#174346)
- 2026-10-16T15:22:21Z | perf(sessions): reuse bounded worker history projections (#174275)
- 2026-10-16T15:20:38Z | test(apple): bound outbox waits and join restart flushes
- 2026-10-16T15:21:07Z | refactor(logging): remove duplicate diagnostic observers (#174332)
- 2026-10-16T15:18:47Z | test(update): allow the documented channel diagnostic in update status --json e2e (#174348)
- 2026-10-16T15:18:35Z | refactor(ui): retain composer question and goal disclosure in Solid (#174320)
- 2026-10-16T15:18:23Z | refactor(ui): own sidebar menu pointer listeners (#174338)
- 2026-10-16T15:15:16Z | refactor(ui): own native browser subscriptions in Solid (#174327)
- 2026-10-16T15:12:40Z | fix(sessions): stop retrying replaced delivery endpoints on every restart (#174278)
- 2026-10-16T15:12:16Z | perf(gateway): cut allocation hotspots under concurrent agent turns (#174130)
- 2026-10-16T15:08:43Z | test(onboard): prepare native pin state before spoofing Windows
- 2026-10-16T15:08:33Z | fix(ci): report failed shard invocations with output tails
- 2026-10-16T15:07:11Z | refactor(test): consolidate required option validation coverage (#174335)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
