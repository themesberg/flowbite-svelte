<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbarHamburger, type NavbarHamburgerTheme } from "./theme";
  import type { NavbarState, NavHamburgerProps } from "$lib/types";
  import type { MouseEventHandler } from "svelte/elements";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, onclick, menuClass, class: className, classes, name = "Open main menu", ...restProps }: NavHamburgerProps = $props();

  warnThemeDeprecation("NavHamburger", { menuClass }, { menuClass: "menu" });
  const styling = $derived(classes ?? { menu: menuClass });

  const theme = getTheme("navHamburger");

  let { base, menu } = navbarHamburger();

  let navState = getContext<NavbarState>("navState");
  const toggle: MouseEventHandler<HTMLButtonElement> = (ev) => {
    navState.hidden = !navState.hidden;
  };
</script>

<ToolbarButton {name} onclick={onclick || toggle} {...restProps} class={base({ class: clsx((theme as NavbarHamburgerTheme)?.base, className) })}>
  <Menu class={menu({ class: clsx((theme as NavbarHamburgerTheme)?.menu, styling.menu) })} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavHamburgerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1101)
## Props
@prop children
@prop onclick
@prop menuClass
@prop class: className
@prop classes
@prop name = "Open main menu"
@prop ...restProps
-->
