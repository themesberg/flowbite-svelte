import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type ScrollSpyVariants = VariantProps<typeof scrollspy> & Classes<typeof scrollspy>;

export const scrollspy = tv({
  slots: {
    base: "bg-white dark:bg-gray-900 p-2 transition-all duration-300 z-40 border-b border-gray-200 dark:border-gray-700",
    container: "",
    list: "",
    link: "px-4 py-2.5 transition-all duration-200 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900",
    li: "p-2 m-1"
  },
  variants: {
    position: {
      top: {
        base: "top-0 left-0 right-0 w-full",
        container: "container mx-auto px-4",
        list: "flex space-x-1 overflow-x-auto scrollbar-none"
      },
      left: {
        base: "fixed left-0 top-0 bottom-0 h-full w-64 overflow-y-auto",
        container: "px-4 py-4",
        list: "flex flex-col space-y-1"
      },
      right: {
        base: "fixed right-0 top-0 bottom-0 h-full w-64 overflow-y-auto",
        container: "px-4 py-4",
        list: "flex flex-col space-y-1"
      }
    },
    sticky: {
      true: {
        base: ""
      },
      false: {
        base: ""
      }
    },
    isSticky: {
      true: {
        base: "shadow-lg"
      },
      false: {
        base: ""
      }
    },
    active: {
      true: {
        link: "text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 font-semibold focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
      },
      false: {
        link: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
      }
    }
  },
  defaultVariants: {
    position: "top",
    sticky: true,
    isSticky: false,
    active: false
  },
  compoundVariants: [
    {
      position: "top",
      sticky: true,
      class: { base: "sticky" }
    }
  ]
});
