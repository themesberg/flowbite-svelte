import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type AlertVariants = VariantProps<typeof alert>;

export const alert = tv({
  base: "flex items-start sm:items-center p-4 gap-3 text-sm",
  variants: {
    color: {
      brand: "text-fg-brand-strong bg-brand-softer",
      danger: "text-fg-danger-strong bg-danger-soft",
      success: "text-fg-success-strong bg-success-soft",
      warning: "text-fg-warning bg-warning-soft",
      dark: "text-heading bg-neutral-secondary-medium",
      none: "" // For custom colors via class prop
    },
    listContent: {
      true: ""
    },
    borderAccent: {
      true: "border-t-4"
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
      listContent: true,
      color: "brand",
      class: "bg-brand-softer border border-brand-subtle"
    },
    {
      listContent: true,
      color: "danger",
      class: "bg-danger-soft border border-danger-subtle"
    },
    {
      listContent: true,
      color: "success",
      class: "bg-success-soft border border-success-subtle"
    },
    {
      listContent: true,
      color: "warning",
      class: "bg-warning-soft border border-warning-subtle"
    },
    {
      listContent: true,
      color: "dark",
      class: "bg-dark-soft border border-dark-subtle"
    },
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
    },
    {
      borderAccent: true,
      color: "brand",
      class: "border-brand-subtle"
    },
    {
      borderAccent: true,
      color: "danger",
      class: "border-danger-subtle"
    },
    {
      borderAccent: true,
      color: "success",
      class: "border-success-subtle"
    },
    {
      borderAccent: true,
      color: "warning",
      class: "border-warning-subtle"
    },
    {
      borderAccent: true,
      color: "dark",
      class: "border-dark-subtle"
    }
  ],
  defaultVariants: {
    color: "brand",
    rounded: true
  }
});
