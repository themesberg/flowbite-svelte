import { tv } from 'tailwind-variants';

export const hr = tv({
  slots: {
    base: 'h-px my-8 bg-gray-200 border-0 dark:bg-gray-700',
    container: 'inline-flex items-center justify-center w-full',
    content:
      'absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900'
  },
  variants: {
    withChildren: {
      true: {
        base: 'w-full',
        container: 'relative'
      }
    }
  },
  defaultVariants: {
    withChildren: false
  }
});
