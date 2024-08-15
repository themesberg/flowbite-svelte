import { tv } from 'tailwind-variants';

export const tabs = tv({
  slots: {
    base: 'flex flex-wrap space-x-2 rtl:space-x-reverse',
    content: 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4',
    divider: 'h-px bg-gray-200 dark:bg-gray-700',
    active:
      'p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500',
    inactive:
      'p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
  },
  variants: {
    tabStyle: {
      full: {
        active:
          'p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white',
        inactive:
          'p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
      },
      pill: {
        active: 'py-3 px-4 text-white bg-primary-600 rounded-lg',
        inactive:
          'py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
      },
      underline: {
        base: '-mb-px',
        active:
          'p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500 bg-transparent',
        inactive:
          'p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 bg-transparent'
      },
      none: {
        active: '',
        inactive: ''
      }
    },
    hasDivider: {
      true: {}
    }
  },
  compoundVariants: [
    {
      tabStyle: ['full', 'pill'],
      hasDivider: true,
      class: {
        divider: 'hidden'
      }
    }
  ],
  defaultVariants: {
    tabStyle: 'none',
    hasDivider: true
  }
});

export const tabItem = tv({
  slots: {
    base: 'group focus-within:z-10',
    button:
      'inline-block text-sm font-medium text-center disabled:cursor-not-allowed',
    content: 'hidden'
  },
  variants: {
    open: {
      true: {
        button: 'active'
      }
    },
    disabled: {
      true: {
        button: 'cursor-not-allowed'
      }
    }
  },
  compoundVariants: [
    {
      open: true,
      class: {
        button: '' // We'll merge this with activeClasses from context
      }
    },
    {
      open: false,
      class: {
        button: '' // We'll merge this with inactiveClasses from context
      }
    }
  ],
  defaultVariants: {
    open: false,
    disabled: false
  }
});
