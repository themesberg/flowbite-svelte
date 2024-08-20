import { tv } from 'tailwind-variants';

export const activity = tv({
  base: 'relative border-s border-gray-200 dark:border-gray-700'
});

export const activityitem = tv({
  slots: {
    li: 'mb-10 ms-6',
    span: 'flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900',
    img: 'rounded-full shadow-lg',
    outerDiv: 'p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600',
    innerDiv: 'justify-between items-center mb-3 sm:flex',
    time: 'mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0',
    title: 'text-sm font-normal text-gray-500 lex dark:text-gray-300',
    text: 'p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300'
  }
});

export const group = tv({
  slots: {
    div: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
    time: 'text-lg font-semibold text-gray-900 dark:text-white',
    ol: 'mt-3 divide-y divider-gray-200 dark:divide-gray-700'
  }
});

export const groupitem = tv({
  slots: {
    a: 'block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700',
    img: 'me-3 mb-3 w-12 h-12 rounded-full sm:mb-0',
    div: 'text-gray-600 dark:text-gray-400',
    title: 'text-base font-normal',
    span: 'inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400'
  }
});

export const timeline = tv({
  variants: {
    order: {
      group: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
      horizontal: 'sm:flex',
      activity: 'relative border-s border-gray-200 dark:border-gray-700',
      vertical: 'relative border-s border-gray-200 dark:border-gray-700',
      default: 'relative border-s border-gray-200 dark:border-gray-700'
    }
  },
  defaultVariants: {
    order: 'default'
  }
});

export const timelineitem = tv({
  slots: {
    li: '',
    div: '',
    time: '',
    h3: '',
    svg: 'w-3 h-3 text-primary-600 dark:text-primary-400'
  },
  variants: {
    order: {
      default: {
        li: 'mb-10 ms-4',
        div: 'absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700',
        time: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
        h3: 'text-lg font-semibold text-gray-900 dark:text-white'
      },
      vertical: {
        li: 'mb-10 ms-6',
        div: 'flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900',
        time: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
        h3: 'flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'
      },
      horizontal: {
        li: 'relative mb-6 sm:mb-0',
        div: 'flex items-center',
        time: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
        h3: 'text-lg font-semibold text-gray-900 dark:text-white'
      },
      activity: {
        li: 'mb-10 ms-6',
        div: 'flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900',
        time: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
        h3: 'text-lg font-semibold text-gray-900 dark:text-white'
      },
      group: {
        li: '',
        div: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
        time: 'text-lg font-semibold text-gray-900 dark:text-white',
        h3: 'text-lg font-semibold text-gray-900 dark:text-white'
      }
    }
  },
  defaultVariants: {
    order: 'default'
  }
});
