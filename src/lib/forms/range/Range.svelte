<script lang="ts">
  import { range } from "./";
  import { type RangeProps, cn } from "$lib";

  let { value = $bindable(), appearance = "none", color = "blue", size = "md", inputClass, ...restProps }: RangeProps = $props();

  const inputCls = $derived(cn(range({ appearance, color, size }), inputClass));
</script>

<input type="range" bind:value {...restProps} class={inputCls} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[RangeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L812)
## Props
@prop value = $bindable()
@prop appearance = "none"
@prop color = "blue"
@prop size = "md"
@prop inputClass
@prop ...restProps
-->
