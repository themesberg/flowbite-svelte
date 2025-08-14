import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";
import { dialog } from "$lib/dialog/theme";

// Variants
export type ModalVariants = VariantProps<typeof modal> & Classes<typeof modal> & Classes<typeof dialog>;

export const modal = tv({
  extend: dialog,
  slots: {
    base: "w-full rounded-lg divide-y text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700 bg-white dark:bg-gray-800 pointer-events-auto",
    form: "rounded-lg divide-y",
    header: "flex items-center p-4 md:p-5 justify-between rounded-t-lg shrink-0 text-xl font-semibold text-gray-900 dark:text-white",
    footer: "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg shrink-0",
    body: "p-4 md:p-5 space-y-4 overflow-y-auto overscroll-contain"
  },
  variants: {
    fullscreen: {
      true: {
        base: "fixed inset-0 w-screen h-screen max-w-none max-h-none m-0 p-0 border-none rounded-none bg-white dark:bg-gray-900"
      }
    },
    placement: {
      "top-left": { base: "mb-auto mr-auto" },
      "top-center": { base: "mb-auto mx-auto" },
      "top-right": { base: "mb-auto ml-auto" },
      "center-left": { base: "my-auto mr-auto" },
      center: { base: "my-auto mx-auto" },
      "center-right": { base: "my-auto ml-auto" },
      "bottom-left": { base: "mt-auto mr-auto" },
      "bottom-center": { base: "mt-auto mx-auto" },
      "bottom-right": { base: "mt-auto ml-auto" }
    },
    size: {
      none: { base: "" },
      xs: { base: "max-w-md" },
      sm: { base: "max-w-lg" },
      md: { base: "max-w-2xl" },
      lg: { base: "max-w-4xl" },
      xl: { base: "max-w-7xl" }
    }
  },
  defaultVariants: {
    placement: "center",
    size: "md"
  }
});
