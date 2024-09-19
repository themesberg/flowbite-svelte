import { tv } from 'tailwind-variants';

export const sidebar = tv({
  slots: {
    base: 'top-0 left-0 z-50 w-64 transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800',
    active: 'flex items-center text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    nonactive: 'flex items-center text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    div: 'overflow-y-auto h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800',
    backdrop: 'fixed top-0 start-0 z-40 w-full h-full'
  },
  variants: {
    position: {
      fixed: { base: 'fixed' },
      absolute: { base: 'absolute' }
    },
    isOpen: {
      true: 'block',
      false: 'hidden'
    },
    breakpoint: {
      sm: { base: 'sm:block' },
      md: { base: 'md:block' },
      lg: { base: 'lg:block' },
      xl: { base: 'xl:block' },
      '2xl': { base: '2xl:block' }
    },
    backdrop: {
      true: { backdrop: 'bg-gray-900 bg-opacity-75' }
    }
  }
});

export const sidebarbutton = tv({
  base: 'inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
  variants: {
    breakpoint: {
      sm: 'sm:hidden',
      md: 'md:hidden',
      lg: 'lg:hidden',
      xl: 'xl:hidden',
      '2xl': '2xl:hidden'
    }
  }
});

export const sidebarcta = tv({
  slots: {
    base: 'p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900',
    div: 'flex items-center mb-3',
    span: 'bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-900'
  }
});

export const sitebarbrand = tv({
  slots: {
    base: 'flex items-center ps-2.5 mb-5',
    img: 'h-6 me-3 sm:h-7',
    span: 'self-center text-xl font-semibold whitespace-nowrap dark:text-white'
  }
});
