import { tv, type VariantProps } from "tailwind-variants";

export type SpinnerVariants = VariantProps<typeof spinner>;

export const spinner = tv({
  base: "inline-block",
  variants: {
    type: {
      default: "animate-spin",
      dots: "inline-flex items-center justify-center",
      bars: "inline-flex items-center justify-center",
      pulse: "animate-pulse",
      orbit: ""
    },
    color: {
      primary: "fill-brand text-neutral-tertiary",
      secondary: "fill-secondary-600 text-neutral-tertiary",
      gray: "fill-dark dark:fill-quaternary text-neutral-tertiary",
      red: "fill-red-600 text-neutral-tertiary",
      orange: "fill-orange-500 text-neutral-tertiary",
      amber: "fill-amber-500 text-neutral-tertiary",
      yellow: "fill-yellow-400 text-neutral-tertiary",
      lime: "fill-lime-500 text-neutral-tertiary",
      green: "fill-green-500 text-neutral-tertiary",
      emerald: "fill-emerald-500 text-neutral-tertiary",
      teal: "fill-teal-500 text-neutral-tertiary",
      cyan: "fill-cyan-500 text-neutral-tertiary",
      sky: "fill-sky-500 text-neutral-tertiary",
      blue: "fill-blue-600 text-neutral-tertiary",
      indigo: "fill-indigo-600 text-neutral-tertiary",
      violet: "fill-violet-600 text-neutral-tertiary",
      purple: "fill-purple-600 text-neutral-tertiary",
      fuchsia: "fill-fuchsia-600 text-neutral-tertiary",
      pink: "fill-pink-600 text-neutral-tertiary",
      rose: "fill-rose-600 text-neutral-tertiary"
    },
    size: {
      "4": "w-4 h-4",
      "5": "w-5 h-5",
      "6": "w-6 h-6",
      "8": "w-8 h-8",
      "10": "w-10 h-10",
      "12": "w-12 h-12",
      "16": "w-16 h-16"
    }
  },
  defaultVariants: {
    type: "default",
    color: "primary",
    size: "8"
  }
});
