import { tv } from 'tailwind-variants';

export const themeConfig = {
  breadcrumb: tv({
    slots: {
      list: "inline-flex items-center space-x-8 rtl:space-x-reverse rtl:space-x-reverse",
    }
  })
};