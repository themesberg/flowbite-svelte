import { tv } from 'tailwind-variants';

export const toast = tv({
  slots: {
    base: 'flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 gap-3',
    icon: 'w-8 h-8 inline-flex items-center justify-center shrink-0 rounded-lg',
    content: 'w-full text-sm font-normal',
    close: 'ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
  },
  variants: {
    position: {
      'top-left': {base: 'absolute top-5 start-5'},
      'top-right': { base: 'absolute top-5 end-5' },
      'bottom-left': { base: 'absolute bottom-5 start-5' },
      'bottom-right': { base: 'absolute bottom-5 end-5' },
    },
    color: {
      // primary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary:
      {
        icon: 'text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200',
        close: 'text-primary-500 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-500'
        },
      gray: {
        icon: 'text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200',
        close: 'text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-500'
      },
      red: {
        icon: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
        close: 'text-red-500 dark:text-red-200 hover:text-red-600 dark:hover:text-red-500'
      },
      orange: {
        icon: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
        close: 'text-orange-500 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-500'
      },
      amber: {
        icon: 'text-amber-500 bg-amber-100 dark:bg-amber-700 dark:text-amber-200',
        close: 'text-amber-500 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-500'
      },
      yellow:
      {
        icon: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200',
        close: 'text-yellow-500 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-500'
        },
      lime: {
        icon: 'text-lime-500 bg-lime-100 dark:bg-lime-700 dark:text-lime-200',
        close: 'text-lime-500 dark:text-lime-200 hover:text-lime-600 dark:hover:text-lime-500'
      },
      green: {
        icon: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
        close: 'text-green-500 dark:text-green-200 hover:text-green-600 dark:hover:text-green-500'
      },
      emerald: {
        icon: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-200',
        close: 'text-emerald-500 dark:text-emerald-200 hover:text-emerald-600 dark:hover:text-emerald-500'
      },
      teal: {
        icon: 'text-teal-500 bg-teal-100 dark:bg-teal-800 dark:text-teal-200',
        close: 'text-teal-500 dark:text-teal-200 hover:text-teal-600 dark:hover:text-teal-500'
      },
      cyan: {
        icon: 'text-cyan-500 bg-cyan-100 dark:bg-cyan-800 dark:text-cyan-200',
        close: 'text-cyan-500 dark:text-cyan-200 hover:text-cyan-600 dark:hover:text-cyan-500'
      },
      sky: {
        icon: 'text-sky-500 bg-sky-100 dark:bg-sky-800 dark:text-sky-200',
        close: 'text-sky-500 dark:text-sky-200 hover:text-sky-600 dark:hover:text-sky-500'
      },
      blue: {
        icon: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
        close: 'text-blue-500 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-500'
      },
      indigo:
      {
        icon: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200',
        close: 'text-indigo-500 dark:text-indigo-200 hover:text-indigo-600 dark:hover:text-indigo-500'
        },
      violet: {
        icon: 'text-violet-500 bg-violet-100 dark:bg-violet-800 dark:text-violet-200',
        close: 'text-violet-500 dark:text-violet-200 hover:text-violet-600 dark:hover:text-violet-500'
      },
      purple:
      {
        icon: 'text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200',
        close: 'text-purple-500 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-500'
        },
      fuchsia: {
        icon: 'text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-800 dark:text-fuchsia-200',
        close: 'text-fuchsia-500 dark:text-fuchsia-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-500'
      },
      pink: {
        icon: 'text-pink-500 bg-pink-100 dark:bg-pink-700 dark:text-pink-200',
        close: 'text-pink-500 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-500'
      },
      rose: {
        icon: 'text-rose-500 bg-rose-100 dark:bg-rose-700 dark:text-rose-200',
        close: 'text-rose-500 dark:text-rose-200 hover:text-rose-600 dark:hover:text-rose-500'
      }
    },
    align: {
      true: {base: 'items-center'},
      false: {base: 'items-start'}
    }
  }
});