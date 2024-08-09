import { tv } from 'tailwind-variants';

export const radio = tv({
  slots: {
    input: 'relative flex items-center w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2',
    label: 'flex items-center',
  },
  variants: {
    color: {
      primary:
      {input: 'text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600'},
      secondary:
        {input: 'text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600'},
      purple: {input: 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600'},
      teal: {input: 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600'},
      yellow: {input: 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600'},
      orange: {input: 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600'},
      blue:{input:  'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600'},
      red: {input:'text-red-600 focus:ring-red-500 dark:focus:ring-red-600'},
      green: {input: 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600'},    
      gray: {input: 'text-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600'},
      pink: {input: 'text-pink-600 focus:ring-pink-500 dark:focus:ring-pink-600'},
      indigo: {input: 'text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600'},
      cyan: {input: 'text-cyan-600 focus:ring-cyan-500 dark:focus:ring-cyan-600'},
      lime: {input: 'text-lime-600 focus:ring-lime-500 dark:focus:ring-lime-600'},
      amber: {input: 'text-amber-600 focus:ring-amber-500 dark:focus:ring-amber-600'},
      violet: {input: 'text-violet-600 focus:ring-violet-500 dark:focus:ring-violet-600'},
    },
    tinted: {
      true: { input: 'dark:bg-gray-600 dark:border-gray-500' },
      false: { input: 'dark:bg-gray-700 dark:border-gray-600' }
    }
  },
  defaultVariants: {
    color: 'primary',
  }
});