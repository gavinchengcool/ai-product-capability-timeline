# Daily AI Product Delta

- Generated at: 2026-07-28T21:24:26+08:00
- Requested window: 2026-07-27 to 2026-07-28
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-07-27 to 2026-07-28
- Generated at: 2026-07-28T21:24:07.290432+08:00
- 窗口: 2026-07-27 至 2026-07-28
- GitHub 增量: 405 commits / 1 releases
- 最近 push: 2026-07-28
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - **Models and providers:** add Claude Opus 5 across catalog and runtime, Kimi K3, and GPT Live through Codex OAuth. (#113391, #113392, #113633; related #113412; #113909, #113354; related #113353) Thanks @fuller-stack-dev, @vincentkoc, and @Solvely-Colin. [v2026.7.2-beta.5]
  - **Local inference and setup:** detect local inference providers during onboarding, add in-process llama.cpp GGUF inference and Baseten Model API support, discover models from live provider catalogs, and offer model downloads from web and macOS setup. (#108605; related #108604; #109444, #108708; related #108665; #112412; related #112405; #113476) Thanks @fuller-stack-dev. [v2026.7.2-beta.5]
  - **Sessions and dashboards:** add rewind/fork and branch switching across web and native chat, session boards and dashboards, archived/visibility/draft/incognito session states, and suggestion queues with typing indicators. (#110660, #110857, #110886, #111149, #110644, #110960, #112554, #112787, #113006, #113127, #113173) [v2026.7.2-beta.5]
  - **Native apps:** bring Quick Chat to macOS and Linux with streaming, routing, context capture, dictation, and model controls; add Linux desktop integration and signed updates; add multi-gateway apps and mobile dashboards; and expand Wear OS companion/Talk support. (#109720, #109947, #110285, #110631, #110632, #110635, #110994, #109236, #108770, #111932; related #111931; #112163, #109341, #109433; related #108781; #109483, #112721) Thanks @sibbl, @IWhatsskill, @Solvely-Colin, and @vincentkoc. [v2026.7.2-beta.5]
  - **Meetings:** add Teams and Zoom meeting guests, enable Teams, Zoom, and Google Meet plugins by default, and automatically collect durable meeting transcripts. (#109964, #111048, #113022, #113053, #113122) [v2026.7.2-beta.5]
  - **Channels:** add the Buzz plugin, Slack user-identity and Agent View modes, Telegram Bot API rich blocks and native Markdown lists, and richer Matrix formatting. (#113419, #109837, #103895; related #103673; #107986, #113158, #113199) Thanks @Patrick-Erichsen and @obviyus. [v2026.7.2-beta.5]
  - **Browser and MCP Apps:** add a secure per-tab browser copilot, batch browser CLI, bounded page-question extraction, a ticketed MCP App host and Control UI bridge, and manifest-declared MCP Apps for native plugins. (#109817, #111457, #113861, #109861; related #109851; #109807, #113224; related #113218) Thanks @anagnorisis2peripeteia, @FMLS, @cursoragent, @hxy91819, and @fuller-stack-dev. [v2026.7.2-beta.5]
  - **Memory:** add fast active-memory recall, default cross-conversation recall for personal installs, guided imports from Claude Code/Codex/Hermes, and a dedicated Memory settings page. (#108043, #110597, #108977, #114037) [v2026.7.2-beta.5]
- Fixes and constraints:
  - **Security and authorization:** prevent channel allowlists from granting owner access, keep session exports inside the workspace, close a forged-marker/web-search boundary bypass, prevent non-owner ACP session exposure, reject unsafe explicit approval IDs, harden secret redaction and exec/OAuth approvals, validate downloaded install scripts, and prevent insecure secrets-plan writes. (#107403; related #104984; #104708; related #102391; #110417, #110745; related #103055; #111055, #112947, #112952, #112953, #112956, #112946, #112957, #113307; related #90013; #113707) Thanks @obviyus, @yetval, @VACInc, @pgondhi987, and @SebTardif. [v2026.7.2-beta.5]
  - fix(ui): stop Workboard draft fields reverting during edits (#115141)
  - fix(cli): resolve plugin-catalog metadata for configured models list rows (#115190)
  - fix(ui): stop route aliases from hijacking base-path inference on settings deep links (#115186)
  - fix(doctor): eagerly canonicalize memory_index_chunks recall columns (#115154)
  - fix(ui): harden browser, session, permissions, and media lifecycles (#115110)
  - fix(msteams): release failed Graph collection bodies (#109970)
  - fix: make gateway nodes and local inference reliable under stress (#115185)
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
