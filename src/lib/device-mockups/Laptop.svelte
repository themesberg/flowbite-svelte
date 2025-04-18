<script lang="ts">
  import { laptop } from ".";
  import type { MockupBaseProps } from "$lib/types"

  let { children, divClass, div2Class, div3Class, div4Class, ...restProps }: MockupBaseProps = $props();
  const { div, inner, bot, botCen } = laptop();
</script>

<div {...restProps}>
  <div class={div({ class: divClass })}>
    <div class={inner({ class: div2Class })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>

  <div class={bot({ class: div3Class })}>
    <div class={botCen({ class: div4Class })}></div>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
MockupBaseProps
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop ...restProps
-->
