# Theme Context Migration to `createContext`

## Overview
Successfully migrated the theme context from Svelte's `setContext`/`getContext` to Svelte 5's `createContext` API.

## Why This Migration?

### Benefits
1. **Type Safety**: `createContext` provides better TypeScript inference
2. **Error Detection**: Raw getter throws errors for missing context, catching bugs earlier
3. **Consistency**: Aligns with other contexts (Accordion, BottomNav, Carousel, etc.)
4. **Modern Pattern**: Uses Svelte 5's recommended approach
5. **Cleaner API**: Paired getter/setter pattern is more explicit

## Changes Made

### 1. Added Theme Context to `src/lib/context.ts`
```typescript
// Theme
const [getThemeContextRaw, setThemeContext] = createContext<ThemeConfig>();

function getThemeContext(): ThemeConfig | undefined {
  try {
    return getThemeContextRaw();
  } catch {
    return undefined;
  }
}

export { getThemeContext, setThemeContext };
```

**Pattern**: Following the same graceful error handling pattern as other contexts:
- Raw getter throws if context is missing
- Wrapped getter returns `undefined` instead
- This allows components to work both inside and outside `ThemeProvider`

### 2. Updated `src/lib/theme/ThemeProvider.svelte`
**Before**:
```typescript
import { setContext } from "svelte";

if (theme) {
  setContext("theme", theme);
}
```

**After**:
```typescript
import { setThemeContext } from "$lib/context";

if (theme) {
  setThemeContext(theme);
}
```

### 3. Updated `src/lib/theme/themeUtils.ts`
**Before**:
```typescript
import { getContext } from "svelte";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const theme = getContext<ThemeConfig>("theme");
  return theme?.[componentKey];
}
```

**After**:
```typescript
import { getThemeContext } from "$lib/context";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const theme = getThemeContext();
  return theme?.[componentKey];
}
```

## Impact

### No Breaking Changes
- All existing components continue to work unchanged
- They still use `getTheme("componentName")` as before
- The internal implementation is transparent to consumers

### Files That Use Theme Context
All components in `src/lib/` that use themes automatically benefit:
- `accordion/Accordion.svelte`
- `alert/Alert.svelte`
- `buttons/Button.svelte`
- And 80+ other components

They all use:
```typescript
const theme = getTheme("componentName");
```

This call now uses `createContext` internally instead of `getContext`.

## Testing Recommendations

1. **Theme Provider Test**: Verify components work with and without `ThemeProvider`
   ```svelte
   <!-- With provider -->
   <ThemeProvider theme={customTheme}>
     <Button>Click me</Button>
   </ThemeProvider>
   
   <!-- Without provider (should use default theme) -->
   <Button>Click me</Button>
   ```

2. **Type Safety**: Ensure TypeScript still correctly infers theme types

3. **Error Handling**: Verify components gracefully handle missing theme context

## Migration Pattern for Other Contexts

If you want to migrate other contexts in the future, follow this pattern:

```typescript
// 1. Create context with createContext
const [getXxxContextRaw, setXxxContext] = createContext<XxxType>();

// 2. Wrap getter for graceful error handling
function getXxxContext(): XxxType | undefined {
  try {
    return getXxxContextRaw();
  } catch {
    return undefined;
  }
}

// 3. Export both functions
export { getXxxContext, setXxxContext };
```

## Notes

- The graceful error handling pattern (`try/catch` returning `undefined`) is crucial for components that can work both inside and outside context providers
- All contexts in `context.ts` now follow the same pattern
- This is the Svelte 5 recommended approach for context management
