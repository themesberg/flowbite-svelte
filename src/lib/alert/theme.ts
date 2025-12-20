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
      none: "", // For custom colors via class prop
      // Legacy colors for backward compatibility
      primary: "bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-400",
      secondary: "bg-secondary-50 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-400",
      gray: "bg-gray-100 text-gray-500 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300",
      red: "bg-red-100 text-red-500 focus:ring-red-400 dark:bg-red-200 dark:text-red-600",
      orange: "bg-orange-100 text-orange-500 focus:ring-orange-400 dark:bg-orange-200 dark:text-orange-600",
      amber: "bg-amber-100 text-amber-500 focus:ring-amber-400 dark:bg-amber-200 dark:text-amber-600",
      yellow: "bg-yellow-100 text-yellow-500 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600",
      lime: "bg-lime-100 text-lime-500 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600",
      green: "bg-green-100 text-green-500 focus:ring-green-400 dark:bg-green-200 dark:text-green-600",
      emerald: "bg-emerald-100 text-emerald-500 focus:ring-emerald-400 dark:bg-emerald-200 dark:text-emerald-600",
      teal: "bg-teal-100 text-teal-500 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600",
      cyan: "bg-cyan-100 text-cyan-500 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600",
      sky: "bg-sky-100 text-sky-500 focus:ring-sky-400 dark:bg-sky-200 dark:text-sky-600",
      blue: "bg-blue-100 text-blue-500 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600",
      indigo: "bg-indigo-100 text-indigo-500 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600",
      violet: "bg-violet-100 text-violet-500 focus:ring-violet-400 dark:bg-violet-200 dark:text-violet-600",
      purple: "bg-purple-100 text-purple-500 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600",
      fuchsia: "bg-fuchsia-100 text-fuchsia-500 focus:ring-fuchsia-400 dark:bg-fuchsia-200 dark:text-fuchsia-600",
      pink: "bg-pink-100 text-pink-500 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600",
      rose: "bg-rose-100 text-rose-500 focus:ring-rose-400 dark:bg-rose-200 dark:text-rose-600"
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
