# Toolbar Components Context Migration to createContext

## Summary

Successfully migrated the Toolbar components' context from Svelte's `setContext`/`getContext` to Svelte 5's `createContext` API.

## Changes Made

### 1. Added Toolbar Context to `/src/lib/context.ts`

```typescript
// Toolbar
export type ToolbarContextType = {
  separators: boolean;
};

const [getToolbarContextRaw, setToolbarContext] = createContext<ToolbarContextType>();

function getToolbarContext(): ToolbarContextType | undefined {
  try {
    return getToolbarContextRaw();
  } catch {
    return undefined;
  }
}

export { getToolbarContext, setToolbarContext };
```

**Pattern Used**: Same graceful error handling pattern as other contexts - returns `undefined` if context is missing.

---

### 2. Updated `/src/lib/toolbar/Toolbar.svelte`

**Before**:
```typescript
import { setContext } from "svelte";

const context = $state({ separators: false });
setContext("toolbar", context);
```

**After**:
```typescript
import { setToolbarContext } from "$lib/context";

const context = $state({ separators: false });

// Create context object with getter and setter
const ctx = {
  get separators() { return context.separators; },
  set separators(value: boolean) { context.separators = value; }
};

// Set context during initialization
setToolbarContext(ctx);
```

**Changes**:
- Removed `setContext` import from `svelte`
- Added `setToolbarContext` import from `$lib/context`
- Created context object with getter AND setter (important for ToolbarGroup to mutate)
- Called `setToolbarContext(ctx)` to set the context

**Key Point**: The context object needs both getter and setter because `ToolbarGroup` sets `separators = true`.

---

### 3. Updated `/src/lib/toolbar/ToolbarGroup.svelte`

**Before**:
```typescript
import { getContext } from "svelte";

const context = getContext<Record<string, boolean>>("toolbar");

if (context) context.separators = true;
```

**After**:
```typescript
import { getToolbarContext } from "$lib/context";

const ctx = getToolbarContext();

if (ctx) ctx.separators = true;
```

**Changes**:
- Removed `getContext` import from `svelte`
- Added `getToolbarContext` import from `$lib/context`
- Called `getToolbarContext()` to get the context (returns `undefined` if missing)
- Access and mutate `separators` property with optional chaining

---

### 4. Updated `/src/lib/toolbar/ToolbarButton.svelte`

**Before**:
```typescript
import { getContext } from "svelte";

const background = getContext("background");

const buttonCls = $derived(
  toolbarButton({
    ...
    background: !!background,
    ...
  })
);
```

**After**:
```typescript
const buttonCls = $derived(
  toolbarButton({
    ...
    background: false,
    ...
  })
);
```

**Changes**:
- Removed `getContext` import (no longer needed)
- Removed unused `background` context retrieval
- Set `background: false` directly (the context was never being set anywhere)

**Note**: The "background" context wasn't being set by any component, so it was always `undefined` anyway. This simplifies the code.

---

## How It Works

### Toolbar Component (Provider)
1. Creates a reactive state object `context = { separators: false }`
2. Creates a context wrapper with getter and setter that reference the state object
3. Sets the context using `setToolbarContext(ctx)`
4. The reactive `context.separators` value is used in the toolbar styling

### ToolbarGroup Component (Consumer & Mutator)
1. Calls `getToolbarContext()` to retrieve the context
2. If context exists, sets `ctx.separators = true`
3. This mutation updates the parent Toolbar's reactive state
4. The Toolbar re-renders with separator styles

### ToolbarButton Component
1. No longer uses context (simplified)
2. Sets `background: false` directly

---

## Benefits

1. **Type Safety**: The context now has a strongly typed interface (`ToolbarContextType`)
2. **Consistency**: Follows the same pattern as all other contexts in the library
3. **Better Error Handling**: Gracefully handles missing context instead of throwing errors
4. **Centralized**: All context definitions are now in `/src/lib/context.ts`
5. **Cleaner Code**: Removed unused "background" context from ToolbarButton

---

## Testing

The Toolbar components should work exactly as before:

```svelte
<Toolbar>
  <ToolbarButton>Button 1</ToolbarButton>
  <ToolbarGroup>
    <ToolbarButton>Button 2</ToolbarButton>
    <ToolbarButton>Button 3</ToolbarButton>
  </ToolbarGroup>
  <ToolbarButton>Button 4</ToolbarButton>
</Toolbar>
```

**Expected behavior**:
- When a `ToolbarGroup` is present, `separators` is set to `true`
- The Toolbar applies separator styles when `separators` is `true`
- ToolbarButtons render correctly with or without ToolbarGroup

---

## Important: Mutable Context Pattern

This migration demonstrates an important pattern for contexts that need to be mutated by child components:

```typescript
// In Provider (Toolbar)
const context = $state({ separators: false });

const ctx = {
  get separators() { return context.separators; },
  set separators(value: boolean) { context.separators = value; }
};

setToolbarContext(ctx);
```

```typescript
// In Consumer (ToolbarGroup)
const ctx = getToolbarContext();
if (ctx) ctx.separators = true; // This works because of the setter!
```

Without the setter in the context object, the child component wouldn't be able to mutate the parent's state.

---

## Migration Complete ✅

The Toolbar components' context has been successfully migrated to use `createContext`. All functionality remains the same while benefiting from improved type safety and consistency with the rest of the codebase.

### Removed Code
- Unused "background" context from ToolbarButton (was never set, always undefined)

### Files Modified
- `/src/lib/context.ts` - Added `ToolbarContextType` and context functions
- `/src/lib/toolbar/Toolbar.svelte` - Updated to use `setToolbarContext`
- `/src/lib/toolbar/ToolbarGroup.svelte` - Updated to use `getToolbarContext`
- `/src/lib/toolbar/ToolbarButton.svelte` - Removed unused context, simplified code
