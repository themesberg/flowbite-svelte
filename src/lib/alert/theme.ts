import { tv } from 'tailwind-variants';

const alert = tv({
  base: 'p-4 gap-3 text-sm',
  variants: {
    color: {
      primary:
        'bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-400',
      info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      failure:
        "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success:
        "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      warning:
        "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      green:
        "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      yellow:
        "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      indigo:
        "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      purple:
        "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      light:
        "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
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

export { alert };
