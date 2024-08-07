import { tv } from 'tailwind-variants';

export const breadcrumb = tv({
  slots: {
    base: 'flex',
    list: 'inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse',
    item: 'inline-flex items-center',
    icon: 'h-6 w-6 text-gray-400 rtl:-scale-x-100'
  },
  variants: {
    solid: {
      true: {
        base: 'px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'
      },
      false: ''
    },
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
      class: {
        item: 'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
        icon: 'me-2 h-4 w-4'
      }
    },
    {
      home: false,
      hasHref: true,
      class: {
        item: 'ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white'
      }
    },
    {
      home: false,
      hasHref: false,
      class: {
        item: 'ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400'
      }
    }
  ],
  defaultVariants: {
    solid: false
  }
});
