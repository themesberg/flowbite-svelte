import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type PopoverVariants = VariantProps<typeof popover> & Classes<typeof popover>;

export const popover = tv({
  slots: {
    base: "rounded-base shadow-xs bg-neutral-primary-soft text-body border border-default divide-default",
    content: "p-2",
    title: "py-2 px-3 rounded-t-base border-b border-default",
    heading: "font-semibold"
  },
  variants: {
    color: {
      default: {
        title: "bg-neutral-tertiary",
        heading: "text-heading"
      },
      primary: {
        title: "bg-primary-700",
        heading: "text-white"
      },
      secondary: {
        title: "bg-secondary-700",
        heading: "text-white"
      },
      gray: {
        title: "bg-gray-700",
        heading: "text-white"
      },
      red: {
        title: "bg-red-700",
        heading: "text-white"
      },
      orange: {
        title: "bg-orange-700",
        heading: "text-white"
      },
      amber: {
        title: "bg-amber-700",
        heading: "text-white"
      },
      yellow: {
        title: "bg-yellow-500",
        heading: "text-gray-800"
      },
      lime: {
        title: "bg-lime-700",
        heading: "text-white"
      },
      green: {
        title: "bg-green-700",
        heading: "text-white"
      },
      emerald: {
        title: "bg-emerald-700",
        heading: "text-white"
      },
      teal: {
        title: "bg-teal-700",
        heading: "text-white"
      },
      cyan: {
        title: "bg-cyan-700",
        heading: "text-white"
      },
      sky: {
        title: "bg-sky-700",
        heading: "text-white"
      },
      blue: {
        title: "bg-blue-700",
        heading: "text-white"
      },
      indigo: {
        title: "bg-indigo-700",
        heading: "text-white"
      },
      violet: {
        title: "bg-violet-700",
        heading: "text-white"
      },
      purple: {
        title: "bg-purple-700",
        heading: "text-white"
      },
      fuchsia: {
        title: "bg-fuchsia-700",
        heading: "text-white"
      },
      pink: {
        title: "bg-pink-700",
        heading: "text-white"
      },
      rose: {
        title: "bg-rose-700",
        heading: "text-white"
      }
    }
  }
});
