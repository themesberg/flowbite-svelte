import { tv } from 'tailwind-variants';

const badge = tv({
  slots: {
    hrefClass: 'flex align-middle',
    base: 'font-medium inline-flex items-center justify-center px-2.5 py-0.5'
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: { base: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300' },
      secondary: { base: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300' },
      gray: { base: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300' },
      red: { base: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' },
      orange: { base: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' },
      amber: { base: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300' },
      yellow: { base: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' },
      lime: { base: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300' },
      green: { base: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' },
      emerald: { base: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300' },
      teal: { base: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300' },
      cyan: { base: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300' },
      sky: { base: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300' },
      blue: { base: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
      indigo: { base: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300' },
      violet: { base: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300' },
      fuchsia: { base: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300' },
      purple: { base: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' },
      pink: { base: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300' },
      rose: { base: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300' }
    },
    size: {
      small: 'text-xs',
      large: 'text-sm'
    },
    border: {
      true: 'border'
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded'
    }
  },
  compoundVariants: [
    {
      border: true,
      color: 'primary',
      class: 'bg-primary-100 text-primary-800 dark:bg-primary-700/50 dark:text-primary-400 border-primary-400 dark:border-primary-400'
    },
    {
      border: true,
      color: 'secondary',
      class: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-700/50 dark:text-secondary-400 border-secondary-400 dark:border-secondary-400'
    },
    {
      border: true,
      color: 'gray',
      class: 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-400 border-gray-400 dark:border-gray-400'
    },
    {
      border: true,
      color: 'red',
      class: 'bg-red-100 text-red-800 dark:bg-red-700/50 dark:text-red-400 border-red-400 dark:border-red-400'
    },
    {
      border: true,
      color: 'orange',
      class: 'bg-orange-100 text-orange-800 dark:bg-orange-700/50 dark:text-orange-400 border-orange-400 dark:border-orange-400'
    },
    {
      border: true,
      color: 'amber',
      class: 'bg-amber-100 text-amber-800 dark:bg-amber-700/50 dark:text-amber-400 border-amber-400 dark:border-amber-400'
    },
    {
      border: true,
      color: 'yellow',
      class: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700/50 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300'
    },
    {
      border: true,
      color: 'lime',
      class: 'bg-lime-100 text-lime-800 dark:bg-lime-700/50 dark:text-lime-400 border-lime-400 dark:border-lime-400'
    },
    {
      border: true,
      color: 'green',
      class: 'bg-green-100 text-green-800 dark:bg-green-700/50 dark:text-green-400 border-green-400 dark:border-green-400'
    },
    {
      border: true,
      color: 'emerald',
      class: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-700/50 dark:text-emerald-400 border-emerald-400 dark:border-emerald-400'
    },
    {
      border: true,
      color: 'teal',
      class: 'bg-teal-100 text-teal-800 dark:bg-teal-700/50 dark:text-teal-400 border-teal-400 dark:border-teal-400'
    },
    {
      border: true,
      color: 'cyan',
      class: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-700/50 dark:text-cyan-400 border-cyan-400 dark:border-cyan-400'
    },
    {
      border: true,
      color: 'sky',
      class: 'bg-sky-100 text-sky-800 dark:bg-sky-700/50 dark:text-sky-400 border-sky-400 dark:border-sky-400'
    },
    {
      border: true,
      color: 'blue',
      class: 'bg-blue-100 text-blue-800 dark:bg-blue-700/50 dark:text-blue-400 border-blue-400 dark:border-blue-400'
    },
    {
      border: true,
      color: 'indigo',
      class: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-700/50 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400'
    },
    {
      border: true,
      color: 'violet',
      class: 'bg-violet-100 text-violet-800 dark:bg-violet-700/50 dark:text-violet-400 border-violet-400 dark:border-violet-400'
    },
    {
      border: true,
      color: 'purple',
      class: 'bg-purple-100 text-purple-800 dark:bg-purple-700/50 dark:text-purple-400 border-purple-400 dark:border-purple-400'
    },
    {
      border: true,
      color: 'fuchsia',
      class: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-700/50 dark:text-fuchsia-400 border-fuchsia-400 dark:border-fuchsia-400'
    },
    {
      border: true,
      color: 'pink',
      class: 'bg-pink-100 text-pink-800 dark:bg-pink-700/50 dark:text-pink-400 border-pink-400 dark:border-pink-400'
    },
    {
      border: true,
      color: 'rose',
      class: 'bg-rose-100 text-rose-800 dark:bg-rose-700/50 dark:text-rose-400 border-rose-400 dark:border-rose-400'
    },
    {
      href: true,
      color: 'primary',
      class: 'hover:bg-primary-200'
    },
    {
      href: true,
      color: 'secondary',
      class: 'hover:bg-secondary-200'
    },
    {
      href: true,
      color: 'gray',
      class: 'hover:bg-gray-200'
    },
    {
      href: true,
      color: 'red',
      class: 'hover:bg-red-200'
    },
    {
      href: true,
      color: 'orange',
      class: 'hover:bg-orange-200'
    },
    {
      href: true,
      color: 'amber',
      class: 'hover:bg-amber-200'
    },
    {
      href: true,
      color: 'yellow',
      class: 'hover:bg-yellow-200'
    },
    {
      href: true,
      color: 'lime',
      class: 'hover:bg-lime-200'
    },
    {
      href: true,
      color: 'green',
      class: 'hover:bg-green-200'
    },
    {
      href: true,
      color: 'emerald',
      class: 'hover:bg-emerald-200'
    },
    {
      href: true,
      color: 'teal',
      class: 'hover:bg-teal-200'
    },
    {
      href: true,
      color: 'cyan',
      class: 'hover:bg-cyan-200'
    },
    {
      href: true,
      color: 'sky',
      class: 'hover:bg-sky-200'
    },
    {
      href: true,
      color: 'blue',
      class: 'hover:bg-blue-200'
    },
    {
      href: true,
      color: 'indigo',
      class: 'hover:bg-indigo-200'
    },
    {
      href: true,
      color: 'violet',
      class: 'hover:bg-violet-200'
    },
    {
      href: true,
      color: 'purple',
      class: 'hover:bg-purple-200'
    },
    {
      href: true,
      color: 'fuchsia',
      class: 'hover:bg-fuchsia-200'
    },
    {
      href: true,
      color: 'pink',
      class: 'hover:bg-pink-200'
    },
    {
      href: true,
      color: 'rose',
      class: 'hover:bg-rose-200'
    }
  ],
  defaultVariants: {
    color: 'primary',
    size: 'small',
    rounded: false
  }
});

export { badge };
