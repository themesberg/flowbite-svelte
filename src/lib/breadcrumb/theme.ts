import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type BreadcrumbVariants = VariantProps<typeof breadcrumb> & Classes<typeof breadcrumb>;
export type BreadcrumbItemVariants = VariantProps<typeof breadcrumbItem> & Classes<typeof breadcrumbItem>;

export const breadcrumb = tv({
  slots: {
    base: "flex",
    list: "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse"
  },
  variants: {
    solid: {
      true: {
        base: "px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      },
      false: ""
    }
  },
  defaultVariants: {
    solid: false
  }
});

export const breadcrumbItem = tv({
  slots: {
    base: "inline-flex items-center",
    separator: "h-6 w-6 text-gray-400 rtl:-scale-x-100"
  },
  variants: {
    home: {
      true: "",
      false: ""
    },
    hasHref: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      home: true,
      class: {
        base: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        separator: "me-2 h-4 w-4"
      }
    },
    {
      home: false,
      hasHref: true,
      class: {
        base: "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white"
      }
    },
    {
      home: false,
      hasHref: false,
      class: {
        base: "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
      }
    }
  ]
});
