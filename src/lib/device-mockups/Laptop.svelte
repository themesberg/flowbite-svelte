<script lang="ts">
  import { laptopVariants, type LaptopProps as Props } from '.';

  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    ...attributes
  }: Props = $props();
  const { div, inner, bot, botCen } = laptopVariants();
</script>

<div {...attributes}>
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop ...attributes
-->
