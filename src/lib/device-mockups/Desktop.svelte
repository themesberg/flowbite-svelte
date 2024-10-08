<script lang="ts">
  import { type MockupBaseProps as Props, desktop } from ".";

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
@props: children: Snippet;
@props:divClass: string;
@props:div2Class: string;
@props:div3Class: string;
@props:div4Class: string;
-->
