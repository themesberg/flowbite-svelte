import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import CloseButton from './CloseButton.svelte';
import { type VariantProps, tv } from 'tailwind-variants';

const closeButtonVariants = tv({
  base: 'focus:outline-none whitespace-normal',
  variants: {
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    color: {
      primary: 'text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300',
      secondary: 'text-secondary-500 focus:ring-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-800 dark:hover:text-secondary-300',
      gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300',
      red: 'text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300',
      orange: 'text-orange-500 focus:ring-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800 dark:hover:text-orange-300',
      amber: 'text-amber-500 focus:ring-amber-400 hover:bg-amber-200 dark:hover:bg-amber-800 dark:hover:text-amber-300',
      yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
      lime: 'text-lime-500 focus:ring-lime-400 hover:bg-lime-200 dark:hover:bg-lime-800 dark:hover:text-lime-300',
      green: 'text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300',
      emerald: 'text-emerald-500 focus:ring-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 dark:hover:text-emerald-300',
      teal: 'text-teal-500 focus:ring-teal-400 hover:bg-teal-200 dark:hover:bg-teal-800 dark:hover:text-teal-300',
      cyan: 'text-cyan-500 focus:ring-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800 dark:hover:text-cyan-300',
      sky: 'text-sky-500 focus:ring-sky-400 hover:bg-sky-200 dark:hover:bg-sky-800 dark:hover:text-sky-300',
      blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300',
      indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
      violet: 'text-violet-500 focus:ring-violet-400 hover:bg-violet-200 dark:hover:bg-violet-800 dark:hover:text-violet-300',
      purple: 'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300',
      fuchsia: 'text-fuchsia-500 focus:ring-fuchsia-400 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800 dark:hover:text-fuchsia-300',
      pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300',
      rose: 'text-rose-500 focus:ring-rose-400 hover:bg-rose-200 dark:hover:bg-rose-800 dark:hover:text-rose-300'
    },
    size: {
      xs: 'm-0.5 rounded-sm focus:ring-1 p-0.5',
      sm: 'm-0.5 rounded focus:ring-1 p-0.5',
      md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
      lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
    }
  },
  defaultVariants: {
    color: 'gray',
    size: 'md'
  },
  slots: {
    svg: ''
  },
  compoundVariants: [
    {
      size: 'xs',
      class: {
        svg: 'w-3 h-3'
      }
    },
    {
      size: 'sm',
      class: {
        svg: 'w-3.5 h-3.5'
      }
    },
    {
      size: ['md', 'lg'],
      class: {
        svg: 'w-5 h-5'
      }
    }
  ]
});

type ColorType = VariantProps<typeof closeButtonVariants>['color'];
type SizeType = VariantProps<typeof closeButtonVariants>['size'];

interface CloseButtonProps {
  color?: ColorType;
  onclick?: () => void;
  name?: string;
  ariaLabel?: string;
  size?: SizeType;
  href?: string;
  class?: string;
}

export { CloseButton, closeButtonVariants, type CloseButtonProps };
