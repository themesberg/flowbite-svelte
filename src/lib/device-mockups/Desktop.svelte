<script lang="ts">
  import { type DesktopProps as Props, desktop } from '.';

  let { children, divClass, div2Class, div3Class, div4Class, ...restProps }: Props = $props();

  const { div, inner, bot, botUnder } = desktop();
</script>

<div class={div({ class: divClass })} {...restProps}>
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
@props: children: any;
@props:divClass: any;
@props:div2Class: any;
@props:div3Class: any;
@props:div4Class: any;
-->
