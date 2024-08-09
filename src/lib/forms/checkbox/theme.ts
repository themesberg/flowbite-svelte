import { tv } from 'tailwind-variants';

export const checkbox = tv({
  slots: {
    base: 'w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2',
    label: ''
  },
  variants: {
    color: {
      primary:
        {base: 'text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600'},
      secondary:
        {base: 'text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600'},
      gray: {base: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900"},
      light: {base: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900"},
      purple: {base: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600"},
      blue: {base: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700"},
      cyan: {base: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600"},
      green: {base: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600"},
      indigo: {base: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700"},
      lime: {base: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700"},
      pink: {base: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600"},
      red: {base: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600"},
      teal: {base: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600"},
      yellow:{base: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"},
    },
    tinted: {
      true: {base:'dark:bg-gray-600 dark:border-gray-500'},
      false: {base: 'dark:bg-gray-700 dark:border-gray-600'}
    },
    custom: {
      true: {base:'sr-only peer'}
    },
    rounded: {
      true: {base:'rounded'}
    },
    inline: {
      true: {
        label: 'inline-flex',
        false: 'flex items-center'
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})
