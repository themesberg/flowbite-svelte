<script lang="ts">
  import { type DesktopProps as Props, desktop } from '.';

  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    ...attributes
  }: Props = $props();

  const { div, inner, bot, botUnder } = desktop();
</script>

<div class={div({ class: divClass })} {...attributes}>
  <div class={inner({ class: div2Class })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div class={bot({ class: div3Class })}></div>
<div class={botUnder({ class: div4Class })}></div>

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
