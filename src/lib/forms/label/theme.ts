import { tv, type VariantProps } from "tailwind-variants";

export type LabelVariants = VariantProps<typeof label>;

export const label = tv({
  base: "text-sm rtl:text-right font-medium block",
  variants: {
    color: {
      disabled: "text-gray-500 dark:text-gray-500",
      primary: "text-primary-700 dark:text-primary-500",
      secondary: "text-secondary-700 dark:text-secondary-500",
      green: "text-green-700 dark:text-green-500",
      emerald: "text-emerald-700 dark:text-emerald-500",
      red: "text-red-700 dark:text-red-500",
      blue: "text-blue-700 dark:text-blue-500",
      yellow: "text-yellow-700 dark:text-yellow-500",
      orange: "text-orange-700 dark:text-orange-500",
      gray: "text-gray-700 dark:text-gray-200",
      teal: "text-teal-700 dark:text-teal-500",
      cyan: "text-cyan-700 dark:text-cyan-500",
      sky: "text-sky-700 dark:text-sky-500",
      indigo: "text-indigo-700 dark:text-indigo-500",
      lime: "text-lime-700 dark:text-lime-500",
      amber: "text-amber-700 dark:text-amber-500",
      violet: "text-violet-700 dark:text-violet-500",
      purple: "text-purple-700 dark:text-purple-500",
      fuchsia: "text-fuchsia-700 dark:text-fuchsia-500",
      pink: "text-pink-700 dark:text-pink-500",
      rose: "text-rose-700 dark:text-rose-500"
    }
  }
});
