# Daily AI Product Delta

- Generated at: 2026-10-12T00:51:38+08:00
- Requested window: 2026-10-11 to 2026-10-12
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-10-11 to 2026-10-12
- Generated at: 2026-10-12T00:51:20.255054+08:00
- 窗口: 2026-10-11 至 2026-10-12
- GitHub 增量: 577 commits / 2 releases
- 最近 push: 2026-10-11
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - **Worker-local inference:** add a native worker inference runtime with Gateway dispatch, client placement, required worker policy and destination checks before local inference, and clear setup-failure explanations. (#158902, #163645, #163646, #163647, #166611, #166613, #165960) Thanks @RomneyDa. [v2026.10.5-beta.1]
  - **X channel:** add the X (Twitter) mentions channel plugin with Activity API streaming and backfill, repository-question guest mode with hidden same-agent helpers, GitHub-verified repository writers, and daily and monthly X API cost limits. (#165138, #165337, #165376, #165354, #165543, #168071, #165351) Thanks @obviyus. [v2026.10.5-beta.1]
  - **Channel progress:** show useful Telegram and Discord progress by default, add per-tool glyphs to Discord progress drafts, restore per-tool emoji on Telegram tool rows, and hide routine Slack reaction rows. (#166861, #168032, #167392, #166880) Thanks @obviyus, @keshavbotagent, and @notmnp. [v2026.10.5-beta.1]
  - **Anthropic and Claude CLI:** support Claude Haiku 5.5, show newly listed Claude models without waiting for an OpenClaw release, list each Claude CLI model once, and keep logged-out Claude CLI models listed with a login reason. (#166706, #167658, #166311, #166338, #167942) Thanks @RomneyDa and @obviyus. [v2026.10.5-beta.1]
  - **OpenAI:** support custom realtime voice endpoints, show account chat models missing from the manifest, surface new ChatGPT-login models without a release, and stop offering ChatGPT-only or bundled-Codex-rejected models that would fail. (#165632, #162563, #167387, #167633, #167975) Thanks @jacobtomlinson and @obviyus. [v2026.10.5-beta.1]
  - **Voice calls:** add per-call briefs, call reports, live steering, callbacks, and voicemail detection to voice calls. (#165716) Thanks @mbelinky and @jacobtomlinson. [v2026.10.5-beta.1]
  - **Control UI customization:** let themes customize Control UI branding, use agent avatars or unlocked Lobsterdex icons for browser tabs, choose favicon shapes, and add seven Lobsterdex character variants. (#168027, #165201, #166325, #167809, #159815) Thanks @vyctorbrzezowski, @jacobtomlinson, and @hannesrudolph. [v2026.10.5-beta.1]
  - **Terminal:** add configurable terminal fonts with built-in Nerd Font icons. (#166180) Thanks @jacobtomlinson. [v2026.10.5-beta.1]
- Fixes and constraints:
  - **Telegram:** keep streamed replies from vanishing when their replacement never lands, retry preview edits after transient errors, keep delegated progress and media-run progress cards live, honor explicit reply tags during partial streaming, keep pending questions through settings commands, restore verbose diagnostics, treat GIFs as videos, and harden spooled turn adoption. (#164649, #165072, #166101, #167362, #167895, #168004, #168016, #168011, #103695, #167470) Thanks @jayzhou2309, @obviyus, @jmar5439, @vincentkoc, and @mgr-nick. [v2026.10.5-beta.1]
  - fix: retain Discord native commands in conversation history (#169200)
  - fix(test): isolate built smoke runtime state
  - fix(ui): repair Activity and Usage test contracts
  - fix(ui): bound shared boot chunks after Solid ports
  - perf(sessions): reuse transcript projection facts within reads (#169201)
  - fix(build): keep Solid tag declarations in the shared owner
  - fix(ui): await rendered palette settings readiness in tests
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
