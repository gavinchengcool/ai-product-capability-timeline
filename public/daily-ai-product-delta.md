# Daily AI Product Delta

- Generated at: 2026-04-17T20:50:15+08:00
- Requested window: 2026-04-16 to 2026-04-17
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-04-16 to 2026-04-17
- Generated at: 2026-04-17T20:49:57.774661+08:00
- 窗口: 2026-04-16 至 2026-04-17
- GitHub 增量: 180 commits / 2 releases
- 最近 push: 2026-04-17
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Google/TTS: add Gemini text-to-speech support to the bundled `google` plugin, including provider registration, voice selection, WAV reply output, PCM telephony output, and setup/docs guidance. (#67515) Thanks @barronlroth. [v2026.4.15]
  - Control UI/Overview: add a Model Auth status card showing OAuth token health and provider rate-limit pressure at a glance, with attention callouts when OAuth tokens are expiring or expired. Backed by a new `models.authStatus` gateway method that strips credentials and caches for 60s. (#66211) Thanks @omarshahine. [v2026.4.15]
  - Memory/LanceDB: add cloud storage support to `memory-lancedb` so durable memory indexes can run on remote object storage instead of local disk only. (#63502) Thanks @rugvedS07. [v2026.4.15]
  - GitHub Copilot/memory search: add a GitHub Copilot embedding provider for memory search, and expose a dedicated Copilot embedding host helper so plugins can reuse the transport while honoring remote overrides, token refresh, and safer payload validation. (#61718) Thanks @feiskyer and @vincentkoc. [v2026.4.15]
  - Agents/local models: add experimental `agents.defaults.experimental.localModelLean: true` to drop heavyweight default tools like `browser`, `cron`, and `message`, reducing prompt size for weaker local-model setups without changing the normal path. (#66495) Thanks @ImLukeF. [v2026.4.15]
  - Google/TTS: add Gemini text-to-speech support to the bundled `google` plugin, including provider registration, voice selection, WAV reply output, PCM telephony output, and setup/docs guidance. (#67515) Thanks @barronlroth. [v2026.4.15-beta.2]
  - feat: add macOS screen snapshots for monitor preview (#67954) thanks @BunsDev
  - feat(ui): overhaul settings and slash command UX (#67819) thanks @BunsDev
- Fixes and constraints:
  - Security/approvals: redact secrets in exec approval prompts so inline approval review can no longer leak credential material in rendered prompt content. (#61077, #64790) [v2026.4.15]
  - Feishu/webhook: harden the webhook transport and card-action replay guards to fail closed on missing `encryptKey` and blank callback tokens — refuse to start the webhook transport without an `encryptKey`, reject unsigned requests when no key is present instead of accepting them, and drop blank card-action tokens before the dedupe claim and dispatcher. Defense-in-depth over the already-closed monitor-account layer. (#66707) Thanks @eleqtrizit. [v2026.4.15]
  - WhatsApp/Baileys media upload: harden encrypted upload handling so large outbound media sends avoid buffer spikes and reliability regressions. (#65966) Thanks @frankekn. [v2026.4.15]
  - fix: preserve hello-ok scopes for reused device tokens (#68039)
  - fix: report shared auth scopes in hello-ok (#67810) thanks @BunsDev
  - fix(macOS): enable undo/redo in webchat composer text input (#34962)
  - fix(auth): serialize OAuth refresh across agents to fix #26322 (#67876)
  - fix(memory-core): preserve vector dims on readonly recovery
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
