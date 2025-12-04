# Svelte 5 Warnings Fix - Quick Start

## TL;DR

Run this single command to fix all warnings:

```bash
node fix-all-warnings.mjs && pnpm check
```

## What Happened?

You suddenly got 300+ warnings when running `pnpm check`. These are Svelte 5 `state_referenced_locally` warnings caused by accessing reactive props outside of reactive contexts.

## The Solution

I've created automated scripts to fix these issues. Here's what to do:

### Option 1: Fix Everything (Recommended)

```bash
node fix-all-warnings.mjs
```

This runs both library and route fixes automatically.

### Option 2: Fix Step by Step

```bash
# Fix library files first (most important)
node fix-lib-warnings.mjs

# Then fix route files
node fix-route-warnings.mjs
```

### Check Your Progress

```bash
pnpm check
```

## What Got Fixed?

### Already Fixed Manually (12 files)
- ✅ Textarea.svelte
- ✅ Input.svelte  
- ✅ Search.svelte
- ✅ Select.svelte
- ✅ Img.svelte (fixed variable name conflict)
- ✅ SpeedDialButton.svelte
- ✅ CheckmarkIcon.svelte
- ✅ TableSearch.svelte
- ✅ TabItem.svelte
- ✅ Tabs.svelte
- ✅ Timeline.svelte
- ✅ ToastContainer.svelte

### Will Be Fixed By Scripts
- Library files (11 files): MultiSelect, Timepicker, Hr, List, ButtonToggle, VirtualList, VirtualMasonry, ThemeProvider, ClipboardManager, ScrollSpy, SplitPane
- Route files (30+ files): Various utility and layout components

## Understanding the Fix

### Before (causes warning):
```javascript
const value = prop;
```

### After (no warning):
```javascript
const value = $derived(prop);
```

## Common Patterns

| Pattern | Before | After |
|---------|--------|-------|
| Simple value | `const x = prop` | `const x = $derived(prop)` |
| Conditional | `const x = a ? b : c` | `const x = $derived(a ? b : c)` |
| Function call | `const x = fn(prop)` | `const x = $derived(fn(prop))` |
| Context | `setContext("key", prop)` | `$effect(() => setContext("key", prop))` |

## Files Included

- **fix-all-warnings.mjs** - Master script (run this!)
- **fix-lib-warnings.mjs** - Fixes library files
- **fix-route-warnings.mjs** - Fixes route files
- **FIX_SUMMARY.md** - Detailed documentation
- **FIXES_NEEDED.md** - Manual fix guide
- **README-WARNINGS-FIX.md** - This file

## Troubleshooting

### Script Errors?
Make sure you're in the project root:
```bash
cd /Users/shinichiokada/Flowbite/flowbite-svelte-local-development
```

### Still Have Warnings?
Some complex patterns may need manual fixes. See `FIXES_NEEDED.md` for guidance.

### Want to Understand More?
Read `FIX_SUMMARY.md` for a complete explanation of what changed and why.

## Questions?

- **Why did this happen?** Svelte 5 changed how reactive values work.
- **Is this breaking?** For library consumers, no. This fixes internal issues.
- **Should I test?** Yes, always test after running automated fixes.
- **Can I revert?** Yes, these files are in git, so you can revert if needed.

## Ready to Go?

```bash
node fix-all-warnings.mjs && pnpm check
```

That's it! 🎉
