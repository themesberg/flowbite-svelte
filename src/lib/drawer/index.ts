import Drawer from './Drawer.svelte';
import Drawerhead from './Drawerhead.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { TransitionFunc, ParamsType } from '../types';
import { drawer, drawerhead } from './theme';

type WidthType = VariantProps<typeof drawer>['width'];
type PlacementType = VariantProps<typeof drawer>['placement'];
type PosisionType = VariantProps<typeof drawer>['position'];

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  drawerStatus: boolean;
  closeDrawer?: () => void;
  activateClickOutside?: boolean;
  position?: PosisionType;
  width?: WidthType;
  backdrop?: boolean;
  backdropClass?: string;
  placement?: PlacementType;
  class?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
}

interface DrawerheadProps extends HTMLButtonAttributes {
  closeIcon?: Snippet;
  children?: Snippet;
  tag?: string;
  headClass?: string;
  buttonClass?: string;
  svgClass?: string;
}

export { Drawer, drawer, Drawerhead, drawerhead, type DrawerProps, type DrawerheadProps };
