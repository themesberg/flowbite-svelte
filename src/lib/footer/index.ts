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

export { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLi, FooterUl, footer, footerBrand, footerCopyright, footerIcon, footerUl, footerLi, type FooterProps, type FooterBrandProps, type FooterCopyrightProps, type FooterIconProps, type FooterUlProps, type FooterLiProps };
