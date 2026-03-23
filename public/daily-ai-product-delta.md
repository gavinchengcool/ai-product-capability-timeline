# Daily AI Product Delta

- Generated at: 2026-03-23T20:37:07+08:00
- Requested window: 2026-03-22 to 2026-03-23
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-03-22 to 2026-03-23
- Generated at: 2026-03-23T20:36:49.974626+08:00
- 窗口: 2026-03-22 至 2026-03-23
- GitHub 增量: 637 commits / 2 releases
- 最近 push: 2026-03-23
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - ClawHub/install: add native `openclaw skills search|install|update` flows plus `openclaw plugins install clawhub:<package>` with tracked update metadata, gateway skill-install/update support for ClawHub-backed requests, and regression coverage/docs for the new source path. [v2026.3.22]
  - Plugins/marketplaces: add Claude marketplace registry resolution, `plugin@marketplace` installs, marketplace listing, and update support, plus Docker E2E coverage for local and official marketplace flows. (#48058) Thanks @vincentkoc. [v2026.3.22]
  - Commands/plugins: add owner-gated `/plugins` and `/plugin` chat commands for plugin list/show and enable/disable flows, alongside explicit `commands.plugins` config gating. Thanks @vincentkoc. [v2026.3.22]
  - Plugins/bundles: add compatible Codex, Claude, and Cursor bundle discovery/install support, map bundle skills into OpenClaw skills, and apply Claude bundle `settings.json` defaults to embedded Pi with shell overrides sanitized. [v2026.3.22]
  - Agents: add per-agent thinking/reasoning/fast defaults and auto-revert disallowed model overrides to the agent's default selection. Thanks @xuanmingguo and @vincentkoc. [v2026.3.22]
  - Commands/btw: add `/btw` side questions for quick tool-less answers about the current session without changing future session context, with dismissible in-session TUI answers and explicit BTW replies on external channels. (#45444) Thanks @ngutman. [v2026.3.22]
  - Sandbox/runtime: add pluggable sandbox backends, ship an OpenShell backend with `mirror` and `remote` workspace modes, and make sandbox list/recreate/prune backend-aware instead of Docker-only. [v2026.3.22]
  - Sandbox/SSH: add a core SSH sandbox backend with secret-backed key, certificate, and known_hosts inputs, move shared remote exec/filesystem tooling into core, and keep OpenShell focused on sandbox lifecycle plus optional `mirror` mode. [v2026.3.22]
- Fixes and constraints:
  - Security/pairing: bind iOS setup codes to the intended node profile and reject first-use bootstrap redemption that asks for broader roles or scopes. Thanks @tdjackey. [v2026.3.22]
  - Slack/startup: harden `@slack/bolt` import interop across current bundled runtime shapes so Slack monitors no longer crash with `App is not a constructor` after plugin-sdk bundling changes. (#45953) Thanks @merc1305. [v2026.3.22]
  - Security/device pairing: harden `device.token.rotate` deny handling by keeping public failures generic while logging internal deny reasons and preserving approved-baseline enforcement. (`GHSA-7jrw-x62h-64p8`) [v2026.3.22]
  - Security/exec safe bins: remove `jq` from the default safe-bin allowlist and fail closed on the `jq` `env` builtin when operators explicitly opt `jq` back in, so `jq -n env` cannot dump host secrets without an explicit trust path. Thanks @gladiator9797 for reporting. [v2026.3.22]
  - Security/exec approvals: escape blank Hangul filler code points in approval prompts across gateway/chat and the macOS native approval UI so visually empty Unicode padding cannot hide reviewed command text. [v2026.3.22]
  - Security/exec approvals: unify transparent dispatch-wrapper handling across resolution and allow-always persistence so wrapper metadata cannot silently drift and broaden approvals. [v2026.3.22]
  - Security/exec: harden macOS allowlist resolution against wrapper and `env` spoofing, require fresh approval for inline interpreter eval with `tools.exec.strictInlineEval`, wrap Discord guild message bodies as untrusted external content, and add audit findings for risky exec approval and open-channel combinations. [v2026.3.22]
  - Security/network: harden explicit-proxy SSRF pinning by translating target-hop transport hints onto HTTPS proxy tunnels and failing closed for plain HTTP guarded fetches that cannot preserve pinned DNS. [v2026.3.22]
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
