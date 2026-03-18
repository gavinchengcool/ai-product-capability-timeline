window.OPENCLAW_HEATMAP = {
  generatedAt: "2026-03-15",
  axes: [
    { key: "channels", label: "入口", short: "入口", description: "用户触达入口：消息渠道、回复机制、线程和互动能力" },
    { key: "models", label: "智能内核", short: "内核", description: "智能内核：模型目录、provider、auth、thinking 与上下文窗口" },
    { key: "tools", label: "工具执行", short: "执行", description: "工具执行层：browser、search、pdf、image、hooks 与 tool APIs" },
    { key: "devices", label: "设备", short: "设备", description: "设备体验：macOS、iOS、Android、Watch 和 voice surfaces" },
    { key: "control", label: "平台控制", short: "平台", description: "平台控制：gateway、sessions、bindings、dashboard 和 agent routing" },
    { key: "security", label: "安全治理", short: "安全", description: "安全治理：pairing、allowlist、sandbox、secrets、plugin trust、headers" },
    { key: "ops", label: "运维", short: "运维", description: "运行运维：logs、backup、update、health probes、k8s、cleanup、deployment" }
  ],
  stageMeta: {
    warelay: {
      label: "warelay",
      title: "Relay Prototype",
      blurb: "WhatsApp relay + 外部 agent harness 的原型阶段。"
    },
    clawdis: {
      label: "clawdis",
      title: "Companion + Gateway Turn",
      blurb: "Gateway 成为系统中心，macOS / iOS / voice / browser surfaces 成型。"
    },
    clawdbot: {
      label: "clawdbot",
      title: "Pluginization And Productization",
      blurb: "插件化、多工具、多渠道和 memory / UI 能力全面铺开。"
    },
    openclaw: {
      label: "openclaw",
      title: "Platform Expansion",
      blurb: "品牌统一后，模型矩阵、控制面、运维、安全和移动端一起加速。"
    }
  },
  jumpDates: [
    {
      date: "2025-12-19",
      title: "Gateway Turn",
      note: "从 relay 架构跳到 gateway + companion + voice + browser 的完整助手系统。"
    },
    {
      date: "2026-01-12",
      title: "Plugins First-Class",
      note: "plugins、voice call plugin、config include 和 memory flush 把 clawdbot 推成平台。"
    },
    {
      date: "2026-02-27",
      title: "Platform Controls",
      note: "external secrets、ACP thread-bound agents、agent bindings CLI 把控制面拉到新层级。"
    },
    {
      date: "2026-03-08",
      title: "Context Engine Leap",
      note: "context engine plugin、durable ACP bindings、auth SecretRef 和 hook lifecycle 一起落地，是架构级关键更新。"
    },
    {
      date: "2026-03-09",
      title: "Ops And Remote Access Leap",
      note: "backup、remote gateway token、ACP provenance、browser/Tailscale remote discovery 把运维与远程接入补齐。"
    },
    {
      date: "2026-03-13",
      title: "Dashboard + Runtime Leap",
      note: "dashboard-v2、fast mode、provider plugins、Kubernetes starter 同时落地。"
    },
    {
      date: "2026-03-14",
      title: "Product Surface Polish",
      note: "Android、iOS、browser automation 同步增强，产品完成度显著上升。"
    }
  ],
  rows: [
    {
      date: "2025-11-25",
      stage: "warelay",
      summary: "把 relay 骨架搭起来：命令回复、cwd 注入和文件日志先到位。",
      axisEntries: {
        channels: "WhatsApp relay 基础收发。",
        control: "command reply 执行链和 cwd 注入。",
        ops: "文件日志与 runner 选项落地。"
      }
    },
    {
      date: "2025-11-26",
      stage: "warelay",
      summary: "继续给早期 relay 打补丁，目标还是把消息执行链跑稳。",
      axisEntries: {
        channels: "relay 收发链继续稳定化。",
        control: "原型执行链打补丁。",
        ops: "早期稳定性修补。"
      }
    },
    {
      date: "2025-11-27",
      stage: "warelay",
      summary: "依旧是 relay 原型期，小步快跑修正消息和执行链。",
      axisEntries: {
        channels: "消息面继续收敛。",
        control: "command reply 流程微调。",
        ops: "同日级别的原型修正延续。"
      }
    },
    {
      date: "2025-11-28",
      stage: "warelay",
      summary: "同日双发，说明原型阶段修正频率很高。",
      axisEntries: {
        channels: "relay 入口继续修补。",
        control: "执行链与配置链迭代。",
        ops: "同日双 release 的稳定化节奏。"
      }
    },
    {
      date: "2025-12-02",
      stage: "warelay",
      summary: "从单一 relay 原型升级为可挂多种 agent harness 的消息代理。",
      axisEntries: {
        models: "Claude / Pi / Codex / Opencode 进入 pluggable agents。",
        control: "IPC server、batched inbound、session continuity 开始成形。",
        security: "stop / abort 词和 early allowFrom 进入主流程。",
        ops: "watchdog 自恢复与 typing indicator 上线。"
      }
    },
    {
      date: "2025-12-19",
      stage: "clawdis",
      summary: "第一次架构级转向：Gateway 成为中心，assistant product 的外形出现了。",
      axisEntries: {
        channels: "WebChat 和真实消息 surface 开始统一到系统里。",
        tools: "browser、canvas、nodes、cron 变成 first-class tools。",
        devices: "macOS 菜单栏应用、iOS node、voice wake 一起出现。",
        control: "loopback-only WebSocket Gateway 成为系统控制面。",
        security: "Gateway 默认坚持 loopback 边界。"
      }
    },
    {
      date: "2025-12-21",
      stage: "clawdis",
      summary: "继续打磨 gateway / companion 基座，属于大转向后的收敛日。",
      axisEntries: {
        tools: "工具面继续和新 gateway 对齐。",
        devices: "companion 和 voice surfaces 继续打磨。",
        control: "Gateway / companion 协作链稳定化。",
        ops: "新架构上的第一轮收敛。"
      }
    },
    {
      date: "2025-12-27",
      stage: "clawdis",
      summary: "Clawdis 明显转向工具化与 control plane 化。",
      axisEntries: {
        channels: "group activation modes 进入主线。",
        models: "per-session model selection 与 custom providers 出现。",
        tools: "first-class browser / canvas / nodes / cron 完整成形。",
        control: "tool schemas 直接注入 agent runtime。"
      }
    },
    {
      date: "2026-01-03",
      stage: "clawdis",
      summary: "渠道互动和 voice 体验开始成为产品中心。",
      axisEntries: {
        channels: "Discord actions 扩张，Discord / Telegram native threaded replies 落地。",
        tools: "reply tags 把原生回复链更细化。",
        devices: "Talk mode 支持连续语音对话。"
      }
    },
    {
      date: "2026-01-05",
      stage: "clawdbot",
      summary: "进入 date-based release train，同时开始强化多模态能力。",
      axisEntries: {
        models: "image-specific model config 与默认模型 shorthand 出现。",
        tools: "image tool 进入 agent tool 集合。"
      }
    },
    {
      date: "2026-01-08",
      stage: "clawdbot",
      summary: "安全边界第一次系统化，不再只是功能堆叠。",
      axisEntries: {
        channels: "DM 默认收紧，pairing-first 成为推荐路径。",
        control: "agent loop 的 compaction / pruning / error handling 被加固。",
        security: "allowlist、sandbox scope、workspace access controls 进入默认基线。",
        ops: "新安全基线开始影响日常运行方式。"
      }
    },
    {
      date: "2026-01-10",
      stage: "clawdbot",
      summary: "渠道和运维入口一起扩张，开始像一个真正的 assistant 平台。",
      axisEntries: {
        channels: "Microsoft Teams 进入主渠道集合。",
        models: "OpenCode Zen、MiniMax auth 进入 onboarding。",
        control: "gateway discover / status / SSH 与 message 子命令到位。",
        ops: "sandbox CLI 和 CLI 运维入口变得完整。"
      }
    },
    {
      date: "2026-01-11",
      stage: "clawdbot",
      summary: "operator UX 成型，CLI 开始具备真正的运维价值。",
      axisEntries: {
        models: "Codex CLI fallback + resume 支持进入主链路。",
        control: "status --all 提供全链路只读诊断视图。",
        ops: "update 命令、表格式 status 和 log tails 组合成运维面。"
      }
    },
    {
      date: "2026-01-12",
      stage: "clawdbot",
      summary: "插件系统正式成为核心部件，是 clawdbot 阶段的关键跳变日。",
      axisEntries: {
        tools: "plugins first-class、Voice Call plugin 正式上线。",
        devices: "Voice Call 进入产品 surface，不再只是实验能力。",
        control: "config $include 与 pre-compaction memory flush 一起落地。",
        ops: "split config 让部署与维护方式更模块化。"
      }
    },
    {
      date: "2026-01-13",
      stage: "clawdbot",
      summary: "系统概念从 provider/relay 进一步转向 channel/assistant platform。",
      axisEntries: {
        channels: "providers 正式统一改名为 channels。",
        tools: "vector memory search 进入主能力。",
        control: "配置与 CLI 语义围绕 channels 重整。"
      }
    },
    {
      date: "2026-01-15",
      stage: "clawdbot",
      summary: "工具面和插件生态明显扩容，开始具备更强外部世界接入能力。",
      axisEntries: {
        channels: "channel plugins 和 Zalo plugin 进入主线。",
        tools: "web_search / web_fetch 与 browser relay takeover 落地。",
        control: "browser serve 开始成为控制链的一部分。"
      }
    },
    {
      date: "2026-01-16",
      stage: "clawdbot",
      summary: "auth / browser / heartbeat 三条运维线同时增强。",
      axisEntries: {
        models: "provider auth registry 与 models auth login 到位。",
        tools: "browserless / CDP 远程浏览器支持明显增强。",
        ops: "heartbeat 进入 per-agent 配置时代。"
      }
    },
    {
      date: "2026-01-17",
      stage: "clawdbot",
      summary: "从 agent tools 走向事件与媒体感知系统。",
      axisEntries: {
        channels: "Zalo Personal 插件进入渠道集合。",
        tools: "hooks 与 media understanding 同日落地。"
      }
    },
    {
      date: "2026-01-21",
      stage: "clawdbot",
      summary: "开始精修人类操作界面，虽然不是架构日，但对可用性很重要。",
      axisEntries: {
        control: "Control UI copy-as-markdown 与 TUI code highlighting 进入主界面。"
      }
    },
    {
      date: "2026-01-22",
      stage: "clawdbot",
      summary: "assistant identity 和 typed workflow 都开始显性化。",
      axisEntries: {
        tools: "lobster typed workflow plugin 进入体系。",
        control: "assistant identity 与 avatars 进入 Control UI。",
        ops: "cache-ttl pruning 开始直接影响成本与运行效率。"
      }
    },
    {
      date: "2026-01-23",
      stage: "clawdbot",
      summary: "agent reliability 和 channel threading 继续收敛。",
      axisEntries: {
        channels: "Slack threading overrides 更细粒度。",
        control: "adaptive compaction safeguard 进入主线。",
        ops: "usage tracking 被纳入状态面。"
      }
    },
    {
      date: "2026-01-24",
      stage: "clawdbot",
      summary: "语音和直接工具调用都被系统化。",
      axisEntries: {
        channels: "Telegram TTS 进入核心通道能力。",
        tools: "tools/invoke HTTP endpoint 直接暴露工具调用面。",
        ops: "heartbeat visibility 控制变得更细。"
      }
    },
    {
      date: "2026-01-25",
      stage: "clawdbot",
      summary: "本地模型与渠道矩阵同步扩张。",
      axisEntries: {
        channels: "LINE plugin 上线。",
        models: "Ollama discovery 进入主文档与配置面。",
        tools: "Edge keyless TTS fallback 提升可用性。"
      }
    },
    {
      date: "2026-01-30",
      stage: "openclaw",
      summary: "主品牌正式切换，但技术内核延续 clawdbot。",
      axisEntries: {
        control: "npm package / CLI 正式切到 openclaw。",
        security: "beta 访问控制与安全预期文案强化。",
        ops: "compat shim 与包名迁移影响安装与升级路径。"
      }
    },
    {
      date: "2026-01-31",
      stage: "openclaw",
      summary: "品牌切换后马上回到 CLI 与模型目录建设。",
      axisEntries: {
        models: "Kimi K2.5 进入 synthetic model catalog。",
        control: "per-agent models status 进入 CLI。",
        ops: "shell completion 和安装后自动接入。"
      }
    },
    {
      date: "2026-02-02",
      stage: "openclaw",
      summary: "开始把新品牌下的安全和 provider 细节继续补齐。",
      axisEntries: {
        channels: "Telegram 开始使用 shared pairing store。",
        models: "OpenRouter app attribution headers 进入模型调用层。",
        security: "system prompt safety guardrails 进入默认链路。"
      }
    },
    {
      date: "2026-02-04",
      stage: "openclaw",
      summary: "工作台和 memory backend 同时增强。",
      axisEntries: {
        channels: "Feishu / Lark plugin 进入主渠道。",
        tools: "QMD backend 作为 opt-in workspace memory 出现。",
        control: "Agents dashboard 开始承担配置管理入口。"
      }
    },
    {
      date: "2026-02-05",
      stage: "openclaw",
      summary: "这一天更偏 Telegram runtime 收敛，而不是新大功能。",
      axisEntries: {
        channels: "Telegram 运行时类型系统与 handler 继续清理。",
        control: "Bot 代码路径更稳更规范。"
      }
    },
    {
      date: "2026-02-07",
      stage: "openclaw",
      summary: "模型矩阵明显扩张，兼容层在快速演进。",
      axisEntries: {
        models: "Anthropic Opus 4.6、OpenAI Codex gpt-5.3-codex、xAI Grok 同时进入主线。",
        ops: "token usage dashboard 开始可视化模型消耗。"
      }
    },
    {
      date: "2026-02-09",
      stage: "openclaw",
      summary: "这是中间稳定化版本，GitHub 侧没有留下很强的新功能信号。",
      axisEntries: {
        control: "中间版本更偏稳定化收敛。",
        ops: "持续发布节奏保持高频。"
      }
    },
    {
      date: "2026-02-13",
      stage: "openclaw",
      summary: "小步但实用，主要是日志、渲染和配置安全细节。",
      axisEntries: {
        channels: "Telegram blockquote 恢复为原生呈现。",
        security: "config redaction 修正避免 round-trip 问题。",
        ops: "logs --local-time 提升日常排查体验。"
      }
    },
    {
      date: "2026-02-14",
      stage: "openclaw",
      summary: "Discord 和 Slack 这两条渠道线继续加深。",
      axisEntries: {
        channels: "Discord 语音消息和 presence 配置同时进入主线。",
        tools: "Slack outbound gating hooks 进入插件行为面。"
      }
    },
    {
      date: "2026-02-15",
      stage: "openclaw",
      summary: "渠道交互和访问控制继续细化。",
      axisEntries: {
        channels: "Telegram poll 发送、Discord exec approvals targeting 一起落地。",
        security: "Slack / Discord DM policy aliases 统一访问控制语义。"
      }
    },
    {
      date: "2026-02-16",
      stage: "openclaw",
      summary: "开始把 Discord 做成强交互 surface。",
      axisEntries: {
        channels: "Discord Components v2 带来按钮、选择器、模态等交互面。",
        tools: "plugin llm_input / llm_output hooks 对模型输入输出开放观察口。",
        control: "exec approval UX 在 Discord 内更自然。"
      }
    },
    {
      date: "2026-02-18",
      stage: "openclaw",
      summary: "model context 与 subagent orchestration 同时上台阶。",
      axisEntries: {
        models: "Anthropic 1M context beta 与 Sonnet 4.6 一起进入主链路。",
        control: "subagents spawn 进入 chat command。"
      }
    },
    {
      date: "2026-02-19",
      stage: "openclaw",
      summary: "端侧设备网络开始成体系，不再只是手机节点。",
      axisEntries: {
        devices: "Apple Watch companion、iOS APNs wake、后台唤醒链路到位。",
        control: "devices remove / clear 等 paired-device hygiene flows 补齐。"
      }
    },
    {
      date: "2026-02-21",
      stage: "openclaw",
      summary: "模型矩阵和默认发送路由继续扩张。",
      axisEntries: {
        channels: "defaultTo outbound routing fallback 让 agent --deliver 更顺手。",
        models: "Gemini 3.1、Volcano Engine / BytePlus / Doubao 进入主 provider 集合。"
      }
    },
    {
      date: "2026-02-23",
      stage: "openclaw",
      summary: "运维面开始出现真正的平台级更新器能力。",
      axisEntries: {
        models: "Mistral provider 进入支持矩阵。",
        ops: "built-in auto-updater 与 update --dry-run 进入主线。"
      }
    },
    {
      date: "2026-02-24",
      stage: "openclaw",
      summary: "明显进入平台治理阶段，provider、search、video、安全头和 session 运维一起加深。",
      axisEntries: {
        models: "Kilo Gateway、Vercel AI Gateway shorthand、Moonshot video provider 进入主链路。",
        tools: "Kimi web_search provider 与视频理解都变得更正式。",
        control: "sessions cleanup、disk budget、per-agent params 合并一起强化控制面。",
        security: "gateway HTTP security headers 支持 HSTS。",
        ops: "长期运行和清理策略开始系统化。"
      }
    },
    {
      date: "2026-02-25",
      stage: "openclaw",
      summary: "面向真实用户使用的 UX 和 safety 都在加速。",
      axisEntries: {
        devices: "Android 四步 onboarding 与五标签壳层一起出现。",
        control: "Talk config 统一到 provider-agnostic 视角。",
        security: "多语言 stop phrases 大幅增强误操作中止能力。"
      }
    },
    {
      date: "2026-02-26",
      stage: "openclaw",
      summary: "Android 端开始从“能跑”转向“更像产品”。",
      axisEntries: {
        devices: "Android native chat streaming、markdown 和 startup perf 一起优化。",
        control: "mobile compose layout 更适合小屏操作。",
        ops: "性能基准与冷启动测量链开始完善。"
      }
    },
    {
      date: "2026-02-27",
      stage: "openclaw",
      summary: "这是平台化控制面的关键日：secrets、ACP 线程运行时和 agent 绑定一起升级。",
      axisEntries: {
        devices: "Android device.status / info / notifications.list 正式进入节点能力。",
        control: "ACP thread-bound agents 与 agents bind / unbind 构成更强的控制面。",
        security: "external secrets workflow 把密钥治理拉到新层级。",
        ops: "secrets apply / reload / runtime snapshot activation 让运维路径更正式。"
      }
    },
    {
      date: "2026-03-02",
      stage: "openclaw",
      summary: "健康探针、Android node actions 和 thinking 默认值一起把平台运行面再推进一步。",
      axisEntries: {
        models: "Claude 4.6 adaptive thinking 成为默认思考级别。",
        tools: "Android nodes 增加 camera / permissions / notifications actions。",
        devices: "Android 节点从被动信息面升级到可执行动作面。",
        control: "gateway 内建 health / ready probe 路由。",
        ops: "Docker / Kubernetes 可观测性显著改善。"
      }
    },
    {
      date: "2026-03-03",
      stage: "openclaw",
      summary: "工具面和 secret management 同时迈了一大步。",
      axisEntries: {
        channels: "shared sendPayload 让多渠道 direct-text-media 统一走一条发送路径。",
        tools: "PDF tool 成为 first-class tool。",
        control: "outbound adapters 共享底层 payload 路径。",
        security: "SecretRef 覆盖扩展到更大范围的用户凭证面。",
        ops: "SecretRef 失败时的行为开始更加可诊断。"
      }
    },
    {
      date: "2026-03-08",
      stage: "openclaw",
      summary: "这是一个架构级关键日：context engine、ACP durable bindings、auth SecretRef 和 hook lifecycle 一起落地。",
      axisEntries: {
        channels: "ACP durable Discord channel / Telegram topic bindings 与 topic agent routing 一起成形。",
        models: "Gemini 3.1 Flash-Lite 正式进入模型兼容矩阵。",
        tools: "ContextEngine plugin、hook policy、compaction lifecycle hooks 把扩展点做实。",
        devices: "iOS App Store Connect release prep 与 Watch 资产整理进入发布链。",
        control: "sessions.get、durable ACP routing、context assembly 生命周期全都更可插拔。",
        security: "gateway auth token SecretRef 与 explicit auth.mode guardrails 一起升级。",
        ops: "Docker multi-stage、OPENCLAW_EXTENSIONS 和 container 变体让部署面更成熟。"
      }
    },
    {
      date: "2026-03-09",
      stage: "openclaw",
      summary: "这是运维与远程接入面的关键日，把可备份、可远程、可追 provenance 的路径补齐了。",
      axisEntries: {
        models: "openai-codex GPT-5.4 的 transport / context forward-compat 开始补齐。",
        tools: "Brave LLM-context search 与 browser relay / CDP 远程链继续强化。",
        devices: "Talk mode 拿到 silenceTimeoutMs，语音交互节奏可配置。",
        control: "ACP provenance 让会话来源和 trace 能被保留下来。",
        ops: "backup create / verify、remote gateway token、Tailscale remote discovery 一起进入主路径。"
      }
    },
    {
      date: "2026-03-12",
      stage: "openclaw",
      summary: "iOS front-end surface 开始明显丰富。",
      axisEntries: {
        models: "OpenRouter temporary model rows 为短期可用模型开放入口。",
        devices: "iOS Home canvas、docked toolbar、smaller-phone 适配一起出现。",
        control: "Home canvas 开始更稳定地路由回真实 main session。"
      }
    },
    {
      date: "2026-03-13",
      stage: "openclaw",
      summary: "这是 UI 和 model/runtime 并进的一天，dashboard-v2 和 fast mode 都很关键。",
      axisEntries: {
        models: "OpenAI / Anthropic fast mode 进入统一控制面。",
        control: "dashboard-v2、provider-plugin architecture、sessions_yield 同日落地。",
        security: "pairing bootstrap tokens 与 workspace plugin auto-load hardening 提升默认安全性。",
        ops: "Kubernetes starter path 让部署面正式进入文档主线。"
      }
    },
    {
      date: "2026-03-14",
      stage: "openclaw",
      summary: "产品完成度显著上升：移动端、浏览器端和交互面一起被打磨。",
      axisEntries: {
        channels: "Slack interactive replies 把交互回复能力推进一层。",
        models: "默认模型轨道继续朝 GPT-5.4 靠拢。",
        tools: "Chrome DevTools attach mode、profile=user / chrome-relay、batched browser act 一起落地。",
        devices: "Android settings redesign 与 iOS onboarding pager 同步提升移动端完成度。",
        ops: "OPENCLAW_TZ 把 Docker 时区控制补齐。"
      }
    }
  ]
};
