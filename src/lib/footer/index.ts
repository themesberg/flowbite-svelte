import Footer from './Footer.svelte';
import FooterBrand from './FooterBrand.svelte';
import FooterCopyright from './FooterCopyright.svelte';
import FooterIcon from './FooterIcon.svelte';
import FooterLi from './FooterLi.svelte';
import FooterUl from './FooterUl.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import { footer, footerBrand, footerCopyright, footerIcon, footerUl, footerLi } from './theme';

type FooterType = VariantProps<typeof footer>['footerType'];
interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  footerType?: FooterType;
  class?: string;
}

interface FooterBrandProps extends HTMLAnchorAttributes {
  children?: Snippet;
  aClass?: string;
  spanClass?: string;
  imgClass?: string;
  href?: string;
  src?: string;
  alt?: string;
  name?: string;
}

interface FooterCopyrightProps extends HTMLAnchorAttributes {
  spanClass?: string;
  aClass?: string;
  href?: string;
  by?: string;
  copyrightMessage?: string;
  year?: number | undefined;
}

interface FooterIconProps extends HTMLAnchorAttributes {
  children: Snippet;
  href?: string;
  ariaLabel?: string;
  class?: string;
}

interface FooterUlProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  class?: string;
}

interface FooterLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  liClass?: string;
  aClass?: string;
  href?: string;
}

export { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLi, FooterUl, footer, footerBrand, footerCopyright, footerIcon, footerUl, footerLi, type FooterProps, type FooterBrandProps, type FooterCopyrightProps, type FooterIconProps, type FooterUlProps, type FooterLiProps };
