import { tv } from 'tailwind-variants';

export const drawer = tv({
  slots: {
    base: 'overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800',
    backdrop: 'fixed top-0 start-0 z-50 w-full h-full'
  },
  variants: {
    position: {
      fixed: { base: 'fixed' },
      absolute: { base: 'absolute' }
    },
    placement: {
      left: { base: 'inset-y-0 start-0' },
      right: { base: 'inset-y-0 end-0' },
      top: { base: 'inset-x-0 top-0' },
      bottom: { base: 'inset-x-0 bottom-0' }
    },
    width: {
      default: { base: 'w-80' },
      full: { base: 'w-full' },
      half: { base: 'w-1/2' }
    },
    backdrop: {
      true: { backdrop: 'bg-gray-900 bg-opacity-75' }
    }
  },
  defaultVariants: {
    position: 'fixed',
    placement: 'left',
    width: 'default'
  }
});

export const drawerhead = tv({
  slots: {
    base: 'flex items-center',
    button: 'ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
    svg: 'h-3 w-3'
  }
});
