import { tv, type VariantProps } from "tailwind-variants";

// Variants no need to extend Classes because all slots are used with base.
export type ButtonVariants = VariantProps<typeof button>;
export type GradientButtonVariants = VariantProps<typeof gradientButton>;

/**
 * Button component theme
 *
 * Anatomical Selectors:
 * - data-scope="button" - Applied to the root button element
 * - data-part="base" - The main button element (matches 'base' slot)
 * - data-part="spinner" - The loading spinner element (matches 'spinner' slot)
 *
 * The 'outline' and 'shadow' slots are styling modifiers applied to the base element.
 */
export const button = tv({
  slots: {
    base: "text-center font-medium inline-flex items-center justify-center shadow-xs leading-5 focus:outline-none focus:ring-4 text-sm px-4 py-2.5",
    outline: "bg-transparent border focus:ring-4",
    shadow: "shadow-lg",
    spinner: "ms-2"
  },
  variants: {
    color: {
      brand: {
        base: "text-white bg-brand border border-transparent enabled:hover:bg-brand-strong focus:ring-brand-medium",
        outline: "text-fg-brand bg-neutral-primary border border-brand enabled:hover:bg-brand enabled:hover:text-white focus:ring-brand-subtle",
        shadow: "shadow-brand-500/50 dark:shadow-brand-800/80"
      },
      alternative: {
        base: "text-body bg-neutral-secondary-medium border border-default-medium enabled:hover:bg-neutral-tertiary-medium enabled:hover:text-heading focus:ring-neutral-tertiary",
        outline: "text-body bg-neutral-primary border border-default-medium enabled:hover:bg-neutral-secondary-medium enabled:hover:text-heading focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      gray: {
        base: "text-body bg-neutral-primary-soft border border-default enabled:hover:bg-neutral-secondary-medium enabled:hover:text-heading focus:ring-neutral-tertiary-soft",
        outline: "text-body bg-neutral-primary border border-default enabled:hover:bg-neutral-secondary-soft enabled:hover:text-heading focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      success: {
        base: "text-white bg-success border border-transparent enabled:hover:bg-success-strong focus:ring-success-medium",
        outline: "text-success bg-neutral-primary border border-success enabled:hover:bg-success enabled:hover:text-white focus:ring-success-subtle",
        shadow: "shadow-green-500/50 dark:shadow-green-800/80"
      },
      danger: {
        base: "text-white bg-danger border border-transparent enabled:hover:bg-danger-strong focus:ring-danger-medium",
        outline: "text-danger bg-neutral-primary border border-danger enabled:hover:bg-danger enabled:hover:text-white focus:ring-danger-subtle",
        shadow: "shadow-red-500/50 dark:shadow-red-800/80"
      },
      warning: {
        base: "text-white bg-warning border border-transparent enabled:hover:bg-warning-strong focus:ring-warning-medium",
        outline: "text-warning bg-neutral-primary border border-warning enabled:hover:bg-warning enabled:hover:text-white focus:ring-warning-subtle",
        shadow: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
      },
      transparent: {
        base: "text-heading bg-transparent border border-transparent enabled:hover:bg-neutral-secondary-medium focus:ring-neutral-tertiary",
        outline: "text-heading bg-transparent border border-default enabled:hover:bg-neutral-secondary-medium focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      dark: {
        base: "text-white bg-dark border border-transparent enabled:hover:bg-dark-strong focus:ring-neutral-tertiary",
        outline: "text-gray-600 dark:text-gray-400 bg-neutral-primary border border-dark enabled:hover:bg-dark enabled:hover:text-white focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      ghost: {
        base: "text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary focus:outline-none",
        outline: "",
        shadow: ""
      },
      // legacy colors
      // pattern used
      // base: "text-white bg-{color} border border-transparent enabled:hover:bg-{color}-strong focus:ring-{color}-medium",
      // outline: "text-{color} bg-neutral-primary border border-{color} enabled:hover:bg-{color} enabled:hover:text-white focus:ring-{color}-subtle",
      // shadow: "shadow-{color}-500/50 dark:shadow-{color}-800/80"
      primary: {
        base: "text-white bg-primary border border-transparent enabled:hover:bg-primary-strong focus:ring-primary-medium",
        outline:
          "text-primary bg-neutral-primary border border-primary enabled:hover:bg-primary enabled:hover:text-white focus:ring-primary-subtle",
        shadow: "shadow-primary-500/50 dark:shadow-primary-800/80"
      },
      secondary: {
        base: "text-white bg-secondary border border-transparent enabled:hover:bg-secondary-strong focus:ring-secondary-medium",
        outline:
          "text-secondary bg-neutral-primary border border-secondary enabled:hover:bg-secondary enabled:hover:text-white focus:ring-secondary-subtle",
        shadow: "shadow-secondary-500/50 dark:shadow-secondary-800/80"
      },
      light: {
        base: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
        outline: "text-gray-700 border-gray-700 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      amber: {
        base: "text-white bg-amber border border-transparent enabled:hover:bg-amber-strong focus:ring-amber-medium",
        outline:
          "text-amber bg-neutral-primary border border-amber enabled:hover:bg-amber enabled:hover:text-white focus:ring-amber-subtle",
        shadow: "shadow-amber-500/50 dark:shadow-amber-800/80"
      },
      blue: {
        base: "text-white bg-blue border border-transparent enabled:hover:bg-blue-strong focus:ring-blue-medium",
        outline:
          "text-blue bg-neutral-primary border border-blue enabled:hover:bg-blue enabled:hover:text-white focus:ring-blue-subtle",
        shadow: "shadow-blue-500/50 dark:shadow-blue-800/80"
      },
      cyan: {
        base: "text-white bg-cyan border border-transparent enabled:hover:bg-cyan-strong focus:ring-cyan-medium",
        outline:
          "text-cyan bg-neutral-primary border border-cyan enabled:hover:bg-cyan enabled:hover:text-white focus:ring-cyan-subtle",
        shadow: "shadow-cyan-500/50 dark:shadow-cyan-800/80"
      },
      emerald: {
        base: "text-white bg-emerald border border-transparent enabled:hover:bg-emerald-strong focus:ring-emerald-medium",
        outline:
          "text-emerald bg-neutral-primary border border-emerald enabled:hover:bg-emerald enabled:hover:text-white focus:ring-emerald-subtle",
        shadow: "shadow-emerald-500/50 dark:shadow-emerald-800/80"
      },
      fuchsia: {
        base: "text-white bg-fuchsia border border-transparent enabled:hover:bg-fuchsia-strong focus:ring-fuchsia-medium",
        outline:
          "text-fuchsia bg-neutral-primary border border-fuchsia enabled:hover:bg-fuchsia enabled:hover:text-white focus:ring-fuchsia-subtle",
        shadow: "shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80"
      },      green: {
        base: "text-white bg-green border border-transparent enabled:hover:bg-green-strong focus:ring-green-medium",
        outline:
          "text-green bg-neutral-primary border border-green enabled:hover:bg-green enabled:hover:text-white focus:ring-green-subtle",
        shadow: "shadow-green-500/50 dark:shadow-green-800/80"
      },
      indigo: {
        base: "text-white bg-indigo border border-transparent enabled:hover:bg-indigo-strong focus:ring-indigo-medium",
        outline:
          "text-indigo bg-neutral-primary border border-indigo enabled:hover:bg-indigo enabled:hover:text-white focus:ring-indigo-subtle",
        shadow: "shadow-indigo-500/50 dark:shadow-indigo-800/80"
      },
      lime: {
        base: "text-white bg-lime border border-transparent enabled:hover:bg-lime-strong focus:ring-lime-medium",
        outline:
          "text-lime bg-neutral-primary border border-lime enabled:hover:bg-lime enabled:hover:text-white focus:ring-lime-subtle",
        shadow: "shadow-lime-500/50 dark:shadow-lime-800/80"
      },
      orange: {
        base: "text-white bg-orange border border-transparent enabled:hover:bg-orange-strong focus:ring-orange-medium",
        outline:
          "text-orange bg-neutral-primary border border-orange enabled:hover:bg-orange enabled:hover:text-white focus:ring-orange-subtle",
        shadow: "shadow-orange-500/50 dark:shadow-orange-800/80"
      },
      pink: {
        base: "text-white bg-pink border border-transparent enabled:hover:bg-pink-strong focus:ring-pink-medium",
        outline:
          "text-pink bg-neutral-primary border border-pink enabled:hover:bg-pink enabled:hover:text-white focus:ring-pink-subtle",
        shadow: "shadow-pink-500/50 dark:shadow-pink-800/80"
      },
      purple: {
        base: "text-white bg-purple border border-transparent enabled:hover:bg-purple-strong focus:ring-purple-medium",
        outline:
          "text-purple bg-neutral-primary border border-purple enabled:hover:bg-purple enabled:hover:text-white focus:ring-purple-subtle",
        shadow: "shadow-purple-500/50 dark:shadow-purple-800/80"
      },
      red: {
        base: "text-white bg-red border border-transparent enabled:hover:bg-red-strong focus:ring-red-medium",
        outline:
          "text-red bg-neutral-primary border border-red enabled:hover:bg-red enabled:hover:text-white focus:ring-red-subtle",
        shadow: "shadow-red-500/50 dark:shadow-red-800/80"
      },
      rose: {
        base: "text-white bg-rose border border-transparent enabled:hover:bg-rose-strong focus:ring-rose-medium",
        outline:
          "text-rose bg-neutral-primary border border-rose enabled:hover:bg-rose enabled:hover:text-white focus:ring-rose-subtle",
        shadow: "shadow-rose-500/50 dark:shadow-rose-800/80"
      },
      sky: {
        base: "text-white bg-sky border border-transparent enabled:hover:bg-sky-strong focus:ring-sky-medium",
        outline:
          "text-sky bg-neutral-primary border border-sky enabled:hover:bg-sky enabled:hover:text-white focus:ring-sky-subtle",
        shadow: "shadow-sky-500/50 dark:shadow-sky-800/80"
      },
      teal: {
        base: "text-white bg-teal border border-transparent enabled:hover:bg-teal-strong focus:ring-teal-medium",
        outline:
          "text-teal bg-neutral-primary border border-teal enabled:hover:bg-teal enabled:hover:text-white focus:ring-teal-subtle",
        shadow: "shadow-teal-500/50 dark:shadow-teal-800/80"
      },
      violet: {
        base: "text-white bg-violet border border-transparent enabled:hover:bg-violet-strong focus:ring-violet-medium",
        outline:
          "text-violet bg-neutral-primary border border-violet enabled:hover:bg-violet enabled:hover:text-white focus:ring-violet-subtle",
        shadow: "shadow-violet-500/50 dark:shadow-violet-800/80"
      },
      yellow: {
        base: "text-white bg-yellow border border-transparent enabled:hover:bg-yellow-strong focus:ring-yellow-medium",
        outline:
          "text-yellow bg-neutral-primary border border-yellow enabled:hover:bg-yellow enabled:hover:text-white focus:ring-yellow-subtle",
        shadow: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
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
      true: "focus:ring-2 focus:z-10 [&:not(:first-child)]:rounded-s-none [&:not(:last-child)]:rounded-e-none [&:not(:last-child)]:border-e-0",
      false: "focus:ring-4 focus:outline-hidden"
    },
    disabled: {
      true: "cursor-not-allowed text-fg-disabled bg-disabled box-border border border-default-medium font-medium rounded-base text-sm px-4 py-2.5",
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

/**
 * Gradient Button component theme
 *
 * Anatomical Selectors:
 * - data-scope="button" - Applied to the root button element
 * - data-part="base" - The main button element (matches 'base' slot)
 * - data-part="outlineWrapper" - The wrapper for outline variants (matches 'outlineWrapper' slot)
 */
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
        outlineWrapper:
          "bg-white text-gray-900! dark:bg-gray-900 dark:text-white! enabled:hover:bg-transparent enabled:hover:text-inherit! group-enabled:hover:opacity-0! group-enabled:hover:text-inherit!"
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
