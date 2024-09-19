import { tv } from 'tailwind-variants';

export const advancedrating = tv({
  // divClass = 'flex items-center mt-4', spanClass = 'text-sm font-medium text-gray-600 dark:text-gray-500', div2Class = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700', div3Class = 'h-5 bg-yellow-400 rounded', span2Class = 'text-sm font-medium text-gray-600 dark:text-gray-500',
  slots: {
    base: 'flex items-center mt-4',
    span: 'text-sm font-medium text-gray-600 dark:text-gray-500',
    div2: 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700',
    div3: 'h-5 bg-yellow-400 rounded',
    span2: 'text-sm font-medium text-gray-600 dark:text-gray-500'
  }
});

export const rating = tv({
  slots: {
    base: 'flex items-center',
    p: 'ms-2 text-sm font-bold text-gray-900 dark:text-white'
  }
});

export const review = tv({
  slots: {
    article: 'md:grid md:grid-cols-3 md:gap-8',
    div: 'mb-6 flex items-center space-x-4 rtl:space-x-reverse',
    div2: 'space-y-1 font-medium dark:text-white',
    div3: 'flex items-center text-sm text-gray-500 dark:text-gray-400',
    img: 'h-10 w-10 rounded-full',
    ul: 'space-y-4 text-sm text-gray-500 dark:text-gray-400',
    li: 'flex items-center'
  }
});

export const scorerating = tv({
  slots: {
    desc1: 'bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-primary-200 dark:text-primary-800',
    desc2: 'ms-2 font-medium text-gray-900 dark:text-white',
    desc3: 'mx-2 w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500',
    desc3span: 'text-sm w-24 font-medium text-gray-500 dark:text-gray-400',
    desc3p: 'text-sm w-24 font-medium text-gray-500 dark:text-gray-400',
    link: 'ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500',
    bar: 'bg-primary-600 h-2.5 rounded dark:bg-primary-500'
  }
});
