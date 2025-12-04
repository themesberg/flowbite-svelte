# Remaining Svelte 5 Warnings - Fix Guide

## Library Files Fixes

### MultiSelect.svelte
```javascript
// Line 201: Change
const { base, dropdown, item: dropdownItem, close, select, placeholder: placeholderSpan, svg } = multiSelect({ disabled, grouped: !!group });

// To:
const { base, dropdown, item: dropdownItem, close, select, placeholder: placeholderSpan, svg } = $derived(multiSelect({ disabled, grouped: !!group }));
```

### Timepicker.svelte
```javascript
// Line 46: Change
const styles = timepicker({ type, columns, disabled });

// To:
const styles = $derived(timepicker({ type, columns, disabled }));
```

### Hr.svelte
```javascript
// Line 28: Change
const bg = classes?.bg ?? "bg-gray-200 dark:bg-gray-700";

// To:
const bg = $derived(classes?.bg ?? "bg-gray-200 dark:bg-gray-700");

// Lines 31-32: Change
const mergedDivProps = { ...restProps, ...divProps };
const mergedHrProps = { ...restProps, ...hrProps };

// To:
const mergedDivProps = $derived({ ...restProps, ...divProps });
const mergedHrProps = $derived({ ...restProps, ...hrProps });
```

### List.svelte
```javascript
// Line 12: Change
let contextClass = $state(ctxClass || "");

// To:
let contextClass = $derived(ctxClass || "");
```

### ButtonToggleGroup.svelte
```javascript
// Line 11: Change
value = multiSelect ? [] : null,

// To:
value = $bindable(multiSelect ? [] : null),
```

### ButtonToggle.svelte
```javascript
// Line 35: Change
const actualColor = (ctx?.color ?? color ?? "primary") as VariantProps<typeof buttonToggle>["color"];

// To:
const actualColor = $derived((ctx?.color ?? color ?? "primary") as VariantProps<typeof buttonToggle>["color"]);
```

### VirtualList.svelte
```javascript
// Line 32: Change
const styles = virtualList({ contained });

// To:
const styles = $derived(virtualList({ contained }));
```

### ThemeProvider.svelte
```javascript
// Lines 13-16: Wrap in $effect
// Change:
if (theme) {
  setThemeContext(theme);
} else {
  setThemeContext(theme ?? defaultTheme);
}

// To:
$effect(() => {
  if (theme) {
    setThemeContext(theme);
  } else {
    setThemeContext(theme ?? defaultTheme);
  }
});
```

### ClipboardManager.svelte
```javascript
// Line 39: Change
let items = $state<ClipboardItem[]>(initialItems);

// To:
let items = $state<ClipboardItem[]>([]);
$effect(() => {
  items = initialItems;
});

// Line 52: Change
const STORAGE_KEY = storageKey ?? "flowbite-clipboard-manager";

// To:
const STORAGE_KEY = $derived(storageKey ?? "flowbite-clipboard-manager");
```

### ScrollSpy.svelte
```javascript
// Line 29: Change
let activeId = $state<string>(items.length > 0 ? items[0].id : "");

// To:
let activeId = $derived<string>(items.length > 0 ? items[0].id : "");
```

### SplitPane.svelte
```javascript
// Lines 27-33: Wrap validation in $effect
$effect(() => {
  if (minSize <= 0) {
    console.warn(`minSize must be positive, got ${minSize}. Using default 100.`);
    minSize = 100;
  }
  if (keyboardStep <= 0) {
    console.warn(`keyboardStep must be positive, got ${keyboardStep}. Using default 2.`);
    keyboardStep = 2;
  }
});

// Line 36: Change
let transition = $state(transitionProp);

// To:
let transition = $derived(transitionProp);

// Line 49: Change
let currentDirection = $state(direction);

// To:
let currentDirection = $derived(direction);
```

### VirtualMasonry.svelte
```javascript
// Line 29: Change
const styles = virtualMasonry({ contained });

// To:
const styles = $derived(virtualMasonry({ contained }));
```

## Route Files

Most route files have similar patterns. The general rules:

1. **Variables derived from props** → Use `$derived()`
2. **Variables used in context/setContext** → Wrap in `$effect()` or use `$derived()`
3. **Conditional logic with props** → Wrap in `$effect()` if side effects, else use `$derived()`
4. **String template literals with props** → Use `$derived()`

For route files, you can run a similar fix since they follow patterns like:
- `const x = prop` → `const x = $derived(prop)`
- `const x = prop ? y : z` → `const x = $derived(prop ? y : z)`
- `setContext("key", prop)` → wrap in `$effect(() => { setContext("key", prop); })`

Would you like me to create a script that fixes all these automatically?
