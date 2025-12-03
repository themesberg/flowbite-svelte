# ButtonGroup Context Migration to Svelte 5 createContext

## Summary

Successfully migrated the ButtonGroup context from the old `getContext("group")` pattern to the new Svelte 5 `createContext` API using `getButtonGroupContext()` and `setButtonGroupContext()`.

## Changes Made

### 1. Context Provider (ButtonGroup.svelte)

**Before:**
```typescript
import { setContext } from "svelte";

setContext("group", size);
setContext("disabled", disabled);
```

**After:**
```typescript
import { setButtonGroupContext } from "$lib/context";

setButtonGroupContext({ size, disabled });
```

### 2. Context Consumers

All components that previously used `getContext("group")` have been updated to use `getButtonGroupContext()`:

#### Button.svelte
**Before:**
```typescript
const group: SizeType = getContext("group");
const ctxDisabled: boolean | undefined = getContext("disabled");
```

**After:**
```typescript
const groupCtx = getButtonGroupContext();
const group = groupCtx?.size;
const ctxDisabled = groupCtx?.disabled;
```

#### GradientButton.svelte
**Before:**
```typescript
const group: SizeType = getContext("group");
```

**After:**
```typescript
const groupCtx = getButtonGroupContext();
const group = groupCtx?.size;
```

#### InputAddon.svelte
**Before:**
```typescript
let group: { size: SizeType } = getContext("group");
```

**After:**
```typescript
const groupCtx = getButtonGroupContext();
const group = groupCtx;
```

#### Input.svelte
**Before:**
```typescript
let group: { size: SizeType } = getContext("group");
```

**After:**
```typescript
const groupCtx = getButtonGroupContext();
const group = groupCtx;
```

#### Select.svelte
**Before:**
```typescript
let group: { size: SizeType } = getContext("group");
```

**After:**
```typescript
const groupCtx = getButtonGroupContext();
const group = groupCtx;
```

#### MultiSelect.svelte
**Before:**
```typescript
let group: { size: SizeType } = getContext("group");
```

**After:**
```typescript
const groupCtx = getButtonGroupContext();
const group = groupCtx;
```

## Benefits

1. **Type Safety**: The new context API provides better type inference
2. **Safe Access**: Returns `undefined` instead of throwing when accessed outside of context provider
3. **Modern Svelte 5**: Uses the latest Svelte 5 patterns introduced in v5.40.0
4. **Single Context**: Consolidates `size` and `disabled` into a single context object
5. **Consistency**: Aligns with other contexts in the codebase (AccordionContext, CarouselContext, etc.)

## Files Modified

1. `src/lib/button-group/ButtonGroup.svelte` - Context provider
2. `src/lib/buttons/Button.svelte` - Context consumer
3. `src/lib/buttons/GradientButton.svelte` - Context consumer
4. `src/lib/forms/input-addon/InputAddon.svelte` - Context consumer
5. `src/lib/forms/input-field/Input.svelte` - Context consumer
6. `src/lib/forms/select/Select.svelte` - Context consumer
7. `src/lib/forms/select/MultiSelect.svelte` - Context consumer

## Context Type

The `ButtonGroupContextType` is already defined in `src/lib/types.ts`:

```typescript
export interface ButtonGroupContextType {
  size: SizeType;
  disabled?: boolean;
}
```

## Testing Recommendations

1. Test ButtonGroup with buttons to ensure size and disabled props propagate correctly
2. Test ButtonGroup with form inputs (Input, Select, MultiSelect) to ensure proper styling
3. Test components outside of ButtonGroup to ensure they work independently
4. Test nested scenarios if applicable

## Breaking Changes

None - This is an internal implementation change. The public API remains the same.
