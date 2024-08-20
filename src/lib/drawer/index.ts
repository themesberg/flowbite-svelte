import Drawer from './Drawer.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TransitionFunc, ParamsType } from '../types';
import { drawer } from './theme';

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
  backdropClass?: string | undefined;
  placement?: PlacementType;
  class?: string | undefined;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { Drawer, drawer, type DrawerProps };
