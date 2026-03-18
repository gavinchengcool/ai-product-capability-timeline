# Jump-Date Audit

最后整理日期：2026-03-16

## 当前结论

- 不能说这 6 个产品当前的“关键跳变日”已经没有遗漏。
- 现在这套结果更接近 `v1.5 基线`，不是“逐版本穷尽审计版”。
- `Codex CLI / Claude Code CLI / Codex App` 已完成第二轮逐版本复核，关键跳变日比首版更完整，但仍不能宣称“已经穷尽”。
- `OpenClaw / ChatGPT / Claude` 的官方版本线相对更完整；接下来更需要补的是外部热度校验，而不是继续只看官方 release notes。
- 社交媒体里的讨论热度和评价，应该纳入判断，但只能做 `第二证据层`，不能脱离官方版本线单独决定关键跳变日。

## 跳变日判断口径

### 第一层：官方跃迁信号

优先看官方是否发生了下面几类变化：

1. 产品面发生结构性变化  
   例如：从聊天框变成工作台、从单助手变成平台、从 CLI 变成多代理系统。
2. 使用人群显著扩大  
   例如：免费用户开放、移动端上线、团队版 / 企业版进入主线。
3. 工作流被重写  
   例如：Artifacts、Projects、Code Interpreter、Research、remote control、plugin system。
4. 新能力不是短期实验，而是持续留在主线  
   例如：GA、正式并入默认体验、后续数个版本继续围绕它增强。

### 第二层：外部热度信号

外部讨论不直接定义跳变日，但可以决定某个官方版本是否应该“升格”为跳变日。优先看：

1. Hacker News / Reddit / X 上是否出现明显讨论峰值
2. GitHub stars、issues、forks、release reaction 是否明显抬升
3. App 安装量、榜单、评论、用户自发复刻 / 教程 / Show HN 是否集中爆发
4. 是否出现大量“二次产品化”现象  
   例如：一个新功能发布后，社区迅速围绕它做模板、封装、替代品、工作流文章

### 实际执行规则

- 一个日期要进入“关键跳变日”，至少要满足：`官方跃迁强`。
- 如果官方跃迁中等，但外部热度和后续持续性都很强，也可以升格。
- 只有社交媒体热度、没有官方产品跃迁的日期，不进入关键跳变日，只能作为旁证。

## 当前 6 个产品的复核状态

| 产品 | 当前可信度 | 当前判断 | 第二轮复核重点 |
| --- | --- | --- | --- |
| OpenClaw | 中 | GitHub release / commit 线很密，官方版本线强，但社区外部热度证据还没系统并入 | GitHub stars 增长、issues 讨论、社区教程、X/Reddit 反馈 |
| ChatGPT | 中 | 官方版本线已补到 2024 年，但哪些日期应该升格为“关键跳变日”还可以更细 | `Memory / Advanced Voice / Canvas / Projects` 是否该升格 |
| Claude | 中 | 官方版本线比之前完整很多，但 `Artifacts -> Projects -> Desktop -> Research` 仍需更细分层 | `Projects / Artifacts GA / Google Docs / Desktop / Research` 的升格判断 |
| Codex CLI | 中 | 第二轮已把 `2025-08-15 / 2025-12-02 / 2026-01-09 / 2026-03-05` 升格进 jump dates，结构更完整 | 继续检查 `2026-02-25` 是否也该单独升格，以及 release reactions 与社区教程扩散 |
| Claude Code CLI | 中 | 第二轮已把 `2025-03-05 / 2025-08-27 / 2026-02-06` 升格进 jump dates，workflow 层变化更完整 | 继续检查 `2026-03-04` 与 rate-limit / pricing 这类“边界变化”是否该单列 |
| Codex App | 中偏低 | 官方时间线仍短，但首发日的社区热度已被证实很强，launch confidence 明显上升 | App 安装量、Windows 发布后真实使用反馈、额度体系变更后的用户评价 |

## 当前最可能的疑似漏点

这些不是已经确认要加入的跳变日，而是第二轮最值得复核的候选日期。

### OpenClaw

- `2026-01-12`：plugin first-class 与 voice call plugin
- `2026-02-27`：external secrets、ACP thread-bound agents、agent bindings CLI
- `2026-03-08`：ContextEngine plugin 化
- `2026-03-09`：backup / remote gateway token / provenance

### ChatGPT

- `2024-04-29`：Memory 主线化
- `2024-11-19`：更完整的多模态 / voice 工作面
- `2024-12-10`：Canvas 已是 jump date，但还需要补外部热度证据

### Claude

- `2024-06-25`：Projects
- `2024-08-27`：Artifacts GA
- `2024-11-21`：Google Docs integration
- `2024-12-20`：custom instructions / styles 一组能力是否足够“跳变”

### Codex CLI

- `2026-02-25`：plugins、marketplace、multi-agent handoff、memory guardrails
- 第二轮复核后已确认并升格的日期：
  - `2025-08-15`：auth / full-access warning / MCP / OAuth 加强
  - `2025-12-02`：thread / turn metadata、review detached、observability
  - `2026-01-09`：fork / requirements / sandbox upgrade / skills API
  - `2026-03-05`：plugin system / marketplace / multi-agent handoff / memory guardrails

### Claude Code CLI

- `2026-03-04`：更复杂任务工作流补齐
- 第二轮复核后已确认并升格的日期：
  - `2025-03-05`：slash commands、MCP debug 等早期开发者工作流能力
  - `2025-08-27`：`/memory` 可编辑、`/todos`、SDK 工具回调
  - `2026-02-06`：teammate 事件与 agent memory frontmatter

### Codex App

- `2026-02-02`：Mac App 首发，且有强社区首发热度支撑
- `2026-03-04`：Windows 上线
- `2026-03-10`：额度体系并轨
- 还需要复核：是否有“1M Mac installs in first week”这一类 adoption 证据可支撑升格强度

## 已经拿到的外部热度样本

这些样本说明“社交讨论 / 社区反馈”确实可以作为跳变日的第二证据层。

- `ChatGPT` 首发：Hacker News `408 points / 232 comments`
  - <https://news.ycombinator.com/item?id=33804874>
- `ChatGPT / GPT-4o`：Hacker News `3138 points / 2366 comments`
  - <https://news.ycombinator.com/item?id=40345775>
- `Claude 3.7 Sonnet + Claude Code`：Hacker News `2127 points / 963 comments`
  - <https://news.ycombinator.com/item?id=43163011>
- `Codex CLI` 首发：Hacker News `516 points / 289 comments`
  - <https://news.ycombinator.com/item?id=43708025>
- `Codex App` 首发：Hacker News `805 points / 638 comments`
  - <https://news.ycombinator.com/item?id=46859054>
- `Claude Artifacts` 的持久影响，更像“社区复刻潮”而不是单次首发帖爆炸
  - <https://news.ycombinator.com/item?id=41929174>
- `Codex App / Windows`：Hacker News `10 points / 1 comment`
  - <https://news.ycombinator.com/item?id=47251353>
- `Claude Code` rate-limit / boundary discussion：Hacker News `609 points / 705 comments`
  - <https://news.ycombinator.com/item?id=44713757>

## 这份审计对项目的含义

- 以后不能再把“关键跳变日”当成纯主观挑选结果。
- 需要把它改成：`官方版本跃迁 + 外部热度校验 + 持续性复核`。
- 当前网页里的关键跳变日应视为 `v1.5`，不是最终版。
- `Codex CLI / Claude Code CLI / Codex App` 的第二轮复核结果已经写入 `public/product-data.js`。
- 下一轮如果继续补，我应该优先做：
  1. `ChatGPT / Claude` 的 2024-2025 社交热度校验
  2. `OpenClaw` 的 GitHub 外社区信号并入
  3. `Codex App` 的 adoption / reviews / platform rollout 证据加固

## 主要来源

- ChatGPT release notes：<https://help.openai.com/en/articles/6825453-chatgpt-release-notes>
- Claude release notes：<https://support.claude.com/en/articles/12138966-release-notes>
- OpenAI Codex 官方发布页：<https://openai.com/index/introducing-codex/>
- OpenAI Codex GitHub releases：<https://github.com/openai/codex/releases>
- Anthropic Claude 3.7 / Claude Code 官方页：<https://www.anthropic.com/news/claude-3-7-sonnet>
- Anthropic Claude Code GitHub releases：<https://github.com/anthropics/claude-code/releases>
- Hacker News item: ChatGPT launch：<https://news.ycombinator.com/item?id=33804874>
- Hacker News item: GPT-4o：<https://news.ycombinator.com/item?id=40345775>
- Hacker News item: Claude 3.7 Sonnet and Claude Code：<https://news.ycombinator.com/item?id=43163011>
- Hacker News item: OpenAI Codex CLI：<https://news.ycombinator.com/item?id=43708025>
- Hacker News item: Codex App launch：<https://news.ycombinator.com/item?id=46859054>
- Hacker News item: Claude Code weekly rate limits：<https://news.ycombinator.com/item?id=44713757>
