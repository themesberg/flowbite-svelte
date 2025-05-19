import { tv, type VariantProps } from "tailwind-variants";

export type PaginationVariants = VariantProps<typeof pagination>;

export const paginationnav = tv({
  slots: {
    base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
    tableDiv: "flex items-center text-sm mb-4",
    tableSpan: "font-semibold mx-1",
    prevItem: "rounded-none",
    nextItem: "rounded-none"
  },
  variants: {
    size: {
      default: "",
      large: ""
    },
    layout: {
      table: { prevItem: "rounded-s bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-white  hover:text-gray-200", nextItem: "text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" },
      navigation: { prevItem: "rounded-s-lg", nextItem: "rounded-e-lg" },
      pagination: { prevItem: "rounded-s-lg", nextItem: "rounded-e-lg" }
    }
  },
  defaultVariants: {
    table: false,
    size: "default"
  }
});

export type PaginationItemVariants = VariantProps<typeof paginationItem>;

export const paginationbutton = tv({
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
