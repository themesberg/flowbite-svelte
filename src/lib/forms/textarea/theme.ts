import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";
// Variants
export type TextareaVariants = VariantProps<typeof textarea> & Classes<typeof textarea>;
// Theme
export type TextareaSlots = keyof typeof textarea.slots;
export type TextareaTheme = Partial<Record<TextareaSlots, ClassValue>>;

export const textarea = tv({
  slots: {
    div: "relative",
    base: "block text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-hidden focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
    wrapper: "text-sm rounded-lg bg-gray-50 dark:bg-gray-600 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-500",
    inner: "py-2 px-4 bg-white dark:bg-gray-800",
    header: "py-2 px-3 border-gray-200 dark:border-gray-500",
    footer: "py-2 px-3 border-gray-200 dark:border-gray-500",
    addon: "absolute top-2 right-2 z-10",
    close: "absolute right-2 top-5 -translate-y-1/2 text-gray-400 hover:text-black",
    svg: ""
  },
  variants: {
    wrapped: {
      false: { wrapper: "p-2.5 text-sm focus:outline-hidden focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50" }
    },
    hasHeader: {
      true: {
        header: "border-b"
      },
      false: {
        inner: "rounded-t-lg"
      }
    },
    hasFooter: {
      true: {
        footer: "border-t"
      },
      false: {
        inner: "rounded-b-lg"
      }
    }
  }
});
