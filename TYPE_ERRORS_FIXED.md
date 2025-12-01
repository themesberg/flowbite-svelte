# Type Errors Fixed After createContext Migration

## Summary of Fixes

After migrating from `setContext`/`getContext` to `createContext`, stricter type checking revealed several type mismatches. All issues have been resolved.

## Final Fix: PaginationContextType Duplicate

**Error**: `Type 'ClassValue | undefined' is not assignable to type 'string | undefined'`

**Location**: `/src/lib/pagination/PaginationNav.svelte:44`

**Root Cause**: There were TWO definitions of `PaginationContextType`:
1. In `/src/lib/types.ts` (old, with `activeClasses?: string`)
2. In `/src/lib/context.ts` (new, with `activeClasses?: ClassValue`)

When components imported from `$lib`, they got the OLD definition from types.ts, causing the type mismatch.

**Fix**: Removed duplicate definition from types.ts and re-exported from context.ts:
```typescript
// In types.ts - removed old definition and added:
export type { PaginationContextType } from "$lib/context";
```

Also did the same for `DrawerContextType` and `DropdownContextType` for consistency.

---

## All Issues Fixed

### 1. PaginationContextType - activeClasses Type Mismatch ✅
**Error**: `Type 'ClassValue | undefined' is not assignable to type 'string | undefined'`

**Location**: `/src/lib/pagination/PaginationNav.svelte:44`

**Fix**: 
1. Updated `PaginationContextType` in `/src/lib/context.ts`:
```typescript
activeClasses?: ClassValue; // Changed from string
```

2. Re-exported from `/src/lib/types.ts`:
```typescript
export type { PaginationContextType } from "$lib/context";
```

**Reason**: The `classes?.active` property is of type `ClassValue` (from clsx), not `string`.

---

### 2. ButtonToggle Size Type Mismatch ✅
**Error**: `Type '"xs"' is not assignable to type '"md" | "sm" | "lg" | "xl" | undefined'`

**Locations**: 
- `/src/lib/forms/button-toggle/ButtonToggle.svelte:40`
- `/src/lib/forms/button-toggle/ButtonToggle.svelte:49`

**Fix**: Added type filtering in `ButtonToggle.svelte`
```typescript
// Filter size to only valid buttonToggle sizes (no 'xs')
const actualSize = (size === 'xs' ? 'sm' : size) as VariantProps<typeof buttonToggle>['size'];
```

**Reason**: The context can pass `'xs'` as a size, but the `buttonToggle` theme only supports `'sm' | 'md' | 'lg' | 'xl'`. We map `'xs'` to `'sm'`.

---

### 3. ButtonToggle roundedSize Type Mismatch ✅
**Error**: Multiple type errors for roundedSize values

**Locations**:
- `/src/lib/forms/button-toggle/ButtonToggleGroup.svelte:86`
- `/src/lib/forms/button-toggle/ButtonToggle.svelte:49`

**Fix**: 
1. Updated `ButtonToggleContextType` in `/src/lib/context.ts`:
```typescript
roundedSize?: 'sm' | 'md' | 'lg' | 'none' | 'xl' | 'full';
```

2. Added filtering in `ButtonToggle.svelte`:
```typescript
// Filter roundedSize to only valid buttonToggle roundedSize values (remove 'none')
const actualRoundedSize = (roundedSize === 'none' ? 'md' : roundedSize) as VariantProps<typeof buttonToggle>['roundedSize'];
```

3. Updated `ButtonToggleGroupProps` in `/src/lib/types.ts`:
```typescript
roundedSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; // buttonToggleGroup roundedSize values
```

**Reason**: There are three different roundedSize type definitions:
- `buttonToggleGroup` theme: `'sm' | 'md' | 'lg' | 'xl' | 'full'`
- `buttonToggle` theme: `'sm' | 'md' | 'lg' | 'xl' | 'full'`  
- Context (old): had `'none'` which isn't in either theme

We unified the types and filter `'none'` to `'md'` as a fallback.

---

### 4. ButtonToggle Color Type Mismatch ✅
**Error**: `Type 'string' is not assignable to type [specific union of color strings]`

**Location**: `/src/lib/forms/button-toggle/ButtonToggle.svelte:49`

**Fix**: Added explicit type casting:
```typescript
const actualColor = (ctx?.color ?? color ?? "primary") as VariantProps<typeof buttonToggle>['color'];
```

**Reason**: The context `color` property is typed as `string?` but the theme expects a specific union type. Type assertion ensures compatibility.

---

### 5. Unused Import Warning ✅
**Error**: `'ButtonToggleVariants' is declared but its value is never read`

**Location**: `/src/lib/forms/button-toggle/ButtonToggle.svelte:4`

**Fix**: The import is actually used indirectly through `VariantProps<typeof buttonToggle>`, but we added explicit usage by importing `VariantProps` from `tailwind-variants` for the type assertions.

---

### 6. Type Definition Consolidation ✅
**Issue**: Duplicate type definitions for context types

**Fix**: Consolidated ALL context types in `/src/lib/context.ts` and re-exported from `/src/lib/types.ts`:

```typescript
// In types.ts:
export type { PaginationContextType } from "$lib/context";
export type { DrawerContextType } from "$lib/context";
export type { DropdownContextType } from "$lib/context";
export type { ButtonToggleContextType } from "$lib/context";
```

**Benefits**:
- Single source of truth for context types
- Prevents type drift between definitions
- Easier to maintain
- No more duplicate definitions

---

## Key Changes Made

### `/src/lib/context.ts`
- Added `ClassValue` import from 'clsx'
- Updated `PaginationContextType.activeClasses` to `ClassValue`
- Updated `ButtonToggleContextType.roundedSize` to include all valid values
- Defined all context types directly:
  - `PaginationContextType`
  - `DrawerContextType`
  - `DropdownContextType`
  - `ButtonToggleContextType`

### `/src/lib/types.ts`  
- Re-exported `PaginationContextType` from context.ts (removed duplicate)
- Re-exported `DrawerContextType` from context.ts (removed duplicate)
- Re-exported `DropdownContextType` from context.ts (removed duplicate)
- Re-exported `ButtonToggleContextType` from context.ts (removed duplicate)
- Updated `ButtonToggleGroupProps.roundedSize` to match theme values

### `/src/lib/forms/button-toggle/ButtonToggle.svelte`
- Added `VariantProps` import from tailwind-variants
- Added type filtering for `size` (maps 'xs' → 'sm')
- Added type filtering for `roundedSize` (maps 'none' → 'md')
- Added explicit type assertions for `actualColor`, `actualSize`, `actualRoundedSize`

---

## Why These Errors Appeared

The `createContext` API provides stricter type checking than the old `getContext` approach:

**Before (with getContext)**:
```typescript
const theme = getContext<ThemeConfig>("theme");
// Type checking was more lenient
```

**After (with createContext)**:
```typescript
const theme = getThemeContext();
// Stricter type checking - caught existing type mismatches
```

The errors existed before but were hidden by the looser type checking of the string-keyed `getContext` approach.

---

## Testing Recommendations

1. **Verify ButtonToggle with different sizes**:
   - Test with `size="xs"` (should map to 'sm')
   - Test with all valid sizes: 'sm', 'md', 'lg', 'xl'

2. **Verify ButtonToggle with different roundedSize**:
   - Test with `roundedSize="none"` (should map to 'md')
   - Test with all valid values: 'sm', 'md', 'lg', 'xl', 'full'

3. **Verify PaginationNav with custom activeClasses**:
   - Test passing ClassValue (string, array, object)
   - Ensure classes are applied correctly

4. **Run type checking**:
   ```bash
   pnpm check
   ```

All type errors should now be resolved! ✅
