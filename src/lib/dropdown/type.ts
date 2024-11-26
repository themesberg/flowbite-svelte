import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  dropdownStatus: boolean;
  closeDropdown?: () => void;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  ulClass?: string;
  backdropClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
  activeUrl?: string;
}

interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {
  class?: string;
}

interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string;
  href?: string;
  activeClass?: string;
  liClass?: string;
}

interface DropdownUlProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

export { type DropdownProps, type DropdownDividerProps, type DropdownLiProps, type DropdownUlProps, type DropdownHeaderProps, type DropdownFooterProps };
