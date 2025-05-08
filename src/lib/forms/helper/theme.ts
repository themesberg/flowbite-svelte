import { tv, type VariantProps } from "tailwind-variants";

export type HelperVariants = VariantProps<typeof helper>;

export const helper = tv({
  base: "text-xs font-normal text-gray-500 dark:text-gray-300",
  variants: {
    color: {
      disabled: "text-gray-400 dark:text-gray-500",
      primary: "text-primary-500 dark:text-primary-400",
      secondary: "text-secondary-500 dark:text-secondary-400",
      green: "text-green-500 dark:text-green-400",
      emerald: "text-emerald-500 dark:text-emerald-400",
      red: "text-red-500 dark:text-red-400",
      blue: "text-blue-500 dark:text-blue-400",
      yellow: "text-yellow-500 dark:text-yellow-400",
      orange: "text-orange-500 dark:text-orange-400",
      gray: "text-gray-500 dark:text-gray-400",
      teal: "text-teal-500 dark:text-teal-400",
      cyan: "text-cyan-500 dark:text-cyan-400",
      sky: "text-sky-500 dark:text-sky-400",
      indigo: "text-indigo-500 dark:text-indigo-400",
      lime: "text-lime-500 dark:text-lime-400",
      amber: "text-amber-500 dark:text-amber-400",
      violet: "text-violet-500 dark:text-violet-400",
      purple: "text-purple-500 dark:text-purple-400",
      fuchsia: "text-fuchsia-500 dark:text-fuchsia-400",
      pink: "text-pink-500 dark:text-pink-400",
      rose: "text-rose-500 dark:text-rose-400"
    }
  }
});
