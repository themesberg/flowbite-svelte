import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type StepperVariants = VariantProps<typeof stepper> & Classes<typeof stepper>;
export type ProgressStepperVariants = VariantProps<typeof progressStepper> & Classes<typeof progressStepper>;
export type DetailedStepperVariants = VariantProps<typeof detailedStepper> & Classes<typeof detailedStepper>;
export type VerticalStepperVariants = VariantProps<typeof verticalStepper> & Classes<typeof verticalStepper>;
export type BreadcrumbStepperVariants = VariantProps<typeof breadcrumbStepper> & Classes<typeof breadcrumbStepper>;
export type TimelineStepperVariants = VariantProps<typeof timelineStepper> & Classes<typeof timelineStepper>;

export const stepper = tv({
  slots: {
    base: "flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base",
    item: "flex items-center",
    content: "flex items-center"
  },
  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-500 md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
      },
      current: {
        item: "text-primary-600 dark:text-primary-500 md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
      },
      pending: {
        item: "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
      }
    },
    isLast: {
      true: {
        item: "after:!hidden",
        content: "after:!hidden"
      },
      false: {}
    }
  },

  defaultVariants: {
    status: "pending",
    isLast: false
  }
});

// ProgressStepper
export const progressStepper = tv({
  slots: {
    base: "flex items-center w-full relative",
    item: "flex items-center justify-center z-10",
    circle: "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0",
    line: "absolute h-1 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700",
    progressLine: "absolute h-1 top-1/2 -translate-y-1/2 bg-primary-600 dark:bg-primary-500 transition-all duration-300 ease-in-out"
  },

  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-400 flex-1",
        circle: "bg-primary-600 dark:bg-primary-500 text-white"
      },
      current: {
        item: "flex-1",
        circle: "bg-primary-600 dark:bg-primary-500 text-white"
      },
      pending: {
        item: "flex-1",
        circle: "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
      }
    }
  },

  defaultVariants: {
    status: "pending"
  }
});

// DetailedStepper
export const detailedStepper = tv({
  slots: {
    base: "items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse",
    item: "flex items-center space-x-2.5 rtl:space-x-reverse",
    indicator: "flex items-center justify-center w-8 h-8 rounded-full shrink-0"
  },

  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-500",
        indicator: "border border-primary-600 dark:border-primary-500 bg-primary-600 dark:bg-primary-500 text-white"
      },
      current: {
        item: "text-gray-500 dark:text-gray-400",
        indicator: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      },
      pending: {
        item: "text-gray-500 dark:text-gray-400",
        indicator: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      }
    }
  },

  defaultVariants: {
    status: "pending"
  }
});

export const verticalStepper = tv({
  slots: {
    base: "space-y-4 w-72",
    card: "w-full p-4 border rounded-lg",
    content: "flex items-center justify-between"
  },
  variants: {
    status: {
      completed: {
        card: "text-green-700 border-green-300 bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
      },
      current: {
        card: "text-primary-700 bg-primary-100 border-primary-300 dark:bg-gray-800 dark:border-primary-800 dark:text-primary-400"
      },
      pending: {
        card: "text-gray-900 bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
      }
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

export const breadcrumbStepper = tv({
  slots: {
    base: "flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse",
    item: "flex items-center",
    indicator: "flex items-center justify-center w-5 h-5 me-2 text-xs rounded-full shrink-0"
  },
  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-500",
        indicator: "border border-primary-600 dark:border-primary-500 bg-primary-600 dark:bg-primary-500 text-white"
      },
      current: {
        item: "text-primary-600 dark:text-primary-500",
        indicator: "border border-primary-600 dark:border-primary-500 bg-primary-600 dark:bg-primary-500 text-white"
      },
      pending: {
        item: "text-gray-500 dark:text-gray-400",
        indicator: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      }
    },
    hasChevron: {
      true: {},
      false: {}
    }
  },
  defaultVariants: {
    status: "pending",
    hasChevron: false
  }
});

export const timelineStepper = tv({
  slots: {
    base: "relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400",
    item: "ms-6",
    circle: "absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900"
  },
  variants: {
    status: {
      completed: {
        circle: "bg-green-200 dark:bg-green-900"
      },
      current: {
        circle: "bg-primary-200 dark:bg-primary-900"
      },
      pending: {
        circle: "bg-gray-100 dark:bg-gray-700"
      }
    },
    isLast: {
      true: {},
      false: {
        item: "mb-10"
      }
    }
  },
  defaultVariants: {
    status: "pending",
    isLast: false
  }
});
