import { type VariantProps, tv } from 'tailwind-variants';
import Blockquote from './Blockquote.svelte';
import type { Snippet } from 'svelte';
// import type { BlockQuoteType } from '../../types';
import type { HTMLBlockquoteAttributes } from 'svelte/elements';

const blockquoteVariants = tv({
  base: 'font-semibold text-gray-900 dark:text-white',
  variants: {
    border: {
      true: 'border-s-4 border-gray-300 dark:border-gray-500',
      false: ''
    },
    italic: {
      true: 'italic',
      false: ''
    },
    bg: {
      true: 'bg-gray-50 dark:bg-gray-800',
      false: ''
    },
    alignment: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    },
    size: {
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
    }
  },
  defaultVariants: {
    border: false,
    italic: true,
    bg: false,
    alignment: 'left',
    size: 'lg'
  }
});

type SizeType = VariantProps<typeof blockquoteVariants>['size'];

interface BlockquoteProps extends HTMLBlockquoteAttributes {
  children: Snippet;
  border?: boolean;
  italic?: boolean;
  borderClass?: string | undefined;
  bgClass?: string | undefined;
  bg?: boolean;
  baseClass?: string | undefined;
  alignment?: 'left' | 'center' | 'right';
  size?: SizeType;
  class?: string | undefined;
}

export { Blockquote, blockquoteVariants, type BlockquoteProps };
