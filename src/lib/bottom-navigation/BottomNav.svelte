<script lang="ts">
  import { type BottomNavContextType, type BottomNavProps } from "$lib";
  import { cn } from "$lib/utils";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { bottomNav } from "./theme";

  let { children, header, position = "fixed", navType = "default", class: className, classes, outerClass, innerClass, activeClass, activeUrl = "", ...restProps }: BottomNavProps = $props();

  warnThemeDeprecation("BottomNav", { innerClass, outerClass }, { innerClass: "inner", outerClass: "class" });
  const styling = $derived(classes ?? { inner: innerClass });

  // Theme context
  const theme = getTheme("bottomNav");

  const activeCls = cn("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);

  let context: BottomNavContextType = $state({ activeClass: activeCls, activeUrl, navType });
  setContext<BottomNavContextType>("bottomNavType", context);

  const { base, inner } = $derived(bottomNav({ position, navType }));

  $effect(() => {
    context.activeUrl = activeUrl;
    context.navType = navType;
    context.activeClass = activeCls;
  });
</script>

<div {...restProps} class={base({ class: clsx(theme?.base, className ?? outerClass) })}>
  {#if header}
    {@render header()}
  {/if}

  <div class={inner({ class: clsx(theme?.inner, styling.inner) })}>
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L282)
## Props
@prop children
@prop header
@prop position = "fixed"
@prop navType = "default"
@prop class: className
@prop classes
@prop outerClass
@prop innerClass
@prop activeClass
@prop activeUrl = ""
@prop ...restProps
-->
