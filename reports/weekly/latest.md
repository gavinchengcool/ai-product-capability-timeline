# OpenClaw Weekly Update

生成时间：2026-11-19T03:39:43.190367+08:00

## Window

- Start: 2026-11-18T03:39:43.190367+08:00
- End: 2026-11-19T03:39:43.190367+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 402
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 394755
- Repo forks at scan time: 82923

## New Capability Signals

- Shared conversations: add emoji reactions to prompts and replies and configure when sessions may send or receive messages. (#161053, #162316) Authored by @steipete. [v2026.10.33]
- Model setup: support endpoint-resolved custom aliases, show provider recommendations first, and display active authentication subscription blocks. (#170009, #167370, #133087) Authored by @steipete. Thanks @RomneyDa, @ceckert, @obviyus, @xyrolle, @Leon-SK668, and @vincentkoc. [v2026.10.33]
- Provider integrations: add Particle and Muse Code runtime support, including Muse sign-in through Model Setup. (#187135, #170487, #171526) Authored by @steipete. Thanks @RomneyDa and @obviyus. [v2026.10.33]
- Voice calls: add per-call briefs, reports, live steering, callbacks, and voicemail detection; OpenAI realtime voice can use a custom endpoint. (#165716, #165632) Authored by @steipete. Thanks @jacobtomlinson and @mbelinky. [v2026.10.33]
- Microsoft Teams: support multiple bot accounts. (#112811) Authored by @steipete. Thanks @jimmypuckett. [v2026.10.33]
- X integration: add mentions, GitHub-verified repository writers, guest repository questions, and daily/monthly API cost limits. (#165138, #168071, #165354, #165351) Authored by @steipete. [v2026.10.33]
- Backups: support external-disk and Cloudflare R2 destinations and preserve PostgreSQL-backed stores through backups and updates. (#161913, #170828) Authored by @steipete. Thanks @joshavant and @RomneyDa. [v2026.10.33]
- Database administration: add verified offline database-port operations with interrupted-port protection and replacement verification. (#170518, #171265, #171368) Authored by @steipete. [v2026.10.33]
- improve: ship less JavaScript for sidebar previews in Chat and New Session
- improve: ship less CSS when opening Chat or New Session
- feat: show installed plugins in the Customize sidebar (#201220)
- feat: open Sessions from its own rail icon and keep the avatar for switching agents (#201208)
- improve(ui): show project icons in the New Session project picker (#197607)
- improve: shrink sidebar inbox code loaded with Chat and New Session
- feat: reorder favorites in the model picker (#201141)

## Important Fixes And Hardening

- fix(agents): name the profile path and alsoAllow fix in session capabilities (#200936)
- fix(discord): show busy notices on session initialization conflicts (#201363)
- fix: recognize image input for GPT-6.2 models routed through ClawRouter
- fix(ui): guide Chat to setup when no model is connected
- fix: deliver scheduled reports to unchanged Discord threads
- fix(gateway-protocol): point pairing remediation at the Gateway host (#200905)
- fix: keep the Automations sidebar list after returning to a background tab (#201316)
- fix: drop the generic hint under the agent name on new sessions (#201187)
- fix: keep the Slack question when someone who may not answer presses its button (#201371)
- fix(talk): load conversation history when starting a fresh call (#201352)
- fix(gateway): config changes no longer exhaust session discovery with GitHub publication refreshes (#195679)
- fix: keep the chat composer width steady on reload (#201346)
- fix: make the OpenClaw update notice easy to see above the composer (#201303)
- fix: reflect failed access checks in provider status
- fix: keep setup diagnostics separate from progress output (#200859)

## Releases This Week

- `v2026.10.33` | stable | 2026-11-18T04:15:53Z | openclaw 2026.10.33

## Most Active Change Scopes

- `fix`: 126
- `ui`: 43
- `ci`: 25
- `test`: 23
- `improve`: 21
- `improve(ui)`: 15
- `agents`: 12
- `gateway`: 12
- `feat`: 9
- `release`: 9
- `codex`: 7
- `sessions`: 6

## Recent Commit Headlines

- 2026-11-18T19:38:33Z | fix(agents): name the profile path and alsoAllow fix in session capabilities (#200936)
- 2026-11-18T19:31:21Z | refactor(workboard): drop the unused claim and observation records
- 2026-11-18T19:28:53Z | test(ui): diagnose required human action timeouts (#201386)
- 2026-11-18T19:28:44Z | improve: ship less JavaScript for sidebar previews in Chat and New Session
- 2026-11-18T19:19:22Z | fix(discord): show busy notices on session initialization conflicts (#201363)
- 2026-11-18T19:18:53Z | test(memory): cover remote notes added after indexing (#200976)
- 2026-11-18T19:10:23Z | fix: recognize image input for GPT-6.2 models routed through ClawRouter
- 2026-11-18T19:09:48Z | fix(ui): guide Chat to setup when no model is connected
- 2026-11-18T19:07:44Z | improve: ship less CSS when opening Chat or New Session
- 2026-11-18T19:03:35Z | fix: deliver scheduled reports to unchanged Discord threads
- 2026-11-18T18:55:19Z | improve(ui): keep image inspection labels short (#201375)
- 2026-11-18T18:47:59Z | chore(ui): refresh control ui locales (#201379)
- 2026-11-18T18:47:15Z | fix(gateway-protocol): point pairing remediation at the Gateway host (#200905)
- 2026-11-18T18:37:24Z | improve(ui): keep inspected image previews compact (#201259)
- 2026-11-18T18:35:32Z | fix: keep the Automations sidebar list after returning to a background tab (#201316)
- 2026-11-18T18:33:49Z | fix: drop the generic hint under the agent name on new sessions (#201187)
- 2026-11-18T18:32:39Z | improve(ui): summarize file edits and writes together (#201261)
- 2026-11-18T18:31:42Z | improve(ui): separate chat activity groups and indent expanded operations (#201258)
- 2026-11-18T18:30:31Z | fix: keep the Slack question when someone who may not answer presses its button (#201371)
- 2026-11-18T18:28:28Z | fix(talk): load conversation history when starting a fresh call (#201352)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
