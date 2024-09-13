import Navbar from './Navbar.svelte';
import NavBrand from './NavBrand.svelte';
import NavLi from './NavLi.svelte';
import NavUl from './NavUl.svelte';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { navbarType } from '$lib/types';
import { navUl } from './theme'

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  toggleNav?: () => void;
  closeNav?: () => void;
  navStatus?: boolean | undefined;
  fluid?: boolean;
  brand?: Snippet;
  hamburgerMenu?: boolean;
  breakPoint?: navbarType['breakPoint'];
  navClass?: string;
  divClass?: string;
  btnClass?: string;
  div2Class?: string;
  nonActiveClass?: string;
  activeClass?: string;
}

interface NavBrandProps extends HTMLAnchorAttributes {
  children?: Snippet;
  siteName: string | undefined | null;
  closeNav?: () => void;
  aClass?: string;
  spanClass?: string;
}

interface NavUlProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  class?: string;
}


interface NavLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  closeNav?: () => void;
  href?: string;
  aClass?: string;
  activeClass?: string;
  nonActiveClass?: string;
  class?: string;
}

export { Navbar, NavBrand, NavLi, NavUl, navUl, type NavbarProps, type NavBrandProps, type NavUlProps, type NavLiProps };
