<script lang="ts">
  import { desktop } from ".";
  import { type MockupBaseProps, cn } from "$lib";

  let { children, divClass, div2Class, div3Class, div4Class, ...restProps }: MockupBaseProps = $props();

  const { div, inner, bot, botUnder } = desktop();
</script>

<div {...restProps} class={cn(div(), divClass)}>
  <div class={cn(inner(), div2Class)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div class={cn(bot(), div3Class)}></div>
<div class={cn(botUnder(), div4Class)}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MockupBaseProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L523)
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop ...restProps
-->
