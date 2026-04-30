# Daily AI Product Delta

- Generated at: 2026-04-30T21:15:40+08:00
- Requested window: 2026-04-29 to 2026-04-30
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-04-29 to 2026-04-30
- Generated at: 2026-04-30T21:15:21.193722+08:00
- 窗口: 2026-04-29 至 2026-04-30
- GitHub 增量: 540 commits / 2 releases
- 最近 push: 2026-04-30
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Agents/commitments: add opt-in inferred follow-up commitments with hidden batched extraction, per-agent/per-channel scoping, heartbeat delivery, CLI management, a simple `commitments.enabled`/`commitments.maxPerDay` config, and heartbeat-interval due-time clamping so magical check-ins do not echo immediately. (#74189) Thanks @vignesh07. [v2026.4.29-beta.1]
  - Messages/queue: make `steer` drain all pending Pi steering messages at the next model boundary, keep legacy one-at-a-time steering as `queue`, and add a dedicated steering queue docs page. Thanks @vincentkoc. [v2026.4.29-beta.1]
  - Messages: add global `messages.visibleReplies` so operators can require visible output to go through `message(action=send)` for any source chat, while `messages.groupChat.visibleReplies` stays available as the group/channel override. Thanks @scoootscooob. [v2026.4.29-beta.1]
  - Memory/wiki: add agent-facing people wiki metadata, canonical aliases, person cards, relationship graphs, privacy/provenance reports, evidence-kind drilldown, and search modes for person lookup, question routing, source evidence, and raw claims. Thanks @vincentkoc. [v2026.4.29-beta.1]
  - Active Memory: add optional per-conversation `allowedChatIds` and `deniedChatIds` filters so operators can enable recall only for selected direct, group, or channel conversations while keeping broad sessions skipped. (#67977) Thanks @quengh. [v2026.4.29-beta.1]
  - Gateway/memory: add a read-only `doctor.memory.remHarness` RPC so operator clients can preview bounded REM dreaming output without running mutation paths. (#66673) Thanks @samzong. [v2026.4.29-beta.1]
  - Providers/NVIDIA: add the NVIDIA provider with API-key onboarding, setup docs, static catalog metadata, and literal model-ref picker support so NVIDIA hosted models can be selected with their provider prefix intact. (#71204) Thanks @eleqtrizit. [v2026.4.29-beta.1]
  - Added SQLite-backed plugin state store (`api.runtime.state.openKeyedStore`) for restart-safe keyed registries with TTL, eviction, and automatic plugin isolation. Thanks @amknight. [v2026.4.29-beta.1]
- Fixes and constraints:
  - Security/outbound: strip re-formed HTML tags during plain-text sanitization so nested tag fragments cannot leave a CodeQL-detected `<script>` sequence behind. Thanks @vincentkoc. [v2026.4.29-beta.1]
  - Security/secrets: compare credential bytes with padded timing-safe buffers instead of hashing candidate passwords before equality checks. Thanks @vincentkoc. [v2026.4.29-beta.1]
  - Security/QQBot: sanitize debug log arguments before writing to `console.*`, so gateway payload fields cannot forge extra log lines when debug logging is enabled. Thanks @vincentkoc. [v2026.4.29-beta.1]
  - Security/audit: resolve configured model aliases before model-tier and small-parameter checks, so alias-based GPT-5/Codex configs no longer report false weak-model warnings. Fixes #74455. Thanks @blaspat. [v2026.4.29-beta.1]
  - Docs/Hetzner: clarify that SSH tunnel access requires `AllowTcpForwarding local` before running `ssh -L`, so hardened VPS sshd configs do not block loopback Gateway access. Fixes #54557; carries forward #54564; refs #54954. Thanks @satishkc7, @blackstrype, and @Aftabbs. [v2026.4.29-beta.1]
  - Gateway/shutdown: report structured shutdown warnings and HTTP close timeout warnings through `ShutdownResult` while preserving lifecycle hook hardening. Carries forward #41296. Thanks @edenfunf. [v2026.4.29-beta.1]
  - Security/audit: recognize dangerous node command IDs as valid `gateway.nodes.denyCommands` entries, so audit only warns on real typos or unsupported patterns. (#56923) Thanks @chziyue. [v2026.4.29-beta.1]
  - Security/Telegram: load Telegram security adapters in read-only audit/doctor, audit malformed Telegram DM `allowFrom` entries even when groups are disabled, and keep allowlist DM audits from counting stale pairing-store senders, so public/shared-DM risk checks stay accurate. Refs #73698. Thanks @xace1825. [v2026.4.29-beta.1]
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
