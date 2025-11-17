import { tv, type VariantProps } from "tailwind-variants";

export type SpinnerVaraiants = VariantProps<typeof spinner>;

export const spinner = tv({
  base: "inline-block",
  variants: {
    type: {
      default: "animate-spin",
      dots: "inline-flex items-center justify-center",
      bars: "inline-flex items-center justify-center",
      pulse: "animate-pulse",
      orbit: "",
      loading: "animate-spin"
    },
    color: {
      primary: "fill-primary-600 text-gray-300",
      secondary: "fill-secondary-600 text-gray-300",
      gray: "fill-gray-600 dark:fill-gray-300 text-gray-300",
      red: "fill-red-600 text-gray-300",
      orange: "fill-orange-500 text-gray-300",
      amber: "fill-amber-500 text-gray-300",
      yellow: "fill-yellow-400 text-gray-300",
      lime: "fill-lime-500 text-gray-300",
      green: "fill-green-500 text-gray-300",
      emerald: "fill-emerald-500 text-gray-300",
      teal: "fill-teal-500 text-gray-300",
      cyan: "fill-cyan-500 text-gray-300",
      sky: "fill-sky-500 text-gray-300",
      blue: "fill-blue-600 text-gray-300",
      indigo: "fill-indigo-600 text-gray-300",
      violet: "fill-violet-600 text-gray-300",
      purple: "fill-purple-600 text-gray-300",
      fuchsia: "fill-fuchsia-600 text-gray-300",
      pink: "fill-pink-600 text-gray-300",
      rose: "fill-rose-600 text-gray-300",
      light: "fill-white text-gray-900",
      dark: "fill-gray-800 text-white",
      alternative: "fill-transparent text-gray-900"
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
