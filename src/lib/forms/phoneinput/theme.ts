import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export type phoneInputClasses = Partial<{
  [K in keyof (typeof phoneinput)["slots"]]: ClassValue;
}>;

export type PhoneInputVariants = VariantProps<typeof phoneinput> & { classes?: phoneInputClasses };

export const phoneinput = tv({
  slots: {
    defaultDiv: "absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none",
    phonesvg: "w-4 h-4 text-gray-500 dark:text-gray-400",
    defaultInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
    floatingSpan: "absolute start-0 bottom-3 text-gray-500 dark:text-gray-400",
    floatingInput: "block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer",
    labelFloating: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
  },
  variants: {
    phoneType: {
      default: {},
      floating: {
        phonesvg: "w-4 h-4 rtl:rotate-[270deg]"
      },
      countryCode: {
        defaultInput: "rounded-none rounded-e-lg"
      },
      copy: {},
      advanced: {}
    },
    phoneIcon: {
      true: { defaultInput: "ps-10" },
      false: {}
    }
  }
});

export type PhoneInputSlots = keyof typeof phoneinput.slots;
export type PhoneInputTheme = Partial<Record<PhoneInputSlots, string>>;
