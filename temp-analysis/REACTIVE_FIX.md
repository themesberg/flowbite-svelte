# Reactive Theme Fix - Key Pattern

## The Problem

Components were calling `getTheme()` once and storing the result:

```svelte
const theme = getTheme("button");  // ❌ Called once, not reactive

let btnCls = $derived(base({ class: clsx(..., theme?.base, ...) }));
```

Even though `btnCls` is `$derived`, accessing `theme?.base` doesn't trigger reactivity because `theme` is just a captured value, not a reactive reference.

## The Solution

Call `getTheme()` **inside** the `$derived` expression:

```svelte
// ✅ Reactive - getTheme() called every time btnCls recomputes
let btnCls = $derived(base({ class: clsx(..., getTheme("button")?.base, ...) }));
```

## Why This Works

1. `ThemeProvider` stores theme in a `$state` object
2. When theme prop changes, the state updates
3. `getTheme()` accesses the state through context
4. When called inside `$derived`, Svelte tracks the state access
5. State changes trigger `$derived` to re-run
6. `getTheme()` returns new theme value
7. Classes update, component re-renders

## Pattern for All Components

**Before:**
```svelte
const theme = getTheme("componentName");
// ... later
class={something({ class: clsx(theme?.base, ...) })}
```

**After:**
```svelte
// Call getTheme() directly in derived expression
const myClass = $derived(something({ class: clsx(getTheme("componentName")?.base, ...) }));
// ... later
class={myClass}
```

## Updated Components

- ✅ Button.svelte
- ✅ Card.svelte
- ⚠️ Other components using `getTheme()` need same fix

## Testing

Visit `/testdir/theme` and click "Toggle Theme" - the button and card should now change colors immediately.
