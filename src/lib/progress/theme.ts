import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type ProgressbarVariants = VariantProps<typeof progressbar> & Classes<typeof progressbar>;
export type ProgressradialVariants = VariantProps<typeof progressradial> & Classes<typeof progressradial>;

export const progressbar = tv({
  slots: {
    base: "w-full bg-neutral-quaternary rounded-full",
    label: "text-white text-xs font-medium text-center leading-none rounded-full flex items-center justify-center",
    bar: "rounded-full",
    labelWrapper: "mb-1 flex justify-between",
    labelText: "text-base font-medium text-heading",
    percentage: "text-sm font-medium text-heading"
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
      brand: {
        label: "bg-brand",
        bar: "bg-brand"
      },
      dark: {
        label: "bg-dark",
        bar: "bg-dark"
      },
      success: {
        label: "bg-success",
        bar: "bg-success"
      },
      danger: {
        label: "bg-danger",
        bar: "bg-danger"
      },
      warning: {
        label: "bg-warning",
        bar: "bg-warning"
      },
      gray: {
        label: "bg-gray-600",
        bar: "bg-gray-600"
      },
      red: {
        label: "bg-red-600",
        bar: "bg-red-600"
      },
      orange: {
        label: "bg-orange-600",
        bar: "bg-orange-600"
      },
      amber: {
        label: "bg-amber-600",
        bar: "bg-amber-600"
      },
      yellow: {
        label: "bg-yellow-400",
        bar: "bg-yellow-400"
      },
      lime: {
        label: "bg-lime-600",
        bar: "bg-lime-600"
      },
      green: {
        label: "bg-green-600",
        bar: "bg-green-600"
      },
      emerald: {
        label: "bg-emerald-600",
        bar: "bg-emerald-600"
      },
      teal: {
        label: "bg-teal-600",
        bar: "bg-teal-600"
      },
      cyan: {
        label: "bg-cyan-600",
        bar: "bg-cyan-600"
      },
      sky: {
        label: "bg-sky-600",
        bar: "bg-sky-600"
      },
      blue: {
        label: "bg-blue-600",
        bar: "bg-blue-600"
      },
      indigo: {
        label: "bg-indigo-600",
        bar: "bg-indigo-600"
      },
      violet: {
        label: "bg-violet-600",
        bar: "bg-violet-600"
      },
      purple: {
        label: "bg-purple-600",
        bar: "bg-purple-600"
      },
      fuchsia: {
        label: "bg-fuchsia-600",
        bar: "bg-fuchsia-600"
      },
      pink: {
        label: "bg-pink-600",
        bar: "bg-pink-600"
      },
      rose: {
        label: "bg-rose-600",
        bar: "bg-rose-600"
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
        label: ""
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
    label: "absolute inset-0 flex items-center justify-center text-sm font-medium text-heading",
    background: "opacity-25",
    foreground: "transition-all",
    labelWrapper: "flex flex-col items-center mb-2 text-center",
    labelText: "text-base font-medium text-heading",
    percentage: "text-sm font-medium ml-1 text-heading"
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
      brand: {
        background: "stroke-brand",
        foreground: "stroke-brand"
      },
      dark: {
        background: "stroke-dark",
        foreground: "stroke-dark"
      },
      success: {
        background: "stroke-success",
        foreground: "stroke-success"
      },
      danger: {
        background: "stroke-danger",
        foreground: "stroke-danger"
      },
      warning: {
        background: "stroke-warning",
        foreground: "stroke-warning"
      },
      gray: {
        background: "stroke-body",
        foreground: "stroke-body"
      },
      red: {
        background: "stroke-red-600",
        foreground: "stroke-red-600"
      },
      orange: {
        background: "stroke-orange-600",
        foreground: "stroke-orange-600"
      },
      amber: {
        background: "stroke-amber-600",
        foreground: "stroke-amber-600"
      },
      yellow: {
        background: "stroke-yellow-400",
        foreground: "stroke-yellow-400"
      },
      lime: {
        background: "stroke-lime-600",
        foreground: "stroke-lime-600"
      },
      green: {
        background: "stroke-green-600",
        foreground: "stroke-green-600"
      },
      emerald: {
        background: "stroke-emerald-600",
        foreground: "stroke-emerald-600"
      },
      teal: {
        background: "stroke-teal-600",
        foreground: "stroke-teal-600"
      },
      cyan: {
        background: "stroke-cyan-600",
        foreground: "stroke-cyan-600"
      },
      sky: {
        background: "stroke-sky-600",
        foreground: "stroke-sky-600"
      },
      blue: {
        background: "stroke-blue-600",
        foreground: "stroke-blue-600"
      },
      indigo: {
        background: "stroke-indigo-600",
        foreground: "stroke-indigo-600"
      },
      violet: {
        background: "stroke-violet-600",
        foreground: "stroke-violet-600"
      },
      purple: {
        background: "stroke-purple-600",
        foreground: "stroke-purple-600"
      },
      fuchsia: {
        background: "stroke-fuchsia-600",
        foreground: "stroke-fuchsia-600"
      },
      pink: {
        background: "stroke-pink-600",
        foreground: "stroke-pink-600"
      },
      rose: {
        background: "stroke-rose-600",
        foreground: "stroke-rose-600"
      }
    },
    labelInside: {
      true: {}
    }
  }
});
