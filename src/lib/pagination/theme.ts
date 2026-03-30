import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type PaginationNavVariants = VariantProps<typeof paginationNav> & Classes<typeof paginationNav>;
export type PaginationVariants = VariantProps<typeof pagination>;
export type PaginationItemVariants = VariantProps<typeof paginationItem>;

export const pagination = tv({
  base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
  variants: {
    table: {
      true: "divide-x rtl:divide-x-reverse divide-default",
      false: ""
    },
    size: {
      default: "",
      large: ""
    }
  },
  defaultVariants: {
    table: false,
    size: "default"
  }
});

export const paginationButton = tv({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-fg-brand bg-neutral-tertiary-medium border border-default-medium hover:text-fg-brand",
      false: "text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading"
    },
    group: {
      true: "",
      false: "rounded-base"
    },
    table: {
      true: "rounded-sm",
      false: "border border-default-medium"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  compoundVariants: [],
  defaultVariants: {
    size: "default",
    active: false,
    group: false,
    table: false
  }
});

export const paginationNav = tv({
  slots: {
    base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
    tableInfo: "flex items-center text-sm mb-4",
    pageNumber: "font-semibold mx-1",
    prev: "rounded-none",
    next: "rounded-none",
    active: ""
  },
  variants: {
    size: {
      default: "",
      large: ""
    },
    layout: {
      table: {
        prev: "rounded-s-base text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading",
        next: "rounded-e-base text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading"
      },
      navigation: { prev: "rounded-s-base", next: "rounded-e-base" },
      pagination: { prev: "rounded-s-base", next: "rounded-e-base" }
    }
  },
  defaultVariants: {
    layout: "pagination",
    size: "default"
  }
});

export const paginationItem = tv({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-fg-brand bg-neutral-tertiary-medium border border-default-medium hover:text-fg-brand",
      false: "text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading"
    },
    group: {
      true: "",
      false: "rounded-base"
    },
    table: {
      true: "rounded-sm",
      false: "border border-default-medium"
    }
  },
  compoundVariants: [
    {
      group: false,
      table: false,
      class: "rounded-base"
    }
  ],
  defaultVariants: {
    size: "default",
    active: false,
    group: false,
    table: false
  }
});
