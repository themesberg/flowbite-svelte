import Listgroup from './Listgroup.svelte';
import ListgroupItem from './ListgroupItem.svelte';
import type { Snippet } from 'svelte';
import type { ListGroupItemType } from '../types';
import { type VariantProps, tv } from 'tailwind-variants';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { Component } from 'svelte';

const listgroupVariants = tv({
  base: 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 divide-y divide-gray-200 dark:divide-gray-600',
  variants: {
    rounded: {
      true: 'rounded-lg',
      false: '',
    },
    border: {
      true: 'border border-gray-200 dark:border-gray-700',
      false: '',
    },
  },
  compoundVariants: [
    {
      border: true,
      class: 'divide-gray-200 dark:divide-gray-700',
    },
  ],
  defaultVariants: {
    rounded: true,
    border: true,
  },
});

const listGroupItemVariants = tv({
  base: 'py-2 px-4 w-full text-sm font-medium list-none',
  variants: {
    state: {
      normal: '',
      current: '',
      disabled: '',
    },
    active: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      active: true,
      state: 'disabled',
      class: 'cursor-not-allowed',
    },
    {
      active: true,
      state: 'normal',
      class: 'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white',
    },
  ],
});

interface ListgroupProps {
  children?: Snippet;
  items?: ListGroupItemType[] | string[];
  active?: boolean;
  onclick?: () => void;
  rounded?: boolean;
  border?: boolean;
  class?: string | undefined | null;
}

interface ListgroupItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  onclick?: () => void;
  active?: boolean;
  current?: boolean;
  disabled?: boolean;
  name?: string | undefined | null;
  icon?: Component;
  href?: string | undefined | null;
  currentClass?: string | undefined | null;
  normalClass?: string | undefined | null;
  disabledClass?: string | undefined | null;
  focusClass?: string | undefined | null;
  hoverClass?: string | undefined | null;
  liClass?: string | undefined | null;
  class?: string | undefined | null;
}

export { Listgroup, ListgroupItem, listgroupVariants, listGroupItemVariants, type ListgroupProps, type ListgroupItemProps };
