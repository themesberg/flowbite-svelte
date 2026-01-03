import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type ProgressbarVariants = VariantProps<typeof progressbar> & Classes<typeof progressbar>;
export type ProgressradialVariants = VariantProps<typeof progressradial> & Classes<typeof progressradial>;

export const progressbar = tv({
  slots: {
    base: "w-full bg-gray-200 rounded-full dark:bg-gray-700",
    label: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
    bar: "rounded-full",
    labelWrapper: "mb-1 flex justify-between",
    labelText: "text-base font-medium dark:text-white",
    percentage: "text-sm font-medium dark:text-white"
  },
  variants: {
    color: {
      primary: {
        label: "bg-primary-600",
        bar: "bg-primary-600"
      },
      secondary: {
        label: "bg-secondary-600",
        bar: "bg-secondary-600"
      },
      gray: {
        label: "bg-gray-600 dark:bg-gray-300",
        bar: "bg-gray-600 dark:bg-gray-300"
      },
      red: {
        label: "bg-red-600 dark:bg-red-500",
        bar: "bg-red-600 dark:bg-red-500"
      },
      orange: {
        label: "bg-orange-600 dark:bg-orange-500",
        bar: "bg-orange-600 dark:bg-orange-500"
      },
      amber: {
        label: "bg-amber-600 dark:bg-amber-500",
        bar: "bg-amber-600 dark:bg-amber-500"
      },
      yellow: {
        label: "bg-yellow-400",
        bar: "bg-yellow-400"
      },
      lime: {
        label: "bg-lime-600 dark:bg-lime-500",
        bar: "bg-lime-600 dark:bg-lime-500"
      },
      green: {
        label: "bg-green-600 dark:bg-green-500",
        bar: "bg-green-600 dark:bg-green-500"
      },
      emerald: {
        label: "bg-emerald-600 dark:bg-emerald-500",
        bar: "bg-emerald-600 dark:bg-emerald-500"
      },
      teal: {
        label: "bg-teal-600 dark:bg-teal-500",
        bar: "bg-teal-600 dark:bg-teal-500"
      },
      cyan: {
        label: "bg-cyan-600 dark:bg-cyan-500",
        bar: "bg-cyan-600 dark:bg-cyan-500"
      },
      sky: {
        label: "bg-sky-600 dark:bg-sky-500",
        bar: "bg-sky-600 dark:bg-sky-500"
      },
      blue: {
        label: "bg-blue-600",
        bar: "bg-blue-600"
      },
      indigo: {
        label: "bg-indigo-600 dark:bg-indigo-500",
        bar: "bg-indigo-600 dark:bg-indigo-500"
      },
      violet: {
        label: "bg-violet-600 dark:bg-violet-500",
        bar: "bg-violet-600 dark:bg-violet-500"
      },
      purple: {
        label: "bg-purple-600 dark:bg-purple-500",
        bar: "bg-purple-600 dark:bg-purple-500"
      },
      fuchsia: {
        label: "bg-fuchsia-600 dark:bg-fuchsia-500",
        bar: "bg-fuchsia-600 dark:bg-fuchsia-500"
      },
      pink: {
        label: "bg-pink-600 dark:bg-pink-500",
        bar: "bg-pink-600 dark:bg-pink-500"
      },
      rose: {
        label: "bg-rose-600 dark:bg-rose-500",
        bar: "bg-rose-600 dark:bg-rose-500"
      }
    },
    labelInside: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      labelInside: true,
      class: {
        base: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
        label: "p-0.5"
      }
    },
    {
      labelInside: false,
      class: { base: "rounded-full" }
    }
  ],
  defaultVariants: {
    color: "primary",
    labelInside: false
  }
});

export const progressradial = tv({
  slots: {
    base: "relative inline-flex",
    label: "absolute inset-0 flex items-center justify-center text-sm font-medium",
    background: "opacity-25",
    foreground: "transition-all",
    labelWrapper: "flex flex-col items-center mb-2 text-center",
    labelText: "text-base font-medium",
    percentage: "text-sm font-medium ml-1"
  },
  variants: {
    color: {
      primary: {
        background: "stroke-primary-600",
        foreground: "stroke-primary-600"
      },
      secondary: {
        background: "stroke-secondary-600",
        foreground: "stroke-secondary-600"
      },
      gray: {
        background: "stroke-gray-600 dark:stroke-gray-300",
        foreground: "stroke-gray-600 dark:stroke-gray-300"
      },
      red: {
        background: "stroke-red-600 dark:stroke-red-500",
        foreground: "stroke-red-600 dark:stroke-red-500"
      },
      orange: {
        background: "stroke-orange-600 dark:stroke-orange-500",
        foreground: "stroke-orange-600 dark:stroke-orange-500"
      },
      amber: {
        background: "stroke-amber-600 dark:stroke-amber-500",
        foreground: "stroke-amber-600 dark:stroke-amber-500"
      },
      yellow: {
        background: "stroke-yellow-400",
        foreground: "stroke-yellow-400"
      },
      lime: {
        background: "stroke-lime-600 dark:stroke-lime-500",
        foreground: "stroke-lime-600 dark:stroke-lime-500"
      },
      green: {
        background: "stroke-green-600 dark:stroke-green-500",
        foreground: "stroke-green-600 dark:stroke-green-500"
      },
      emerald: {
        background: "stroke-emerald-600 dark:stroke-emerald-500",
        foreground: "stroke-emerald-600 dark:stroke-emerald-500"
      },
      teal: {
        background: "stroke-teal-600 dark:stroke-teal-500",
        foreground: "stroke-teal-600 dark:stroke-teal-500"
      },
      cyan: {
        background: "stroke-cyan-600 dark:stroke-cyan-500",
        foreground: "stroke-cyan-600 dark:stroke-cyan-500"
      },
      sky: {
        background: "stroke-sky-600 dark:stroke-sky-500",
        foreground: "stroke-sky-600 dark:stroke-sky-500"
      },
      blue: {
        background: "stroke-blue-600",
        foreground: "stroke-blue-600"
      },
      indigo: {
        background: "stroke-indigo-600 dark:stroke-indigo-500",
        foreground: "stroke-indigo-600 dark:stroke-indigo-500"
      },
      violet: {
        background: "stroke-violet-600 dark:stroke-violet-500",
        foreground: "stroke-violet-600 dark:stroke-violet-500"
      },
      purple: {
        background: "stroke-purple-600 dark:stroke-purple-500",
        foreground: "stroke-purple-600 dark:stroke-purple-500"
      },
      fuchsia: {
        background: "stroke-fuchsia-600 dark:stroke-fuchsia-500",
        foreground: "stroke-fuchsia-600 dark:stroke-fuchsia-500"
      },
      pink: {
        background: "stroke-pink-600 dark:stroke-pink-500",
        foreground: "stroke-pink-600 dark:stroke-pink-500"
      },
      rose: {
        background: "stroke-rose-600 dark:stroke-rose-500",
        foreground: "stroke-rose-600 dark:stroke-rose-500"
      }
    },
    labelInside: {
      true: {}
    }
  }
});
