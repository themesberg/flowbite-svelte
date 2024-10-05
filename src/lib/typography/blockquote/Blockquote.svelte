<script lang="ts">
  import { type BlockquoteProps as Props, blockquote } from './index';

  let { children, class: className, border, italic = true, bg, alignment = 'left', size = 'lg', ...restProps }: Props = $props();

  let blockquoteClass = $derived(
    blockquote({
      border,
      italic,
      bg,
      alignment,
      size,
      className
    })
  );
</script>

<blockquote {...restProps} class={blockquoteClass}>
  {@render children()}
</blockquote>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string;
@props:border: boolean;
@props:italic: boolean = true;
@props:bg: boolean;
@props:alignment: VariantProps<typeof blockquote>['alignment'] = 'left';
@props:size: VariantProps<typeof blockquote>['size'] = 'lg';
-->
