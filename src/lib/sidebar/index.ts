import Sidebar from './Sidebar.svelte';
import SidebarDropdownWrapper from './SidebarDropdownWrapper.svelte';
import SidebarGroup from './SidebarGroup.svelte';
import SidebarItem from './SidebarItem.svelte';
import SidebarButton from './SidebarButton.svelte';
import SidebarCta from './SidebarCta.svelte';
import SidebarBrand from './SidebarBrand.svelte';
import { sidebar, sidebarbutton, sidebarcta, sitebarbrand } from './theme';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { TransitionFunc, ParamsType } from '../types';

type SidebarCtxType = {
  closeSidebar?: () => void;
  activeClass?: string;
  nonActiveClass?: string;
};
type BreakpointType = VariantProps<typeof sidebar>['breakpoint'];
type PosisionType = VariantProps<typeof sidebar>['position'];

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  isOpen?: boolean;
  closeSidebar?: () => void;
  activateClickOutside?: boolean;
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
  name: string;
  href: string;
  img?: string;
}
interface SidebarBrandProps extends HTMLAnchorAttributes {
  site: SiteType;
  imgClass?: string;
  spanClass?: string;
}

export { Sidebar, sidebar, type SidebarProps, SidebarDropdownWrapper, SidebarGroup, SidebarItem, type SidebarCtxType, SidebarButton, sidebarbutton, type SidebarButtonProps, SidebarCta, sidebarcta, type SidebarCtaProps, SidebarBrand, sitebarbrand, type SidebarBrandProps };
