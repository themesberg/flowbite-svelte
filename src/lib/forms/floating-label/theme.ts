import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type FloatingLabelInputVaratiants = VariantProps<typeof floatingLabelInput> & Classes<typeof floatingLabelInput>;

export const floatingLabelInput = tv({
  slots: {
    base: "relative",
    input: "block w-full text-sm text-heading bg-transparent appearance-none focus:outline-none focus:ring-0 peer",
    label: "absolute text-sm items-center duration-300 z-10 origin-[0] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    close: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
    combo: "absolute top-full right-0 left-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-base border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
    svg: "w-4 h-4 me-1.5"
  },
  variants: {
    variant: {
      filled: {
        base: "relative",
        input: "rounded-t-base px-2.5 pb-2.5 pt-5 bg-neutral-secondary-medium border-0 border-b-2",
        label: "top-4 start-2.5 -translate-y-4 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      },
      outlined: {
        base: "relative",
        input: "px-2.5 pb-2.5 pt-4 rounded-base border-1",
        label:
          "top-2 start-1 -translate-y-4 scale-75 bg-neutral-primary px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      },
      standard: {
        base: "relative z-0",
        input: "py-2.5 px-0 border-0 border-b-2",
        label: "top-3 -z-10 -translate-y-6 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      }
    },
    size: {
      small: {},
      default: {}
    },
    disabled: {
      true: {
        input: "cursor-not-allowed opacity-50 focus:border-default-medium",
        label: "text-fg-disabled cursor-not-allowed peer-focus:text-fg-disabled"
      },
      false: {
        label: "text-body peer-focus:text-fg-brand cursor-text"
      }
    },
    validation: {
      none: {
        input: "border-default-medium focus:border-brand"
      },
      success: {
        input: "border-success focus:border-success",
        label: "text-fg-success-strong peer-focus:text-fg-success-strong"
      },
      error: {
        input: "border-danger focus:border-danger",
        label: "text-fg-danger-strong peer-focus:text-fg-danger-strong"
      }
    },
    withIcon: {
      true: {
        label: "inline-flex items-center"
      },
      false: {}
    }
  },
  compoundVariants: [
    // Size variants for filled
    {
      variant: "filled",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-4",
        label: "top-3"
      }
    },
    {
      variant: "filled",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-5",
        label: "top-4"
      }
    },
    // Size variants for outlined
    {
      variant: "outlined",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-3",
        label: "top-1"
      }
    },
    {
      variant: "outlined",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-4",
        label: "top-2"
      }
    },
    // Size variants for standard
    {
      variant: "standard",
      size: "small",
      class: {
        input: "py-2 px-0",
        label: "top-3"
      }
    },
    {
      variant: "standard",
      size: "default",
      class: {
        input: "py-2.5 px-0",
        label: "top-3"
      }
    },
    // Validation + variant combinations for filled
    {
      variant: "filled",
      validation: "success",
      class: {
        input: "bg-success-soft border-success"
      }
    },
    {
      variant: "filled",
      validation: "error",
      class: {
        input: "bg-danger-soft border-danger"
      }
    },
    // Disabled state overrides focus colors
    {
      disabled: true,
      class: {
        label: "text-fg-disabled peer-focus:text-fg-disabled"
      }
    }
  ],
  defaultVariants: {
    variant: "standard",
    size: "default",
    validation: "none",
    disabled: false,
    withIcon: false
  }
});
