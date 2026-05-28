# Daily AI Product Delta

- Generated at: 2026-05-28T22:59:45+08:00
- Requested window: 2026-05-27 to 2026-05-28
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-05-27 to 2026-05-28
- Generated at: 2026-05-28T22:59:29.211329+08:00
- 窗口: 2026-05-27 至 2026-05-28
- GitHub 增量: 324 commits / 2 releases
- 最近 push: 2026-05-28
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Memory: add a core OpenAI-compatible embedding provider for local and hosted OpenAI-style endpoints, with config, doctor, and docs support. (#85269) Thanks @dutifulbob. [v2026.5.27]
  - Providers: add the Pixverse video generation provider, API region selection, docs, and external plugin packaging support. [v2026.5.27]
  - ClawHub: add plugin display metadata so catalog/package listings use cleaner names. (#87354) Thanks @thewilloftheshadow. [v2026.5.27]
  - Agents: split the heartbeat runtime template out of docs assets and add compatibility repair for legacy heartbeat template content. (#85416) Thanks @hxy91819. [v2026.5.27]
  - Memory: add a core OpenAI-compatible embedding provider for local and hosted OpenAI-style endpoints, with config, doctor, and docs support. (#85269) Thanks @dutifulbob. [v2026.5.27-beta.1]
  - Providers: add the Pixverse video generation provider, API region selection, docs, and external plugin packaging support. [v2026.5.27-beta.1]
  - ClawHub: add plugin display metadata so catalog/package listings use cleaner names. (#87354) Thanks @thewilloftheshadow. [v2026.5.27-beta.1]
  - Agents: split the heartbeat runtime template out of docs assets and add compatibility repair for legacy heartbeat template content. (#85416) Thanks @hxy91819. [v2026.5.27-beta.1]
- Fixes and constraints:
  - Security/content boundaries: route untrusted group prompt metadata outside system prompts, normalize repeated trailing hostname dots, block side-effecting command wrappers, reject unsafe Node runtime env overrides, reject no-auth Tailscale exposure, block untrusted Microsoft Teams service URLs, enforce `/allowlist configWrites` origin policy, gate QQBot fallback approval buttons, and require admin for node/device-role approvals. (#87144, #87305, #87292, #87308, #87146, #87154, #87334) Thanks @eleqtrizit and @pgondhi987. [v2026.5.27]
  - Channels: make Telegram `sendMessage` action replies durable and preserve SecretRef prompt config, suppress duplicate iMessage native exec approval prompts and sends, keep iMessage approval polling alive after denied reactions, keep Slack delivered final replies during late cleanup, keep Matrix mention previews/finals mention-inert and normally delivered, ignore filename-embedded Matrix IDs, suppress recovered Discord tool-warning artifacts from successful replies, suppress Google Chat thread sends in DMs, and harden Discord guild requester checks. (#87261, #87452) Thanks @mbelinky. [v2026.5.27]
  - Install/package/release: match npm globstar exclusions, honor dist package exclusions in inventory, omit unpacked test helpers, skip Homebrew until macOS packages need it, package Docker runtime workspace templates, smoke Docker runtime templates during full validation, merge nested shrinkwrap override pins, preserve forked shrinkwrap pins, pin aged `lru-cache`, harden postpublish verification, accept main full-validation proof, and reject empty beta smoke runs. [v2026.5.27]
  - Security/content boundaries: route untrusted group prompt metadata outside system prompts, normalize repeated trailing hostname dots, block side-effecting command wrappers, reject unsafe Node runtime env overrides, reject no-auth Tailscale exposure, block untrusted Microsoft Teams service URLs, enforce `/allowlist configWrites` origin policy, gate QQBot fallback approval buttons, and require admin for node/device-role approvals. (#87144, #87305, #87292, #87308, #87146, #87154, #87334) Thanks @eleqtrizit and @pgondhi987. [v2026.5.27-beta.1]
  - Channels: make Telegram `sendMessage` action replies durable and preserve SecretRef prompt config, suppress duplicate iMessage native exec approval prompts and sends, keep iMessage approval polling alive after denied reactions, keep Slack delivered final replies during late cleanup, keep Matrix mention previews/finals mention-inert and normally delivered, ignore filename-embedded Matrix IDs, suppress recovered Discord tool-warning artifacts from successful replies, suppress Google Chat thread sends in DMs, and harden Discord guild requester checks. (#87261, #87452) Thanks @mbelinky. [v2026.5.27-beta.1]
  - Install/package/release: match npm globstar exclusions, honor dist package exclusions in inventory, omit unpacked test helpers, skip Homebrew until macOS packages need it, package Docker runtime workspace templates, smoke Docker runtime templates during full validation, merge nested shrinkwrap override pins, preserve forked shrinkwrap pins, pin aged `lru-cache`, harden postpublish verification, accept main full-validation proof, and reject empty beta smoke runs. [v2026.5.27-beta.1]
  - fix(core): restore changed gate typecheck
  - fix(agents): quarantine compaction tool schemas
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
