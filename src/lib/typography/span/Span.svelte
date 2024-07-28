<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type SpanProps as Props, spanVariants } from './index'
  

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
