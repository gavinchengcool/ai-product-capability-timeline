# OpenClaw Source Map

最后整理日期：2026-03-15

## Official Sources

- 文档首页：<https://docs.openclaw.ai/>
- Getting Started：<https://docs.openclaw.ai/getting-started>
- Security：<https://docs.openclaw.ai/security>
- Credits：<https://docs.openclaw.ai/credits>
- GitHub repo：<https://github.com/openclaw/openclaw>
- GitHub releases：<https://github.com/openclaw/openclaw/releases>
- GitHub repo API：<https://api.github.com/repos/openclaw/openclaw>
- GitHub releases API：<https://api.github.com/repos/openclaw/openclaw/releases?per_page=100>
- GitHub commits API：<https://api.github.com/repos/openclaw/openclaw/commits>
- GitHub search issues API（按天统计 merged PR）：<https://api.github.com/search/issues?q=repo%3Aopenclaw%2Fopenclaw+is%3Apr+is%3Amerged+merged%3A2026-03-14T00%3A00%3A00%2B08%3A00..2026-03-14T23%3A59%3A59%2B08%3A00&per_page=1>

## Local Sources Already Present

- 社区内容抓取项目：`/Users/gavin/Projects/openclaw-x-community`
- OpenClaw 深度研讨会 PDF：`/Users/gavin/Desktop/02-01 OpenClaw 深度研讨会：从用户实践到未来展望.pdf`
- 归档区同名 PDF：`/Users/gavin/iCloud Drive (Archive)/Desktop/02-01 OpenClaw 深度研讨会：从用户实践到未来展望.pdf`
- 营销资料压缩包：`/Users/gavin/Desktop/openclaw-marketing-team-main-20260304T141036Z-1-001.zip`
- 本地静态页面目录：`/Users/gavin/Desktop/openclaw`
- 应用支持目录：`/Users/gavin/Library/Application Support/OpenClaw`

## Evidence Notes

- 官方仓库页在 2026-03-15 可见 `2026.3.13` 为最新 release，发布时间显示为 2026-03-14
- 官方 README 在 2026-03-15 可见安装要求为 Node.js `>= 22`
- 官方安全页把信任模型写成 personal assistant，而不是 hostile multi-tenant shared agent
- 日级社区提交频次图当前使用 GitHub Search `is:pr is:merged` 作为口径，表达的是 `merged PR/day`，不是原始 commit 数

## Suggested Next Pass

- 提取本地 PDF 的章节结构并并入本项目
- 核对本机 OpenClaw 桌面应用版本与 GitHub release 对应关系
- 画出 `OpenClaw / clawdbot / clawd / clawhub / moltbot` 的正式关系图
