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

<ToolbarButton {name} onclick={onclick || toggle} aria-expanded={navState ? !navState.hidden : undefined} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <Menu class={menu({ class: clsx(theme?.menu, styling?.menu) })} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavHamburgerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1132)
## Props
@prop children
@prop onclick
@prop class: className
@prop classes
@prop name = "Open main menu"
@prop ...restProps
-->
