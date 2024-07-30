import { type VariantProps, tv } from 'tailwind-variants';
import DescriptionList from './DescriptionList.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag: 'dt' | 'dd';
  dtClass?: string | undefined;
  ddClass?: string | undefined;
}

const descriptionListVariants = tv({
  variants: {
    tag: {
      dt: 'text-gray-500 md:text-lg dark:text-gray-400',
      dd: 'text-lg font-semibold'
    }
  },
  defaultVariants: {
    tag: 'dt'
  }
});

export { DescriptionList, descriptionListVariants, type DescriptionListProps };
