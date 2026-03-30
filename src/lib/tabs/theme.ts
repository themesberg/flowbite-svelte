import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type TabsVaraints = VariantProps<typeof tabs> & Classes<typeof tabs>;
export type TabItemVariants = VariantProps<typeof tabItem> & Classes<typeof tabItem>;

export const tabs = tv({
  slots: {
    base: "flex space-x-2 rtl:space-x-reverse",
    content: "p-4 bg-neutral-secondary-soft rounded-base mt-4",
    divider: "h-px bg-default",
    active: "p-4 text-fg-brand bg-neutral-secondary-soft active",
    inactive: "p-4 text-body hover:text-heading hover:bg-neutral-secondary-soft"
  },
  variants: {
    tabStyle: {
      full: {
        active: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-heading bg-neutral-secondary-medium focus:ring-4 focus:ring-brand-medium focus:outline-hidden",
        inactive:
          "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-body bg-neutral-primary-soft hover:text-heading hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-brand-medium focus:outline-hidden"
      },
      pill: {
        active: "py-3 px-4 text-white bg-brand rounded-base",
        inactive: "py-3 px-4 text-body hover:text-heading hover:bg-neutral-secondary-soft rounded-base"
      },
      underline: {
        base: "-mb-px",
        active: "p-4 text-fg-brand border-b border-brand rounded-t-base active bg-transparent",
        inactive: "p-4 border-b border-transparent hover:text-fg-brand hover:border-brand rounded-t-base bg-transparent"
      },
      none: {
        active: "rounded-t-base",
        inactive: "rounded-t-base"
      }
    },
    hasDivider: {
      true: {}
    }
  },
  compoundVariants: [
    {
      tabStyle: ["full", "pill"],
      hasDivider: true,
      class: {
        divider: "hidden"
      }
    }
  ],
  defaultVariants: {
    tabStyle: "none",
    hasDivider: true
  }
});

export const tabItem = tv({
  slots: {
    base: "group focus-within:z-10",
    button: "inline-block text-sm font-medium text-center disabled:cursor-not-allowed"
  },
  variants: {
    open: {
      true: {
        button: "active"
      }
    },
    disabled: {
      true: {
        button: "cursor-not-allowed"
      }
    }
  },
  compoundVariants: [
    {
      open: true,
      class: {
        button: "" // We'll merge this with activeClasses from context
      }
    },
    {
      open: false,
      class: {
        button: "" // We'll merge this with inactiveClasses from context
      }
    }
  ],
  defaultVariants: {
    open: false,
    disabled: false
  }
});
