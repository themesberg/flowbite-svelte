import { type Writable } from "svelte/store";
import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes, HTMLAnchorAttributes } from "svelte/elements";
import type { TransitionFunc, ParamsType } from "../types";
import type { SidebarVariants } from "./theme";

type SidebarCtxType = {
  closeSidebar?: () => void;
  activeClass?: string;
  nonActiveClass?: string;
  isSingle?: boolean;
  selected?: Writable<object>;
  activeUrl?: string;
};

interface SidebarProps extends SidebarVariants, HTMLAttributes<HTMLElement> {
  children: Snippet;
  isOpen?: boolean;
  closeSidebar?: () => void;
  activateClickOutside?: boolean;
  isSingle?: boolean;
  ariaLabel?: string;
  divClass?: string;
  nonActiveClass?: string;
  activeClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
  backdrop?: boolean;
  backdropClass?: string;
  activeUrl?: string;
}

interface SidebarButtonProps extends HTMLButtonAttributes {
  breakpoint?: SidebarVariants["breakpoint"];
}

interface SidebarCtaProps extends HTMLAttributes<HTMLDivElement> {
  icon?: Snippet;
  divClass?: string;
  spanClass?: string;
  label: string;
}

interface SiteType {
  name?: string;
  href?: string;
  img?: string;
}
interface SidebarBrandProps extends HTMLAnchorAttributes {
  site?: SiteType;
  imgClass?: string;
  spanClass?: string;
}

interface SidebarDropdownWrapperProps extends HTMLButtonAttributes {
  children: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  icon?: Snippet;
  isOpen?: boolean | undefined;
  btnClass?: string;
  label: string | undefined;
  spanClass?: string;
  ulClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
  svgClass?: string;
  onclick?: () => void;
  isSingle?: boolean;
}

interface SidebarGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  borderClass?: string;
  border?: boolean;
}

interface SidebarItemProps extends HTMLAnchorAttributes {
  icon?: Snippet;
  subtext?: Snippet;
  label?: string;
  spanClass?: string;
  activeClass?: string;
  nonActiveClass?: string;
  aClass?: string;
  active?: boolean;
}

export type { SidebarProps, SidebarDropdownWrapperProps, SidebarGroupProps, SidebarItemProps, SidebarCtxType, SidebarButtonProps, SidebarCtaProps, SidebarBrandProps };
