<script lang="ts">
  import type { Writable } from "svelte/store";
  import { getContext } from "svelte";
  import { toolbarGroup } from ".";
  import type { ToolbarGroupProps } from "$lib/types";
  import clsx from "clsx";

  let { children, spacing, padding, position = "middle", class: className, ...restProps }: ToolbarGroupProps = $props();

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
## Type
[ToolbarGroupProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L945)
## Props
@prop children
@prop spacing
@prop padding
@prop position = "middle"
@prop class: className
@prop ...restProps
-->
