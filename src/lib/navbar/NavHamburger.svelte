<script lang="ts">
  import clsx from "clsx";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbarHamburger } from "./theme";
  import type { NavHamburgerProps } from "$lib/types";
  import type { MouseEventHandler } from "svelte/elements";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { getNavbarStateContext, getNavbarBreakpointContext } from "$lib/context";

  let { children, onclick, menuClass, class: className, classes, name = "Open main menu", ...restProps }: NavHamburgerProps = $props();

  warnThemeDeprecation("NavHamburger", { menuClass }, { menuClass: "menu" });
  const styling = $derived(classes ?? { menu: menuClass });

  const theme = getTheme("navbarHamburger");
  const navState = getNavbarStateContext()!;
  const navBreakpoint = getNavbarBreakpointContext()!;
  const { base, menu } = navbarHamburger({ breakpoint: navBreakpoint });

  const toggle: MouseEventHandler<HTMLButtonElement> = () => {
    navState.hidden = !navState.hidden;
  };
</script>

<ToolbarButton {name} onclick={onclick || toggle} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <Menu class={menu({ class: clsx(theme?.menu, styling.menu) })} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavHamburgerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1145)
## Props
@prop children
@prop onclick
@prop menuClass
@prop class: className
@prop classes
@prop name = "Open main menu"
@prop ...restProps
-->
