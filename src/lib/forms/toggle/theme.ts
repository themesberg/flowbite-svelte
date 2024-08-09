import { tv } from 'tailwind-variants';

export const toggle = tv({
  slots: {
    span: "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:bg-gray-600 dark:border-gray-500 relative ",
    label: 'flex items-center',
    input: 'w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 rounded dark:bg-gray-700 dark:border-gray-600 sr-only peer'
  },
  variants: {
    color: {
      primary: {span: 'peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600'},
      secondary: {span: 'peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600'},
      light: {span: 'peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:bg-gray-300'},
      dark: { span: 'peer-focus:ring-gray-700 dark:peer-focus:ring-gray-900 peer-checked:bg-gray-700' },
      blue: { span: 'peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600' },
      cyan: { span: 'peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 peer-checked:bg-cyan-600' },
      gray: { span: 'peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:bg-gray-500' },
      green: { span: 'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600' },
      indigo: { span: 'peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 peer-checked:bg-indigo-600' },
      lime: { span: 'peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 peer-checked:bg-lime-500' },
      orange:
         {span: 'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500' },
      pink:
         {span: 'peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:bg-pink-600' },
      purple:
         {span: 'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600' },
      red:  {span: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600' },
      teal:  {span: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600' },
      yellow:
         {span: 'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400' },
    },
    size: {
      small: { span: 'w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4' },
      default: { span: 'w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5' },
      large: { span: 'w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6' }
    },
  },
  defaultVariants: {
    color: 'primary',
  }
});
