import Span from './Span.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const spanVariants = tv({
  // base: 'font-semibold text-gray-900 dark:text-white',
  variants: {
    italic: {
      true: 'italic'
    },
    underline: {
      true: 'underline decoration-2 decoration-blue-400 dark:decoration-blue-600'
    },
    linethrough: {
      true: 'line-through'
    },
    uppercase: {
      true: 'uppercase'
    },
    gradient: {
      skyToEmerald: 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400',
      purpleToBlue: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500',
      pinkToOrange: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400',
      tealToLime: 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-300',
      redToYellow: 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500',
      indigoToCyan: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-400',
      fuchsiaToRose: 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-rose-500',
      amberToEmerald: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-500',
      violetToRed: 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-red-500',
      blueToGreen: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-400',
      orangeToPurple: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500',
      yellowToRed: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-indigo-400 to-red-600',
      normal: 'font-semibold text-gray-900 dark:text-white'
    },
    highlight: {
      blue: 'text-blue-600 dark:text-blue-500',
      green: 'text-green-600 dark:text-green-500',
      red: 'text-red-600 dark:text-red-500',
      yellow: 'text-yellow-600 dark:text-yellow-500',
      purple: 'text-purple-600 dark:text-purple-500',
      pink: 'text-pink-600 dark:text-pink-500',
      indigo: 'text-indigo-600 dark:text-indigo-500',
      teal: 'text-teal-600 dark:text-teal-500',
      orange: 'text-orange-600 dark:text-orange-500',
      cyan: 'text-cyan-600 dark:text-cyan-500',
      fuchsia: 'text-fuchsia-600 dark:text-fuchsia-500',
      amber: 'text-amber-600 dark:text-amber-500',
      lime: 'text-lime-600 dark:text-lime-500'
    },
    decoration: {
      solid: 'underline decoratio-solid',
      double: 'underline decoration-double',
      dotted: 'underline decoration-dotted',
      dashed: 'underline decoration-dashed',
      wavy: 'underline decoration-wavy',
      none: 'decoration-none'
    },
    decorationColor: {
      blue: 'underline decoration-blue-400 dark:decoration-blue-600',
      green: 'underline decoration-green-400 dark:decoration-green-600',
      red: 'underline decoration-red-400 dark:decoration-red-600',
      yellow: 'underline decoration-yellow-400 dark:decoration-yellow-600',
      purple: 'underline decoration-purple-400 dark:decoration-purple-600',
      pink: 'underline decoration-pink-400 dark:decoration-pink-600',
      indigo: 'underline decoration-indigo-400 dark:decoration-indigo-600',
      teal: 'underline decoration-teal-400 dark:decoration-teal-600',
      orange: 'underline decoration-orange-400 dark:decoration-orange-600',
      cyan: 'underline decoration-cyan-400 dark:decoration-cyan-600',
      fuchsia: 'underline decoration-fuchsia-400 dark:decoration-fuchsia-600',
      amber: 'underline decoration-amber-400 dark:decoration-amber-600',
      lime: 'underline decoration-lime-400 dark:decoration-lime-600'
    },
    decorationThickness: {
      '1': 'underline decoration-1',
      '2': 'underline decoration-2',
      '4': 'underline decoration-4',
      '8': 'underline decoration-8',
      '0': 'decoration-0'
    }
  }
});

type DecorationType = VariantProps<typeof spanVariants>['decoration'];
type GradientType = VariantProps<typeof spanVariants>['gradient'];
type HighlightType = VariantProps<typeof spanVariants>['highlight'];
type DecorationColorType = VariantProps<typeof spanVariants>['decorationColor'];
type DecorationThicknessType = VariantProps<typeof spanVariants>['decorationThickness'];

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  children: Snippet;
  italic?: boolean;
  underline?: boolean;
  linethrough?: boolean;
  uppercase?: boolean;
  gradient?: GradientType;
  highlight?: HighlightType;
  class?: string | undefined;
  decoration?: DecorationType;
  decorationThickness?: DecorationThicknessType;
  decorationColor?: DecorationColorType;
}

export { Span, spanVariants, type SpanProps };
