<script lang="ts">
  import { type BottomNavContextType, type BottomNavProps } from "$lib";
  import { cn } from "$lib/utils";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { setBottomNavContext } from "$lib/context";
  import { bottomNav } from "./theme";

  let { children, header, position = "fixed", navType = "default", class: className, classes, outerClass, innerClass, activeClass, activeUrl = "", ...restProps }: BottomNavProps = $props();

  warnThemeDeprecation("BottomNav", { innerClass, outerClass }, { innerClass: "inner", outerClass: "class" });
  const styling = $derived(classes ?? { inner: innerClass });

  // Theme context
  const theme = getTheme("bottomNav");

  const activeCls = cn("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);

  // Create reactive context using getters
  const context: BottomNavContextType = {
    get activeClass() {
      return activeCls;
    },
    get activeUrl() {
      return activeUrl;
    },
    get navType() {
      return navType;
    }
  };

  setBottomNavContext(context);

  const { base, inner } = $derived(bottomNav({ position, navType }));
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
[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L284)
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
