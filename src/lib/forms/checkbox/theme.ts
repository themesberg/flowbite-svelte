import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export const checkbox = tv({
  slots: {
    input: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 rounded-xs",
    label: "flex items-center"
  },
  variants: {
    color: {
      brand: {
        input: "border border-default-medium bg-neutral-secondary-medium focus:ring-brand-soft"
      },
      alternative: {
        input: "border border-default-medium bg-neutral-secondary-medium focus:ring-neutral-tertiary"
      },
      gray: {
        input: "border border-default-medium bg-neutral-secondary-medium focus:ring-neutral-tertiary-soft"
      },
      success: {
        input: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600"
      },
      danger: {
        input: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600"
      },
      warning: {
        input: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
      }
    },
    tinted: {
      true: { input: "dark:bg-gray-600 dark:border-gray-500" },
      false: { input: "dark:bg-gray-700 dark:border-gray-600" }
    },
    custom: {
      true: { input: "sr-only peer" }
    },
    rounded: {
      true: { input: "rounded-sm" }
    },
    inline: {
      true: {
        label: "inline-flex"
      },
      false: {
        label: "flex items-center"
      }
    },
    disabled: {
      true: {
        input: "cursor-not-allowed opacity-50 bg-gray-200 border-gray-300",
        label: "cursor-not-allowed opacity-70"
      },
      false: {}
    }
  },
  defaultVariants: {
    color: "brand",
    disabled: false
  }
});

export type CheckboxVariants = Omit<VariantProps<typeof checkbox> & Classes<typeof checkbox>, "disabled">;

export const checkboxButton = tv({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    checked: {
      true: "outline-4 outline-green-500"
    }
  },
  defaultVariants: {
    inline: true
  }
});

export type CheckboxButtonVariants = VariantProps<typeof checkboxButton>;
