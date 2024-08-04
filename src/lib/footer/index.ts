import Footer from './Footer.svelte';
import FooterBrand from './FooterBrand.svelte';
import FooterCopyright from './FooterCopyright.svelte';
import FooterIcon from './FooterIcon.svelte';
import FooterLi from './FooterLi.svelte';
import FooterUl from './FooterUl.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

const footerVariants = tv({
  base: 'bg-white dark:bg-gray-800',
  variants: {
    footerType: {
      default: 'p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6',
      sitemap: 'bg-gray-800',
      socialmedia: 'p-4 sm:p-6',
      logo: 'p-4 rounded-lg shadow md:px-6 md:py-8',
      sticky: 'fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'
    },
  },
  defaultVariants: {
    footerType: 'default',
  },
});

const footerBrandVariants = tv({
  slots: {
    base: 'flex items-center',
    span: 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white',
    img: 'me-3 h-8',
  }
});

const copyrightVariants = tv({
  slots: {
    base: 'block text-sm text-gray-500 sm:text-center dark:text-gray-400',
    link: 'hover:underline',
    bySpan: 'ms-1',
  }
});

const iconVariants = tv({
  base: 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
})

const ulVariants = tv({
  base: 'text-gray-600 dark:text-gray-400'
})

const liVariants = tv({
  slots: {
    base: 'me-4 last:me-0 md:me-6',
    link: 'hover:underline'
  }
})


type FooterType = VariantProps<typeof footerVariants>['footerType'];
interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  footerType?: FooterType;
  class?: string | undefined;
}

interface FooterBrandProps extends HTMLAnchorAttributes {
  children?: Snippet;
  aClass?: string | undefined;
  spanClass?: string | undefined;
  imgClass?: string | undefined;
  href?: string | undefined;
  src?: string | undefined;
  alt?: string | undefined;
  name?: string | undefined;
}

interface FooterCopyrightProps extends HTMLAnchorAttributes {
  spanClass?: string | undefined;
  aClass?: string | undefined;
  href?: string | undefined;
  by?: string | undefined;
  copyrightMessage?: string | undefined;
  year?: number | undefined;
}

interface FooterIconProps extends HTMLAnchorAttributes {
  children: Snippet;
  href?: string | undefined;
  ariaLabel?: string | undefined;
  class?: string | undefined;
}

interface FooterUlProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  class?: string | undefined;
}

interface FooterLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  liClass?: string | undefined;
  aClass?: string | undefined;
  href?: string | undefined;
}

export { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLi, FooterUl, footerVariants, footerBrandVariants, copyrightVariants, iconVariants, ulVariants, liVariants, type FooterProps, type FooterBrandProps, type FooterCopyrightProps, type FooterIconProps, type FooterUlProps, type FooterLiProps };
