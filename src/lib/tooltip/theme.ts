import { tv, type VariantProps } from "tailwind-variants";

export type TooltipVariants = VariantProps<typeof tooltip>;

export const tooltip = tv({
  slots: {
    base: "absolute px-3 py-2 rounded-lg text-sm z-50 pointer-events-none",
    arrowBase: ""
  },
  variants: {
    type: {
      light: { base: "bg-white text-gray-800 dark:bg-white dark:text-gray-800 border border-gray-200 dark:border-gray-200" },
      auto: { base: "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700" },
      dark: { base: "bg-gray-800 text-white dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700" }
    },
    color: {
      // default: { base: "bg-gray-800 dark:bg-gray-300 dark:text-gray-800" },
      primary: { base: "bg-primary-600 dark:bg-primary-600" },
      secondary: { base: "bg-secondary-600 dark:bg-secondary-600" },
      gray: { base: "bg-gray-600 dark:bg-gray-600" },
      red: { base: "bg-red-600 dark:bg-red-600" },
      orange: { base: "bg-orange-600 dark:bg-orange-600" },
      amber: { base: "bg-amber-600 dark:bg-amber-600" },
      yellow: { base: "bg-yellow-400 dark:bg-yellow-400" },
      lime: { base: "bg-lime-600 dark:bg-lime-600" },
      green: { base: "bg-green-600 dark:bg-green-600" },
      emerald: { base: "bg-emerald-600 dark:bg-emerald-600" },
      teal: { base: "bg-teal-600 dark:bg-teal-600" },
      cyan: { base: "bg-cyan-600 dark:bg-cyan-600" },
      sky: { base: "bg-sky-600 dark:bg-sky-600" },
      blue: { base: "bg-blue-600 dark:bg-blue-600" },
      indigo: { base: "bg-indigo-600 dark:bg-indigo-600" },
      violet: { base: "bg-violet-600 dark:bg-violet-600" },
      purple: { base: "bg-purple-600 dark:bg-purple-600" },
      fuchsia: { base: "bg-fuchsia-600 dark:bg-fuchsia-600" },
      pink: { base: "bg-pink-600 dark:bg-pink-600" },
      rose: { base: "bg-rose-800 dark:bg-rose-800" }
    }
  }
});
