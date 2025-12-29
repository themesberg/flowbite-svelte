import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type RadioVariants = VariantProps<typeof radio> & Classes<typeof radio>;

export const radio = tv({
  slots: {
    input: "flex items-center w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2",
    label: "flex items-center"
  },
  variants: {
    color: {
      // "brand" | "danger" | "success" | "warning" | "dark" | "neutral" | "purple" | "indigo" | "teal"
      brand: {
        input: "text-brand focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600"
      },
      dark: {
        input: "text-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600"
      },
      danger: { input: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600" },
      neutral: {
        input: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600"
      },
      warning: {
        input: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600"
      },
      success: {
        input: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600"
      },
      teal: {
        input: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600"
      },
      indigo: {
        input: "text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
      },
      purple: {
        input: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600"
      }
    },
    tinted: {
      true: { input: "dark:bg-gray-600 dark:border-gray-500" },
      false: { input: "dark:bg-gray-700 dark:border-gray-600" }
    },
    custom: {
      true: { input: "sr-only peer" },
      false: { input: "relative" }
    },
    inline: {
      true: { label: "inline-flex" },
      false: { label: "flex" }
    }
  },
  defaultVariants: {
    color: "brand"
  }
});

export const radioButton = tv({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    }
  },
  defaultVariants: {
    inline: true
  }
});
