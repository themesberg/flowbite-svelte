<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type BlockquoteProps as Props, blockquoteVariants } from './index';

  let {
    children,
    class: classname,
    border,
    italic = true,
    borderClass,
    bgClass,
    bg,
    baseClass,
    alignment = 'left',
    size = 'lg',
    ...attributes
  }: Props = $props();

  let blockquoteClass = blockquoteVariants({ 
    border, 
    italic, 
    bg, 
    alignment, 
    size,
    class: twMerge(borderClass, bgClass, baseClass, classname)
  });
</script>

<blockquote
  {...attributes}
  class={blockquoteClass}
>
  {@render children()}
</blockquote>
