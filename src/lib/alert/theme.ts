import { tv } from 'tailwind-variants';

const alert = tv({
  base: 'p-4 gap-3 text-sm',
  variants: {
    color: {
      primary:
        'bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-400',
      blue: 'bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-400',
      gray: 'bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-300',
      green: 'bg-green-50 dark:bg-gray-800 text-green-800 dark:text-green-400',
      indigo:
        'bg-indigo-50 dark:bg-gray-800 text-indigo-800 dark:text-indigo-400',
      pink: 'bg-pink-50 dark:bg-gray-800 text-pink-800 dark:text-pink-400',
      purple:
        'bg-purple-50 dark:bg-gray-800 text-purple-800 dark:text-purple-400',
      red: 'bg-red-50 dark:bg-gray-800 text-red-800 dark:text-red-400',
      yellow:
        'bg-yellow-50 dark:bg-gray-800 text-yellow-800 dark:text-yellow-300',
      none: ''
    },
    rounded: {
      true: 'rounded-lg'
    },
    border: {
      true: 'border'
    },
    icon: {
      true: 'flex items-center'
    },
    dismissable: {
      true: 'flex items-center'
    }
  },
  compoundVariants: [
    {
      border: true,
      color: 'gray',
      class:
        'border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800'
    },
    {
      border: true,
      color: 'red',
      class:
        'border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800'
    },
    {
      border: true,
      color: 'yellow',
      class:
        'border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800'
    },
    {
      border: true,
      color: 'green',
      class:
        'border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800'
    },
    {
      border: true,
      color: 'indigo',
      class:
        'border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800'
    },
    {
      border: true,
      color: 'purple',
      class:
        'border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800'
    },
    {
      border: true,
      color: 'pink',
      class:
        'border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800'
    },
    {
      border: true,
      color: 'blue',
      class:
        'border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800'
    },
    {
      border: true,
      color: 'primary',
      class:
        'border-primary-500 dark:border-primary-200 divide-primary-500 dark:divide-primary-200'
    }
  ],
  defaultVariants: {
    color: 'primary',
    rounded: true
  }
});

export {  alert };
