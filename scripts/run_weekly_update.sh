#!/bin/zsh

set -euo pipefail

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${ROOT_DIR}"

if [[ "$#" -eq 0 ]]; then
  /usr/bin/python3 "${ROOT_DIR}/scripts/openclaw_weekly_scan.py" --window-days 1
else
  /usr/bin/python3 "${ROOT_DIR}/scripts/openclaw_weekly_scan.py" "$@"
fi

/usr/bin/python3 "${ROOT_DIR}/scripts/build_pr_activity_dataset.py"
/usr/bin/python3 "${ROOT_DIR}/scripts/build_site_assets.py"
node "${ROOT_DIR}/scripts/build_daily_product_digest.mjs"

if [[ -x "/opt/homebrew/bin/npx" ]]; then
  NPX_BIN="/opt/homebrew/bin/npx"
elif [[ -x "/usr/local/bin/npx" ]]; then
  NPX_BIN="/usr/local/bin/npx"
else
  NPX_BIN="$(command -v npx)"
fi

if [[ -z "${NPX_BIN}" ]]; then
  echo "npx not found; cannot deploy to Vercel" >&2
  exit 1
fi

RG_BIN="$(command -v rg || true)"

cd "${ROOT_DIR}/public"
CANONICAL_ALIAS="ai-product-capability-timeline.vercel.app"

DEPLOY_OUTPUT="$("${NPX_BIN}" --yes vercel --prod --yes 2>&1)"
echo "${DEPLOY_OUTPUT}"

if [[ -n "${RG_BIN}" ]]; then
  DEPLOYMENT_URL="$(printf '%s\n' "${DEPLOY_OUTPUT}" | "${RG_BIN}" -o 'https://[^[:space:]]+\.vercel\.app' | head -n 1)"
else
  DEPLOYMENT_URL=""
fi

if [[ -n "${DEPLOYMENT_URL}" ]]; then
  "${NPX_BIN}" --yes vercel alias set "${DEPLOYMENT_URL}" "${CANONICAL_ALIAS}"
else
  echo "Could not extract Vercel deployment URL; skipped alias update for ${CANONICAL_ALIAS}" >&2
fi
