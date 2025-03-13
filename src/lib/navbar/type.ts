import type { AnchorButtonAttributes, TransitionParamTypes } from "$lib/types";
import type { Component, Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

export type NavbarLiType = {
  activeClass: string;
  nonActiveClass: string;
};

interface NavbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: Snippet<[{ hidden: boolean, toggle: () => void, NavContainer: Component }]>;
  fluid?: boolean;
  navContainerClass?: string;
}

interface NavBrandProps extends HTMLAnchorAttributes { }

interface NavContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

interface NavHamburgerProps extends HTMLButtonAttributes {
  menuClass?: string;
  classMenu?: string;
  name?: string;
};

interface NavUlProps extends HTMLAttributes<HTMLDivElement> {
  activeUrl?: string;
  ulClass?: string;
  hidden?: boolean;
  slideParams?: TransitionParamTypes;
  activeClass?: string;
  nonActiveClass?: string;
}

type NavLiProps = AnchorButtonAttributes & {
  activeClass?: string;
  nonActiveClass?: string;
}

export { type NavbarProps, type NavBrandProps, type NavContainerProps, type NavHamburgerProps, type NavLiProps, type NavUlProps };

