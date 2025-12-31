import type { Classes } from "$lib/theme-provider/themeUtils";
import { tv, type VariantProps } from "tailwind-variants";

export type DatepickerVariants = VariantProps<typeof datepicker> & Classes<typeof datepicker>;

export const datepicker = tv({
  slots: {
    base: "inline-block rounded-base bg-white dark:bg-gray-700 shadow-lg p-4",
    input:
      "w-full rounded-base border px-4 py-2 text-sm focus:ring-2 focus:outline-none outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900",
    titleVariant: "mb-2 text-lg font-semibold text-gray-900 dark:text-white",
    polite:
      "text-sm rounded-base text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200",
    button: "absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-hidden dark:text-gray-400",
    actionButtons: "mt-4 flex justify-between",
    columnHeader: "text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    grid: "grid grid-cols-7 gap-1 w-64",
    nav: "mb-4 flex items-center justify-between",
    dayButton: "h-8 w-full block flex-1 leading-9 border-0 rounded-base cursor-pointer text-center font-semibold text-sm day p-0",
    monthButton: "rounded-base px-3 py-2 text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700",
    actionSlot: "",
    monthBtnSelected: "bg-brand text-white",
    monthBtn: "text-gray-700 dark:text-gray-300"
  },
  variants: {
    color: {
      brand: {
        input: "focus:ring-brand-medium",
        dayButton: "bg-brand-subtle"
      },
      alternative: {
        input: "focus:ring-neutral-tertiary",
        dayButton: "bg-neutral-secondary-medium"
      },
      gray: {
        input: "focus:ring-neutral-tertiary-soft",
        dayButton: "bg-neutral-secondary-soft"
      },
      success: {
        input: "focus:ring-success-medium",
        dayButton: "bg-success-subtle"
      },
      danger: {
        input: "focus:ring-danger-medium",
        dayButton: "bg-danger-subtle"
      },
      warning: {
        input: "focus:ring-warning-medium",
        dayButton: "bg-warning-subtle"
      },
      transparent: {
        input: "focus:ring-neutral-tertiary",
        dayButton: "bg-transparent"
      },
      dark: {
        input: "focus:ring-neutral-tertiary",
        dayButton: "bg-neutral-secondary-medium"
      }
    },
    inline: {
      false: { base: "absolute z-10 mt-1" }
    },
    current: {
      true: { dayButton: "text-gray-400 dark:text-gray-500" }
    },
    today: {
      true: { dayButton: "font-bold" }
    },
    unavailable: {
      true: { dayButton: "opacity-50 cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700" }
    }
  },
  compoundVariants: []
});
