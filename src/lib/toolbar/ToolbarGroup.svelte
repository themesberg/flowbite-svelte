<script lang="ts">
  import type { Writable } from "svelte/store";
  import { getContext } from "svelte";
  import { type ToolbarGroupProps as Props, toolbarGroup } from "./";

  let { children, spacing = "default", padding = "default", position = "middle", class: className, ...restProps }: Props = $props();

  const groupClass = $derived(toolbarGroup({ spacing, padding, position, class: className }));

  const options: Writable<boolean> = getContext("toolbar");
  if (options) $options = true;
</script>

<div {...restProps} class={groupClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:spacing: any = "default";
@props:padding: any = "default";
@props:position: any = "middle";
@props:class: string;
-->
