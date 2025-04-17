<script lang="ts">
  import { setContext } from "svelte";
  import { type ButtonGroupProps, buttonGroup } from "./index";

  let { children, size = "md", class: className, ...restProps }: ButtonGroupProps = $props();

  let groupClass = $derived(buttonGroup({ size, className }));
  setContext("group", size);
</script>

<div {...restProps} class={groupClass} role="group">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:size: any = "md";
@props:class: string;
-->
