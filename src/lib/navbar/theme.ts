import { tv, type VariantProps } from "tailwind-variants";

export const navbar = tv({
  base: "w-full px-2 py-2.5 sm:px-4",
});

export const navbar_brand = tv({
  base: "flex items-center"
});

export const navbar_container = tv({
  base: "mx-auto flex flex-wrap items-center justify-between ",
  variants: {
    fluid: { true: "w-full", false: "container" }
  }
});

export const navbar_ul = tv({
  slots: {
    base: 'w-full md:block md:w-auto',
    ul: 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium',
    active: 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent',
    nonActive: 'hover:text-primary-500 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 dark:md:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
  },
  variants: {
    hidden: {
      false: {
        ul: "border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-400 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 sm:border-none sm:rounded-none sm:bg-inherit dark:sm:bg-inherit",
      },
      true: { base: "hidden" }
    }
  },
  defaultVariants: {
  }
});

export const navbar_li = tv({
  base: "block py-2 pe-4 ps-3 md:p-0 rounded-sm md:border-0",
  variants: {
    hidden: {
      false: "block py-2 pe-4 ps-3 md:p-0 rounded-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    }
  },
  defaultVariants: {
  }
});

export const navbar_hamburger = tv({
  slots: {
    base: "ms-3 md:hidden",
    menu: "h-6 w-6 shrink-0"
  }
})
