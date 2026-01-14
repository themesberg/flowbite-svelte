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
      primary: "bg-primary-50 dark:bg-primary-800 text-primary-800 dark:text-primary-400",
      secondary: "bg-secondary-50 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-400",
      red: "bg-red-100 text-red-500 dark:bg-red-200 dark:text-red-600",
      orange: "bg-orange-100 text-orange-500 dark:bg-orange-200 dark:text-orange-600",
      amber: "bg-amber-100 text-amber-500 dark:bg-amber-200 dark:text-amber-600",
      yellow: "bg-yellow-100 text-yellow-500 dark:bg-yellow-200 dark:text-yellow-600",
      lime: "bg-lime-100 text-lime-500 dark:bg-lime-200 dark:text-lime-600",
      green: "bg-green-100 text-green-500 dark:bg-green-200 dark:text-green-600",
      emerald: "bg-emerald-100 text-emerald-500 dark:bg-emerald-200 dark:text-emerald-600",
      teal: "bg-teal-100 text-teal-500 dark:bg-teal-200 dark:text-teal-600",
      cyan: "bg-cyan-100 text-cyan-500 dark:bg-cyan-200 dark:text-cyan-600",
      sky: "bg-sky-100 text-sky-500 dark:bg-sky-200 dark:text-sky-600",
      blue: "bg-blue-100 text-blue-500 dark:bg-blue-200 dark:text-blue-600",
      indigo: "bg-indigo-100 text-indigo-500 dark:bg-indigo-200 dark:text-indigo-600",
      violet: "bg-violet-100 text-violet-500 dark:bg-violet-200 dark:text-violet-600",
      purple: "bg-purple-100 text-purple-500 dark:bg-purple-200 dark:text-purple-600",
      fuchsia: "bg-fuchsia-100 text-fuchsia-500 dark:bg-fuchsia-200 dark:text-fuchsia-600",
      pink: "bg-pink-100 text-pink-500 dark:bg-pink-200 dark:text-pink-600",
      rose: "bg-rose-100 text-rose-500 dark:bg-rose-200 dark:text-rose-600"
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
    },
  ],
  defaultVariants: {
    color: "brand",
    rounded: true
  }
});
