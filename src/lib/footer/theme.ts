import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export const footer = tv({
  base: "bg-neutral-primary-soft",
  variants: {
    footerType: {
      default: "p-4 rounded-base shadow-xs border border-default md:flex md:items-center md:justify-between md:p-6",
      sitemap: "bg-neutral-primary",
      socialmedia: "p-4 sm:p-6",
      logo: "p-4 rounded-base shadow-xs border border-default md:px-6 md:py-8",
      sticky: "fixed bottom-0 left-0 z-20 w-full p-4 border-t border-default shadow-sm md:flex md:items-center md:justify-between md:p-6"
    }
  }
});

export type FooterBrandVariants = VariantProps<typeof footerBrand> & Classes<typeof footerBrand>;

export const footerBrand = tv({
  slots: {
    base: "flex items-center",
    label: "text-heading self-center text-2xl font-semibold whitespace-nowrap",
    image: "me-3 h-8"
  }
});

export type FooterCopyrightVariants = VariantProps<typeof footerCopyright> & Classes<typeof footerCopyright>;

export const footerCopyright = tv({
  slots: {
    base: "block text-sm text-body sm:text-center",
    link: "hover:underline",
    label: "ms-1"
  }
});

export const footerIcon = tv({
  base: "text-body hover:text-heading"
});

export const footerLinkGroup = tv({
  base: "text-body font-medium"
});

export type FooterLinkVariants = VariantProps<typeof footerLink> & Classes<typeof footerLink>;

export const footerLink = tv({
  slots: {
    base: "me-4 last:me-0 md:me-6",
    link: "hover:underline"
  }
});
