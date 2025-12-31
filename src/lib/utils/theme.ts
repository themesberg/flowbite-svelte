import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type CloseButtonVariants = VariantProps<typeof closeButton> & Classes<typeof closeButton>;

export const closeButton = tv({
  slots: {
    base: "focus:outline-hidden whitespace-normal disabled:cursor-not-allowed disabled:opacity-50 ms-auto rounded focus:ring-2 inline-flex items-center justify-center shrink-0",
    svg: ""
  },
  variants: {
    color: {
      brand: { base: "bg-brand-softer text-fg-brand-strong focus:ring-brand-medium hover:bg-brand-medium" },
      alternative: { base: "bg-neutral-primary-soft text-fg-brand focus:ring-brand-soft hover:bg-brand-soft" },
      gray: { base: "bg-neutral-secondary-medium text-heading focus:ring-gray hover:bg-neutral-tertiary" },
      danger: { base: "bg-danger-soft text-fg-danger-strong focus:ring-danger-medium hover:bg-danger-medium" },
      success: { base: "bg-success-soft text-fg-success-strong focus:ring-success-medium hover:bg-success-medium" },
      warning: { base: "bg-warning-soft text-fg-warning focus:ring-warning-medium hover:bg-warning-medium" }
    },
    size: {
      xs: "p-0 h-4 w-4",
      sm: "p-0.5 h-6 w-6",
      md: "p-1.5 h-8 w-8",
      lg: "p-2.5 h-10 w-10"
    }
  },
  defaultVariants: {
    color: "gray",
    size: "md"
  },
  compoundVariants: [
    {
      size: "xs",
      class: {
        svg: "w-2.5 h-2.5"
      }
    },
    {
      size: "sm",
      class: {
        svg: "w-3.5 h-3.5"
      }
    },
    {
      size: "md",
      class: {
        svg: "w-4 h-4"
      }
    },
    {
      size: "lg",
      class: {
        svg: "w-5 h-5"
      }
    }
  ]
});
