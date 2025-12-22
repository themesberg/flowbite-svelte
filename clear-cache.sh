#!/bin/bash

# Stop the dev server if running
echo "Clearing build caches..."

# Remove .svelte-kit directory
rm -rf .svelte-kit

# Remove node_modules/.vite cache
rm -rf node_modules/.vite

echo "Caches cleared! Now restart your dev server with: pnpm dev"
