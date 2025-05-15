<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbar_hamburger } from "./theme";
  import type { NavbarState, NavHamburgerProps } from "$lib/types";
  import type { MouseEventHandler } from "svelte/elements";

  let { children, onclick, menuClass, class: className, name = "Open main menu", ...restProps }: NavHamburgerProps = $props();

  let { base, menu } = navbar_hamburger();

  let navState = getContext<NavbarState>("navState");
  const toggle: MouseEventHandler<HTMLButtonElement> = (ev) => {
    navState.hidden = !navState.hidden;
  };
</script>

<ToolbarButton {name} onclick={onclick || toggle} {...restProps} class={base({ class: clsx(className) })}>
  <Menu class={menu({ class: menuClass })} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavHamburgerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1043)
## Props
@prop children
@prop onclick
@prop menuClass
@prop class: className
@prop name = "Open main menu"
@prop ...restProps
-->
