import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import { type TransitionConfig } from 'svelte/transition';
import type { HTMLAttributes } from 'svelte/elements';
import Banner from './Banner.svelte';

const bannerVariants = tv({
  base: 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600',
  variants: {
    position: {
      static: 'static',
      fixed: 'fixed',
      absolute: 'absolute',
      relative: 'relative',
      sticky: 'sticky'
    },
    bannerType: {
      default: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
      bottom: 'bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50',
      cta: 'flex-col md:flex-row w-[calc(100%-2rem)] -translate-x-1/2 rtl:translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl start-1/2 top-6',
      signup: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
      info: 'top-0 start-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50'
    },
    color: {
      blue: 'bg-blue-50 dark:bg-blue-900',
      gray: 'bg-gray-50 dark:bg-gray-700',
      red: 'bg-red-50 dark:bg-red-900',
      green: 'bg-green-50 dark:bg-green-900',
      yellow: 'bg-yellow-50 dark:bg-yellow-900',
      indigo: 'bg-indigo-50 dark:bg-indigo-900',
      purple: 'bg-purple-50 dark:bg-purple-900',
      pink: 'bg-pink-50 dark:bg-pink-900'
    }
  },
  defaultVariants: {
    position: 'sticky',
    bannerType: 'default',
    color: 'gray'
  }
});

const insideDivVariants = tv({
  base: 'items-center',
  variants: {
    bannerType: {
      default: 'mx-auto',
      bottom: 'mx-auto',
      cta: 'flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0',
      signup: 'flex-shrink-0 w-full mx-auto sm:w-auto',
      info: 'flex-shrink-0'
    }
  },
  defaultVariants: {
    bannerType: 'default'
  }
});

// type BannerVariants = VariantProps<typeof bannerVariants>;
type ColorVariants = VariantProps<typeof bannerVariants>['color'];
type TypeVariants = VariantProps<typeof bannerVariants>['bannerType'];
type PositionVariants = VariantProps<typeof bannerVariants>['position'];
type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  position?: PositionVariants;
  dismissable?: boolean;
  color?: ColorVariants;
  bannerType?: TypeVariants;
  divClass?: string | undefined;
  innerClass?: string | undefined;
  transition?: TransitionFunc;
  params?: any;
}

export { Banner, bannerVariants, insideDivVariants, type BannerProps };
