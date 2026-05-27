# Daily AI Product Delta

- Generated at: 2026-05-27T22:49:16+08:00
- Requested window: 2026-05-26 to 2026-05-27
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-05-26 to 2026-05-27
- Generated at: 2026-05-27T22:48:59.801312+08:00
- 窗口: 2026-05-26 至 2026-05-27
- GitHub 增量: 566 commits / 3 releases
- 最近 push: 2026-05-27
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Transcripts: add core transcript capture and source-provider support for transcript-backed meeting summaries, including the renamed Transcripts docs, CLI surface, source-provider chunks, and cleaned user-turn persistence. [v2026.5.26]
  - Auth: add named model login profiles and supported credential migration for Hermes, OpenCode, and Codex auth profiles, with explicit opt-out and non-interactive controls. (#85667) Thanks @fuller-stack-dev. [v2026.5.26]
  - Diagnostics: trace gateway secret preparation, classify skill/tool usage, surface model stream progress, add OpenTelemetry LLM content spans, and expose alertable telemetry for blocked tools, failover, stale sessions, liveness, oversized payloads, and webhook ingress. (#83019, #80370, #86191) [v2026.5.26]
  - Channels: add Signal reaction approvals, iMessage thumb approval reactions, and WhatsApp thumb approval reaction support so mobile approval flows work without textual `/approve` commands. (#85894, #85952, #85477) [v2026.5.26]
  - Plugin SDK: add reaction approval helpers and keep diagnostic event root exports discoverable across function-name and alias-bound module graphs. (#86735, #87084) [v2026.5.26]
  - Android/iOS: add the Android pair-new-gateway action and improve mobile Talk mode surfaces, including iOS realtime Talk mode and Android offline voice/gateway recovery. (#86798, #86355) Thanks @ngutman. [v2026.5.26]
  - QA-Lab: add `qa coverage --match <query>` so focused proof selection can discover matching scenarios from existing metadata before running live or remote lanes. [v2026.5.26]
  - Control UI: add an ephemeral Activity tab for sanitized live tool activity summaries without persisting raw telemetry. Fixes #12831. Thanks @BunsDev. [v2026.5.26]
- Fixes and constraints:
  - Security/content boundaries: validate Browser snapshot tab URLs against SSRF policy before ChromeMCP or direct CDP reads, sanitize queued system-event text so untrusted plugin/channel labels cannot spoof nested prompt markers, wrap fetched file text and metadata as external content, apply ClickClack `allowFrom` sender allowlists before agent dispatch, reject RPCs from invalidated device-token clients during rotation, require staged sandbox media refs, and scrub serialized tool-call text from replies. (#78526, #87094, #87062, #83741, #70707, #86924) Thanks @zsxsoft, @ttzero25, and @mmaps. [v2026.5.26]
  - Install/release: bound Docker package build, inventory, pack, and tarball preparation with process-group timeouts; pin shrinkwrap patch drift to the pnpm lock; harden macOS restart and dSYM packaging; and run release Docker/live timeout wrappers in the foreground so child processes cannot wedge gates. [v2026.5.26]
  - Security: avoid printing Gateway tokens in Docker, validate plugin model-pattern regexes safely, escape transcript metadata field names, harden session allowlist glob matching, audit Claude permission overrides under YOLO, and require explicit allow for ACP auto approvals. (#85849, #85934, #86046, #86557) [v2026.5.26]
  - Security/Audit: flag webhook `hooks.token` reuse of active Gateway password auth in `openclaw security audit` while keeping password-mode startup compatibility. (#84338) Thanks @coygeek. [v2026.5.26]
  - Security audit: warn when YOLO OpenClaw exec policy overrides a restrictive raw Claude `--permission-mode` for managed live sessions. (#86557) Thanks @sallyom. [v2026.5.26]
  - Performance: cache plugin metadata snapshots, package realpaths, stable gateway metadata, model cost indexes, channel resolution, usage-cost indexes, and session/auth hot-path facts so common Gateway and reply paths do less rediscovery. (#84649, #85843, #86517, #86678) [v2026.5.26]
  - Security/content boundaries: validate Browser snapshot tab URLs against SSRF policy before ChromeMCP or direct CDP reads, sanitize queued system-event text so untrusted plugin/channel labels cannot spoof nested prompt markers, wrap fetched file text and metadata as external content, apply ClickClack `allowFrom` sender allowlists before agent dispatch, reject RPCs from invalidated device-token clients during rotation, require staged sandbox media refs, and scrub serialized tool-call text from replies. (#78526, #87094, #87062, #83741, #70707, #86924) Thanks @zsxsoft, @ttzero25, and @mmaps. [v2026.5.26-beta.2]
  - Install/release: bound Docker package build, inventory, pack, and tarball preparation with process-group timeouts; pin shrinkwrap patch drift to the pnpm lock; harden macOS restart and dSYM packaging; and run release Docker/live timeout wrappers in the foreground so child processes cannot wedge gates. [v2026.5.26-beta.2]
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
