<script lang="ts">
  import { bottomnavheader } from ".";
  import { type BottomNavHeaderProps, cn } from "$lib";

  let { children, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();
  const { innerDiv, outerDiv } = $derived(bottomnavheader());
</script>

<div {...restProps} class={cn(outerDiv(), outerClass)}>
  <div class={cn(innerDiv(), innerClass)} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L297)
## Props
@prop children
@prop outerClass
@prop innerClass
@prop ...restProps
-->
