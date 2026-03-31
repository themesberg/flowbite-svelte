import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export const checkbox = tv({
  slots: {
    input: "w-4 h-4 border border-default-medium bg-neutral-secondary-medium focus:ring-2 me-2 rounded-xs",
    label: "flex items-center"
  },
  variants: {
    color: {
      brand: {
        input: "text-fg-brand border border-default-medium bg-neutral-secondary-medium focus:ring-brand-soft"
      },
      alternative: {
        input: "border border-default-medium bg-neutral-secondary-medium focus:ring-neutral-tertiary"
      },
      gray: {
        input: "border border-default-medium bg-neutral-secondary-medium focus:ring-neutral-tertiary-soft"
      },
      success: {
        input: "text-success focus:ring-success-soft"
      },
      danger: {
        input: "text-danger focus:ring-danger-soft"
      },
      warning: {
        input: "text-warning focus:ring-warning-soft"
      }
    },
    tinted: {
      true: {},
      false: {}
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
        input: "cursor-not-allowed opacity-50",
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
      true: "outline-4 outline-green-500 z-10"
    }
  },
  defaultVariants: {
    inline: true
  }
});

export type CheckboxButtonVariants = VariantProps<typeof checkboxButton>;
