import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";
import type { Snippet } from "svelte";
import type { NavbarType } from "$lib/types";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  navSlotBlock?: Snippet;
  navSlotHiddenTop?: Snippet;
  navSlotHiddenBottom?: Snippet;
  toggleNav?: () => void;
  closeNav?: () => void;
  navStatus?: boolean | undefined;
  fluid?: boolean;
  brand?: Snippet;
  hamburgerMenu?: boolean;
  breakPoint?: NavbarType["breakPoint"];
  navClass?: string;
  divClass?: string;
  btnClass?: string;
  div2Class?: string;
  nonActiveClass?: string;
  activeClass?: string;
}

interface NavBrandProps extends HTMLAnchorAttributes {
  siteName?: string | undefined | null;
  closeNav?: () => void;
  aClass?: string;
  spanClass?: string;
}

interface NavUlProps extends HTMLAttributes<HTMLUListElement> {
  class?: string;
  activeUrl?: string;
}

interface NavLiProps extends HTMLAnchorAttributes {
  closeNav?: () => void;
  href?: string;
  aClass?: string;
  class?: string;
}

interface NavHamburgerProps extends HTMLAttributes<HTMLButtonElement> {
  toggleNav: () => void;
}

export { type NavbarProps, type NavBrandProps, type NavLiProps, type NavUlProps, type NavHamburgerProps };
