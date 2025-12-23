#!/bin/bash
# Usage: Stop your dev server before running this script.
# This script clears build caches and requires a dev server restart.

echo "Clearing build caches..."

# Remove .svelte-kit directory
rm -rf .svelte-kit || echo "Warning: Failed to remove .svelte-kit"

# Remove node_modules/.vite cache
rm -rf node_modules/.vite || echo "Warning: Failed to remove node_modules/.vite"

echo "Caches cleared! Now restart your dev server with: pnpm dev"
