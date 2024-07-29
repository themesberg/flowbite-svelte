import Progressbar from "./Progressbar.svelte";
import { type VariantProps, tv } from 'tailwind-variants';
import type { ProgressBarColorType } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';
import type { EasingFunction } from 'svelte/transition';


export const progressbarVariants = tv({
  base: "w-full bg-gray-200 rounded-full dark:bg-gray-700",
  variants: {
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
    },
    color: {
      primary: "bg-primary-600",
      blue: "bg-blue-600",
      gray: "bg-gray-600 dark:bg-gray-300",
      red: "bg-red-600 dark:bg-red-500",
      green: "bg-green-600 dark:bg-green-500",
      yellow: "bg-yellow-400",
      purple: "bg-purple-600 dark:bg-purple-500",
      indigo: "bg-indigo-600 dark:bg-indigo-500",
    },
    labelPosition: {
      inside: "",
      outside: "",
    },
    animate: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    labelPosition: "outside",
    animate: false,
  },
  slots: {
    base: "w-full bg-gray-200 rounded-full dark:bg-gray-700",
    bar: "rounded-full",
    label: "",
    outsideLabel: "mb-1 flex justify-between",
    insideLabel: "text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full",
  },
  compoundVariants: [
    {
      labelPosition: "inside",
      slots: {
        label: "text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full",
      },
    },
    {
      labelPosition: "outside",
      slots: {
        label: "text-sm font-medium text-blue-700 dark:text-white",
      },
    },
  ],
});

interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string | undefined;
  labelInside?: boolean;
  labelOutside?: string | undefined;
  easing?: EasingFunction;
  color?: ProgressBarColorType;
  div2Class?: string | undefined;
  labeloutsidedivClass?: string | undefined;
  divClass?: string | undefined;
}

export {
  Progressbar,
  type ProgressbarProps
}