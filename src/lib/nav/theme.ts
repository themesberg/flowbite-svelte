import { tv } from "tailwind-variants";

export const navbar = tv({
  slots: {
    base: "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2.5 w-full",
    container: "mx-auto flex flex-wrap items-center justify-between",
    toggleButton: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    menuContainer: "w-full",
    activeLink: "block py-2 px-3 text-white bg-primary-700 rounded-sm dark:text-white",
    inactiveLink: "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    fluid: {
      true: {
        container: "w-full"
      },
      false: {
        container: "container"
      }
    },
    breakPoint: {
      md: {
        container: "max-w-(--breakpoint-xl)",
        toggleButton: "md:hidden",
        menuContainer: "md:block md:w-auto"
      },
      lg: {
        container: "max-w-(--breakpoint-xl)",
        toggleButton: "lg:hidden",
        menuContainer: "lg:block lg:w-auto"
      },
      xl: {
        container: "max-w-(--breakpoint-xl)",
        toggleButton: "xl:hidden",
        menuContainer: "xl:block xl:w-auto"
      },
      xxl: {
        container: "w-full",
        toggleButton: "2xl:hidden",
        menuContainer: "2xl:block 2xl:w-auto"
      }
    },
    navStatus: {
      true: {
        menuContainer: "block"
      },
      false: {
        menuContainer: "hidden"
      }
    }
  },
  defaultVariants: {
    fluid: false,
    breakPoint: "md",
    navStatus: false
  }
});

export const navUl = tv({
  base: "font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700",
  variants: {
    breakPoint: {
      md: "md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900",
      lg: "lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 lg:dark:bg-gray-900",
      xl: "xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 lg:p-0 xl:dark:bg-gray-900",
      xxl: "2xl:mt-0 2xl:flex-row 2xl:space-x-8 2xl:border-0 2xl:p-0 2xl:dark:bg-gray-900"
    }
  }
});

export const navbrand = tv({
  slots: {
    base: "flex items-center space-x-3 rtl:space-x-reverse",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl"
  }
});

export const navLi = tv({
  slots: {
    base: "list-none",
    link: "block py-2 pl-3 pr-4 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    active: {
      true: {
        link: "bg-primary-700 text-white"
      }
    },
    breakPoint: {
      md: {
        link: "md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 md:dark:hover:bg-transparent"
      },
      lg: {
        link: "lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-primary-500 lg:dark:hover:bg-transparent"
      },
      xl: {
        link: "xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 xl:dark:hover:text-primary-500 xl:dark:hover:bg-transparent"
      },
      xxl: {
        link: "2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-primary-700 2xl:p-0 2xl:dark:hover:text-primary-500 2xl:dark:hover:bg-transparent"
      }
    }
  },
  compoundVariants: [
    {
      active: true,
      breakPoint: "md",
      class: {
        link: "md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "lg",
      class: {
        link: "lg:bg-transparent lg:text-primary-700 lg:p-0 lg:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "xl",
      class: {
        link: "xl:bg-transparent xl:text-primary-700 xl:p-0 xl:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "xxl",
      class: {
        link: "2xl:bg-transparent 2xl:text-primary-700 2xl:p-0 2xl:dark:text-primary-500"
      }
    }
  ],
  defaultVariants: {
    breakPoint: "md",
    active: false
  }
});

export const navcontainer = tv({
  base: "mx-auto flex flex-wrap justify-between items-center",
  variants: {
    fluid: {
      true: "w-full",
      false: "container"
    }
  }
});

export const navhamburger = tv({
  base: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
  variants: {
    breakPoint: {
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      xxl: "2xl:hidden"
    }
  }
});
