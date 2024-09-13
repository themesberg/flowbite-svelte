import { tv } from 'tailwind-variants';

const navbar = tv({

}); 

export const navUl = tv({
  base: 'font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700',
  variants: {
    breakPoint: {
      md: 'md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900',
      lg: 'lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 lg:dark:bg-gray-900',
      xl: 'xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 lg:p-0 xl:dark:bg-gray-900',
      xxl: '2xl:mt-0 2xl:flex-row 2xl:space-x-8 2xl:border-0 2xl:p-0 2xl:dark:bg-gray-900'
    }
  }
});