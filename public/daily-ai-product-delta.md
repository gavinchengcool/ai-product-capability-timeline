# Daily AI Product Delta

- Generated at: 2026-05-05T21:04:01+08:00
- Requested window: 2026-05-04 to 2026-05-05
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-05-04 to 2026-05-05
- Generated at: 2026-05-05T21:03:42.714232+08:00
- 窗口: 2026-05-04 至 2026-05-05
- GitHub 增量: 285 commits / 4 releases
- 最近 push: 2026-05-05
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Models/auth: add `openclaw models auth list [--provider <id>] [--json]` so users can inspect saved per-agent auth profiles without dumping secrets or hitting the old “too many arguments” path. Thanks @vincentkoc. [v2026.5.4]
  - Control UI/cron: make the New Job sidebar collapsible so the jobs list can reclaim space while keeping the form one click away. Thanks @BunsDev. [v2026.5.4]
  - Slack/streaming: add `streaming.progress.render: "rich"` for Block Kit progress drafts backed by structured progress line data. [v2026.5.4]
  - Control UI/chat: add an agent-first filter to the chat session picker, keep chat controls/composer responsive across phone/tablet/desktop widths, keep desktop chat controls on one row, avoid duplicate avatar refreshes during initial chat load, and hide that row while scrolling down the transcript. Thanks @BunsDev. [v2026.5.4]
  - Gateway/diagnostics: add startup phase spans, active work labels, stale terminal bridge markers, and default sync-I/O tracing in `pnpm gateway:watch` so slow Gateway turns are easier to attribute from logs and stability diagnostics. [v2026.5.4]
  - QA/Mantis: add `pnpm openclaw qa mantis slack-desktop-smoke` to run Slack live QA inside a Crabbox VNC desktop, open Slack Web, and capture desktop screenshots beside the Slack QA artifacts. [v2026.5.4]
  - QA/Codex harness: add targeted live Docker/Testbox diagnostics, auth preflight checks, cache mount fixes, and app-server protocol checkout discovery so maintainer harness failures are easier to reproduce. Thanks @vincentkoc. [v2026.5.4]
  - Plugins/SDK: add bounded `before_agent_finalize` retry instructions so workflow plugins can request one more model pass. Thanks @100yenadmin. [v2026.5.4]
- Fixes and constraints:
  - fix(gateway): clamp unbound websocket auth scopes [AI]. (#77413) Thanks @pgondhi987. [v2026.5.4]
  - fix(device-pair): require pairing scope for pair command [AI]. (#76377) Thanks @pgondhi987. [v2026.5.4]
  - fix(qqbot): keep private commands off framework surface [AI]. (#77212) Thanks @pgondhi987. [v2026.5.4]
  - fix: harden backend message action gateway routing [AI]. (#76374) Thanks @pgondhi987. [v2026.5.4]
  - Security/Windows: validate `SystemRoot`/`WINDIR` env values through the Windows install-root validator and add them to the dangerous-host-env policy when resolving `icacls.exe`/`whoami.exe` for `openclaw security audit`, so workspace `.env` overrides and bare command names cannot redirect Windows ACL helpers to attacker-controlled binaries. (#74458) Thanks @mmaps. [v2026.5.4]
  - Security/Windows: pin Windows registry-probe `reg.exe` resolution to the canonical Windows install root in install-root probing, so `SystemRoot`/`WINDIR` env overrides cannot redirect registry queries during Windows host detection. (#74454) Thanks @mmaps. [v2026.5.4]
  - Security/Windows: block `LOCALAPPDATA` from workspace `.env` and resolve Windows update-flow portable Git path prepends from the trusted process-local `LOCALAPPDATA` only, so workspace-supplied values cannot redirect `git` discovery during `openclaw update`. (#77470) Thanks @drobison00. [v2026.5.4]
  - Security/Windows: route the `.cmd`/`.bat` process wrapper through the shared Windows install-root resolver instead of `process.env.ComSpec`, so workspace dotenv-blocked `SystemRoot`/`WINDIR` overrides and unsafe values like UNC paths or path-lists cannot redirect `cmd.exe` selection on Windows. (#77472) Thanks @drobison00. [v2026.5.4]
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
