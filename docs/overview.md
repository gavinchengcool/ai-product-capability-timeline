# OpenClaw Overview

最后验证日期：2026-03-15

## One-Line Definition

OpenClaw 是一个开源的个人 AI assistant 产品，强调让助手运行在用户自己的设备与账号体系上，并能跨聊天渠道、语音、工具和自动化流程执行任务。

## Verified Baseline

- 官方文档入口：<https://docs.openclaw.ai/>
- 官方仓库：<https://github.com/openclaw/openclaw>
- 官方安全页：<https://docs.openclaw.ai/security>
- 2026-03-15 可见的 GitHub 最新 release：`2026.3.13`，发布时间显示为 2026-03-14
- 仓库 README 显示的安装基线：Node.js `>= 22`，全局安装命令为 `npm install -g openclaw@latest`
- 仓库页面显示许可证为 `MIT`

## Product Map

### 1. User-facing surfaces

- 聊天渠道：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage/BlueBubbles 等
- Voice：语音电话与语音交互能力
- Live Canvas：更可视化的协作与执行界面
- Companion apps：桌面和移动侧入口

### 2. Control plane and runtime

- Gateway 是系统控制面，负责把消息、模型、工具和多渠道接起来
- 产品强调本地优先与个人控制边界，而不是把用户完全锁进远端 SaaS
- 文档里把安全边界明确建模为“一个可信操作者 + 一个 gateway”

### 3. Models and tools

- 支持把外部模型和工具接入代理运行时
- 能把 LLM、agent routing、工具调用和渠道消息统一到一个工作流中
- 官方文档明确把“first-class tools”与“multi-agent routing”列为核心能力

### 4. Distribution and setup

- README 基线是使用 `npm` 安装 CLI
- 初始引导命令是 `openclaw onboard --install-daemon`
- 本机当前没有 `openclaw` CLI 在 `PATH` 中，但存在 `~/Library/Application Support/OpenClaw` 目录，说明这台机器至少安装或运行过 OpenClaw 桌面相关组件

## Security Model

- 官方安全页强调它不是为“敌对多租户”场景设计的共享代理
- 推荐的基线是：单用户或高度信任的小团队，每个 gateway 只服务一个信任边界
- 官方给出“60 秒 hardened baseline”，核心是：
  - gateway 仅监听 loopback
  - 启用 token auth
  - 默认拒绝 runtime / filesystem 类高风险工具
  - 仅对白名单 DM 开放控制面
- 官方提到有安全审计，并建议协作场景使用 team gateway，而不是暴露个人 gateway

## Local Machine Notes

- CLI 检查结果：2026-03-15 执行 `openclaw --version` 失败，说明命令当前不在 `PATH`
- 本地存在资料与资产：
  - `/Users/gavin/Projects/openclaw-x-community`
  - `/Users/gavin/Desktop/02-01 OpenClaw 深度研讨会：从用户实践到未来展望.pdf`
  - `/Users/gavin/Desktop/openclaw-marketing-team-main-20260304T141036Z-1-001.zip`
  - `/Users/gavin/Desktop/openclaw/`

## Working Inference

- 从官方仓库名、本地资料命名和周边项目来看，`OpenClaw` 是当前对外主品牌；`clawdbot` 与 `clawd` 更像历史命名或周边/相关子系统。这个判断目前是推断，不应在没有进一步证据时写成硬事实。

## Open Questions

- OpenClaw 当前的桌面端、gateway、云端能力边界分别是什么
- 本机已安装的 OpenClaw 组件与官方 release 的对应版本是什么
- `clawdbot`、`clawd`、`clawhub` 与 OpenClaw 的正式关系图谱应如何定义
- 后续是否需要把本地 PDF、社区帖子和官网文档统一抽成一个知识图
