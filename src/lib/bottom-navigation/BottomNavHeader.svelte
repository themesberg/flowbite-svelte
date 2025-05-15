<script lang="ts">
  import { bottomnavheader } from ".";
  import type { BottomNavHeaderProps } from "$lib/types";

  let { children, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();
  const { innerDiv, outerDiv } = $derived(bottomnavheader());
</script>

<div {...restProps} class={outerDiv({ class: outerClass })}>
  <div class={innerDiv({ class: innerClass })} role="group">
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
