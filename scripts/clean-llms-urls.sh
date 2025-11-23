#!/usr/bin/env bash
# Clean URL extensions in llms.txt after update-llms.sh inserts them.
# Removes .md from most URLs but preserves .txt for context-full.
set -e

if [[ ! -f ./static/llms.txt ]]; then
  echo "Error: ./static/llms.txt not found" >&2
  exit 1
fi

echo "Updating llms.txt URLs to remove .md extensions..."

# Remove .md extensions from all URLs and restore .txt for context-full
sed -i.bak \
  -e 's/\.md$//' \
  -e 's|/context: https://flowbite-svelte.com/llm/context-full$|/context: https://flowbite-svelte.com/llm/context-full.txt|' \
  ./static/llms.txt

# Remove backup file
rm -f ./static/llms.txt.bak

echo "Updated llms.txt successfully!"
echo "All .md extensions have been removed from URLs"
