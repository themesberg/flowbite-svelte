import { tv } from "tailwind-variants";

export const themeConfig = {
  breadcrumb: tv({
    slots: {
      list: "inline-flex items-center space-x-8 rtl:space-x-reverse rtl:space-x-reverse"
    }
  }),
  accordionitem: tv({
    compoundVariants: [
      {
        flush: true,
        open: true,
        class: {
          button: "text-red-900 dark:text-red-300"
        }
      },
      {
        flush: true,
        open: false,
        class: {
          button: "text-green-500 dark:text-green-300"
        }
      }
    ]
  })
};
