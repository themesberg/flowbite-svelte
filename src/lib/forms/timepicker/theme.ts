import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type TimepickerVariants = VariantProps<typeof timepicker> & Classes<typeof timepicker>;

export const timepicker = tv({
  slots: {
    buttonGroup: "inline-flex rounded-lg shadow-sm relative",
    input: "block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none",
    inputWithIcon: "relative px-2 pr-8",
    iconWrapper: "pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5",
    icon: "h-4 w-4 text-body",
    select:
      "text-heading disabled:text-fg-disabled bg-neutral-secondary-medium border border-default-medium focus:ring-0 focus:outline-none block w-full border-l-1 focus:ring-brand focus:border-brand placeholder:text-body",
    button: "!rounded-r-lg",
    buttonIcon: "ml-2 h-4 w-4",
    rangeSeparator: "flex items-center justify-center px-2 text-body",
    rangeInputWrapper: "relative",
    rangeInput: "relative pr-8",
    rangeStartInput: "rounded-s-base !rounded-e-none",
    rangeEndInput: "rounded-e-base !rounded-s-none",
    rangeButton: "pointer-events-none absolute inset-y-0 top-0 right-0 flex items-center border-0 bg-transparent pe-3.5",
    dropdownContent: "p-4 last:rounded-r-lg",
    dropdownInner: "flex flex-col space-y-4",
    dropdownTimeRow: "flex space-x-4",
    dropdownTimeCol: "flex flex-col",
    dropdownTimeInput: "w-24 rounded-l-lg !border-r px-2",
    dropdownButton: "w-full !rounded-l-lg",
    toggleWrapper: "flex w-full flex-col space-y-2",
    toggleRow: "flex items-center justify-between",
    toggleTimeRow: "flex space-x-4 p-2.5",
    toggleTimeCol: "flex flex-col",
    toggleTimeInput: "w-24 rounded-lg !border-r px-2",
    inlineGrid: "grid w-full gap-2",
    inlineButton: "rounded-lg"
  },
  variants: {
    type: {
      default: {
        input: "rounded-e-lg"
      },
      select: {
        input: "w-1/3 rounded-l-lg rounded-e-none",
        select: "rounded-r-lg rounded-l-none"
      },
      dropdown: {
        input: "rounded-l-lg rounded-e-none"
      },
      range: {},
      "timerange-dropdown": {},
      "timerange-toggle": {},
      "inline-buttons": {}
    },
    columns: {
      1: {
        inlineGrid: "grid-cols-1"
      },
      2: {
        inlineGrid: "grid-cols-2"
      },
      3: {
        inlineGrid: "grid-cols-3"
      },
      4: {
        inlineGrid: "grid-cols-4"
      }
    },
    disabled: {
      true: {
        input: "disabled:cursor-not-allowed disabled:opacity-50"
      }
    }
  },
  defaultVariants: {
    type: "default",
    columns: 2,
    disabled: false
  }
});
