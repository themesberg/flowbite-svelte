<script lang="ts">
  import { tablet } from ".";
  import { type TabletProps, cn } from "$lib";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: TabletProps = $props();

  const { div, leftTop, leftMid, leftBot, right, slot } = tablet();
</script>

<div {...restProps} class={cn(div(), divClass)}>
  <div class={cn(leftTop(), div2Class)}></div>
  <div class={cn(leftMid(), div3Class)}></div>
  <div class={cn(leftBot(), div4Class)}></div>
  <div class={cn(right(), div5Class)}></div>
  <div class={cn(slot(), div6Class)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabletProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L560)
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop div5Class
@prop div6Class
@prop ...restProps
-->
