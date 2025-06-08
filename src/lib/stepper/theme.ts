import { tv, type VariantProps } from "tailwind-variants";
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

export const stepper = tv({
  base: "flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
});

export const stepperitem = tv({
  base: "flex items-center",
  variants: {
    status: {
      completed: ["text-primary-600", "dark:text-primary-500", "md:w-full", "sm:after:content-['']", "after:w-full", "after:h-1", "after:border-b", "after:border-gray-200", "after:border-1", "after:hidden", "sm:after:inline-block", "after:mx-6", "xl:after:mx-10", "dark:after:border-gray-700"],
      current: ["md:w-full", "after:content-['']", "after:w-full", "after:h-1", "after:border-b", "after:border-gray-200", "after:border-1", "after:hidden", "sm:after:inline-block", "after:mx-6", "xl:after:mx-10", "dark:after:border-gray-700"],
      pending: ["md:w-full", "after:content-['']", "after:w-full", "after:h-1", "after:border-b", "after:border-gray-200", "after:border-1", "after:hidden", "sm:after:inline-block", "after:mx-6", "xl:after:mx-10", "dark:after:border-gray-700"]
    },
    isLast: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      isLast: true,
      class: ["after:content-none", "after:hidden"]
    }
  ],
  defaultVariants: {
    status: "pending",
    isLast: false
  }
});

export const steppercontent = tv({
  base: "flex items-center",
  variants: {
    status: {
      completed: [],
      current: ["after:content-['/']", "sm:after:hidden", "after:mx-2", "after:text-gray-200", "dark:after:text-gray-500"],
      pending: ["after:content-['/']", "sm:after:hidden", "after:mx-2", "after:text-gray-200", "dark:after:text-gray-500"]
    },
    isLast: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      isLast: true,
      class: ["after:content-none"]
    }
  ],
  defaultVariants: {
    status: "pending",
    isLast: false
  }
});

// ProgressStepper
export type ProgressStepperClasses = Partial<{
  progressstepper: ClassValue;
  progressstepperitem: ClassValue;
  progresssteppercircle: ClassValue;
}>;

export type ProgressStepperVariants = {
  classes?: ProgressStepperClasses;
};

export const progressstepper = tv({
  base: "flex items-center w-full"
});

export const progressstepperitem = tv({
  base: "flex items-center w-full",
  variants: {
    status: {
      completed: ["text-primary-600", "dark:text-primary-500", "after:content-['']", "after:w-full", "after:h-1", "after:border-b", "after:border-primary-100", "after:border-4", "after:inline-block", "dark:after:border-primary-800"],
      current: ["after:content-['']", "after:w-full", "after:h-1", "after:border-b", "after:border-gray-100", "after:border-4", "after:inline-block", "dark:after:border-gray-700"],
      pending: ["after:content-['']", "after:w-full", "after:h-1", "after:border-b", "after:border-gray-100", "after:border-4", "after:inline-block", "dark:after:border-gray-700"]
    },
    isLast: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      isLast: true,
      class: ["after:content-none"]
    }
  ],
  defaultVariants: {
    status: "pending",
    isLast: false
  }
});

export const progresssteppercircle = tv({
  base: ["flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0"],
  variants: {
    status: {
      completed: ["bg-primary-100", "dark:bg-primary-800"],
      current: ["bg-gray-100", "dark:bg-gray-700"],
      pending: ["bg-gray-100", "dark:bg-gray-700"]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

// DetailedStepper
export type DetailedStepperClasses = Partial<{
  detailedstepper: ClassValue;
  detailedstepperitem: ClassValue;
  detailedstepperindicator: ClassValue;
}>;

export type DetailedStepperVariants = {
  classes?: DetailedStepperClasses;
};

export const detailedstepper = tv({
  base: "items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse"
});

export const detailedstepperitem = tv({
  base: ["flex items-center space-x-2.5 rtl:space-x-reverse"],
  variants: {
    status: {
      completed: ["text-primary-600", "dark:text-primary-500"],
      current: ["text-gray-500", "dark:text-gray-400"],
      pending: ["text-gray-500", "dark:text-gray-400"]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

export const detailedstepperindicator = tv({
  base: ["flex items-center justify-center w-8 h-8 rounded-full shrink-0"],
  variants: {
    status: {
      completed: ["border border-primary-600 dark:border-primary-500", "bg-primary-600 dark:bg-primary-500", "text-white"],
      current: ["border border-primary-600 dark:border-primary-500", "text-primary-600 dark:text-primary-500"],
      pending: ["border border-gray-500 dark:border-gray-400", "text-gray-500 dark:text-gray-400"]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

// VerticalStepper
export type VerticalStepperClasses = Partial<{
  verticalstepper: ClassValue;
  verticalsteppercard: ClassValue;
  verticalsteppercontent: ClassValue;
}>;

export type VerticalStepperVariants = {
  classes?: VerticalStepperClasses;
};

export const verticalstepper = tv({
  base: "space-y-4 w-72"
});

export const verticalsteppercard = tv({
  base: ["w-full p-4 border rounded-lg"],
  variants: {
    status: {
      completed: ["text-green-700", "border-green-300", "bg-green-50", "dark:bg-gray-800", "dark:border-green-800", "dark:text-green-400"],
      current: ["text-primary-700", "bg-primary-100", "border-primary-300", "dark:bg-gray-800", "dark:border-primary-800", "dark:text-primary-400"],
      pending: ["text-gray-900", "bg-gray-100", "border-gray-300", "dark:bg-gray-800", "dark:border-gray-700", "dark:text-gray-400"]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

export const verticalsteppercontent = tv({
  base: "flex items-center justify-between"
});

// BreadcrumbStepper
export type BreadcrumbStepperClasses = Partial<{
  breadcrumbstepper: ClassValue;
  breadcrumbstepperitem: ClassValue;
  breadcrumbstepperindicator: ClassValue;
}>;

export type BreadcrumbStepperVariants = {
  classes?: BreadcrumbStepperClasses;
};

export const breadcrumbstepper = tv({
  base: ["flex items-center w-full p-3 space-x-2 text-sm font-medium text-center", "text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs", "dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700", "sm:p-4 sm:space-x-4 rtl:space-x-reverse"]
});

export const breadcrumbstepperitem = tv({
  base: ["flex items-center"],
  variants: {
    status: {
      completed: ["text-primary-600", "dark:text-primary-500"],
      current: ["text-primary-600", "dark:text-primary-500"],
      pending: ["text-gray-500", "dark:text-gray-400"]
    },
    hasChevron: {
      true: [],
      false: []
    }
  },
  defaultVariants: {
    status: "pending",
    hasChevron: false
  }
});

export const breadcrumbstepperindicator = tv({
  base: ["flex items-center justify-center w-5 h-5 me-2 text-xs rounded-full shrink-0"],
  variants: {
    status: {
      completed: ["border border-primary-600 dark:border-primary-500", "bg-primary-600 dark:bg-primary-500", "text-white"],
      current: ["border border-gray-500 dark:border-gray-400", "text-gray-500 dark:text-gray-400"],
      pending: ["border border-gray-500 dark:border-gray-400", "text-gray-500 dark:text-gray-400"]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

// TimelineStepper
export type TimelineStepperClasses = Partial<{
  timelinestepper: ClassValue;
  timelinestepperitem: ClassValue;
  timelinesteppercircle: ClassValue;
}>;

export type TimelineStepperVariants = {
  classes?: TimelineStepperClasses;
};

export const timelinestepper = tv({
  base: "relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400"
});

export const timelinestepperitem = tv({
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
});

export const timelinesteppercircle = tv({
  base: ["absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900"],
  variants: {
    status: {
      completed: ["bg-green-200", "dark:bg-green-900"],
      current: ["bg-gray-100", "dark:bg-gray-700"],
      pending: ["bg-gray-100", "dark:bg-gray-700"]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});
