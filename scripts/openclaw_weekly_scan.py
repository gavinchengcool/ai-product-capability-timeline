#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Iterable
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parents[1]
REPORTS_CURRENT = ROOT / "reports" / "current"
REPORTS_WEEKLY = ROOT / "reports" / "weekly"
MEMORY_DIR = ROOT / "memory"
STATE_PATH = MEMORY_DIR / "weekly-scan-state.json"

REPO_SLUG = "openclaw/openclaw"
API_ROOT = f"https://api.github.com/repos/{REPO_SLUG}"
USER_AGENT = "openclaw-research-weekly-scan/1.0"


def github_get(url: str) -> object:
    request = Request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": USER_AGENT,
        },
    )
    with urlopen(request, timeout=30) as response:
        return json.load(response)


def utc_z(dt: datetime) -> str:
    return (
        dt.astimezone(timezone.utc)
        .replace(microsecond=0)
        .isoformat()
        .replace("+00:00", "Z")
    )


def parse_iso(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def fetch_repo() -> dict:
    return github_get(API_ROOT)  # type: ignore[return-value]


def fetch_releases(limit: int = 100) -> list[dict]:
    return github_get(f"{API_ROOT}/releases?per_page={limit}")  # type: ignore[return-value]


def fetch_commits(start_utc: datetime, end_utc: datetime) -> list[dict]:
    commits: list[dict] = []
    page = 1
    while True:
        query = urlencode(
            {
                "per_page": 100,
                "page": page,
                "since": utc_z(start_utc),
                "until": utc_z(end_utc),
            }
        )
        batch = github_get(f"{API_ROOT}/commits?{query}")  # type: ignore[assignment]
        if not batch:
            break
        commits.extend(batch)
        if len(batch) < 100:
            break
        page += 1
    return commits


def first_line(text: str) -> str:
    return text.strip().splitlines()[0].strip()


def release_sections(body: str) -> dict[str, list[str]]:
    sections = {"changes": [], "fixes": [], "other": []}
    current: str | None = None
    for raw_line in body.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        if line.startswith("##") or line.startswith("###"):
            heading = line.lstrip("#").strip().lower()
            if "what's changed" in heading or heading == "changes":
                current = "changes"
            elif heading == "fixes":
                current = "fixes"
            else:
                current = None
            continue
        if line.startswith(("* ", "- ")):
            item = re.sub(r"^[*-]\s*", "", line)
            if current is None:
                sections["other"].append(item)
            else:
                sections[current].append(item)
    if not sections["changes"] and sections["other"]:
        sections["changes"] = sections["other"]
    return sections


def dedupe(items: Iterable[str]) -> list[str]:
    seen: set[str] = set()
    output: list[str] = []
    for item in items:
        normalized = item.strip()
        if not normalized or normalized in seen:
            continue
        seen.add(normalized)
        output.append(normalized)
    return output


def looks_feature_like(text: str) -> bool:
    lower = text.lower()
    excluded_prefixes = ("fix", "docs", "test", "refactor", "perf", "security", "build", "chore")
    if lower.startswith(excluded_prefixes):
        return False
    if lower.startswith("feat"):
        return True
    feature_terms = (
        " add ",
        " adds ",
        " added ",
        " support ",
        " supports ",
        " supporting ",
        " new ",
        " redesign ",
        " interactive ",
        " welcome ",
        " attach mode",
        " profile=",
        " batched ",
        " structured cards",
        " configurable",
        " timezone support",
        " theme",
        " dark theme",
    )
    padded = f" {lower} "
    return any(term in padded for term in feature_terms)


def looks_fix_like(text: str) -> bool:
    lower = text.lower()
    return lower.startswith(("fix", "security", "perf")) or " harden" in lower or "harden " in lower


def commit_scope(title: str) -> str:
    match = re.match(r"^(feat|fix|docs|refactor|perf|test|build|security|chore)(?:\(([^)]+)\))?:", title)
    if match:
        return match.group(2) or match.group(1)
    if ":" in title:
        return title.split(":", 1)[0].strip().lower()
    return title.split(" ", 1)[0].strip().lower()


def markdown_bullets(items: list[str], fallback: str) -> list[str]:
    if not items:
        return [f"- {fallback}"]
    cleaned = [item[2:] if item.startswith("- ") else item for item in items]
    return [f"- {item}" for item in cleaned]


def build_snapshot_markdown(repo: dict, stable_releases: list[dict], now_local: datetime) -> str:
    recent = stable_releases[:8]
    recent_lines = "\n".join(f"- `{release['tag_name']}` published {release['published_at']}" for release in recent)
    return f"""# OpenClaw GitHub Snapshot

生成时间：{now_local.isoformat()}

## Repo Snapshot

- Repo: `openclaw/openclaw`
- Created at: {repo['created_at']}
- Last pushed at: {repo['pushed_at']}
- Stars: {repo['stargazers_count']}
- Forks: {repo['forks_count']}
- Open issues: {repo['open_issues_count']}
- Default branch: `{repo['default_branch']}`
- Description: {repo['description']}

## Release Snapshot

- Stable releases sampled: {len(stable_releases)}
- Latest stable release: `{stable_releases[0]['tag_name']}` published {stable_releases[0]['published_at']}

## Recent Stable Releases

{recent_lines}

## Sources

- https://github.com/{REPO_SLUG}
- https://api.github.com/repos/{REPO_SLUG}
- https://api.github.com/repos/{REPO_SLUG}/releases?per_page=100
"""


def build_weekly_markdown(
    repo: dict,
    releases_in_window: list[dict],
    commits: list[dict],
    start_local: datetime,
    end_local: datetime,
    feature_items: list[str],
    fix_items: list[str],
    scope_counts: list[tuple[str, int]],
) -> str:
    stable = [release for release in releases_in_window if not release["prerelease"]]
    prerelease = [release for release in releases_in_window if release["prerelease"]]
    release_lines = [
        f"- `{release['tag_name']}` | {'beta' if release['prerelease'] else 'stable'} | {release['published_at']} | {release['name']}"
        for release in releases_in_window
    ]
    commit_headlines = [
        f"- {commit['commit']['author']['date']} | {first_line(commit['commit']['message'])}"
        for commit in commits[:20]
    ]
    scope_lines = [f"- `{scope}`: {count}" for scope, count in scope_counts[:12]]

    return f"""# OpenClaw Weekly Update

生成时间：{end_local.isoformat()}

## Window

- Start: {start_local.isoformat()}
- End: {end_local.isoformat()}
- Repo: `openclaw/openclaw`

## At A Glance

- Commits in window: {len(commits)}
- Releases in window: {len(releases_in_window)}
- Stable releases in window: {len(stable)}
- Beta releases in window: {len(prerelease)}
- Repo stars at scan time: {repo['stargazers_count']}
- Repo forks at scan time: {repo['forks_count']}

## New Capability Signals

{chr(10).join(markdown_bullets(feature_items[:15], 'This week skewed more toward fixes and hardening than obvious net-new capabilities.'))}

## Important Fixes And Hardening

{chr(10).join(markdown_bullets(fix_items[:15], 'No prominent fix cluster was extracted from release notes or commit titles.'))}

## Releases This Week

{chr(10).join(markdown_bullets(release_lines, 'No GitHub releases were published in this window.'))}

## Most Active Change Scopes

{chr(10).join(markdown_bullets(scope_lines, 'No scope counts available.'))}

## Recent Commit Headlines

{chr(10).join(markdown_bullets(commit_headlines, 'No commits found in this window.'))}

## Sources

- https://github.com/{REPO_SLUG}
- https://api.github.com/repos/{REPO_SLUG}
- https://api.github.com/repos/{REPO_SLUG}/releases?per_page=100
- https://api.github.com/repos/{REPO_SLUG}/commits
"""


def collect_feature_items(releases_in_window: list[dict], commits: list[dict]) -> list[str]:
    items: list[str] = []
    for release in releases_in_window:
        sections = release_sections(release.get("body", ""))
        for item in sections["changes"]:
            if looks_feature_like(item):
                items.append(f"{item} [{release['tag_name']}]")
    for commit in commits:
        title = first_line(commit["commit"]["message"])
        if looks_feature_like(title):
            items.append(title)
    return dedupe(items)


def collect_fix_items(releases_in_window: list[dict], commits: list[dict]) -> list[str]:
    items: list[str] = []
    for release in releases_in_window:
        sections = release_sections(release.get("body", ""))
        for item in sections["fixes"] + sections["changes"]:
            if looks_fix_like(item):
                items.append(f"{item} [{release['tag_name']}]")
    for commit in commits:
        title = first_line(commit["commit"]["message"])
        if looks_fix_like(title):
            items.append(title)
    return dedupe(items)


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.rstrip() + "\n", encoding="utf-8")


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate weekly OpenClaw GitHub updates.")
    parser.add_argument("--timezone", default="Asia/Shanghai")
    parser.add_argument("--window-days", type=int, default=7)
    parser.add_argument("--end", help="Override end time in ISO-8601 format.")
    args = parser.parse_args()

    local_tz = ZoneInfo(args.timezone)
    now_local = (
        datetime.fromisoformat(args.end).astimezone(local_tz)
        if args.end
        else datetime.now(local_tz)
    )
    start_local = now_local - timedelta(days=args.window_days)
    start_utc = start_local.astimezone(timezone.utc)
    end_utc = now_local.astimezone(timezone.utc)

    repo = fetch_repo()
    releases = fetch_releases()
    stable_releases = [release for release in releases if not release["prerelease"]]
    releases_in_window = [
        release
        for release in releases
        if start_utc <= parse_iso(release["published_at"]) <= end_utc
    ]
    commits = fetch_commits(start_utc, end_utc)

    feature_items = collect_feature_items(releases_in_window, commits)
    fix_items = collect_fix_items(releases_in_window, commits)
    scope_counts = Counter(commit_scope(first_line(commit["commit"]["message"])) for commit in commits).most_common()

    snapshot_markdown = build_snapshot_markdown(repo, stable_releases, now_local)
    snapshot_json = {
        "generated_at": now_local.isoformat(),
        "repo": {
            "slug": REPO_SLUG,
            "created_at": repo["created_at"],
            "pushed_at": repo["pushed_at"],
            "stars": repo["stargazers_count"],
            "forks": repo["forks_count"],
            "open_issues": repo["open_issues_count"],
            "default_branch": repo["default_branch"],
        },
        "latest_stable_release": {
            "tag_name": stable_releases[0]["tag_name"],
            "published_at": stable_releases[0]["published_at"],
            "name": stable_releases[0]["name"],
        },
        "recent_stable_releases": [
            {
                "tag_name": release["tag_name"],
                "published_at": release["published_at"],
                "name": release["name"],
            }
            for release in stable_releases[:8]
        ],
    }

    week_year_dir = REPORTS_WEEKLY / str(now_local.year)
    weekly_md_path = week_year_dir / f"{now_local.date().isoformat()}.md"
    weekly_json_path = week_year_dir / f"{now_local.date().isoformat()}.json"
    latest_weekly_path = REPORTS_WEEKLY / "latest.md"
    latest_weekly_json_path = REPORTS_WEEKLY / "latest.json"

    weekly_markdown = build_weekly_markdown(
        repo=repo,
        releases_in_window=releases_in_window,
        commits=commits,
        start_local=start_local,
        end_local=now_local,
        feature_items=feature_items,
        fix_items=fix_items,
        scope_counts=scope_counts,
    )
    weekly_json = {
        "generated_at": now_local.isoformat(),
        "window": {
            "start_local": start_local.isoformat(),
            "end_local": now_local.isoformat(),
            "start_utc": utc_z(start_utc),
            "end_utc": utc_z(end_utc),
        },
        "repo": {
            "slug": REPO_SLUG,
            "stars": repo["stargazers_count"],
            "forks": repo["forks_count"],
            "open_issues": repo["open_issues_count"],
            "pushed_at": repo["pushed_at"],
        },
        "releases_in_window": [
            {
                "tag_name": release["tag_name"],
                "published_at": release["published_at"],
                "name": release["name"],
                "prerelease": release["prerelease"],
                "html_url": release["html_url"],
            }
            for release in releases_in_window
        ],
        "commit_count": len(commits),
        "commit_headlines": [first_line(commit["commit"]["message"]) for commit in commits[:50]],
        "feature_items": feature_items[:30],
        "fix_items": fix_items[:30],
        "top_scopes": [{"scope": scope, "count": count} for scope, count in scope_counts[:15]],
    }

    write_text(REPORTS_CURRENT / "github-snapshot.md", snapshot_markdown)
    write_json(REPORTS_CURRENT / "github-snapshot.json", snapshot_json)
    write_text(weekly_md_path, weekly_markdown)
    write_json(weekly_json_path, weekly_json)
    write_text(latest_weekly_path, weekly_markdown)
    write_json(latest_weekly_json_path, weekly_json)

    state = {
        "last_run_local": now_local.isoformat(),
        "last_run_utc": utc_z(end_utc),
        "window_start_local": start_local.isoformat(),
        "window_end_local": now_local.isoformat(),
        "latest_weekly_report": str(weekly_md_path),
        "latest_weekly_json": str(weekly_json_path),
        "latest_snapshot_report": str(REPORTS_CURRENT / "github-snapshot.md"),
        "latest_snapshot_json": str(REPORTS_CURRENT / "github-snapshot.json"),
        "latest_stable_release": stable_releases[0]["tag_name"],
        "commit_count_in_window": len(commits),
        "release_count_in_window": len(releases_in_window),
        "timezone": args.timezone,
    }
    write_json(STATE_PATH, state)


if __name__ == "__main__":
    main()
