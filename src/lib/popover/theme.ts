import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type PopoverVariants = VariantProps<typeof popover> & Classes<typeof popover>;

export const popover = tv({
  slots: {
    base: "rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    content: "p-2",
    title: "py-2 px-3 rounded-t-md border-b ",
    h3: "font-semibold"
  },
  variants: {
    color: {
      default: {
        title: "bg-gray-100 border-gray-200 dark:border-gray-600 dark:bg-gray-700",
        h3: "text-gray-900 dark:text-white"
      },
      primary: {
        title: "bg-primary-700",
        h3: "text-white"
      },
      secondary: {
        title: "bg-secondary-700",
        h3: "text-white"
      },
      gray: {
        title: "bg-gray-700",
        h3: "text-white"
      },
      red: {
        title: "bg-red-700",
        h3: "text-white"
      },
      orange: {
        title: "bg-orange-700",
        h3: "text-white"
      },
      amber: {
        title: "bg-amber-700",
        h3: "text-white"
      },
      yellow: {
        title: "bg-yellow-500",
        h3: "text-gray-800"
      },
      lime: {
        title: "bg-lime-700",
        h3: "text-white"
      },
      green: {
        title: "bg-green-700",
        h3: "text-white"
      },
      emerald: {
        title: "bg-emerald-700",
        h3: "text-white"
      },
      teal: {
        title: "bg-teal-700",
        h3: "text-white"
      },
      cyan: {
        title: "bg-cyan-700",
        h3: "text-white"
      },
      sky: {
        title: "bg-sky-700",
        h3: "text-white"
      },
      blue: {
        title: "bg-blue-700",
        h3: "text-white"
      },
      indigo: {
        title: "bg-indigo-700",
        h3: "text-white"
      },
      violet: {
        title: "bg-violet-700",
        h3: "text-white"
      },
      purple: {
        title: "bg-purple-700",
        h3: "text-white"
      },
      fuchsia: {
        title: "bg-fuchsia-700",
        h3: "text-white"
      },
      pink: {
        title: "bg-pink-700",
        h3: "text-white"
      },
      rose: {
        title: "bg-rose-700",
        h3: "text-white"
      }
    }
  }
});
