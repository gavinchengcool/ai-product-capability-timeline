# Update Automation

最后配置日期：2026-03-17

## Goal

每天 20:00（Asia/Shanghai）自动扫描 OpenClaw GitHub 最近 24 小时新增内容，把结果写回本项目、重建 6 产品统一 digest，并自动重发到 Vercel。

## Schedule

- 当前有效调度方式：用户级 `crontab`
- 时间：每天 20:00
- 时区：`Asia/Shanghai`
- Cron 行：

```cron
0 20 * * * /Users/gavin/Projects/openclaw-research/scripts/run_weekly_update.sh >> /Users/gavin/Projects/openclaw-research/logs/daily-update.log 2>> /Users/gavin/Projects/openclaw-research/logs/daily-update.err.log
```

## Source of Truth

- 旧版周更 plist：`/Users/gavin/Projects/openclaw-research/automation/ai.openclaw.weekly-scan.plist`
- 日更 plist 源文件：`/Users/gavin/Projects/openclaw-research/automation/ai.openclaw.daily-update.plist`
- LaunchAgent 入口：`/Users/gavin/Library/LaunchAgents/ai.openclaw.daily-update.plist`
- 执行脚本：`/Users/gavin/Projects/openclaw-research/scripts/run_weekly_update.sh`
- GitHub 增量主逻辑：`/Users/gavin/Projects/openclaw-research/scripts/openclaw_weekly_scan.py`
- 社区频次图脚本：`/Users/gavin/Projects/openclaw-research/scripts/build_pr_activity_dataset.py`
- 网页资产脚本：`/Users/gavin/Projects/openclaw-research/scripts/build_site_assets.py`
- 统一 digest 脚本：`/Users/gavin/Projects/openclaw-research/scripts/build_daily_product_digest.mjs`

## Outputs

- 最新快照：`/Users/gavin/Projects/openclaw-research/reports/current/github-snapshot.md`
- 最新快照 JSON：`/Users/gavin/Projects/openclaw-research/reports/current/github-snapshot.json`
- 每周报告：`/Users/gavin/Projects/openclaw-research/reports/weekly/YYYY/YYYY-MM-DD.md`
- 每周报告 JSON：`/Users/gavin/Projects/openclaw-research/reports/weekly/YYYY/YYYY-MM-DD.json`
- 最新周报快捷入口：`/Users/gavin/Projects/openclaw-research/reports/weekly/latest.md`
- 最新增量 JSON：`/Users/gavin/Projects/openclaw-research/reports/weekly/latest.json`
- 状态文件：`/Users/gavin/Projects/openclaw-research/memory/weekly-scan-state.json`
- 日级 merged PR 缓存：`/Users/gavin/Projects/openclaw-research/memory/daily-pr-activity.json`
- 最近 24 小时增量缓存：`/Users/gavin/Projects/openclaw-research/memory/latest-delta.json`
- 6 产品统一 digest 缓存：`/Users/gavin/Projects/openclaw-research/memory/daily-ai-product-delta.json`
- 主矩阵增量行缓存：`/Users/gavin/Projects/openclaw-research/memory/heatmap-incremental-rows.json`
- 前端活动数据：`/Users/gavin/Projects/openclaw-research/public/activity-data.js`
- 前端增量数据：`/Users/gavin/Projects/openclaw-research/public/latest-delta.js`
- 前端主矩阵增量数据：`/Users/gavin/Projects/openclaw-research/public/heatmap-incremental.js`
- 对外统一 digest JSON：`/Users/gavin/Projects/openclaw-research/public/daily-ai-product-delta.json`
- 对外统一 digest Markdown：`/Users/gavin/Projects/openclaw-research/public/daily-ai-product-delta.md`
- 线上主地址：`https://ai-product-capability-timeline.vercel.app`
- 兼容地址：`https://aievo.vercel.app`、`https://openclaw-capability-timeline.vercel.app`
- 日志：`/Users/gavin/Projects/openclaw-research/logs/daily-update.log`

## What The Job Collects

- Repo 当前体量：stars、forks、issues、最近 push 时间
- 最近 24 小时 release：stable / beta
- 最近 24 小时 commit 标题流
- 从 release notes 和 commit 标题里抽取的“新增能力信号”
- 最近 24 小时修复 / 加固信号
- 网页里“社区提交频次”图依赖的日级 `merged PR/day` 缓存
- 网页里“最近 24 小时增量”面板依赖的 `latest-delta.js`
- 网页主矩阵缺失的最近日期会被固化进 `heatmap-incremental.js`，保证下方矩阵会持续累积到最新一天
- 供 skill 与外部 agent 使用的 `daily-ai-product-delta.json` / `.md`
- Vercel 线上正式版重新部署
- 部署完成后，会把最新正式部署重新绑定到 `ai-product-capability-timeline.vercel.app`
- 当前绑定的 Vercel 项目名：`aievo`

## GitHub Publishing Scaffold

- 已新增 `.github/workflows/update-daily.yml`
- 计划调度：每天 `12:00 UTC`，等于 `20:00 Asia/Shanghai`
- 这份 workflow 适合未来把当前目录拆成公开 GitHub repo 后直接启用
- 当前线上权威调度仍然是本机 `crontab`；GitHub Actions 目前只是公开发布用骨架

## Manual Run

```bash
/Users/gavin/Projects/openclaw-research/scripts/run_weekly_update.sh
```

## Notes

- 这套自动化是 GitHub 视角，不等于官方完整产品能力盘点
- “新增能力”是基于 release notes 与 commit 标题的启发式抽取，适合做日增量入口，不适合替代人工深度分析
- “社区提交频次”当前用 GitHub `is:pr is:merged` 日级搜索结果做口径，它表达社区协作活跃度，不等于原始 commit 数
- `daily-ai-product-delta.json` 当前只有 `OpenClaw` 是 true rolling 24h feed；另外 5 个产品暂时仍输出“最近一波官方 dated update”
- 这台机器上旧的 `launchd` label 重新装载时会返回泛化的 `Input/output error`，所以当前有效日更调度以 `crontab` 为准；plist 仍保留作配置基线
