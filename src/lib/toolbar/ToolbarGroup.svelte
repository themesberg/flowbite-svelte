<script lang="ts">
  import type { Writable } from "svelte/store";
  import { getContext } from "svelte";
  import { type ToolbarGroupProps as Props, toolbarGroup } from "./";
  import clsx from "clsx";

  let { children, spacing, padding, position = "middle", class: className, ...restProps }: Props = $props();

  const groupClass = $derived(toolbarGroup({ spacing, padding, position, class: clsx(className) }));

  const options: Writable<boolean> = getContext("toolbar");
  if (options) $options = true;
</script>

<div {...restProps} class={groupClass}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:spacing: any;
@props:padding: any;
@props:position: any = "middle";
@props:class: string;
-->
