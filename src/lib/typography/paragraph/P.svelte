<script lang="ts">
  import clsx from "clsx";
  import { paragraph } from "./index";
  import type { ParagraphProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className = "text-gray-900 dark:text-white", height = "normal", align = "left", justify = false, italic, firstUpper = false, whitespace = "normal", size = "base", space = "normal", weight = "normal", ...restProps }: ParagraphProps = $props();

  const theme = getTheme("paragraph");

  let classP = $derived(paragraph({ height, size, weight, space, align, justify, italic, firstUpper, whitespace, class: clsx(theme, className) }));
</script>

<p {...restProps} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ParagraphProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1953)
## Props
@prop children
@prop class: className = "text-gray-900 dark:text-white"
@prop height = "normal"
@prop align = "left"
@prop justify = false
@prop italic
@prop firstUpper = false
@prop whitespace = "normal"
@prop size = "base"
@prop space = "normal"
@prop weight = "normal"
@prop ...restProps
-->
