# OpenClaw Weekly Update

生成时间：2026-10-15T23:50:04.917319+08:00

## Window

- Start: 2026-10-14T23:50:04.917319+08:00
- End: 2026-10-15T23:50:04.917319+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 787
- Releases in window: 2
- Stable releases in window: 1
- Beta releases in window: 1
- Repo stars at scan time: 392091
- Repo forks at scan time: 82451

## New Capability Signals

- **Meta:** add the Muse Wonder model to the catalog and onboarding with max thinking support, keeping Spark as the default. (#170232) Thanks @RomneyDa, @DonnieFi, @Takhoffman, @NianJiuZst, @masatohoshino, @obviyus, @ericcurtin, @jjjhenriksen, @sjf-oa, @ceckert, @jayzhou2309, @brokemac79, @xilopaint, @k-sekula, @Warhangel, @Yolo521-bot, @mightyx, and @ajmtrz. [v2026.9.33]
- **MiniMax:** add the MiniMax M3.1 Flash Preview model and route its thinking effort levels to the provider. (#160089) Thanks @NianJiuZst, @Takhoffman, @php737, @DonnieFi, @RomneyDa, @masatohoshino, @obviyus, @ericcurtin, @jjjhenriksen, @sjf-oa, @ceckert, @jayzhou2309, @brokemac79, @xilopaint, @k-sekula, @Warhangel, @Yolo521-bot, @mightyx, and @ajmtrz. [v2026.9.33]
- feat(state): select the shared-state database engine from config (#172266)
- feat(typesafe): support custom decision servers through provider settings (#173101)
- feat(gateway): measure the connect handshake in RPC diagnostics (#173079)
- feat(dev): default local tests and CLI to pinned Bun (#172625)
- feat: download files from the Files list and preview (#172042)
- feat(diagnostics): attribute Code Mode GC storms to reasons and runs (#172945)
- feat(team-reports): PostgreSQL support (#172855)
- feat: close session pull requests without merging (#173012)
- feat: compress oversized videos without blocking chat (#172844)
- feat: land session pull requests from sandboxed conversations (#172901)
- feat(gateway): notify session subscribers of resets and deletion (#172950)
- feat(logbook): PostgreSQL support (#172842)
- feat(ui): ask before archiving sessions with nested sessions (#172489)

## Important Fixes And Hardening

- fix(delivery): log terminal session delivery reasons (#173207)
- fix(models): release superseded catalogs after config reload (#158986)
- fix(update): avoid redundant database copies for compatible targets (#173201)
- perf(trajectory): retain window facts across metadata notices (#173182)
- perf: reduce repeated work during warm agent turns (#172993)
- fix(nodes): preserve pairing errors during duplex setup (#173209)
- perf(gateway): send sidebar session list refreshes as row deltas (#172946)
- fix(ci): retire remaining unused internal exports
- fix: Safari attachment picker opens away from the plus button (#173187)
- fix(worker): converge sealed native filesystem handling
- fix(pr): preserve timely mergeability through local proof (#173153)
- fix: existing automations fail after account-binding upgrades (#172792)
- fix(ios): task list has no refresh, clear or dismiss buttons, unlike the web chat (#166129)
- fix(gateway): prevent indexing of public share assets (#173191)
- fix(config): warn when logging.redactPatterns entries are silently ignored (#172551)

## Releases This Week

- `v2026.10.5-beta.4` | beta | 2026-10-15T06:10:42Z | openclaw 2026.10.5-beta.4
- `v2026.9.33` | stable | 2026-10-15T10:39:22Z | openclaw 2026.9.33

## Most Active Change Scopes

- `ui`: 110
- `fix`: 92
- `gateway`: 46
- `ci`: 44
- `sessions`: 30
- `agents`: 30
- `test`: 26
- `refactor`: 18
- `plugins`: 18
- `cron`: 14
- `update`: 12
- `feat`: 12

## Recent Commit Headlines

- 2026-10-15T15:49:09Z | fix(delivery): log terminal session delivery reasons (#173207)
- 2026-10-15T15:46:05Z | fix(models): release superseded catalogs after config reload (#158986)
- 2026-10-15T15:43:51Z | fix(update): avoid redundant database copies for compatible targets (#173201)
- 2026-10-15T15:39:39Z | perf(trajectory): retain window facts across metadata notices (#173182)
- 2026-10-15T15:39:11Z | test(openshell): observe retirement without clearing registry state
- 2026-10-15T15:36:08Z | refactor(ui): port chat status and suggestion renderers to Solid (#172300)
- 2026-10-15T15:33:56Z | test(ui): accept an uninitialized detached modal registry (#173183)
- 2026-10-15T15:28:11Z | refactor(tests): remove retired binary fixtures (#173215)
- 2026-10-15T15:27:37Z | perf: reduce repeated work during warm agent turns (#172993)
- 2026-10-15T15:27:34Z | chore(copilot): cover transcript finalization durability (#172667)
- 2026-10-15T15:26:59Z | fix(nodes): preserve pairing errors during duplex setup (#173209)
- 2026-10-15T15:26:53Z | test(ui): migrate chat message fixtures to Solid (#172929)
- 2026-10-15T15:21:51Z | test(ui): integrate current main for lazy-menu repair
- 2026-10-15T15:16:21Z | docs(ui): record reload performance findings
- 2026-10-15T15:16:31Z | refactor(ui): render agent and theme artwork with Solid (#171576)
- 2026-10-15T15:16:28Z | refactor(ui): remove Lit typing from Web Awesome test helper (#173006)
- 2026-10-15T15:16:18Z | refactor(ui): render sensitive inputs with Solid (#171641)
- 2026-10-15T15:14:19Z | test(ui): open lazy chat menus before retention assertions
- 2026-10-15T15:11:25Z | test(openshell): registration lifecycle test fails when registry retirement outlasts its 1s poll (#173205)
- 2026-10-15T15:09:55Z | test(ui): separate favicon readiness from status assertions

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
