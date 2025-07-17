<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { bottomNav } from ".";
  import clsx from "clsx";
  import { type BottomNavProps, type BottomNavContextType, cn, type BottomNavTheme } from "$lib";
  import { getTheme, themeDeprecated } from "$lib/theme/themeUtils";

  let { children, header, position = "fixed", navType = "default", class: className, classes, outerClass, innerClass, activeClass, activeUrl = "", ...restProps }: BottomNavProps = $props();

  themeDeprecated("BottomNav", { innerClass, outerClass });
  let styling = $derived(classes ?? { inner: innerClass });

  // Theme context
  const theme = getTheme("bottomNav");

  const activeCls = cn("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  setContext("navType", navType);
  setContext<BottomNavContextType>("bottomNavType", { activeClass: activeCls });

  const { base, inner } = $derived(bottomNav({ position, navType }));

  $effect(() => {
    activeUrlStore.set(activeUrl);
  });
</script>

<div {...restProps} class={base({ class: clsx((theme as BottomNavTheme)?.base, className ?? outerClass) })}>
  {#if header}
    {@render header()}
  {/if}

  <div class={inner({ class: clsx((theme as BottomNavTheme)?.inner, styling.inner) })}>
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L249)
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
