import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type PaginationNavVariants = VariantProps<typeof paginationNav> & Classes<typeof paginationNav>;
// Theme
export type PaginationVariants = VariantProps<typeof pagination>;
export type PaginationNavSlots = keyof typeof paginationNav.slots;
export type PaginationNavTheme = Partial<Record<PaginationNavSlots, ClassValue>>;
export type PaginationItemVariants = VariantProps<typeof paginationItem>;
export type PaginationButtonTheme = ClassValue;
export type PaginationItemTheme = ClassValue;
export type PaginationTheme = ClassValue;

export const paginationNav = tv({
  slots: {
    base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
    tableDiv: "flex items-center text-sm mb-4",
    span: "font-semibold mx-1",
    prev: "rounded-none",
    next: "rounded-none"
  },
  variants: {
    size: {
      default: "",
      large: ""
    },
    layout: {
      table: { prev: "rounded-s bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-white  hover:text-gray-200", next: "text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" },
      navigation: { prev: "rounded-s-lg", next: "rounded-e-lg" },
      pagination: { prev: "rounded-s-lg", next: "rounded-e-lg" }
    }
  },
  defaultVariants: {
    table: false,
    size: "default"
  }
});

export const paginationButton = tv({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      false: "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    group: {
      true: "",
      false: "rounded-lg"
    },
    table: {
      true: "rounded-sm",
      false: "border"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  compoundVariants: [
    {
      group: false,
      table: false,
      class: "rounded-lg"
    }
  ],
  defaultVariants: {
    size: "default",
    active: false,
    group: false,
    table: false
  }
});

export const paginationItem = tv({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      false: "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    group: {
      true: "",
      false: "rounded-lg"
    },
    table: {
      true: "rounded-sm",
      false: "border"
    }
  },
  compoundVariants: [
    {
      group: false,
      table: false,
      class: "rounded-lg"
    }
  ],
  defaultVariants: {
    size: "default",
    active: false,
    group: false,
    table: false
  }
});

export const pagination = tv({
  base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
  variants: {
    table: {
      true: "divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700",
      false: ""
    },
    size: {
      default: "",
      large: ""
    }
  },
  defaultVariants: {
    table: false,
    size: "default"
  }
});
