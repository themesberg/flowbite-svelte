<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type SpanProps as Props, spanVariants } from './index';

  let {
    children,
    class: className,
    italic,
    underline,
    linethrough,
    uppercase,
    gradient,
    highlight,
    ...attributes
  }: Props = $props();

  let classSpan = twMerge(
    spanVariants({
      italic,
      underline,
      linethrough,
      uppercase,
      gradient,
      highlight
    }),
    className
  );
</script>

<span {...attributes} class={classSpan}>
  {@render children()}
</span>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop italic
@prop underline
@prop linethrough
@prop uppercase
@prop gradient
@prop highlight
@prop ...attributes
-->
