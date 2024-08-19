import { tv } from 'tailwind-variants';

export const search = tv({
  slots: {
    base: 'relative w-full',
    icon: '',
    content:
      'absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-gray-400'
  },
  variants: {
    size: {
      sm: {
        icon: 'w-3.5 h-3.5'
      },
      md: {
        icon: 'w-5 h-5'
      },
      lg: {
        icon: 'w-6 h-6'
      }
    }
  },
  defaultVariants: {
    size: 'lg'
  }
});
