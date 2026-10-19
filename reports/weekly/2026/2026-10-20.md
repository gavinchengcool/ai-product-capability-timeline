# OpenClaw Weekly Update

生成时间：2026-10-20T01:49:58.594552+08:00

## Window

- Start: 2026-10-19T01:49:58.594552+08:00
- End: 2026-10-20T01:49:58.594552+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 974
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 392464
- Repo forks at scan time: 82501

## New Capability Signals

- **Worker-local inference:** add a native worker inference runtime with Gateway dispatch, client placement, required worker policy and destination checks before local inference, and clear setup-failure explanations. (#158902, #163645, #163646, #163647, #166611, #166613, #165960) Thanks @RomneyDa. [v2026.10.5]
- **X channel:** add the X (Twitter) mentions channel plugin with Activity API streaming and backfill, repository-question guest mode with hidden same-agent helpers, GitHub-verified repository writers, and daily and monthly X API cost limits. (#165138, #165337, #165376, #165354, #165543, #168071, #165351) Thanks @obviyus. [v2026.10.5]
- **Channel progress:** show useful Telegram and Discord progress by default, add per-tool glyphs to Discord progress drafts, restore per-tool emoji on Telegram tool rows, and hide routine Slack reaction rows. (#166861, #168032, #167392, #166880) Thanks @obviyus, @keshavbotagent, and @notmnp. [v2026.10.5]
- **Google:** add Gemini 4 Argon and Gemini 3.8 Flash, and make Gemini 4 Argon the default Google model. (#171852, #172339) [v2026.10.5]
- **OpenAI:** support custom realtime voice endpoints, show account chat models missing from the manifest, surface new ChatGPT-login models without a release, and stop offering ChatGPT-only or bundled-Codex-rejected models that would fail. (#165632, #162563, #167387, #167633, #167975) Thanks @jacobtomlinson, @obviyus, and @RomneyDa. [v2026.10.5]
- **Voice calls:** add per-call briefs, call reports, live steering, callbacks, and voicemail detection to voice calls. (#165716) Thanks @mbelinky and @jacobtomlinson. [v2026.10.5]
- **Control UI customization:** let themes customize Control UI branding, use agent avatars or unlocked Lobsterdex icons for browser tabs, choose favicon shapes, and add seven Lobsterdex character variants. (#168027, #165201, #166325, #167809, #159815) Thanks @vyctorbrzezowski, @jacobtomlinson, and @hannesrudolph. [v2026.10.5]
- **Terminal:** add configurable terminal fonts with built-in Nerd Font icons. (#166180) Thanks @jacobtomlinson. [v2026.10.5]
- **Plugins:** pick the newest official plugin release the running OpenClaw supports and keep a working plugin when its matching release is unavailable. (#167485, #166588) Thanks @charlesBerg-ux. [v2026.10.5]
- **GitHub:** support asynchronous PR merges and compact the Publish PR card. (#163579, #165219) Thanks @vincentkoc. [v2026.10.5]
- feat(maturity): distinguish regional channel capability claims (#177116)
- feat: add native Levanto Sage decision provider (#157433)
- feat: localize public conversation controls (#173800)
- feat(bench): measure Decision transport reuse across revisions (#177051)
- feat(mcp): prepare private context-bound server views (#176864)

## Important Fixes And Hardening

- fix(feishu): bind normalized account aliases to exact configured keys (#174809)
- fix: preserve native prompt annotations for cron runs (#177516)
- fix(nodes): keep paired-node photos and screenshots private by default (#174814)
- fix(worker): use monotonic admission deadlines (#175040)
- fix(worker): retry unresolved orphan workspace cleanup (#169223)
- fix(node): preserve saved TLS pins for blank values (#125646)
- fix(process): keep native cleanup pending after resource failure (#177526)
- perf(gateway): reuse native session model choices after activity (#177475)
- fix(agents): acquire CLI prompt workspace inside execution lifetime (#177493)
- fix(gateway): preserve public reads and repair suppression ratchet (#177371)
- perf(ui): skip grapheme segmentation for fitting strings (#177478)
- fix(nodes): fall back to configured auth when role policies reject stored device auth (#164480)
- fix(acp): wait for pending acpx startup probes (#177499)
- fix(gateway): isolate cold placement results from later reads (#177489)
- perf(presence): compact repeated roster identities (#177471)

## Releases This Week

- `v2026.10.5` | stable | 2026-10-18T21:47:25Z | openclaw 2026.10.5
- `v2026.10.10-beta.2` | beta | 2026-10-19T12:23:09Z | openclaw 2026.10.10-beta.2

## Most Active Change Scopes

- `ui`: 181
- `gateway`: 75
- `fix`: 64
- `refactor`: 52
- `agents`: 47
- `sessions`: 39
- `plugins`: 34
- `test`: 34
- `ci`: 22
- `cli`: 19
- `state`: 19
- `update`: 13

## Recent Commit Headlines

- 2026-10-19T17:47:46Z | refactor(ui): simplify appearance display derivations (#177522)
- 2026-10-19T17:46:33Z | fix(feishu): bind normalized account aliases to exact configured keys (#174809)
- 2026-10-19T17:46:13Z | refactor: fold single-consumer CLI and reply surfaces (#177514)
- 2026-10-19T17:45:40Z | fix: preserve native prompt annotations for cron runs (#177516)
- 2026-10-19T17:39:28Z | test(acpx): prune retired registry mock baseline
- 2026-10-19T17:41:19Z | fix(nodes): keep paired-node photos and screenshots private by default (#174814)
- 2026-10-19T17:40:34Z | fix(worker): use monotonic admission deadlines (#175040)
- 2026-10-19T17:39:33Z | fix(worker): retry unresolved orphan workspace cleanup (#169223)
- 2026-10-19T17:39:25Z | refactor: trim private browser channel and UI arguments (#177399)
- 2026-10-19T17:36:41Z | refactor(agents): trust admitted runner facts (#177504)
- 2026-10-19T17:34:29Z | refactor(ui): use direct reads for chat display values (#177490)
- 2026-10-19T17:28:01Z | fix(node): preserve saved TLS pins for blank values (#125646)
- 2026-10-19T17:27:45Z | refactor(ui): fold private page rendering surfaces (#177511)
- 2026-10-19T17:27:08Z | fix(process): keep native cleanup pending after resource failure (#177526)
- 2026-10-19T17:27:01Z | refactor(chat): consume canonical owner facts (#177512)
- 2026-10-19T17:24:59Z | test(doctor): trim plugin work from legacy state-dir proof
- 2026-10-19T17:24:34Z | refactor(ui): project plugin component properties (#177513)
- 2026-10-19T17:23:16Z | refactor(gateway): bind private notifications to their owner (#177507)
- 2026-10-19T17:22:30Z | test(runtime): align built-CLI recovery e2e with launcher-bound respawns (#177503)
- 2026-10-19T17:20:38Z | refactor(ui): simplify chat rendering ownership and derivations (#177461)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
