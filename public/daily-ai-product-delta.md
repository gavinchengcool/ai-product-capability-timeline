# Daily AI Product Delta

- Generated at: 2026-10-16T23:39:05+08:00
- Requested window: 2026-10-15 to 2026-10-16
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-10-15 to 2026-10-16
- Generated at: 2026-10-16T23:38:41.154834+08:00
- 窗口: 2026-10-15 至 2026-10-16
- GitHub 增量: 992 commits / 2 releases
- 最近 push: 2026-10-16
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - **Cloud sessions:** move sessions between local and cloud from session menus, organize cloud environments by repository, support repository environment recipes with verified Node toolchains, save suggested cloud profiles on first use, show snapshot startup progress, start sessions while the first snapshot uploads, ready workers for empty-workspace sessions, report slow dispatch phases, and keep cloud setup secrets behind scoped egress grants. (#171690, #170892, #170862, #170796, #170875, #170895, #171729, #170929, #171749, #171073, #170810) Thanks @VACInc. [v2026.10.10-beta.1]
  - **Desktop apps and first run:** support local Gateways in the Windows desktop app, start fresh Tauri installs with a local Gateway, start fresh macOS installs in guided dashboard setup, guide missing native permissions in chat, and choose inference automatically during first-run setup. (#169522, #169512, #169568, #169635, #169628) [v2026.10.10-beta.1]
  - **Local setup:** offer optional memory embedding setup, add managed llama.cpp OCR and vision setup, and allow non-interactive llama.cpp embedding-only setup. (#163693, #148193, #170153) Thanks @PollyBot13, @duyufansh2008, and @dh-js. [v2026.10.10-beta.1]
  - **Bun runtime:** build standalone OpenClaw executables with Bun, add an opt-in pinned Bun runtime that rejects unpinnable paths before changing anything, and start the Gateway faster on Bun. (#172384, #168832, #168982, #169543) Thanks @vincentkoc. [v2026.10.10-beta.1]
  - **Experimental PostgreSQL:** add an experimental PostgreSQL engine for the Workboard store, select the shared-state engine at its owner, generate PostgreSQL DDL from canonical SQLite schemas, add PostgreSQL migrations with capability admission and exact schema-drift checks, preserve PostgreSQL stores in backups and updates, and add verified offline database port tooling. (#169214, #171962, #168219, #169933, #172265, #170828, #170518, #171368, #171265, #170037, #170055, #170059, #171350, #171484, #171518, #171795, #172046, #171545) Thanks @vincentkoc and @joshavant. [v2026.10.10-beta.1]
  - **Session personalization:** personalize session backgrounds, add per-session speech bubbles and prompt reactions, show session-specific previews for public links, and match public conversation pages to the chat design with copy buttons. (#168301, #168861, #169527, #168156) Thanks @vyctorbrzezowski and @VACInc. [v2026.10.10-beta.1]
  - **Control UI navigation:** organize personal navigation in a compact sidebar rail with real shortcut icons, filter sidebar users by online status, keep New conversation visible across sidebar modes, show session details beside wide conversations, make colored sessions easier to scan, inspect attached automations from session hovercards, put everyday session actions first, and make release updates discoverable from the account menu. (#168325, #168997, #172243, #170771, #170707, #170382, #172240, #168616, #172544, #100024) Thanks @fuller-stack-dev, @shakkernerd, and @VACInc. [v2026.10.10-beta.1]
  - **Control UI chat:** group session context and task progress in Details, clarify the session details inspector, render assistant directives and an embed tag, show readable tweet preview cards, load older history in larger pages, shrink the composer in existing sessions, search emoji by name in the reaction picker, add manual code folding to session diffs, and show or hide values in secure entry prompts. (#161674, #172436, #64104, #168213, #170481, #171637, #172577, #172350, #169925, #172549) Thanks @vyctorbrzezowski, @obviyus, @Takhoffman, @Patrick-Erichsen, and @jacobtomlinson. [v2026.10.10-beta.1]
- Fixes and constraints:
  - fix(gateway): expose recovery startup timing breakdown (#174357)
  - fix(workers): ship Windows permission helper in portable archives (#174362)
  - fix(ci): preserve offline build consumers in deadcode checks (#174358)
  - perf(sessions): reuse bounded worker history projections (#174275)
  - fix(sessions): stop retrying replaced delivery endpoints on every restart (#174278)
  - perf(gateway): cut allocation hotspots under concurrent agent turns (#174130)
  - fix(ci): report failed shard invocations with output tails
  - perf(sessions): keep context accounting bounded on large sessions (#174274)
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
