<script lang="ts">
  import clsx from "clsx";
  import { type BlockquoteProps as Props, blockquote } from "./index";

  let { children, class: className, border, italic = true, bg, alignment = "left", size = "lg", ...restProps }: Props = $props();

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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
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
