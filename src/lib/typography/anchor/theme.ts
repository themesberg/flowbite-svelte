import { tv } from 'tailwind-variants';

export const anchor = tv({
  base: 'inline-flex items-center hover:underline',
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: 'text-primary-600 dark:text-primary-500',
      secondary: 'text-secondary-600 dark:text-secondary-500',
      gray: 'text-gray-600 dark:text-gray-500',
      red: 'text-red-600 dark:text-red-500',
      orange: 'text-orange-600 dark:text-orange-500',
      amber: 'text-amber-600 dark:text-amber-500',
      yellow: 'text-yellow-600 dark:text-yellow-500',
      lime: 'text-lime-600 dark:text-lime-500',
      green: 'text-green-600 dark:text-green-500',
      emerald: 'text-emerald-600 dark:text-emerald-500',
      teal: 'text-teal-600 dark:text-teal-500',
      cyan: 'text-cyan-600 dark:text-cyan-500',
      sky: 'text-sky-600 dark:text-sky-500',
      blue: 'text-blue-600 dark:text-blue-500',
      indigo: 'text-indigo-600 dark:text-indigo-500',
      violet: 'text-violet-600 dark:text-violet-500',
      purple: 'text-purple-600 dark:text-purple-500',
      fuchsia: 'text-fuchsia-600 dark:text-fuchsia-500',
      pink: 'text-pink-600 dark:text-pink-500',
      rose: 'text-rose-600 dark:text-rose-500'
    }
  }
});
