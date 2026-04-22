# Daily AI Product Delta

- Generated at: 2026-04-22T20:55:03+08:00
- Requested window: 2026-04-21 to 2026-04-22
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-04-21 to 2026-04-22
- Generated at: 2026-04-22T20:54:47.702053+08:00
- 窗口: 2026-04-21 至 2026-04-22
- GitHub 增量: 290 commits / 4 releases
- 最近 push: 2026-04-22
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Onboard/wizard: restyle the setup security disclaimer with a single yellow warning banner, section headings and bulleted checklists, and un-dim the note body so key guidance is easy to scan; add a loading spinner during the initial model catalog load so the wizard no longer goes blank while it runs; add an "API key" placeholder to provider API key prompts. (#69553) Thanks @Patrick-Erichsen. [v2026.4.20]
  - Models/costs: support tiered model pricing from cached catalogs and configured models, and include bundled Moonshot Kimi K2.6/K2.5 cost estimates for token-usage reports. (#67605) Thanks @sliverp. [v2026.4.20]
  - BlueBubbles/groups: forward per-group `systemPrompt` config into inbound context `GroupSystemPrompt` so configured group-specific behavioral instructions (for example threaded-reply and tapback conventions) are injected on every turn. Supports `"*"` wildcard fallback matching the existing `requireMention` pattern. Closes #60665. (#69198) Thanks @omarshahine. [v2026.4.20]
  - Plugins/tasks: add a detached runtime registration contract so plugin executors can own detached task lifecycle and cancellation without reaching into core task internals. (#68915) Thanks @mbelinky. [v2026.4.20]
  - QA/CI: make `openclaw qa suite` and `openclaw qa telegram` fail by default when scenarios fail, add `--allow-failures` for artifact-only runs, and tighten live-lane defaults for CI automation. (#69122) Thanks @joshavant. [v2026.4.20]
  - Onboard/wizard: restyle the setup security disclaimer with a single yellow warning banner, section headings and bulleted checklists, and un-dim the note body so key guidance is easy to scan; add a loading spinner during the initial model catalog load so the wizard no longer goes blank while it runs; add an "API key" placeholder to provider API key prompts. (#69553) Thanks @Patrick-Erichsen. [v2026.4.20-beta.2]
  - Models/costs: support tiered model pricing from cached catalogs and configured models, and include bundled Moonshot Kimi K2.6/K2.5 cost estimates for token-usage reports. (#67605) Thanks @sliverp. [v2026.4.20-beta.2]
  - BlueBubbles/groups: forward per-group `systemPrompt` config into inbound context `GroupSystemPrompt` so configured group-specific behavioral instructions (for example threaded-reply and tapback conventions) are injected on every turn. Supports `"*"` wildcard fallback matching the existing `requireMention` pattern. Closes #60665. (#69198) Thanks @omarshahine. [v2026.4.20-beta.2]
- Fixes and constraints:
  - Exec/YOLO: stop rejecting gateway-host exec in `security=full` plus `ask=off` mode via the Python/Node script preflight hardening path, so promptless YOLO exec once again runs direct interpreter stdin and heredoc forms such as `node <<'NODE' ... NODE`. [v2026.4.20]
  - fix(qqbot): add SSRF guard to direct-upload URL paths in uploadC2CMedia and uploadGroupMedia [AI-assisted]. (#69595) Thanks @pgondhi987. [v2026.4.20]
  - fix(gateway): enforce allowRequestSessionKey gate on template-rendered mapping sessionKeys. (#69381) Thanks @pgondhi987. [v2026.4.20]
  - fix(security): block MINIMAX_API_HOST workspace env injection and remove env-driven URL routing [AI-assisted]. (#67300) Thanks @pgondhi987. [v2026.4.20]
  - Security/dotenv: block all `OPENCLAW_*` keys from untrusted workspace `.env` files so workspace-local env loading fails closed for new runtime-control variables instead of silently inheriting them. (#473) [v2026.4.20]
  - Agents/gateway tool: extend the agent-facing `gateway` tool's config mutation guard so model-driven `config.patch` and `config.apply` cannot rewrite operator-trusted paths (sandbox, plugin trust, gateway auth/TLS, hook routing and tokens, SSRF policy, MCP servers, workspace filesystem hardening) and cannot bypass the guard by editing per-agent sandbox, tools, or embedded-Pi overrides in place under `agents.list[]`. (#69377) Thanks @eleqtrizit. [v2026.4.20]
  - Exec/YOLO: stop rejecting gateway-host exec in `security=full` plus `ask=off` mode via the Python/Node script preflight hardening path, so promptless YOLO exec once again runs direct interpreter stdin and heredoc forms such as `node <<'NODE' ... NODE`. [v2026.4.20-beta.2]
  - fix(qqbot): add SSRF guard to direct-upload URL paths in uploadC2CMedia and uploadGroupMedia [AI-assisted]. (#69595) Thanks @pgondhi987. [v2026.4.20-beta.2]
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
