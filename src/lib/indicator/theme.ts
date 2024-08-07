import { tv } from 'tailwind-variants';

const indicator = tv({
  slots: {
    base: 'flex-shrink-0'
  },
  variants: {
    color: {
      gray: { base: 'bg-gray-200' },
      dark: { base: 'bg-gray-900 dark:bg-gray-700' },
      blue: { base: 'bg-blue-600' },
      orange: { base: 'bg-orange-600' },
      green: { base: 'bg-green-500' },
      red: { base: 'bg-red-500' },
      purple: { base: 'bg-purple-500' },
      indigo: { base: 'bg-indigo-500' },
      yellow: { base: 'bg-yellow-300' },
      teal: { base: 'bg-teal-500' },
      none: {}
    },
    size: {
      xs: { base: 'w-2 h-2' },
      sm: { base: 'w-2.5 h-2.5' },
      md: { base: 'w-3 h-3' },
      lg: { base: 'w-3.5 h-3.5' },
      xl: { base: 'w-6 h-6' }
    },
    rounded: {
      true: { base: 'rounded' },
      false: { base: 'rounded-full' }
    },
    border: {
      true: { base: 'border-2 border-white dark:border-gray-800' },
      false: {}
    },
    hasChildren: {
      true: { base: 'inline-flex items-center justify-center' },
      false: {}
    },
    placement: {
      'top-left': { base: 'absolute top-0 start-0' },
      'top-center': {
        base: 'absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2'
      },
      'top-right': { base: 'absolute top-0 end-0' },
      'center-left': { base: 'absolute top-1/2 -translate-y-1/2 start-0' },
      center: {
        base: 'absolute top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2'
      },
      'center-right': { base: 'absolute top-1/2 -translate-y-1/2 end-0' },
      'bottom-left': { base: 'absolute bottom-0 start-0' },
      'bottom-center': {
        base: 'absolute bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2'
      },
      'bottom-right': { base: 'absolute bottom-0 end-0' }
    },
    offset: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      placement: 'top-left',
      offset: true,
      class: { base: '-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3' }
    },
    {
      placement: 'top-center',
      offset: true,
      class: { base: '-translate-y-1/3' }
    },
    {
      placement: 'top-right',
      offset: true,
      class: { base: 'translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3' }
    },
    {
      placement: 'center-left',
      offset: true,
      class: { base: '-translate-x-1/3 rtl:translate-x-1/3' }
    },
    {
      placement: 'center-right',
      offset: true,
      class: { base: 'translate-x-1/3 rtl:-translate-x-1/3' }
    },
    {
      placement: 'bottom-left',
      offset: true,
      class: { base: '-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3' }
    },
    {
      placement: 'bottom-center',
      offset: true,
      class: { base: 'translate-y-1/3' }
    },
    {
      placement: 'bottom-right',
      offset: true,
      class: { base: 'translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3' }
    }
  ],
  defaultVariants: {
    color: 'gray',
    size: 'md',
    rounded: false,
    border: false,
    offset: true,
    hasChildren: false
  }
});


export { indicator };
