import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

// step indicator
export type StepIndicatorVariants = VariantProps<typeof stepIndicator>;
export const stepIndicator = tv({
  slots: {
    base: "space-y-2 dark:text-white",
    label: "text-base font-semibold",
    container: "flex w-full justify-between gap-2",
    stepWrapper: "relative h-full w-full",
    step: "h-full w-full rounded-xs",
    stepGlow: "absolute -inset-1 rounded-xs opacity-30 blur-sm dark:opacity-25",
    incompleteStep: "h-full w-full rounded-xs bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      xs: { container: "h-1.5" },
      sm: { container: "h-2" },
      md: { container: "h-2.5" },
      lg: { container: "h-3" },
      xl: { container: "h-4" }
    },
    color: {
      primary: {
        step: "data-[state=completed]:bg-primary-500 data-[state=completed]:dark:bg-primary-900 data-[state=current]:bg-primary-800 data-[state=current]:dark:bg-primary-400",
        stepGlow: "bg-primary-800 dark:bg-primary-400"
      },
      secondary: {
        step: "data-[state=completed]:bg-secondary-500 data-[state=completed]:dark:bg-secondary-900 data-[state=current]:bg-secondary-800 data-[state=current]:dark:bg-secondary-400",
        stepGlow: "bg-secondary-800 dark:bg-secondary-400"
      },
      gray: {
        step: "data-[state=completed]:bg-gray-400 data-[state=completed]:dark:bg-gray-500 data-[state=current]:bg-gray-700 data-[state=current]:dark:bg-gray-200",
        stepGlow: "bg-gray-700 dark:bg-gray-200"
      },
      red: {
        step: "data-[state=completed]:bg-red-600 data-[state=completed]:dark:bg-red-900 data-[state=current]:bg-red-900 data-[state=current]:dark:bg-red-500",
        stepGlow: "bg-red-900 dark:bg-red-500"
      },
      yellow: {
        step: "data-[state=completed]:bg-yellow-400 data-[state=completed]:dark:bg-yellow-600 data-[state=current]:bg-yellow-600 data-[state=current]:dark:bg-yellow-400",
        stepGlow: "bg-yellow-600 dark:bg-yellow-400"
      },
      green: {
        step: "data-[state=completed]:bg-green-500 data-[state=completed]:dark:bg-green-900 data-[state=current]:bg-green-800 data-[state=current]:dark:bg-green-400",
        stepGlow: "bg-green-800 dark:bg-green-400"
      },
      indigo: {
        step: "data-[state=completed]:bg-indigo-500 data-[state=completed]:dark:bg-indigo-900 data-[state=current]:bg-indigo-800 data-[state=current]:dark:bg-indigo-400",
        stepGlow: "bg-indigo-800 dark:bg-indigo-400"
      },
      purple: {
        step: "data-[state=completed]:bg-purple-500 data-[state=completed]:dark:bg-purple-900 data-[state=current]:bg-purple-800 data-[state=current]:dark:bg-purple-400",
        stepGlow: "bg-purple-800 dark:bg-purple-400"
      },
      pink: {
        step: "data-[state=completed]:bg-pink-500 data-[state=completed]:dark:bg-pink-900 data-[state=current]:bg-pink-800 data-[state=current]:dark:bg-pink-400",
        stepGlow: "bg-pink-800 dark:bg-pink-400"
      },
      blue: {
        step: "data-[state=completed]:bg-blue-500 data-[state=completed]:dark:bg-blue-900 data-[state=current]:bg-blue-800 data-[state=current]:dark:bg-blue-400",
        stepGlow: "bg-blue-800 dark:bg-blue-400"
      },
      custom: {
        step: "",
        stepGlow: ""
      }
    },
    glow: {
      true: {},
      false: {}
    },
    hideLabel: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      glow: false,
      class: {
        stepGlow: "hidden"
      }
    },
    {
      hideLabel: true,
      class: {
        label: "hidden"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    glow: false,
    hideLabel: false
  }
});

export type StepIndicatorSlots = keyof typeof stepIndicator.slots;
export type StepIndicatorTheme = Partial<Record<StepIndicatorSlots, ClassValue>>;

// Helper function to get step state classes
export const getStepStateClasses = (stepIndex: number, currentStep: number) => {
  if (stepIndex === currentStep - 1) return "data-[state=current]";
  if (stepIndex < currentStep - 1) return "data-[state=completed]";
  return "data-[state=incomplete]";
};
