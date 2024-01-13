#!/bin/bash

# Ignore builds triggered by changes to unrelated files only
# See: https://docs.netlify.com/configure-builds/ignore-builds/#custom-ignore-command
! git diff --name-only "$CACHED_COMMIT_REF" "$COMMIT_REF" |
  grep --quiet --invert-match --extended-regexp '^README\.md|biome\.json|\.git(attributes|config)|\.(vscode|github|codesandbox|devcontainer)/.*$'
