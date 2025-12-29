<script lang="ts">
  import { bottomNavHeader } from "./theme";
  import clsx from "clsx";
  import type { BottomNavHeaderProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, classes, ...restProps }: BottomNavHeaderProps = $props();

  const styling = $derived(classes);

  // Theme context
  const theme = $derived(getTheme("bottomNavHeader"));

  const { innerDiv, base } = $derived(bottomNavHeader());
</script>

<div {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div class={innerDiv({ class: clsx(theme?.innerDiv, styling?.innerDiv) })} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L294)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
