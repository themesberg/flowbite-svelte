import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type CardVariants = VariantProps<typeof card> & Classes<typeof card>;

export const card = tv({
  slots: {
    base: "w-full flex max-w-sm bg-neutral-primary-soft border border-default rounded-base",
    image: "rounded-base"
  },
  variants: {
    hoverable: {
      true: { base: "hover:bg-neutral-secondary-medium" },
      false: {}
    },
    size: {
      xs: { base: "max-w-xs" },
      sm: { base: "max-w-sm" },
      md: { base: "max-w-lg" },
      lg: { base: "max-w-2xl" },
      xl: { base: "max-w-none" }
    },
    shadow: {
      xs: { base: "shadow-xs" },
      sm: { base: "shadow-sm" },
      normal: { base: "shadow" },
      md: { base: "shadow-md" },
      lg: { base: "shadow-lg" },
      xl: { base: "shadow-xl" },
      "2xl": { base: "shadow-2xl" },
      inner: { base: "shadow-inner" }
    },
    horizontal: {
      true: {
        base: "md:flex-row",
        image: "object-cover w-full h-96 md:h-auto md:w-48"
      }
    },
    reverse: {
      true: { base: "flex-col-reverse" },
      false: { base: "flex-col" }
    },
    href: {
      true: "",
      false: ""
    },
    hasImage: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      horizontal: true,
      reverse: true,
      class: { base: "md:flex-row-reverse", image: "md:rounded-e-base" }
    },
    {
      horizontal: true,
      reverse: false,
      class: { base: "md:flex-row", image: "md:rounded-s-base" }
    },
    // gray, primary, secondary, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      href: true,
      color: "gray",
      class: { base: "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" }
    },
    {
      href: true,
      color: "primary",
      class: { base: "cursor-pointer hover:bg-primary-500 dark:hover:bg-primary-700" }
    },
    {
      href: true,
      color: "secondary",
      class: { base: "cursor-pointer hover:bg-secondary-500 dark:hover:bg-secondary-700" }
    },
    {
      href: true,
      color: "red",
      class: { base: "cursor-pointer hover:bg-red-500 dark:hover:bg-red-700" }
    },
    {
      href: true,
      color: "orange",
      class: { base: "cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-700" }
    },
    {
      href: true,
      color: "amber",
      class: { base: "cursor-pointer hover:bg-amber-500 dark:hover:bg-amber-700" }
    },
    {
      href: true,
      color: "yellow",
      class: { base: "cursor-pointer hover:bg-yellow-500 dark:hover:bg-yellow-700" }
    },
    {
      href: true,
      color: "lime",
      class: { base: "cursor-pointer hover:bg-lime-500 dark:hover:bg-lime-700" }
    },
    {
      href: true,
      color: "green",
      class: { base: "cursor-pointer hover:bg-green-500 dark:hover:bg-green-700" }
    },
    {
      href: true,
      color: "emerald",
      class: { base: "cursor-pointer hover:bg-emerald-500 dark:hover:bg-emerald-700" }
    },
    {
      href: true,
      color: "teal",
      class: { base: "cursor-pointer hover:bg-teal-500 dark:hover:bg-teal-700" }
    },
    {
      href: true,
      color: "cyan",
      class: { base: "cursor-pointer hover:bg-cyan-500 dark:hover:bg-cyan-700" }
    },
    {
      href: true,
      color: "sky",
      class: { base: "cursor-pointer hover:bg-sky-500 dark:hover:bg-sky-700" }
    },
    {
      href: true,
      color: "blue",
      class: { base: "cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700" }
    },
    {
      href: true,
      color: "indigo",
      class: { base: "cursor-pointer hover:bg-indigo-500 dark:hover:bg-indigo-700" }
    },
    {
      href: true,
      color: "violet",
      class: { base: "cursor-pointer hover:bg-violet-500 dark:hover:bg-violet-700" }
    },
    {
      href: true,
      color: "purple",
      class: { base: "cursor-pointer hover:bg-purple-500 dark:hover:bg-purple-700" }
    },
    {
      href: true,
      color: "fuchsia",
      class: { base: "cursor-pointer hover:bg-fuchsia-500 dark:hover:bg-fuchsia-700" }
    },
    {
      href: true,
      color: "pink",
      class: { base: "cursor-pointer hover:bg-pink-500 dark:hover:bg-pink-700" }
    },
    {
      href: true,
      color: "rose",
      class: { base: "cursor-pointer hover:bg-rose-500 dark:hover:bg-rose-700" }
    }
  ],
  defaultVariants: {
    size: "sm",
    shadow: "normal",
    horizontal: false,
    reverse: false
  }
});
