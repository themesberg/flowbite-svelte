import { tv, type VariantProps } from "tailwind-variants";

// Variants no need to extend Classes because all slots are used with base.
export type ButtonVariants = VariantProps<typeof button>;
export type GradientButtonVariantes = VariantProps<typeof gradientButton>;

export const button = tv({
  slots: {
    base: "text-center font-medium inline-flex items-center justify-center",
    outline: "bg-transparent border focus:ring-4",
    shadow: "shadow-lg",
    spinner: "ms-2"
  },
  variants: {
    color: {
      brand: {
        base: "text-white bg-brand border border-transparent enabled:hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-fg-brand bg-neutral-primary border border-brand enabled:hover:bg-brand enabled:hover:text-white focus:ring-4 focus:ring-brand-subtle",
        shadow: "shadow-brand-500/50 dark:shadow-brand-800/80"
      },
      alternative: {
        base: "text-body bg-neutral-secondary-medium border border-default-medium enabled:hover:bg-neutral-tertiary-medium enabled:hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-body bg-neutral-primary border border-default-medium enabled:hover:bg-neutral-secondary-medium enabled:hover:text-heading focus:ring-4 focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      gray: {
        base: "text-body bg-neutral-primary-soft border border-default enabled:hover:bg-neutral-secondary-medium enabled:hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-body bg-neutral-primary border border-default enabled:hover:bg-neutral-secondary-soft enabled:hover:text-heading focus:ring-4 focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      success: {
        base: "text-white bg-success border border-transparent enabled:hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-success bg-neutral-primary border border-success enabled:hover:bg-success enabled:hover:text-white focus:ring-4 focus:ring-success-subtle",
        shadow: "shadow-green-500/50 dark:shadow-green-800/80"
      },
      danger: {
        base: "text-white bg-danger border border-transparent enabled:hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-danger bg-neutral-primary border border-danger enabled:hover:bg-danger enabled:hover:text-white focus:ring-4 focus:ring-danger-subtle",
        shadow: "shadow-red-500/50 dark:shadow-red-800/80"
      },
      warning: {
        base: "text-white bg-warning border border-transparent enabled:hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-warning bg-neutral-primary border border-warning enabled:hover:bg-warning enabled:hover:text-white focus:ring-4 focus:ring-warning-subtle",
        shadow: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
      },
      transparent: {
        base: "text-heading bg-transparent border border-transparent enabled:hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-heading bg-transparent border border-default enabled:hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      dark: {
        base: "text-white bg-dark border border-transparent enabled:hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none",
        outline: "text-dark bg-neutral-primary border border-dark enabled:hover:bg-dark enabled:hover:text-white focus:ring-4 focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      // legacy colors
      primary: {
        base: "text-white bg-primary-700 enabled:hover:bg-primary-800 dark:bg-primary-600 dark:enabled:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
        outline: "text-primary-700 border-primary-700 enabled:hover:bg-primary-800 dark:border-primary-500 dark:text-primary-500 dark:enabled:hover:bg-primary-600",
        shadow: "shadow-primary-500/50 dark:shadow-primary-800/80"
      },
      light: {
        base: "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-600 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
        outline: "text-gray-700 border-gray-700 enabled:hover:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:enabled:hover:bg-gray-500",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      secondary: {
        base: "text-white bg-secondary-700 enabled:hover:bg-secondary-800 dark:bg-secondary-600 dark:enabled:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
        outline: "text-secondary-700 border-secondary-700 enabled:hover:bg-secondary-800 dark:border-secondary-400 dark:text-secondary-400 dark:enabled:hover:bg-secondary-500",
        shadow: "shadow-secondary-500/50 dark:shadow-secondary-800/80"
      },
      red: {
        base: "text-white bg-red-700 enabled:hover:bg-red-800 dark:bg-red-600 dark:enabled:hover:bg-red-700 focus-within:ring-red-300 dark:focus-within:ring-red-900",
        outline: "text-red-700 border-red-700 enabled:hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:enabled:hover:bg-red-600",
        shadow: "shadow-red-500/50 dark:shadow-red-800/80"
      },
      orange: {
        base: "text-white bg-orange-700 enabled:hover:bg-orange-800 dark:bg-orange-600 dark:enabled:hover:bg-orange-700 focus-within:ring-orange-300 dark:focus-within:ring-orange-900",
        outline: "text-orange-700 border-orange-700 enabled:hover:bg-orange-800 dark:border-orange-400 dark:text-orange-400 dark:enabled:hover:bg-orange-500",
        shadow: "shadow-orange-500/50 dark:shadow-orange-800/80"
      },
      amber: {
        base: "text-white bg-amber-700 enabled:hover:bg-amber-800 dark:bg-amber-600 dark:enabled:hover:bg-amber-700 focus-within:ring-amber-300 dark:focus-within:ring-amber-900",
        outline: "text-amber-700 border-amber-700 enabled:hover:bg-amber-800 dark:border-amber-400 dark:text-amber-400 dark:enabled:hover:bg-amber-500",
        shadow: "shadow-amber-500/50 dark:shadow-amber-800/80"
      },
      yellow: {
        base: "text-white bg-yellow-400 enabled:hover:bg-yellow-500 focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
        outline: "text-yellow-400 border-yellow-400 enabled:hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:enabled:hover:bg-yellow-400",
        shadow: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
      },
      lime: {
        base: "text-white bg-lime-700 enabled:hover:bg-lime-800 dark:bg-lime-600 dark:enabled:hover:bg-lime-700 focus-within:ring-lime-300 dark:focus-within:ring-lime-800",
        outline: "text-lime-700 border-lime-700 enabled:hover:bg-lime-800 dark:border-lime-400 dark:text-lime-400 dark:enabled:hover:bg-lime-500",
        shadow: "shadow-lime-500/50 dark:shadow-lime-800/80"
      },
      green: {
        base: "text-white bg-green-700 enabled:hover:bg-green-800 dark:bg-green-600 dark:enabled:hover:bg-green-700 focus-within:ring-green-300 dark:focus-within:ring-green-800",
        outline: "text-green-700 border-green-700 enabled:hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:enabled:hover:bg-green-600",
        shadow: "shadow-green-500/50 dark:shadow-green-800/80"
      },
      emerald: {
        base: "text-white bg-emerald-700 enabled:hover:bg-emerald-800 dark:bg-emerald-600 dark:enabled:hover:bg-emerald-700 focus-within:ring-emerald-300 dark:focus-within:ring-emerald-800",
        outline: "text-emerald-700 border-emerald-700 enabled:hover:bg-emerald-800 dark:border-emerald-400 dark:text-emerald-400 dark:enabled:hover:bg-emerald-500",
        shadow: "shadow-emerald-500/50 dark:shadow-emerald-800/80"
      },
      teal: {
        base: "text-white bg-teal-700 enabled:hover:bg-teal-800 dark:bg-teal-600 dark:enabled:hover:bg-teal-700 focus-within:ring-teal-300 dark:focus-within:ring-teal-800",
        outline: "text-teal-700 border-teal-700 enabled:hover:bg-teal-800 dark:border-teal-400 dark:text-teal-400 dark:enabled:hover:bg-teal-500",
        shadow: "shadow-teal-500/50 dark:shadow-teal-800/80"
      },
      cyan: {
        base: "text-white bg-cyan-700 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 focus-within:ring-cyan-300 dark:focus-within:ring-cyan-800",
        outline: "text-cyan-700 border-cyan-700 enabled:hover:bg-cyan-800 dark:border-cyan-400 dark:text-cyan-400 dark:enabled:hover:bg-cyan-500",
        shadow: "shadow-cyan-500/50 dark:shadow-cyan-800/80"
      },
      sky: {
        base: "text-white bg-sky-700 enabled:hover:bg-sky-800 dark:bg-sky-600 dark:enabled:hover:bg-sky-700 focus-within:ring-sky-300 dark:focus-within:ring-sky-800",
        outline: "text-sky-700 border-sky-700 enabled:hover:bg-sky-800 dark:border-sky-400 dark:text-sky-400 dark:enabled:hover:bg-sky-500",
        shadow: "shadow-sky-500/50 dark:shadow-sky-800/80"
      },
      blue: {
        base: "text-white bg-blue-700 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:enabled:hover:bg-blue-700 focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
        outline: "text-blue-700 border-blue-700 enabled:hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:enabled:hover:bg-blue-500",
        shadow: "shadow-blue-500/50 dark:shadow-blue-800/80"
      },
      indigo: {
        base: "text-white bg-indigo-700 enabled:hover:bg-indigo-800 dark:bg-indigo-600 dark:enabled:hover:bg-indigo-700 focus-within:ring-indigo-300 dark:focus-within:ring-indigo-800",
        outline: "text-indigo-700 border-indigo-700 enabled:hover:bg-indigo-800 dark:border-indigo-400 dark:text-indigo-400 dark:enabled:hover:bg-indigo-500",
        shadow: "shadow-indigo-500/50 dark:shadow-indigo-800/80"
      },
      violet: {
        base: "text-white bg-violet-700 enabled:hover:bg-violet-800 dark:bg-violet-600 dark:enabled:hover:bg-violet-700 focus-within:ring-violet-300 dark:focus-within:ring-violet-800",
        outline: "text-violet-700 border-violet-700 enabled:hover:bg-violet-800 dark:border-violet-400 dark:text-violet-400 dark:enabled:hover:bg-violet-500",
        shadow: "shadow-violet-500/50 dark:shadow-violet-800/80"
      },
      purple: {
        base: "text-white bg-purple-700 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:enabled:hover:bg-purple-700",
        outline: "text-purple-700 border-purple-700 enabled:hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:enabled:hover:bg-purple-500",
        shadow: "shadow-purple-500/50 dark:shadow-purple-800/80"
      },
      fuchsia: {
        base: "text-white bg-fuchsia-700 enabled:hover:bg-fuchsia-800 dark:bg-fuchsia-600 dark:enabled:hover:bg-fuchsia-700",
        outline: "text-fuchsia-700 border-fuchsia-700 enabled:hover:bg-fuchsia-800 dark:border-fuchsia-400 dark:text-fuchsia-400 dark:enabled:hover:bg-fuchsia-500",
        shadow: "shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80"
      },
      pink: {
        base: "text-white bg-pink-700 enabled:hover:bg-pink-800 dark:bg-pink-600 dark:enabled:hover:bg-pink-700",
        outline: "text-pink-700 border-pink-700 enabled:hover:bg-pink-800 dark:border-pink-400 dark:text-pink-400 dark:enabled:hover:bg-pink-500",
        shadow: "shadow-pink-500/50 dark:shadow-pink-800/80"
      },
      rose: {
        base: "text-white bg-rose-700 enabled:hover:bg-rose-800 dark:bg-rose-600 dark:enabled:hover:bg-rose-700",
        outline: "text-rose-700 border-rose-700 enabled:hover:bg-rose-800 dark:border-rose-400 dark:text-rose-400 dark:enabled:hover:bg-rose-500",
        shadow: "shadow-rose-500/50 dark:shadow-rose-800/80"
      }
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    },
    group: {
      true: "focus-within:ring-2 focus-within:z-10 [&:not(:first-child)]:rounded-s-none [&:not(:last-child)]:rounded-e-none [&:not(:last-child)]:border-e-0",
      false: "focus-within:ring-4 focus-within:outline-hidden"
    },
    disabled: {
      true: "cursor-not-allowed text-fg-disabled bg-disabled box-border border border-default-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none",
      false: ""
    },
    pill: {
      true: "rounded-full",
      false: "rounded-base"
    },
    checked: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [],
  defaultVariants: {
    pill: false
  }
});

export const gradientButton = tv({
  slots: {
    base: "inline-flex items-center justify-center transition-all duration-75 ease-in text-white bg-linear-to-r ",
    outlineWrapper: "inline-flex items-center justify-center w-full border-0!"
  },
  variants: {
    color: {
      blue: { base: "from-blue-500 via-blue-600 to-blue-700 enabled:hover:bg-linear-to-br focus:ring-blue-300 dark:focus:ring-blue-800" },
      green: { base: "from-green-400 via-green-500 to-green-600 enabled:hover:bg-linear-to-br focus:ring-green-300 dark:focus:ring-green-800" },
      cyan: { base: "text-white bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-linear-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      teal: { base: "text-white bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-linear-to-br focus:ring-teal-300 dark:focus:ring-teal-800" },
      lime: { base: "text-gray-900 bg-linear-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-linear-to-br focus:ring-lime-300 dark:focus:ring-lime-800" },
      red: { base: "text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-linear-to-br focus:ring-red-300 dark:focus:ring-red-800" },
      pink: { base: "text-white bg-linear-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-linear-to-br focus:ring-pink-300 dark:focus:ring-pink-800" },
      purple: { base: "text-white bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-linear-to-br focus:ring-purple-300 dark:focus:ring-purple-800" },
      purpleToBlue: { base: "text-white bg-linear-to-br from-purple-600 to-blue-500 enabled:hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" },
      cyanToBlue: { base: "text-white bg-linear-to-r from-cyan-500 to-blue-500 enabled:hover:bg-linear-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      greenToBlue: { base: "text-white bg-linear-to-br from-green-400 to-blue-600 enabled:hover:bg-linear-to-bl focus:ring-green-200 dark:focus:ring-green-800" },
      purpleToPink: { base: "text-white bg-linear-to-r from-purple-500 to-pink-500 enabled:hover:bg-linear-to-l focus:ring-purple-200 dark:focus:ring-purple-800" },
      pinkToOrange: { base: "text-white bg-linear-to-br from-pink-500 to-orange-400 enabled:hover:bg-linear-to-bl focus:ring-pink-200 dark:focus:ring-pink-800" },
      tealToLime: { base: "text-gray-900 bg-linear-to-r from-teal-200 to-lime-200 enabled:hover:bg-linear-to-l focus:ring-lime-200 dark:focus:ring-teal-700" },
      redToYellow: { base: "text-gray-900 bg-linear-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-linear-to-bl focus:ring-red-100 dark:focus:ring-red-400" }
    },
    outline: {
      true: {
        base: "p-0.5",
        outlineWrapper: "bg-white text-gray-900! dark:bg-gray-900 dark:text-white! enabled:hover:bg-transparent enabled:hover:text-inherit! group-enabled:hover:opacity-0! group-enabled:hover:text-inherit!"
      }
    },
    pill: {
      true: {
        base: "rounded-full",
        outlineWrapper: "rounded-full"
      },
      false: {
        base: "rounded-base",
        outlineWrapper: "rounded-base"
      }
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    },
    shadow: {
      true: {
        base: "shadow-lg"
      }
    },
    group: {
      true: "rounded-none",
      false: ""
    },
    disabled: {
      true: { base: "opacity-50 cursor-not-allowed" }
    }
  },
  compoundVariants: [
    {
      shadow: true,
      color: "blue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "green",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "cyan",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "teal",
      class: { base: "shadow-teal-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "lime",
      class: { base: "shadow-lime-500/50 dark:shadow-lime-800/80" }
    },
    {
      shadow: true,
      color: "red",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      shadow: true,
      color: "pink",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "purple",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "purpleToBlue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "cyanToBlue",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "greenToBlue",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "purpleToPink",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "pinkToOrange",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "tealToLime",
      class: { base: "shadow-lime-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "redToYellow",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      group: true,
      pill: true,
      class: "first:rounded-s-full last:rounded-e-full"
    },
    {
      group: true,
      pill: false,
      class: "first:rounded-s-base last:rounded-e-base"
    }
  ]
});
