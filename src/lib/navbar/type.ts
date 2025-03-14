import type { ToolbarButtonProps } from "$lib/toolbar";
import type { AnchorButtonAttributes, TransitionParamTypes } from "$lib/types";
import type { Component, Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";


export type NavbarState = {
  hidden: boolean;
  activeClass?: string;
  nonActiveClass?: string
}

interface NavbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: Snippet<[{ hidden: boolean, toggle: () => void, NavContainer: Component }]>;
  fluid?: boolean;
  navContainerClass?: string;
}

interface NavBrandProps extends HTMLAnchorAttributes { }

interface NavContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

type NavHamburgerProps = ToolbarButtonProps & {
  menuClass?: string;
  classMenu?: string;
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

