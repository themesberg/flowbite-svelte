import { tv, type VariantProps } from "tailwind-variants";

export const navbar = tv({
  base: "relative w-full px-2 py-2.5 sm:px-4"
});

export type NavbarTheme = string;

export const navbarBrand = tv({
  base: "flex items-center"
});

export type NavbarBrandTheme = string;

export const navbarContainer = tv({
  base: "mx-auto flex flex-wrap items-center justify-between ",
  variants: {
    fluid: { true: "w-full", false: "container" }
  }
});

export const navbarUl = tv({
  slots: {
    base: "w-full md:block md:w-auto",
    ul: "flex flex-col p-4 mt-0 md:flex-row rtl:space-x-reverse md:text-sm md:font-medium",
    active: "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent",
    nonActive: "hover:text-primary-500 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 dark:md:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  },
  variants: {
    hidden: {
      false: {
        // Add absolute positioning and overlay styles for mobile
        base: "absolute top-full left-0 right-0 z-50 w-full md:block md:w-auto md:static md:z-auto",
        ul: "border rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-400 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 md:border-none md:rounded-none md:bg-inherit dark:md:bg-inherit md:shadow-none"
      },
      true: {
        base: "hidden"
      }
    }
  },
  defaultVariants: {}
});

export type NavbarUlSlots = keyof typeof navbarUl.slots;
export type NavbarUlTheme = Partial<Record<NavbarUlSlots, string>>;

export const navbarLi = tv({
  base: "block py-2 pe-4 ps-3 md:p-2 rounded-sm md:border-0",
  variants: {
    hidden: {
      false: "block py-2 pe-4 ps-3 md:p-2 rounded-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    }
  },
  defaultVariants: {}
});

export type NavbarLiTheme = string;

export const navbarHamburger = tv({
  slots: {
    base: "ms-3 md:hidden",
    menu: "h-6 w-6 shrink-0"
  }
});

export type NavbarHamburgerSlots = keyof typeof navbarHamburger.slots;
export type NavbarHamburgerTheme = Partial<Record<NavbarHamburgerSlots, string>>;

