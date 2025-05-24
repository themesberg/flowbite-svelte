<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { range } from "./";
  import type { RangeProps } from "$lib/types";

  let { value = $bindable(), appearance = "none", color = "blue", size = "md", inputClass, ...restProps }: RangeProps = $props();

  const inputCls = $derived(twMerge(range({ appearance, color, size }), clsx(inputClass)));
</script>

<input type="range" bind:value {...restProps} class={inputCls} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[RangeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L835)
## Props
@prop value = $bindable()
@prop appearance = "none"
@prop color = "blue"
@prop size = "md"
@prop class: inputClass
@prop ...restProps
-->
