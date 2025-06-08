import { tv, type VariantProps } from "tailwind-variants";

export const stepper = tv({
  base: "",
  variants: {
    type: {
      default: "flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base",
      progress: "flex items-center w-full",
      detailed: "items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse",
      vertical: "space-y-4 w-72",
      breadcrumb: "flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse",
      timeline: "relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400"
    }
  }
});

export const stepperitem = tv({
  base: [],
  variants: {
    type: {
      default: [
        "flex items-center md:w-full"
      ],
      progress: [
        "flex items-center w-full"
      ]
    },
    status: {
      completed: ["text-primary-600", "dark:text-primary-500"],
      current: ["text-gray-900", "dark:text-white"],
      pending: ["text-gray-500", "dark:text-gray-400"]
    },
    hasConnector: {
      true: []
    },
    // New variant for progress connectors
    progressConnector: {
      completed: [
        "after:content-['']",
        "after:w-full",
        "after:h-1",
        "after:border-b",
        "after:border-primary-100",
        "after:border-4",
        "after:inline-block",
        "dark:after:border-primary-800"
      ],
      current: [
        "after:content-['']",
        "after:w-full",
        "after:h-1",
        "after:border-b",
        "after:border-gray-100",
        "after:border-4",
        "after:inline-block",
        "dark:after:border-gray-700"
      ],
      pending: [
        "after:content-['']",
        "after:w-full",
        "after:h-1",
        "after:border-b",
        "after:border-gray-100",
        "after:border-4",
        "after:inline-block",
        "dark:after:border-gray-700"
      ]
    },
    // Default connector for non-progress types
    defaultConnector: {
      true: [
        "sm:after:content-['']",
        "after:w-full",
        "after:h-1",
        "after:border-b", 
        "after:border-gray-200",
        "after:border-1",
        "after:hidden",
        "sm:after:inline-block",
        "after:mx-6",
        "xl:after:mx-10",
        "dark:after:border-gray-700"
      ]
    }
  },
  defaultVariants: {
    type: "default",
    status: "pending",
    hasConnector: false
  }
});

export const stepperspan = tv({
  base: [],
  variants: {
    type: {
      default: [
        "flex items-center"
      ],
      progress: [
        "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0"
      ]
    },
    status: {
      completed: [],
      current: [],
      pending: [],
      final: []
    },
    // Background variants for progress type
    progressBackground: {
      completed: [
        "bg-primary-100",
        "dark:bg-primary-800"
      ],
      current: [
        "bg-gray-100",
        "dark:bg-gray-700"
      ],
      pending: [
        "bg-gray-100",
        "dark:bg-gray-700"
      ]
    },
    // Separator variants for default type
    separator: {
      true: [
        "after:content-['/']",
        "sm:after:hidden", 
        "after:mx-2",
        "after:text-gray-200",
        "dark:after:text-gray-500"
      ],
      false: []
    }
  },
  defaultVariants: {
    type: "default",
    status: "pending",
    separator: false
  }
});

// Icon/indicator variants (for the checkmark, number, etc.)
export const steppericon = tv({
  base: [],
  variants: {
    type: {
      default: [
        "me-2.5"
      ],
      progress: []
    },
    iconType: {
      checkmark: [
        
      ],
      progressCheckmark: [
        "w-4", "h-4", "text-primary-600", "dark:text-primary-300"
      ],
      progressIcon: [
        "w-4", "h-4", "text-gray-500", "lg:w-5", "lg:h-5", "dark:text-gray-100"
      ],
      number: []
    }
  },
  defaultVariants: {
    type: "default"
  }
});

// Text content variants (for responsive text)
export const steppertext = tv({
  base: [],
  variants: {
    responsive: {
      true: [
        "[&>.sm-only]:hidden",
        "[&>.sm-only]:sm:inline", 
        "[&>.sm-only]:sm:ms-2"
      ],
      false: []
    }
  },
  defaultVariants: {
    responsive: false
  }
});

// ProgressStepper
export const progressstepper = tv({
  base: "flex items-center w-full"
});

export const progressstepperitem = tv({
  base: "flex items-center w-full",
  variants: {
    status: {
      completed: [
        "text-blue-600",
        "dark:text-blue-500",
        "after:content-['']",
        "after:w-full",
        "after:h-1",
        "after:border-b",
        "after:border-blue-100",
        "after:border-4",
        "after:inline-block",
        "dark:after:border-blue-800"
      ],
      current: [
        "after:content-['']",
        "after:w-full",
        "after:h-1",
        "after:border-b",
        "after:border-gray-100",
        "after:border-4",
        "after:inline-block",
        "dark:after:border-gray-700"
      ],
      pending: [
        "after:content-['']",
        "after:w-full",
        "after:h-1",
        "after:border-b",
        "after:border-gray-100",
        "after:border-4",
        "after:inline-block",
        "dark:after:border-gray-700"
      ]
    },
    isLast: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      isLast: true,
      class: [
        "after:content-none"
      ]
    }
  ],
  defaultVariants: {
    status: "pending",
    isLast: false
  }
});

export const progresssteppercircle = tv({
  base: [
    "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0"
  ],
  variants: {
    status: {
      completed: [
        "bg-blue-100",
        "dark:bg-blue-800"
      ],
      current: [
        "bg-gray-100",
        "dark:bg-gray-700"
      ],
      pending: [
        "bg-gray-100",
        "dark:bg-gray-700"
      ]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

// DetailedStepper
export const detailedstepper = tv({
  base: "items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse"
});

export const detailedstepperitem = tv({
  base: [
    "flex items-center space-x-2.5 rtl:space-x-reverse"
  ],
  variants: {
    status: {
      completed: ["text-blue-600", "dark:text-blue-500"],
      current: ["text-blue-600", "dark:text-blue-500"],
      pending: ["text-gray-500", "dark:text-gray-400"]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

export const detailedstepperindicator = tv({
  base: [
    "flex items-center justify-center w-8 h-8 rounded-full shrink-0"
  ],
  variants: {
    status: {
      completed: [
        "border border-blue-600 dark:border-blue-500",
        "bg-blue-600 dark:bg-blue-500",
        "text-white"
      ],
      current: [
        "border border-blue-600 dark:border-blue-500",
        "text-blue-600 dark:text-blue-500"
      ],
      pending: [
        "border border-gray-500 dark:border-gray-400",
        "text-gray-500 dark:text-gray-400"
      ]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

export const detailedsteppercontent = tv({
  base: []
});

// VerticalStepper
export const verticalstepper = tv({
  base: "space-y-4 w-72"
});

export const verticalstepperitem = tv({
  base: []
});

export const verticalsteppercard = tv({
  base: [
    "w-full p-4 border rounded-lg"
  ],
  variants: {
    status: {
      completed: [
        "text-green-700",
        "border-green-300", 
        "bg-green-50",
        "dark:bg-gray-800",
        "dark:border-green-800",
        "dark:text-green-400"
      ],
      current: [
        "text-blue-700",
        "bg-blue-100",
        "border-blue-300",
        "dark:bg-gray-800",
        "dark:border-blue-800", 
        "dark:text-blue-400"
      ],
      pending: [
        "text-gray-900",
        "bg-gray-100",
        "border-gray-300",
        "dark:bg-gray-800",
        "dark:border-gray-700",
        "dark:text-gray-400"
      ]
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
export const breadcrumbstepper = tv({
  base: [
    "flex items-center w-full p-3 space-x-2 text-sm font-medium text-center",
    "text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs",
    "dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700",
    "sm:p-4 sm:space-x-4 rtl:space-x-reverse"
  ]
});

export const breadcrumbstepperitem = tv({
  base: [
    "flex items-center"
  ],
  variants: {
    status: {
      completed: ["text-blue-600", "dark:text-blue-500"],
      current: ["text-blue-600", "dark:text-blue-500"],
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
  base: [
    "flex items-center justify-center w-5 h-5 me-2 text-xs rounded-full shrink-0"
  ],
  variants: {
    status: {
      completed: [
        "border border-blue-600 dark:border-blue-500",
        "bg-blue-600 dark:bg-blue-500",
        "text-white"
      ],
      current: [
        "border border-blue-600 dark:border-blue-500",
        "text-blue-600 dark:text-blue-500"
      ],
      pending: [
        "border border-gray-500 dark:border-gray-400",
        "text-gray-500 dark:text-gray-400"
      ]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

// TimelineStepper
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
  base: [
    "absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900"
  ],
  variants: {
    status: {
      completed: [
        "bg-green-200",
        "dark:bg-green-900"
      ],
      current: [
        "bg-blue-200",
        "dark:bg-blue-900"
      ],
      pending: [
        "bg-gray-100",
        "dark:bg-gray-700"
      ]
    }
  },
  defaultVariants: {
    status: "pending"
  }
});

export const timelinesteppercontent = tv({
  base: []
});

