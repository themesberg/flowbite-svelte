import { tv, type VariantProps } from "tailwind-variants";

export type IndicatorVariants = VariantProps<typeof indicator>;

export const indicator = tv({
  base: "shrink-0",
  variants: {
    color: {
      // 'primary' secondary 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      gray: "bg-gray-200",
      red: "bg-red-500",
      orange: "bg-orange-600",
      amber: "bg-amber-500",
      yellow: "bg-yellow-300",
      lime: "bg-lime-500",
      green: "bg-green-500",
      emerald: "bg-emerald-500",
      teal: "bg-teal-500",
      cyan: "bg-cyan-500",
      sky: "bg-sky-500",
      blue: "bg-blue-500",
      indigo: "bg-indigo-500",
      violet: "bg-violet-500",
      purple: "bg-purple-500",
      fuchsia: "bg-fuchsia-500",
      pink: "bg-pink-500",
      rose: "bg-rose-500"
    },
    size: {
      xs: "w-2 h-2",
      sm: "w-2.5 h-2.5",
      md: "w-3 h-3",
      lg: "w-3.5 h-3.5",
      xl: "w-6 h-6"
    },
    cornerStyle: {
      rounded: "rounded-sm",
      circular: "rounded-full"
    },
    border: {
      true: "border border-gray-300 dark:border-gray-300",
      false: {}
    },
    hasChildren: {
      true: "inline-flex items-center justify-center",
      false: {}
    },
    placement: {
      default: "",
      "top-left": "absolute top-0 start-0",
      "top-center": "absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
      "top-right": "absolute top-0 end-0",
      "center-left": "absolute top-1/2 -translate-y-1/2 start-0",
      center: "absolute top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
      "center-right": "absolute top-1/2 -translate-y-1/2 end-0",
      "bottom-left": "absolute bottom-0 start-0",
      "bottom-center": "absolute bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
      "bottom-right": "absolute bottom-0 end-0"
    },
    offset: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      placement: "top-left",
      offset: true,
      class: "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3"
    },
    {
      placement: "top-center",
      offset: true,
      class: "-translate-y-1/3"
    },
    {
      placement: "top-right",
      offset: true,
      class: "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3"
    },
    {
      placement: "center-left",
      offset: true,
      class: "-translate-x-1/3 rtl:translate-x-1/3"
    },
    {
      placement: "center-right",
      offset: true,
      class: "translate-x-1/3 rtl:-translate-x-1/3"
    },
    {
      placement: "bottom-left",
      offset: true,
      class: "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3"
    },
    {
      placement: "bottom-center",
      offset: true,
      class: "translate-y-1/3"
    },
    {
      placement: "bottom-right",
      offset: true,
      class: "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    cornerStyle: "circular",
    border: false,
    offset: true,
    hasChildren: false
  }
});
