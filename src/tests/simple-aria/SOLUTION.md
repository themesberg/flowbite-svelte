# Fix for aria-expanded Reactivity Issue

## The Problem
When `NavLi` (a deeply nested component) set `navState.hidden = true`, the `$derived` in `NavHamburger` wasn't recalculating, so `aria-expanded` stayed as "true" instead of updating to "false".

## Root Cause
**Svelte 5 Reactivity Limitation**: `$derived` doesn't always track property getters properly when:
1. The state is created in a parent component (Navbar)
2. Passed through context
3. Read by one child component (NavHamburger)
4. Modified by a different, deeply nested child component (NavLi, nested inside NavUl)

## The Solution: Use `$derived.by()`

### Before (Not Working):
```typescript
const isExpanded = $derived(navState ? !navState.hidden : false);
```

### After (Working):
```typescript
const isExpanded = $derived.by(() => {
  if (!navState) return false;
  const hidden = navState.hidden;  // Explicit read forces tracking
  return !hidden;
});
```

## Why This Works
`$derived.by()` with an explicit property read ensures Svelte properly tracks the dependency, even across context boundaries and deep component hierarchies.

## Files Changed

### Core Components:
1. **Navbar.svelte** - State creation with getter/setter pattern
2. **NavHamburger.svelte** - Changed to `$derived.by()`
3. **NavUl.svelte** - Changed to `$derived.by()`
4. **NavLi.svelte** - No changes needed (already working)

### Test Components:
5. **SimpleWrapper.svelte** - Test state creation
6. **SimpleToggle.svelte** - Changed to `$derived.by()`
7. **SimpleContent.svelte** - Changed to `$derived.by()`

## Testing

```bash
# Run tests
./test-both.sh

# Or individually:
npm run test:unit -- simple-aria
npm run test:unit -- navbar -t "closes mobile menu"
```

## Key Takeaway
When using Svelte 5 context to share state that will be:
- Read by one component using `$derived`
- Modified by a different (possibly nested) component

Always use `$derived.by()` with explicit property reads to ensure proper reactivity tracking.
