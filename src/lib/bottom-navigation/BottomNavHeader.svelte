<script lang="ts">
  import { bottomNavHeader } from "./theme";
  import clsx from "clsx";
  import type { BottomNavHeaderProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, class: className, classes, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();

  warnThemeDeprecation(
    "BottomNavHeader",
    untrack(() => ({ innerClass, outerClass })),
    { innerClass: "inner", outerClass: "class" }
  );

  const styling = $derived(classes ?? { innerDiv: innerClass });

  const { innerDiv, base } = $derived(bottomNavHeader());

  let baseClass = $derived(base({ class: clsx(getTheme("bottomNavHeader")?.base, className ?? outerClass) }));
  let innerDivClass = $derived(innerDiv({ class: clsx(getTheme("bottomNavHeader")?.innerDiv, styling.innerDiv) }));
</script>

<div {...restProps} class={baseClass}>
  <div class={innerDivClass} role="group">
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
