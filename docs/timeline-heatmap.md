# OpenClaw Capability Heatmap

最后整理：2026-03-15

## Layout

- 横轴：`入口` / `智能内核` / `工具执行` / `设备` / `平台控制` / `安全治理` / `运维`
- 竖轴：日期
- 分值含义：
  - `0`: 当天在该轴上没有明确 GitHub release 信号
  - `1`: 小幅增强或局部修补
  - `2`: 明显新增能力或重要扩展
  - `3`: 阶段级跃迁或结构性变化

## Axis Definitions

- `入口`：消息渠道、回复机制、线程 / 交互能力
- `智能内核`：模型目录、provider、auth、thinking、context window
- `工具执行`：browser、search、pdf、image、hooks、tool APIs
- `设备`：macOS、iOS、Android、Watch、voice surfaces
- `平台控制`：gateway、sessions、bindings、dashboard、agent routing
- `安全治理`：pairing、allowlist、sandbox、secrets、plugin trust、headers
- `运维`：logs、backup、update、health probes、k8s、cleanup、deployment

## Heatmap Matrix

| 日期 | 名称阶段 | 入口 | 智能内核 | 工具执行 | 设备 | 平台控制 | 安全治理 | 运维 | 关键变化 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 2025-11-25 | `warelay` | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 命令回复、`cwd`、文件日志，先把 relay 骨架搭起来 |
| 2025-11-26 | `warelay` | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 原型稳定化迭代 |
| 2025-11-27 | `warelay` | 1 | 0 | 0 | 0 | 1 | 0 | 1 | relay 执行链继续修补 |
| 2025-11-28 | `warelay` | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 同日双发，说明早期修正频率很高 |
| 2025-12-02 | `warelay` | 1 | 2 | 0 | 0 | 1 | 1 | 2 | pluggable agents、stop words、IPC、watchdog、自发消息 |
| 2025-12-19 | `clawdis` | 1 | 0 | 2 | 3 | 3 | 1 | 1 | gateway、macOS companion、iOS node、voice wake、browser、cron |
| 2025-12-21 | `clawdis` | 1 | 0 | 1 | 1 | 2 | 0 | 1 | gateway / companion 继续打磨 |
| 2025-12-27 | `clawdis` | 2 | 2 | 3 | 1 | 2 | 0 | 1 | first-class tools、per-session model、custom providers、group activation |
| 2026-01-03 | `clawdis` | 3 | 0 | 1 | 2 | 1 | 0 | 0 | Discord actions、threaded replies、Talk mode |
| 2026-01-05 | `clawdbot` | 0 | 2 | 2 | 0 | 0 | 0 | 0 | image model、image tool、default model shorthands |
| 2026-01-08 | `clawdbot` | 1 | 0 | 0 | 0 | 1 | 3 | 1 | pairing-first、sandbox scope、agent loop 安全基线 |
| 2026-01-10 | `clawdbot` | 2 | 2 | 0 | 0 | 2 | 0 | 1 | Teams、models auth 扩张、gateway discover/status/SSH |
| 2026-01-11 | `clawdbot` | 0 | 1 | 0 | 0 | 1 | 0 | 3 | `status --all`、Codex fallback、`update` 命令 |
| 2026-01-12 | `clawdbot` | 1 | 0 | 2 | 1 | 2 | 0 | 1 | plugins first-class、voice call plugin、config include |
| 2026-01-13 | `clawdbot` | 1 | 0 | 1 | 0 | 2 | 0 | 1 | `providers -> channels`、vector memory、voice-call parity |
| 2026-01-15 | `clawdbot` | 1 | 0 | 3 | 0 | 1 | 0 | 0 | web search / web fetch、browser relay、channel plugins、Zalo |
| 2026-01-16 | `clawdbot` | 0 | 2 | 1 | 0 | 1 | 0 | 1 | provider auth registry、plugin-driven auth、browserless/CDP |
| 2026-01-17 | `clawdbot` | 1 | 0 | 3 | 0 | 1 | 0 | 0 | hooks、media understanding、Zalo Personal |
| 2026-01-21 | `clawdbot` | 0 | 0 | 1 | 0 | 2 | 0 | 0 | Control UI / TUI 体验增强 |
| 2026-01-22 | `clawdbot` | 0 | 0 | 2 | 0 | 1 | 0 | 1 | lobster typed workflows、assistant identity、cache-ttl |
| 2026-01-23 | `clawdbot` | 1 | 0 | 1 | 0 | 2 | 0 | 1 | adaptive compaction、usage tracking、Slack threading |
| 2026-01-24 | `clawdbot` | 1 | 0 | 2 | 0 | 2 | 0 | 1 | Telegram TTS、`/tools/invoke` HTTP endpoint、heartbeat visibility |
| 2026-01-25 | `clawdbot` | 2 | 2 | 1 | 0 | 0 | 0 | 0 | LINE plugin、Ollama discovery、Edge TTS fallback |
| 2026-01-30 | `openclaw` | 0 | 0 | 0 | 0 | 1 | 1 | 2 | 正式 rebrand 成 `openclaw`，兼容 shim 与安全提示文案 |
| 2026-01-31 | `openclaw` | 0 | 1 | 0 | 0 | 1 | 0 | 2 | shell completion、per-agent models status |
| 2026-02-02 | `openclaw` | 1 | 1 | 0 | 0 | 1 | 1 | 0 | Telegram pairing store、OpenRouter attribution、prompt guardrails |
| 2026-02-04 | `openclaw` | 2 | 0 | 0 | 0 | 2 | 0 | 0 | Feishu/Lark、Agents dashboard、QMD memory |
| 2026-02-05 | `openclaw` | 1 | 0 | 0 | 0 | 1 | 0 | 0 | Telegram runtime 和类型系统收敛 |
| 2026-02-07 | `openclaw` | 0 | 3 | 0 | 0 | 1 | 0 | 1 | Opus 4.6、Codex GPT-5.3、Grok、token usage dashboard |
| 2026-02-09 | `openclaw` | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 中间稳定化版本，release body 信号较弱 |
| 2026-02-13 | `openclaw` | 1 | 0 | 0 | 0 | 1 | 0 | 1 | local-time logs、Telegram blockquote、config redaction 修正 |
| 2026-02-14 | `openclaw` | 2 | 0 | 1 | 0 | 1 | 0 | 0 | Discord voice / presence、Slack outbound gating hooks |
| 2026-02-15 | `openclaw` | 2 | 0 | 0 | 0 | 1 | 1 | 0 | Telegram polls、DM policy aliases、Discord exec approvals |
| 2026-02-16 | `openclaw` | 2 | 0 | 1 | 0 | 1 | 0 | 0 | Discord Components v2、plugin `llm_input` / `llm_output` hooks |
| 2026-02-18 | `openclaw` | 0 | 3 | 0 | 0 | 2 | 0 | 0 | 1M context beta、Sonnet 4.6、`/subagents spawn` |
| 2026-02-19 | `openclaw` | 0 | 0 | 0 | 3 | 2 | 1 | 0 | Apple Watch companion、APNs wake、device hygiene flows |
| 2026-02-21 | `openclaw` | 1 | 2 | 0 | 0 | 1 | 0 | 0 | Gemini 3.1、BytePlus / Doubao、default outbound routing |
| 2026-02-23 | `openclaw` | 0 | 2 | 0 | 0 | 1 | 0 | 3 | Mistral、auto-updater、`update --dry-run` |
| 2026-02-24 | `openclaw` | 0 | 3 | 2 | 1 | 2 | 2 | 2 | Kilo、Vercel AI Gateway、HSTS、sessions cleanup、Kimi search、Moonshot video |
| 2026-02-25 | `openclaw` | 1 | 0 | 0 | 2 | 1 | 2 | 0 | 多语言 stop phrases、Android onboarding、Talk config 统一 |
| 2026-02-26 | `openclaw` | 0 | 0 | 0 | 2 | 1 | 0 | 1 | Android chat / startup perf / mobile compose layout |
| 2026-02-27 | `openclaw` | 0 | 0 | 1 | 2 | 3 | 3 | 3 | external secrets、ACP thread-bound agents、agent bindings CLI |
| 2026-03-02 | `openclaw` | 0 | 1 | 1 | 2 | 2 | 0 | 3 | adaptive thinking 默认值、health/ready probes、Android node actions |
| 2026-03-03 | `openclaw` | 1 | 0 | 3 | 0 | 1 | 3 | 1 | SecretRef coverage、PDF tool、shared `sendPayload` adapters |
| 2026-03-08 | `openclaw` | 2 | 1 | 2 | 1 | 3 | 2 | 2 | context engine plugin、ACP persistent bindings、gateway auth SecretRef、plugin hook/compaction lifecycle、Docker multi-stage |
| 2026-03-09 | `openclaw` | 0 | 1 | 2 | 1 | 2 | 1 | 3 | backup、remote gateway token、ACP provenance、Brave LLM-context、browser/Tailscale remote discovery |
| 2026-03-12 | `openclaw` | 0 | 1 | 0 | 2 | 2 | 0 | 0 | iOS home canvas / toolbar / main-session routing |
| 2026-03-13 | `openclaw` | 1 | 2 | 0 | 0 | 3 | 2 | 2 | dashboard-v2、fast mode、provider plugins、Kubernetes starter、pair token hardening |
| 2026-03-14 | `openclaw` | 1 | 1 | 3 | 3 | 1 | 0 | 1 | Android settings redesign、iOS onboarding pager、Chrome attach、browser batch act |

## Peak Dates By Axis

- `入口`
  - 2026-01-03：Discord actions + native threaded replies
  - 2026-02-16：Discord Components v2
  - 2026-03-08：ACP persistent channel/topic bindings

- `智能内核`
  - 2026-02-07：Opus 4.6 / Codex GPT-5.3 / Grok
  - 2026-02-18：1M context beta + Sonnet 4.6
  - 2026-02-24：Kilo / Vercel AI Gateway / Moonshot video provider

- `工具执行`
  - 2026-01-15：web search / web fetch / browser relay
  - 2026-01-17：hooks + media understanding
  - 2026-03-03：PDF tool + `sendPayload`
  - 2026-03-14：Chrome attach + browser batch automation

- `设备`
  - 2025-12-19：macOS companion + iOS node + voice wake
  - 2026-02-19：Apple Watch companion
  - 2026-03-14：Android / iOS 体验面重做

- `平台控制`
  - 2025-12-19：Gateway 成为中心
  - 2026-02-27：ACP thread-bound agents + bindings CLI
  - 2026-03-08：context engine plugin + durable bindings
  - 2026-03-09：remote gateway token + ACP provenance + remote discovery 强化
  - 2026-03-13：dashboard-v2 + provider-plugin architecture

- `安全治理`
  - 2026-01-08：pairing-first / sandbox 基线
  - 2026-02-27：external secrets
  - 2026-03-08：gateway auth SecretRef + explicit auth-mode guardrails
  - 2026-03-03：SecretRef full coverage

- `运维`
  - 2026-01-11：status/update 运维面成型
  - 2026-02-23：auto-updater
  - 2026-02-27：secrets / runtime activation / route management
  - 2026-03-02：health / ready probes
  - 2026-03-08：container build / extension baking / auth guardrails
  - 2026-03-09：backup / remote gateway token

## Interpretation

- 如果把这张表当成一张能力热力图，`2025-12-19`、`2026-01-12`、`2026-01-30`、`2026-02-27`、`2026-03-08`、`2026-03-09`、`2026-03-13`、`2026-03-14` 是最关键的跳变点。
- 2025-11 到 2025-12 初是“relay 原型”。
- 2025-12 中下旬开始，OpenClaw 的重点从“消息通道”转向“gateway + assistant surfaces”。
- 2026-01 是插件化、工具化、多渠道化爆发期。
- 2026-02 是模型矩阵、设备矩阵和平台治理并进期。
- 2026-03 则明显进入“界面 + 运维 + browser automation + security hardening”同步加速期。

## Sources

- <https://github.com/openclaw/openclaw>
- <https://api.github.com/repos/openclaw/openclaw/releases?per_page=100>
- `docs/timeline-daily.md`
