import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type FileuploadViariants = VariantProps<typeof fileupload> & Classes<typeof fileupload>;

export const fileupload = tv({
  slots: {
    input: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-brand focus:border-brand bg-neutral-secondary-medium text-heading text-sm dark:placeholder-gray-400 border-default-medium rounded-base border  shadow-xs placeholder:text-body",
    base: "relative w-full",
    closeButton: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5",
    closeIcon: ""
  },
  variants: {
    size: {
      sm: { input: "text-xs ps-9 pe-9 p-2" },
      md: { input: "text-sm ps-10 pe-10 p-2.5" },
      lg: { input: "sm:text-base ps-11 pe-11 p-3" }
    }
  }
});
