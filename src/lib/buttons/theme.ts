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
        outline: "text-dark bg-neutral-primary border border-dark enabled:hover:bg-dark enabled:hover:text-white focus:ring-neutral-tertiary",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      ghost: {
        base: "text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary focus:outline-none",
        outline: "",
        shadow: ""
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
