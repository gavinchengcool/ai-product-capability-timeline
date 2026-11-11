# OpenClaw Weekly Update

生成时间：2026-11-12T02:55:08.520495+08:00

## Window

- Start: 2026-11-11T02:55:08.520495+08:00
- End: 2026-11-12T02:55:08.520495+08:00
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: 330
- Releases in window: 1
- Stable releases in window: 1
- Beta releases in window: 0
- Repo stars at scan time: 394352
- Repo forks at scan time: 82861

## New Capability Signals

- feat(auth): preserve delegated OCE user profiles and permissions (#196856)
- feat: review template packages inline before publishing (#196427)
- feat(plugins): report session continuity to authorized prompt enrichment (#197220)
- improve(google): pull new Gemini models from models.dev (#197178)
- feat(templates): install bundled plugins through native management (#196349)
- feat(templates): bundle complete skill folders with native trust checks (#196348)
- feat: let Template automations start paused for onboarding (#196323)
- feat: configure Templates in one CLAW.md manifest (#196322)
- feat(telegram): show widgets as interactive Telegram message widgets (#196991)
- feat(update): offer to remove retirable recovery copies when space is short (#196873)
- feat(claude-cli): managed turns can keep Claude Code's native WebSearch (#197051)
- feat(ci): route eligible Linux jobs through Boat (#193038)
- feat(openclaw-id): Move to new keys and key warnings in the Control UI (#196456)
- feat(openclaw-id): move a claw to new keys with its recovery kit (openclaw id rebind) (#196388)
- feat(ci): add a bounded managed runner canary (#196931)

## Important Fixes And Hardening

- fix(compaction): record failed compaction attempts; commit the floor when preflight requires it
- fix(compaction): budget the summary floor with the tools the session sends
- fix(gateway): device-worker turns fail with "plugin generation was superseded" for plugin-provider models (#197314)
- fix(control-ui): audio and video replies show a download card when playback metadata is missing (#197290)
- fix(plugin-sdk): surface feature operation errors to callers (#197265)
- fix: stop reconnect loops after Gateway access is revoked (#197299)
- fix(ci): prepare Git Bash workers before test admission (#197303)
- fix(templates): templates add and dev default a new agent's workspace to ~/.openclaw when a profile or state dir is set (#195448)
- fix(ci): stabilize session row fingerprint checks across garbage collection (#197302)
- fix(gateway): gateway start, stop and uninstall print only "The CLI command failed." when service management is refused (#197292)
- fix(sessions): claude-cli fallback fails with a transcript-store fence error (#197295)
- fix(agents): list audience-gated memory tools on Claude CLI turns (#197274)
- fix(normalization): keep code spans with embedded backticks whole in plain-text previews (#196690)
- fix(workspace): keep sandbox-written files out of Gateway readiness (#197248)
- fix(gateway): preserve selected context for recorder-owned worker turns (#196487)

## Releases This Week

- `v2026.9.37` | stable | 2026-11-10T20:42:54Z | openclaw 2026.9.37

## Most Active Change Scopes

- `fix`: 48
- `ui`: 39
- `ci`: 29
- `test`: 18
- `gateway`: 16
- `templates`: 11
- `agents`: 10
- `release`: 10
- `ios`: 9
- `skills`: 7
- `compaction`: 5
- `update`: 5

## Recent Commit Headlines

- 2026-11-11T18:48:27Z | fix(compaction): record failed compaction attempts; commit the floor when preflight requires it
- 2026-11-11T18:47:36Z | fix(compaction): budget the summary floor with the tools the session sends
- 2026-11-11T18:40:27Z | feat(auth): preserve delegated OCE user profiles and permissions (#196856)
- 2026-11-11T18:39:56Z | chore(ui): refresh control ui locales (#197332)
- 2026-11-11T18:38:35Z | test(ui): wait for chat connection state before warm reload (#197318)
- 2026-11-11T18:38:07Z | fix(gateway): device-worker turns fail with "plugin generation was superseded" for plugin-provider models (#197314)
- 2026-11-11T18:34:42Z | fix(control-ui): audio and video replies show a download card when playback metadata is missing (#197290)
- 2026-11-11T18:34:04Z | docs(update): name the header-probe string-length failure and its stable fix (#197325)
- 2026-11-11T18:32:32Z | improve(ui): polish the remote access setup dialog (#196684)
- 2026-11-11T18:31:43Z | improve(ui): tidy the account menu (#196688)
- 2026-11-11T18:30:55Z | fix(plugin-sdk): surface feature operation errors to callers (#197265)
- 2026-11-11T18:15:41Z | fix: stop reconnect loops after Gateway access is revoked (#197299)
- 2026-11-11T18:15:00Z | improve(ui): polish the Remote access people page (#196686)
- 2026-11-11T18:13:54Z | fix(ci): prepare Git Bash workers before test admission (#197303)
- 2026-11-11T18:12:57Z | feat: review template packages inline before publishing (#196427)
- 2026-11-11T18:01:28Z | fix(templates): templates add and dev default a new agent's workspace to ~/.openclaw when a profile or state dir is set (#195448)
- 2026-11-11T17:49:02Z | fix(ci): stabilize session row fingerprint checks across garbage collection (#197302)
- 2026-11-11T17:44:04Z | fix(gateway): gateway start, stop and uninstall print only "The CLI command failed." when service management is refused (#197292)
- 2026-11-11T17:38:19Z | fix(sessions): claude-cli fallback fails with a transcript-store fence error (#197295)
- 2026-11-11T17:37:01Z | fix(agents): list audience-gated memory tools on Claude CLI turns (#197274)

## Sources

- https://github.com/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=100
- https://api.github.com/repos/openclaw/openclaw/commits
