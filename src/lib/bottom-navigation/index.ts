import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import { type TransitionConfig } from 'svelte/transition';
import type { HTMLAttributes } from 'svelte/elements';
// import type { BottomNavVariantType } from '../types';
import BottomNav from './BottomNav.svelte';
import BottomNavItem from './BottomNavItem.svelte';

const outerDivVariants = tv({
  base: 'w-full z-30 border-gray-200 dark:bg-gray-700 dark:border-gray-600',
  variants: {
    position: {
      static: 'static',
      fixed: 'fixed',
      absolute: 'absolute',
      relative: 'relative',
      sticky: 'sticky'
    },
    navType: {
      default: 'bottom-0 start-0 h-16 bg-white border-t',
      border: 'bottom-0 start-0 h-16 bg-white border-t',
      application:
        'h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2',
      pagination:
        'bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2',
      group:
        'bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2',
      card: 'bottom-0 start-0 h-16 bg-white border-t',
      meeting:
        'bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
      video:
        'bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3'
    }
  },
  defaultVariants: {
    position: 'fixed',
    navType: 'default'
  }
});

type BottomNavVariantType = VariantProps<typeof outerDivVariants>['navType'];

const innerDivVariants = tv({
  base: 'grid h-full max-w-lg mx-auto',
  variants: {
    navType: {
      default: '',
      border: '',
      application: '',
      pagination: '',
      group: '',
      card: '',
      meeting: 'flex items-center justify-center mx-auto',
      video: 'flex items-center w-full'
    }
  },
  defaultVariants: {
    navType: 'default'
  }
});

type BottomNavContextType = {
  activeClass: string | undefined | null;
};

const bottomNavItemVariants = tv({
  base: 'inline-flex flex-col items-center justify-center',
  variants: {
    navType: {
      default: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
      border:
        'px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600',
      application: '',
      pagination: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
      group: 'p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group',
      card: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
      meeting: '',
      video: ''
    },
    appBtnPosition: {
      left: 'px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group',
      middle: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
      right: 'px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
    },
    active: {
      true: '',
      false: ''
    }
  },
  defaultVariants: {
    navType: 'default',
    appBtnPosition: 'middle',
    active: false
  }
});

const bottomNavItemSpanVariants = tv({
  base: 'text-sm',
  variants: {
    navType: {
      default:
        'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
      border:
        'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
      application: 'sr-only',
      pagination: 'sr-only',
      group: 'sr-only',
      card: 'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500',
      meeting: '',
      video: ''
    },
    active: {
      true: '',
      false: ''
    }
  },
  defaultVariants: {
    navType: 'default',
    active: false
  }
});

interface BottomNavProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  activeUrl?: string | undefined | null;
  position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
  navType?: BottomNavVariantType;
  outerClass?: string | undefined | null;
  innerClass?: string | undefined | null;
  activeClass?: string | undefined | null;
}

interface BottomNavItemProps {
  children: Snippet;
  btnName?: string | undefined | null;
  appBtnPosition?: 'left' | 'middle' | 'right';
  target?: string | undefined | null;
  activeClass?: string | undefined | null;
  href?: string | undefined | null;
  exact?: boolean;
  btnClass?: string | undefined | null;
  spanClass?: string | undefined | null;
}

export {
  BottomNav,
  BottomNavItem,
  outerDivVariants,
  innerDivVariants,
  bottomNavItemVariants,
  bottomNavItemSpanVariants,
  type BottomNavProps,
  type BottomNavItemProps,
  type BottomNavContextType,
  type BottomNavVariantType
};
