<script lang="ts">
  import { smartwatch } from ".";
  import { type SmartwatchProps, cn } from "$lib";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: SmartwatchProps = $props();

  const { div, top, rightTop, rightBot, bot, slot } = smartwatch();
</script>

<div {...restProps}>
  <div class={cn(div(), divClass)}></div>
  <div class={cn(top(), div2Class)}>
    <div class={cn(rightTop(), div3Class)}></div>
    <div class={cn(rightBot(), div4Class)}></div>
    <div class={cn(slot(), div5Class)}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
  <div class={cn(bot(), div6Class)}></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L586)
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
