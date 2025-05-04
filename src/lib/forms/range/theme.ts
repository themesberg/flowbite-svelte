import { tv, type VariantProps } from "tailwind-variants";

export type RangeVariants = VariantProps<typeof range>;

export const range = tv({
  base: "w-full bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700",
  variants: {
    size: {
      sm: "h-1 range-sm",
      md: "h-2",
      lg: "h-3 range-lg"
    },
    color: {
      // other colors do not work
      gray: "",
      red: "",
      blue: "",
      indigo: "",
      violet: "",
      purple: "",
      fuchsia: "",
      pink: "",
      rose: ""
    },
    appearance: {
      auto: "range accent-red-500",
      none: "appearance-none"
    }
  },
  compoundVariants: [
    {
      appearance: "auto",
      color: "gray",
      class: "accent-gray-500"
    },
    {
      appearance: "auto",
      color: "red",
      class: "accent-red-500"
    },
    {
      appearance: "auto",
      color: "blue",
      class: "accent-blue-500"
    },
    {
      appearance: "auto",
      color: "indigo",
      class: "accent-indigo-500"
    },
    {
      appearance: "auto",
      color: "violet",
      class: "accent-violet-500"
    },
    {
      appearance: "auto",
      color: "purple",
      class: "accent-purple-500"
    },
    {
      appearance: "auto",
      color: "fuchsia",
      class: "accent-fuchsia-500"
    },
    {
      appearance: "auto",
      color: "pink",
      class: "accent-pink-500"
    },
    {
      appearance: "auto",
      color: "rose",
      class: "accent-rose-500"
    }
  ]
});
