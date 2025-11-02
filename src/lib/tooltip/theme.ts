import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type TooltipVariants = VariantProps<typeof tooltip>;

export const tooltip = tv({
  base: "absolute px-3 py-2 rounded-lg text-sm z-50 pointer-events-none",
  variants: {
    type: {
      light: "bg-white text-gray-800 dark:bg-white dark:text-gray-800 border border-gray-200 dark:border-gray-200",
      auto: "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700",
      dark: "bg-gray-800 text-white dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700",
      custom: ""
    },
    color: {
      // default: "bg-gray-800 dark:bg-gray-300 dark:text-gray-800",
      primary: "bg-primary-600 dark:bg-primary-600",
      secondary: "bg-secondary-600 dark:bg-secondary-600",
      gray: "bg-gray-600 dark:bg-gray-600",
      red: "bg-red-600 dark:bg-red-600",
      orange: "bg-orange-600 dark:bg-orange-600",
      amber: "bg-amber-600 dark:bg-amber-600",
      yellow: "bg-yellow-400 dark:bg-yellow-400",
      lime: "bg-lime-600 dark:bg-lime-600",
      green: "bg-green-600 dark:bg-green-600",
      emerald: "bg-emerald-600 dark:bg-emerald-600",
      teal: "bg-teal-600 dark:bg-teal-600",
      cyan: "bg-cyan-600 dark:bg-cyan-600",
      sky: "bg-sky-600 dark:bg-sky-600",
      blue: "bg-blue-600 dark:bg-blue-600",
      indigo: "bg-indigo-600 dark:bg-indigo-600",
      violet: "bg-violet-600 dark:bg-violet-600",
      purple: "bg-purple-600 dark:bg-purple-600",
      fuchsia: "bg-fuchsia-600 dark:bg-fuchsia-600",
      pink: "bg-pink-600 dark:bg-pink-600",
      rose: "bg-rose-800 dark:bg-rose-800"
    }
  },
  compoundVariants: [
    {
      color: ["primary", "secondary", "gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"],
      class: "border-0 dark:border-0"
    }
  ],
  defaultVariants: {
    type: "dark",
    color: undefined
  }
});
