# Daily AI Product Delta

- Generated at: 2026-05-19T22:27:33+08:00
- Requested window: 2026-05-18 to 2026-05-19
- Coverage: 6 products
- Live 24h feeds: 1
- Latest official wave snapshots: 5
- Note: OpenClaw is currently the only true daily 24-hour feed. The other five products still expose the latest official dated update window until their collectors are automated.

## OpenClaw

- Freshness: live_24h
- Window: 2026-05-18 to 2026-05-19
- Generated at: 2026-05-19T22:27:17.143063+08:00
- 窗口: 2026-05-18 至 2026-05-19
- GitHub 增量: 132 commits / 3 releases
- 最近 push: 2026-05-19
- 来源: GitHub releases / commits / merged PR
- 自动化状态: 已接每天 20:00 自动刷新
- Feature signals:
  - Docker/Podman: add `OPENCLAW_IMAGE_APT_PACKAGES` as the runtime-neutral image build arg for extra apt packages while keeping `OPENCLAW_DOCKER_APT_PACKAGES` as a legacy fallback. (#62431) Thanks @urtabajev. [v2026.5.19-beta.1]
  - Mac app: redesign Settings pages with consistent card layouts, cached navigation, cleaner permissions/voice/skills/cron/exec/debug panes, and steadier spacing around the native sidebar. [v2026.5.19-beta.1]
  - Skills: add a meme-maker skill for curated template search, local SVG/PNG rendering, Imgflip hosted rendering, and Know Your Meme provenance links. [v2026.5.19-beta.1]
  - Browser CLI: add `openclaw browser evaluate --timeout-ms` so long-running page functions can extend both the evaluate action and request timeout budgets. (#83447) Thanks @eefreenyc. [v2026.5.19-beta.1]
  - Skills: add node inspector debugging, fused diagram generation, and throwaway spike workflow skills. [v2026.5.19-beta.1]
  - CLI/plugins: add `defineToolPlugin` plus `openclaw plugins build`, `validate`, and `init` for typed simple tool plugins with generated manifest metadata, optional tool declarations, and context factories. [v2026.5.19-beta.1]
  - Skills: add a Python debugging skill for pdb, breakpoint(), post-mortem inspection, and debugpy remote attach. [v2026.5.19-beta.1]
  - Plugins/messages: add presentation capability limits for channel renderers, adapt rich message controls before native rendering, and mark legacy `interactive`/Slack directive producer APIs as deprecated. [v2026.5.19-beta.1]
- Fixes and constraints:
  - Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation. [v2026.5.19-beta.1]
  - Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation. [v2026.5.18]
  - Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation. [v2026.5.18-beta.1]
  - fix(cli): preserve first line of channels logs at window boundary (#84106)
  - Fix config queue overrides for Matrix (#84104)
  - fix(media): decode remote URL fallback filenames (#84108)
  - fix(cli): preserve equals in root option values [AI-assisted] (#84107)
  - fix(cli): reject out-of-range port numbers in parsePort (#83900) (#84008)
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
