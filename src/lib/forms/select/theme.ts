import { dropdown, dropdownItem } from "$lib/dropdown";
import { tv, type VariantProps } from "tailwind-variants";

export type SelectVariants = VariantProps<typeof select>;

export const select = tv({
  base: "block w-full",
  variants: {
    underline: {
      true: "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-hidden focus:ring-0 focus:border-gray-200 peer px-0!",
      false: "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    },
    size: {
      sm: "text-sm p-2",
      md: "text-sm p-2.5",
      lg: "text-base py-3 px-4"
    }
  },
  defaultVariants: {
    underline: false,
    size: "md"
  }
});

export type MultiSelectVariants = VariantProps<typeof multiselect>;

export const multiselect = tv({
  slots: {
    base: "relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 ring-primary-500 dark:ring-primary-500 focus-visible:outline-hidden",
    select: "flex flex-wrap gap-2",
    dropdown: "absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 start-0 top-[calc(100%+1rem)] rounded-lg cursor-pointer overflow-y-scroll w-full",
    dropdownitem: "py-2 px-3 rounded-lg text-gray-600 hover:text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-600",
    closebutton: "p-0 focus:ring-gray-400 dark:text-white"
  },
  variants: {
    size: {
      sm: "px-2 py-1 min-h-[2.4rem]",
      md: "px-3 py-1 min-h-[2.7rem]",
      lg: "px-4 py-2 min-h-[3.2rem]"
    },
    disabled: {
      true: {
        base: "cursor-not-allowed opacity-50 pointer-events-none",
        dropdownitem: "cursor-not-allowed opacity-50",
        closebutton: "cursor-not-allowed"
      },
      false: { base: "focus-within:border-primary-500 dark:focus-within:border-primary-500 focus-within:ring-1" }
    },
    active: {
      true: {
        dropdownitem: "bg-primary-100 text-primary-500 dark:bg-primary-500 dark:text-primary-100 hover:bg-primary-100 dark:hover:bg-primary-500 hover:text-primary-600 dark:hover:text-primary-100"
      }
    },
    selected: {
      true: {
        dropdownitem: "bg-gray-100 text-black font-semibold hover:text-black dark:text-white dark:bg-gray-600 dark:hover:text-white"
      }
    }
  },
  defaultVariants: {
    underline: false,
    size: "md"
  }
});
