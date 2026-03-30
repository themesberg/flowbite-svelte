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
    base: "flex items-center w-full text-sm font-medium text-center text-body sm:text-base",
    item: "flex items-center",
    content: "flex items-center"
  },
  variants: {
    status: {
      completed: {
        item: "text-fg-brand md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-fg-disabled"
      },
      current: {
        item: "text-fg-brand md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-fg-disabled"
      },
      pending: {
        item: "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-fg-disabled"
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
    line: "absolute h-1 top-1/2 -translate-y-1/2 bg-neutral-tertiary",
    progress: "absolute h-1 top-1/2 -translate-y-1/2 bg-brand transition-all duration-300 ease-in-out"
  },

  variants: {
    status: {
      completed: {
        item: "text-fg-brand flex-1",
        circle: "bg-brand-softer text-fg-brand"
      },
      current: {
        item: "flex-1",
        circle: "bg-brand-softer text-fg-brand"
      },
      pending: {
        item: "flex-1",
        circle: "bg-neutral-tertiary text-body"
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
        item: "text-fg-brand",
        indicator: "border border-brand bg-brand-softer text-fg-brand"
      },
      current: {
        item: "text-body",
        indicator: "border border-body text-body"
      },
      pending: {
        item: "text-body",
        indicator: "border border-body text-body"
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
    card: "w-full p-4 border rounded-base",
    content: "flex items-center justify-between"
  },
  variants: {
    status: {
      completed: {
        card: "text-fg-success-strong border-success-subtle bg-success-soft"
      },
      current: {
        card: "text-fg-brand-strong bg-brand-softer border-brand-subtle"
      },
      pending: {
        card: "text-body bg-neutral-secondary-soft border-default"
      }
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

export const breadcrumbStepper = tv({
  slots: {
    base: "flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-body bg-neutral-primary-soft border border-default rounded-base shadow-xs sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse",
    item: "flex items-center",
    indicator: "flex items-center justify-center w-5 h-5 me-2 text-xs rounded-full shrink-0"
  },
  variants: {
    status: {
      completed: {
        item: "text-fg-brand",
        indicator: "border border-brand text-fg-brand"
      },
      current: {
        item: "text-fg-brand",
        indicator: "border border-brand text-fg-brand"
      },
      pending: {
        item: "text-body",
        indicator: "border border-body text-body"
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
    base: "relative text-body border-s border-default",
    item: "ms-6",
    circle: "absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-buffer"
  },
  variants: {
    status: {
      completed: {
        circle: "bg-success-soft text-fg-success-strong"
      },
      current: {
        circle: "bg-brand-softer text-fg-brand"
      },
      pending: {
        circle: "bg-neutral-tertiary text-body"
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
