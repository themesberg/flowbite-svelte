import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export type ToolbarVariants = VariantProps<typeof toolbar>;

export const toolbar = tv({
  slots: {
    base: "flex justify-between items-center",
    content: "flex flex-wrap items-center"
  },
  variants: {
    embedded: {
      true: {},
      false: {
        base: "py-2 px-3 rounded-lg dark:border"
      }
    },
    color: {
      default: {
        base: "bg-gray-50 dark:bg-gray-800 dark:border-gray-600",
        content: "divide-gray-300 dark:divide-gray-800"
      },
      primary: {
        base: "bg-primary-50 dark:bg-gray-800 dark:border-primary-800",
        content: "divide-primary-300 dark:divide-primary-800"
      },
      secondary: {
        base: "bg-secondary-50 dark:bg-gray-800 dark:border-secondary-800",
        content: "divide-secondary-300 dark:divide-primary-800"
      },
      gray: {
        base: "bg-gray-50 dark:bg-gray-800 dark:border-gray-800",
        content: "divide-gray-300 dark:divide-gray-800"
      },
      red: {
        base: "bg-red-50 dark:bg-gray-800 dark:border-red-800",
        content: "divide-red-300 dark:divide-red-800"
      },
      yellow: {
        base: "bg-yellow-50 dark:bg-gray-800 dark:border-yellow-800",
        content: "divide-yellow-300 dark:divide-yellow-800"
      },
      green: {
        base: "bg-green-50 dark:bg-gray-800 dark:border-green-800",
        content: "divide-green-300 dark:divide-green-800"
      },
      indigo: {
        base: "bg-indigo-50 dark:bg-gray-800 dark:border-indigo-800",
        content: "divide-indigo-300 dark:divide-indigo-800"
      },
      purple: {
        base: "bg-purple-50 dark:bg-gray-800 dark:border-purple-800",
        content: "divide-purple-300 dark:divide-purple-800"
      },
      pink: {
        base: "bg-pink-50 dark:bg-gray-800 dark:border-pink-800",
        content: "divide-pink-300 dark:divide-pink-800"
      },
      blue: {
        base: "bg-blue-50 dark:bg-gray-800 dark:border-blue-800",
        content: "divide-blue-300 dark:divide-blue-800"
      },
      dark: {
        base: "bg-gray-50 dark:bg-gray-800 dark:border-gray-800",
        content: "divide-gray-300 dark:divide-gray-800"
      }
    },
    separators: {
      true: {
        content: "sm:divide-x rtl:divide-x-reverse"
      }
    }
  },
  compoundVariants: [
    {
      embedded: true,
      color: "default",
      class: {
        base: "bg-transparent"
      }
    }
  ],
  defaultVariants: {
    color: "default"
  }
});

export type ToolbarSlots = keyof typeof toolbar.slots;
export type ToolbarTheme = Partial<Record<ToolbarSlots, ClassValue>>;

export type ToolbarGroupVariants = VariantProps<typeof toolbarGroup>;

export const toolbarGroup = tv({
  base: "flex items-center",
  variants: {
    spacing: {
      default: "space-x-1 rtl:space-x-reverse",
      tight: "space-x-0.5 rtl:space-x-reverse",
      loose: "space-x-2 rtl:space-x-reverse"
    },
    padding: {
      default: "sm:not(:last):pe-4 sm:not(:first):ps-4",
      none: ""
    },
    position: {
      middle: "",
      first: "sm:ps-0",
      last: "sm:pe-0"
    }
  },
  compoundVariants: [
    {
      position: ["first", "last"],
      class: "sm:px-0"
    }
  ],
  defaultVariants: {
    spacing: "default",
    padding: "default"
  }
});

export type ToolbarGroupTheme = ClassValue;

export type ToolbarButtonVariants = VariantProps<typeof toolbarButton>;

export const toolbarButton = tv({
  base: "focus:outline-hidden whitespace-normal",
  variants: {
    color: {
      dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
      yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
      green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
      indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
      purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
      pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
      blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
      primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      default: "focus:ring-gray-400 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50"
    },
    size: {
      xs: "m-0.5 rounded-xs focus:ring-1 p-0.5",
      sm: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
    },
    background: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "default",
      background: true,
      class: "dark:hover:bg-gray-600"
    },
    {
      color: "default",
      background: false,
      class: "dark:hover:bg-gray-700"
    }
  ],
  defaultVariants: {
    color: "default",
    size: "md"
  }
});

export type ToolbarButtonTheme = ClassValue;
