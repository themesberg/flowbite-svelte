import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import { type TransitionConfig } from 'svelte/transition';
import type { HTMLAttributes } from 'svelte/elements';
import type { HTMLLiAttributes } from 'svelte/elements';
// import type { BottomNavVariantType } from '../types';
import Breadcrumb from './Breadcrumb.svelte';
import BreadcrumbItem from './BreadcrumbItem.svelte';

const breadcrumbVariants = tv({
  base: 'flex',
  variants: {
    solid: {
      true: 'px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700',
      false: ''
    }
  },
  defaultVariants: {
    solid: false
  }
});

const breadcrumbListVariants = tv({
  base: 'inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse'
});

const breadcrumbItemVariants = tv({
  base: 'inline-flex items-center',
  variants: {
    home: {
      true: '',
      false: ''
    },
    hasHref: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      home: true,
      class:
        'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
    },
    {
      home: false,
      hasHref: true,
      class:
        'ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white'
    },
    {
      home: false,
      hasHref: false,
      class: 'ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400'
    }
  ],
  defaultVariants: {
    home: false,
    hasHref: false
  }
});

const breadcrumbIconVariants = tv({
  base: 'h-6 w-6 text-gray-400 rtl:-scale-x-100',
  variants: {
    home: {
      true: 'me-2 h-4 w-4',
      false: ''
    }
  },
  defaultVariants: {
    home: false
  }
});

interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  navClass?: string | undefined | null;
  solidClass?: string | undefined | null;
  olClass?: string | undefined | null;
  ariaLabel?: string | undefined | null;
  class?: string | undefined | null;
}

interface BreadcrumbItemProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string | undefined;
  linkClass?: string | undefined | null;
  spanClass?: string | undefined;
  homeClass?: string | undefined;
  class?: string | undefined;
}

export {
  breadcrumbVariants,
  breadcrumbListVariants,
  breadcrumbIconVariants,
  breadcrumbItemVariants,
  Breadcrumb,
  BreadcrumbItem,
  type BreadcrumbProps,
  type BreadcrumbItemProps
};
