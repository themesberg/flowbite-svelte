import Progressbar from './Progressbar.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { ProgressBarColorType } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';
import type { EasingFunction } from 'svelte/transition';

const createColorVariant = (color: string) => ({
  labelInsideDiv: color,
  insideDiv: color,
});

export const progressbarVariants = tv({
  slots: {
    base: 'w-full bg-gray-200 rounded-full dark:bg-gray-700',
    labelInsideDiv: 'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full',
    insideDiv: 'rounded-full',
    outsideDiv: 'mb-1 flex justify-between',
    oustsideSpan: 'text-base font-medium text-blue-700 dark:text-white',
    outsideProgress: 'text-sm font-medium text-blue-700 dark:text-white'
  },
  variants: {
    color: {
      primary: createColorVariant('bg-primary-600'),
      blue: createColorVariant('bg-blue-600'),
      gray: createColorVariant('bg-gray-600 dark:bg-gray-300'),
      red: createColorVariant('bg-red-600 dark:bg-red-500'),
      green: createColorVariant('bg-green-600 dark:bg-green-500'),
      yellow: createColorVariant('bg-yellow-400'),
      purple: createColorVariant('bg-purple-600 dark:bg-purple-500'),
      indigo: createColorVariant('bg-indigo-600 dark:bg-indigo-500')
    },
    labelInside: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      labelInside: true,
      class: 'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full',
    },
    {
      labelInside: false,
      class: 'rounded-full',
    },
  ],
  defaultVariants: {
    color: 'primary',
    labelInside: false,
  },
});

// type SizeType = VariantProps<typeof progressbarVariants>['size'];

interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string | undefined;
  labelInside?: boolean;
  labelOutside?: string | undefined;
  easing?: EasingFunction;
  color?: ProgressBarColorType;
  div2Class?: string | undefined;
  oustsideSpanClass?: string | undefined;
  oustsideProgressClass?: string | undefined;
  labeloutsidedivClass?: string | undefined;
  divClass?: string | undefined;
}

export { Progressbar, type ProgressbarProps };
