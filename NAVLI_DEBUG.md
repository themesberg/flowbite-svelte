# NavLi Component Fix - Final Attempt

## Changes Made

### 1. Explicitly Extract `href` from Props
Instead of relying on `href` being in `restProps`, we now explicitly extract it:

```typescript
let { children, onclick, href, activeClass, nonActiveClass, class: className, ...restProps }: NavLiProps = $props();
```

### 2. Use `href` Directly
- Check `href !== undefined` instead of `restProps.href !== undefined`
- Compare `href === navState.activeUrl` directly
- Pass `href={href}` explicitly to the `<a>` element

### 3. Handler Order
Calling user's `onclick` first, then updating state (though order shouldn't matter for state updates)

## Current handleClick Implementation

```javascript
function handleClick(event: MouseEvent) {
  // Call original onclick handler first if provided
  if (onclick) {
    onclick(event);
  }

  // Close the mobile menu when a link is clicked
  if (navState && href !== undefined && !navState.hidden) {
    navState.hidden = true;
  }
}
```

## Conditions Being Checked

For the menu to close:
1. ✅ `navState` - exists (we're in Navbar context)
2. ✅ `href !== undefined` - true (link has href="/docs/pages/introduction")
3. ✅ `!navState.hidden` - true (menu is open, hidden=false)

All conditions pass, so `navState.hidden = true` should execute.

## Potential Issues

### Theory 1: Context Reference
Maybe the `navState` in NavLi isn't the same reference as in NavHamburger?
- Unlikely since context should share the same $state object

### Theory 2: Reactivity Not Propagating
Maybe the mutation `navState.hidden = true` isn't triggering reactivity?
- Should work since nav State is created with `$state()`

### Theory 3: Timing Issue  
Maybe the test checks too quickly before state propagates?
- Unlikely since test uses `waitFor`

### Theory 4: Event Handler Not Being Called
Maybe onclick isn't being attached properly?
- HTML shows onclick should be there

## Next Steps to Try

If this still fails, we could:
1. Add debugging statements (though they won't show in tests)
2. Check if navState is undefined
3. Try forcing reactivity with a dummy update
4. Check if there's a conflict with how onclick is spread
5. Verify the context is being set up correctly with a simpler test

## Test That's Failing

```typescript
test("closes mobile menu on link click", async () => {
  // ...
  await user.click(hamburger);  // Opens menu - WORKS
  await user.click(clickableLink);  // Should close menu - FAILS
  expect(hamburger).toHaveAttribute("aria-expanded", "false");  // Still "true"
});
```

The menu opens fine (first click works), but doesn't close on link click.
