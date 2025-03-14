<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbar_hamburger } from "./theme";
  import type { NavbarState, NavHamburgerProps as Props } from "./type";
  import type { MouseEventHandler } from "svelte/elements";

  let { children, onclick, menuClass, class: className, name = "Open main menu", ...restProps }: Props = $props();

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
## Props
@props: children: any;
@props:onclick: any;
@props:menuClass: any;
@props:class: string;
@props:title: any = "Open main menu";
-->
