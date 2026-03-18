# OpenClaw Research

This project is the canonical workspace for整理 OpenClaw 产品、生态、部署方式、安全边界和本机上下文。它的目标不是一次性写完，而是沉淀一套后续可持续复用的知识底座。

初始化日期：2026-03-15

## Start Here

- 先读 `docs/overview.md`，拿到当前基线。
- 再读 `memory/openclaw-memory.md`，拿到可长期复用的事实与假设。
- 如需追来源，查 `docs/source-map.md`。
- 如果任务涉及多产品对比，补看 `docs/multi-product-source-map.md`。
- 如果任务涉及“关键跳变日”的判断口径或漏点复核，补看 `docs/jump-date-audit.md`。
- 每次新增有效信息，都要更新 `docs/research-log.md`，并把可长期复用的结论提升到记忆层。

## Project Layout

- `AGENTS.md`: 这个目录下的工作约定，确保后续任务会回写记忆。
- `docs/overview.md`: 当前产品总览和系统地图。
- `docs/github-scan.md`: 基于 GitHub 的背景、能力与更新节奏扫描。
- `docs/timeline-daily.md`: 按阶段 + 按天拆开的 GitHub 能力时间轴。
- `docs/timeline-heatmap.md`: 日期为竖轴、7 个能力轴为横轴的热力图矩阵。
- `public/timeline-heatmap.html`: 可直接打开的多产品迭代图网页；当前已接入 `OpenClaw / ChatGPT / Claude / Codex CLI / Claude Code CLI / Codex App`。
- `public/product-data.js`: 其余 5 个产品的时间轴、关键跳变日、最近一次官方增量和更新频次基线数据。
- `public/heatmap-incremental.js`: 日更累积的最新日期矩阵行，供网页把增量并回主矩阵。
- `public/activity-data.js`: 网页使用的日级 merged PR 活动数据。
- `public/latest-delta.js`: 网页使用的最近 24 小时增量数据。
- `public/daily-ai-product-delta.json`: 供 skill 和外部自动化读取的 6 产品统一 digest。
- `public/daily-ai-product-delta.md`: 人类可读的 6 产品统一 digest。
- `docs/weekly-automation.md`: 当前自动扫描与自动发布的调度说明。
- `docs/source-map.md`: 官方来源与本地资料清单。
- `docs/multi-product-source-map.md`: `ChatGPT / Claude / Codex CLI / Claude Code CLI / Codex App` 的官方来源清单。
- `docs/jump-date-audit.md`: 6 个产品关键跳变日的判断口径、当前可信度和疑似漏点审计。
- `docs/research-log.md`: 按日期递增的研究日志。
- `memory/openclaw-memory.md`: 人类可读的长期记忆。
- `memory/daily-pr-activity.json`: 日级 merged PR 活动缓存。
- `memory/heatmap-incremental-rows.json`: 日更累积的主矩阵增量行缓存。
- `memory/latest-delta.json`: 最近 24 小时增量的结构化缓存。
- `memory/daily-ai-product-delta.json`: 6 产品统一 digest 的本地缓存。
- `memory/openclaw-facts.json`: 机器可读的结构化事实。
- `reports/current/`: 最新 GitHub 快照输出。
- `reports/weekly/`: GitHub 增量扫描输出的历史目录。
- `scripts/openclaw_weekly_scan.py`: GitHub 增量扫描脚本。
- `scripts/build_pr_activity_dataset.py`: 生成日级 merged PR 活动数据的脚本。
- `scripts/build_site_assets.py`: 生成网页增量数据并同步 `index.html` 的脚本。
- `scripts/build_daily_product_digest.mjs`: 生成 6 产品统一 digest 的脚本。
- `skills/daily-ai-product-delta/`: 可安装 skill，供其他 agent 读取统一 digest 并按产品输出最近增量。
- `.github/workflows/update-daily.yml`: 公开仓库版的 GitHub Actions 日更骨架。
- `automation/ai.openclaw.weekly-scan.plist`: 旧版 `launchd` 周更源文件。
- `automation/ai.openclaw.daily-update.plist`: 日更版本的 `launchd` 源文件。
- `templates/research-update.md`: 追加研究结论时的模板。

## Source Priority

1. 官方文档：`docs.openclaw.ai`
2. 官方仓库与 release：`github.com/openclaw/openclaw`
3. 本机已有项目和资料
4. 社区帖子、访谈、二手解读

## Maintenance Rule

- 时间敏感信息必须带验证日期。
- 事实、推断、待验证问题分开写。
- 任何值得跨任务复用的信息，都要同步到 `/Users/gavin/.codex/memories/openclaw-project.md`。
- 每天 20:00（Asia/Shanghai）自动跑一次 GitHub 增量扫描，输出到 `reports/weekly/` 的最新文件。
- 同一轮日更会刷新日级 `merged PR/day` 活动缓存、最近 24 小时增量数据、主矩阵增量行缓存、6 产品统一 digest，并自动重发到 Vercel。
- 当前自动日更仍只有 `OpenClaw` 是 true rolling 24h feed；其余 5 个产品先以最近一波官方 dated update 输出到统一 digest，后续再逐个接每日抓取。
- 如需把这个项目公开成可 star 的仓库，优先沿用当前 repo 结构：`public/` 提供静态站点与 JSON 端点，`skills/` 提供可安装 skill，`.github/workflows/` 提供 GitHub Actions 日更骨架。
- 对外默认访问地址现在建议使用 `https://ai-product-capability-timeline.vercel.app`；`https://aievo.vercel.app` 和 `https://openclaw-capability-timeline.vercel.app` 仅保留兼容访问。
