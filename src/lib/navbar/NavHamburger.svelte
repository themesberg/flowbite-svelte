<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { writable, type Writable } from "svelte/store";
  import ToolbarButton from "../toolbar/ToolbarButton.svelte";
  import Menu from "./Menu.svelte";
  import { navbar_hamburger } from "./theme";
  import type { NavHamburgerProps as Props } from "./type";

  let { children, onclick, menuClass, class: className, title = "Open main menu", ...restProps }: Props = $props();

  let { base, menu } = navbar_hamburger();

  let hiddenStore = getContext<Writable<boolean>>("navHidden") ?? writable(true);
  const toggle = (ev: MouseEvent) => {
    hiddenStore.update((h) => !h);
  };
</script>

<ToolbarButton name={title} onclick={onclick || toggle} {...restProps} class={base({ class: clsx(className) })}>
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
