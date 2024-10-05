import type { Snippet } from 'svelte';
import MegaMenu from './MegaMenu.svelte';
import { megamenu } from './theme';
import type { ParamsType, TransitionFunc, LinkType } from '../types';
import type { HTMLAttributes } from 'svelte/elements';

interface MegaMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: Snippet<[{ item: LinkType; index: number }]>;
  footer?: Snippet;
  items?: LinkType[];
  full?: boolean;
  ulClass?: string;
  dropdownStatus: boolean;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  backdropClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { MegaMenu, type MegaMenuProps, megamenu };
