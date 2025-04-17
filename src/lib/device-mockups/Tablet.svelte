<script lang="ts">
  import { type TabletProps, tablet } from ".";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: TabletProps = $props();

  const { div, leftTop, leftMid, leftBot, right, slot } = tablet();
</script>

<div {...restProps} class={div({ class: divClass })}>
  <div class={leftTop({ class: div2Class })}></div>
  <div class={leftMid({ class: div3Class })}></div>
  <div class={leftBot({ class: div4Class })}></div>
  <div class={right({ class: div5Class })}></div>
  <div class={slot({ class: div6Class })}>
    {#if children}
      {@render children()}
    {/if}
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
@props:div5Class: any;
@props:div6Class: any;
-->
