import Dropdown from './Dropdown.svelte';
import DropdownDivider from './DropdownDivider.svelte';
import DropdownUl from './DropdownUl.svelte';
import DropdownLi from './DropdownLi.svelte';
import DropdownHeader from './DropdownHeader.svelte';
import DropdownFooter from './DropdownFooter.svelte';
import { dropdown, dropdowndivider, dropdownli, dropdownul, dropdownHeader, dropdownFooter } from './theme';
import type { Snippet } from 'svelte';
import type { ParamsType, TransitionFunc } from '../types';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

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
}

interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {
  class?: string | undefined;
}

interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownLiProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string | undefined | null;
  href?: string | undefined | null;
  activeClass?: string | undefined | null;
  liClass?: string | undefined | null;
}

interface DropdownUlProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

export { Dropdown, DropdownDivider, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, dropdown, dropdowndivider, dropdownli, dropdownul, dropdownHeader, dropdownFooter, type DropdownProps, type DropdownDividerProps, type DropdownLiProps, type DropdownUlProps, type DropdownHeaderProps, type DropdownFooterProps };
