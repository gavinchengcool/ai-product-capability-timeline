# Daily AI Product Delta

- Generated at: 2026-08-15T20:12:14+08:00
- Requested window: 2026-08-14 to 2026-08-15
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-08-14 to 2026-08-15
- Generated at: 2026-08-15T20:11:58.302584+08:00
- 窗口: 2026-08-14 至 2026-08-15
- GitHub 增量: 340 commits / 1 releases
- 最近 push: 2026-08-15
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - **Browser extension relay CDP compat:** answer `Target.getBrowserContexts` so Puppeteer-based clients (chrome-devtools-mcp) can drive the paired Chrome without the remote-debugging permission prompt, serve DevTools-style `/json/list` target descriptors, and add `openclaw browser extension cdp` to print the relay endpoint plus auth header for external CDP clients. Thanks @vincentkoc. [v2026.8.1-beta.2]
  - **Fish Audio speech:** add hosted S2.1 synthesis with streaming, voice notes, voice discovery, and telephony, plus local Fish S2 Pro reference-voice streaming in native macOS Talk. Thanks @Conan-Scott, @vincentkoc, and @Patrick-Erichsen. [v2026.8.1-beta.2]
  - **Control UI update recovery:** the "A new version is available" Reload button now waits out the gateway restart that stranded the chunk and reloads as soon as it answers, instead of silently doing nothing and leaving a manual hard reload as the only way out. Thanks @vincentkoc. [v2026.8.1-beta.2]
  - **Trusted-proxy browser pairing:** optionally auto-approve new Control UI and WebChat devices from allowlisted proxy identities with non-admin scope caps, while keeping existing-device upgrades manual. Thanks @vincentkoc. [v2026.8.1-beta.2]
  - **Channel plugin ingress monitors:** add a shared plugin SDK monitor for durable admission, polling, pruning, claim identity validation, adoption handoff, and shutdown, and migrate IRC, Synology Chat, and Google Chat to the shared lifecycle. Thanks @vincentkoc and @shakkernerd. [v2026.8.1-beta.2]
  - **External gateway supervision:** add `OPENCLAW_SUPERVISOR_MODE=external` for lifecycle owners such as OCM, preserving verified restart and deferral behavior without exposing native service authority, blocking native service mutation and self-update, and providing a versioned atomic restart-handoff consume contract. Thanks @shakkernerd. [v2026.8.1-beta.2]
  - **ClickClack guided setup:** configure ClickClack from `openclaw onboard` or `openclaw channels add clickclack` with URL, token, and workspace prompts, default-account env fallback, nonfatal live connection validation, and gateway-aware next steps that connect automatically when OpenClaw is already running. Thanks @shakkernerd and @vincentkoc. [v2026.8.1-beta.2]
  - **ClickClack bot collaboration:** add opt-in bot-authored inbound dispatch with explicit sender authorization, mention gating, retry-safe loop protection, and independent thread budgets while keeping bot traffic denied by default. Thanks @jjjhenriksen, @shakkernerd, and @vincentkoc. [v2026.8.1-beta.2]
- Fixes and constraints:
  - Fixed Crabbox hydration on unprivileged cloud sandboxes by falling back to a user-writable pnpm store when the shared `/var/cache/crabbox` cache is unavailable, preserving the hardlink import mode after hydration, and making Docker an explicit routed capability instead of an implicit install requirement. Thanks @vincentkoc and @joshavant. [v2026.8.1-beta.2]
  - fix(gateway): restart after prepared maintenance suspension (#124157)
  - fix(session-catalog): preserve explicit agent ownership across UI and CLI (#123899)
  - fix(agents): deliver Codex input choices in Telegram and web chat (#124146)
  - fix(cua): initialize execution resources on first use (#124156)
  - fix(auto-reply): reject undelivered ask_user prompts (#124148)
  - fix(cli): migrate apply refusal suggests a valid preview command (#124149)
  - fix(computer-use): repair artifact verification and post-approval descriptor found by the Linux gate (#124128)
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
