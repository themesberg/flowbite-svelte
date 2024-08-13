import Dropdown from './Dropdown.svelte';
import DropdownDivider from './DropdownDivider.svelte';
import DropdownItem from './DropdownItem.svelte';
import { dropdown, dropdowndivider, dropdownitem } from './theme';
import type { Snippet } from 'svelte';
import type { TransitionParamTypes, TransitionTypes } from '../types';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  footer?: Snippet;
  dropdownStatus: boolean;
  toggleDropdown?: () => void;
  closeDropdown?: () => void;
  activateClickOutside?: boolean;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  ulClass?: string;
  backdropClass?: string;
  transitionParams?: TransitionParamTypes;
  transitionType?: TransitionTypes;
}

interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {
  class?: string | undefined;
}

interface DropdownItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string | undefined | null;
  href?: string | undefined | null;
  activeClass?: string | undefined | null;
  liClass?: string | undefined | null;
}

export {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  dropdown,
  dropdowndivider,
  dropdownitem,
  type DropdownProps,
  type DropdownDividerProps,
  type DropdownItemProps
};
