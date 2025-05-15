<script lang="ts">
  import clsx from "clsx";
  import { span } from "./index";
  import type { SpanProps } from "$lib/types";

  let { children, class: className, italic, underline, linethrough, uppercase, gradient, highlight, decoration, decorationColor, decorationThickness, ...restProps }: SpanProps = $props();

  let classSpan = $derived(
    span({
      italic,
      underline,
      linethrough,
      uppercase,
      gradient,
      highlight,
      decoration,
      decorationColor,
      decorationThickness,
      class: clsx(className)
    })
  );
</script>

<span {...restProps} class={classSpan}>
  {#if children}
    {@render children()}
  {/if}
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpanProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1814)
## Props
@prop children
@prop class: className
@prop italic
@prop underline
@prop linethrough
@prop uppercase
@prop gradient
@prop highlight
@prop decoration
@prop decorationColor
@prop decorationThickness
@prop ...restProps
-->
