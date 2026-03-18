# Multi-Product Source Map

最后整理日期：2026-03-16

## OpenAI

### ChatGPT

- ChatGPT launch post：<https://openai.com/blog/chatgpt/>
- ChatGPT release notes：<https://help.openai.com/en/articles/6825453-chatgpt-release-notes>
- 当前 `2022-12 -> 2024-12` 的细颗粒节点主要按 ChatGPT release notes 的带日期条目抽取

### Codex CLI / Codex App

- Introducing Codex：<https://openai.com/index/introducing-codex/>
- Introducing upgrades to Codex：<https://openai.com/index/introducing-upgrades-to-codex/>
- GPT-5.2-Codex in Codex：<https://openai.com/index/introducing-gpt-5-2-codex/>
- Introducing GPT-5.3-Codex：<https://openai.com/index/introducing-gpt-5-3-codex/>
- Codex Security：<https://openai.com/index/codex-security/>
- The Codex App: a command center for agents：<https://openai.com/index/the-codex-app-a-command-center-for-agents/>
- Using Codex with your ChatGPT plan：<https://help.openai.com/en/articles/11096431-using-codex-with-your-chatgpt-plan>
- Model release notes：<https://help.openai.com/en/articles/9624314-model-release-notes>
- OpenAI Codex official releases：<https://github.com/openai/codex/releases>
- OpenAI Codex release API：<https://api.github.com/repos/openai/codex/releases?per_page=100>

## Anthropic

### Claude

- Introducing Claude：<https://www.anthropic.com/news/introducing-claude>
- Claude release notes：<https://support.claude.com/en/articles/12138966-release-notes>
- 当前 `2023-11 -> 2025-05` 的细颗粒节点主要按 Claude release notes 与 Anthropic 官方新闻页抽取

### Claude Code CLI

- Claude Code overview：<https://docs.claude.com/en/docs/claude-code/overview>
- Claude Code quickstart：<https://docs.claude.com/en/docs/claude-code/quickstart>
- Claude Code official releases：<https://github.com/anthropics/claude-code/releases>
- Claude Code release API：<https://api.github.com/repos/anthropics/claude-code/releases?per_page=100>

## Secondary Evidence

- Hacker News: ChatGPT launch：<https://news.ycombinator.com/item?id=33804874>
- Hacker News: GPT-4o：<https://news.ycombinator.com/item?id=40345775>
- Hacker News: Claude 3.7 Sonnet and Claude Code：<https://news.ycombinator.com/item?id=43163011>
- Hacker News: OpenAI Codex CLI：<https://news.ycombinator.com/item?id=43708025>
- Hacker News: Claude Code weekly rate limits：<https://news.ycombinator.com/item?id=44713757>
- Hacker News: Codex App launch：<https://news.ycombinator.com/item?id=46859054>
- Hacker News: Codex App Windows：<https://news.ycombinator.com/item?id=47251353>

## Local Reference Artifacts

- Codex CLI vs Claude Code CLI 迭代节奏复盘：`/Users/gavin/codex_claude_cli_iteration_rhythm_20260305.html`
- AI CLI Evolution 能力图谱：`/Users/gavin/Desktop/ai-cli-evolution.html`

## Notes

- 这份多产品页面当前采用一套统一的 7 轴产品视角：`入口 / 智能内核 / 工具执行 / 设备 / 平台控制 / 安全治理 / 运维`
- `OpenClaw` 仍是唯一接入“每天 20:00 自动抓 GitHub 增量并自动重发到 Vercel”的产品
- `ChatGPT / Claude / Codex CLI / Claude Code CLI / Codex App` 这 5 个页面目前是基于 2026-03-16 官方带日期更新整理出的基线，已经接入统一页面，但尚未接入自动日更脚本
- 其中 `ChatGPT / Claude` 已按用户反馈补细 2023-2024 的中间产品里程碑，避免从首发直接跳到 2025
- “关键跳变日”不再只看官方版本线；从 `2026-03-16` 开始，项目会把 HN / Reddit / X / GitHub / App 评价等外部热度作为第二证据层
- `Codex CLI / Claude Code CLI / Codex App` 已在 2026-03-16 做过第二轮 jump-date 复核，具体升格日期见 `docs/jump-date-audit.md`
- 具体的判断规则、当前可信度和疑似漏点已单独整理到 `docs/jump-date-audit.md`
