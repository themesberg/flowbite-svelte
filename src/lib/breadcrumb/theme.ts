import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type BreadcrumbVariants = VariantProps<typeof breadcrumb> & Classes<typeof breadcrumb>;
export type BreadcrumbItemVariants = VariantProps<typeof breadcrumbItem> & Classes<typeof breadcrumbItem>;

export const breadcrumb = tv({
  slots: {
    base: "flex",
    content: "inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
  },
  variants: {
    solid: {
      true: {
        base: "p-3 bg-neutral-secondary-medium border border-default-medium rounded-base"
      },
      false: ""
    }
  },
  defaultVariants: {
    solid: false
  }
});

export const breadcrumbItem = tv({
  slots: {
    base: "",
    link: "inline-flex items-center text-sm font-medium text-body hover:text-fg-brand",
    separator: "w-3.5 h-3.5 rtl:rotate-180 text-body",
    label: "inline-flex items-center text-sm font-medium text-body-subtle"
  },
  variants: {
    home: {
      true: {
        base: "inline-flex items-center"
      },
      false: {
        base: "flex items-center space-x-1.5"
      }
    },
    hasHref: {
      true: "",
      false: ""
    }
  },
  compoundVariants: []
});
