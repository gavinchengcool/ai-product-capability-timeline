# OpenClaw GitHub Scan

扫描日期：2026-03-15

## Repo Background

- 仓库：<https://github.com/openclaw/openclaw>
- GitHub API 验证时间：2026-03-15
- 仓库创建时间：2025-11-24T10:16:47Z
- 最近一次 push：2026-03-15T11:46:07Z
- 当下可见体量：
  - Stars：314,097
  - Forks：59,965
  - Open issues：13,968
  - Releases：68
  - Stable releases：58
- 仓库描述：`Your own personal AI assistant. Any OS. Any Platform. The lobster way.`

## Product Background From GitHub

- GitHub README 把 OpenClaw 明确定义为运行在用户自己设备上的 personal AI assistant
- 其对外叙事不是“一个单纯的 agent framework”，而是“一个能在真实渠道里持续工作的个人助手产品”
- README 还把 `Gateway` 定义为控制面，强调产品主体是 assistant 本身
- README 末尾写明 OpenClaw 是为 `Molty` 这个 space lobster assistant 构建，并由 Peter Steinberger 与社区共同推进

## Release History Signal

- GitHub API 抓到的样本里，最早 release 是 `v0.1.1`，发布时间为 2025-11-25
- 到 2026-03-15 时，release 命名已经转成日期驱动：`vYYYY.M.D` 或 `vYYYY.M.D-1`
- 当前节奏呈现出明显的快发布模式：
  - 稳定版和 beta 版并行
  - beta 通常先发，稳定版很快跟进
  - 2026-03 上旬几乎保持日更或隔日更

### Recent Stable Sequence

- `v2026.3.13-1` published 2026-03-14
- `v2026.3.12` published 2026-03-13
- `v2026.3.11` published 2026-03-12
- `v2026.3.8` published 2026-03-09
- `v2026.3.7` published 2026-03-08
- `v2026.3.2` published 2026-03-03
- `v2026.3.1` published 2026-03-02

## Current Stock Capabilities From README

### 1. User-facing channels

- WhatsApp
- Telegram
- Slack
- Discord
- Google Chat
- Signal
- iMessage / BlueBubbles
- IRC
- Microsoft Teams
- Matrix
- Feishu
- LINE
- Mattermost
- Nextcloud Talk
- Nostr
- Synology Chat
- Tlon
- Twitch
- Zalo / Zalo Personal
- WebChat

### 2. Runtime and control plane

- Local-first gateway
- CLI onboarding and daemon install
- Agent runtime with sessions and per-agent isolation
- Multi-agent routing
- Pairing and allowlist based channel security
- Web Control UI and dashboard

### 3. Interaction surfaces

- Voice wake / talk mode
- Live Canvas
- macOS menu bar companion
- iOS / Android nodes

### 4. Tools and automation

- Browser tools
- Canvas tools
- Nodes
- Cron
- Sessions
- Discord / Slack actions
- Skills system
- Webhooks and Gmail Pub/Sub automation

### 5. Ops and deployment

- Install via npm / pnpm / bun
- Source build with pnpm
- Docker support
- Nix support
- macOS / Linux / Windows (WSL2) deployment docs
- `openclaw doctor` for diagnostics

## What GitHub Says About Recent Direction

从 README、release notes 和最近提交看，当前的演进方向非常明确：

- 不断扩展渠道与平台能力，而不是只做核心 agent loop
- 持续强化 browser / canvas / control-ui 这些“可操作界面”
- 对 mobile 端越来越重视，近期 Android 与 iOS 都有明显 UI / onboarding 更新
- 对 gateway 的可靠性、安全性和运维可配性持续加码
- 模型兼容层还在快速演进，尤其是 OpenAI-compatible、OpenRouter、Ollama、provider failover 相关路径

## This Week's High-Signal Additions

以下是 2026-03-15 扫描时，从最近 release notes 与 commit 流里最值得关注的新增能力信号：

- Android 聊天设置 UI 重做，移动端密度与设置分组增强
- iOS 新增首次使用欢迎页与更清晰的 onboarding 流程
- Browser 增加对已登录 Chrome 会话的官方 attach 模式
- Browser 增加内置 `profile="user"` 与 `profile="chrome-relay"` 选择
- Browser act 增加 batched actions、selector targeting 和 delayed clicks
- Docker 增加 `OPENCLAW_TZ` 时区覆盖能力
- Slack 增加 opt-in interactive reply directives
- Plugins 对 channel / binding 冲突改为 fail fast
- Android 新增 `calllog.search`
- Gateway health monitor 的 stale threshold 与 max restarts 变得可配置
- Feishu 增加结构化卡片、身份头部、页脚与 streaming 增强
- 新增 provider/model：`zai glm-5-turbo`

## Important Recent Fix Streams

- WhatsApp QR pairing 的 515 stream error 恢复路径被修复
- OpenAI-compatible API 的重复 tool call ID 被去重
- compaction timeout 相关路径正在持续加固
- Android 主题弹窗与 dark theme 正在收敛
- gateway 健康监控、OpenRouter 图片能力、插件安装优先级等都在最近提交里持续修补

## Bottom Line

GitHub 侧最重要的结论不是“OpenClaw 功能多”，而是“OpenClaw 正在以非常高频的节奏，把个人助手产品做成一个跨渠道、跨设备、带强 control plane 和强运维能力的系统”。它不是停留在 demo 阶段的 repo，而是一个高频迭代的产品型开源项目。

## Sources

- <https://github.com/openclaw/openclaw>
- <https://raw.githubusercontent.com/openclaw/openclaw/main/README.md>
- <https://api.github.com/repos/openclaw/openclaw>
- <https://api.github.com/repos/openclaw/openclaw/releases?per_page=100>
- <https://api.github.com/repos/openclaw/openclaw/commits?per_page=60>
