<script lang="ts">
  import { range } from "./theme";
  import clsx from "clsx";
  import type { RangeProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { value = $bindable(), appearance = "none", color = "blue", size = "md", inputClass, class: className, ...restProps }: RangeProps = $props();

  const theme = getTheme("range");
  // remove inputClass in next major version
  const inputCls = $derived(range({ appearance, color, size, class: clsx(theme, inputClass, className) }));
</script>

<input type="range" bind:value {...restProps} class={inputCls} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[RangeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L870)
## Props
@prop value = $bindable()
@prop appearance = "none"
@prop color = "blue"
@prop size = "md"
@prop inputClass
@prop class: className
@prop ...restProps
-->
