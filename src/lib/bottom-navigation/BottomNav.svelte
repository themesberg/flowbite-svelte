<script lang="ts">
  import type { BottomNavContextType, BottomNavProps } from "$lib/types";
  import { cn } from "$lib/utils";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { setBottomNavContext } from "$lib/context";
  import { bottomNav } from "./theme";

  let { children, header, position = "fixed", navType = "default", class: className, classes, activeUrl = "", ...restProps }: BottomNavProps = $props();

  const styling = $derived(classes);

  // Theme context
  const theme = $derived(getTheme("bottomNav"));

  const activeCls = $derived(cn("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", styling?.active));

  // Create reactive context using getters
  // Note: context.classes is for item styling, not BottomNav styling
  // BottomNav's classes prop only affects its own elements (inner, active)
  const reactiveCtx: BottomNavContextType = {
    get activeClass() {
      return activeCls;
    },
    get activeUrl() {
      return activeUrl;
    },
    get navType() {
      return navType;
    }
    // classes is intentionally omitted - items use their own classes prop
  };

  setBottomNavContext(reactiveCtx);

  const { base, inner } = $derived(bottomNav({ position, navType }));
</script>

<div {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {#if header}
    {@render header()}
  {/if}

  <div class={inner({ class: clsx(theme?.inner, styling?.inner) })}>
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L276)
## Props
@prop children
@prop header
@prop position = "fixed"
@prop navType = "default"
@prop class: className
@prop classes
@prop activeUrl = ""
@prop ...restProps
-->
