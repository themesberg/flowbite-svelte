import { tv } from 'tailwind-variants';

export const input = tv({
  slots: {
    input:
      'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right',
    left: 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 pointer-events-none start-0 ps-2.5',
    right:
      'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 pe-2.5'
  },
  variants: {
    size: {
      sm: { input: 'text-xs ps-9 pe-9 p-2' },
      md: { input: 'text-sm ps-10 pe-10 p-2.5' },
      lg: { input: 'sm:text-base ps-11 pe-11 p-3' }
    },
    color: {
      base: {
        input:
          'border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-50 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
      },
      tinted: {
        input:
          'border border-gray-300 dark:border-gray-500 bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
      },
      green: {
        input:
          'border border-green-500 dark:border-green-400 focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500 bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700'
      },
      red: {
        input:
          'border border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
      }
    },
    group: {
      false: { input: 'rounded-lg' },
      true: {
        input:
          'first:rounded-s-lg last:rounded-e-lg [&:not(:first-child)]:-ms-px'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});
