#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path
from urllib.error import URLError
from urllib.request import Request, urlopen


DEFAULT_URL = os.environ.get(
    "AI_PRODUCT_DELTA_URL",
    "https://ai-product-capability-timeline.vercel.app/daily-ai-product-delta.json",
)
LOCAL_REPO_PATH = Path(__file__).resolve().parents[3] / "public" / "daily-ai-product-delta.json"


def load_local(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def load_remote(url: str) -> dict:
    request = Request(
        url,
        headers={
            "Accept": "application/json",
            "User-Agent": "daily-ai-product-delta-skill/1.0",
        },
    )
    with urlopen(request, timeout=30) as response:
        return json.load(response)


def resolve_payload(file_path: str | None, url: str) -> dict:
    candidates = []
    if file_path:
        candidates.append(Path(file_path))
    else:
        candidates.append(LOCAL_REPO_PATH)

    for candidate in candidates:
        if candidate.exists():
            return load_local(candidate)

    return load_remote(url)


def filter_products(payload: dict, product_ids: list[str]) -> dict:
    if not product_ids:
        return payload
    wanted = set(product_ids)
    products = [product for product in payload.get("products", []) if product.get("id") in wanted]
    filtered = dict(payload)
    filtered["products"] = products
    filtered["summary"] = {
        **payload.get("summary", {}),
        "productCount": len(products),
        "live24hProducts": sum(1 for product in products if product.get("freshness", {}).get("is_live_24h")),
        "latestOfficialWaveProducts": sum(
            1 for product in products if product.get("freshness", {}).get("mode") == "latest_official_wave"
        ),
    }
    return filtered


def render_text(payload: dict) -> str:
    lines = [
        f"Generated at: {payload.get('generatedAt', 'n/a')}",
        f"Requested window: {payload.get('requestedWindow', {}).get('start_local', 'n/a')} -> {payload.get('requestedWindow', {}).get('end_local', 'n/a')}",
        f"Coverage: {payload.get('summary', {}).get('productCount', 0)} products",
        f"Note: {payload.get('note', '')}",
        "",
    ]

    for product in payload.get("products", []):
        freshness = product.get("freshness", {})
        lines.append(f"[{product.get('label', product.get('id', 'unknown'))}]")
        lines.append(f"Freshness: {freshness.get('mode', 'unknown')}")
        lines.append(
            f"Window: {product.get('window', {}).get('start_local', 'n/a')} -> {product.get('window', {}).get('end_local', 'n/a')}"
        )
        lines.append(f"Generated at: {product.get('generatedAt', 'n/a')}")
        for item in product.get("featureItems", [])[:4]:
            lines.append(f"- Feature: {item}")
        for item in product.get("fixItems", [])[:3]:
            lines.append(f"- Fix: {item}")
        if product.get("note"):
            lines.append(f"- Note: {product['note']}")
        lines.append("")

    return "\n".join(lines).strip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Load the shared daily AI product digest.")
    parser.add_argument("--file", help="Local digest JSON path. Defaults to repo public/daily-ai-product-delta.json when available.")
    parser.add_argument("--url", default=DEFAULT_URL, help=f"Hosted digest URL. Defaults to {DEFAULT_URL}.")
    parser.add_argument("--product", action="append", default=[], help="Filter by product id. Repeatable.")
    parser.add_argument("--format", choices=("json", "text"), default="text")
    args = parser.parse_args()

    try:
        payload = resolve_payload(args.file, args.url)
    except FileNotFoundError as error:
        print(f"Digest file not found: {error}", file=sys.stderr)
        return 1
    except URLError as error:
        print(f"Failed to fetch digest: {error}", file=sys.stderr)
        return 1

    payload = filter_products(payload, args.product)
    if args.format == "json":
        print(json.dumps(payload, ensure_ascii=False, indent=2))
    else:
        print(render_text(payload), end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
