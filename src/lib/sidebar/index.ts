import Sidebar from './Sidebar.svelte';
import SidebarDropdownWrapper from './SidebarDropdownWrapper.svelte';
import SidebarGroup from './SidebarGroup.svelte';
import SidebarItem from './SidebarItem.svelte';
import SidebarButton from './SidebarButton.svelte';
import { sidebar, sidebarbutton } from './theme';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
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
  asideClass?: string;
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

export { Sidebar, sidebar, type SidebarProps, SidebarDropdownWrapper, SidebarGroup, SidebarItem, type SidebarCtxType, SidebarButton, sidebarbutton, type SidebarButtonProps };
