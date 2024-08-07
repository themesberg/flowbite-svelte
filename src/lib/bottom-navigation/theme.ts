import { tv } from 'tailwind-variants';

const bottomNav = tv({
  slots: {
    outer: 'w-full z-30 border-gray-200 dark:bg-gray-700 dark:border-gray-600',
    inner: 'grid h-full max-w-lg mx-auto'
  },
  variants: {
    position: {
      static: { outer: 'static' },
      fixed: { outer: 'fixed' },
      absolute: { outer: 'absolute' },
      relative: { outer: 'relative' },
      sticky: { outer: 'sticky' }
    },
    navType: {
      default: { outer: 'bottom-0 start-0 h-16 bg-white border-t' },
      border: { outer: 'bottom-0 start-0 h-16 bg-white border-t' },
      application: {
        outer:
          'h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2'
      },
      pagination: {
        outer:
          'bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2'
      },
      group: {
        outer:
          'bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2'
      },
      card: { outer: 'bottom-0 start-0 h-16 bg-white border-t' },
      meeting: {
        outer:
          'bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
        inner: 'flex items-center justify-center mx-auto'
      },
      video: {
        outer:
          'bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
        inner: 'flex items-center w-full'
      }
    }
  },
  defaultVariants: {
    position: 'fixed',
    navType: 'default'
  }
});

const bottomNavItem = tv({
  slots: {
    base: 'inline-flex flex-col items-center justify-center',
    span: 'text-sm'
  },
  variants: {
    navType: {
      default: {
        base: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
        span: 'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500'
      },
      border: {
        base: 'px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600',
        span: 'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500'
      },
      application: {
        base: '',
        span: 'sr-only'
      },
      pagination: {
        base: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
        span: 'sr-only'
      },
      group: {
        base: 'p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group',
        span: 'sr-only'
      },
      card: {
        base: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
        span: 'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500'
      },
      meeting: {
        base: '',
        span: ''
      },
      video: {
        base: '',
        span: ''
      }
    },
    appBtnPosition: {
      left: {
        base: 'px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
      },
      middle: { base: 'px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group' },
      right: {
        base: 'px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
      }
    }
  },
  defaultVariants: {
    navType: 'default',
    appBtnPosition: 'middle',
    active: false
  }
});

export { bottomNav, bottomNavItem };
