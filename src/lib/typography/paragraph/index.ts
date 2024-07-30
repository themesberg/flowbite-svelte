import P from './P.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const paragraphVariants = tv({
  base: 'text-gray-900 dark:text-white',
  variants: {
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
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    },
    space: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest'
    },
    height: {
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose'
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    },
    whitespace: {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      pre: 'whitespace-pre',
      preline: 'whitespace-pre-line',
      prewrap: 'whitespace-pre-wrap'
    },
    style: {
      normal: 'normal',
      italic: 'italic',
      oblique: 'oblique'
    },
    firstUpper: {
      true: 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left',
      false: ''
    },
    justify: {
      true: 'text-justify',
      false: ''
    }
  }
});

type PsizeType = VariantProps<typeof paragraphVariants>['size'];
type PweightType = VariantProps<typeof paragraphVariants>['weight'];
type SpaceType = VariantProps<typeof paragraphVariants>['space'];
type HeightType = VariantProps<typeof paragraphVariants>['height'];
type AlignType = VariantProps<typeof paragraphVariants>['align'];
type WhitespaceType = VariantProps<typeof paragraphVariants>['whitespace'];
type StyleType = VariantProps<typeof paragraphVariants>['style'];

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  color?: string | undefined;
  italic?: boolean;
  firstUpper?: boolean;
  // upperClass?: string | undefined;
  opacity?: number | undefined;
  whitespace?: WhitespaceType;
  size?: PsizeType;
  weight?: PweightType;
  space?: SpaceType;
  height?: HeightType;
  align?: AlignType;
  style?: StyleType;
  justify?: boolean;
}

export { P, paragraphVariants, type ParagraphProps };
