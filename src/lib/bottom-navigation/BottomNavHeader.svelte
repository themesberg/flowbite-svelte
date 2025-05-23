<script lang="ts">
  import { bottomnavheader } from ".";
  import type { BottomNavHeaderProps } from "$lib/types";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";

  let { children, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();
  const { innerDiv, outerDiv } = $derived(bottomnavheader());
</script>

<div {...restProps} class={twMerge(outerDiv(), clsx(outerClass))}>
  <div class={twMerge(innerDiv(), clsx(innerClass))} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L298)
## Props
@prop children
@prop outerClass
@prop innerClass
@prop ...restProps
-->
