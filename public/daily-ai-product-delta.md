# Daily AI Product Delta

- Generated at: 2026-05-29T22:32:42+08:00
- Requested window: 2026-05-28 to 2026-05-29
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-05-28 to 2026-05-29
- Generated at: 2026-05-29T22:32:20.495476+08:00
- 窗口: 2026-05-28 至 2026-05-29
- GitHub 增量: 735 commits / 2 releases
- 最近 push: 2026-05-29
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - ClawHub: add plugin display names plus skill verification and trust surfaces. (#87354, #86699) Thanks @thewilloftheshadow and @Patrick-Erichsen. [v2026.5.28-beta.2]
  - PDF/tools: use ClawPDF for PDF extraction, support encrypted PDF extraction, and surface MCP structured content in agent tool results. (#87670, #87751) [v2026.5.28-beta.2]
  - Providers: add Claude Opus 4.8 support, Fal Krea image model schemas, NVIDIA featured model catalogs, MiniMax streaming music responses, and provider-backed voice model catalogs. (#87845, #87890, #80775, #84764, #87794) Thanks @eleqtrizit and @vincentkoc. [v2026.5.28-beta.2]
  - Codex/GitHub: add the GitHub Copilot agent runtime and the Codex Supervisor plugin package. [v2026.5.28-beta.2]
  - Plugin SDK: add a reply payload sending hook for plugins that need to deliver channel-owned replies and flatten package types for SDK declarations. (#82823, #87165) Thanks @RomneyDa. [v2026.5.28-beta.2]
  - Policy: add policy comparison, ingress-channel conformance, and sandbox-posture conformance checks. (#85572, #85744, #86768) [v2026.5.28-beta.2]
  - ClawHub: add plugin display names plus skill verification and trust surfaces. (#87354, #86699) Thanks @thewilloftheshadow and @Patrick-Erichsen. [v2026.5.28-beta.1]
  - feat(exec): add normalized auto mode
- Fixes and constraints:
  - CLI/auth/doctor/providers: reject malformed numeric/timeout/subcommand-version inputs, ignore workspace dotenv provider credentials, wait for respawn child shutdown, bound Codex and GitHub Copilot OAuth/token requests, harden Codex auth probes, warm provider auth off the main thread, honor Codex response timeouts, stop migrating current Claude Haiku 4.5 profiles to Sonnet, bound local service startup, resolve GPT-5.5 without cached catalog, migrate legacy memory auto-provider config, rewrite non-canonical `api_key` auth profiles, and make doctor restart follow-ups actionable. (#87398, #86281, #87361, #83655, #87559, #87719) Thanks @Patrick-Erichsen, @samzong, @giodl73-repo, @alkor2000, @mmaps, and @nxmxbbd. [v2026.5.28-beta.2]
  - Browser/input hardening: reject invalid tab indexes, excessive viewport resizes, explicit zero CDP ports, malformed geolocation options, unsafe screenshot or permission-grant timeouts, loose response-body limits, invalid cookie expiries, and non-finite Browser tool delays/timeouts. [v2026.5.28-beta.2]
  - Agents/tool args: harden smart-quoted argument repair for edit arrays and exact escaped arguments so model-produced tool calls recover without corrupting valid input. (#86611) [v2026.5.28-beta.2]
  - Performance: trust install-record caches between reloads, prefer native JSON parsing, reuse unchanged tool-search catalogs, skip unchanged store serialization, add precomputed session patch writers, reduce store clone allocations, cache manifest model catalog rows and auto-enabled plugin config, avoid full session snapshots for entry reads, defer configured Slack full startup, prefer bundled plugin dist entries, and slim current metadata identity caches. (#87760) [v2026.5.28-beta.2]
  - Performance: trust install-record caches between reloads, prefer native JSON parsing, reuse unchanged tool-search catalogs, skip unchanged store serialization, add precomputed session patch writers, reduce store clone allocations, cache manifest model catalog rows and auto-enabled plugin config, and slim current metadata identity caches. [v2026.5.28-beta.1]
  - fix(whatsapp): validate inbound timestamps
  - perf(agent): lazy load embedded agent cli path
  - fix(discord): reject unsafe rate limit headers
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
