import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Define breakpoint type
export type NavbarBreakpoint = "sm" | "md" | "lg" | "xl";

// Variants
export type NavbarUlVariants = VariantProps<typeof navUl> & Classes<typeof navUl>;
export type NavbarHamburgerVariants = VariantProps<typeof navbarHamburger> & Classes<typeof navbarHamburger>;
export type NavbarVariants = VariantProps<typeof navbar> & Classes<typeof navbar>;
export type NavLiVariants = VariantProps<typeof navLi> & Classes<typeof navLi>;

export const navbar = tv({
  slots: {
    base: "",
    content: "relative w-full px-2 py-2.5 sm:px-4",
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

export const navUl = tv({
  slots: {
    base: "",
    list: "flex flex-col p-4 mt-0 rtl:space-x-reverse",
    active: "text-white bg-brand",
    nonActive: "text-heading hover:bg-neutral-tertiary"
  },
  variants: {
    breakpoint: {
      sm: {
        base: "w-full sm:block sm:w-auto",
        list: "sm:flex-row sm:text-sm sm:font-medium",
        active: "sm:bg-transparent sm:text-fg-brand",
        nonActive: "sm:hover:bg-transparent sm:border-0 sm:hover:text-fg-brand"
      },
      md: {
        base: "w-full md:block md:w-auto",
        list: "md:flex-row md:text-sm md:font-medium",
        active: "md:bg-transparent md:text-fg-brand",
        nonActive: "md:hover:bg-transparent md:border-0 md:hover:text-fg-brand"
      },
      lg: {
        base: "w-full lg:block lg:w-auto",
        list: "lg:flex-row lg:text-sm lg:font-medium",
        active: "lg:bg-transparent lg:text-fg-brand",
        nonActive: "lg:hover:bg-transparent lg:border-0 lg:hover:text-fg-brand"
      },
      xl: {
        base: "w-full xl:block xl:w-auto",
        list: "xl:flex-row xl:text-sm xl:font-medium",
        active: "xl:bg-transparent xl:text-fg-brand",
        nonActive: "xl:hover:bg-transparent xl:border-0 xl:hover:text-fg-brand"
      }
    },
    hidden: {
      false: {
        base: "absolute top-full left-0 right-0 z-50 w-full",
        list: "border border-default rounded-base bg-neutral-secondary-soft shadow-lg text-heading"
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
        list: "sm:border-none sm:rounded-none sm:bg-inherit sm:shadow-none"
      }
    },
    {
      breakpoint: "md",
      hidden: false,
      class: {
        base: "md:static md:z-auto",
        list: "md:border-none md:rounded-none md:bg-inherit md:shadow-none"
      }
    },
    {
      breakpoint: "lg",
      hidden: false,
      class: {
        base: "lg:static lg:z-auto",
        list: "lg:border-none lg:rounded-none lg:bg-inherit lg:shadow-none"
      }
    },
    {
      breakpoint: "xl",
      hidden: false,
      class: {
        base: "xl:static xl:z-auto",
        list: "xl:border-none xl:rounded-none xl:bg-inherit xl:shadow-none"
      }
    }
  ],
  defaultVariants: {
    breakpoint: "md"
  }
});

export const navLi = tv({
  slots: {
    base: "",
    item: "block py-2 pe-4 ps-3 rounded"
  },
  variants: {
    breakpoint: {
      sm: "sm:p-2 sm:border-0",
      md: "md:p-2 md:border-0",
      lg: "lg:p-2 lg:border-0",
      xl: "xl:p-2 xl:border-0"
    },
    hidden: {
      false: "text-heading hover:bg-neutral-tertiary"
    }
  },
  compoundVariants: [
    {
      breakpoint: "sm",
      hidden: false,
      class: "sm:hover:bg-transparent sm:hover:text-fg-brand"
    },
    {
      breakpoint: "md",
      hidden: false,
      class: "md:hover:bg-transparent md:hover:text-fg-brand"
    },
    {
      breakpoint: "lg",
      hidden: false,
      class: "lg:hover:bg-transparent lg:hover:text-fg-brand"
    },
    {
      breakpoint: "xl",
      hidden: false,
      class: "xl:hover:bg-transparent xl:hover:text-fg-brand"
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
