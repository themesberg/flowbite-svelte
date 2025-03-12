<script lang="ts">
  import { getContext, setContext } from "svelte";
  import type { NavbarType } from "$lib/types";
  import { writable } from "svelte/store";
  import { type NavUlProps as Props, navUl } from ".";

  let { children, activeUrl = "", class: className, ...restProps }: Props = $props();

  const context = getContext<NavbarType>("navbarContext");
  let breakPoint: NavbarType["breakPoint"] = $derived(context.breakPoint ?? "md");

  const activeUrlStore = writable("");
  $effect(() => {
    activeUrlStore.set(activeUrl);
  });
  setContext("activeUrl", activeUrlStore);
</script>

<ul {...restProps} class={navUl({ breakPoint, className })}>
  {@render children?.()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:activeUrl: any = "";
@props:class: string;
-->
