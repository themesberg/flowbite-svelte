import Drawer from './Drawer.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import type {
  drawerTransitionParamTypes,
  drawerTransitionTypes
} from '../types';


const drawerVariants = tv({
  base: 'overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800',
  variants: {
    position: {
      fixed: 'fixed',
      absolute: 'absolute',
    },
    placement: {
      left: 'inset-y-0 start-0',
      right: 'inset-y-0 end-0',
      top: 'inset-x-0 top-0',
      bottom: 'inset-x-0 bottom-0',
    },
    width: {
      default: 'w-80',
      full: 'w-full',
      half: 'w-1/2',
    },
  },
  defaultVariants: {
    position: 'fixed',
    placement: 'left',
    width: 'default',
  },
});

const backdropVariants = tv({
  base: 'fixed top-0 start-0 z-50 w-full h-full',
  variants: {
    backdrop: {
      true: 'bg-gray-900 bg-opacity-75',
      false: '',
    },
    activateClickOutside: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    backdrop: true,
    activateClickOutside: true,
  },
});

type WidthType = VariantProps<typeof drawerVariants>['width'];
type PlacementType = VariantProps<typeof drawerVariants>['placement'];
type PosisionType = VariantProps<typeof drawerVariants>['position'];

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
  drawerVariants, backdropVariants, 
  type DrawerProps
};
