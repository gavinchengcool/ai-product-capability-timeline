# Digest Schema

Use this reference when reading `daily-ai-product-delta.json`.

## Top-Level Fields

- `generatedAt`: digest build time in `Asia/Shanghai`
- `timezone`: fixed as `Asia/Shanghai`
- `requestedWindow`: requested daily window for the current run
- `note`: global caveat about coverage freshness
- `summary`: aggregate counts
- `products`: ordered list of the six tracked products

## Product IDs

- `openclaw`
- `chatgpt`
- `claude`
- `codex`
- `claude-code`
- `codex-app`

## Freshness Modes

- `live_24h`: a true rolling 24-hour feed refreshed daily
- `latest_official_wave`: the latest official dated update window exported from the current baseline; not a true rolling 24-hour feed

## Product Fields

- `id`: stable product id
- `label`: user-facing product label
- `category`: `general` or `developer`
- `automationStatus`: `live_daily` or `baseline_snapshot`
- `freshness`: object with `mode`, `is_live_24h`, and `note`
- `generatedAt`: product-level data generation time
- `window`: source date window for this product
- `meta`: display-friendly metadata rows
- `featureItems`: major capability additions or product-facing changes
- `fixItems`: fixes, hardening, governance, or constraints
- `releases`: supporting releases or official notes
- `topScopes`: compact scope counters when available
- `note`: product-specific caveat

## Interpretation Rules

- Treat `OpenClaw` as the only current true daily feed unless the digest changes.
- For the other five products, always quote the exact date window instead of paraphrasing as "today".
- If the user asks for stricter source validation, verify against official sources from `references/source-map.md`.
