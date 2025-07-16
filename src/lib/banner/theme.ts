import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export type BannerVariants = VariantProps<typeof banner>;

const banner = tv({
  slots: {
    base: "fixed z-50 flex justify-between p-4 mx-auto dark:bg-gray-700 dark:border-gray-600",
    insideDiv: "flex flex-col md:flex-row md:items-center gap-2 mx-auto",
    dismissable: "absolute end-2.5 top-2.5 md:static md:end-auto md:top-auto"
  },
  variants: {
    type: {
      top: {
        base: "top-0 start-0 w-full border-b border-gray-200 bg-gray-50"
      },
      bottom: {
        base: "bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50"
      }
    },
    color: {
      // 'primary' secondary, | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: { base: "bg-primary-50 dark:bg-primary-900" },
      secondary: { base: "bg-secondary-50 dark:bg-secondary-900" },
      gray: { base: "bg-gray-50 dark:bg-gray-700" },
      red: { base: "bg-red-50 dark:bg-red-900" },
      orange: { base: "bg-orange-50 dark:bg-orange-900" },
      amber: { base: "bg-amber-50 dark:bg-amber-900" },
      yellow: { base: "bg-yellow-50 dark:bg-yellow-900" },
      lime: { base: "bg-lime-50 dark:bg-lime-900" },
      green: { base: "bg-green-50 dark:bg-green-900" },
      emerald: { base: "bg-emerald-50 dark:bg-emerald-900" },
      teal: { base: "bg-teal-50 dark:bg-teal-900" },
      cyan: { base: "bg-cyan-50 dark:bg-cyan-900" },
      sky: { base: "bg-sky-50 dark:bg-sky-900" },
      blue: { base: "bg-blue-50 dark:bg-blue-900" },
      indigo: { base: "bg-indigo-50 dark:bg-indigo-900" },
      violet: { base: "bg-violet-50 dark:bg-violet-900" },
      purple: { base: "bg-purple-50 dark:bg-purple-900" },
      fuchsia: { base: "bg-fuchsia-50 dark:bg-fuchsia-900" },
      pink: { base: "bg-pink-50 dark:bg-pink-900" },
      rose: { base: "bg-rose-50 dark:bg-rose-900" }
    }
  },
  defaultVariants: {
    type: "top",
    multiline: true
  }
});

export { banner };
export type BannerSlots = keyof typeof banner.slots;
export type BannerTheme = Partial<Record<BannerSlots, ClassValue>>;
