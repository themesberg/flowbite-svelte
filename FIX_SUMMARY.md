# Svelte 5 Warnings Fix - Complete Guide

## Problem Summary

You started getting 300+ warnings after running `pnpm check`. These warnings are all **Svelte 5 `state_referenced_locally`** warnings, which occur when reactive props are accessed at the top level of a script without being in a reactive context.

## What I've Fixed

### ✅ Already Fixed (Manual Fixes)
1. **Textarea.svelte** - Wrapped `warnThemeDeprecation` in `$effect`
2. **Input.svelte** - Wrapped `warnThemeDeprecation` in `$effect`
3. **Search.svelte** - Wrapped `warnThemeDeprecation` in `$effect`
4. **Select.svelte** - Wrapped `warnThemeDeprecation` in `$effect`
5. **Img.svelte** - Fixed `effect` prop conflict with `$effect` rune (renamed to `imgEffect`)
6. **SpeedDialButton.svelte** - Changed `tooltip` to use `$derived`
7. **CheckmarkIcon.svelte** - Changed `iconProps` and `baseClass` to use `$derived`
8. **TableSearch.svelte** - Changed `themeColor` and `tableSearchCtx` to use `$derived`
9. **TabItem.svelte** - Changed `tabIdentifier` and `self` to use `$derived`
10. **Tabs.svelte** - Changed `activeClasses` and `ctx` to use `$derived`
11. **Timeline.svelte** - Wrapped `setContext` in `$effect`
12. **ToastContainer.svelte** - Changed `base` to use `$derived`

## How to Fix the Remaining Warnings

### Step 1: Run the Automated Fix Script

```bash
cd /Users/shinichiokada/Flowbite/flowbite-svelte-local-development
node fix-lib-warnings.mjs
```

This will automatically fix the remaining library files:
- MultiSelect.svelte
- Timepicker.svelte
- Hr.svelte
- List.svelte
- ButtonToggle.svelte
- VirtualList.svelte
- VirtualMasonry.svelte
- ThemeProvider.svelte
- ClipboardManager.svelte
- ScrollSpy.svelte
- SplitPane.svelte

### Step 2: Check Your Progress

```bash
pnpm check
```

After running the script, you should see significantly fewer warnings. Most of the library warnings should be resolved.

## Understanding the Patterns

### Pattern 1: Simple Value Assignment
**Problem:**
```javascript
const value = prop;
```

**Fix:**
```javascript
const value = $derived(prop);
```

### Pattern 2: Conditional Assignment
**Problem:**
```javascript
const value = propA ? propB : propC;
```

**Fix:**
```javascript
const value = $derived(propA ? propB : propC);
```

### Pattern 3: Object/Array with Props
**Problem:**
```javascript
const obj = { key: prop };
```

**Fix:**
```javascript
const obj = $derived({ key: prop });
```

### Pattern 4: Context Setting
**Problem:**
```javascript
setContext("key", prop);
```

**Fix:**
```javascript
$effect(() => {
  setContext("key", prop);
});
```

### Pattern 5: Function Calls with Props
**Problem:**
```javascript
const result = someFunction({ prop1, prop2 });
```

**Fix:**
```javascript
const result = $derived(someFunction({ prop1, prop2 }));
```

### Pattern 6: warnThemeDeprecation
**Problem:**
```javascript
warnThemeDeprecation("Component", { prop1, prop2 }, {...});
```

**Fix:**
```javascript
$effect(() => {
  warnThemeDeprecation("Component", { prop1, prop2 }, {...});
});
```

## Route Files

The route files (in `src/routes/`) follow similar patterns. Most of these are:
- Template literals with props
- Variables derived from props
- Context settings

These are less critical than library files since they're in your application code, not the library itself. You can fix them following the same patterns above.

## Why This Happened

Svelte 5 introduced runes (`$state`, `$derived`, `$effect`) and changed how reactive values work. Props are now reactive by default, but accessing them at the top level of a script (outside of `$derived`, `$effect`, or the template) captures only their initial value.

This is a **breaking change from Svelte 4**, where reactive statements (`$:`) would automatically track dependencies.

## Key Rules for Svelte 5

1. **Props accessed in variables** → Use `$derived()`
2. **Props used in side effects** → Use `$effect(() => { ... })`
3. **Props used in templates** → No changes needed, works automatically
4. **Props used in event handlers** → No changes needed, works automatically

## Next Steps

1. ✅ Run `node fix-lib-warnings.mjs`
2. ✅ Run `pnpm check` to verify
3. If you still have route file warnings and want them fixed, let me know and I can create another script
4. Test your application to ensure everything works correctly

The library warnings were the most critical ones to fix since they affect all consumers of your library. Route file warnings are less critical but should be fixed for completeness.
