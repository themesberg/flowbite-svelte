#!/usr/bin/env bash
# Clean URL extensions in llms.txt after update-llms.sh inserts them.
# Removes .md from most URLs but preserves .txt for context-full.
set -e

if [[ ! -f ./static/llms.txt ]]; then
  echo "Error: ./static/llms.txt not found" >&2
  exit 1
fi

echo "Updating llms.txt URLs to remove .md extensions..."

# Strategy:
# 1. Remove .md from all URLs (including context-full if it has .md)
# 2. Ensure context-full specifically has .txt extension
# 3. This handles both initial state (context-full.md) and idempotent re-runs (context-full.txt)
sed -i.bak \
  -e 's/\.md$//' \
  -e 's|/context: https://flowbite-svelte\.com/llm/context-full$|/context: https://flowbite-svelte.com/llm/context-full.txt|' \
  ./static/llms.txt

# Remove backup file
rm -f ./static/llms.txt.bak

# Verify context-full has .txt extension
if ! grep -q 'https://flowbite-svelte\.com/llm/context-full\.txt' ./static/llms.txt; then
  echo "Error: context-full.txt not found after update" >&2
  echo "Please check ./static/llms.txt manually" >&2
  exit 1
fi

echo "Updated llms.txt successfully!"
echo "All .md extensions have been removed from URLs"
echo "Verified: context-full.txt is present"
