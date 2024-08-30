import { tv } from 'tailwind-variants';

export const card = tv({
  slots: {
    base: 'w-full flex max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700',
    image: 'rounded-t-lg',
    content: ''
  },
  variants: {
    size: {
      xs: { base: 'max-w-xs' },
      sm: { base: 'max-w-sm' },
      md: { base: 'max-w-lg' },
      lg: { base: 'max-w-2xl' },
      xl: { base: 'max-w-screen-xl' }
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      gray: { base: 'border-gray-200 dark:bg-gray-800 dark:border-gray-700' },
      primary: { base: 'border-primary-200 bg-primary-400 dark:bg-primary-800 dark:border-primary-700' },
      secondary: { base: 'border-secondary-200 bg-secondary-400 dark:bg-secondary-800 dark:border-secondary-700' },
      red: { base: 'border-red-200 bg-red-400 dark:bg-red-800 dark:border-red-700' },
      orange: { base: 'border-orange-200 bg-orange-400 dark:bg-orange-800 dark:border-orange-700' },
      amber: { base: 'border-amber-200 bg-amber-400 dark:bg-amber-800 dark:border-amber-700' },
      yellow: { base: 'border-yellow-200 bg-yellow-400 dark:bg-yellow-800 dark:border-yellow-700' },
      lime: { base: 'border-lime-200 bg-lime-400 dark:bg-lime-800 dark:border-lime-700' },
      green: { base: 'border-green-200 bg-green-400 dark:bg-green-800 dark:border-green-700' },
      emerald: { base: 'border-emerald-200 bg-emerald-400 dark:bg-emerald-800 dark:border-emerald-700' },
      teal: { base: 'border-teal-200 bg-teal-400 dark:bg-teal-800 dark:border-teal-700' },
      cyan: { base: 'border-cyan-200 bg-cyan-400 dark:bg-cyan-800 dark:border-cyan-700' },
      sky: { base: 'border-sky-200 bg-sky-400 dark:bg-sky-800 dark:border-sky-700' },
      blue: { base: 'border-blue-200 bg-blue-400 dark:bg-blue-800 dark:border-blue-700' },
      indigo: { base: 'border-indigo-200 bg-indigo-400 dark:bg-indigo-800 dark:border-indigo-700' },
      violet: { base: 'border-violet-200 bg-violet-400 dark:bg-violet-800 dark:border-violet-700' },
      purple: { base: 'border-purple-200 bg-purple-400 dark:bg-purple-800 dark:border-purple-700' },
      fuchsia: { base: 'border-fuchsia-200 bg-fuchsia-400 dark:bg-fuchsia-800 dark:border-fuchsia-700' },
      pink: { base: 'border-pink-200 bg-pink-400 dark:bg-pink-800 dark:border-pink-700' },
      rose: { base: 'border-rose-200 bg-rose-400 dark:bg-rose-800 dark:border-rose-700' }
    },
    shadow: {
      sm: { base: 'shadow-md' },
      normal: { base: 'shadow' },
      md: { base: 'shadow-md' },
      lg: { base: 'shadow-lg' },
      xl: { base: 'shadow-xl' },
      '2xl': { base: 'shadow-2xl' },
      inner: { base: 'shadow-inner' }
    },
    padding: {
      xs: { content: 'p-2' },
      sm: { content: 'p-4 md:p-6' },
      md: { content: 'p-4 sm:p-5 md:p-7' },
      lg: { content: 'p-4 sm:p-6 md:p-8' },
      xl: { content: 'p-4 sm:p-8 md:p-10' }
    },
    horizontal: {
      true: {
        base: 'md:flex-row',
        image: 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none'
      }
    },
    reverse: {
      true: { base: 'flex-col-reverse', image: 'rounded-b-lg rounded-tl-none' },
      false: { base: 'flex-col', image: 'rounded-t-lg' }
    },
    href: {
      true: '',
      false: ''
    },
    hasImage: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      horizontal: true,
      reverse: true,
      class: { base: 'md:flex-row-reverse', image: 'md:rounded-e-lg' }
    },
    {
      horizontal: true,
      reverse: false,
      class: { base: 'md:flex-row', image: 'md:rounded-s-lg' }
    },
    // gray, primary, secondary, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      href: true,
      color: 'gray',
      class: { base: 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' }
    },
    {
      href: true,
      color: 'primary',
      class: { base: 'cursor-pointer hover:bg-primary-500 dark:hover:bg-primary-700' }
    },
    {
      href: true,
      color: 'secondary',
      class: { base: 'cursor-pointer hover:bg-secondary-500 dark:hover:bg-secondary-700' }
    },
    {
      href: true,
      color: 'red',
      class: { base: 'cursor-pointer hover:bg-red-500 dark:hover:bg-red-700' }
    },
    {
      href: true,
      color: 'orange',
      class: { base: 'cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-700' }
    },
    {
      href: true,
      color: 'amber',
      class: { base: 'cursor-pointer hover:bg-amber-500 dark:hover:bg-amber-700' }
    },
    {
      href: true,
      color: 'yellow',
      class: { base: 'cursor-pointer hover:bg-yellow-500 dark:hover:bg-yellow-700' }
    },
    {
      href: true,
      color: 'lime',
      class: { base: 'cursor-pointer hover:bg-lime-500 dark:hover:bg-lime-700' }
    },
    {
      href: true,
      color: 'green',
      class: { base: 'cursor-pointer hover:bg-green-500 dark:hover:bg-green-700' }
    },
    {
      href: true,
      color: 'emerald',
      class: { base: 'cursor-pointer hover:bg-emerald-500 dark:hover:bg-emerald-700' }
    },
    {
      href: true,
      color: 'teal',
      class: { base: 'cursor-pointer hover:bg-teal-500 dark:hover:bg-teal-700' }
    },
    {
      href: true,
      color: 'cyan',
      class: { base: 'cursor-pointer hover:bg-cyan-500 dark:hover:bg-cyan-700' }
    },
    {
      href: true,
      color: 'sky',
      class: { base: 'cursor-pointer hover:bg-sky-500 dark:hover:bg-sky-700' }
    },
    {
      href: true,
      color: 'blue',
      class: { base: 'cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700' }
    },
    {
      href: true,
      color: 'indigo',
      class: { base: 'cursor-pointer hover:bg-indigo-500 dark:hover:bg-indigo-700' }
    },
    {
      href: true,
      color: 'violet',
      class: { base: 'cursor-pointer hover:bg-violet-500 dark:hover:bg-violet-700' }
    },
    {
      href: true,
      color: 'purple',
      class: { base: 'cursor-pointer hover:bg-purple-500 dark:hover:bg-purple-700' }
    },
    {
      href: true,
      color: 'fuchsia',
      class: { base: 'cursor-pointer hover:bg-fuchsia-500 dark:hover:bg-fuchsia-700' }
    },
    {
      href: true,
      color: 'pink',
      class: { base: 'cursor-pointer hover:bg-pink-500 dark:hover:bg-pink-700' }
    },
    {
      href: true,
      color: 'rose',
      class: { base: 'cursor-pointer hover:bg-rose-500 dark:hover:bg-rose-700' }
    }
  ],
  defaultVariants: {
    size: 'sm',
    shadow: 'normal',
    padding: 'lg',
    horizontal: false,
    reverse: false
  }
});
