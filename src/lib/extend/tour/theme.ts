import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type TourVariants = VariantProps<typeof tour> & Classes<typeof tour>;

export const tour = tv({
  slots: {
    overlay: "fixed inset-0 bg-black/50 backdrop-blur-sm",
    highlight: ["fixed border-2 pointer-events-none transition-all duration-300", "border-brand", "shadow-[0_0_0_4px_rgba(59,130,246,0.2)]"],
    tooltip: ["fixed bg-neutral-primary-soft rounded-base shadow-2xl", "w-80 max-w-[calc(100vw-2rem)]"],
    arrow: "absolute w-2 h-2 rotate-45 bg-neutral-primary-soft",
    content: "p-5 relative z-10 bg-neutral-primary-soft rounded-base",
    title: "text-lg font-semibold text-heading mb-3",
    description: "text-sm leading-relaxed text-body mb-4",
    progressContainer: "flex gap-2 justify-center",
    progressDot: ["w-2 h-2 rounded-full bg-neutral-tertiary", "hover:bg-neutral-quaternary transition-all duration-200 hover:scale-110"],
    progressDotActive: "!bg-brand w-6! rounded",
    actions: ["flex justify-between items-center px-5 py-4", "border-t border-default relative z-10 bg-neutral-primary-soft rounded-b-base"],
    navigation: "flex gap-2",
    button: ["px-4 py-2 rounded-md text-sm font-medium", "transition-all duration-200"],
    buttonPrimary: ["text-white bg-brand hover:bg-brand-strong"],
    buttonSecondary: ["text-body border border-default", "hover:bg-neutral-secondary-soft hover:border-default-medium"]
  },
  variants: {
    size: {
      sm: {
        tooltip: "w-64",
        content: "p-4",
        actions: "px-4 py-3",
        title: "text-base",
        description: "text-xs",
        button: "px-3 py-1.5 text-xs"
      },
      md: {
        tooltip: "w-80",
        content: "p-5",
        actions: "px-5 py-4",
        title: "text-lg",
        description: "text-sm",
        button: "px-4 py-2 text-sm"
      },
      lg: {
        tooltip: "w-96",
        content: "p-6",
        actions: "px-6 py-5",
        title: "text-xl",
        description: "text-base",
        button: "px-5 py-2.5 text-base"
      }
    },
    color: {
      primary: {
        highlight: "border-brand shadow-[0_0_0_4px_rgba(59,130,246,0.2)]",
        progressDotActive: "!bg-brand",
        buttonPrimary: "bg-brand hover:bg-brand-strong"
      },
      blue: {
        highlight: "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]",
        progressDotActive: "!bg-blue-500",
        buttonPrimary: "bg-blue-500 hover:bg-blue-600"
      },
      purple: {
        highlight: "border-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.2)]",
        progressDotActive: "!bg-purple-500",
        buttonPrimary: "bg-purple-500 hover:bg-purple-600"
      },
      green: {
        highlight: "border-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.2)]",
        progressDotActive: "!bg-green-500",
        buttonPrimary: "bg-green-500 hover:bg-green-600"
      },
      red: {
        highlight: "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.2)]",
        progressDotActive: "!bg-red-500",
        buttonPrimary: "bg-red-500 hover:bg-red-600"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "blue"
  }
});
