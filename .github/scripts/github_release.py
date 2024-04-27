import os
import re
import requests
import datetime
from typing import List

# Environment setup and validations
github_token = os.getenv('GITHUB_TOKEN')
if not github_token:
    print("Set 'GITHUB_TOKEN' environment variable to enable GitHub releases")
    exit(1)

version = os.getenv('VERSION')
if not version:
    print("Set 'VERSION' environment variable to enable GitHub releases")
    exit(1)

full_repo_name = os.getenv('GITHUB_REPOSITORY')
if not full_repo_name:
    print("Set 'GITHUB_REPOSITORY' environment variable to enable GitHub releases")
    exit(1)

build_quality = os.getenv('BUILD_QUALITY', 'Debug')
default_commitish = os.popen('git rev-parse HEAD').read().strip() or 'main'
commitish = os.getenv('GITHUB_SHA', default_commitish)

# Determine the tag based on build quality
tag = f"v{version}.{build_quality.lower()}"
if build_quality == 'Debug':
    timestamp = datetime.datetime.now(datetime.UTC).strftime('%Y_%m_%d_%H_%M_%S')
    tag += f".{timestamp}"

# Configure the release parameters
repo_owner = full_repo_name.split('/')[0]
repo_name = full_repo_name.split('/')[1]
artifact = os.getenv('ARTIFACT', "default")
release_name = f"{artifact.capitalize()} [{build_quality}]: {version}"
is_prerelease = build_quality != 'GA'

# Fetch and format changelog
max_fetched = 12
max_reported = 5
ignored_patterns = [
    re.compile(pattern, re.IGNORECASE) for pattern in [
        ".*bump.*version.*",
        ".*increase.*version.*",
        ".*version.*bump.*",
        ".*version.*increase.*",
        ".*merge.*request.*",
        ".*request.*merge.*",
    ]
]

def fetch_changes() -> List[str]:
    cmd = f"git log HEAD~{max_fetched}..HEAD --format=oneline --abbrev-commit --max-count={max_fetched}"
    result = os.popen(cmd).read().strip().split('\n')
    changes = [
        change.strip() for change in result
        if not any(pattern.match(change) for pattern in ignored_patterns)
    ]
    return changes[:max_reported]

changes = fetch_changes()
bullet = "\n* "
change_log = f"## Latest changes{bullet}{bullet.join(changes)}" if changes else "See commit history for latest changes."

# Build the body of the release
body = {
    "tag_name": tag,
    "name": release_name,
    "body": change_log,
    "draft": False,
    "prerelease": is_prerelease,
    "target_commitish": commitish,
}

# Publish the release
release_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/releases"
headers = {'Authorization': f'token {github_token}'}
response = requests.post(release_url, json=body, headers=headers)

if response and response.status_code != 201:
    print("GitHub Release failed")
    print(response.content)
    exit(1)

print("GitHub Release created successfully")
