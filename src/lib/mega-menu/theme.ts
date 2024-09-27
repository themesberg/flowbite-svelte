import { tv } from 'tailwind-variants';

export const megamenu = tv({
  slots: {
    base: 'w-full border rounded-lg',
    div: 'flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2',
    ul: 'grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max grid-cols-2 md:grid-cols-3 text-sm font-medium',
    footerDiv: 'md:w-1/3 mt-4 md:mt-0'
  },
  variants: {
    full: {}
  }
});
