import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type RadioVariants = VariantProps<typeof radio> & Classes<typeof radio>;

export const radio = tv({
  slots: {
    input: "w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none me-2",
    label: "flex items-center"
  },
  variants: {
    color: {
      // "brand" | "danger" | "success" | "warning" | "dark" | "neutral"
      brand: {
        input: ""
      },
      dark: {
        input: "checked:border-default-strong focus:ring-neutral-tertiary"
      },
      danger: { input: "checked:border-danger focus:ring-danger-soft" },
      neutral: {
        input: "checked:border-warning focus:ring-warning-soft"
      },
      warning: {
        input: "checked:border-warning focus:ring-warning-soft"
      },
      success: {
        input: "checked:border-success focus:ring-success-soft"
      }
    },
    tinted: {
      true: {},
      false: {}
    },
    custom: {
      true: { input: "sr-only peer" },
      false: { input: "relative" }
    },
    inline: {
      true: { label: "inline-flex" },
      false: { label: "flex" }
    }
  },
  defaultVariants: {
    color: "brand"
  }
});

export const radioButton = tv({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    }
  },
  defaultVariants: {
    inline: true
  }
});
