import { tv } from 'tailwind-variants';

export const highlightcompo = tv({
  slots: {
    base: 'mx-auto mt-4 max-w-4xl rounded bg-gray-50 p-0.5 dark:bg-gray-700',
    badge: 'absolute -top-8 right-[8px]',
    button: 'absolute right-2 top-2 rounded px-2 py-1 text-white'
  }
})

export const codewrapper = tv({
  base: 'mx-auto max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r p-4 dark:border-gray-600 dark:bg-gray-900'
})