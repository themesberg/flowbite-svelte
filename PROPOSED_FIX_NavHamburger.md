# Proposed Fix for NavHamburger aria-expanded

## Problem
The tests expect `aria-expanded` attribute on the hamburger button, but it's not implemented.
This is both:
- A missing accessibility feature
- Why the tests are failing

## Solution
Add `aria-expanded` attribute that reflects the menu state.

## Implementation

### Option 1: Add to NavHamburger.svelte (Recommended)

```svelte
<script lang="ts">
  import clsx from "clsx";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbarHamburger } from "./theme";
  import type { NavHamburgerProps } from "$lib/types";
  import type { MouseEventHandler } from "svelte/elements";
  import { getTheme } from "$lib/theme/themeUtils";
  import { getNavbarStateContext, getNavbarBreakpointContext } from "$lib/context";

  let { children, onclick, class: className, classes, name = "Open main menu", ...restProps }: NavHamburgerProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("navbarHamburger"));
  const navState = getNavbarStateContext();

  // Reactively get the breakpoint - use $derived to ensure it updates
  const navBreakpoint = $derived(getNavbarBreakpointContext());
  const { base, menu } = $derived(navbarHamburger({ breakpoint: navBreakpoint ?? "md" }));

  const toggle: MouseEventHandler<HTMLButtonElement> = () => {
    if (!navState) return;
    navState.hidden = !navState.hidden;
  };
</script>

<ToolbarButton 
  {name} 
  onclick={onclick || toggle} 
  aria-expanded={navState ? !navState.hidden : undefined}
  {...restProps} 
  class={base({ class: clsx(theme?.base, className) })}
>
  <Menu class={menu({ class: clsx(theme?.menu, styling?.menu) })} />
</ToolbarButton>
```

**Key changes:**
- Added `aria-expanded={navState ? !navState.hidden : undefined}`
- `!navState.hidden` because `hidden: false` means menu is open → `aria-expanded: true`

### Option 2: Make ToolbarButton accept aria-expanded

Modify ToolbarButton.svelte to accept and forward aria-expanded:

```svelte
<script lang="ts">
  import { toolbarButton } from "./theme";
  import type { ToolbarButtonProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { 
    children, 
    color, 
    name, 
    "aria-label": ariaLabel,
    "aria-expanded": ariaExpanded, // Add this
    size, 
    class: className, 
    ...restProps 
  }: ToolbarButtonProps = $props();

  const theme = $derived(getTheme("toolbarButton"));

  const buttonCls = $derived(
    toolbarButton({
      color,
      size,
      background: false,
      class: clsx(theme, className)
    })
  );
</script>

{#if restProps.href === undefined}
  <button 
    type="button" 
    {...restProps} 
    class={buttonCls} 
    aria-label={ariaLabel ?? name}
    aria-expanded={ariaExpanded}
  >
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </button>
{:else}
  <a 
    {...restProps} 
    class={buttonCls} 
    aria-label={ariaLabel ?? name}
    aria-expanded={ariaExpanded}
  >
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </a>
{/if}
```

## Why This Fixes the Tests

1. **Tests can now find the attribute:**
   ```typescript
   expect(hamburger).toHaveAttribute("aria-expanded", "false"); // ✅ Works
   ```

2. **Clicking updates the state:**
   ```typescript
   await user.click(hamburger); // Updates navState.hidden
   // Because of reactivity, aria-expanded updates
   expect(hamburger).toHaveAttribute("aria-expanded", "true"); // ✅ Works
   ```

3. **Svelte 5 reactivity handles the update:**
   - `navState.hidden = !navState.hidden` triggers reactivity
   - `aria-expanded={!navState.hidden}` updates automatically
   - DOM should update in sync with state

## Accessibility Benefits

This fix also improves accessibility:
- Screen readers announce "expanded" or "collapsed" state
- Users with disabilities know if the menu is open
- Follows ARIA best practices for disclosure widgets

## Testing

After implementing, the following tests should pass:
- `hamburger toggles menu visibility` (line ~78)
- `menu toggles on hamburger click` (line ~342)
- `closes mobile menu on link click` (line ~209) - might still need investigation

## Recommendation

**Implement Option 1** - it's simpler and more direct. Option 2 is only needed if other ToolbarButtons need aria-expanded in the future.
