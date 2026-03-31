import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type FileuploadVariants = VariantProps<typeof fileupload> & Classes<typeof fileupload>;

export const fileupload = tv({
  slots: {
    input:
      "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-brand focus:border-brand bg-neutral-secondary-medium text-heading text-sm border-default-medium rounded-base border shadow-xs placeholder:text-body file:rounded-s-base",
    base: "relative w-full",
    closeButton: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5",
    closeIcon: ""
  },
  variants: {
    size: {
      sm: { input: "text-xs pe-9" },
      md: { input: "text-sm pe-10" },
      lg: { input: "sm:text-base pe-11" }
    }
  }
});
