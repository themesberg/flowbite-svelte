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
    shadow: {
      sm: { base: 'shadow-md' },
      normal: { base: 'shadow' },
      md: { base: 'shadow-md' },
      lg: { base: 'shadow-lg' },
      xl: { base: 'shadow-xl' },
      '2xl': { base: 'shadow-2xl' },
      inner: { base: 'shadow-inner' },
      none: { base: 'shadow-none' }
    },
    padding: {
      none: { content: 'p-0' },
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
      true: { base: 'flex-col-reverse', image: 'rounded-b-lg' },
      false: { base: 'flex-col', image: 'rounded-t-lg' }
    },
    href: {
      true: { base: 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' }
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
