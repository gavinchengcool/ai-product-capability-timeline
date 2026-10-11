# OpenClaw Weekly Update

生成时间：2026-10-12T00:51:20.255054+08:00

## Window

- Start: 2026-10-11T00:51:20.255054+08:00
- End: 2026-10-12T00:51:20.255054+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 577
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 391678
- Repo forks at scan time: 82343

## New Capability Signals

- **Worker-local inference:** add a native worker inference runtime with Gateway dispatch, client placement, required worker policy and destination checks before local inference, and clear setup-failure explanations. (#158902, #163645, #163646, #163647, #166611, #166613, #165960) Thanks @RomneyDa. [v2026.10.5-beta.1]
- **X channel:** add the X (Twitter) mentions channel plugin with Activity API streaming and backfill, repository-question guest mode with hidden same-agent helpers, GitHub-verified repository writers, and daily and monthly X API cost limits. (#165138, #165337, #165376, #165354, #165543, #168071, #165351) Thanks @obviyus. [v2026.10.5-beta.1]
- **Channel progress:** show useful Telegram and Discord progress by default, add per-tool glyphs to Discord progress drafts, restore per-tool emoji on Telegram tool rows, and hide routine Slack reaction rows. (#166861, #168032, #167392, #166880) Thanks @obviyus, @keshavbotagent, and @notmnp. [v2026.10.5-beta.1]
- **Anthropic and Claude CLI:** support Claude Haiku 5.5, show newly listed Claude models without waiting for an OpenClaw release, list each Claude CLI model once, and keep logged-out Claude CLI models listed with a login reason. (#166706, #167658, #166311, #166338, #167942) Thanks @RomneyDa and @obviyus. [v2026.10.5-beta.1]
- **OpenAI:** support custom realtime voice endpoints, show account chat models missing from the manifest, surface new ChatGPT-login models without a release, and stop offering ChatGPT-only or bundled-Codex-rejected models that would fail. (#165632, #162563, #167387, #167633, #167975) Thanks @jacobtomlinson and @obviyus. [v2026.10.5-beta.1]
- **Voice calls:** add per-call briefs, call reports, live steering, callbacks, and voicemail detection to voice calls. (#165716) Thanks @mbelinky and @jacobtomlinson. [v2026.10.5-beta.1]
- **Control UI customization:** let themes customize Control UI branding, use agent avatars or unlocked Lobsterdex icons for browser tabs, choose favicon shapes, and add seven Lobsterdex character variants. (#168027, #165201, #166325, #167809, #159815) Thanks @vyctorbrzezowski, @jacobtomlinson, and @hannesrudolph. [v2026.10.5-beta.1]
- **Terminal:** add configurable terminal fonts with built-in Nerd Font icons. (#166180) Thanks @jacobtomlinson. [v2026.10.5-beta.1]
- **Plugins:** pick the newest official plugin release the running OpenClaw supports and keep a working plugin when its matching release is unavailable. (#167485, #166588) Thanks @charlesBerg-ux. [v2026.10.5-beta.1]
- **GitHub:** support asynchronous PR merges and compact the Publish PR card. (#163579, #165219) Thanks @vincentkoc. [v2026.10.5-beta.1]
- feat: add per-session speech bubbles and prompt reactions (#168861)
- feat(install): add opt-in pinned Bun runtime (#168832)
- feat(sessions): add inactive session actor and scoped receipts (#168602)
- feat(ui): add guarded Lit-to-Solid codemod (#168720)
- feat(plugin-sdk): add worker-owned conversation binding APIs (#168483)

## Important Fixes And Hardening

- **Telegram:** keep streamed replies from vanishing when their replacement never lands, retry preview edits after transient errors, keep delegated progress and media-run progress cards live, honor explicit reply tags during partial streaming, keep pending questions through settings commands, restore verbose diagnostics, treat GIFs as videos, and harden spooled turn adoption. (#164649, #165072, #166101, #167362, #167895, #168004, #168016, #168011, #103695, #167470) Thanks @jayzhou2309, @obviyus, @jmar5439, @vincentkoc, and @mgr-nick. [v2026.10.5-beta.1]
- fix: retain Discord native commands in conversation history (#169200)
- fix(test): isolate built smoke runtime state
- fix(ui): repair Activity and Usage test contracts
- fix(ui): bound shared boot chunks after Solid ports
- perf(sessions): reuse transcript projection facts within reads (#169201)
- fix(build): keep Solid tag declarations in the shared owner
- fix(ui): await rendered palette settings readiness in tests
- fix(sessions): avoid turn errors when write receipts overtake reads (#169174)
- fix(ui): preserve chat navigation during recovery reloads (#169194)
- fix(ui): keep plugin action notices inside the detail panel
- fix(ios): realtime Talk crashes on the first reply and is silent on the iPhone speaker (#168416)
- fix(ci): expose lazy runtime imports to dead-export analysis
- fix(sessions): recover from transient hydration invalidation (#169199)
- fix(agents): preserve compaction checkpoint recovery ownership

## Releases This Week

- `v2026.10.5-beta.1` | beta | 2026-10-11T13:08:24Z | openclaw 2026.10.5-beta.1
- `v2026.10.1` | stable | 2026-10-10T23:54:03Z | openclaw 2026.10.1

## Most Active Change Scopes

- `ui`: 92
- `gateway`: 46
- `agents`: 35
- `fix`: 34
- `sessions`: 32
- `ci`: 24
- `test`: 22
- `update`: 19
- `refactor`: 18
- `workers`: 12
- `plugins`: 10
- `codex`: 10

## Recent Commit Headlines

- 2026-10-11T16:50:02Z | test(state): wait for publication deletion receipt installation
- 2026-10-11T16:50:05Z | fix: retain Discord native commands in conversation history (#169200)
- 2026-10-11T16:49:27Z | refactor: drop remaining over-defensive plugin and Gateway machinery (#169198)
- 2026-10-11T16:43:53Z | refactor(ui): migrate shared launchers, panels, and dialogs to Solid (#168791)
- 2026-10-11T16:40:41Z | test: avoid shadowed smoke guard binding
- 2026-10-11T16:39:02Z | fix(test): isolate built smoke runtime state
- 2026-10-11T16:36:57Z | fix(ui): repair Activity and Usage test contracts
- 2026-10-11T16:39:38Z | test(core,plugins): remove low-value tests (batch d053) (#169218)
- 2026-10-11T16:35:12Z | fix(ui): bound shared boot chunks after Solid ports
- 2026-10-11T16:34:54Z | perf(sessions): reuse transcript projection facts within reads (#169201)
- 2026-10-11T16:23:55Z | fix(build): keep Solid tag declarations in the shared owner
- 2026-10-11T16:21:51Z | fix(ui): await rendered palette settings readiness in tests
- 2026-10-11T16:14:34Z | test(gateway): follow worker-owned memory database through close
- 2026-10-11T16:13:38Z | refactor: deslop gateway and UI page leftovers (#168819)
- 2026-10-11T16:13:16Z | refactor: await bundled skill command discovery (#169089)
- 2026-10-11T16:12:03Z | fix(sessions): avoid turn errors when write receipts overtake reads (#169174)
- 2026-10-11T16:11:57Z | fix(ui): preserve chat navigation during recovery reloads (#169194)
- 2026-10-11T16:10:56Z | fix(ui): keep plugin action notices inside the detail panel
- 2026-10-11T16:04:44Z | test(cron): distinguish cancellation output from failure alerts
- 2026-10-11T16:04:43Z | fix(ios): realtime Talk crashes on the first reply and is silent on the iPhone speaker (#168416)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
