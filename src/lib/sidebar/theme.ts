import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type SidebarVariants = VariantProps<typeof sidebar> & Classes<typeof sidebar>;
export type SidebarCtaVariants = VariantProps<typeof sidebarCta> & Classes<typeof sidebarCta>;
export type SidebarBrandVariants = VariantProps<typeof sidebarBrand> & Classes<typeof sidebarBrand>;
export type SidebarDropdownWrapperVariants = VariantProps<typeof sidebarDropdownWrapper> & Classes<typeof sidebarDropdownWrapper>;
export type SidebarButtonVariants = VariantProps<typeof sidebarButton> & Classes<typeof sidebarButton>;
export type SidebarItemVariants = VariantProps<typeof sidebarItem> & Classes<typeof sidebarItem>;

export const sidebar = tv({
  slots: {
    base: "top-0 left-0 z-50 w-64 transition-transform bg-gray-50 dark:bg-gray-800",
    active:
      "flex items-center group-has-[ul]:ms-6 px-2 py-1.5 m-1 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    nonactive: "flex items-center group-has-[ul]:ms-6 px-2 py-1.5 m-1 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    div: "overflow-y-auto px-3 py-4 bg-gray-50 dark:bg-gray-800",
    backdrop: "fixed top-0 start-0 z-40 w-full h-full"
  },
  variants: {
    position: {
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      static: { base: "static" }
    },
    isOpen: {
      true: "block",
      false: "hidden"
    },
    breakpoint: {
      sm: { base: "sm:block" },
      md: { base: "md:block" },
      lg: { base: "lg:block" },
      xl: { base: "xl:block" },
      "2xl": { base: "2xl:block" }
    },
    alwaysOpen: {
      true: { base: "block" } // Always display the sidebar when alwaysOpen is true
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 opacity-75" }
    }
  },
  compoundVariants: [
    // When alwaysOpen is true, override the breakpoint display classes
    {
      alwaysOpen: true,
      class: {
        base: "!block"
      }
    }
  ]
});

export const sidebarButton = tv({
  slots: {
    base: "inline-flex items-center text-sm text-gray-500 rounded-base hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    svg: "h-6 w-6 m-2"
  },
  variants: {
    breakpoint: {
      sm: "sm:hidden",
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      "2xl": "2xl:hidden"
    }
  }
});

export const sidebarBrand = tv({
  slots: {
    base: "flex items-center ps-2.5 mb-5",
    img: "h-6 me-3 sm:h-7",
    span: "self-center text-xl font-semibold whitespace-nowrap dark:text-white"
  }
});

export const sidebarCta = tv({
  slots: {
    base: "p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900",
    div: "flex items-center mb-3",
    span: "bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-200 dark:text-primary-900"
  }
});

export const sidebarDropdownWrapper = tv({
  slots: {
    base: "group",
    btn: "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    span: "flex-1 ms-3 text-left whitespace-nowrap",
    svg: "h-3 w-3 text-gray-800 dark:text-white",
    ul: "py-2 space-y-0"
  }
});

export const sidebarItem = tv({
  slots: {
    base: "",
    link: "flex items-center group-has-[ul]:ms-6 px-2 py-1.5 m-1 text-base font-normal rounded-sm",
    span: "ms-3"
  },
  variants: {
    active: {
      true: {
        link: "text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      },
      false: {
        link: "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }
    }
  },
  defaultVariants: {
    active: false
  }
});
