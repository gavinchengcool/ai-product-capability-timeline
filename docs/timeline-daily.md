# OpenClaw Timeline By Day

最后整理：2026-03-15

## How To Read

- 这份时间轴基于 GitHub 官方 release 时间线和 release notes
- 颗粒度按“有明确 GitHub 变更信号的日期”展开，而不是强行补齐所有自然日
- 当某个日期只有 tag / release name、没有足够的 release body 时，我会明确标成 `Inference`
- 命名演进路径在 GitHub 上是连续可见的：`warelay -> clawdis -> clawdbot -> openclaw`

## Stage Map

### Stage 0: Relay Prototype

时间：2025-11-25 到 2025-12-02  
命名：`warelay`

能力图：

- Surface：以 WhatsApp relay / command reply 为中心
- Runtime：外部命令执行、`cwd` 注入、文件日志
- Agent：开始支持 pluggable agents，已经能接 Claude / Pi / Codex / Opencode
- Safety：引入 stop/abort 词、allowFrom 过滤、自恢复 watchdog
- Session：开始处理会话连续性，但多模型 session reliability 还不均衡

阶段判断：

- 这是一个“消息中继 + 外部 agent harness”的原型期
- 重点不是产品面，而是把消息面、命令执行面和基础会话面先跑通

### Stage 1: Companion + Gateway Turn

时间：2025-12-19 到 2026-01-03  
命名：`clawdis`

能力图：

- Surface：macOS menu bar app、WebChat、iOS node
- Runtime：loopback-only WebSocket Gateway 成为系统中心
- Tools：browser、canvas、nodes、cron 变成 first-class tools
- Voice：on-device voice wake、talk mode 开始成型
- Network：可选 LAN bridge、Bonjour discovery、SSH fallback remote control
- Channels：Discord / Telegram threading、group activation、reply tags

阶段判断：

- 这是第一次从“relay”变成“assistant product”
- 系统中心从消息中继转向 gateway / control plane

### Stage 2: Pluginization And Productization

时间：2026-01-05 到 2026-01-25  
命名：`clawdbot`

能力图：

- Plugins：plugins first-class、voice call plugin、channel plugins、hooks
- Model/Media：image tool、image model、media understanding、TTS core 化
- Channels：Teams、LINE、Zalo Personal、Slack threading、browser relay
- Memory：vector search memory、pre-compaction memory flush、cache-ttl pruning
- Operator UX：status / update / config / debug / doctor / tools invoke HTTP API
- Web / UI：Control UI、TUI、assistant identity、copy-as-markdown

阶段判断：

- 这个阶段的核心是“把周边能力都做成正式系统部件”
- 从单一 assistant 运行时，变成一个插件化、多渠道、多工具的操作系统雏形

### Stage 3: OpenClaw Rebrand

时间：2026-01-30 到 2026-02-05  
命名：`openclaw`

能力图：

- Brand：npm package / CLI 正式切到 `openclaw`
- CLI：completion、per-agent models status
- Channels：Feishu / Lark plugin
- UI：Agents dashboard
- Memory：QMD backend

阶段判断：

- 这是品牌统一和产品外壳重整阶段
- 技术内核延续 clawdbot，但对外主品牌切换完成

### Stage 4: Model And Device Expansion

时间：2026-02-07 到 2026-02-19  
命名：`openclaw`

能力图：

- Models：Anthropic Opus 4.6、Codex GPT-5.3、Grok、Gemini 3.1、Mistral
- Channels：Discord voice / presence、Telegram polls、DM policy aliases
- Device：Android onboarding + node actions、Apple Watch companion
- Interaction：Discord Components v2、subagents spawn、1M context beta
- Observability：token usage dashboard、local-time logs

阶段判断：

- 这是模型矩阵和端侧矩阵加速扩张的阶段
- OpenClaw 开始同时向“更强模型兼容层”和“更多端设备入口”扩展

### Stage 5: Platform Controls And Enterprise-Like Ops

时间：2026-02-21 到 2026-02-27  
命名：`openclaw`

能力图：

- Providers：BytePlus / Doubao、Kilo Gateway、Vercel AI Gateway
- Security / Ops：HSTS、sessions cleanup、disk budget、external secrets
- Agents：thread-bound ACP runtimes、agent bindings CLI、bootstrap cache
- Tools：Kimi web search、Moonshot video、routing CLI
- Nodes：Android device status / info / notifications

阶段判断：

- 这一段开始明显出现“平台化”和“团队 / 运维 / 配置治理”倾向
- 不再只是 assistant 功能扩张，而是开始做长期运行和组织级治理能力

### Stage 6: Interface And Operability Acceleration

时间：2026-03-02 到 2026-03-14  
命名：`openclaw`

能力图：

- Tools：PDF tool、backup create/verify、Brave LLM-context search
- Runtime：health / ready probes、context engine plugin、sendPayload shared adapters
- UI：dashboard-v2、mobile tabs、search/export/pinned messages
- Voice / Talk：silence timeout、talk config 统一
- Browser：Chrome DevTools attach mode、`profile="user"`、batch act automation
- Mobile：Android settings redesign、iOS onboarding pager、iOS home canvas
- Security：SecretRef coverage、pairing bootstrap tokens、workspace plugin auto-load hardening

阶段判断：

- 这是“操作面”和“界面面”同步加速的阶段
- OpenClaw 已明显不是单一 agent runtime，而是一个完整的个人 AI assistant 平台

## Daily Timeline

### 2025-11

- 2025-11-25
  - Tags: `v0.1.1`, `v0.1.2`, `v0.1.3`
  - Name: `warelay`
  - 能力信号：命令回复 `cwd`、文件日志、command runner 选项注入。
  - 结论：第一天就围绕“消息 -> 外部命令 -> 结果回传”做基础骨架。

- 2025-11-26
  - Tag: `v1.1.0`
  - Name: `warelay`
  - `Inference`：release body 在当前样本里缺失，判断为 warelay 起步期的稳定化迭代。

- 2025-11-27
  - Tag: `v1.2.0`
  - Name: `warelay`
  - `Inference`：仍属 relay 原型期，延续消息面和执行面的稳定化。

- 2025-11-28
  - Tags: `v1.2.1`, `v1.2.2`
  - Name: `warelay`
  - `Inference`：同日双发，说明原型期修正频率很高，但 GitHub 样本未保留足够 body。

### 2025-12

- 2025-12-02
  - Tag: `v1.3.0`
  - Name: `warelay`
  - 能力信号：pluggable agents、stop words、session reliability、IPC server、batched inbound、typing indicator、self-messaging。
  - 结论：从 relay 原型升级为“可挂多个 agent harness 的消息代理”。

- 2025-12-19
  - Tag: `v2.0.0-beta1`
  - Name: `clawdis`
  - 能力信号：大版本 rebrand，切换到 loopback-only gateway、macOS companion app、iOS node、voice wake、browser control、cron。
  - 结论：这是第一次架构级转向。

- 2025-12-21
  - Tag: `v2.0.0-beta2`
  - Name: `clawdis`
  - `Inference`：属于 gateway / companion 架构继续打磨阶段。

- 2025-12-27
  - Tags: `v2.0.0-beta3`, `v2.0.0-beta4`
  - Name: `clawdis`
  - 能力信号：first-class tools、per-session model selection、custom model providers、group activation modes。
  - 结论：Clawdis 已经显著转向“工具化 + control plane 化”。

### 2026-01

- 2026-01-03
  - Tag: `v2.0.0-beta5`
  - Name: `clawdis`
  - 能力信号：Discord actions 扩张、Discord / Telegram native threaded replies、talk mode 连续语音对话。
  - 结论：渠道交互和 voice 体验开始成为产品核心。

- 2026-01-05
  - Tags: `v2026.1.5`, `v2026.1.5-1`, `v2026.1.5-3`
  - Name: `clawdbot`
  - 能力信号：image model、image tool、default model shorthands。
  - 结论：进入 date-based release train，同时开始强化多模态能力。

- 2026-01-08
  - Tag: `v2026.1.8`
  - Name: `clawdbot`
  - 能力信号：DM pairing-first 安全基线、sandbox scope、agent loop hardening。
  - 结论：安全边界开始系统化。

- 2026-01-10
  - Tag: `v2026.1.9`
  - Name: `clawdbot`
  - 能力信号：Microsoft Teams、models auth 扩张、gateway discover/status/SSH、sandbox CLI。
  - 结论：渠道和运维入口一起扩张。

- 2026-01-11
  - Tag: `v2026.1.10`
  - Name: `clawdbot`
  - 能力信号：table-based status、`status --all`、Codex CLI fallback、`clawdbot update`。
  - 结论：operator UX 和 CLI 生命周期开始完善。

- 2026-01-12
  - Tags: `v2026.1.11`, `v2026.1.11-1`, `v2026.1.11-2`, `v2026.1.11-3`
  - Name: `clawdbot`
  - 能力信号：plugins first-class、voice call plugin、config `$include`、pre-compaction memory flush。
  - 结论：插件系统正式成为核心能力。

- 2026-01-13
  - Tags: `v2026.1.12`, `v2026.1.12-2`
  - Name: `clawdbot`
  - 能力信号：`providers -> channels` 统一改名、vector memory search、voice-call parity。
  - 结论：系统概念从 provider/relay 进一步转向 channel/assistant platform。

- 2026-01-15
  - Tag: `v2026.1.14-1`
  - Name: `clawdbot`
  - 能力信号：Brave web search / web fetch、browser relay takeover、channel plugins、Zalo plugin。
  - 结论：工具和插件生态明显扩容。

- 2026-01-16
  - Tag: `v2026.1.15`
  - Name: `clawdbot`
  - 能力信号：provider auth registry、plugin-driven auth、browserless/CDP 改善、heartbeat per-agent。
  - 结论：auth / browser / heartbeat 三条运维线同时增强。

- 2026-01-17
  - Tag: `v2026.1.16-2`
  - Name: `clawdbot`
  - 能力信号：hooks、media understanding、Zalo Personal plugin。
  - 结论：从“agent tools”走向“事件与媒体感知系统”。

- 2026-01-21
  - Tag: `v2026.1.20`
  - Name: `clawdbot`
  - 能力信号：Control UI copy-as-markdown、TUI code highlighting。
  - 结论：面向人类操作的 UI 体验开始精修。

- 2026-01-22
  - Tag: `v2026.1.21`
  - Name: `clawdbot`
  - 能力信号：lobster typed workflow plugin、assistant identity / avatar、cache-ttl pruning。
  - 结论：assistant 个性化和 typed workflows 开始显性化。

- 2026-01-23
  - Tag: `v2026.1.22`
  - Name: `clawdbot`
  - 能力信号：adaptive compaction safeguard、Antigravity usage tracking、Slack threading overrides。
  - 结论：agent reliability 和 channel threading 都在收敛。

- 2026-01-24
  - Tag: `v2026.1.23`
  - Name: `Clawdbot`
  - 能力信号：Telegram TTS core 化、`/tools/invoke` HTTP endpoint、heartbeat visibility controls。
  - 结论：语音和直接工具调用都被系统化。

- 2026-01-25
  - Tag: `v2026.1.24`
  - Name: `Clawdbot`
  - 能力信号：Ollama discovery、LINE plugin、Edge keyless TTS fallback。
  - 结论：本地模型与渠道矩阵同步扩张。

- 2026-01-30
  - Tag: `v2026.1.29`
  - Name: `openclaw`
  - 能力信号：npm package / CLI rebrand to `openclaw`、`@openclaw/*` scope、security warning copy。
  - 结论：主品牌正式切换。

- 2026-01-31
  - Tag: `v2026.1.30`
  - Name: `openclaw`
  - 能力信号：CLI completion、per-agent models status、Kimi K2.5 catalog entry。
  - 结论：品牌切换后马上继续补 CLI 和模型目录。

### 2026-02

- 2026-02-02
  - Tag: `v2026.2.1`
  - Name: `openclaw`
  - 能力信号：Telegram shared pairing store、OpenRouter attribution headers、system prompt guardrails。

- 2026-02-04
  - Tag: `v2026.2.2`
  - Name: `openclaw`
  - 能力信号：Feishu / Lark plugin、Agents dashboard、QMD memory backend。
  - 结论：工作台和 memory backend 同时增强。

- 2026-02-05
  - Tag: `v2026.2.3`
  - Name: `openclaw`
  - 能力信号：Telegram typing cleanup / TS type hardening。
  - 结论：该日更偏向 Telegram runtime 稳定性。

- 2026-02-07
  - Tag: `v2026.2.6`
  - Name: `openclaw`
  - 能力信号：Anthropic Opus 4.6、Codex GPT-5.3、xAI Grok、token usage dashboard。
  - 结论：模型矩阵明显扩张。

- 2026-02-09
  - Tag: `v2026.2.9`
  - Name: `openclaw`
  - `Inference`：当前样本缺少高信号 body，判断为中间稳定化版本。

- 2026-02-13
  - Tag: `v2026.2.12`
  - Name: `openclaw`
  - 能力信号：`openclaw logs --local-time`、Telegram blockquote native render、config redaction 修正。

- 2026-02-14
  - Tag: `v2026.2.13`
  - Name: `openclaw`
  - 能力信号：Discord voice messages / presence、Slack outbound gating hooks。

- 2026-02-15
  - Tag: `v2026.2.14`
  - Name: `openclaw`
  - 能力信号：Telegram polls、Slack / Discord DM policy aliases、Discord exec approvals targeting。

- 2026-02-16
  - Tags: `v2026.2.15-beta.1`, `v2026.2.15`
  - Name: `openclaw`
  - 能力信号：Discord Components v2、exec approval UX、plugin `llm_input` / `llm_output` hooks。
  - 结论：开始把 Discord 做成强交互 surface。

- 2026-02-18
  - Tag: `v2026.2.17`
  - Name: `openclaw`
  - 能力信号：Anthropic 1M context beta、Sonnet 4.6、`/subagents spawn`。
  - 结论：model context 与 subagent orchestration 同时上台阶。

- 2026-02-19
  - Tags: `v2026.2.19-beta.1`, `v2026.2.19`
  - Name: `openclaw`
  - 能力信号：Apple Watch companion、iOS APNs wake、paired-device hygiene flows。
  - 结论：端侧设备网络开始成体系。

- 2026-02-21
  - Tag: `v2026.2.21`
  - Name: `openclaw`
  - 能力信号：Gemini 3.1、BytePlus / Doubao、defaultTo outbound routing fallback。

- 2026-02-23
  - Tag: `v2026.2.22`
  - Name: `openclaw`
  - 能力信号：Mistral provider、built-in auto-updater、`update --dry-run`。

- 2026-02-24
  - Tag: `v2026.2.23`
  - Name: `openclaw`
  - 能力信号：Kilo provider、Vercel AI Gateway shorthand、HSTS、sessions cleanup、Kimi web_search、Moonshot video。
  - 结论：明显进入平台治理阶段。

- 2026-02-25
  - Tags: `v2026.2.24-beta.1`, `v2026.2.24`
  - Name: `openclaw`
  - 能力信号：多语言 stop phrases、Android 四步 onboarding、Talk config 统一。
  - 结论：面向真实用户使用的 UX 和 safety 都在加速。

- 2026-02-26
  - Tags: `v2026.2.25-beta.1`, `v2026.2.25`
  - Name: `openclaw`
  - 能力信号：Android native chat streaming / markdown、startup perf、mobile compose layout。

- 2026-02-27
  - Tag: `v2026.2.26`
  - Name: `openclaw`
  - 能力信号：external secrets workflow、ACP thread-bound agents、agent bindings CLI、Android device status / notifications。
  - 结论：这是平台化控制面能力非常强的一天。

### 2026-03

- 2026-03-02
  - Tag: `v2026.3.1`
  - Name: `openclaw`
  - 能力信号：Claude 4.6 adaptive thinking default、`/health` / `/ready` probes、Android node camera / permissions / notifications actions。

- 2026-03-03
  - Tags: `v2026.3.2-beta.1`, `v2026.3.2`
  - Name: `openclaw`
  - 能力信号：SecretRef coverage 扩大、PDF tool、shared `sendPayload` outbound adapters。
  - 结论：工具面和 secret management 同时迈了一步。

- 2026-03-08
  - Tags: `v2026.3.7-beta.1`, `v2026.3.7`
  - Name: `openclaw`
  - 能力信号：context engine plugin interface、ACP persistent channel bindings、Telegram ACP topic bindings、gateway auth token SecretRef、plugin hook policy、compaction lifecycle hooks、Docker multi-stage build。
  - 结论：这是一个架构级关键日，不只是“多了一个插件位”，而是把 context assembly / compaction / session 生命周期 / ACP thread routing 一起推向可插拔和可持久化。

- 2026-03-09
  - Tags: `v2026.3.8-beta.1`, `v2026.3.8`
  - Name: `openclaw`
  - 能力信号：backup create / verify、remote gateway token、talk silence timeout、Brave LLM-context search、ACP provenance、browser relay / CDP / Tailscale remote discovery 强化。
  - 结论：这是运维和远程控制面的关键日，把“可恢复、可备份、可远程接入、可追 provenance”的路径明显补齐了。

- 2026-03-12
  - Tags: `v2026.3.11-beta.1`, `v2026.3.11`
  - Name: `openclaw`
  - 能力信号：OpenRouter temporary model rows、iOS home canvas / toolbar / main-session routing。
  - 结论：iOS front-end surface 开始明显丰富。

- 2026-03-13
  - Tag: `v2026.3.12`
  - Name: `openclaw`
  - 能力信号：dashboard-v2、OpenAI / Anthropic fast mode、provider-plugin architecture、Kubernetes starter path、`sessions_yield`。
  - 结论：这是 UI 和 model/runtime 并进的一天。

- 2026-03-14
  - Tags: `v2026.3.13-beta.1`, `v2026.3.13-1`
  - Name: `openclaw`
  - 能力信号：Android settings redesign、iOS onboarding pager、Chrome DevTools attach mode、browser `profile="user"` / `profile="chrome-relay"`、batched browser act、`OPENCLAW_TZ`、Slack interactive replies。
  - 结论：从“能用”转向“更像完整产品界面 + 完整浏览器操作层”。

## What The Timeline Says

如果只看 GitHub 时间线，OpenClaw 的演进主线非常清楚：

1. 它先是一个消息 relay
2. 然后变成有 gateway 和 companion app 的 assistant 系统
3. 再变成 pluginized、多渠道、多工具的平台
4. 最后在 2026-02 到 2026-03 进入“控制面、运维面、移动端、浏览器端、模型兼容层”一起快速扩张的阶段

换句话说，OpenClaw 不是线性长功能，而是不断扩大它的“assistant operating surface”。

## Sources

- <https://github.com/openclaw/openclaw>
- <https://api.github.com/repos/openclaw/openclaw>
- <https://api.github.com/repos/openclaw/openclaw/releases?per_page=100>
