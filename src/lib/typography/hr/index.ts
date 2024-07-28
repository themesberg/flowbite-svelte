import Hr from "./Hr.svelte";
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const hrVariants = tv({
  base: 'h-px my-8 bg-gray-200 border-0 dark:bg-gray-700',
  variants: {
    withChildren: {
      true: 'w-full',
      false: '',
    },
    icon: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    withChildren: false,
    icon: false,
  },
});

const hrContainerVariants = tv({
  base: 'inline-flex items-center justify-center w-full',
  variants: {
    withChildren: {
      true: 'relative',
      false: '',
    },
  },
  defaultVariants: {
    withChildren: false,
  },
});

const hrInnerDivVariants = tv({
  base: 'absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900',
  variants: {
    icon: {
      true: 'absolute start-1/2 px-4 bg-white -translate-x-1/2 rtl:translate-x-1/2',
      false: 'absolute px-3 font-medium text-gray-900 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:text-white dark:bg-gray-900',
    },
  },
  defaultVariants: {
    icon: false,
  },
});

interface HrProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  icon?: boolean;
  divClass?: string | undefined;
  hrClass?: string | undefined;
  iconDivClass?: string | undefined;
  textSpanClass?: string | undefined;
  innerDivClass?: string | undefined;
}

export {
  Hr,
  hrVariants,
  hrContainerVariants,
  hrInnerDivVariants,
  type HrProps
}