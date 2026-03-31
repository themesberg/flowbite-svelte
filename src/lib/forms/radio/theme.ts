import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type RadioVariants = VariantProps<typeof radio> & Classes<typeof radio>;

export const radio = tv({
  slots: {
    input: "w-4 h-4 text-fg-brand bg-neutral-secondary-medium border border-default-medium focus:ring-2 focus:ring-brand-subtle me-2",
    label: "flex items-center"
  },
  variants: {
    color: {
      // "brand" | "danger" | "success" | "warning" | "dark" | "neutral"
      brand: {
        input: ""
      },
      dark: {
        input: "text-heading focus:ring-neutral-tertiary"
      },
      danger: { input: "text-danger focus:ring-danger-soft" },
      neutral: {
        input: "text-body focus:ring-neutral-tertiary"
      },
      warning: {
        input: "text-warning focus:ring-warning-soft"
      },
      success: {
        input: "text-success focus:ring-success-soft"
      }
    },
    tinted: {
      true: {},
      false: {}
    },
    custom: {
      true: { input: "sr-only peer" },
      false: {}
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
