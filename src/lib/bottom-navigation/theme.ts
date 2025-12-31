import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type BottomNavVariants = VariantProps<typeof bottomNav> & Classes<typeof bottomNav>;
export type BottomNavItemVariants = VariantProps<typeof bottomNavItem> & Classes<typeof bottomNavItem>;
export type BottomNavHeaderVariants = VariantProps<typeof bottomNavHeader> & Classes<typeof bottomNavHeader>;
export type BottomNavHeaderItemVariants = VariantProps<typeof bottomNavHeaderItem>;

export const bottomNav = tv({
  slots: {
    base: "w-full z-30 border-default bg-neutral-primary-soft",
    content: "grid h-full max-w-lg mx-auto",
    active: ""
  },
  variants: {
    position: {
      static: { base: "static" },
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      relative: { base: "relative" },
      sticky: { base: "sticky" }
    },
    navType: {
      default: { base: "h-16 bottom-0 start-0 border-t" },
      border: { base: "h-16 bottom-0 start-0 border-t" },
      application: {
        base: "h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 border rounded-full bottom-4 start-1/2"
      },
      pagination: {
        base: "bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 border-t start-1/2"
      },
      group: {
        base: "bottom-0 -translate-x-1/2 rtl:translate-x-1/2 border-t start-1/2"
      },
      card: { base: "bottom-0 start-0 h-16 border-t" },
      meeting: {
        base: "bottom-0 start-0 grid h-16 grid-cols-1 px-8 border-t md:grid-cols-3",
        inner: "flex items-center justify-center mx-auto"
      },
      video: {
        base: "bottom-0 start-0 grid h-24 grid-cols-1 px-8 border-t md:grid-cols-3",
        inner: "flex items-center w-full"
      }
    }
  },
  defaultVariants: {
    position: "fixed",
    navType: "default"
  }
});

export const bottomNavItem = tv({
  slots: {
    base: "inline-flex flex-col items-center justify-center",
    span: "text-sm"
  },
  variants: {
    navType: {
      default: {
        base: "px-5 hover:bg-neutral-secondary-medium group",
        span: "text-body group-hover:text-fg-brand"
      },
      border: {
        base: "px-5 border-default hover:bg-neutral-secondary-medium group border-x",
        span: "text-body group-hover:text-fg-brand"
      },
      application: {
        base: "hover:bg-neutral-secondary-medium group",
        span: "sr-only"
      },
      pagination: {
        base: "px-5 hover:bg-neutral-secondary-medium group",
        span: "sr-only"
      },
      group: {
        base: "p-4 hover:bg-neutral-secondary-medium group",
        span: "sr-only"
      },
      card: {
        base: "px-5 hover:bg-neutral-secondary-medium group",
        span: "text-body group-hover:text-fg-brand"
      },
      meeting: {
        base: "",
        span: ""
      },
      video: {
        base: "",
        span: ""
      }
    },
    appBtnPosition: {
      left: {
        base: "px-5 rounded-s-full"
      },
      middle: { base: "px-5" },
      right: {
        base: "px-5 rounded-e-full"
      }
    }
  },
  defaultVariants: {
    navType: "default",
    appBtnPosition: "middle"
  }
});

export const bottomNavHeader = tv({
  slots: {
    base: "w-full",
    content: "grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-neutral-tertiary rounded-base"
  }
});

export const bottomNavHeaderItem = tv({
  base: "px-5 py-1.5 text-xs font-medium rounded-base",
  variants: {
    active: {
      true: "text-white bg-dark-strong",
      false: "text-body hover:bg-dark-strong hover:text-white"
    }
  }
});
