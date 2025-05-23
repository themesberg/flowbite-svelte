<script lang="ts">
  import { setContext } from "svelte";
  import { buttonGroup } from ".";
  import type { ButtonGroupProps } from "$lib";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";

  let { children, size = "md", disabled, class: className, ...restProps }: ButtonGroupProps = $props();

  let groupClass = $derived(twMerge(buttonGroup({ size }), clsx(className)));
  setContext("group", size);
  setContext("disabled", disabled);
</script>

<div {...restProps} class={groupClass} role="group">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L328)
## Props
@prop children
@prop size = "md"
@prop disabled
@prop class: className
@prop ...restProps
-->
