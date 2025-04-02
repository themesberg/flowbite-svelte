import { tv, type VariantProps } from "tailwind-variants";

export type ModalVariants = VariantProps<typeof modal>;

export const modal = tv({
  slots: {
    base: "backdrop:bg-black/80 open:flex flex-col w-full max-h-[90hv] rounded-lg divide-y text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-700 bg-white dark:bg-gray-800 pointer-events-auto",
    header: "flex items-center p-4 md:p-5 justify-between rounded-t-lg shrink-0 text-xl font-semibold text-gray-900 dark:text-white",
    footer: "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg shrink-0",
    body: "p-4 md:p-5 space-y-4 overflow-y-auto overscroll-contain",
    closeBtn: "absolute top-3 end-2.5",
  },
  variants: {
    placement: {
      "top-left": { base: "top-0 left-0" },
      "top-center": { base: "top-0 left-1/2 -translate-x-1/2" },
      "top-right": { base: "top-0 left-full -translate-x-full" },
      "center-left": { base: "top-1/2 left-0 -translate-y-1/2" },
      center: { base: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" },
      "center-right": { base: "top-1/2 left-full -translate-x-full -translate-y-1/2" },
      "bottom-left": { base: "top-full -translate-y-full left-0" },
      "bottom-center": { base: "top-full -translate-y-full left-1/2 -translate-x-1/2" },
      "bottom-right": { base: "top-full -translate-y-full left-full -translate-x-full" },
    },
    size: {
      xs: { base: "max-w-md" },
      sm: { base: "max-w-lg" },
      md: { base: "max-w-2xl" },
      lg: { base: "max-w-4xl" },
      xl: { base: "max-w-7xl" }
    },
  },
  defaultVariants: {
    placement: "center",
    size: "md",
  }
});
