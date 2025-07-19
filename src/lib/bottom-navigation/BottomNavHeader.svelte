<script lang="ts">
  import { bottomNavHeader } from ".";
  import clsx from "clsx";
  import { type BottomNavHeaderProps, type BottomNavHeaderTheme } from "$lib";
  import { getTheme, themeDeprecated } from "$lib/theme/themeUtils";

  let { children, class: className, classes, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();

  themeDeprecated("BottomNavHeader", { innerClass, outerClass }, { innerClass: "inner", outerClass: "class" });
  
  let styling = $derived(classes ?? { innerDiv: innerClass });

  // Theme context
  const theme = getTheme("bottomNavHeader");

  const { innerDiv, base } = $derived(bottomNavHeader());
</script>

<div {...restProps} class={base({ class: clsx((theme as BottomNavHeaderTheme)?.base, className ?? outerClass) })}>
  <div class={innerDiv({ class: clsx((theme as BottomNavHeaderTheme)?.innerDiv, styling.innerDiv) })} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L259)
## Props
@prop children
@prop class: className
@prop classes
@prop outerClass
@prop innerClass
@prop ...restProps
-->
