#!/usr/bin/env bash
set -e

echo "Updating llms.txt URLs to remove .md extensions..."

# Remove .md extensions from all URLs in llms.txt
sed -i.bak 's/\.md$//' ./static/llms.txt

# Keep the .txt extension for context-full.txt
sed -i.bak 's|/context: https://flowbite-svelte.com/llm/context-full$|/context: https://flowbite-svelte.com/llm/context-full.txt|' ./static/llms.txt

# Remove backup file
rm -f ./static/llms.txt.bak

echo "Updated llms.txt successfully!"
echo "All .md extensions have been removed from URLs"
