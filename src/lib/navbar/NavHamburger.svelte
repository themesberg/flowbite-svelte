<script lang="ts">
  import { cn } from "$lib";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbarHamburger, type NavbarHamburgerTheme } from "./theme";
  import type { NavbarState, NavHamburgerProps } from "$lib/types";
  import type { MouseEventHandler } from "svelte/elements";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, onclick, menuClass, class: className, name = "Open main menu", ...restProps }: NavHamburgerProps = $props();

  const theme = getTheme("navHamburger");

  let { base, menu } = navbarHamburger();

  let navState = getContext<NavbarState>("navState");
  const toggle: MouseEventHandler<HTMLButtonElement> = (ev) => {
    navState.hidden = !navState.hidden;
  };
</script>

<ToolbarButton {name} onclick={onclick || toggle} {...restProps} class={cn(base(), clsx(className), (theme as NavbarHamburgerTheme)?.base)}>
  <Menu class={cn(menu(), clsx(menuClass), (theme as NavbarHamburgerTheme)?.menu)} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavHamburgerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1113)
## Props
@prop children
@prop onclick
@prop menuClass
@prop class: className
@prop name = "Open main menu"
@prop ...restProps
-->
