<script lang="ts">
  import clsx from "clsx";
  import { blockquote } from "./theme";
  import type { BlockquoteProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, border, italic = true, bg, alignment = "left", size = "lg", ...restProps }: BlockquoteProps = $props();

  const theme = getTheme("blockquote");

  let blockquoteCls = $derived(
    blockquote({
      border,
      italic,
      bg,
      alignment,
      size,
      class: clsx(theme, className)
    })
  );
</script>

<blockquote {...restProps} class={blockquoteCls}>
  {@render children()}
</blockquote>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BlockquoteProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1924)
## Props
@prop children
@prop class: className
@prop border
@prop italic = true
@prop bg
@prop alignment = "left"
@prop size = "lg"
@prop ...restProps
-->
