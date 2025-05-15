<script lang="ts">
  import clsx from "clsx";
  import { blockquote } from "./index";
  import type { BlockquoteProps } from "$lib/types";

  let { children, class: className, border, italic = true, bg, alignment = "left", size = "lg", ...restProps }: BlockquoteProps = $props();

  let blockquoteClass = $derived(
    blockquote({
      border,
      italic,
      bg,
      alignment,
      size,
      class: clsx(className)
    })
  );
</script>

<blockquote {...restProps} class={blockquoteClass}>
  {@render children()}
</blockquote>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BlockquoteProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1717)
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
