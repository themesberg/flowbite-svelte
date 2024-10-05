<script lang="ts">
  import { type SpanProps as Props, span } from './index';

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
      className
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string;
@props:italic: boolean;
@props:underline: boolean;
@props:linethrough: boolean;
@props:uppercase: boolean;
@props:gradient: VariantProps<typeof span>['gradient'];
@props:highlight: VariantProps<typeof span>['highlight'];
@props:decoration: VariantProps<typeof span>['decoration'];
@props:decorationColor: VariantProps<typeof span>['decorationColor'];
@props:decorationThickness: VariantProps<typeof span>['decorationThickness'];
-->
