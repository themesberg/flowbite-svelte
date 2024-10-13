import Sidebar from "./Sidebar.svelte";
import SidebarDropdownWrapper from "./SidebarDropdownWrapper.svelte";
import SidebarGroup from "./SidebarGroup.svelte";
import SidebarItem from "./SidebarItem.svelte";
import SidebarButton from "./SidebarButton.svelte";
import SidebarCta from "./SidebarCta.svelte";
import SidebarBrand from "./SidebarBrand.svelte";
import { sidebar, sidebarbutton, sidebarcta, sitebarbrand, sidebardropdownwrapper } from "./theme";
import { type Writable } from "svelte/store";
import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes, HTMLAnchorAttributes } from "svelte/elements";
import type { TransitionFunc, ParamsType } from "../types";

type SidebarCtxType = {
  closeSidebar?: () => void;
  activeClass?: string;
  nonActiveClass?: string;
  isSingle?: boolean;
  selected?: Writable<object>;
};

type BreakpointType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
type PosisionType = "fixed" | "absolute" | "static" | undefined;

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  isOpen?: boolean;
  closeSidebar?: () => void;
  activateClickOutside?: boolean;
  isSingle?: boolean;
  breakpoint?: BreakpointType;
  position?: PosisionType;
  ariaLabel?: string;
  divClass?: string;
  nonActiveClass?: string;
  activeClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
  backdrop?: boolean;
  backdropClass?: string;
}

interface SidebarButtonProps extends HTMLButtonAttributes {
  breakpoint?: BreakpointType;
}

interface SidebarCtaProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
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
  children?: Snippet;
  site?: SiteType;
  imgClass?: string;
  spanClass?: string;
}

interface SidebarDropdownWrapperProps extends HTMLButtonAttributes {
  children: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  iconSlot?: Snippet;
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
  iconSlot?: Snippet;
  subtext?: Snippet;
  label?: string;
  spanClass?: string;
  activeClass?: string;
  nonActiveClass?: string;
  aClass?: string;
  active?: boolean;
}

export { Sidebar, sidebar, type SidebarProps, SidebarDropdownWrapper, sidebardropdownwrapper, type SidebarDropdownWrapperProps, SidebarGroup, type SidebarGroupProps, SidebarItem, type SidebarItemProps, type SidebarCtxType, SidebarButton, sidebarbutton, type SidebarButtonProps, SidebarCta, sidebarcta, type SidebarCtaProps, SidebarBrand, sitebarbrand, type SidebarBrandProps, type BreakpointType, type PosisionType };
