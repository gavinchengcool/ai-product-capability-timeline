# AGENTS.md

## Mission

这个目录是 OpenClaw 的长期知识库。所有在这里进行的工作都应当服务于两个目标：

- 把 OpenClaw 讲清楚
- 把可复用记忆沉淀下来

## Required Reading

开始任何任务前，优先阅读：

- `README.md`
- `docs/overview.md`
- `memory/openclaw-memory.md`

## Research Rules

- 优先使用官方来源：`docs.openclaw.ai` 与 `github.com/openclaw/openclaw`
- 任何时效性事实都要写清楚验证日期
- 把“事实”和“推断”分开标注
- 如果发现 `OpenClaw`、`clawdbot`、`clawd` 等命名交叉，除非有官方证据，否则不要直接当成完全同义

## Memory Rules

- 新增长期有效的结论时，更新 `memory/openclaw-memory.md`
- 新增结构化事实时，更新 `memory/openclaw-facts.json`
- 每次有实质更新时，在 `docs/research-log.md` 追加一条带日期的记录
- 跨任务也应该记住的内容，要同步到 `/Users/gavin/.codex/memories/openclaw-project.md`
- GitHub 周扫描相关输出默认看 `reports/current/` 与 `reports/weekly/`

## Writing Style

- 先给结论，再给证据
- 避免大段复制原文，优先归纳
- 对不确定事项明确写成 `Open question`
