import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type AlertVariants = VariantProps<typeof alert>;

export const alert = tv({
  base: "flex items-start sm:items-center p-4 gap-3 text-sm rounded-base",
  variants: {
    color: {
      brand: "text-fg-brand-strong bg-brand-softer",
      danger: "text-fg-danger-strong bg-danger-soft",
      success: "text-fg-success-strong bg-success-soft",
      warning: "text-fg-warning bg-warning-soft",
      dark: "text-heading bg-neutral-secondary-medium",
      none: "" // For custom colors via class prop
    },
    rounded: {
      true: "rounded-base"
    },
    border: {
      true: "border"
    },
    icon: {
      true: "flex items-center"
    },
    dismissable: {
      true: "flex items-center"
    }
  },
  compoundVariants: [
    {
      border: true,
      color: "brand",
      class: "border-brand-subtle"
    },
    {
      border: true,
      color: "danger",
      class: "border-danger-subtle"
    },
    {
      border: true,
      color: "success",
      class: "border-success-subtle"
    },
    {
      border: true,
      color: "warning",
      class: "border-warning-subtle"
    },
    {
      border: true,
      color: "dark",
      class: "border-dark-subtle"
    }
  ],
  defaultVariants: {
    color: "brand",
    rounded: true
  }
});
