<script lang="ts">
  import { bottomNavHeader } from "./theme";
  import clsx from "clsx";
  import type { BottomNavHeaderProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, class: className, classes, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();

  // svelte-ignore state_referenced_locally
  warnThemeDeprecation("BottomNavHeader", { innerClass, outerClass }, { innerClass: "inner", outerClass: "class" });

  const styling = $derived(classes ?? { innerDiv: innerClass });

  // Theme context
  const theme = getTheme("bottomNavHeader");

  const { innerDiv, base } = $derived(bottomNavHeader());
</script>

<div {...restProps} class={base({ class: clsx(theme?.base, className ?? outerClass) })}>
  <div class={innerDiv({ class: clsx(theme?.innerDiv, styling.innerDiv) })} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L290)
## Props
@prop children
@prop class: className
@prop classes
@prop outerClass
@prop innerClass
@prop ...restProps
-->
