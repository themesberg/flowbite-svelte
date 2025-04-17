<script lang="ts">
  import { type AndroidProps, android } from ".";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, div7Class, ...restProps }: AndroidProps = $props();

  const { div, slot, top, leftTop, leftMid, leftBot, right } = android();
</script>

<div {...restProps} class={div({ class: divClass })}>
  <div class={top({ class: div2Class })}></div>
  <div class={leftTop({ class: div3Class })}></div>
  <div class={leftMid({ class: div4Class })}></div>
  <div class={leftBot({ class: div5Class })}></div>
  <div class={right({ class: div6Class })}></div>
  <div class={slot({ class: div7Class })}>
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
@props:div7Class: any;
-->
