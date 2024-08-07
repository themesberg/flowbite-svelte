import { tv } from 'tailwind-variants';

const createColorVariant = (color: string) => ({
  labelInsideDiv: color,
  insideDiv: color
});

export const progressbar = tv({
  slots: {
    base: 'w-full bg-gray-200 rounded-full dark:bg-gray-700',
    labelInsideDiv:
      'text-primary-100 text-xs font-medium text-center leading-none rounded-full',
    insideDiv: 'rounded-full',
    outsideDiv: 'mb-1 flex justify-between',
    oustsideSpan: 'text-base font-medium text-blue-700 dark:text-white',
    outsideProgress: 'text-sm font-medium text-blue-700 dark:text-white'
  },
  variants: {
    color: {
      primary: createColorVariant('bg-primary-600'),
      blue: createColorVariant('bg-blue-600'),
      gray: createColorVariant('bg-gray-600 dark:bg-gray-300'),
      red: createColorVariant('bg-red-600 dark:bg-red-500'),
      green: createColorVariant('bg-green-600 dark:bg-green-500'),
      yellow: createColorVariant('bg-yellow-400'),
      purple: createColorVariant('bg-purple-600 dark:bg-purple-500'),
      indigo: createColorVariant('bg-indigo-600 dark:bg-indigo-500')
    },
    labelInside: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      labelInside: true,
      class: {
        base: 'text-primary-100 text-xs font-medium text-center leading-none rounded-full',
        labelInsideDiv: 'p-0.5'
      }
    },
    {
      labelInside: false,
      class: { base: 'rounded-full' }
    }
  ],
  defaultVariants: {
    color: 'primary',
    labelInside: false
  }
});
