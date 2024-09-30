<script lang="ts">
  import type { HTMLBlockquoteAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import type { BlockQuoteType } from '../types';

  interface $$Props extends HTMLBlockquoteAttributes {
    border?: boolean;
    italic?: boolean;
    borderClass?: string;
    bgClass?: string;
    bg?: boolean;
    baseClass?: string;
    alignment?: 'left' | 'center' | 'right';
    size?: BlockQuoteType;
  }

  export let border: $$Props['border'] = false;
  export let italic: $$Props['italic'] = true;
  export let borderClass: $$Props['borderClass'] = 'border-s-4 border-gray-300 dark:border-gray-500';
  export let bgClass: $$Props['bgClass'] = 'bg-gray-50 dark:bg-gray-800';
  export let bg: $$Props['bg'] = false;
  export let baseClass: $$Props['baseClass'] = 'font-semibold text-gray-900 dark:text-white';
  export let alignment: NonNullable<$$Props['alignment']> = 'left';
  export let size: NonNullable<$$Props['size']> = 'lg';
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

<blockquote {...$$restProps} class={twMerge(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && 'italic', $$props.class)}>
  <slot />
</blockquote>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let border: $$Props['border'] = false;
@prop export let italic: $$Props['italic'] = true;
@prop export let borderClass: $$Props['borderClass'] = 'border-s-4 border-gray-300 dark:border-gray-500';
@prop export let bgClass: $$Props['bgClass'] = 'bg-gray-50 dark:bg-gray-800';
@prop export let bg: $$Props['bg'] = false;
@prop export let baseClass: $$Props['baseClass'] = 'font-semibold text-gray-900 dark:text-white';
@prop export let alignment: NonNullable<$$Props['alignment']> = 'left';
@prop export let size: NonNullable<$$Props['size']> = 'lg';
-->
