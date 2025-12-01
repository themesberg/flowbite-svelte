# List Component Context Migration to createContext

## Summary

Successfully migrated the List component's context from Svelte's `setContext`/`getContext` to Svelte 5's `createContext` API.

## Changes Made

### 1. Added List Context to `/src/lib/context.ts`

```typescript
// List
export type ListContextType = {
  ctxClass: string;
};

const [getListContextRaw, setListContext] = createContext<ListContextType>();

function getListContext(): ListContextType | undefined {
  try {
    return getListContextRaw();
  } catch {
    return undefined;
  }
}

export { getListContext, setListContext };
```

**Pattern Used**: Same graceful error handling pattern as other contexts - returns `undefined` if context is missing instead of throwing an error.

---

### 2. Updated `/src/lib/typography/list/List.svelte`

**Before**:
```typescript
import { setContext } from "svelte";

let contextClass = $state(ctxClass || "");

setContext("ctxClass", () => contextClass);
```

**After**:
```typescript
import { setListContext } from "$lib/context";

let contextClass = $state(ctxClass || "");

// Create context object
const ctx = {
  get ctxClass() { return contextClass; }
};

// Set context during initialization
setListContext(ctx);
```

**Changes**:
- Removed `setContext` import from `svelte`
- Added `setListContext` import from `$lib/context`
- Created context object with getter for reactive `ctxClass`
- Called `setListContext(ctx)` to set the context

---

### 3. Updated `/src/lib/typography/list/Li.svelte`

**Before**:
```typescript
import { getContext } from "svelte";

const getCtxClass = getContext<() => string>("ctxClass");

let liCls = $derived(clsx(getCtxClass(), icon && "flex items-center", className));
```

**After**:
```typescript
import { getListContext } from "$lib/context";

const ctx = getListContext();

let liCls = $derived(clsx(ctx?.ctxClass, icon && "flex items-center", className));
```

**Changes**:
- Removed `getContext` import from `svelte`
- Added `getListContext` import from `$lib/context`
- Called `getListContext()` to get the context (returns `undefined` if missing)
- Access `ctxClass` directly from context object with optional chaining

---

## Benefits

1. **Type Safety**: The context now has a strongly typed interface (`ListContextType`)
2. **Consistency**: Follows the same pattern as all other contexts in the library
3. **Better Error Handling**: Gracefully handles missing context instead of throwing errors
4. **Centralized**: All context definitions are now in `/src/lib/context.ts`

---

## How It Works

### List Component (Provider)
1. Creates a reactive state variable `contextClass`
2. Creates a context object with a getter that returns the current `contextClass` value
3. Sets the context using `setListContext(ctx)`
4. The `$effect` keeps `contextClass` in sync with the `ctxClass` prop

### Li Component (Consumer)
1. Calls `getListContext()` to retrieve the context
2. Accesses `ctx?.ctxClass` with optional chaining (handles missing context)
3. Uses the class in the derived `liCls` computed value

---

## Testing

The List component should work exactly as before:

```svelte
<List ctxClass="text-gray-700 dark:text-gray-400">
  <Li>Item 1</Li>
  <Li>Item 2</Li>
  <Li icon>Item with icon</Li>
</List>
```

**Expected behavior**:
- All `<Li>` items inside `<List>` inherit the `ctxClass` from the List
- Li components can still have their own additional classes
- Li components with `icon` prop get flex layout classes
- Li components outside of List work without errors (context is undefined)

---

## Pattern Summary

This migration follows the established pattern for all contexts:

```typescript
// 1. Define type
export type XxxContextType = { ... };

// 2. Create context with raw getter/setter
const [getXxxContextRaw, setXxxContext] = createContext<XxxContextType>();

// 3. Wrap getter for graceful error handling
function getXxxContext(): XxxContextType | undefined {
  try {
    return getXxxContextRaw();
  } catch {
    return undefined;
  }
}

// 4. Export both functions
export { getXxxContext, setXxxContext };
```

---

## Migration Complete ✅

The List component context has been successfully migrated to use `createContext`. All functionality remains the same while benefiting from improved type safety and consistency with the rest of the codebase.
