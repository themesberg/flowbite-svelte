import { tv } from 'tailwind-variants';

const banner = tv({
  slots: {
    base: 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600',
    insideDiv: 'flex items-center'
  },
  variants: {
    position: {
      static: { base: 'static' },
      fixed: { base: 'fixed' },
      absolute: { base: 'absolute' },
      relative: { base: 'relative' },
      sticky: { base: 'sticky' }
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
        insideDiv:
          'flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0'
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
      // 'primary' secondary, | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: { base: 'bg-primary-50 dark:bg-primary-900' },
      secondary: { base: 'bg-secondary-50 dark:bg-secondary-900' },
      gray: { base: 'bg-gray-50 dark:bg-gray-700' },
      red: { base: 'bg-red-50 dark:bg-red-900' },
      orange: { base: 'bg-orange-50 dark:bg-orange-900' },
      amber: { base: 'bg-amber-50 dark:bg-amber-900' },
      yellow: { base: 'bg-yellow-50 dark:bg-yellow-900' },
      lime: { base: 'bg-lime-50 dark:bg-lime-900' },
      green: { base: 'bg-green-50 dark:bg-green-900' },
      emerald: { base: 'bg-emerald-50 dark:bg-emerald-900' },
      teal: { base: 'bg-teal-50 dark:bg-teal-900' },
      cyan: { base: 'bg-cyan-50 dark:bg-cyan-900' },
      sky: { base: 'bg-sky-50 dark:bg-sky-900' },
      blue: { base: 'bg-blue-50 dark:bg-blue-900' },
      indigo: { base: 'bg-indigo-50 dark:bg-indigo-900' },
      violet: { base: 'bg-violet-50 dark:bg-violet-900' },
      purple: { base: 'bg-purple-50 dark:bg-purple-900' },
      fuchsia: { base: 'bg-fuchsia-50 dark:bg-fuchsia-900' },
      pink: { base: 'bg-pink-50 dark:bg-pink-900' },
      rose: { base: 'bg-rose-50 dark:bg-rose-900' }
    }
  },
  defaultVariants: {
    position: 'sticky',
    bannerType: 'default',
  }
});

export { banner };
