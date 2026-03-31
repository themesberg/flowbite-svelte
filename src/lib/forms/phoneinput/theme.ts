import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type PhoneInputVariants = VariantProps<typeof phoneInput> & Classes<typeof phoneInput>;

export const phoneInput = tv({
  slots: {
    iconWrapper: "absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none",
    icon: "w-4 h-4 text-body",
    input:
      "block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body disabled:cursor-not-allowed disabled:opacity-50",
    floatingIconWrapper: "absolute start-0 bottom-3 text-body",
    floatingInput:
      "block py-2.5 ps-6 pe-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer disabled:cursor-not-allowed disabled:opacity-50",
    label:
      "absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
  },
  variants: {
    phoneType: {
      default: {},
      floating: {
        icon: "w-4 h-4 rtl:rotate-[270deg]"
      },
      countryCode: {
        input: "rounded-none rounded-e-base"
      },
      copy: {},
      advanced: {}
    },
    phoneIcon: {
      true: { input: "ps-10" },
      false: {}
    }
  }
});
