# OpenClaw Memory

最后更新：2026-03-17

## Canonical Workspace

- 项目目录：`/Users/gavin/Projects/openclaw-research`
- 全局记忆：`/Users/gavin/.codex/memories/openclaw-project.md`

## Durable Facts

- OpenClaw 的官方知识入口目前应优先看 `docs.openclaw.ai` 与 `github.com/openclaw/openclaw`
- OpenClaw 的官方定位是个人 AI assistant，而不是默认面向敌对多租户共享场景的代理平台
- 截至 2026-03-15，官方仓库页显示使用 `MIT` 许可证
- 截至 2026-03-15，官方仓库 README 显示安装基线为 Node.js `>= 22`
- 截至 2026-03-15，GitHub 最新可见 release 为 `2026.3.13`，发布时间显示为 2026-03-14
- 截至 2026-03-15，GitHub API 显示仓库创建于 2025-11-24，stars 为 314,097，forks 为 59,965，open issues 为 13,968
- 截至 2026-03-15，GitHub API 样本中共有 68 个 releases，其中 58 个是 stable releases
- OpenClaw 的 GitHub 发布节奏非常快，2026-03 上旬基本呈现 stable / beta 双线高频发布
- GitHub 命名演进路径已经明确可见：`warelay -> clawdis -> clawdbot -> openclaw`
- 日级时间轴的主文件是 `docs/timeline-daily.md`
- 日期 x 7 轴的热力图主文件是 `docs/timeline-heatmap.md`
- 可直接打开的网页版本在 `public/timeline-heatmap.html`
- 网页里新增了一块社区提交频次图，当前口径是 `merged PR/day`，表达社区协作活跃度，不等于原始 commit 数
- 这块图的数据缓存文件是 `memory/daily-pr-activity.json`，前端数据文件是 `public/activity-data.js`
- 截至 2026-03-15 22:12:07+08:00，日级 merged PR 数据覆盖 `2025-11-25` 到 `2026-03-14`，峰值日是 `2026-03-03`，当天 `209 merged PR`
- 这份多产品网页现在推荐使用新的通用别名：`https://ai-product-capability-timeline.vercel.app`
- 兼容地址目前包括 `https://aievo.vercel.app` 和 `https://openclaw-capability-timeline.vercel.app`
- 网页根路径现在直接服务主页面本体，不再要求用户访问带 `timeline-heatmap` 后缀的 URL
- 网页顶部新增了一块“最近 24 小时增量”面板，数据文件是 `memory/latest-delta.json` 和 `public/latest-delta.js`
- 当前已补出一个供 skill 与外部 agent 直接消费的统一端点：`memory/daily-ai-product-delta.json`、`public/daily-ai-product-delta.json`、`public/daily-ai-product-delta.md`
- 网页里的“关键跳变日”区块现在是独立单行面板：横轴是关键日期，日期下方直接展开该日的阶段名、一句话总结和具体说明，并保留点击联动到完整详情
- 主矩阵现在不只吃静态 `heatmap-data.js`：每天日更会把缺失的最新日期沉淀到 `memory/heatmap-incremental-rows.json` 和 `public/heatmap-incremental.js`，页面会自动把这层增量并回下方“能力迭代矩阵”
- 当前网页矩阵的 7 轴展示口径已经切到产品视角：`入口 / 智能内核 / 工具执行 / 设备 / 平台控制 / 安全治理 / 运维`；底层归类 key 仍沿用 `channels / models / tools / devices / control / security / ops`
- 当前网页已经不是单产品页，而是多产品导航框架：`OpenClaw / ChatGPT / Claude` 归为通用产品；`Codex CLI / Claude Code / Codex App` 归为开发者产品
- 当前 6 个产品都已接入真实数据页：`OpenClaw / ChatGPT / Claude / Codex CLI / Claude Code / Codex App`
- 其中 `ChatGPT / Claude / Codex CLI / Claude Code / Codex App` 的首版基线数据沉淀在 `public/product-data.js`
- 当前 repo 已新增可安装 skill：`skills/daily-ai-product-delta`
- 这个 skill 的 hosted 默认数据源是 `https://ai-product-capability-timeline.vercel.app/daily-ai-product-delta.json`
- 多产品的官方来源映射放在 `docs/multi-product-source-map.md`
- 多产品页现在共用同一套结构：关键跳变日、最近一次增量、频次图、能力迭代矩阵
- `OpenClaw` 继续使用自动日更的 GitHub 增量与 `merged PR/day`
- 其余 5 个产品当前是截至 2026-03-16 的官方基线快照，已完成真实页面接入，但还没有接自动日更脚本
- 当前统一 digest 也沿用这个 freshness 边界：`OpenClaw` 是 true rolling 24h feed，其余 5 个产品仍只输出“最近一波官方 dated update”
- `https://openclaw-bustly-map.vercel.app/` 已在 2026-03-16 用用户提供凭证验证；它目前是理解 OpenClaw 与 Bustly 边界的重要补充来源
- 该页明确的当前关系口径是：**OpenClaw 当前提供底座；Bustly 当前提供 merchant-facing productization**
- 该页明确 Bustly 当前仍主要运行在 OpenClaw 之上；客户端壳、gateway、runtime、session / binding 模型、skills substrate 与编排能力主要还是 OpenClaw
- 该页同时强调 Bustly 对商家仍然是完整产品；“merchant operator layer”表达的是价值链位置，不等于今天已经技术独立
- 该页给出的 phase 2 方向是：把已验证过的 merchant skills 与 execution layer 抽成可迁移、可插拔能力，未来可嵌入别的 agent 宿主

## Security Memory

- 讨论 OpenClaw 时，必须先明确“一个 gateway 对应一个信任边界”的假设
- 如果要给别人部署方案，默认推荐 hardened baseline，而不是直接公网暴露 gateway
- 任何涉及协作、团队共用、远程暴露的方案，都应先回看官方安全页

## Local Environment Memory

- 这台机器在 2026-03-15 没有把 `openclaw` CLI 放进 `PATH`
- 这台机器存在 OpenClaw 应用支持目录：`/Users/gavin/Library/Application Support/OpenClaw`
- 本机已有几个可复用资料源：
  - `openclaw-x-community` 项目
  - OpenClaw 深度研讨会 PDF
  - 本地 `Desktop/openclaw` 静态页面目录

## Architecture Facts

- 官方 docs 把 `Gateway` 描述为系统控制面与 WebSocket server；它负责承接 channels、sessions、agents、bindings 与路由，是运行时的单一控制中枢
- 官方 docs 把 `Skills` 做成分层覆盖模型：bundled skills、用户级 `~/.openclaw/skills`、工作区级 `./skills` 可以叠加与覆写
- 官方 docs 显示 macOS 端不是单纯聊天壳，而是 menu bar companion，并承接本机权限与本地 node 能力
- 官方 docs 与 GitHub README 都说明 OpenClaw 是多渠道、多设备、多交互面的 assistant product，不是单纯 SDK 或 coding agent
- 本机 `~/.openclaw` 目录已经验证出 agent、workspace、workspaces、browser、canvas、devices、credentials 等分层，说明这些概念在本地运行时里都有落地目录结构
- 本机 `~/.openclaw/agents/*/sessions/*.jsonl` 已经验证出 per-agent session store；本机 `~/.openclaw/workspace/skills` 也验证出工作区级 skills 目录存在

## Automation Memory

- GitHub 增量扫描的主脚本是 `/Users/gavin/Projects/openclaw-research/scripts/openclaw_weekly_scan.py`
- 日级 merged PR 数据的脚本是 `/Users/gavin/Projects/openclaw-research/scripts/build_pr_activity_dataset.py`
- 网页资产脚本是 `/Users/gavin/Projects/openclaw-research/scripts/build_site_assets.py`
- 统一 digest 脚本是 `/Users/gavin/Projects/openclaw-research/scripts/build_daily_product_digest.mjs`
- 手动触发命令是 `/Users/gavin/Projects/openclaw-research/scripts/run_weekly_update.sh`
- 旧的 `launchd` label 是 `ai.openclaw.weekly-scan`
- 当前有效日更调度是用户级 `crontab`，执行时间是每天 20:00，时区固定为 `Asia/Shanghai`
- 最新快照输出在 `reports/current/`，每周报告输出在 `reports/weekly/`
- 同一轮日更会顺带刷新社区提交频次图使用的 `merged PR/day` 缓存
- 同一轮日更会顺带刷新 `latest-delta.js`、`heatmap-incremental.js`，同步 `index.html`，并自动重发到 Vercel
- 同一轮日更现在还会顺带刷新 `daily-ai-product-delta.json` / `.md`
- 同一轮日更在 Vercel 发布完成后，会自动把最新正式部署重新绑定到 `ai-product-capability-timeline.vercel.app`
- 未来如果把当前目录拆成公开 GitHub repo，已经有一份现成的 Actions 骨架：`/Users/gavin/Projects/openclaw-research/.github/workflows/update-daily.yml`
- 多产品页面现在带产品切换 loading 过渡：点击导航后先显示 loader，目标产品页 render 完成后再淡入，避免页面乱跳
- 多产品时间轴的当前 Day One 口径要记住：
  - `ChatGPT`：`2022-11-30`
  - `Claude`：`2023-03-14`
  - `Codex CLI`：`2025-04-16`
  - `Claude Code CLI`：`2025-02-24`
  - `Codex App`：`2026-02-02`
- `Claude Code` 在页面展示层现在统一写成 `Claude Code CLI`
- `Codex CLI / Claude Code CLI` 的早期节奏补充时，可优先参考本地资料：
  - `/Users/gavin/codex_claude_cli_iteration_rhythm_20260305.html`
  - `/Users/gavin/Desktop/ai-cli-evolution.html`
- `ChatGPT / Claude` 的时间轴颗粒度已在 `2026-03-16` 被继续补细，不能再保留“首发后直接跳到 2025”的粗粒度表达
- 当前 `ChatGPT` 已补齐 `2022-12` 到 `2024-12` 的官方产品节点，`Claude` 已补齐 `2023-11` 到 `2025-05` 的官方产品节点
- “关键跳变日”当前只能视作 `v1 基线`，不能宣称已经无遗漏
- 从 `2026-03-16` 起，jump date 判断口径固定为：`官方版本跃迁` 为主，`社交媒体 / 社区热度` 为第二证据层
- `Codex CLI / Claude Code CLI / Codex App` 已在 `2026-03-16` 完成第二轮逐版本复核，并已把结果写回 `public/product-data.js`
- 当前 developer 产品线新增并确认的 jump dates 要记住：
  - `Codex CLI`：`2025-08-15`、`2025-12-02`、`2026-01-09`、`2026-03-05`
  - `Claude Code CLI`：`2025-03-05`、`2025-08-27`、`2026-02-06`
- `Codex App` 没新增 jump date，但 `2026-02-02` 首发日已被 HN 强讨论样本强化，不应再写成“外部证据偏弱”
- 当前下一轮优先级已经变成：`ChatGPT / Claude` 的 2024-2025 社交热度校验，以及 `OpenClaw` 的 GitHub 外社区信号并入
- `Codex CLI / Claude Code CLI` 顶部卡片的口径现在要记住：展示的是“最近一波官方增量”，不是单条 release
- `Codex CLI` 的最新一波官方增量窗口已修正为 `2026-03-05 -> 2026-03-11`，依据是 `openai/codex` 的 stable releases `rust-v0.110.0 -> rust-v0.114.0`
- `Claude Code CLI` 的最新一波官方增量窗口已修正为 `2026-03-04 -> 2026-03-14`，依据是 `anthropics/claude-code` 的 stable releases `v2.1.66 -> v2.1.76`
- 多产品页面已经做过一轮真正的移动端适配：
  - 手机端 `关键跳变日` 改成卡片流
  - 手机端 `能力迭代矩阵` 改成按天卡片流
  - 手机端频次图改成横向可滑宽图
  - 手机端导航改成单列栈式布局
- 旧的 `launchd` plist 文件仍然保留，但这台机器上重新装载时会返回泛化的 `Input/output error`，所以不要把它当成当前有效调度状态
- Vercel 项目名现在是 `aievo`，部署目录目前直接指向 `public/`

## Inferences

- `OpenClaw` 看起来是当前对外主品牌
- `clawdbot`、`clawd`、`clawhub` 与 OpenClaw 之间存在命名与历史演进关系，但目前还没有在本项目里完成官方级证据链
- 基于 `openclaw-bustly-map` 的当前表达，Bustly 更像建立在 OpenClaw 之上的 merchant client / operator layer，而不是已经分叉成独立 runtime 的 sister platform

## Open Questions

- OpenClaw 桌面端、gateway、cloud features 的边界怎么划分
- 官方文档中的“multi-agent routing”在实现上依赖哪些组件
- 本机已有安装资产对应哪个 release
- 本地 PDF 与官方文档在叙事上有哪些差异

## Memory Rule

- 先把新发现写进 `docs/research-log.md`
- 可长期复用的内容再提升到这里
- 需要跨任务复用的内容同步到全局记忆文件
