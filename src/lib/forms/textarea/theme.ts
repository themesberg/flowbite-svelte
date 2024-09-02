import { tv } from 'tailwind-variants';

export const textarea = tv({
  slots: { 
    // 1. wrapperClass/outer div
    // 2. base/textarea
    base: 'block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
    wrapper: 'w-full rounded-lg bg-gray-50 dark:bg-gray-600 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-500',
    innerWrapper: 'py-2 px-4 bg-white dark:bg-gray-800',
    headerCls: 'py-2 px-3 border-gray-200 dark:border-gray-500',
    footerCls:'py-2 px-3 border-gray-200 dark:border-gray-500'
  },
  variants: {
    wrapped: {
      false: {
        base: 'p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
      },
    },
    hasHeader: {
      true: {
        headerCls: 'border-b',
      },
      false: {
        innerWrapper: 'rounded-t-lg',
      },
    },
    hasFooter: {
      true: {
        footerCls: 'border-t'
      },
      false: {
        innerWrapper: 'rounded-b-lg',
      },
    }
  },
  // compoundVariants: [
  //   {
  //     wrapped: false,

  //   }
  // ]
});