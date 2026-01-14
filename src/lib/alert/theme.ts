import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type AlertVariants = VariantProps<typeof alert>;

export const alert = tv({
  base: "flex items-start sm:items-center p-4 gap-3 text-sm",
  variants: {
    color: {
      brand: "text-fg-brand-strong bg-brand-softer",
      alternative: "bg-neutral-primary-soft text-heading",
      gray: "text-heading bg-neutral-secondary-medium",
      danger: "text-fg-danger-strong bg-danger-soft",
      success: "text-fg-success-strong bg-success-soft",
      warning: "text-fg-warning bg-warning-soft",
      primary: "text-fg-primary-strong bg-primary-soft",
      secondary: "text-fg-secondary-strong bg-secondary-soft",
      red: "text-fg-red-strong bg-red-soft",
      orange: "text-fg-orange-strong bg-orange-soft",
      amber: "text-fg-amber-strong bg-amber-soft",
      yellow: "text-fg-yellow-strong bg-yellow-soft",
      lime: "text-fg-lime-strong bg-lime-soft",
      green: "text-fg-green-strong bg-green-soft",
      emerald: "text-fg-emerald-strong bg-emerald-soft",
      teal: "text-fg-teal-strong bg-teal-soft",
      cyan: "text-fg-cyan-strong bg-cyan-soft",
      sky: "text-fg-sky-strong bg-sky-soft",
      blue: "text-fg-blue-strong bg-blue-soft",
      indigo: "text-fg-indigo-strong bg-indigo-soft",
      violet: "text-fg-violet-strong bg-violet-soft",
      purple: "text-fg-purple-strong bg-purple-soft",
      fuchsia: "text-fg-fuchsia-strong bg-fuchsia-soft",
      pink: "text-fg-pink-strong bg-pink-soft",
      rose: "text-fg-rose-strong bg-rose-soft"
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
      color: "gray",
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
      color: "gray",
      class: "border-dark-subtle"
    },
    // primary secondary amber blue cyan emerald fuchsia gray green indigo lime orange pink purple red rose sky teal violet yellow
    {
      border: true,
      color: "primary",
      class: "border-primary-subtle"
    },
    {
      border: true,
      color: "secondary",
      class: "border-secondary-subtle"
    },
    {
      border: true,
      color: "amber",
      class: "border-amber-subtle"
    },
    {
      border: true,
      color: "blue",
      class: "border-blue-subtle"
    },
    {
      border: true,
      color: "cyan",
      class: "border-cyan-subtle"
    },
    {
      border: true,
      color: "emerald",
      class: "border-emerald-subtle"
    },
    {
      border: true,
      color: "fuchsia",
      class: "border-fuchsia-subtle"
    },
    {
      border: true,
      color: "green",
      class: "border-green-subtle"
    },
    {
      border: true,
      color: "indigo",
      class: "border-indigo-subtle"
    },
    {
      border: true,
      color: "lime",
      class: "border-lime-subtle"
    },
    {
      border: true,
      color: "orange",
      class: "border-orange-subtle"
    },
    {
      border: true,
      color: "pink",
      class: "border-pink-subtle"
    },
    {
      border: true,
      color: "purple",
      class: "border-purple-subtle"
    },
    {
      border: true,
      color: "red",
      class: "border-red-subtle"
    },
    {
      border: true,
      color: "rose",
      class: "border-rose-subtle"
    },
    {
      border: true,
      color: "sky",
      class: "border-sky-subtle"
    },
    {
      border: true,
      color: "teal",
      class: "border-teal-subtle"
    },
    {
      border: true,
      color: "violet",
      class: "border-violet-subtle"
    },
    {
      border: true,
      color: "yellow",
      class: "border-yellow-subtle"
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
      color: "primary",
      class: "border-primary-subtle"
    },
    {
      borderAccent: true,
      color: "secondary",
      class: "border-secondary-subtle"
    },
    {
      borderAccent: true,
      color: "amber",
      class: "border-amber-subtle"
    },
    {
      borderAccent: true,
      color: "blue",
      class: "border-blue-subtle"
    },
    {
      borderAccent: true,
      color: "cyan",
      class: "border-cyan-subtle"
    },
    {
      borderAccent: true,
      color: "emerald",
      class: "border-emerald-subtle"
    },
    {
      borderAccent: true,
      color: "fuchsia",
      class: "border-fuchsia-subtle"
    },
    {
      borderAccent: true,
      color: "gray",
      class: "border-gray-subtle"
    },
    {
      borderAccent: true,
      color: "green",
      class: "border-green-subtle"
    },
    {
      borderAccent: true,
      color: "indigo",
      class: "border-indigo-subtle"
    },
    {
      borderAccent: true,
      color: "lime",
      class: "border-lime-subtle"
    },
    {
      borderAccent: true,
      color: "orange",
      class: "border-orange-subtle"
    },
    {
      borderAccent: true,
      color: "pink",
      class: "border-pink-subtle"
    },
    {
      borderAccent: true,
      color: "purple",
      class: "border-purple-subtle"
    },
    {
      borderAccent: true,
      color: "red",
      class: "border-red-subtle"
    },
    {
      borderAccent: true,
      color: "rose",
      class: "border-rose-subtle"
    },
    {
      borderAccent: true,
      color: "sky",
      class: "border-sky-subtle"
    },
    {
      borderAccent: true,
      color: "teal",
      class: "border-teal-subtle"
    },
    {
      borderAccent: true,
      color: "violet",
      class: "border-violet-subtle"
    },
    {
      borderAccent: true,
      color: "yellow",
      class: "border-yellow-subtle"
    }
  ],
  defaultVariants: {
    color: "brand",
    rounded: true
  }
});
