import Drawer from './Drawer.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type {
  drawerTransitionParamTypes,
  drawerTransitionTypes
} from '../types';
import { drawer } from './theme';

type WidthType = VariantProps<typeof drawer>['width'];
type PlacementType = VariantProps<typeof drawer>['placement'];
type PosisionType = VariantProps<typeof drawer>['position'];

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  drawerStatus: boolean;
  toggleDrawer?: () => void;
  closeDrawer?: () => void;
  activateClickOutside?: boolean;
  position?: PosisionType;
  width?: WidthType;
  backdrop?: boolean;
  backdropClass?: string | undefined;
  placement?: PlacementType;
  class?: string | undefined;
  transitionParams: drawerTransitionParamTypes;
  transitionType?: drawerTransitionTypes;
}

export {
  Drawer,
  drawer,
  type DrawerProps
};
