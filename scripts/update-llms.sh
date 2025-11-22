#!/usr/bin/env bash
set -e

# 1. Copy icons.md and illustrations.md into src/routes/llm/
cp ./scripts/icons.md ./src/routes/llm/icons.md
cp ./scripts/illustrations.md ./src/routes/llm/illustrations.md

# 2. Insert the icons and illustrations entries above "# Optionally point to bundles"
tmpfile=$(mktemp)
awk '
  /^# Optionally point to bundles$/ {
    print "# Icons"
    print "/icons: https://flowbite-svelte.com/llm/icons.md"
    print ""
    print "# Illustrations"
    print "/illustrations: https://flowbite-svelte.com/llm/illustrations.md"
    print ""
  }
  { print }
' ./static/llms.txt > "$tmpfile"
mv "$tmpfile" ./static/llms.txt

echo "Updated llms.txt successfully!"
echo "Copied icons.md and illustrations.md to src/routes/llm/"
