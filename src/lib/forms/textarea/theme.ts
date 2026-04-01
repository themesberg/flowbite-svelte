import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";
// Variants
export type TextareaVariants = VariantProps<typeof textarea> & Classes<typeof textarea>;

export const textarea = tv({
  slots: {
    container: "relative",
    base: "block w-full text-sm text-heading border-0 px-0 bg-transparent focus:outline-hidden focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-body",
    wrapper: "text-sm rounded-base bg-neutral-secondary-medium text-heading border border-default-medium shadow-xs disabled:cursor-not-allowed disabled:opacity-50",
    inner: "py-2 px-4 bg-neutral-secondary-medium",
    header: "py-2 px-3 border-default-medium",
    footer: "py-2 px-3 border-default-medium",
    addon: "absolute top-2 right-2 z-10",
    close: "absolute right-2 top-5 -translate-y-1/2 text-gray-400 hover:text-black",
    svg: ""
  },
  variants: {
    wrapped: {
      false: {
        wrapper: "p-3.5 focus:outline-hidden focus:ring-brand focus:border-brand placeholder:text-body disabled:cursor-not-allowed disabled:opacity-50"
      }
    },
    hasHeader: {
      true: {
        header: "border-b"
      },
      false: {
        inner: "rounded-t-base"
      }
    },
    hasFooter: {
      true: {
        footer: "border-t"
      },
      false: {
        inner: "rounded-b-base"
      }
    }
  }
});
