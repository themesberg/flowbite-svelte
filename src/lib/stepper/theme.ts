import { tv } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

// Stepper
export type StepperClasses = Partial<{
  stepper: ClassValue;
  stepperitem: ClassValue;
  steppercontent: ClassValue;
}>;

export type StepperVariants = {
  classes?: StepperClasses;
};

export const stepper = {
  base: tv({
    base: "flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
  }),
  item: tv({
    base: "flex items-center",
    variants: {
      status: {
        completed: "text-primary-600 dark:text-primary-500 md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        current: "md:w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        pending: "md:w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
      },
      isLast: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        isLast: true,
        class: "after:content-none after:hidden"
      }
    ],
    defaultVariants: {
      status: "pending",
      isLast: false
    }
  }),
  content: tv({
    base: "flex items-center",
    variants: {
      status: {
        completed: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500",
        current: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500",
        pending: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
      },
      isLast: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        isLast: true,
        class: "after:content-none"
      }
    ],
    defaultVariants: {
      status: "pending",
      isLast: false
    }
  })
};

export type StepperTheme = {
  base?: string;
  item?: string;
  content?: string;
};

// ProgressStepper
export type ProgressStepperClasses = Partial<{
  progressstepper: ClassValue;
  progressstepperitem: ClassValue;
  progresssteppercircle: ClassValue;
}>;

export type ProgressStepperVariants = {
  classes?: ProgressStepperClasses;
};

export const progressStepper = {
  stepper: tv({
    base: "flex items-center w-full"
  }),
  item: tv({
    base: "flex items-center w-full",
    variants: {
      status: {
        completed: "text-primary-600 dark:text-primary-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-100 after:border-4 after:inline-block dark:after:border-primary-800",
        current: "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700",
        pending: "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
      },
      isLast: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        isLast: true,
        class: "after:content-none"
      }
    ],
    defaultVariants: {
      status: "pending",
      isLast: false
    }
  }),
  circle: tv({
    base: "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0",
    variants: {
      status: {
        completed: "bg-primary-100 dark:bg-primary-800",
        current: "bg-gray-100 dark:bg-gray-700",
        pending: "bg-gray-100 dark:bg-gray-700"
      }
    },
    defaultVariants: {
      status: "pending"
    }
  })
};

export type ProgressStepperTheme = {
  stepper?: string;
  item?: string;
  circle?: string;
};

// DetailedStepper
export type DetailedStepperClasses = Partial<{
  detailedstepper: ClassValue;
  detailedstepperitem: ClassValue;
  detailedstepperindicator: ClassValue;
}>;

export type DetailedStepperVariants = {
  classes?: DetailedStepperClasses;
};

export const detailedStepper = {
  stepper: tv({
    base: "items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse"
  }),
  item: tv({
    base: "flex items-center space-x-2.5 rtl:space-x-reverse",
    variants: {
      status: {
        completed: "text-primary-600 dark:text-primary-500",
        current: "text-gray-500 dark:text-gray-400",
        pending: "text-gray-500 dark:text-gray-400"
      }
    },
    defaultVariants: {
      status: "pending"
    }
  }),
  indicator: tv({
    base: "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
    variants: {
      status: {
        completed: "border border-primary-600 dark:border-primary-500 bg-primary-600 dark:bg-primary-500 text-white",
        current: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400",
        pending: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      }
    },
    defaultVariants: {
      status: "pending"
    }
  })
};

export type DetailedStepperTheme = {
  stepper?: string;
  item?: string;
  indicator?: string;
};

// VerticalStepper
export type VerticalStepperClasses = Partial<{
  verticalstepper: ClassValue;
  verticalsteppercard: ClassValue;
  verticalsteppercontent: ClassValue;
}>;

export type VerticalStepperVariants = {
  classes?: VerticalStepperClasses;
};

export const verticalStepper = {
  stepper: tv({
    base: "space-y-4 w-72"
  }),
  card: tv({
    base: "w-full p-4 border rounded-lg",
    variants: {
      status: {
        completed: "text-green-700 border-green-300 bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400",
        current: "text-primary-700 bg-primary-100 border-primary-300 dark:bg-gray-800 dark:border-primary-800 dark:text-primary-400",
        pending: "text-gray-900 bg-gray-100 border-gray-300 dark:bg-gray-800  dark:border-gray-700 dark:text-gray-400"
      }
    },
    defaultVariants: {
      status: "pending"
    }
  }),
  content: tv({
    base: "flex items-center justify-between"
  })
};

export type VerticalStepperTheme = {
  stepper?: string;
  card?: string;
  content?: string;
};

// breadcrumbstepper
export type BreadcrumbStepperClasses = Partial<{
  breadcrumbstepper: ClassValue;
  breadcrumbstepperitem: ClassValue;
  breadcrumbstepperindicator: ClassValue;
}>;

export type BreadcrumbStepperVariants = {
  classes?: BreadcrumbStepperClasses;
};

export const breadcrumbStepper = {
  stepper: tv({
    base: "flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs  dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse"
  }),
  item: tv({
    base: "flex items-center",
    variants: {
      status: {
        completed: "text-primary-600 dark:text-primary-500",
        current: "text-gray-500 dark:text-gray-400",
        pending: "text-gray-500 dark:text-gray-400"
      },
      hasChevron: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      status: "pending",
      hasChevron: false
    }
  }),
  indicator: tv({
    base: "flex items-center justify-center w-5 h-5 me-2 text-xs rounded-full shrink-0",
    variants: {
      status: {
        completed: "border border-primary-600 dark:border-primary-500 bg-primary-600 dark:bg-primary-500 text-white",
        current: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400",
        pending: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      }
    },
    defaultVariants: {
      status: "pending"
    }
  })
};

export type BreadcrumbStepperTheme = {
  stepper?: string;
  item?: string;
  indicator?: string;
};

// TimelineStepper
export type TimelineStepperClasses = Partial<{
  timelinestepper: ClassValue;
  timelinestepperitem: ClassValue;
  timelinesteppercircle: ClassValue;
}>;

export type TimelineStepperVariants = {
  classes?: TimelineStepperClasses;
};

export const timelineStepper = {
  base: tv({
    base: "relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400"
  }),
  item: tv({
    base: "ms-6",
    variants: {
      isLast: {
        true: "",
        false: "mb-10"
      }
    },
    defaultVariants: {
      isLast: false
    }
  }),
  circle: tv({
    base: "absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900",
    variants: {
      status: {
        completed: "bg-green-200 dark:bg-green-900",
        current: "bg-gray-100 dark:bg-gray-700",
        pending: "bg-gray-100 dark:bg-gray-700"
      }
    },
    defaultVariants: {
      status: "pending"
    }
  })
};

export type TimelineStepperTheme = {
  base?: string;
  item?: string;
  circle?: string;
};
