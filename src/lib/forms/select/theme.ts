import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type SelectVariants = VariantProps<typeof select> & Classes<typeof select>;
export type MultiSelectVariants = VariantProps<typeof multiSelect> & Classes<typeof multiSelect>;

export const select = tv({
  slots: {
    base: "relative w-full",
    select: "block w-full rtl:text-right",
    close: "absolute right-8 top-1/2 -translate-y-1/2 text-body hover:text-heading",
    svg: ""
  },
  variants: {
    underline: {
      true: {
        select: "text-body bg-transparent rounded-none! border-0 border-b-2 border-default-medium appearance-none focus:outline-hidden focus:ring-0 focus:border-brand peer px-0!"
      },
      false: {
        select: "text-heading bg-neutral-secondary-medium border border-default-medium focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
      }
    },
    size: {
      sm: { select: "text-xs px-2.5 py-2.5" },
      md: { select: "text-sm px-2.5 py-2.5" },
      lg: { select: "text-base py-3 px-4" }
    },
    disabled: {
      true: {
        select: "cursor-not-allowed opacity-50"
      },
      false: {}
    },
    grouped: {
      false: { base: "rounded-base", select: "rounded-base" },
      true: {
        base: "first:rounded-s-base last:rounded-e-base not-first:-ms-px group",
        select: "group-first:rounded-s-base group-last:rounded-e-base group-not-first:-ms-px h-full"
      }
    }
  },
  defaultVariants: {
    underline: false,
    size: "md"
  }
});

export const multiSelect = tv({
  slots: {
    base: "relative border border-default-medium w-full flex items-center gap-2 focus-visible:outline-hidden",
    select: "",
    dropdown:
      "absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-neutral-primary-medium border border-default-medium start-0 top-[calc(100%+1rem)] rounded-base cursor-pointer overflow-y-scroll w-full",
    item: "py-2 px-3 rounded-base text-body hover:text-heading hover:bg-neutral-tertiary-medium",
    close: "p-0 focus:ring-neutral-tertiary text-heading",
    span: "",
    placeholder: "text-body",
    svg: "ms-1 h-3 w-3 cursor-pointer text-heading"
  },
  variants: {
    size: {
      sm: "px-2.5 py-2.5 min-h-[2.4rem] text-xs",
      md: "px-2.5 py-2.5 min-h-[2.7rem] text-sm",
      lg: "px-3 py-3 min-h-[3.2rem] sm:text-base"
    },
    disabled: {
      true: {
        base: "cursor-not-allowed opacity-50 pointer-events-none",
        item: "cursor-not-allowed opacity-50",
        close: "cursor-not-allowed"
      },
      false: { base: "focus-within:border-brand focus-within:ring-1 focus-within:ring-brand" }
    },
    active: {
      true: {
        item: "bg-brand-soft text-fg-brand hover:bg-brand-medium"
      }
    },
    selected: {
      true: {
        item: "bg-neutral-tertiary-medium text-heading font-semibold hover:text-heading"
      }
    },
    grouped: {
      false: { base: "rounded-base", select: "rounded-base" },
      true: {
        base: "first:rounded-s-base last:rounded-e-base not-first:-ms-px group",
        select: "group-first:rounded-s-base group-last:rounded-e-base group-not-first:-ms-px h-full"
      }
    }
  },
  // Add compoundVariants here
  compoundVariants: [
    {
      selected: true,
      active: true,
      class: {
        item: "bg-brand-medium text-fg-brand font-semibold"
      }
    }
  ],
  defaultVariants: {
    size: "md"
  }
});
