import { type VariantProps, tv } from "tailwind-variants";
// export { default as Badge } from "./Badge.svelte";
import Root from "./Badge.svelte"

const badgeVariants = tv({
  base: 'font-medium inline-flex items-center justify-center px-2.5 py-0.5',
  variants: {
    color: {
      primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
      gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      none: ''
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
    },
  },
  compoundVariants: [
    {
      border: true,
      color: 'primary',
      class: 'bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400'
    },
    {
      border: true,
      color: 'gray',
      class: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-400 dark:border-gray-400'
    },
    {
      border: true,
      color: 'blue',
      class: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400'
    },
    {
      border: true,
      color: 'red',
      class: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400'
    },
    {
      border: true,
      color: 'green',
      class: 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400'
    },
    {
      border: true,
      color: 'yellow',
      class: 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300'
    },
    {
      border: true,
      color: 'indigo',
      class: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400'
    },
    {
      border: true,
      color: 'purple',
      class: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400'
    },
    {
      border: true,
      color: 'pink',
      class: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400'
    },
    {
      href: true,
      color: 'primary',
      class: 'hover:bg-primary-200'
    },
    {
      href: true,
      color: 'gray',
      class: 'hover:bg-gray-200'
    },
    {
      href: true,
      color: 'blue',
      class: 'hover:bg-blue-200'
    },
    {
      href: true,
      color: 'red',
      class: 'hover:bg-red-200'
    },
    {
      href: true,
      color: 'green',
      class: 'hover:bg-green-200'
    },
    {
      href: true,
      color: 'yellow',
      class: 'hover:bg-yellow-200'
    },
    {
      href: true,
      color: 'indigo',
      class: 'hover:bg-indigo-200'
    },
    {
      href: true,
      color: 'purple',
      class: 'hover:bg-purple-200'
    },
    {
      href: true,
      color: 'pink',
      class: 'hover:bg-pink-200'
    }
  ],
  defaultVariants: {
    color: 'primary',
    size: 'small',
    rounded: false
  }
});

type badgeColor = VariantProps<typeof badgeVariants>["color"];

export {
	Root,
	Root as Badge,
  type badgeColor,
  badgeVariants
};
