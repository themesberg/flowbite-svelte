<script lang="ts">
  import { setContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { writable } from "svelte/store";
  import { bottomNav } from "./index";
  import type { BottomNavProps, BottomNavContextType } from "$lib/types";

  let { children, header, position = "fixed", navType = "default", outerClass, innerClass, activeClass, activeUrl = "", ...restProps }: BottomNavProps = $props();

  const activeCls = twMerge("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  setContext("navType", navType);
  setContext<BottomNavContextType>("bottomNavType", { activeClass: activeCls });

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
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L248)
## Props
@prop children
@prop header
@prop position = "fixed"
@prop navType = "default"
@prop outerClass
@prop innerClass
@prop activeClass
@prop activeUrl = ""
@prop ...restProps
-->
