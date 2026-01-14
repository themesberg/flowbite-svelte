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
      warning: { base: "bg-warning-soft text-fg-warning" },
      primary: { base: "bg-primary-soft text-fg-primary" },
      secondary: { base: "bg-secondary-soft text-fg-secondary" },
      red: { base: "bg-red-soft text-fg-red" },
      orange: { base: "bg-orange-soft text-fg-orange" },
      amber: { base: "bg-amber-soft text-fg-amber" },
      yellow: { base: "bg-yellow-soft text-fg-yellow" },
      lime: { base: "bg-lime-soft text-fg-lime" },
      green: { base: "bg-green-soft text-fg-green" },
      emerald: { base: "bg-emerald-soft text-fg-emerald" },
      teal: { base: "bg-teal-soft text-fg-teal" },
      cyan: { base: "bg-cyan-soft text-fg-cyan" },
      sky: { base: "bg-sky-soft text-fg-sky" },
      blue: { base: "bg-blue-soft text-fg-blue" },
      indigo: { base: "bg-indigo-soft text-fg-indigo" },
      violet: { base: "bg-violet-soft text-fg-violet" },
      fuchsia: { base: "bg-fuchsia-soft text-fg-fuchsia" },
      purple: { base: "bg-purple-soft text-fg-purple" },
      pink: { base: "bg-pink-soft text-fg-pink" },
      rose: { base: "bg-rose-soft text-fg-rose" }
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
      border: true,
      color: "primary",
      class: "border border-primary-subtle"
    },
    {
      border: true,
      color: "secondary",
      class: "border border-secondary-subtle"
    },
    {
      border: true,
      color: "red",
      class: "border border-red-subtle"
    },
    {
      border: true,
      color: "orange",
      class: "border border-orange-subtle"
    },
    {
      border: true,
      color: "amber",
      class: "border border-amber-subtle"
    },
    {
      border: true,
      color: "yellow",
      class: "border border-yellow-subtle"
    },
    {
      border: true,
      color: "lime",
      class: "border border-lime-subtle"
    },
    {
      border: true,
      color: "green",
      class: "border border-green-subtle"
    },
    {
      border: true,
      color: "emerald",
      class: "border border-emerald-subtle"
    },
    {
      border: true,
      color: "teal",
      class: "border border-teal-subtle"
    },
    {
      border: true,
      color: "cyan",
      class: "border border-cyan-subtle"
    },
    {
      border: true,
      color: "sky",
      class: "border border-sky-subtle"
    },
    {
      border: true,
      color: "blue",
      class: "border border-blue-subtle"
    },
    {
      border: true,
      color: "indigo",
      class: "border border-indigo-subtle"
    },
    {
      border: true,
      color: "violet",
      class: "border border-violet-subtle"
    },
    {
      border: true,
      color: "purple",
      class: "border border-purple-subtle"
    },
    {
      border: true,
      color: "fuchsia",
      class: "border border-fuchsia-subtle"
    },
    {
      border: true,
      color: "pink",
      class: "border border-pink-subtle"
    },
    {
      border: true,
      color: "rose",
      class: "border border-rose-subtle"
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
    },
    {
      href: true,
      color: "primary",
      class: "hover:bg-primary-medium"
    },
    {
      href: true,
      color: "secondary",
      class: "hover:bg-secondary-medium"
    },
    {
      href: true,
      color: "red",
      class: "hover:bg-red-medium"
    },
    {
      href: true,
      color: "orange",
      class: "hover:bg-orange-medium"
    },
    {
      href: true,
      color: "amber",
      class: "hover:bg-amber-medium"
    },
    {
      href: true,
      color: "yellow",
      class: "hover:bg-yellow-medium"
    },
    {
      href: true,
      color: "lime",
      class: "hover:bg-lime-medium"
    },
    {
      href: true,
      color: "green",
      class: "hover:bg-green-medium"
    },
    {
      href: true,
      color: "emerald",
      class: "hover:bg-emerald-medium"
    },
    {
      href: true,
      color: "teal",
      class: "hover:bg-teal-medium"
    },
    {
      href: true,
      color: "cyan",
      class: "hover:bg-cyan-medium"
    },
    {
      href: true,
      color: "sky",
      class: "hover:bg-sky-medium"
    },
    {
      href: true,
      color: "blue",
      class: "hover:bg-blue-medium"
    },
    {
      href: true,
      color: "indigo",
      class: "hover:bg-indigo-medium"
    },
    {
      href: true,
      color: "violet",
      class: "hover:bg-violet-medium"
    },
    {
      href: true,
      color: "purple",
      class: "hover:bg-purple-medium"
    },
    {
      href: true,
      color: "fuchsia",
      class: "hover:bg-fuchsia-medium"
    },
    {
      href: true,
      color: "pink",
      class: "hover:bg-pink-medium"
    },
    {
      href: true,
      color: "rose",
      class: "hover:bg-rose-medium"
    }
  ],
  defaultVariants: {
    color: "brand",
    size: "small",
    rounded: false
  }
});
