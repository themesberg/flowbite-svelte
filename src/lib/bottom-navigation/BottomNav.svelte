<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { bottomNav } from ".";
  import { type BottomNavProps, type BottomNavContextType, cn } from "$lib";

  let { children, header, position = "fixed", navType = "default", outerClass, innerClass, activeClass, activeUrl = "", ...restProps }: BottomNavProps = $props();

  const activeCls = cn("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  setContext("navType", navType);
  setContext<BottomNavContextType>("bottomNavType", { activeClass: activeCls });

  const { outer, inner } = $derived(bottomNav({ position, navType }));

  $effect(() => {
    activeUrlStore.set(activeUrl);
  });
</script>

<div {...restProps} class={cn(outer(), outerClass)}>
  {#if header}
    {@render header()}
  {/if}

  <div class={cn(inner(), innerClass)}>
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L252)
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
