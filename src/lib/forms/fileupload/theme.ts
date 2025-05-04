import { tv, type VariantProps } from "tailwind-variants";

export type FileuploadViariants = VariantProps<typeof fileupload>;

export const fileupload = tv({
  slots: {
    base: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right p-2.5 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 text-sm rounded-lg border p-0! dark:text-gray-400",
    wrapper: "relative w-full",
    right: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5"
  },
  variants: {
    size: {
      sm: { base: "text-xs ps-9 pe-9 p-2" },
      md: { base: "text-sm ps-10 pe-10 p-2.5" },
      lg: { base: "sm:text-base ps-11 pe-11 p-3" }
    }
  }
});
