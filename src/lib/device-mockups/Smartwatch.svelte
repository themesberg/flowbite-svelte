<script lang="ts">
  import { smartwatch } from ".";
  import type { SmartwatchProps } from "$lib/types";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: SmartwatchProps = $props();

  const { div, top, rightTop, rightBot, bot, slot } = smartwatch();
</script>

<div {...restProps}>
  <div class={div({ class: divClass })}></div>
  <div class={top({ class: div2Class })}>
    <div class={rightTop({ class: div3Class })}></div>
    <div class={rightBot({ class: div4Class })}></div>
    <div class={slot({ class: div5Class })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
  <div class={bot({ class: div6Class })}></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L525)
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
