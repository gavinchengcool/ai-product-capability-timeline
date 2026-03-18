---
name: daily-ai-product-delta
description: Summarize the latest product deltas across OpenClaw, ChatGPT, Claude, Codex CLI, Claude Code CLI, and Codex App from the shared daily digest endpoint. Use when the user asks for today's, latest, most recent, yesterday's, past-24-hour, or current-wave changes for any of these six products, or asks to compare their recent movement.
---

# Daily AI Product Delta

## Overview

Fetch the shared daily digest before reasoning from memory. Separate true rolling 24-hour data from snapshot baselines, then answer with exact dates and explicit freshness caveats.

## Workflow

1. Run `scripts/fetch_latest_digest.py`.
2. Prefer the local repo copy `public/daily-ai-product-delta.json` when it exists; otherwise use the hosted JSON endpoint.
3. Inspect each product's `freshness.mode` before making any claim about "today" or "past 24 hours".
4. Summarize feature signals, fixes, and source window separately.
5. If the user asks for source verification or if the digest is stale, read `references/source-map.md` and verify against official sources.

## Freshness Rules

- Treat `live_24h` as a real rolling 24-hour daily feed.
- Treat `latest_official_wave` as the most recent official dated update window, not as a true rolling 24-hour feed.
- State the exact `window.start_local`, `window.end_local`, and `generatedAt` values when answering "today" or "latest" questions.
- Do not imply all six products refresh daily unless the digest says so.

## Output Pattern

- Start with a one-line coverage statement.
- Group by product.
- For each product, report:
  - freshness mode
  - covered date window
  - key feature signals
  - fixes, constraints, or governance changes
- End with a short caveat if some products are still snapshot baselines.

## Resources

- `scripts/fetch_latest_digest.py`: Load the current digest from the repo checkout or hosted endpoint.
- `references/schema.md`: Understand payload fields and freshness semantics.
- `references/source-map.md`: Verify against official sources when the digest is insufficient.
