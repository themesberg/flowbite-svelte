# Testing the aria-expanded Reactivity Issue

## The Problem

The Navbar test fails because when `NavLi` sets `navState.hidden = true`, the `aria-expanded` attribute on the `NavHamburger` button doesn't update from "true" to "false".

## The Test Setup

I've created a minimal reproduction in `src/tests/simple-aria/` that mimics the Navbar structure:

### Components
- **SimpleWrapper** - Creates state with getter/setter, shares via context (like Navbar)
- **SimpleToggle** - Reads state with `$derived`, toggles it (like NavHamburger)
- **SimpleToggleEffect** - Uses `$effect` instead of `$derived`
- **SimpleClose** - Sets state to closed (like NavLi)

### Test File
- `simple-aria.test.ts` - Tests both approaches

## Running the Tests

```bash
# Run the simple aria tests
npm run test:unit -- simple-aria

# Run the navbar test that's failing
npm run test:unit-t "closes mobile menu on link click"

# Run all tests
npm run test:unit
```

## What to Look For

1. **If simple-aria tests PASS**: The getter/setter pattern works! The problem is elsewhere in the Navbar implementation.

2. **If simple-aria tests FAIL with $derived but PASS with $effect**: We need to use `$effect` in NavHamburger instead of `$derived`.

3. **If ALL tests FAIL**: The getter/setter pattern doesn't work in the test environment, and we need a different approach.

## Next Steps Based on Results

### If simple tests pass, but navbar test fails:
Look for differences between:
- How context is set up
- Additional complexity in Navbar
- Order of operations
- Other components interfering

### If $effect version works:
Update NavHamburger to use:
```typescript
let isExpanded = $state(false);

$effect(() => {
  if (navState) {
    isExpanded = !navState.hidden;
  }
});
```

### If nothing works:
Consider alternative approaches:
- Using stores instead of context
- Using event dispatching
- Restructuring the component hierarchy
