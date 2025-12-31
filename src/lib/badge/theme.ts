import type { Classes } from "$lib/theme-provider/themeUtils";
import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type BadgeVariants = VariantProps<typeof badge> & Classes<typeof badge>;

export const badge = tv({
  slots: {
    link: "flex items-center",
    base: "inline-flex items-center justify-center font-medium rounded leading-none"
  },
  variants: {
    color: {
      brand: { base: "bg-brand-softer text-fg-brand-strong " },
      alternative: { base: "bg-neutral-primary-soft text-heading" },
      gray: { base: "bg-neutral-secondary-medium text-heading " },
      danger: { base: "bg-danger-soft text-fg-danger-strong" },
      success: { base: "bg-success-soft text-fg-success-strong" },
      warning: { base: "bg-warning-soft text-fg-warning" }
    },
    size: {
      small: "text-xs px-1.5 py-0.5",
      large: "text-sm px-2 py-1"
    },
    border: {
      true: { base: "border" }
    },
    rounded: {
      true: { base: "rounded-full" }
    },
    // Used for compound variant matching (hover states)
    href: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      border: true,
      color: "brand",
      class: "border border-brand-subtle"
    },
    {
      border: true,
      color: "alternative",
      class: "border border-default"
    },
    {
      border: true,
      color: "gray",
      class: "border border-default-medium"
    },
    {
      border: true,
      color: "danger",
      class: "border border-danger-subtle"
    },
    {
      border: true,
      color: "success",
      class: "border border-success-subtle"
    },
    {
      border: true,
      color: "warning",
      class: "border border-warning-subtle"
    },
    {
      href: true,
      color: "brand",
      class: "hover:bg-brand-medium"
    },
    {
      href: true,
      color: "alternative",
      class: "hover:bg-neutral-secondary-medium"
    },
    {
      href: true,
      color: "gray",
      class: "hover:bg-neutral-tertiary-medium"
    },
    {
      href: true,
      color: "danger",
      class: "hover:bg-danger-medium"
    },
    {
      href: true,
      color: "success",
      class: "hover:bg-success-medium"
    },
    {
      href: true,
      color: "warning",
      class: "hover:bg-warning-medium"
    }
  ],
  defaultVariants: {
    color: "brand",
    size: "small",
    rounded: false
  }
});
