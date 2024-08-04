import Img from './Img.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { HTMLImgAttributes } from 'svelte/elements';

const imgVariants = tv({
  slots: {
    base: 'max-w-full h-auto',
    figure: 'max-w-lg',
    figureCaption: 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400'
  },
  variants: {
    size: {
      xs: { base: 'max-w-xs' },
      sm: { base: 'max-w-sm' },
      md: { base: 'max-w-md' },
      lg: { base: 'max-w-lg' },
      xl: { base: 'max-w-xl' },
      '2xl': { base: 'max-w-2xl' },
      full: { base: 'max-w-full' }
    },
    alignment: {
      center: { base: 'mx-auto' },
      right: { base: 'ms-auto' },
      left: { base: '' }
    },
    effect: {
      grayscale: {
        base: 'cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0'
      },
      blur: { base: 'blur-sm transition-all duration-300 hover:blur-none' },
      invert: {
        base: 'invert filter transition-all duration-300 hover:invert-0'
      },
      sepia: {
        base: 'sepia filter transition-all duration-300 hover:sepia-0'
      },
      saturate: {
        base: 'saturate-50 filter transition-all duration-300 hover:saturate-100'
      },
      'hue-rotate': {
        base: 'hue-rotate-60 filter transition-all duration-300 hover:hue-rotate-0'
      },
      none: {
        base: 'transition-all duration-300'
      }
    },
    shadow: {
      sm: { base: 'shadow-sm' },
      regular: { base: 'shadow' },
      md: { base: 'shadow-md' },
      lg: { base: 'shadow-lg' },
      xl: { base: 'shadow-xl' },
      '2xl': { base: 'shadow-2xl' },
      inner: { base: 'shadow-inner' },
      none: { base: 'shadow-none' }
    },
    rounded: {
      sm: { base: 'rounded-sm' },
      regular: { base: 'rounded' },
      md: { base: 'rounded-md' },
      lg: { base: 'rounded-lg' },
      xl: { base: 'rounded-xl' },
      '2xl': { base: 'rounded-2xl' },
      '3xl': { base: 'rounded-3xl' },
      full: { base: 'rounded-full' },
      none: { base: 'rounded-none' }
    }
  }
});

type SizeType = VariantProps<typeof imgVariants>['size'];
type AlignmentType = VariantProps<typeof imgVariants>['alignment'];
type EffectType = VariantProps<typeof imgVariants>['effect'];
type ShadowType = VariantProps<typeof imgVariants>['shadow'];
type RoundedType = VariantProps<typeof imgVariants>['rounded'];

interface ImgProps extends HTMLImgAttributes {
  size?: SizeType;
  alignment?: AlignmentType;
  effect?: EffectType;
  shadow?: ShadowType;
  rounded?: RoundedType;
  caption?: string | undefined | null;
  imgClass?: string | undefined | null;
  figClass?: string | undefined | null;
  captionClass?: string | undefined | null;
  class?: string | undefined | null;
}

export { Img, imgVariants, type ImgProps };
