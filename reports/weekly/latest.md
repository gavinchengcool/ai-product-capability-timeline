# OpenClaw Weekly Update

生成时间：2026-10-17T22:30:32.786718+08:00

## Window

- Start: 2026-10-16T22:30:32.786718+08:00
- End: 2026-10-17T22:30:32.786718+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 1097
- Releases in window: 0
- Stable releases in window: 0
- Beta releases in window: 0
- Repo stars at scan time: 392258
- Repo forks at scan time: 82459

## New Capability Signals

- feat(decisions): support Jev image and Box questions (#175070)
- feat(gateway): send presence deltas to capable operator clients (#175508)
- feat(workboard): paginate cards and session boards (#175349)
- feat(gateway): expose sidebar baseline retirement causes (#175412)
- improve: group New Session agent and workspace controls (#175255)
- feat: show selected agent avatars in completion and push notifications (#173774)
- feat(ui): choose preset, generated, or uploaded agent avatars (#173773)
- feat: generate Blobster avatars with the configured agent model (#173762)
- feat(gateway): attribute session list and chat history response bytes (#175200)
- feat(ui): show subagents and background processes with progress in session Details (#175041)
- improve: use Cmd+N for new sessions in desktop apps (#174882)
- feat(doctor): truthful per-store database diagnostics (#174912)
- feat: edit session PR details without publishing source (#174945)
- feat(database): family-scoped port, backup and update for mixed engines (#174387)
- feat(onnx): use prepared decision model execution (#174162)

## Important Fixes And Hardening

- fix(sessions): honor hidden assistant rows in transcript recovery (#175551)
- fix(memory): reserve embedding cache capacity before inserting at the cap (#175566)
- fix: preserve assistant previews across user appends (#175534)
- fix(agents): keep private completion output and followups private (#175559)
- fix: avoid duplicate widgets when chat replies finish (#175544)
- fix(update): prevent migrated results from appearing before cleanup (#159644)
- fix(telegram): keep implicit final replies on the current message (#175561)
- fix: workspace sync stalls on test caches and build locks (#175538)
- fix(agents): suppress duplicate CLI replies after final message delivery (#175560)
- fix(pr): recover clean replacement heads after admin intents (#175573)
- fix(sessions): exclude transcript artifacts from model identity (#175553)
- fix(anthropic): explain Claude CLI refresh contention (#175558)
- fix(groq): clamp GPT OSS thinking levels to supported efforts (#175539)
- fix(ai): send explicit null Responses reasoning summaries (#175525)
- perf(gateway): send session row deltas to capable clients (#175521)

## Releases This Week

- No GitHub releases were published in this window.

## Most Active Change Scopes

- `ui`: 199
- `gateway`: 83
- `fix`: 66
- `agents`: 51
- `test`: 44
- `ci`: 37
- `refactor`: 37
- `sessions`: 32
- `doctor`: 29
- `plugins`: 23
- `update`: 23
- `control-ui`: 20

## Recent Commit Headlines

- 2026-10-17T14:30:07Z | refactor(test): remove unused compaction test hooks (#175594)
- 2026-10-17T14:28:07Z | refactor(runtime): remove routine diagnostic plumbing (#175546)
- 2026-10-17T14:27:16Z | test(crabbox): migrate allocation authority fixture to keyed store v2 (#175593)
- 2026-10-17T14:24:32Z | test: restore fixture state after assertion failures (#157803)
- 2026-10-17T14:23:08Z | refactor(plugins): share optional filesystem discovery (#175458)
- 2026-10-17T14:20:45Z | fix(sessions): honor hidden assistant rows in transcript recovery (#175551)
- 2026-10-17T14:18:53Z | refactor(chat): publish page state without redraw callbacks (#175575)
- 2026-10-17T14:16:53Z | test(channels): cover fused idle admission in Discord and Signal ordering tests (#175579)
- 2026-10-17T14:16:17Z | fix(memory): reserve embedding cache capacity before inserting at the cap (#175566)
- 2026-10-17T14:16:08Z | refactor(ui): project swarm hydration from its owner (#175587)
- 2026-10-17T14:15:31Z | test(core, plugins): remove low-value tests (batch d218) (#175530)
- 2026-10-17T14:14:04Z | refactor(ui): publish chat history and errors without redraw callbacks (#175571)
- 2026-10-17T14:13:03Z | fix: preserve assistant previews across user appends (#175534)
- 2026-10-17T14:09:33Z | test(ui): provide application context to the pairing shell fixture
- 2026-10-17T14:09:21Z | fix(agents): keep private completion output and followups private (#175559)
- 2026-10-17T14:07:35Z | test(doctor): retire owned fixture admissions
- 2026-10-17T14:07:39Z | fix: avoid duplicate widgets when chat replies finish (#175544)
- 2026-10-17T14:05:57Z | fix(update): prevent migrated results from appearing before cleanup (#159644)
- 2026-10-17T14:04:30Z | refactor(test): remove unused transport test support (#175580)
- 2026-10-17T14:02:11Z | refactor(plugins): use current host state APIs in bundled adapters (#175523)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
