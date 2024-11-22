<script lang="ts">
  import { setContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { writable } from "svelte/store";
  import { type BottomNavProps as Props, type BottomNavContextType, bottomNav } from "./index";

  let { children, header, position = "fixed", navType = "default", outerClass, innerClass, activeClass, activeUrl = "", ...restProps }: Props = $props();

  const activeCls = twMerge("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  setContext("navType", navType);
  setContext<BottomNavContextType>("bottomNavType", { activeClass: activeCls });

  // $inspect('position: ', position);
  const { outer, inner } = bottomNav({ position, navType });
  const outerCls = $derived(outer({ class: outerClass }));
  const innerCls = $derived(inner({ class: innerClass }));

  $effect(() => {
    activeUrlStore.set(activeUrl);
  });
</script>

<div {...restProps} class={outerCls}>
  {#if header}
    {@render header()}
  {/if}

  <div class={innerCls}>
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:header: Snippet;
@props:position: "static" | "fixed" | "absolute" | "relative" | "sticky" | undefined = "fixed";
@props:navType: "border" | "application" | "group" | "default" | "pagination" | "card" | "meeting" | "video" | undefined = "default";
@props:outerClass: string;
@props:innerClass: string;
@props:activeClass: string;
@props:activeUrl: string = "";
-->
