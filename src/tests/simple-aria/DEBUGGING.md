# Debugging the aria-expanded Reactivity Issue

## Problem Summary
The test "closes mobile menu on link click" fails because when `NavLi` sets `navState.hidden = true`, the `aria-expanded` attribute on `NavHamburger` doesn't update from "true" to "false".

## What We Know

### ✅ Working Tests:
1. **Simple aria tests with `$derived`** - PASSED
   - Shows that getter/setter pattern works in isolation
   
2. **Hamburger toggles itself** - PASSED
   - When NavHamburger clicks itself, reactivity works fine

### ❌ Failing Tests:
1. **Simple aria tests with `$effect`** - FAILED
   - Error: "`state` is not a store with a `subscribe` method"
   - Confirms we should use `$derived`, not `$effect`
   
2. **NavLi closes menu** - FAILED  
   - When NavLi sets the state, NavHamburger doesn't update
   - This is the core issue we're trying to solve

## Attempted Solutions

### Attempt 1: Getter/Setter Pattern
```typescript
let hidden = $state(true);
const navState = {
  get hidden() { return hidden; },
  set hidden(value) { hidden = value; }
};
```
**Result:** Works in simple test, fails in Navbar

### Attempt 2: Class-based State Manager
```typescript
class NavbarStateManager {
  #hidden = $state(true);
  get hidden() { return this.#hidden; }
  set hidden(value) { this.#hidden = value; }
}
```
**Result:** Same issue

### Attempt 3: Direct $state Object (Current)
```typescript
let navState = $state<NavbarState>({
  hidden: true,
  activeClass: undefined,
  nonActiveClass: undefined,
  activeUrl: undefined
});
```
**Status:** Testing now

## Testing Instructions

```bash
# Run simple tests
npm run test:unit -- simple-aria

# Run navbar test  
npm run test:unit-t "closes mobile menu on link click"

# Or run both
chmod +x test-both.sh
./test-both.sh
```

## Next Steps Based on Results

### If Direct $state Object Works:
✅ We found the solution! The issue was with the getter/setter pattern not properly propagating reactivity across components.

### If Still Fails:
Need to investigate:
1. Is there an issue with how NavUl uses the state?
2. Is there a timing issue with event handlers?
3. Do we need to use a store instead of context?
4. Is there something about the test environment that breaks reactivity?

## Key Differences

**Simple Test (Works):**
- Wrapper → Toggle (reads state)
- Wrapper → Close (sets state)
- Toggle updates correctly

**Navbar Test (Fails):**
- Navbar → NavHamburger (reads state)
- Navbar → NavUl → NavLi (sets state)
- NavHamburger doesn't update

The extra layer (NavUl) might be the issue, which is why I added `SimpleContent` to test this.
