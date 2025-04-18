<script lang="ts">
  import clsx from "clsx";
  import { type SpanProps as Props, span } from "./index";

  let { children, class: className, italic, underline, linethrough, uppercase, gradient, highlight, decoration, decorationColor, decorationThickness, ...restProps }: Props = $props();

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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
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
