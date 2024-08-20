import { tv } from 'tailwind-variants';

export const listGroup = tv({
  base: 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 divide-y divide-gray-200 dark:divide-gray-600',
  variants: {
    rounded: {
      true: 'rounded-lg',
      false: ''
    },
    border: {
      true: 'border border-gray-200 dark:border-gray-700',
      false: ''
    }
  },
  compoundVariants: [
    {
      border: true,
      class: 'divide-gray-200 dark:divide-gray-700'
    }
  ],
  defaultVariants: {
    rounded: true,
    border: true
  }
});

export const listGroupItem = tv({
  base: 'py-2 px-4 w-full text-sm font-medium list-none',
  variants: {
    state: {
      normal: '',
      current: '',
      disabled: ''
    },
    active: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      active: true,
      state: 'disabled',
      class: 'cursor-not-allowed'
    },
    {
      active: true,
      state: 'normal',
      class: 'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white'
    }
  ]
});
