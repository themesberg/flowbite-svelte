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
      // legacy colors
      primary: {
        input: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"
      },
      secondary: {
        input: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600"
      },
      // gray: {
      //   input: "text-gray-600 focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
      // },
      red: {
        input: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600"
      },
      orange: {
        input: "text-orange-600 focus:ring-orange-600 dark:ring-offset-orange-600 dark:focus:ring-orange-600"
      },
      amber: {
        input: "text-amber-600 focus:ring-amber-600 dark:ring-offset-amber-600 dark:focus:ring-amber-600"
      },
      yellow: {
        input: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
      },
      lime: {
        input: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700"
      },
      green: {
        input: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600"
      },
      emerald: {
        input: "text-emerald-600 focus:ring-emerald-600 dark:ring-offset-emerald-600 dark:focus:ring-emerald-600"
      },
      teal: {
        input: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600"
      },
      cyan: {
        input: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600"
      },
      sky: {
        input: "text-sky-600 focus:ring-sky-600 dark:ring-offset-sky-600 dark:focus:ring-sky-600"
      },
      blue: {
        input: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700"
      },
      indigo: {
        input: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700"
      },
      violet: {
        input: "text-violet-600 focus:ring-violet-600 dark:ring-offset-violet-600 dark:focus:ring-violet-600"
      },
      purple: {
        input: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600"
      },
      fuchsia: {
        input: "text-fuchsia-600 focus:ring-fuchsia-600 dark:ring-offset-fuchsia-600 dark:focus:ring-fuchsia-600"
      },
      pink: {
        input: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600"
      },
      rose: {
        input: "text-rose-600 focus:ring-rose-600 dark:ring-offset-rose-600 dark:focus:ring-rose-600"
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
