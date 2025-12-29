import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Define breakpoint type
export type NavbarBreakpoint = "sm" | "md" | "lg" | "xl";

// Variants
export type NavbarUlVariants = VariantProps<typeof navbarUl> & Classes<typeof navbarUl>;
export type NavbarHamburgerVariants = VariantProps<typeof navbarHamburger> & Classes<typeof navbarHamburger>;
export type NavbarVariants = VariantProps<typeof navbar> & Classes<typeof navbar>;

export const navbar = tv({
  slots: {
    base: "relative w-full px-2 py-2.5 sm:px-4",
    container: ""
  }
});

export const navbarBrand = tv({
  base: "flex items-center"
});

export const navbarContainer = tv({
  base: "mx-auto flex flex-wrap items-center justify-between ",
  variants: {
    fluid: { true: "w-full", false: "container" }
  }
});

export const navbarUl = tv({
  slots: {
    base: "",
    ul: "flex flex-col p-4 mt-0 rtl:space-x-reverse",
    active: "text-white bg-primary-700 dark:bg-primary-600",
    nonActive: "hover:text-primary-500 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    breakpoint: {
      sm: {
        base: "w-full sm:block sm:w-auto",
        ul: "sm:flex-row sm:text-sm sm:font-medium",
        active: "sm:bg-transparent sm:text-primary-700 sm:dark:text-white sm:dark:bg-transparent",
        nonActive: "sm:hover:bg-transparent sm:border-0 sm:hover:text-primary-700 dark:sm:text-gray-400 sm:dark:hover:text-white sm:dark:hover:bg-transparent"
      },
      md: {
        base: "w-full md:block md:w-auto",
        ul: "md:flex-row md:text-sm md:font-medium",
        active: "md:bg-transparent md:text-primary-700 md:dark:text-white md:dark:bg-transparent",
        nonActive: "md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:md:text-gray-400 md:dark:hover:text-white md:dark:hover:bg-transparent"
      },
      lg: {
        base: "w-full lg:block lg:w-auto",
        ul: "lg:flex-row lg:text-sm lg:font-medium",
        active: "lg:bg-transparent lg:text-primary-700 lg:dark:text-white lg:dark:bg-transparent",
        nonActive: "lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:lg:text-gray-400 lg:dark:hover:text-white lg:dark:hover:bg-transparent"
      },
      xl: {
        base: "w-full xl:block xl:w-auto",
        ul: "xl:flex-row xl:text-sm xl:font-medium",
        active: "xl:bg-transparent xl:text-primary-700 xl:dark:text-white xl:dark:bg-transparent",
        nonActive: "xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 dark:xl:text-gray-400 xl:dark:hover:text-white xl:dark:hover:bg-transparent"
      }
    },
    hidden: {
      false: {
        base: "absolute top-full left-0 right-0 z-50 w-full",
        ul: "border rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-400 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700"
      },
      true: {
        base: "hidden"
      }
    }
  },
  compoundVariants: [
    // Compound variants for breakpoint + hidden combinations
    {
      breakpoint: "sm",
      hidden: false,
      class: {
        base: "sm:static sm:z-auto",
        ul: "sm:border-none sm:rounded-none sm:bg-inherit dark:sm:bg-inherit sm:shadow-none"
      }
    },
    {
      breakpoint: "md",
      hidden: false,
      class: {
        base: "md:static md:z-auto",
        ul: "md:border-none md:rounded-none md:bg-inherit dark:md:bg-inherit md:shadow-none"
      }
    },
    {
      breakpoint: "lg",
      hidden: false,
      class: {
        base: "lg:static lg:z-auto",
        ul: "lg:border-none lg:rounded-none lg:bg-inherit dark:lg:bg-inherit lg:shadow-none"
      }
    },
    {
      breakpoint: "xl",
      hidden: false,
      class: {
        base: "xl:static xl:z-auto",
        ul: "xl:border-none xl:rounded-none xl:bg-inherit dark:xl:bg-inherit xl:shadow-none"
      }
    }
  ],
  defaultVariants: {
    breakpoint: "md"
  }
});

export const navbarLi = tv({
  base: "block py-2 pe-4 ps-3 rounded-sm",
  variants: {
    breakpoint: {
      sm: "sm:p-2 sm:border-0",
      md: "md:p-2 md:border-0",
      lg: "lg:p-2 lg:border-0",
      xl: "xl:p-2 xl:border-0"
    },
    hidden: {
      false: "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    }
  },
  compoundVariants: [
    {
      breakpoint: "sm",
      hidden: false,
      class: "sm:hover:bg-transparent sm:hover:text-primary-700 sm:dark:hover:text-white sm:dark:hover:bg-transparent"
    },
    {
      breakpoint: "md",
      hidden: false,
      class: "md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:text-white md:dark:hover:bg-transparent"
    },
    {
      breakpoint: "lg",
      hidden: false,
      class: "lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:text-white lg:dark:hover:bg-transparent"
    },
    {
      breakpoint: "xl",
      hidden: false,
      class: "xl:hover:bg-transparent xl:hover:text-primary-700 xl:dark:hover:text-white xl:dark:hover:bg-transparent"
    }
  ],
  defaultVariants: {
    breakpoint: "md"
  }
});

export const navbarHamburger = tv({
  slots: {
    base: "ms-3",
    menu: "h-6 w-6 shrink-0"
  },
  variants: {
    breakpoint: {
      sm: {
        base: "sm:hidden"
      },
      md: {
        base: "md:hidden"
      },
      lg: {
        base: "lg:hidden"
      },
      xl: {
        base: "xl:hidden"
      }
    }
  },
  defaultVariants: {
    breakpoint: "md"
  }
});
