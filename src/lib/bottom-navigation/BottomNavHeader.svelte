<script lang="ts">
  import { bottomNavHeader } from ".";
  import clsx from "clsx";
  import { type BottomNavHeaderProps, type BottomNavHeaderTheme } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();

  // Theme context
  const theme = getTheme("bottomNavHeader");

  const { innerDiv, outerDiv } = $derived(bottomNavHeader());
</script>

<div {...restProps} class={outerDiv({ class: clsx((theme as BottomNavHeaderTheme)?.outerDiv, outerClass) })}>
  <div class={innerDiv({ class: clsx((theme as BottomNavHeaderTheme)?.innerDiv, innerClass) })} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L295)
## Props
@prop children
@prop outerClass
@prop innerClass
@prop ...restProps
-->
