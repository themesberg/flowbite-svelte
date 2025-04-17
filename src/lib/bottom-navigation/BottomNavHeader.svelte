<script lang="ts">
  import { type BottomNavHeaderProps, bottomnavheader } from ".";

  let { children, outerClass, innerClass, ...restProps }: BottomNavHeaderProps = $props();
  const { innerDiv, outerDiv } = $derived(bottomnavheader());
</script>

<div {...restProps} class={outerDiv({ class: outerClass })}>
  <div class={innerDiv({ class: innerClass })} role="group">
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:outerClass: any;
@props:innerClass: any;
-->
