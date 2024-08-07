import { tv } from 'tailwind-variants';

const banner = tv({
  slots: {
    base: 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600',
    insideDiv: 'flex items-center'
  },
  variants: {
    position: {
      static: { base: 'static' },
      fixed: {base: 'fixed'},
      absolute: {base: 'absolute'},
      relative: {base: 'relative'},
      sticky: {base:'sticky'}
    },
    bannerType: {
      default: {
        base: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
        insideDiv: 'mx-auto'
      },
      bottom: {
        base: 'bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50',
        insideDiv: 'mx-auto'
      },
      cta: {
        base: 'flex-col md:flex-row w-[calc(100%-2rem)] -translate-x-1/2 rtl:translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl start-1/2 top-6',
        insideDiv: 'flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0'
      },
      signup: {
        base: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
        insideDiv: 'flex-shrink-0 w-full mx-auto sm:w-auto'
      },
      info: {
        base: 'top-0 start-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50',
        insideDiv: 'flex-shrink-0'
      }
    },
    color: {
      blue: {base: 'bg-blue-50 dark:bg-blue-900'},
      gray: {base: 'bg-gray-50 dark:bg-gray-700'},
      red: {base: 'bg-red-50 dark:bg-red-900'},
      green: {base: 'bg-green-50 dark:bg-green-900'},
      yellow: {base: 'bg-yellow-50 dark:bg-yellow-900'},
      indigo: {base: 'bg-indigo-50 dark:bg-indigo-900'},
      purple: {base:'bg-purple-50 dark:bg-purple-900'},
      pink: {base:'bg-pink-50 dark:bg-pink-900'}
    }
  },
  defaultVariants: {
    position: 'sticky',
    bannerType: 'default',
    color: 'gray'
  }
});


export { banner };
