import { tv } from 'tailwind-variants';

export const dropdown = tv({
  slots: {
    base: 'z-10 w-44 mt-2 divide-y divide-gray-300 dark:divide-gray-500 overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700',
    backdrop: 'fixed top-0 start-0 w-full h-full'
  }
});

export const dropdowndivider = tv({
  base: 'my-1 h-px bg-gray-100 dark:bg-gray-500'
});

export const dropdownHeader = tv({
  base: 'px-4 py-3 text-sm text-gray-900 dark:text-white'
});

export const dropdownFooter = tv({
  base: 'overflow-hidden rounded-b-lg py-1'
});

export const dropdownli = tv({
  slots: {
    anchor:
      'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
    activeAnchor:
      'block px-4 py-2 text-primary-700 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
  }
});

export const dropdownul = tv({
  base: 'py-2 text-sm text-gray-700 dark:text-gray-200'
});
