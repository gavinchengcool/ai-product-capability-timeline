# Daily AI Product Delta

- Generated at: 2026-05-03T20:39:26+08:00
- Requested window: 2026-05-02 to 2026-05-03
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-05-02 to 2026-05-03
- Generated at: 2026-05-03T20:39:10.337009+08:00
- 窗口: 2026-05-02 至 2026-05-03
- GitHub 增量: 457 commits / 3 releases
- 最近 push: 2026-05-03
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Gateway/startup and restart: skip plugin-backed auth-profile overlays during startup secrets preflight, reducing gateway readiness latency while keeping reload and OAuth recovery paths overlay-capable; add `openclaw gateway restart --force` and `--wait <duration>`, log active task run IDs before restart deferral timers, and report timeout restarts as explicit forced restarts. (#68327) Thanks @JIRBOY. [v2026.5.2]
  - Infra/path-guards: add a fast path for canonical absolute POSIX containment checks, avoiding repeated `path.resolve` and `path.relative` work in hot filesystem walkers. Refs #75895, #75575, and #68782. Thanks @Enderfga. [v2026.5.2]
  - Tools/plugins: add a platform-level tool descriptor planner for descriptor-first visibility, generic availability checks, and executor references, and cache plugin tool descriptors captured from `api.registerTool(...)` so repeated prompt-time planning can skip plugin runtime loading while execution still loads the live plugin tool. (#76079) Thanks @shakkernerd. [v2026.5.2]
  - Providers/xAI: add Grok 4.3 to the bundled catalog and make it the default xAI chat model. [v2026.5.2]
  - Google Meet: let API-created rooms set `accessType` and `entryPointAccess`, add `googlemeet end-active-conference` for closing managed spaces after a call, and add `googlemeet test-listen` plus the matching `google_meet` `test_listen` action so transcribe-mode joins wait for real caption or transcript movement before reporting listen-first health. (#74824; refs #72478) Thanks @BsnizND and @DougButdorf. [v2026.5.2]
  - Plugins/Crestodian: add ClawHub plugin search plus Crestodian plugin list/search/install/uninstall operations, with approval and audit coverage for install and uninstall. [v2026.5.2]
  - Providers/OpenAI: add `extraBody`/`extra_body` passthrough for OpenAI-compatible TTS endpoints, so custom speech servers can receive fields such as `lang` in `/audio/speech` requests. Fixes #39900. Thanks @R3NK0R. [v2026.5.2]
  - Channels/WhatsApp: support explicit WhatsApp Channel/Newsletter `@newsletter` outbound message targets with channel session metadata instead of DM routing. Fixes #13417; carries forward the narrow outbound target idea from #13424. Thanks @vincentkoc and @agentz-manfred. [v2026.5.2]
- Fixes and constraints:
  - Security audit/plugins: ignore plugin install backup, disabled, and dependency debris directories when enumerating installed plugin roots, avoiding false-positive findings for `.openclaw-install-backups` after plugin updates. Fixes #75456. [v2026.5.2]
  - fix(infra): block workspace state-directory env override [AI]. (#75940) Thanks @pgondhi987. [v2026.5.2]
  - Agents/transcripts: avoid reopening large Pi transcript files through the synchronous session manager for maintenance rewrites, persisted tool-result truncation, manual compaction boundary hardening, and queued compaction rotation. Thanks @mariozechner. [v2026.5.2]
  - Providers/xAI: give Grok `web_search` a 60s default timeout, harden malformed xAI Responses parsing, and return structured timeout errors instead of aborting the tool call. Fixes #58063 and #58733. Thanks @dnishimura, @marvcasasola-svg, and @Nanako0129. [v2026.5.2]
  - fix: block workspace CLOUDSDK_PYTHON override and always set trusted interpreter for gcloud. (#74492) Thanks @pgondhi987. [v2026.5.2]
  - fix(infra): block ambient Homebrew env vars from brew resolution. (#74463) Thanks @pgondhi987. [v2026.5.2]
  - Security/Windows: ignore workspace `.env` system-path variables and resolve stale-process `taskkill.exe` from the validated Windows install root, preventing repository-local env files from redirecting cleanup helpers. Thanks @pgondhi987. [v2026.5.2]
  - Security/audit: keep plain `security audit` on the cold config/filesystem path and reserve plugin runtime security collectors for `--deep`, so large plugin installs cannot execute every plugin runtime during routine audits. Thanks @vincentkoc. [v2026.5.2]
- Note: 每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。

## ChatGPT

- Freshness: latest_official_wave
- Window: 2026-03-05 to 2026-03-11
- Generated at: 2026-03-16T00:00:00+08:00
- 窗口: 2026-03-05 至 2026-03-11
- 官方更新: 4 条
- 最近日期: 2026-03-11
- 来源: OpenAI ChatGPT release notes
- 自动化状态: 当前仍是官方基线快照，尚未接每日抓取
- Feature signals:
  - GPT-5.4 Thinking 进入 ChatGPT，前沿推理模型继续向前台产品前移。
  - Interactive learning mode 开始把讲解、提问和练习做成一体化学习回路。
  - Codex 支持自动 top-up，长时间异步编码任务更不容易中断。
  - Projects 与多模态工具的工作台化趋势仍在延续。
- Fixes and constraints:
  - GPT-5.1 从产品面板退出，模型阵列被继续收敛。
  - ChatGPT 继续减少模型与工作流界面的复杂度。
- Note: Source baseline from public/product-data.js. Latest timeline date: 2026-03-11.

## Claude

- Freshness: latest_official_wave
- Window: 2026-03-02 to 2026-03-12
- Generated at: 2026-03-16T00:00:00+08:00
- 窗口: 2026-03-02 至 2026-03-12
- 官方更新: 3 条
- 最近日期: 2026-03-12
- 来源: Anthropic Claude release notes
- 自动化状态: 当前仍是官方基线快照，尚未接每日抓取
- Feature signals:
  - Memory 扩到 free，Claude 的长期上下文开始成为更普遍的默认特性。
  - Excel / PowerPoint shared context、skills 与 LLM gateway 一起把 Claude 推向组织工作台。
  - Charts / diagrams 把 Claude 的结果形态从纯文本扩到图形输出。
- Fixes and constraints:
  - 免费用户的记忆治理和退出机制变得更重要。
  - 企业侧需要同时管理 skills、gateway 与 office context 的新边界。
- Note: Source baseline from public/product-data.js. Latest timeline date: 2026-03-12.

## Codex CLI

- Freshness: latest_official_wave
- Window: 2026-03-05 to 2026-03-11
- Generated at: 2026-03-16T00:00:00+08:00
- 窗口: 2026-03-05 至 2026-03-11
- 官方 Releases: 5 个
- 最近日期: 2026-03-11
- 来源: OpenAI Codex GitHub releases
- 自动化状态: 当前仍是官方基线快照，尚未接每日抓取
- Feature signals:
  - rust-v0.110.0 / v0.111.0 把 plugin system、multi-agent handoff、fast mode、memory guardrails 和 app-server v2 一起推上主线。
  - rust-v0.112.0 加入 @plugin mentions，并把模型选择面继续前台化。
  - rust-v0.113.0 增加 request_permissions、插件市场发现增强和带 TTY 的 streaming exec。
  - rust-v0.114.0 再补 experimental code mode、SessionStart / Stop hooks 与 readyz / healthz。
- Fixes and constraints:
  - 这一波 releases 持续在 auth 错误、resume 状态、git context 和 permission handling 上补稳定性。
  - Linux tmux crash、插件启用边界和 reopened threads in-progress 状态也被继续修平。
- Note: Source baseline from public/product-data.js. Latest timeline date: 2026-03-11.

## Claude Code CLI

- Freshness: latest_official_wave
- Window: 2026-03-04 to 2026-03-14
- Generated at: 2026-03-16T00:00:00+08:00
- 窗口: 2026-03-04 至 2026-03-14
- 官方 Releases: 10 个
- 最近日期: 2026-03-14
- 来源: Anthropic Claude Code CLI official releases
- 自动化状态: 当前仍是官方基线快照，尚未接每日抓取
- Feature signals:
  - v2.1.68 / v2.1.66 把 Opus 4.6 的默认 effort 与 ultrathink 重新前台化。
  - v2.1.69 / v2.1.71 把 /claude-api、remote-control naming、/loop 和 cron scheduling 带进日常工作流。
  - v2.1.72 到 v2.1.74 把 plan mode、ExitWorktree、/context 和 autoMemoryDirectory 连成一条复杂任务主线。
  - v2.1.76 再把 MCP elicitation、PostCompact hook、sparse worktree 和 /effort 一次推上来。
- Fixes and constraints:
  - 3 月这一波 releases 重点修了 proxy / gateway、permission rules、voice / Windows / VS Code 兼容，以及长会话稳定性。
  - 企业自定义 provider、第三方网络环境和远程控制边界都被持续加固。
- Note: Source baseline from public/product-data.js. Latest timeline date: 2026-03-14.

## Codex App

- Freshness: latest_official_wave
- Window: 2026-03-04 to 2026-03-10
- Generated at: 2026-03-16T00:00:00+08:00
- 窗口: 2026-03-04 至 2026-03-10
- 官方更新: 3 条
- 最近日期: 2026-03-10
- 来源: OpenAI Codex app / Codex updates
- 自动化状态: 当前仍是官方基线快照，尚未接每日抓取
- Feature signals:
  - Windows 版让 Codex App 变成跨平台开发者桌面入口。
  - 安全审查、根因分析和自动修复进入 Codex 的前台工作流。
  - Codex credits auto top-up 让 app 里的长任务更连续。
- Fixes and constraints:
  - Codex App 的账号、额度和执行 runtime 正在向统一开发者账户体系收敛。
- Note: Source baseline from public/product-data.js. Latest timeline date: 2026-03-10.
