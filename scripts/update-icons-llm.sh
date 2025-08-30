#!/usr/bin/env bash
set -e

# 1. Copy icons.md into static/llm/
cp ./icons.md ./static/llm/icons.md

# 2. Insert the icons entry above "# Optionally point to bundles"
tmpfile=$(mktemp)
awk '
  /^# Optionally point to bundles$/ {
    print "# Icons"
    print "/icons: https://flowbite-svelte.com/llm/icons.md"
    print ""
  }
  { print }
' ./static/llms.txt > "$tmpfile"
mv "$tmpfile" ./static/llms.txt
