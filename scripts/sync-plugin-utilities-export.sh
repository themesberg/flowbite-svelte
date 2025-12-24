#!/usr/bin/env bash
set -e

FILE="package.json"

# 1. Remove existing "./plugin-utilities" export block (if any)
sed -i '' '/"\.\/plugin-utilities": {/,/^[[:space:]]*},/d' "$FILE" 2>/dev/null \
|| sed -i '/"\.\/plugin-utilities": {/,/^[[:space:]]*},/d' "$FILE"

# 2. Insert the correct block before "./package.json"
sed -i '' '/"\.\/package\.json": "\.\/package\.json"/i\
  "./plugin-utilities": {\
    "types": "./dist/plugin-utilities.d.ts",\
    "import": "./dist/plugin-utilities.js",\
    "default": "./dist/plugin-utilities.js"\
  },\
' "$FILE" 2>/dev/null \
|| sed -i '/"\.\/package\.json": "\.\/package\.json"/i\
  "./plugin-utilities": {\
    "types": "./dist/plugin-utilities.d.ts",\
    "import": "./dist/plugin-utilities.js",\
    "default": "./dist/plugin-utilities.js"\
  },\
' "$FILE"
