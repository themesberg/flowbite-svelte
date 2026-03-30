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
    base: "top-0 left-0 z-50 w-64 transition-transform",
    active: "flex items-center group-has-[ul]:ms-6 px-2 py-1.5 m-1 text-base font-normal text-heading bg-neutral-tertiary rounded-base hover:bg-neutral-tertiary",
    nonactive: "flex items-center group-has-[ul]:ms-6 px-2 py-1.5 m-1 text-base font-normal text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand",
    content: "overflow-y-auto px-3 py-4 bg-neutral-primary-soft border-e border-default",
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
    base: "inline-flex items-center text-sm text-heading bg-transparent hover:bg-neutral-secondary-medium focus:outline-hidden focus:ring-4 focus:ring-neutral-tertiary rounded-base",
    icon: "h-6 w-6 m-2"
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
    logo: "h-6 me-3 sm:h-7",
    brandName: "self-center text-xl font-semibold whitespace-nowrap text-heading"
  }
});

export const sidebarCta = tv({
  slots: {
    base: "p-4 mt-6 bg-brand-softer border border-brand-subtle rounded-base",
    labelWrapper: "flex items-center mb-3",
    badge: "bg-brand-soft text-fg-brand-strong text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm border border-brand-subtle"
  }
});

export const sidebarDropdownWrapper = tv({
  slots: {
    base: "group",
    trigger: "flex items-center p-2 w-full text-base font-normal text-body rounded-base transition duration-75 group hover:bg-neutral-tertiary hover:text-fg-brand",
    label: "flex-1 ms-3 text-left whitespace-nowrap",
    icon: "h-3 w-3 text-heading",
    list: "py-2 space-y-0"
  }
});

export const sidebarItem = tv({
  slots: {
    base: "",
    link: "flex items-center group-has-[ul]:ms-6 px-2 py-1.5 m-1 text-base font-normal rounded-base",
    label: "ms-3"
  },
  variants: {
    active: {
      true: {
        link: "text-heading bg-neutral-tertiary hover:bg-neutral-tertiary"
      },
      false: {
        link: "text-body hover:bg-neutral-tertiary hover:text-fg-brand"
      }
    }
  },
  defaultVariants: {
    active: false
  }
});
