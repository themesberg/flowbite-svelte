import Span from "./Span.svelte";
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const spanVariants = tv({
  // base: 'font-semibold text-gray-900 dark:text-white',
  variants: {
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline decoration-2 decoration-blue-400 dark:decoration-blue-600',
    },
    linethrough: {
      true: 'line-through',
    },
    uppercase: {
      true: 'uppercase',
    },
    gradient: {
      true: 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400',
      false: 'font-semibold text-gray-900 dark:text-white'
    },
    highlight: {
      true: 'text-blue-600 dark:text-blue-500',
    },
  }
});

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  children: Snippet;
  italic?: boolean;
  underline?: boolean;
  linethrough?: boolean;
  uppercase?: boolean;
  gradient?: boolean;
  highlight?: boolean;
  highlightClass?: string | undefined;
  class?: string | undefined;
  decorationClass?: string | undefined;
  gradientClass?: string | undefined;
}

export {
  Span,
  spanVariants,
  type SpanProps
}