(() => {
  const PRODUCT_AXES = [
    { key: "channels", label: "入口", short: "入口", description: "用户触达入口：消息渠道、回复机制、线程和互动能力" },
    { key: "models", label: "智能内核", short: "内核", description: "智能内核：模型目录、provider、auth、thinking 与上下文窗口" },
    { key: "tools", label: "工具执行", short: "执行", description: "工具执行层：browser、search、pdf、image、hooks 与 tool APIs" },
    { key: "devices", label: "设备", short: "设备", description: "设备体验：桌面、移动端、扩展、IDE 和 voice surfaces" },
    { key: "control", label: "平台控制", short: "平台", description: "平台控制：workspace、projects、sessions、tasks、bindings、dashboard 和 routing" },
    { key: "security", label: "安全治理", short: "安全", description: "安全治理：memory visibility、policy、sandbox、secrets、governance 和审计边界" },
    { key: "ops", label: "运维", short: "运维", description: "运行运维：deploy、quotas、rollout、admin、health、cleanup 和 account operations" }
  ];

  function buildActivity(metricLabel, unitLabel, rows) {
    const normalizedRows = rows
      .map((row) => ({ date: row.date, value: row.value }))
      .sort((a, b) => a.date.localeCompare(b.date));
    const maxValue = Math.max(0, ...normalizedRows.map((row) => row.value));
    return {
      metricLabel,
      unitLabel,
      maxValue,
      rows: normalizedRows,
      peakDays: normalizedRows.filter((row) => row.value === maxValue)
    };
  }

  function shared(url, dates) {
    return dates.map((date) => ({
      label: date,
      html_url: url,
      published_at: `${date}T12:00:00+08:00`,
      type: "official note"
    }));
  }

  window.MULTI_PRODUCT_DATA = {
    chatgpt: {
      generatedAt: "2026-03-16",
      axes: PRODUCT_AXES,
      stageMeta: {
        launch: {
          label: "产品首发",
          title: "Public Chat Launch",
          blurb: "2022-11-30 的 ChatGPT 首发，把对话式大模型第一次做成了大众可以直接使用的消费级产品。",
          color: "#5776a8"
        },
        productization: {
          label: "订阅与插件化",
          title: "GPT-4, Plugins, And Apps",
          blurb: "2023 年的 ChatGPT 很快长出 Plus、GPT-4、插件、代码执行和双端 app，开始从爆红 demo 变成真正的消费级产品。",
          color: "#6d86b3"
        },
        platform: {
          label: "平台化",
          title: "GPTs, Memory, And 4o",
          blurb: "到 2024 年，GPTs、Team、Memory、GPT-4o、Advanced Voice 和 Canvas 把 ChatGPT 从单一对话框推成更完整的平台。",
          color: "#4f7e73"
        },
        "multimodal-core": {
          label: "多模态基座",
          title: "Models Become Product Surface",
          blurb: "ChatGPT 先把前沿模型、推理和多模态能力拉成主卖点，再往更完整的工作台形态走。",
          color: "#5d82ac"
        },
        "workspace-turn": {
          label: "工作台化",
          title: "Projects And Branching",
          blurb: "对话开始能分叉、沉淀和归档，ChatGPT 从聊天器转向可长期使用的工作台。",
          color: "#c86e41"
        },
        personalization: {
          label: "个性化",
          title: "Memory And Domain Expansion",
          blurb: "记忆、解释性和垂直场景让 ChatGPT 更像持续陪伴式产品，而不是匿名答题器。",
          color: "#4a7d73"
        },
        "agentic-suite": {
          label: "Agent 化",
          title: "Research, Code, And Learning",
          blurb: "Deep research、交互式代码和学习模式让 ChatGPT 的工具执行层变得更完整。",
          color: "#8c4f86"
        }
      },
      jumpDates: [
        {
          date: "2022-11-30",
          title: "产品首发",
          note: "ChatGPT 以 research preview 公开发布，对话式 AI 第一次被做成大众级产品入口。"
        },
        {
          date: "2023-02-09",
          title: "订阅产品成形",
          note: "ChatGPT Plus 和模型版本选择出现，ChatGPT 不再只是爆红试验品，而有了明确商业化和分层结构。"
        },
        {
          date: "2023-03-14",
          title: "GPT-4 进入前台",
          note: "GPT-4 进入 ChatGPT Plus，免费与付费、标准与前沿能力第一次被清晰分层。"
        },
        {
          date: "2023-07-06",
          title: "代码执行进入主线",
          note: "Code Interpreter 让 ChatGPT 从会聊天升级为会执行代码和处理文件的工具。"
        },
        {
          date: "2023-09-25",
          title: "语音与图像",
          note: "Voice + image input 第一次把 ChatGPT 做成真正的多模态消费产品。"
        },
        {
          date: "2023-11-06",
          title: "GPTs 平台化",
          note: "自定义 GPT 让 ChatGPT 从单一助手转向可以被创建、复用和分享的平台。"
        },
        {
          date: "2024-01-10",
          title: "Store + Team",
          note: "GPT Store 和 Team 计划一起出现，ChatGPT 同时长出应用分发层和组织协作层。"
        },
        {
          date: "2024-05-13",
          title: "GPT-4o",
          note: "GPT-4o 把速度、文本、图像和语音能力重新拉齐，重写了 ChatGPT 的默认产品基线。"
        },
        {
          date: "2024-12-10",
          title: "Canvas",
          note: "Canvas 把代码、文稿和 Python 执行收进同一个工作面板，ChatGPT 的工作台属性明显增强。"
        },
        {
          date: "2025-04-16",
          title: "推理模型前移",
          note: "o3 / o4-mini 能在一次回答里调 web、Python、文件和图像，ChatGPT 明显往 agent 走。"
        },
        {
          date: "2025-09-17",
          title: "思考档位显式化",
          note: "Thinking time toggle 把速度和深度做成用户可见的产品旋钮。"
        },
        {
          date: "2025-12-10",
          title: "Projects 成形",
          note: "项目把 deep research、voice、search、image generation 和 Canvas 收到同一工作台。"
        },
        {
          date: "2026-02-10",
          title: "Deep Research 扩域",
          note: "GitHub 等连接器进入 deep research，ChatGPT 开始跨产品数据源做研究任务。"
        },
        {
          date: "2026-02-19",
          title: "代码块交互化",
          note: "代码解释不再停留在静态文本，ChatGPT 开始在答案内部直接运行和调试。"
        },
        {
          date: "2026-03-05",
          title: "前沿模型继续前移",
          note: "GPT-5.4 Thinking 进入 ChatGPT，前台产品继续承接更强推理模型。"
        },
        {
          date: "2026-03-10",
          title: "学习与异步任务并轨",
          note: "交互式学习模式和 Codex 自动 top-up 同时出现，学习和长任务都更连续。"
        }
      ],
      rows: [
        {
          date: "2022-11-30",
          stage: "launch",
          summary: "ChatGPT 公开发布，把聊天式 AI 从 demo 变成了大众产品入口。",
          axisEntries: {
            channels: "网页聊天框作为主入口公开上线，对话交互第一次成为大模型面向大众的默认产品形态。",
            models: "基于 GPT-3.5 系列的对话模型被包装成可直接使用的消费级产品能力。",
            control: "以 research preview 形式开放，用户反馈与产品迭代回路从第一天就直接连在一起。"
          }
        },
        {
          date: "2022-12-15",
          stage: "launch",
          summary: "ChatGPT 很快补上了历史记录和性能修整，开始从爆红页面变成可持续使用的产品。",
          axisEntries: {
            channels: "过去对话的查看、重命名和删除开始上线，聊天不再是一次性会话。",
            models: "模型被继续调优，拒答行为和整体表现都做了首轮修补。",
            ops: "日消息上限与性能实验说明服务压力已经进入正式运营状态。"
          }
        },
        {
          date: "2023-02-09",
          stage: "productization",
          summary: "ChatGPT Plus 让产品第一次出现订阅层、速度层和优先级层。",
          axisEntries: {
            models: "Plus 用户开始能在标准模型和 Turbo 之间切换，模型体验第一次被显式分层。",
            control: "订阅体系出现后，免费与付费、普通与早期体验的产品边界被拉开。",
            ops: "ChatGPT 开始有明确的付费容量管理和优先访问逻辑。"
          }
        },
        {
          date: "2023-03-14",
          stage: "productization",
          summary: "GPT-4 进入 ChatGPT Plus，前沿模型第一次直接成为产品卖点。",
          axisEntries: {
            models: "GPT-4 在 ChatGPT 中上线，复杂推理、复杂指令和创造力成为付费层的核心价值。",
            control: "动态消息上限说明前沿模型已经被当成稀缺产品资源来管理。"
          }
        },
        {
          date: "2023-03-23",
          stage: "productization",
          summary: "插件、浏览和代码解释器第一次把 ChatGPT 变成可扩展工具壳。",
          axisEntries: {
            tools: "Browsing、Code Interpreter 和第三方插件一起出现，ChatGPT 不再只给文本回答。",
            control: "插件访问先走 waitlist，OpenAI 开始显式控制生态层的开放节奏。"
          }
        },
        {
          date: "2023-05-12",
          stage: "productization",
          summary: "Beta 面板把实验能力做成了用户可见、可切换的产品入口。",
          axisEntries: {
            tools: "Web browsing 和 third-party plugins 通过 Beta features 正式进入可操作体验。",
            control: "实验功能从后台灰度变成前台设置项，ChatGPT 开始有更明确的产品层级。"
          }
        },
        {
          date: "2023-05-24",
          stage: "productization",
          summary: "iOS 和分享能力让 ChatGPT 明显从网页产品外扩到移动与社交传播。",
          axisEntries: {
            channels: "Shared links 和 Bing plugin 让聊天结果与外部世界的连接开始增强。",
            devices: "iOS app 持续扩到更多国家，移动端开始成为正式入口。",
            security: "iOS 也支持关闭聊天历史，隐私设置开始跨端出现。"
          }
        },
        {
          date: "2023-07-06",
          stage: "productization",
          summary: "Code Interpreter 上线后，ChatGPT 第一次有了直接运行代码和处理文件的工作台感。",
          axisEntries: {
            tools: "Code Interpreter 可运行 Python、读取上传文件、做图表和数据分析。",
            control: "这一能力通过 Beta panel 面向 Plus 用户进入主产品工作流。"
          }
        },
        {
          date: "2023-07-25",
          stage: "productization",
          summary: "Android app 上线后，ChatGPT 完成了移动双端入口。",
          axisEntries: {
            channels: "ChatGPT 从网页进一步扩成随身入口，使用场景明显更高频。",
            devices: "Android app 正式发布，移动端不再只靠 iOS。"
          }
        },
        {
          date: "2023-09-25",
          stage: "productization",
          summary: "Voice 和 image input 一起上线，ChatGPT 真正迈进多模态消费产品阶段。",
          axisEntries: {
            channels: "语音对话把聊天从打字框扩成更自然的实时交互入口。",
            tools: "Image input 让 ChatGPT 能直接看图、分析图和围绕图像完成任务。",
            devices: "iOS / Android 成为多模态体验的第一波承载面。"
          }
        },
        {
          date: "2023-10-16",
          stage: "productization",
          summary: "DALL·E 3 接入让 ChatGPT 开始直接产出图像，而不只是讨论图像。",
          axisEntries: {
            tools: "DALL·E 3 进入 ChatGPT，文本到图像生成成为对话内置能力。",
            channels: "ChatGPT 的回答形态开始从纯文本扩到直接生成视觉结果。"
          }
        },
        {
          date: "2023-11-06",
          stage: "platform",
          summary: "GPTs 让 ChatGPT 从单一助手变成可创建、可分享的应用平台。",
          axisEntries: {
            tools: "用户可以组合 instructions、knowledge 与 skills 来创建自定义 GPT。",
            control: "GPT creator 把能力封装、复用和分享做成正式产品层。"
          }
        },
        {
          date: "2024-01-10",
          stage: "platform",
          summary: "GPT Store 和 Team 计划一起到位，ChatGPT 同时长出分发生态和组织工作区。",
          axisEntries: {
            tools: "GPT Store 让 GPT 从个人配置升级成可发现、可流通的能力资产。",
            control: "ChatGPT Team 提供协作工作区和 admin tools，组织层开始成型。",
            ops: "面向团队的套餐、管理和分发开始成为正式商业结构。"
          }
        },
        {
          date: "2024-02-13",
          stage: "platform",
          summary: "Memory 开始测试后，ChatGPT 的长期上下文第一次被明确产品化。",
          axisEntries: {
            control: "Memory 让 ChatGPT 可以跨对话记住用户偏好和背景。",
            security: "用户可以查询、删除和关闭记忆，长期上下文开始有明确治理边界。"
          }
        },
        {
          date: "2024-04-01",
          stage: "platform",
          summary: "免登录直接使用，把 ChatGPT 的获客门槛压到了更低。",
          axisEntries: {
            channels: "用户无需注册就能直接开始使用 ChatGPT，入口摩擦显著下降。",
            ops: "OpenAI 开始把更广泛的流量入口当成产品策略本身。"
          }
        },
        {
          date: "2024-04-29",
          stage: "platform",
          summary: "Memory 扩到 Plus，长期上下文从小范围试验变成正式功能。",
          axisEntries: {
            control: "Memory 进入 Plus 用户主线体验，个性化上下文开始广泛可用。",
            security: "记忆开关与可管理性继续保留，默认化之前先做边界控制。"
          }
        },
        {
          date: "2024-05-13",
          stage: "platform",
          summary: "GPT-4o 把更快、更便宜、更像默认入口的旗舰模型推到前台。",
          axisEntries: {
            models: "GPT-4o 以更快的多模态旗舰定位进入 ChatGPT，文本与图像能力先行落地。",
            control: "免费、Plus、Team、Enterprise 之间的消息额度再次按新旗舰模型重排。"
          }
        },
        {
          date: "2024-11-19",
          stage: "platform",
          summary: "Advanced Voice 上 Web 后，ChatGPT 的语音入口不再局限于移动和桌面 app。",
          axisEntries: {
            channels: "Advanced Voice Mode 进入 Web，网页端也能做实时自然语音对话。",
            devices: "桌面浏览器被纳入 voice 主体验，跨端一致性更强。"
          }
        },
        {
          date: "2024-12-10",
          stage: "platform",
          summary: "Canvas 让 ChatGPT 在对话里长出一个真正的文稿和代码工作面板。",
          axisEntries: {
            tools: "Canvas 支持在画布里执行 Python、调试代码并迭代内容。",
            control: "Canvas 进入 GPTs 和 toolbox，开始成为主产品里的通用工作面。"
          }
        },
        {
          date: "2025-02-28",
          stage: "multimodal-core",
          summary: "GPT-4.5 进入 ChatGPT，产品开始把“更自然的对话感”当成核心卖点。",
          axisEntries: {
            models: "GPT-4.5 以研究预览进入 ChatGPT，前沿模型第一次被包装成更细腻、更自然的日常交互体验。",
            control: "模型分层开始更明确地区分“默认可用”和“更强但更贵”的前沿档位。"
          }
        },
        {
          date: "2025-04-16",
          stage: "multimodal-core",
          summary: "o3 和 o4-mini 把 ChatGPT 从聊天器推进成会调工具的推理工作台。",
          axisEntries: {
            models: "o3 与 o4-mini 进入 ChatGPT，推理模型正式成为主力选项。",
            tools: "模型可在一次回答里组合 web、Python、files 和 image reasoning，不再只给文本答案。",
            control: "任务编排开始更像 agent，而不是单轮聊天。"
          }
        },
        {
          date: "2025-05-14",
          stage: "multimodal-core",
          summary: "GPT-4.1 系列进入 ChatGPT，编码和网页开发场景有了更直接的模型定位。",
          axisEntries: {
            models: "GPT-4.1 与 GPT-4.1 mini 进入 ChatGPT，强调更强的指令跟随和编码能力。",
            tools: "网页开发和代码问答开始有更清晰的默认模型分工。"
          }
        },
        {
          date: "2025-06-18",
          stage: "multimodal-core",
          summary: "Record mode 让 ChatGPT 第一次更像会议记录和事后整理工具。",
          axisEntries: {
            devices: "macOS 版加入 Record mode，可把会议和语音内容转成可追踪笔记。",
            control: "记录内容开始能沉淀成后续对话的上下文，而不是一次性输入。"
          }
        },
        {
          date: "2025-07-16",
          stage: "multimodal-core",
          summary: "Record mode 从高阶试水继续扩圈，桌面端开始承担更重的工作流入口。",
          axisEntries: {
            devices: "Record mode 向更多商业用户扩张，桌面端的工作场景明显变重。",
            ops: "功能 rollout 开始按套餐分层推进。"
          }
        },
        {
          date: "2025-09-04",
          stage: "workspace-turn",
          summary: "对话分支让 ChatGPT 不再只有单线程聊天，工作流第一次显式分叉。",
          axisEntries: {
            channels: "用户可以从任意消息分叉出新的思路线，入口层不再是单条线性线程。",
            control: "聊天从线性会话转向可分叉的工作流。"
          }
        },
        {
          date: "2025-09-17",
          stage: "workspace-turn",
          summary: "Thinking time toggle 把模型努力程度做成前台可控项。",
          axisEntries: {
            models: "推理所花时间第一次成为用户可见的模型能力开关。",
            control: "ChatGPT 正在把速度与深度的取舍从后台策略改成前台产品旋钮。"
          }
        },
        {
          date: "2025-10-06",
          stage: "workspace-turn",
          summary: "Codex 进入 ChatGPT 体系，异步软件任务开始从聊天层直接发起。",
          axisEntries: {
            tools: "ChatGPT 开始承接 Codex 异步软件任务，编码执行层进入主产品工作流。",
            control: "任务和项目开始共享更长的工作上下文。"
          }
        },
        {
          date: "2025-12-10",
          stage: "workspace-turn",
          summary: "Projects 从文件夹概念升级成统一工作台。",
          axisEntries: {
            tools: "Projects 可以直接引用 deep research、voice、web search、image generation 和 Canvas。",
            control: "项目上下文从文件扩到多模态工具与研究结果。"
          }
        },
        {
          date: "2026-01-07",
          stage: "personalization",
          summary: "ChatGPT 开始更明确地进入高约束垂直场景。",
          axisEntries: {
            tools: "ChatGPT Health 上线，产品开始承接更强约束的专业场景。",
            security: "医疗内容带来更明确的专业边界与使用提示。"
          }
        },
        {
          date: "2026-01-15",
          stage: "personalization",
          summary: "Memory 变得更可解释，个性化上下文不再完全黑盒。",
          axisEntries: {
            control: "Memory 可以展示它引用过的过去对话，个性化上下文更可解释。",
            security: "用户对记忆来源和调用路径有更强可见性。"
          }
        },
        {
          date: "2026-02-10",
          stage: "agentic-suite",
          summary: "Deep research 开始跨 GitHub 等外部来源做任务，研究工作流明显升级。",
          axisEntries: {
            tools: "Deep research 增强 GitHub 等连接器，研究流程开始跨产品数据源。",
            control: "研究任务可以持续拉取外部来源，不再只靠网页搜索。"
          }
        },
        {
          date: "2026-02-19",
          stage: "agentic-suite",
          summary: "交互式代码块把解释和执行并到同一个答案面板里。",
          axisEntries: {
            channels: "用户可以在答案内部直接运行和调试代码，而不是跳出到别的工具。",
            tools: "Interactive code blocks 进入日常对话，让解释和执行更连贯。"
          }
        },
        {
          date: "2026-02-25",
          stage: "agentic-suite",
          summary: "Projects 继续吃进更多工具来源，ChatGPT 的统一工作台形态更明确。",
          axisEntries: {
            tools: "Projects 现在能把 deep research、voice、Canvas 和搜索等来源都纳入同一项目。",
            control: "项目上下文进一步从文件扩到多模态与外部来源。"
          }
        },
        {
          date: "2026-02-27",
          stage: "agentic-suite",
          summary: "Web 和 Android 入口同步修整，ChatGPT 的多端工作台感更强。",
          axisEntries: {
            channels: "网页版体验更新，聊天页更强调工作台式入口。",
            devices: "Android 开始支持本地草稿与更顺的移动编辑。"
          }
        },
        {
          date: "2026-03-05",
          stage: "agentic-suite",
          summary: "GPT-5.4 Thinking 进入 ChatGPT，前沿推理继续向主产品前移。",
          axisEntries: {
            models: "GPT-5.4 Thinking 进入 ChatGPT，前沿推理模型继续前移到主产品前台。",
            control: "ChatGPT 继续把“快答”和“深想”做成明确产品层。"
          }
        },
        {
          date: "2026-03-10",
          stage: "agentic-suite",
          summary: "学习模式和 Codex 长任务补给一起落地，ChatGPT 更像全天候工作台。",
          axisEntries: {
            tools: "Interactive learning mode 把解释、追问和练习做成结构化学习回路。",
            control: "Codex 支持按需自动 top-up，让长时间异步任务更连续。"
          }
        },
        {
          date: "2026-03-11",
          stage: "agentic-suite",
          summary: "GPT-5.1 下线，模型阵列继续向更少但更强的主选项收敛。",
          axisEntries: {
            models: "GPT-5.1 从 ChatGPT 下线，模型面板继续收敛到更少但更强的默认选项。",
            control: "产品在继续减少模型选择复杂度。"
          }
        }
      ],
      latestDelta: {
        generatedAt: "2026-03-16T00:00:00+08:00",
        window: {
          start_local: "2026-03-05T00:00:00+08:00",
          end_local: "2026-03-11T23:59:00+08:00"
        },
        meta: [
          { label: "窗口", value: "2026-03-05 至 2026-03-11" },
          { label: "官方更新", value: "4 条" },
          { label: "最近日期", value: "2026-03-11" },
          { label: "来源", value: "OpenAI ChatGPT release notes" }
        ],
        featureItems: [
          "GPT-5.4 Thinking 进入 ChatGPT，前沿推理模型继续向前台产品前移。",
          "Interactive learning mode 开始把讲解、提问和练习做成一体化学习回路。",
          "Codex 支持自动 top-up，长时间异步编码任务更不容易中断。",
          "Projects 与多模态工具的工作台化趋势仍在延续。"
        ],
        fixItems: [
          "GPT-5.1 从产品面板退出，模型阵列被继续收敛。",
          "ChatGPT 继续减少模型与工作流界面的复杂度。"
        ],
        releases: shared("https://help.openai.com/en/articles/6825453-chatgpt-release-notes", [
          "2026-03-11",
          "2026-03-10",
          "2026-03-05"
        ]),
        topScopes: [
          { scope: "智能内核", count: 2 },
          { scope: "工具执行", count: 2 },
          { scope: "平台控制", count: 2 }
        ]
      },
      activity: buildActivity("官方更新条数", "条更新", [
        { date: "2022-11-30", value: 1 },
        { date: "2022-12-15", value: 1 },
        { date: "2023-02-09", value: 1 },
        { date: "2023-03-14", value: 1 },
        { date: "2023-03-23", value: 1 },
        { date: "2023-05-12", value: 1 },
        { date: "2023-05-24", value: 1 },
        { date: "2023-07-06", value: 1 },
        { date: "2023-07-25", value: 1 },
        { date: "2023-09-25", value: 1 },
        { date: "2023-10-16", value: 1 },
        { date: "2023-11-06", value: 1 },
        { date: "2024-01-10", value: 1 },
        { date: "2024-02-13", value: 1 },
        { date: "2024-04-01", value: 1 },
        { date: "2024-04-29", value: 1 },
        { date: "2024-05-13", value: 1 },
        { date: "2024-11-19", value: 1 },
        { date: "2024-12-10", value: 1 },
        { date: "2025-02-28", value: 1 },
        { date: "2025-04-16", value: 1 },
        { date: "2025-05-14", value: 2 },
        { date: "2025-06-18", value: 1 },
        { date: "2025-07-16", value: 1 },
        { date: "2025-09-04", value: 1 },
        { date: "2025-09-17", value: 1 },
        { date: "2025-10-06", value: 1 },
        { date: "2025-12-10", value: 1 },
        { date: "2026-01-07", value: 1 },
        { date: "2026-01-15", value: 1 },
        { date: "2026-02-10", value: 2 },
        { date: "2026-02-19", value: 1 },
        { date: "2026-02-25", value: 1 },
        { date: "2026-02-27", value: 2 },
        { date: "2026-03-05", value: 1 },
        { date: "2026-03-10", value: 2 },
        { date: "2026-03-11", value: 1 }
      ])
    },
    claude: {
      generatedAt: "2026-03-16",
      axes: PRODUCT_AXES,
      stageMeta: {
        launch: {
          label: "公开发布",
          title: "Claude Public Debut",
          blurb: "2023-03-14 的 Claude 首发先以 Slack 与 API 入口出现，Anthropic 从模型公司开始长出通用 AI 产品面。",
          color: "#5776a8"
        },
        rollout: {
          label: "多端铺开",
          title: "iOS, Team, And Global Rollout",
          blurb: "2024 年上半年 Claude 才真正从早期助手长成 web / iOS / Android / Team 的多入口产品。",
          color: "#6d86b3"
        },
        foundation: {
          label: "工作台基座",
          title: "Artifacts, Projects, And Desktop",
          blurb: "Artifacts、Projects、Enterprise、Desktop、Styles 和 Analysis 把 Claude 从聊天器推向知识工作台。",
          color: "#4f7e73"
        },
        research: {
          label: "协作研究",
          title: "Sonnet 3.7, Research, And Workspace",
          blurb: "2025 年上半年 Claude 把 extended thinking、Research、Workspace integrations 和更强模型逐步拉进主产品。",
          color: "#c27a43"
        },
        extensions: {
          label: "扩展入口",
          title: "Chrome And Mobile Expansion",
          blurb: "Claude 先把 Chrome、移动端和文件编辑做强，把入口从聊天框扩到更多真实工作环境。",
          color: "#7690c2"
        },
        workspace: {
          label: "工作流化",
          title: "Memory, Skills, And Office Work",
          blurb: "Memory、skills 与 Office 工作流一起进入主线，Claude 开始像组织工作台。",
          color: "#c86e41"
        },
        cowork: {
          label: "协作搭子",
          title: "Cowork And Plugin Expansion",
          blurb: "Cowork、插件与团队套餐让 Claude 从个人助手向组织协作者演进。",
          color: "#4a7d73"
        },
        "visual-output": {
          label: "可视产出",
          title: "Shared Context And Visual Output",
          blurb: "共享上下文、LLM gateway 和图表生成把 Claude 推向更完整的分析型工作台。",
          color: "#8c4f86"
        }
      },
      jumpDates: [
        {
          date: "2023-03-14",
          title: "产品首发",
          note: "Claude 以 API 与 Slack 入口公开亮相，Anthropic 第一次把自家助手做成明确的产品线。"
        },
        {
          date: "2023-11-21",
          title: "claude.ai 成熟化",
          note: "Claude 2.1 开始驱动 claude.ai，200K 上下文和 tool use 让 Claude 的产品形态第一次明显拉开。"
        },
        {
          date: "2024-05-01",
          title: "iOS + Team",
          note: "iOS app 和 Team 计划一起发布，Claude 正式从单点网页助手长出移动和组织层。"
        },
        {
          date: "2024-06-20",
          title: "Artifacts 预览",
          note: "Claude 3.5 Sonnet 和 Artifacts 一起出现，Claude 从聊天框明显变成创造与协作工作面。"
        },
        {
          date: "2024-09-04",
          title: "Enterprise 进入主线",
          note: "Claude Enterprise 把内部知识、安全协作和组织部署能力正式做成产品层。"
        },
        {
          date: "2024-10-31",
          title: "桌面入口",
          note: "Windows / Mac desktop apps 加上语音输入，让 Claude 的使用面再从 Web 外扩一层。"
        },
        {
          date: "2025-02-24",
          title: "Sonnet 3.7",
          note: "Claude 3.7 Sonnet 把 near-instant 与 extended thinking 做成同一个产品模型的两种模式。"
        },
        {
          date: "2025-04-15",
          title: "Research",
          note: "Research 和 Google Workspace integration 让 Claude 更像连接企业内容源的协作研究工作台。"
        },
        {
          date: "2025-09-11",
          title: "Memory 成为正式层",
          note: "Memory 扩到 Team，Claude 也第一次给敏感场景补上 Incognito mode。"
        },
        {
          date: "2025-11-24",
          title: "知识工作台跃迁",
          note: "Opus 4.5、Excel analysis beta 和 context compaction 一起把复杂知识工作往前推。"
        },
        {
          date: "2025-12-18",
          title: "Skills 生态出现",
          note: "组织级 skills、Claude in Chrome 扩圈和 Claude Code 联动让 Claude 明显平台化。"
        },
        {
          date: "2026-01-12",
          title: "Cowork 出现",
          note: "Desktop Cowork preview 让 Claude 开始尝试常驻式协作伙伴形态。"
        },
        {
          date: "2026-02-24",
          title: "Plugins 走向广义生态",
          note: "Marketplace/self-serve plugins 把 Claude 的外部能力接入改成更标准的生态层。"
        },
        {
          date: "2026-03-11",
          title: "组织工作台化",
          note: "Excel / PowerPoint shared context、skills 与 LLM gateway 一起出现，企业工作台特征更明显。"
        },
        {
          date: "2026-03-12",
          title: "可视化产出",
          note: "Charts 与 diagrams 把 Claude 的结果形态从纯文本推到图形产出。"
        }
      ],
      rows: [
        {
          date: "2023-03-14",
          stage: "launch",
          summary: "Claude 首次公开发布，先以 API 与 Slack 助手形态进入真实工作流。",
          axisEntries: {
            channels: "Claude 先通过 Slack 和候补产品入口触达用户，而不是从独立工作台直接起步。",
            models: "Claude 与 Claude Instant 成为 Anthropic 对外的明确产品命名与模型分层。",
            control: "Anthropic 从模型提供方开始长出助手产品面，产品化边界第一次明确。"
          }
        },
        {
          date: "2023-11-21",
          stage: "launch",
          summary: "Claude 2.1 让 claude.ai 第一次有了真正的长上下文和工具化轮廓。",
          axisEntries: {
            models: "Claude 2.1 把 200K context 和更低幻觉率带进 Claude 的产品面。",
            tools: "tool use beta 让 Claude 开始具备调用外部函数和搜索的能力。",
            control: "Claude 2.1 明确写入 claude.ai free / Pro 体验，产品层正式和模型层一起升级。"
          }
        },
        {
          date: "2024-05-01",
          stage: "rollout",
          summary: "iOS app 和 Team 计划一起上线，Claude 正式长出移动端和组织工作区。",
          axisEntries: {
            devices: "Claude iOS app 正式发布，移动端成为一等入口。",
            control: "Team 计划带来共享工作区、用户管理和计费管理。",
            ops: "Claude 开始有更清晰的团队商业化结构，而不再只有个人 Pro。"
          }
        },
        {
          date: "2024-05-14",
          stage: "rollout",
          summary: "欧洲上线把 Claude 从区域产品推向更完整的国际化消费产品。",
          axisEntries: {
            channels: "Claude.ai 在欧洲正式可用，消费入口的地域覆盖明显扩大。",
            devices: "iOS app 与 web 一起进入欧洲市场。",
            ops: "Claude Pro 与 Team 的定价和国际 rollout 开始标准化。"
          }
        },
        {
          date: "2024-06-05",
          stage: "rollout",
          summary: "加拿大上线继续把 Claude 的消费、API 和团队产品一起往外推。",
          axisEntries: {
            channels: "Claude.ai 继续做国家级扩张，不再只局限少数市场。",
            devices: "iOS app 与 API、Team 计划一起在加拿大可用。",
            ops: "Claude 的国际市场 rollout 明显按整套产品栈推进。"
          }
        },
        {
          date: "2024-06-20",
          stage: "foundation",
          summary: "Claude 3.5 Sonnet 和 Artifacts 一起出现后，Claude 开始像真正的创造工作台。",
          axisEntries: {
            models: "Claude 3.5 Sonnet 免费进入 claude.ai，主产品智能内核明显跃迁。",
            tools: "Artifacts 预览上线，Claude 能直接生成和迭代文本、代码与交互式内容。",
            control: "Artifacts 面向所有 claude.ai plans 可用，Claude 的工作面首次前台化。"
          }
        },
        {
          date: "2024-06-25",
          stage: "foundation",
          summary: "Projects 让 Claude 开始能围绕持续上下文组织长期工作。",
          axisEntries: {
            tools: "Projects 可以把风格指南、代码库、访谈记录等长期材料作为固定上下文。",
            control: "Claude 不再只围绕单条聊天，而开始围绕项目组织知识和任务。"
          }
        },
        {
          date: "2024-07-09",
          stage: "foundation",
          summary: "Artifacts 开始支持发布、分享和 remix，Claude 的产出第一次有了传播层。",
          axisEntries: {
            channels: "Artifacts 可以被发布、分享和 remix，Claude 的结果开始具备传播与再创作路径。",
            tools: "Artifacts 从私有生成物扩展成可复用的创作对象。"
          }
        },
        {
          date: "2024-07-16",
          stage: "rollout",
          summary: "Android app 到位后，Claude 的移动双端入口补齐。",
          axisEntries: {
            channels: "Claude 的日常入口继续从 web 向高频移动场景外扩。",
            devices: "Claude Android app 正式发布，移动端体验不再只靠 iOS。"
          }
        },
        {
          date: "2024-08-27",
          stage: "foundation",
          summary: "Artifacts GA 说明 Claude 的工作面已经从预览功能升级成主产品结构。",
          axisEntries: {
            tools: "Artifacts 正式进入 Free、Pro、Team 主线，并扩到 iOS / Android。",
            channels: "Claude 的结果开始更自然地以可见、可迭代的双栏工作面呈现。"
          }
        },
        {
          date: "2024-09-04",
          stage: "foundation",
          summary: "Enterprise 计划让 Claude 正式进入内部知识和安全协作场景。",
          axisEntries: {
            control: "Enterprise 把安全协作、组织级管理和内部知识接入做成正式产品层。",
            security: "Claude 明确开始服务带内部知识与合规要求的组织场景。"
          }
        },
        {
          date: "2024-10-31",
          stage: "foundation",
          summary: "桌面 app 和语音输入一起落地，Claude 的入口层继续变厚。",
          axisEntries: {
            channels: "语音输入开始成为 Claude 移动端和桌面端的自然输入方式之一。",
            devices: "Windows / Mac desktop apps 上线，Claude 不再只依赖浏览器。"
          }
        },
        {
          date: "2024-11-21",
          stage: "foundation",
          summary: "Google Docs integration 让 Claude 开始直接吃进工作文档源。",
          axisEntries: {
            tools: "Google Docs integration 让 Claude 可以围绕组织文档做更直接的问答与总结。",
            control: "Claude 的工作流开始从单点对话转向连接外部知识源。"
          }
        },
        {
          date: "2024-11-26",
          stage: "foundation",
          summary: "Styles 把输出风格变成正式可控项，Claude 更像有长期偏好的助手。",
          axisEntries: {
            control: "Styles 让用户可以持续定制 Claude 的回答方式和风格偏好。"
          }
        },
        {
          date: "2024-12-18",
          stage: "foundation",
          summary: "Projects 和 Analysis 一起补强后，Claude 的知识工作台结构更完整。",
          axisEntries: {
            tools: "Projects 可直接从首页创建，Analysis 支持更强的数学与符号计算。",
            control: "项目入口更前台，Claude 越来越围绕长期工作区组织能力。"
          }
        },
        {
          date: "2024-12-19",
          stage: "foundation",
          summary: "大 Excel 文件分析和更细粒度的 artifacts 编辑把 Claude 推向更真实的生产任务。",
          axisEntries: {
            tools: "Analysis tool 可处理 30MB Excel 文件，并支持对 artifacts 做 targeted edits。",
            devices: "这些分析能力同时覆盖 web 与 mobile，工作流开始跨端一致。"
          }
        },
        {
          date: "2024-12-20",
          stage: "foundation",
          summary: "Custom instructions 让 Claude 的长期偏好设置正式产品化。",
          axisEntries: {
            control: "custom instructions 提供持久化的响应偏好设置，Claude 的长期个性第一次前台化。",
            security: "长期偏好与项目上下文开始需要更清晰的可见边界。"
          }
        },
        {
          date: "2025-02-24",
          stage: "research",
          summary: "Claude 3.7 Sonnet 把 near-instant 和 extended thinking 合成到同一产品模型里。",
          axisEntries: {
            models: "Claude Sonnet 3.7 进入 claude.ai，用户可以在同一模型里选择快答或 extended thinking。",
            control: "Claude 开始把思考深度做成前台可理解的产品行为，而不是纯后台差异。"
          }
        },
        {
          date: "2025-04-15",
          stage: "research",
          summary: "Research 和 Google Workspace integration 让 Claude 明显朝协作研究工作台走。",
          axisEntries: {
            tools: "Research 能 agentically 搜索内部与外部来源，Google Workspace integration 接入邮件、日历和文档。",
            control: "Claude 开始围绕组织内容源做跨来源推理，而不是只围绕聊天上下文。"
          }
        },
        {
          date: "2025-05-22",
          stage: "research",
          summary: "Sonnet 4 进入 claude.ai 后，Claude 的主产品模型再次前移。",
          axisEntries: {
            models: "Claude Sonnet 4 进入 claude.ai，主产品智能内核再次升级。",
            control: "Claude 保持用更强默认模型持续抬高主产品能力上限。"
          }
        },
        {
          date: "2025-08-20",
          stage: "extensions",
          summary: "Claude 开始把团队商业包装和 Claude Code 一起打包进去。",
          axisEntries: {
            control: "Team 计划把 Claude Code seat 与更高 usage limits 放进标准/高级档，组织级使用被更明确地产品化。",
            ops: "商业包装开始把 Claude 从个人助手推向团队标配。"
          }
        },
        {
          date: "2025-08-26",
          stage: "extensions",
          summary: "Claude in Chrome 出现后，浏览器正式成了 Claude 的一等入口。",
          axisEntries: {
            channels: "浏览网页时可直接把当前内容带给 Claude，入口层不再只靠复制粘贴。",
            tools: "Claude in Chrome 让网页理解与总结成为原位动作。"
          }
        },
        {
          date: "2025-09-03",
          stage: "extensions",
          summary: "移动端开始像随身收件箱，Claude 的内容入口明显外扩。",
          axisEntries: {
            devices: "iOS / Android 应用可从更多应用直接把内容发给 Claude。",
            tools: "移动端开始承担收集、归纳和转写型工作流。"
          }
        },
        {
          date: "2025-09-09",
          stage: "extensions",
          summary: "Claude 第一次不只生成文本，而是直接创建和编辑文件。",
          axisEntries: {
            tools: "Claude 开始直接创建和编辑文件，而不只是生成建议文本。",
            control: "产品从问答器跨到可落地的生产工具。"
          }
        },
        {
          date: "2025-09-11",
          stage: "extensions",
          summary: "Memory 和 Incognito 同时落地，Claude 的长期上下文和边界一起成形。",
          axisEntries: {
            control: "Memory 扩到 Team，长期上下文开始走向组织级共享。",
            security: "Incognito mode 给敏感会话单独的非记忆路径。"
          }
        },
        {
          date: "2025-09-16",
          stage: "extensions",
          summary: "Chrome integration 继续长出长流程和指令化工作流。",
          axisEntries: {
            channels: "浏览器入口继续从被动阅读转向主动执行。",
            tools: "Chrome integration 扩到 long-running workflows 和 slash commands。"
          }
        },
        {
          date: "2025-09-29",
          stage: "workspace",
          summary: "Sonnet 4.5 和移动端文件编辑一起把 Claude 推向更强的日常生产力层。",
          axisEntries: {
            models: "Sonnet 4.5 进入 Claude 主线。",
            tools: "文件创建与编辑扩到更多付费层。",
            devices: "移动端生产力能力明显抬升。"
          }
        },
        {
          date: "2025-10-15",
          stage: "workspace",
          summary: "Claude 开始明显具备半自动工作流节奏。",
          axisEntries: {
            tools: "Chrome 集成新增 scheduled tasks、follow a plan 与更稳的页面理解。",
            control: "Claude 不再只是响应提示，而开始按计划执行。"
          }
        },
        {
          date: "2025-10-23",
          stage: "workspace",
          summary: "Memory 扩到 Pro / Max，个性化上下文成了高阶产品的默认特性。",
          axisEntries: {
            control: "Memory 扩到 Pro / Max，长期上下文成为更高层套餐的显式价值。",
            security: "记忆权限和可见性变成核心产品治理点。"
          }
        },
        {
          date: "2025-11-24",
          stage: "workspace",
          summary: "Opus 4.5、Excel analysis beta 和 context compaction 一起拉高知识工作能力上限。",
          axisEntries: {
            models: "Opus 4.5 进入 Claude 产品线。",
            tools: "Excel analysis beta 把表格分析带入主体验。",
            control: "Context compaction 第一次被明确产品化，用来托住更长工作流。"
          }
        },
        {
          date: "2025-12-18",
          stage: "workspace",
          summary: "Skills 生态出现后，Claude 从个人工具更像团队平台。",
          axisEntries: {
            channels: "Claude in Chrome beta 扩到所有付费用户。",
            tools: "组织级 skills 让团队可以把固定工作法沉淀进 Claude。",
            control: "Claude Code 和 Claude surfaces 开始共享更统一的技能层。"
          }
        },
        {
          date: "2026-01-12",
          stage: "cowork",
          summary: "Cowork preview 让 Claude 开始尝试常驻式协作伙伴的形态。",
          axisEntries: {
            devices: "Desktop 版推出 Cowork preview，桌面端角色明显变重。",
            tools: "移动端新增 health and fitness 体验。",
            control: "Claude 开始尝试持续陪伴式协作，而不是只等用户点开。"
          }
        },
        {
          date: "2026-01-16",
          stage: "cowork",
          summary: "Cowork 扩到 Pro，Claude 与 Claude Code 的产品线绑定得更紧。",
          axisEntries: {
            models: "旧模型开始有节奏地退场，产品线在收敛。",
            tools: "Cowork 扩到 Pro，更多用户可用常驻协作形态。",
            control: "Team standard seats 直接包含 Claude Code，跨产品协作更紧。"
          }
        },
        {
          date: "2026-02-05",
          stage: "cowork",
          summary: "Opus 4.6 与 Office 工作流一起进场，Claude 更像白领工作台。",
          axisEntries: {
            models: "Opus 4.6 进入主线。",
            tools: "PowerPoint add-in 与更深的 Excel operations 补强 office 工作流。"
          }
        },
        {
          date: "2026-02-24",
          stage: "cowork",
          summary: "插件从零散能力变成更标准的生态层。",
          axisEntries: {
            tools: "Marketplace / self-serve plugins 让 Claude 能更系统地接入长尾外部能力。",
            security: "管理员拿到更清晰的插件治理入口。"
          }
        },
        {
          date: "2026-02-25",
          stage: "cowork",
          summary: "Scheduled tasks 向团队层扩张，Claude 的计划执行开始标准化。",
          axisEntries: {
            tools: "Scheduled tasks 向 Team / Enterprise / Edu 扩张。",
            control: "Claude 的计划执行从个人体验走向团队标准功能。"
          }
        },
        {
          date: "2026-03-02",
          stage: "visual-output",
          summary: "Memory 扩到免费用户，个性化不再只属于高价层。",
          axisEntries: {
            control: "Memory 扩到 free，长期上下文开始成为更普遍的产品默认。",
            security: "更多用户需要面对记忆管理与退出机制。"
          }
        },
        {
          date: "2026-03-11",
          stage: "visual-output",
          summary: "Claude 更明确地朝组织工作台而不是聊天窗口演化。",
          axisEntries: {
            tools: "Excel / PowerPoint 的共享上下文、skills 与 LLM gateway 一起推进。",
            control: "Claude 越来越像组织级工作台，而不是单点对话窗口。",
            ops: "企业集成与网关能力变得更重。"
          }
        },
        {
          date: "2026-03-12",
          stage: "visual-output",
          summary: "Claude 的产出形态从纯文本明显走向图形化。",
          axisEntries: {
            channels: "结果展示开始从纯文本走向更丰富的交互与可视产物。",
            tools: "对话内 charts / diagrams 让分析结果直接转成图表和示意图。"
          }
        }
      ],
      latestDelta: {
        generatedAt: "2026-03-16T00:00:00+08:00",
        window: {
          start_local: "2026-03-02T00:00:00+08:00",
          end_local: "2026-03-12T23:59:00+08:00"
        },
        meta: [
          { label: "窗口", value: "2026-03-02 至 2026-03-12" },
          { label: "官方更新", value: "3 条" },
          { label: "最近日期", value: "2026-03-12" },
          { label: "来源", value: "Anthropic Claude release notes" }
        ],
        featureItems: [
          "Memory 扩到 free，Claude 的长期上下文开始成为更普遍的默认特性。",
          "Excel / PowerPoint shared context、skills 与 LLM gateway 一起把 Claude 推向组织工作台。",
          "Charts / diagrams 把 Claude 的结果形态从纯文本扩到图形输出。"
        ],
        fixItems: [
          "免费用户的记忆治理和退出机制变得更重要。",
          "企业侧需要同时管理 skills、gateway 与 office context 的新边界。"
        ],
        releases: shared("https://support.claude.com/en/articles/12138966-release-notes", [
          "2026-03-12",
          "2026-03-11",
          "2026-03-02"
        ]),
        topScopes: [
          { scope: "工具执行", count: 3 },
          { scope: "平台控制", count: 2 },
          { scope: "安全治理", count: 1 }
        ]
      },
      activity: buildActivity("官方更新条数", "条更新", [
        { date: "2023-03-14", value: 1 },
        { date: "2023-11-21", value: 1 },
        { date: "2024-05-01", value: 1 },
        { date: "2024-05-14", value: 1 },
        { date: "2024-06-05", value: 1 },
        { date: "2024-06-20", value: 1 },
        { date: "2024-06-25", value: 1 },
        { date: "2024-07-09", value: 1 },
        { date: "2024-07-16", value: 1 },
        { date: "2024-08-27", value: 1 },
        { date: "2024-09-04", value: 1 },
        { date: "2024-10-31", value: 1 },
        { date: "2024-11-21", value: 1 },
        { date: "2024-11-26", value: 1 },
        { date: "2024-12-18", value: 1 },
        { date: "2024-12-19", value: 1 },
        { date: "2024-12-20", value: 1 },
        { date: "2025-02-24", value: 1 },
        { date: "2025-04-15", value: 1 },
        { date: "2025-05-22", value: 1 },
        { date: "2025-08-20", value: 1 },
        { date: "2025-08-26", value: 1 },
        { date: "2025-09-03", value: 1 },
        { date: "2025-09-09", value: 1 },
        { date: "2025-09-11", value: 1 },
        { date: "2025-09-16", value: 1 },
        { date: "2025-09-29", value: 1 },
        { date: "2025-10-15", value: 1 },
        { date: "2025-10-23", value: 1 },
        { date: "2025-11-24", value: 1 },
        { date: "2025-12-18", value: 1 },
        { date: "2026-01-12", value: 1 },
        { date: "2026-01-16", value: 1 },
        { date: "2026-02-05", value: 1 },
        { date: "2026-02-24", value: 1 },
        { date: "2026-02-25", value: 1 },
        { date: "2026-03-02", value: 1 },
        { date: "2026-03-11", value: 1 },
        { date: "2026-03-12", value: 1 }
      ])
    },
    codex: {
      generatedAt: "2026-03-16",
      axes: PRODUCT_AXES,
      stageMeta: {
        preview: {
          label: "CLI 起步",
          title: "Research Preview",
          blurb: "Codex CLI 从 2025-04-16 的公开首发起步，随后再用登录与免费额度把更多开发者拉进命令行工作流。",
          color: "#6d86b3"
        },
        "agentic-cli": {
          label: "Agent CLI",
          title: "GPT-5-Codex Workflow",
          blurb: "GPT-5-Codex 到位后，CLI 从模型壳升级成完整的 agent 工作流入口。",
          color: "#c86e41"
        },
        "pro-coding": {
          label: "职业化",
          title: "Max, Mini, And Enterprise",
          blurb: "Codex CLI 开始同时覆盖质量、速度、企业治理与跨平台支持。",
          color: "#4a7d73"
        },
        "security-suite": {
          label: "安全工作流",
          title: "Security And Faster Core",
          blurb: "更快的核心模型和安全审查工作流，把 Codex CLI 往更专业的开发者套件推进。",
          color: "#8c4f86"
        }
      },
      jumpDates: [
        {
          date: "2025-04-16",
          title: "CLI 首发",
          note: "Codex CLI 以 npm 公开首发，本地 coding agent、审批流和沙箱边界从第一天就一起出现。"
        },
        {
          date: "2025-05-16",
          title: "CLI 低门槛化",
          note: "ChatGPT 登录、免费 credits 和 codex-mini-latest 让 CLI 不再只服务重度 API 用户。"
        },
        {
          date: "2025-08-15",
          title: "CLI 可靠性上台阶",
          note: "登录链路 Rust 化、markdown streaming 和 diff 可读性优化一起落地，CLI 开始明显从首发工具走向长期工作流。"
        },
        {
          date: "2025-09-15",
          title: "Agent Workflow 成形",
          note: "GPT-5-Codex、MCP、approval modes、to-dos 和 compaction 一起把 CLI 推成真正的 coding agent。"
        },
        {
          date: "2025-10-06",
          title: "企业化入口",
          note: "Slack、SDK、admin features、internet access 和 flex processing 让 CLI 进入企业工作流。"
        },
        {
          date: "2025-12-02",
          title: "线程与审查工作流成形",
          note: "thread / turn 元数据、review detached、MCP 增强与 observability 一起让 Codex CLI 更适合长期协作和审查流。"
        },
        {
          date: "2025-12-18",
          title: "职业级编码加强",
          note: "GPT-5.2-Codex、Windows 和 cybersecurity improvements 一起拉高 CLI 上限。"
        },
        {
          date: "2026-01-09",
          title: "分叉与技能层前移",
          note: "thread fork、requirements/list、sandbox upgrade 和 skills API 深化，CLI 开始更像可分叉的 agent runtime。"
        },
        {
          date: "2026-03-05",
          title: "插件与多代理工作流",
          note: "plugin system、marketplace、multi-agent handoff 与 memory guardrails 一起把 Codex CLI 推向更完整的平台化工作流。"
        },
        {
          date: "2026-03-06",
          title: "安全审查模式",
          note: "Codex Security preview 把代码审计、根因定位和自动修复拉进 Codex developer suite。"
        }
      ],
      rows: [
        {
          date: "2025-04-16",
          stage: "preview",
          summary: "Codex CLI Day One 就是本地 coding agent，而不是单纯的模型壳。",
          axisEntries: {
            tools: "首发即提供本地 coding agent 的基线链路，开发者可以直接在终端里让 Codex 读代码、改代码并执行任务。",
            control: "npm 公开发布让 Codex CLI 从第一天就进入面向开发者的公开迭代节奏。",
            security: "三级审批与沙箱执行边界在首发时就被摆上台面，安全模型不是后补能力。"
          }
        },
        {
          date: "2025-05-16",
          stage: "preview",
          summary: "Codex CLI 从第一天就被做成了低门槛试用型开发者工具。",
          axisEntries: {
            models: "codex-mini-latest 成为 CLI 的默认模型路径。",
            control: "支持用 ChatGPT 账号登录，CLI 不再只靠 API key。",
            ops: "开发者拿到免费 API credits，试用门槛显著下降。"
          }
        },
        {
          date: "2025-07-08",
          stage: "preview",
          summary: "Codex CLI 进入稳定语义版本节奏，产品开始从首发试水转向连续发布。",
          axisEntries: {
            control: "版本号从早期构建号过渡到更稳定的语义版本节奏，CLI 的公开演进路线开始清晰。",
            ops: "发布管理开始更像持续交付产品，而不是研究预览附属物。"
          }
        },
        {
          date: "2025-08-15",
          stage: "preview",
          summary: "登录链路 Rust 化后，Codex CLI 开始明显补底层可靠性和输出体验。",
          axisEntries: {
            control: "登录服务 Rust 化，认证链路稳定性被继续补强。",
            channels: "markdown streaming 与 diff 可读性优化让终端交互更像长期可用的开发者产品。"
          }
        },
        {
          date: "2025-09-15",
          stage: "agentic-cli",
          summary: "GPT-5-Codex 到位后，Codex CLI 终于有了完整的 agent workflow 骨架。",
          axisEntries: {
            models: "GPT-5-Codex 成为 CLI 的新默认智能内核。",
            tools: "CLI 新增 image inputs、web fetch、MCP servers 与 to-do tracking。",
            control: "三档 approval modes、prompt caching 与 compaction 把 CLI 推向真正的 agent 工作流。"
          }
        },
        {
          date: "2025-09-23",
          stage: "agentic-cli",
          summary: "Codex CLI 和 API 开始围绕同一模型带宽统一。",
          axisEntries: {
            models: "GPT-5-Codex 进入 Responses API，CLI 与云端 API 开始围绕同一模型族统一。",
            control: "本地和云端 coding agent 语义变得更一致。"
          }
        },
        {
          date: "2025-10-06",
          stage: "agentic-cli",
          summary: "Codex CLI 不再只是单机工具，而开始被做成企业工作流入口。",
          axisEntries: {
            channels: "Codex 可以把结果推到 Slack，入口开始连接团队协作面。",
            tools: "官方 SDK 让 CLI 和外部系统更容易嵌入。",
            control: "Admin features、internet access 与 flex processing 把 CLI 推进企业场景。"
          }
        },
        {
          date: "2025-11-19",
          stage: "pro-coding",
          summary: "Max / Mini 两档后，CLI 第一次把速度和质量的取舍做成显式产品层。",
          axisEntries: {
            models: "GPT-5-Codex-Max / Mini 让 CLI 可以在速度和质量间显式切换。",
            control: "使用到 90% 限额后自动建议降档，CLI 开始主动管理成本。"
          }
        },
        {
          date: "2025-12-02",
          stage: "pro-coding",
          summary: "thread / turn 元数据和 detached review 让 Codex CLI 更像正式的审查与协作工作流。",
          axisEntries: {
            tools: "review detached、MCP 增强与更完整的通知链路让 CLI 更适合长任务和审查流。",
            control: "threads 与 turns 开始携带 git 信息、cwd、版本和 source metadata，agent 会话第一次变得更可追踪。",
            ops: "observability 与 token / compact / diff 事件更显式，CLI 的运行状态开始更容易被外部系统承接。"
          }
        },
        {
          date: "2025-12-18",
          stage: "pro-coding",
          summary: "Codex CLI 的职业级编码能力和跨平台能力一起上了一个台阶。",
          axisEntries: {
            models: "GPT-5.2-Codex 针对长链路编码和重构继续提升。",
            devices: "Windows 支持和跨语言表现都更稳。",
            security: "Cybersecurity 能力进入 Codex 主线。"
          }
        },
        {
          date: "2026-01-09",
          stage: "pro-coding",
          summary: "session fork、requirements 和 skills API 让 Codex CLI 从单线会话变成更可编排的 agent runtime。",
          axisEntries: {
            tools: "requirements/list、sandbox upgrade 引导与 skills API 深化，让 CLI 更适合复杂项目工作流。",
            control: "conversation / thread fork 进入协议和 app server，开发者第一次能把同一任务正式分叉。",
            security: "sandbox 升级路径和权限引导更显式，复杂执行场景更容易被安全承接。"
          }
        },
        {
          date: "2026-02-05",
          stage: "security-suite",
          summary: "GPT-5.3-Codex 让 CLI 背后的 agent 更快，也更愿意直接动手改代码。",
          axisEntries: {
            models: "GPT-5.3-Codex 进一步提速，并更愿意直接修改代码。",
            control: "CLI 的默认工作风格继续从建议者向直接执行者偏移。"
          }
        },
        {
          date: "2026-03-05",
          stage: "security-suite",
          summary: "插件系统和多代理 handoff 进入主线后，Codex CLI 明显从单 agent 工具走向平台化 runtime。",
          axisEntries: {
            tools: "plugin system 可以加载 skills、MCP entries 和 app connectors，CLI 的外部能力接入第一次标准化。",
            control: "TUI multi-agent handoff 与 fast / standard 服务层级一起把会话从单线程推向多代理协作。",
            security: "memory guardrails 开始进入主线，长会话与插件生态的安全边界更显式。"
          }
        },
        {
          date: "2026-03-06",
          stage: "security-suite",
          summary: "安全审查模式出现后，Codex CLI 的工作流开始明显超出普通代码助手。",
          axisEntries: {
            tools: "Codex Security preview 把代码审计、根因定位和自动修复拉进 Codex 工作流。",
            security: "开发者面开始出现专门的安全审查模式。"
          }
        },
        {
          date: "2026-03-08",
          stage: "security-suite",
          summary: "@plugin 引用和模型选择面更新，让 Codex CLI 的插件生态第一次真正进入一线交互。",
          axisEntries: {
            tools: "@plugin mentions 进入主线后，用户可以在对话里直接引用插件并自动带上相关上下文。",
            models: "模型选择面被继续前台化，最新模型目录会直接出现在 TUI picker 流程里。",
            security: "可执行 permission profiles 被并入 per-turn sandbox policy，插件和技能执行的安全边界更细。"
          }
        },
        {
          date: "2026-03-10",
          stage: "security-suite",
          summary: "request_permissions、插件市场发现和 app-server 执行升级，一起把 Codex CLI 拉向更可运营的 runtime。",
          axisEntries: {
            tools: "plugin marketplace discovery、更完整的 plugin/list 元数据，以及带 TTY 的 streaming exec 一起进入主线。",
            control: "request_permissions 让运行中的 turn 可以动态申请额外权限，审批链第一次变得更像运行时能力。",
            security: "permission-profile 语言和文件系统 / 网络沙箱策略被拆开，权限控制更细。"
          }
        },
        {
          date: "2026-03-11",
          stage: "security-suite",
          summary: "code mode、hooks engine 和 health probes 补齐后，Codex CLI 的 runtime 边界终于更清楚了。",
          axisEntries: {
            tools: "experimental code mode 与 SessionStart / Stop hooks 让更隔离的编码工作流开始成形。",
            control: "handoff 现在会携带实时 transcript context，多轮转交的连续性被继续补强。",
            ops: "app-server 同监听器暴露 readyz / healthz，运行态检查更适合部署与运维。"
          }
        }
      ],
      latestDelta: {
        generatedAt: "2026-03-16T00:00:00+08:00",
        window: {
          start_local: "2026-03-05T00:00:00+08:00",
          end_local: "2026-03-11T23:59:00+08:00"
        },
        meta: [
          { label: "窗口", value: "2026-03-05 至 2026-03-11" },
          { label: "官方 Releases", value: "5 个" },
          { label: "最近日期", value: "2026-03-11" },
          { label: "来源", value: "OpenAI Codex GitHub releases" }
        ],
        featureItems: [
          "rust-v0.110.0 / v0.111.0 把 plugin system、multi-agent handoff、fast mode、memory guardrails 和 app-server v2 一起推上主线。",
          "rust-v0.112.0 加入 @plugin mentions，并把模型选择面继续前台化。",
          "rust-v0.113.0 增加 request_permissions、插件市场发现增强和带 TTY 的 streaming exec。",
          "rust-v0.114.0 再补 experimental code mode、SessionStart / Stop hooks 与 readyz / healthz。"
        ],
        fixItems: [
          "这一波 releases 持续在 auth 错误、resume 状态、git context 和 permission handling 上补稳定性。",
          "Linux tmux crash、插件启用边界和 reopened threads in-progress 状态也被继续修平。"
        ],
        releases: [
          {
            label: "rust-v0.114.0",
            html_url: "https://github.com/openai/codex/releases/tag/rust-v0.114.0",
            published_at: "2026-03-11T00:28:42Z",
            type: "stable"
          },
          {
            label: "rust-v0.113.0",
            html_url: "https://github.com/openai/codex/releases/tag/rust-v0.113.0",
            published_at: "2026-03-10T05:24:30Z",
            type: "stable"
          },
          {
            label: "rust-v0.112.0",
            html_url: "https://github.com/openai/codex/releases/tag/rust-v0.112.0",
            published_at: "2026-03-08T20:44:14Z",
            type: "stable"
          },
          {
            label: "rust-v0.111.0",
            html_url: "https://github.com/openai/codex/releases/tag/rust-v0.111.0",
            published_at: "2026-03-05T19:12:13Z",
            type: "stable"
          },
          {
            label: "rust-v0.110.0",
            html_url: "https://github.com/openai/codex/releases/tag/rust-v0.110.0",
            published_at: "2026-03-05T02:22:46Z",
            type: "stable"
          }
        ],
        topScopes: [
          { scope: "工具执行", count: 4 },
          { scope: "平台控制", count: 4 },
          { scope: "安全治理", count: 3 }
        ]
      },
      activity: buildActivity("官方更新条数", "条更新", [
        { date: "2025-04-16", value: 1 },
        { date: "2025-05-16", value: 1 },
        { date: "2025-07-08", value: 1 },
        { date: "2025-08-15", value: 1 },
        { date: "2025-09-15", value: 1 },
        { date: "2025-09-23", value: 1 },
        { date: "2025-10-06", value: 1 },
        { date: "2025-11-19", value: 1 },
        { date: "2025-12-02", value: 1 },
        { date: "2025-12-18", value: 1 },
        { date: "2026-01-09", value: 1 },
        { date: "2026-02-05", value: 1 },
        { date: "2026-03-05", value: 2 },
        { date: "2026-03-06", value: 1 },
        { date: "2026-03-08", value: 1 },
        { date: "2026-03-10", value: 1 },
        { date: "2026-03-11", value: 1 }
      ])
    },
    "claude-code": {
      generatedAt: "2026-03-16",
      axes: PRODUCT_AXES,
      stageMeta: {
        availability: {
          label: "公开起步",
          title: "Public CLI Launch",
          blurb: "Claude Code CLI 从 2025-02-24 的公开首发起步，先把 terminal agent 的原生命令、steering 与成本控制骨架补齐。",
          color: "#6d86b3"
        },
        runtime: {
          label: "工作流化",
          title: "GA, Hooks, And IDE Bridge",
          blurb: "GA、hooks、/memory、/todos 与 VS Code 扩展一起把 Claude Code CLI 变成更完整的开发者工作流前台。",
          color: "#c86e41"
        },
        remote: {
          label: "远控扩张",
          title: "Remote Control And Enterprise Path",
          blurb: "Remote control、插件注册表和企业网络适配，让 Claude Code CLI 更适合组织环境。",
          color: "#4a7d73"
        },
        "power-user": {
          label: "高手模式",
          title: "MCP, Context, And Sparse Worktrees",
          blurb: "March 2026 这一串 release 把 MCP、上下文治理、worktree 和权限边界一起拉高。",
          color: "#8c4f86"
        }
      },
      jumpDates: [
        {
          date: "2025-02-24",
          title: "CLI 首发",
          note: "Claude Code CLI 初始版本进入公开迭代，terminal coding agent 正式成为 Anthropic 的开发者产品。"
        },
        {
          date: "2025-03-05",
          title: "可编排 CLI 露头",
          note: "自定义 slash commands 与 MCP debug 很早就进入主线，Claude Code CLI 从一开始就不是纯对话壳。"
        },
        {
          date: "2025-05-22",
          title: "GA 1.0",
          note: "Claude Code CLI 进入 1.0 稳定阶段，产品从高频实验走向正式主线。"
        },
        {
          date: "2025-08-27",
          title: "记忆与任务层前台化",
          note: "/memory 可编辑、/todos 和 SDK 工具回调一起到位，Claude Code CLI 的长期工作流终于完整起来。"
        },
        {
          date: "2025-09-29",
          title: "v2 工作流跃迁",
          note: "原生 VS Code 扩展、/rewind 与 /usage 进入主线，Claude Code CLI 的重度工作流轮廓完全长出来了。"
        },
        {
          date: "2025-12-19",
          title: "代码智能进入 CLI",
          note: "LSP、图像查看、plugin discover 过滤和 terminal setup 一起出现，Claude Code CLI 的重度开发者轮廓变清晰。"
        },
        {
          date: "2026-02-06",
          title: "多代理协作显式化",
          note: "teammate 事件、TaskCompleted hooks 和 agent memory frontmatter 让 Claude Code CLI 开始有正式的多代理产品语言。"
        },
        {
          date: "2026-02-24",
          title: "Remote Control 打开",
          note: "remote-control subcommand 与插件注册表支持，把 CLI 推向外部构建和企业环境。"
        },
        {
          date: "2026-03-10",
          title: "复杂任务工作流补齐",
          note: "plan mode、ExitWorktree、cron disable 和更细的权限解析一起落地。"
        },
        {
          date: "2026-03-12",
          title: "上下文治理显式化",
          note: "/context 建议、autoMemoryDirectory 和 policy fixes 让长会话更可控。"
        },
        {
          date: "2026-03-14",
          title: "MCP + Sparse Worktree",
          note: "MCP elicitation、sparsePaths、PostCompact hook 和 /effort 是一整组 power-user 更新。"
        }
      ],
      rows: [
        {
          date: "2025-02-24",
          stage: "availability",
          summary: "Claude Code CLI 从第一天就以 terminal coding agent 身份公开迭代。",
          axisEntries: {
            tools: "CLI 初始版本把终端对话、文件读写、Bash 与 Git 串成可用的 agent 基线。",
            control: "公开发布让 Claude Code CLI 从第一天就面向开发者真实工作流收集反馈。"
          }
        },
        {
          date: "2025-03-05",
          stage: "availability",
          summary: "Claude Code CLI 很快开始长出自定义命令和 MCP 调试这类开发者原生能力。",
          axisEntries: {
            tools: "自定义 slash commands 与 MCP debug 进入主线，CLI 的可编排性明显早于 GA。",
            control: "Claude Code CLI 开始不只回答问题，而是允许开发者把常用工作流包装成终端命令。"
          }
        },
        {
          date: "2025-05-13",
          stage: "availability",
          summary: "实时 steer、成本与超时控制一起到位，Claude Code CLI 开始更像可控的工作流工具。",
          axisEntries: {
            control: "支持在模型工作过程中实时 steer，交互不再只能等一轮回答结束。",
            ops: "/cost 与执行超时控制一起补上，CLI 的使用成本与运行边界更可见。"
          }
        },
        {
          date: "2025-05-22",
          stage: "runtime",
          summary: "Claude Code CLI 进入 1.0 GA，产品从高频实验期跨到稳定主线。",
          axisEntries: {
            models: "Claude Code CLI 开始切入新模型代际，GA 后的主线能力更稳定。",
            control: "1.0.0 让 CLI 的发布语义、可用性预期和工作流定位全部正式化。"
          }
        },
        {
          date: "2025-06-30",
          stage: "runtime",
          summary: "Hooks 正式发布后，Claude Code CLI 开始能被更深地嵌入开发者工作流。",
          axisEntries: {
            tools: "15 事件 hooks 系统进入主线，Claude Code CLI 开始允许用户在生命周期节点注入外部逻辑。",
            control: "CLI 从单点 agent 继续走向可治理、可集成的工作流平台。"
          }
        },
        {
          date: "2025-08-27",
          stage: "runtime",
          summary: "/memory、SDK 自定义工具回调和 /todos 让 Claude Code CLI 的长期工作流更完整。",
          axisEntries: {
            tools: "SDK 自定义工具回调与 /todos 进入主线，CLI 更擅长承接长链路任务。",
            control: "/memory 可直接编辑，长期上下文第一次更前台化。"
          }
        },
        {
          date: "2025-09-29",
          stage: "runtime",
          summary: "v2.0 让 Claude Code CLI 真正长成重度开发者工作台。",
          axisEntries: {
            devices: "原生 VS Code 扩展进入主线，Claude Code CLI 不再只停留在纯终端入口。",
            tools: "/rewind 与 /usage 成为正式工作流能力，回退和用量可见性一起补齐。",
            control: "UI 重构把 CLI 的会话、状态和工具反馈做得更适合长时间使用。"
          }
        },
        {
          date: "2025-12-19",
          stage: "runtime",
          summary: "Claude Code CLI 明显从会话式 CLI 长成了更像 IDE 的终端工作台。",
          axisEntries: {
            tools: "LSP tool、图像查看和 plugin discover 过滤一起到位，代码导航与插件发现进入主线。",
            devices: "Kitty、Alacritty、Zed、Warp 的 terminal setup 一起补齐，终端适配面变宽。",
            control: "会话 fork、resume 与 plugin 管理的主线明显更完整。"
          }
        },
        {
          date: "2026-01-16",
          stage: "runtime",
          summary: "Claude Code CLI 继续把 MCP、计划文件和外部编辑器拉成高频工作流的一部分。",
          axisEntries: {
            tools: "MCP tool search threshold、plansDirectory 与 external editor 支持继续强化重度工作流。",
            control: "提交与 PR 开始带会话 URL 归因，CLI 和协作记录更紧。"
          }
        },
        {
          date: "2026-02-06",
          stage: "remote",
          summary: "teammate 事件与 agent memory frontmatter 把 Claude Code CLI 推向更明确的多代理协作模式。",
          axisEntries: {
            control: "teammate 事件让多代理协作和队友型工作流第一次有了正式产品语言。",
            security: "agent memory frontmatter 让子代理记忆边界与元信息更显式。"
          }
        },
        {
          date: "2026-02-24",
          stage: "remote",
          summary: "Remote Control 打开后，Claude Code CLI 开始明确服务外部构建与企业网络环境。",
          axisEntries: {
            tools: "custom npm registries、plugin git timeout 和更快的 bash startup 一起到位。",
            control: "claude remote-control subcommand 向 external builds 开放。",
            ops: "CLI 明显更适合企业内网和外部构建系统。"
          }
        },
        {
          date: "2026-02-25",
          stage: "remote",
          summary: "Remote Control 继续扩圈，Windows 和 VS Code 等次级面同步补洞。",
          axisEntries: {
            devices: "Windows / VS Code 相关问题继续快速修补。",
            control: "Remote Control 扩到更多用户。"
          }
        },
        {
          date: "2026-03-04",
          stage: "power-user",
          summary: "Opus 4.6 的默认 effort 策略切换，让 Claude Code CLI 的模型控制面更前台化。",
          axisEntries: {
            models: "Opus 4.6 对 Max / Team 默认走 medium effort，模型工作风格第一次被做成显式默认值。",
            control: "ultrathink 回归后，开发者可以更直接地临时抬高推理强度。"
          }
        },
        {
          date: "2026-03-05",
          stage: "power-user",
          summary: "/claude-api skill 和 remote-control naming 让 Claude Code CLI 更像可复用的 agent 前台。",
          axisEntries: {
            tools: "/claude-api skill 把官方 API 开发流直接带进 CLI。",
            control: "remote-control 可以直接命名，会话开始更适合多项目并行管理。"
          }
        },
        {
          date: "2026-03-06",
          stage: "power-user",
          summary: "第三方 gateway 和自定义 model ID 的兼容修补，让 Claude Code CLI 更适合企业接入。",
          axisEntries: {
            models: "自定义 Bedrock / gateway model ID 的 effort 兼容被修正，多模型企业环境更稳。",
            control: "tool search 和 proxy endpoint 的判断逻辑被继续修平。",
            security: "第三方 gateway 场景下的错误边界和权限处理更可预期。"
          }
        },
        {
          date: "2026-03-07",
          stage: "power-user",
          summary: "/loop 和 cron scheduling 进入主线后，Claude Code CLI 开始支持周期性 agent 工作流。",
          axisEntries: {
            tools: "/loop 与 cron scheduling 让同一会话可以周期性地重复执行 prompt 或 slash command。",
            devices: "voice push-to-talk keybinding 可重绑，语音输入面更可用。",
            control: "CLI 不再只服务单次请求，而开始支持持续运行的 agent 节奏。"
          }
        },
        {
          date: "2026-03-10",
          stage: "power-user",
          summary: "计划模式、worktree 和权限解析一起拉高了 Claude Code CLI 的复杂任务承载力。",
          axisEntries: {
            tools: "plan mode description、ExitWorktree、/copy 写文件和 cron disable 一起进入主线。",
            control: "复杂任务开始具备更完整的可暂停、可继续、可 worktree 化能力。",
            security: "bash permission parsing 与 sandbox permission rules 被继续收紧。"
          }
        },
        {
          date: "2026-03-11",
          stage: "power-user",
          summary: "Claude Code CLI 开始更认真地服务企业自定义 provider、代理网络和多模型环境。",
          axisEntries: {
            models: "modelOverrides 让企业可把模型选择映射到自定义 provider model IDs。",
            devices: "voice mode、Linux native 与 VS Code behind-proxy 场景继续补强。",
            security: "代理证书与连接失败提示更适合企业网络环境。"
          }
        },
        {
          date: "2026-03-12",
          stage: "power-user",
          summary: "上下文治理与自动记忆开始被前台化，长会话不再只能靠经验维护。",
          axisEntries: {
            control: "/context 能直接指出上下文重负和优化建议。",
            ops: "autoMemoryDirectory 与 SessionEnd hook timeout 让长会话更可控。",
            security: "managed policy ask/allow 规则被修正，不再容易被绕过。"
          }
        },
        {
          date: "2026-03-14",
          stage: "power-user",
          summary: "MCP elicitation 和 sparse worktree 一起把 Claude Code CLI 拉向 power-user CLI。",
          axisEntries: {
            tools: "MCP elicitation、PostCompact hook、/effort 与 sparse worktree 是一整组重度开发者增强。",
            devices: "voice、Windows 与 tmux over SSH 的体验继续补齐。",
            control: "session name、survey rate 与 remote control 细节继续向团队运维靠拢。"
          }
        }
      ],
      latestDelta: {
        generatedAt: "2026-03-16T00:00:00+08:00",
        window: {
          start_local: "2026-03-04T00:00:00+08:00",
          end_local: "2026-03-14T23:59:00+08:00"
        },
        meta: [
          { label: "窗口", value: "2026-03-04 至 2026-03-14" },
          { label: "官方 Releases", value: "10 个" },
          { label: "最近日期", value: "2026-03-14" },
          { label: "来源", value: "Anthropic Claude Code CLI official releases" }
        ],
        featureItems: [
          "v2.1.68 / v2.1.66 把 Opus 4.6 的默认 effort 与 ultrathink 重新前台化。",
          "v2.1.69 / v2.1.71 把 /claude-api、remote-control naming、/loop 和 cron scheduling 带进日常工作流。",
          "v2.1.72 到 v2.1.74 把 plan mode、ExitWorktree、/context 和 autoMemoryDirectory 连成一条复杂任务主线。",
          "v2.1.76 再把 MCP elicitation、PostCompact hook、sparse worktree 和 /effort 一次推上来。"
        ],
        fixItems: [
          "3 月这一波 releases 重点修了 proxy / gateway、permission rules、voice / Windows / VS Code 兼容，以及长会话稳定性。",
          "企业自定义 provider、第三方网络环境和远程控制边界都被持续加固。"
        ],
        releases: [
          {
            label: "v2.1.76",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.76",
            published_at: "2026-03-14T01:23:58Z",
            type: "stable"
          },
          {
            label: "v2.1.75",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.75",
            published_at: "2026-03-13T17:09:08Z",
            type: "stable"
          },
          {
            label: "v2.1.74",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.74",
            published_at: "2026-03-12T00:34:23Z",
            type: "stable"
          },
          {
            label: "v2.1.73",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.73",
            published_at: "2026-03-11T18:26:43Z",
            type: "stable"
          },
          {
            label: "v2.1.72",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.72",
            published_at: "2026-03-10T00:43:03Z",
            type: "stable"
          },
          {
            label: "v2.1.71",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.71",
            published_at: "2026-03-07T00:12:46Z",
            type: "stable"
          },
          {
            label: "v2.1.70",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.70",
            published_at: "2026-03-06T01:20:02Z",
            type: "stable"
          },
          {
            label: "v2.1.69",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.69",
            published_at: "2026-03-05T00:26:21Z",
            type: "stable"
          },
          {
            label: "v2.1.68",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.68",
            published_at: "2026-03-04T10:11:14Z",
            type: "stable"
          },
          {
            label: "v2.1.66",
            html_url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.66",
            published_at: "2026-03-04T01:19:19Z",
            type: "stable"
          }
        ],
        topScopes: [
          { scope: "工具执行", count: 5 },
          { scope: "平台控制", count: 5 },
          { scope: "智能内核", count: 3 }
        ]
      },
      activity: buildActivity("每日 release 数", "个 release", [
        { date: "2025-02-24", value: 1 },
        { date: "2025-03-05", value: 1 },
        { date: "2025-05-13", value: 1 },
        { date: "2025-05-22", value: 1 },
        { date: "2025-06-30", value: 1 },
        { date: "2025-08-27", value: 1 },
        { date: "2025-09-29", value: 1 },
        { date: "2025-12-19", value: 2 },
        { date: "2026-01-07", value: 2 },
        { date: "2026-01-09", value: 2 },
        { date: "2026-01-11", value: 1 },
        { date: "2026-01-12", value: 1 },
        { date: "2026-01-13", value: 1 },
        { date: "2026-01-14", value: 1 },
        { date: "2026-01-16", value: 1 },
        { date: "2026-01-17", value: 2 },
        { date: "2026-01-20", value: 1 },
        { date: "2026-01-21", value: 1 },
        { date: "2026-01-22", value: 2 },
        { date: "2026-01-23", value: 1 },
        { date: "2026-01-27", value: 1 },
        { date: "2026-01-28", value: 2 },
        { date: "2026-01-29", value: 2 },
        { date: "2026-01-30", value: 1 },
        { date: "2026-01-31", value: 1 },
        { date: "2026-02-03", value: 1 },
        { date: "2026-02-04", value: 1 },
        { date: "2026-02-05", value: 1 },
        { date: "2026-02-06", value: 2 },
        { date: "2026-02-07", value: 2 },
        { date: "2026-02-10", value: 2 },
        { date: "2026-02-13", value: 2 },
        { date: "2026-02-16", value: 1 },
        { date: "2026-02-17", value: 1 },
        { date: "2026-02-18", value: 1 },
        { date: "2026-02-19", value: 1 },
        { date: "2026-02-20", value: 1 },
        { date: "2026-02-24", value: 2 },
        { date: "2026-02-25", value: 4 },
        { date: "2026-02-26", value: 2 },
        { date: "2026-02-27", value: 1 },
        { date: "2026-02-28", value: 1 },
        { date: "2026-03-04", value: 2 },
        { date: "2026-03-05", value: 1 },
        { date: "2026-03-06", value: 1 },
        { date: "2026-03-07", value: 1 },
        { date: "2026-03-10", value: 1 },
        { date: "2026-03-11", value: 1 },
        { date: "2026-03-12", value: 1 },
        { date: "2026-03-13", value: 1 },
        { date: "2026-03-14", value: 1 }
      ])
    },
    "codex-app": {
      generatedAt: "2026-03-16",
      axes: PRODUCT_AXES,
      stageMeta: {
        "desktop-launch": {
          label: "桌面首发",
          title: "Mac Command Center",
          blurb: "Codex App 首先以 macOS command center 形态出现，把多 agent、worktree 和 skills 收到一个桌面壳里。",
          color: "#c86e41"
        },
        "cross-platform": {
          label: "跨平台",
          title: "Windows And Shared Quotas",
          blurb: "Windows、shared quotas 和安全工作流把 Codex App 推成更完整的开发者前台。",
          color: "#8c4f86"
        }
      },
      jumpDates: [
        {
          date: "2026-02-02",
          title: "Mac App 发布",
          note: "多 agent、best-of-N、worktrees、skills、automations 与 shared config 一次性到位，社区 launch 讨论也明显放大了它的跳变强度。"
        },
        {
          date: "2026-03-04",
          title: "Windows 到位",
          note: "桌面端从 macOS 独占变成跨平台开发者入口，Codex App 才真正具备“开发者前台”意义上的平台覆盖。"
        },
        {
          date: "2026-03-10",
          title: "额度体系并轨",
          note: "Codex credits auto top-up 让 app 里的长任务更像持续运行的开发工作台。"
        }
      ],
      rows: [
        {
          date: "2026-02-02",
          stage: "desktop-launch",
          summary: "Codex App 以开发者 command center 形态首发，不是普通聊天壳。",
          axisEntries: {
            devices: "macOS app 发布，桌面端成为一等开发者入口。",
            tools: "多 agent 并行、best-of-N、worktrees、custom personalities / skills / automations 一起到位。",
            control: "与 CLI / IDE 共享 auth、model、tooling 与 sandbox 设置。",
            security: "沙箱与审批依旧是 app 的第一层边界。"
          }
        },
        {
          date: "2026-02-05",
          stage: "desktop-launch",
          summary: "更快的 GPT-5.3-Codex 让 app 背后的编码 agent 也一起升级。",
          axisEntries: {
            models: "GPT-5.3-Codex 让 app 背后的编码 agent 更快、更主动。",
            control: "桌面端异步任务的完成度和节奏随核心模型同步抬升。"
          }
        },
        {
          date: "2026-03-04",
          stage: "cross-platform",
          summary: "Windows 版上线后，Codex App 才真正变成跨平台开发者产品。",
          axisEntries: {
            channels: "更多开发团队可以用同一 app 形态接入 Codex。",
            devices: "Windows 版上线，桌面端从 macOS 独占变成跨平台。"
          }
        },
        {
          date: "2026-03-06",
          stage: "cross-platform",
          summary: "安全审查工作流开始进入 Codex 的前台 surfaces。",
          axisEntries: {
            tools: "代码审计、根因分析和自动修复开始作为安全工作流进入 Codex surfaces。",
            security: "Codex App 背后的 agent 工作流开始显式区分安全场景。"
          }
        },
        {
          date: "2026-03-10",
          stage: "cross-platform",
          summary: "额度自动补给让 Codex App 里的长任务更像持续运行的开发工作台。",
          axisEntries: {
            control: "ChatGPT plan 里的 Codex credits 支持 auto top-up，app 里的长任务更不容易中断。",
            ops: "使用和额度管理向统一的产品账户体系收敛。"
          }
        }
      ],
      latestDelta: {
        generatedAt: "2026-03-16T00:00:00+08:00",
        window: {
          start_local: "2026-03-04T00:00:00+08:00",
          end_local: "2026-03-10T23:59:00+08:00"
        },
        meta: [
          { label: "窗口", value: "2026-03-04 至 2026-03-10" },
          { label: "官方更新", value: "3 条" },
          { label: "最近日期", value: "2026-03-10" },
          { label: "来源", value: "OpenAI Codex app / Codex updates" }
        ],
        featureItems: [
          "Windows 版让 Codex App 变成跨平台开发者桌面入口。",
          "安全审查、根因分析和自动修复进入 Codex 的前台工作流。",
          "Codex credits auto top-up 让 app 里的长任务更连续。"
        ],
        fixItems: [
          "Codex App 的账号、额度和执行 runtime 正在向统一开发者账户体系收敛。"
        ],
        releases: [
          {
            label: "2026-03-10",
            html_url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
            published_at: "2026-03-10T12:00:00+08:00",
            type: "plan update"
          },
          {
            label: "2026-03-06",
            html_url: "https://openai.com/index/codex-security/",
            published_at: "2026-03-06T12:00:00+08:00",
            type: "product update"
          },
          {
            label: "2026-03-04",
            html_url: "https://openai.com/index/the-codex-app-a-command-center-for-agents/",
            published_at: "2026-03-04T12:00:00+08:00",
            type: "app update"
          }
        ],
        topScopes: [
          { scope: "设备", count: 1 },
          { scope: "安全治理", count: 1 },
          { scope: "平台控制", count: 1 }
        ]
      },
      activity: buildActivity("官方更新条数", "条更新", [
        { date: "2026-02-02", value: 1 },
        { date: "2026-02-05", value: 1 },
        { date: "2026-03-04", value: 1 },
        { date: "2026-03-06", value: 1 },
        { date: "2026-03-10", value: 1 }
      ])
    }
  };
})();
