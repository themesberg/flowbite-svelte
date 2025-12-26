# Simple Aria-Expanded Reactivity Test

This directory contains a minimal test case to verify that `aria-expanded` attributes update correctly when using Svelte 5 context and reactivity.

## Structure

This mimics the Navbar component structure but in a simplified form:

1. **SimpleWrapper.svelte** - Like `Navbar.svelte`
   - Creates a `$state` with getter/setter
   - Shares it via context

2. **SimpleToggle.svelte** - Like `NavHamburger.svelte`
   - Reads from context
   - Uses `$derived` to compute `isExpanded`
   - Toggles the state

3. **SimpleToggleEffect.svelte** - Alternative version
   - Uses `$effect` instead of `$derived`
   - Tests if explicit effect tracking works better

4. **SimpleClose.svelte** - Like `NavLi.svelte`
   - Sets the state to closed (hidden = true)

## Running the Tests

```bash
# Run just these tests
npm run test:unit -- simple-aria

# Or run all unit tests
npm run test:unit
```

## What We're Testing

The key question: Does `aria-expanded` update correctly when:
1. The toggle button changes the state
2. Another component (close button) changes the state

This will help us understand:
- If the getter/setter pattern works
- If `$derived` vs `$effect` makes a difference
- If the issue is specific to the Navbar implementation or a general reactivity problem

## Expected Results

All tests should pass if:
- The context sharing works correctly
- The reactivity system tracks the state changes
- The DOM updates reflect the state changes
