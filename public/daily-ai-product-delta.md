# Daily AI Product Delta

- Generated at: 2026-07-01T22:00:06+08:00
- Requested window: 2026-06-30 to 2026-07-01
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-06-30 to 2026-07-01
- Generated at: 2026-07-01T21:59:49.857621+08:00
- 窗口: 2026-06-30 至 2026-07-01
- GitHub 增量: 311 commits / 1 releases
- 最近 push: 2026-07-01
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Hosted Ollama Cloud users can keep only the models they explicitly configured after a restart, without the full shared catalog being added back, while automatic discovery continues for local and self-hosted Ollama servers. [#93956](https://github.com/openclaw/openclaw/pull/93956) Thanks @jason-allen-oneal. [v2026.6.11]
  - Follow-up answers from xAI reasoning models such as Grok Composer now preserve earlier reasoning context more reliably, even when configurable reasoning effort is unsupported. [#95686](https://github.com/openclaw/openclaw/pull/95686) Thanks @fuller-stack-dev, @geraint0923. [v2026.6.11]
  - Ollama Cloud users can now find and select `glm-5.2:cloud` with its 1,000,000-token context window, reasoning, and tool support even when it is absent from the public model list. [11484f8](https://github.com/openclaw/openclaw/commit/11484f8a1483b7c42aa2971de2d88289fcef7046) [v2026.6.11]
  - Long-running conversations with screenshots or other images now keep their continuity more consistently when OpenClaw makes room for new messages, instead of repeatedly filling up without moving the retained conversation forward. [#95128](https://github.com/openclaw/openclaw/pull/95128) Thanks @yetval. [v2026.6.11]
  - After changing the default model, starting a fresh channel session with `/new` or `/reset` now uses the new default instead of silently reusing the previous cached model, while explicit `/model` overrides remain unchanged. [#77339](https://github.com/openclaw/openclaw/pull/77339) Related [#77322](https://github.com/openclaw/openclaw/issues/77322). Thanks @mjamiv, @zaynl. [v2026.6.11]
  - Gateway readiness checks now turn unhealthy during a restart drain, preventing traffic managers from sending new work to a Gateway that is temporarily rejecting requests. [#94915](https://github.com/openclaw/openclaw/pull/94915) Related [#78136](https://github.com/openclaw/openclaw/issues/78136). Thanks @markoub, @maxschachere, @vincentkoc. [v2026.6.11]
  - Operators can again add or update scheduled announcements for known channels in no-config setups, while configured environments still reject disabled, stale, ownerless, or unknown destinations before delivery. [#95754](https://github.com/openclaw/openclaw/pull/95754) Thanks @vincentkoc. [v2026.6.11]
  - Gateway restarts on systemd or container setups no longer leave old Codex or Claude adapter processes behind, helping new ACPX sessions start without minutes-long cleanup stalls after repeated restarts. [#96032](https://github.com/openclaw/openclaw/pull/96032) Thanks @t2wei, @vincentkoc. [v2026.6.11]
- Fixes and constraints:
  - Fixes newer Google Chat direct messages sometimes being treated like group conversations, so they reach the correct one-to-one chat while Space and group-chat messages keep their existing routing. [#58993](https://github.com/openclaw/openclaw/pull/58993) Thanks @starhappysh, @vincentkoc. [v2026.6.11]
  - Fixes OpenClaw sometimes replying to its own delayed iMessage echoes when stray leading characters keep the sent message from being recognized. [#94442](https://github.com/openclaw/openclaw/pull/94442) Thanks @ly-wang19. [v2026.6.11]
  - Fixes delayed or missing Telegram and other queued channel replies in Kubernetes-style deployments with many injected environment variables, where opening the queue database could stall the gateway. [#95278](https://github.com/openclaw/openclaw/pull/95278) Related [#94571](https://github.com/openclaw/openclaw/issues/94571). Thanks @kaka-srp. [v2026.6.11]
  - Fixes completed assistant messages appearing twice in Telegram, Discord, Slack, and other streamed chats after a multi-message reply. [#95432](https://github.com/openclaw/openclaw/pull/95432) Thanks @vincentkoc, @yetval. [v2026.6.11]
  - Fixes WhatsApp group replies that could quote an older OpenClaw message instead of the user's triggering message, so final answers stay attached to the intended message when a reply target is available and avoid pointing back to stale bot context when it is not. [#95914](https://github.com/openclaw/openclaw/pull/95914) Thanks @mcaxtr. [v2026.6.11]
  - Fixes manifest-defined providers turning valid model IDs into broken ones when `stripPrefixes` entries have stray spaces or different casing, so operators and plugin authors get the intended provider model. [#95744](https://github.com/openclaw/openclaw/pull/95744) Related [#95743](https://github.com/openclaw/openclaw/issues/95743). Thanks @parveshsaini. [v2026.6.11]
  - Fixes delivered replies sometimes being saved to the wrong conversation history, or omitted from it, when operators use a custom or per-agent `session.store`, improving continuity and auditability for the intended session. [#95782](https://github.com/openclaw/openclaw/pull/95782) Related [#95781](https://github.com/openclaw/openclaw/issues/95781). Thanks @youngting520. [v2026.6.11]
  - Fixes assistant replies disappearing from webchat, Control UI, Feishu, and other embedded conversations after compaction, keeping refreshed chats readable and follow-up requests separate. [#95484](https://github.com/openclaw/openclaw/pull/95484) Related [#76729](https://github.com/openclaw/openclaw/issues/76729). Thanks @maweibin, @njuboy11, @vincentkoc. [v2026.6.11]
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
