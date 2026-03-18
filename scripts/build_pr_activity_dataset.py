#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import time
from datetime import date, datetime, time as dt_time, timedelta
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parents[1]
MEMORY_PATH = ROOT / "memory" / "daily-pr-activity.json"
PUBLIC_PATH = ROOT / "public" / "activity-data.js"
REPO_SLUG = "openclaw/openclaw"
SEARCH_ROOT = "https://api.github.com/search/issues"
LOCAL_TZ = ZoneInfo("Asia/Shanghai")
USER_AGENT = "openclaw-research-pr-activity/1.0"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Build daily merged-PR activity dataset for OpenClaw."
    )
    parser.add_argument("--start", default="2025-11-25", help="Start date in YYYY-MM-DD.")
    parser.add_argument(
        "--end",
        default=(datetime.now(LOCAL_TZ).date() - timedelta(days=1)).isoformat(),
        help="End date in YYYY-MM-DD.",
    )
    parser.add_argument(
        "--refresh-last",
        type=int,
        default=3,
        help="Always refresh the trailing N days even if cache exists.",
    )
    parser.add_argument(
        "--sleep-seconds",
        type=float,
        default=6.3,
        help="Delay between GitHub search requests to respect unauthenticated rate limits.",
    )
    return parser.parse_args()


def load_cache() -> dict[str, object]:
    if not MEMORY_PATH.exists():
        return {}
    return json.loads(MEMORY_PATH.read_text())


def daterange(start_day: date, end_day: date) -> list[date]:
    days: list[date] = []
    cursor = start_day
    while cursor <= end_day:
        days.append(cursor)
        cursor += timedelta(days=1)
    return days


def build_local_window(day: date) -> tuple[str, str]:
    start_dt = datetime.combine(day, dt_time.min, LOCAL_TZ)
    end_dt = datetime.combine(day, dt_time.max.replace(microsecond=0), LOCAL_TZ)
    return start_dt.isoformat(), end_dt.isoformat()


def github_search_total(query: str) -> tuple[int, dict[str, str]]:
    url = f"{SEARCH_ROOT}?{urlencode({'q': query, 'per_page': 1})}"
    request = Request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": USER_AGENT,
        },
    )
    with urlopen(request, timeout=30) as response:
        payload = json.load(response)
        headers = {key.lower(): value for key, value in response.info().items()}
    return int(payload["total_count"]), headers


def refresh_cutoff(end_day: date, refresh_last: int) -> date:
    return end_day - timedelta(days=max(refresh_last - 1, 0))


def collect_rows(
    start_day: date,
    end_day: date,
    cache: dict[str, object],
    refresh_last: int,
    sleep_seconds: float,
) -> list[dict[str, object]]:
    cached_rows = {
        row["date"]: row
        for row in cache.get("rows", [])
        if isinstance(row, dict) and "date" in row
    }
    fresh_after = refresh_cutoff(end_day, refresh_last)
    rows: list[dict[str, object]] = []
    for index, day in enumerate(daterange(start_day, end_day)):
        day_str = day.isoformat()
        if day_str in cached_rows and day < fresh_after:
            rows.append(cached_rows[day_str])
            continue

        start_iso, end_iso = build_local_window(day)
        query = f"repo:{REPO_SLUG} is:pr is:merged merged:{start_iso}..{end_iso}"
        total, headers = github_search_total(query)
        rows.append({"date": day_str, "merged_prs": total})

        remaining = int(headers.get("x-ratelimit-remaining", "1"))
        reset_epoch = int(headers.get("x-ratelimit-reset", "0"))
        if day != end_day:
            if remaining <= 1 and reset_epoch:
                sleep_for = max(reset_epoch - time.time() + 1.0, 1.0)
                time.sleep(sleep_for)
            else:
                time.sleep(sleep_seconds)

        if (index + 1) % 10 == 0 or day == end_day:
            print(f"{day_str}: merged_prs={total}", flush=True)
    return rows


def build_payload(rows: list[dict[str, object]]) -> dict[str, object]:
    max_count = max((int(row["merged_prs"]) for row in rows), default=0)
    peak_days = sorted(rows, key=lambda row: int(row["merged_prs"]), reverse=True)[:8]
    generated_at = datetime.now(LOCAL_TZ).isoformat()
    return {
        "generatedAt": generated_at,
        "repo": REPO_SLUG,
        "timezone": "Asia/Shanghai",
        "metricKey": "merged_prs",
        "metricLabel": "每日 merged PR 数",
        "note": "这个指标更适合表达社区协作活跃度，不等于原始 commit 数。",
        "rows": rows,
        "maxMergedPrs": max_count,
        "peakDays": peak_days,
    }


def write_outputs(payload: dict[str, object]) -> None:
    MEMORY_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    PUBLIC_PATH.write_text(
        "window.OPENCLAW_ACTIVITY = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n"
    )


def main() -> None:
    args = parse_args()
    start_day = date.fromisoformat(args.start)
    end_day = date.fromisoformat(args.end)
    if start_day > end_day:
        raise SystemExit("start date must be <= end date")
    cache = load_cache()
    rows = collect_rows(
        start_day=start_day,
        end_day=end_day,
        cache=cache,
        refresh_last=args.refresh_last,
        sleep_seconds=args.sleep_seconds,
    )
    payload = build_payload(rows)
    write_outputs(payload)
    print(
        json.dumps(
            {
                "start": args.start,
                "end": args.end,
                "days": len(rows),
                "maxMergedPrs": payload["maxMergedPrs"],
                "generatedAt": payload["generatedAt"],
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
