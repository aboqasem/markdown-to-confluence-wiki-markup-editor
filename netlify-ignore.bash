#!/bin/bash

# Ignore builds triggered by changes to 'README.md', '.vscode/*', and/or '.github/*' ONLY
# See: https://docs.netlify.com/configure-builds/ignore-builds/#custom-ignore-command
! git diff --name-only "$CACHED_COMMIT_REF" "$COMMIT_REF" |
  grep --quiet --invert-match --extended-regexp '^README\.md|biome.json|\.(vscode|github)/.*$'
