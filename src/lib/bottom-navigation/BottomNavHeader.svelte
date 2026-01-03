<script lang="ts">
  import { bottomNavHeader } from "./theme";
  import clsx from "clsx";
  import type { BottomNavHeaderProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, classes, ...restProps }: BottomNavHeaderProps = $props();

  const styling = $derived(classes);

  // Theme context
  const theme = $derived(getTheme("bottomNavHeader"));

  const { content, base } = $derived(bottomNavHeader());
</script>

<div data-scope="bottom-nav-header" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L303)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
