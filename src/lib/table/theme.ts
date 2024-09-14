import { tv } from 'tailwind-variants';

export const table = tv({
  slots: {
    base: '',
    table: 'w-full text-left text-sm'
  },
  variants: {
    color: {
      // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    default: { table:'text-gray-500 dark:text-gray-400' },
    primary: { table:'text-primary-100 dark:text-primary-100' },
    secondary: { table:'text-secondary-100 dark:text-secondary-100' },
    gray: { table:'text-gray-100 dark:text-gray-100' },
    red: { table:'text-red-100 dark:text-red-100' },
    orange: { table:'text-orange-100 dark:text-orange-100' },
    amber: { table:'text-amber-100 dark:text-amber-100' },
    yellow: { table:'text-yellow-100 dark:text-yellow-100' },
    lime: { table:'text-lime-100 dark:text-lime-100' },
    green: { table:'text-green-100 dark:text-green-100' },
    emerald: { table:'text-emerald-100 dark:text-emerald-100' },
    teal: { table:'text-teal-100 dark:text-teal-100' },
    cyan: { table:'text-cyan-100 dark:text-cyan-100' },
    sky: { table:'text-sky-100 dark:text-sky-100' },
    blue: { table:'text-blue-100 dark:text-blue-100' },
    indigo: { table:'text-indigo-100 dark:text-indigo-100' },
    violet: { table:'text-violet-100 dark:text-violet-100' },
    purple: { table:'text-purple-100 dark:text-purple-100' },
    fuchsia: { table:'text-fuchsia-100 dark:text-fuchsia-100' },
    pink: { table:'text-pink-100 dark:text-pink-100' },
      rose: { table: 'text-rose-100 dark:text-rose-100' }
    },
    shadow: {
      true: { base: 'shadow-md sm:rounded-lg'}
    }
  }
})

export const tablebodyrow = tv({
  base: '',
  variants: {
    color: {
      default: 'bg-white dark:bg-gray-800 dark:border-gray-700',
      primary: 'bg-white bg-primary-500 border-primary-400',
      secondary: 'bg-white bg-secondary-500 border-secondary-400',
      gray: 'bg-gray-500 border-gray-400',
      red: 'bg-red-500 border-red-400',
      orange: 'bg-orange-500 border-orange-400',
      amber: 'bg-amber-500 border-amber-400',
      yellow: 'bg-yellow-500 border-yellow-400',
      lime: 'bg-lime-500 border-lime-400',
      green: 'bg-white bg-green-500 border-green-400',
      emerald: 'bg-emerald-500 border-emerald-400',
      teal: 'bg-teal-500 border-teal-400',
      cyan: 'bg-cyan-500 border-cyan-400',
      sky: 'bg-sky-500 border-sky-400',
      blue: 'bg-white bg-blue-500 border-blue-400',
      indigo: 'bg-indigo-500 border-indigo-400',
      violet: 'bg-violet-500 border-violet-400',
      purple: 'bg-purple-500 border-purple-400',
      fuchsia: 'bg-fuchsia-500 border-fuchsia-400',
      pink: 'bg-pink-500 border-pink-400',
      rose: 'bg-rose-500 border-rose-400'
    },
    hoverable: {
      true:''
    },
    striped: {
      true:''
    },
    border: {
      true: 'border-b last:border-b-0'
    }
  },
  compoundVariants: [
    {
      hoverable: true,
      color: 'default',
      class: 'hover:bg-gray-50 dark:hover:bg-gray-600'
    },
    {
      hoverable: true,
      color: 'primary',
      class: 'hover:bg-primary-500 dark:hover:bg-primary-600'
    },
    {
      hoverable: true,
      color: 'secondary',
      class: 'hover:bg-secondary-500 dark:hover:bg-secondary-600'
    },
    {
      hoverable: true,
      color: 'gray',
      class: 'hover:bg-gray-500 dark:hover:bg-gray-600'
    },
    {
      hoverable: true,
      color: 'red',
      class: 'hover:bg-red-500 dark:hover:bg-red-600'
    },
    {
      hoverable: true,
      color: 'orange',
      class: 'hover:bg-orange-500 dark:hover:bg-orange-600'
    },
    {
      hoverable: true,
      color: 'amber',
      class: 'hover:bg-amber-500 dark:hover:bg-amber-600'
    },
    {
      hoverable: true,
      color: 'yellow',
      class: 'hover:bg-yellow-500 dark:hover:bg-yellow-600'
    },
    {
      hoverable: true,
      color: 'lime',
      class: 'hover:bg-lime-500 dark:hover:bg-lime-600'
    },
    {
      hoverable: true,
      color: 'green',
      class: 'hover:bg-green-500 dark:hover:bg-green-600'
    },
    {
      hoverable: true,
      color: 'emerald',
      class: 'hover:bg-emerald-500 dark:hover:bg-emerald-600'
    },
    {
      hoverable: true,
      color: 'teal',
      class: 'hover:bg-teal-500 dark:hover:bg-teal-600'
    },
    {
      hoverable: true,
      color: 'cyan',
      class: 'hover:bg-cyan-500 dark:hover:bg-cyan-600'
    },
    {
      hoverable: true,
      color: 'sky',
      class: 'hover:bg-sky-400'
    },
    {
      hoverable: true,
      color: 'blue',
      class: 'hover:bg-blue-400'
    },
    {
      hoverable: true,
      color: 'indigo',
      class: 'hover:bg-indigo-500 dark:hover:bg-indigo-600'
    },
    {
      hoverable: true,
      color: 'violet',
      class: 'hover:bg-violet-500 dark:hover:bg-violet-600'
    },
    {
      hoverable: true,
      color: 'purple',
      class: 'hover:bg-purple-500 dark:hover:bg-purple-600'
    },
    {
      hoverable: true,
      color: 'fuchsia',
      class: 'hover:bg-fuchsia-500 dark:hover:bg-fuchsia-600'
    },
    {
      hoverable: true,
      color: 'pink',
      class: 'hover:bg-pink-500 dark:hover:bg-pink-600'
    },
    {
      hoverable: true,
      color: 'rose',
      class: 'hover:bg-rose-500 dark:hover:bg-rose-600'
    },
    {
      striped: true,
      color: 'default',
      class: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
    },
    {
      striped: true,
      color: 'primary',
      class: 'odd:bg-primary-800 even:bg-primary-700 odd:dark:bg-primary-800 even:dark:bg-primary-700'
    },
    {
      striped: true,
      color: 'secondary',
      class: 'odd:bg-secondary-800 even:bg-secondary-700 odd:dark:bg-secondary-800 even:dark:bg-secondary-700'
    },
    {
      striped: true,
      color: 'gray',
      class: 'odd:bg-gray-800 even:bg-gray-700 odd:dark:bg-gray-800 even:dark:bg-gray-700'
    },
    // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      striped: true,
      color:'red',
      class: 'odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700'
    },
    {
      striped: true,
      color: 'orange',
      class: 'odd:bg-orange-800 even:bg-orange-700 odd:dark:bg-orange-800 even:dark:bg-orange-700'
    },
    {
      striped: true,
      color: 'amber',
      class: 'odd:bg-amber-800 even:bg-amber-700 odd:dark:bg-amber-800 even:dark:bg-amber-700'
    },
    {
      striped: true,
      color: 'yellow',
      class: 'odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700'
    },
    {
      striped: true,
      color: 'lime',
      class: 'odd:bg-lime-800 even:bg-lime-700 odd:dark:bg-lime-800 even:dark:bg-lime-700'
    },
    {
      striped: true,
      color: 'green',
      class: 'odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700'
    },
    {
      striped: true,
      color: 'emerald',
      class: 'odd:bg-emerald-800 even:bg-emerald-700 odd:dark:bg-emerald-800 even:dark:bg-emerald-700'
    },
    {
      striped: true,
      color: 'teal',
      class: 'odd:bg-teal-800 even:bg-teal-700 odd:dark:bg-teal-800 even:dark:bg-teal-700'
    },
    {
      striped: true,
      color: 'cyan',
      class: 'odd:bg-cyan-800 even:bg-cyan-700 odd:dark:bg-cyan-800 even:dark:bg-cyan-700'
    },
    {
      striped: true,
      color: 'sky',
      class: 'odd:bg-sky-800 even:bg-sky-700 odd:dark:bg-sky-800 even:dark:bg-sky-700'
    },
    {
      striped: true,
      color: 'blue',
      class: 'odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700'
    },
    {
      striped: true,
      color: 'indigo',
      class: 'odd:bg-indigo-800 even:bg-indigo-700 odd:dark:bg-indigo-800 even:dark:bg-indigo-700'
    },
    {
      striped: true,
      color: 'violet',
      class: 'odd:bg-violet-800 even:bg-violet-700 odd:dark:bg-violet-800 even:dark:bg-violet-700'
    },
    {
      striped: true,
      color: 'purple',
      class: 'odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700'
    },
    {
      striped: true,
      color: 'fuchsia',
      class: 'odd:bg-fuchsia-800 even:bg-fuchsia-700 odd:dark:bg-fuchsia-800 even:dark:bg-fuchsia-700'
    },
    {
      striped: true,
      color: 'pink',
      class: 'odd:bg-pink-800 even:bg-pink-700 odd:dark:bg-pink-800 even:dark:bg-pink-700'
    },
    {
      striped: true,
      color: 'rose',
      class: 'odd:bg-rose-800 even:bg-rose-700 odd:dark:bg-rose-800 even:dark:bg-rose-700'
    }
  ]
})

export const tablehead = tv({
  base: 'text-xs uppercase',
  variants: {
    color: {
      default: 'text-gray-700 dark:text-gray-400 border-gray-700',
      primary: 'text-white bg-primary-600 border-primary-400',
      secondary: 'text-white bg-secondary-600 border-secondary-400',
      gray: 'text-white bg-gray-600 border-gray-400',
      red: 'text-white bg-red-600 border-red-400',
      orange: 'text-white bg-orange-600 border-orange-400',
      amber: 'text-white bg-amber-600 border-amber-400',
      yellow: 'text-white bg-yellow-600 border-yellow-400',
      lime: 'text-white bg-lime-600 border-lime-400',
      green: 'text-white bg-green-600 border-green-400',
      emerald: 'text-white bg-emerald-600 border-emerald-400',
      teal: 'text-white bg-teal-600 border-teal-400',
      cyan: 'text-white bg-cyan-600 border-cyan-400',
      sky: 'text-white bg-sky-600 border-sky-400',
      blue: 'text-white bg-blue-600 border-blue-400',
      indigo: 'text-white bg-indigo-600 border-indigo-400',
      violet: 'text-white bg-violet-600 border-violet-400',
      purple: 'text-white bg-purple-600 border-purple-400',
      fuchsia: 'text-white bg-fuchsia-600 border-fuchsia-400',
      pink: 'text-white bg-pink-600 border-pink-400',
      rose: 'text-white bg-rose-600 border-rose-400'
    },
    noborder: {
      false: 'bg-gray-50 dark:bg-gray-700 border-gray-700'
    },
    striped: {
      false: 'bg-gray-50 dark:bg-gray-700'
    }
  }

});