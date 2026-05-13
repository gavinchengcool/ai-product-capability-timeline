window.OPENCLAW_LATEST_DELTA = {
  "generatedAt": "2026-05-13T21:58:54.812191+08:00",
  "window": {
    "start_local": "2026-05-12T21:58:54.812191+08:00",
    "end_local": "2026-05-13T21:58:54.812191+08:00",
    "start_utc": "2026-05-12T13:58:54Z",
    "end_utc": "2026-05-13T13:58:54Z"
  },
  "repo": {
    "slug": "openclaw/openclaw",
    "stars": 371475,
    "forks": 76876,
    "open_issues": 7353,
    "pushed_at": "2026-05-13T13:58:02Z"
  },
  "summary": {
    "commitCount": 1132,
    "releaseCount": 4,
    "stableReleaseCount": 0,
    "betaReleaseCount": 4,
    "stars": 371475,
    "forks": 76876,
    "openIssues": 7353
  },
  "releases": [
    {
      "tag_name": "v2026.5.12-beta.4",
      "published_at": "2026-05-13T05:17:07Z",
      "name": "openclaw 2026.5.12-beta.4",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.4"
    },
    {
      "tag_name": "v2026.5.12-beta.3",
      "published_at": "2026-05-12T23:38:26Z",
      "name": "openclaw 2026.5.12-beta.3",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.3"
    },
    {
      "tag_name": "v2026.5.12-beta.2",
      "published_at": "2026-05-12T22:15:42Z",
      "name": "openclaw 2026.5.12-beta.2",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.2"
    },
    {
      "tag_name": "v2026.5.12-beta.1",
      "published_at": "2026-05-12T17:10:10Z",
      "name": "openclaw 2026.5.12-beta.1",
      "prerelease": true,
      "html_url": "https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.1"
    }
  ],
  "featureItems": [
    "Cron: add direct `cron.get`, `openclaw cron get <id>`, and agent-tool `get` support for inspecting one stored cron job by id. (#75117) Thanks @samzong. [v2026.5.12-beta.4]",
    "Agents/tools: add per-sender tool policies with canonical channel-scoped sender keys, so operators can restrict dangerous tools by requester identity across global, agent, group, core, bundled, and plugin tool surfaces. (#66933) Thanks @JerranC. [v2026.5.12-beta.4]",
    "Channels/iMessage: add `openclaw channels status --channel <name>` filtering and document the BlueBubbles-to-imsg cutover path so operators can probe iMessage without starting both channel monitors. (#80706) Thanks @omarshahine. [v2026.5.12-beta.4]",
    "CI: add a non-blocking `plugin-inspector-advisory` artifact to Plugin Prerelease so release runs capture bundled plugin compatibility triage without changing the blocking gate. [v2026.5.12-beta.4]",
    "Logging: add targeted model transport, payload, SSE, and code-mode diagnostics with redacted URL handling. [v2026.5.12-beta.4]",
    "Agents: add per-agent `tools.message.crossContext` overrides so sandboxed/public agents can restrict message sends to the current conversation without changing the global bot policy. [v2026.5.12-beta.4]",
    "Agents: add per-agent `tools.message.actions.allow` overrides so sandboxed/public agents can expose and enforce send-only message tools. [v2026.5.12-beta.4]",
    "Models: add provider-level `localService` startup for on-demand local model servers before OpenAI-compatible requests, including one-shot model probes. [v2026.5.12-beta.4]"
  ],
  "fixItems": [
    "fix(memory-wiki): require admin scope for ingest [AI]. (#80897) Thanks @pgondhi987. [v2026.5.12-beta.4]",
    "fix(matrix): gate name-based allowlist resolution [AI]. (#79007) Thanks @pgondhi987. [v2026.5.12-beta.4]",
    "Security/audit: honor `tools.byProvider[\"provider/model\"].deny` when reporting small-model web/browser exposure, so per-model OpenRouter mitigations clear the `models.small_params` exposure signal. Fixes #80118. [v2026.5.12-beta.4]",
    "fix(memory-wiki): require admin scope for ingest [AI]. (#80897) Thanks @pgondhi987. [v2026.5.12-beta.3]",
    "fix(matrix): gate name-based allowlist resolution [AI]. (#79007) Thanks @pgondhi987. [v2026.5.12-beta.3]",
    "Security/audit: honor `tools.byProvider[\"provider/model\"].deny` when reporting small-model web/browser exposure, so per-model OpenRouter mitigations clear the `models.small_params` exposure signal. Fixes #80118. [v2026.5.12-beta.3]",
    "fix(memory-wiki): require admin scope for ingest [AI]. (#80897) Thanks @pgondhi987. [v2026.5.12-beta.2]",
    "fix(matrix): gate name-based allowlist resolution [AI]. (#79007) Thanks @pgondhi987. [v2026.5.12-beta.2]"
  ],
  "topScopes": [
    {
      "scope": "test",
      "count": 988
    },
    {
      "scope": "fix",
      "count": 20
    },
    {
      "scope": "docs",
      "count": 13
    },
    {
      "scope": "provider",
      "count": 12
    },
    {
      "scope": "changelog",
      "count": 8
    },
    {
      "scope": "telegram",
      "count": 7
    },
    {
      "scope": "ci",
      "count": 7
    },
    {
      "scope": "require",
      "count": 5
    }
  ],
  "headlineCommits": [
    "docs: add ds4 provider guide",
    "test: fix queue settings session fixtures",
    "test: add live subagent steering proof",
    "fix: use in-process subagent announce handoff",
    "fix(telegram): limit startup probes (#80986)",
    "Require approval for setup-code device pairing [AI] (#81292)",
    "docs: update changelog for docker setup path fix (#81105)",
    "fix(docker): pin setup cli container paths"
  ],
  "note": "每天 20:00（Asia/Shanghai）自动刷新，展示最近 24 小时 GitHub 增量。"
};
