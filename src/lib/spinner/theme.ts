import { tv } from 'tailwind-variants';

export const spinner = tv({
  base: 'inline-block animate-spin text-gray-300',
  variants: {
    color: {
      // primary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: 'fill-primary-600',
      gray: 'fill-gray-600 dark:fill-gray-300',
      red: 'fill-red-600',
      orange: 'fill-orange-500',
      amber: 'fill-amber-500',
      yellow: 'fill-yellow-400',
      lime: 'fill-lime-500',
      green: 'fill-green-500',
      emerald: 'fill-emerald-500',
      teal: 'fill-teal-500',
      cyan: 'fill-cyan-500',
      sky: 'fill-sky-500',
      blue: 'fill-blue-600',
      indigo: 'fill-indigo-600',
      violet: 'fill-violet-600',
      fuchsia: 'fill-fuchsia-600',
      pink: 'fill-pink-600',
      rose: 'fill-rose-600'
    },
    size: {
      '4': 'w-4 h-4',
      '5': 'w-5 h-5',
      '6': 'w-6 h-6',
      '8': 'w-8 h-8',
      '10': 'w-10 h-10',
      '12': 'w-12 h-12',
      '16': 'w-16 h-16'
    }
  },
  defaultVariants: {
    color: 'primary',
    size: '8'
  }
});
