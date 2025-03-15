<script lang="ts">
  import { type MockupBaseProps as Props, laptop } from ".";

  let { children, divClass, div2Class, div3Class, div4Class, ...restProps }: Props = $props();
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
## Props
@props: children: any;
@props:divClass: any;
@props:div2Class: any;
@props:div3Class: any;
@props:div4Class: any;
-->
