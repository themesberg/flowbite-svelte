import { tv } from 'tailwind-variants';

export const spinner = tv({
  base: 'inline-block animate-spin text-gray-300',
  variants: {
    color: {
      primary: 'fill-primary-600',
      blue: 'fill-blue-600',
      gray: 'fill-gray-600 dark:fill-gray-300',
      green: 'fill-green-500',
      red: 'fill-red-600',
      yellow: 'fill-yellow-400',
      pink: 'fill-pink-600',
      purple: 'fill-purple-600',
      white: 'fill-white'
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

