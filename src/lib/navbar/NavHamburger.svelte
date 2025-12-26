<script lang="ts">
  import clsx from "clsx";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbarHamburger } from "./theme";
  import type { NavHamburgerProps } from "$lib/types";
  // import type { MouseEventHandler } from "svelte/elements";
  import { getTheme } from "$lib/theme/themeUtils";
  import { getNavbarStateContext, getNavbarBreakpointContext } from "$lib/context";

  let { children, onclick, class: className, classes, name = "Open main menu", ...restProps }: NavHamburgerProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("navbarHamburger"));
  const navState = getNavbarStateContext();
  const navBreakpoint = getNavbarBreakpointContext();
  const { base, menu } = navbarHamburger({ breakpoint: navBreakpoint ?? "md" });

  // Explicitly access the property inside a function to ensure 
  // Svelte's reactivity system tracks the 'hidden' getter.
  const isExpanded = $derived.by(() => {
    return navState ? !navState.hidden : false;
  });

  const toggle = (event: MouseEvent) => {
    event.stopPropagation(); // Prevent document click from firing here too
    if (!navState) return;
    navState.hidden = !navState.hidden;
  };
</script>
<ToolbarButton 
  {name} 
  onclick={onclick || toggle} 
  aria-expanded={isExpanded} 
  {...restProps} 
  class={base({ class: clsx(theme?.base, className) })}
>
  <Menu class={menu({ class: clsx(theme?.menu, styling?.menu) })} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavHamburgerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1143)
## Props
@prop children
@prop onclick
@prop class: className
@prop classes
@prop name = "Open main menu"
@prop ...restProps
-->
