<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { BlockQuoteType } from '../types';

  interface Props {
    children: Snippet;
    border?: boolean;
    italic?: boolean;
    borderclass?: string | undefined;
    bgclass?: string | undefined;
    bg?: boolean;
    baseclass?: string | undefined;
    alignment?: 'left' | 'center' | 'right';
    size?: BlockQuoteType;
    class?: string | undefined;
  }

  let {
    children,
    class: classname,
    border,
    italic = true,
    borderclass,
    bgclass,
    bg,
    baseclass,
    alignment = 'left',
    size = 'lg',
    ...attributes
  }: Props = $props();

  const borderCls: string = twMerge(
    'border-s-4 border-gray-300 dark:border-gray-500',
    borderclass
  );
  const bgCls: string = twMerge('bg-gray-50 dark:bg-gray-800', bgclass);
  const baseCls: string = twMerge(
    'font-semibold text-gray-900 dark:text-white',
    baseclass
  );

  let alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  };
</script>

<blockquote
  {...attributes}
  class={twMerge(
    baseCls,
    alignmentClasses[alignment],
    sizes[size],
    bg && bgCls,
    border && borderCls,
    italic && 'italic',
    classname
  )}
>
 
    {@render children()}

</blockquote>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:border?: boolean;
@props:italic?:  boolean; = true;
@props:borderclass?: string | undefined;
@props:bgclass?: string | undefined;
@props:bg?: boolean;
@props:baseclass?: string | undefined;
@props:alignment?:  'left' | 'center' | 'right'; = 'left';
@props:size?:  BlockQuoteType; = 'lg';
@props:class?: string | undefined;
-->
