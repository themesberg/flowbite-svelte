import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import BottomNav from './BottomNav.svelte';
import BottomNavItem from './BottomNavItem.svelte';
import { bottomNav, bottomNavItem } from './theme';

type BottomNavVariantType = VariantProps<typeof bottomNav>['navType'];
type PositionType = VariantProps<typeof bottomNav>['position'];
type BottomNavContextType = {
  activeClass: string | undefined | null;
};

type AppBtnPositionType = VariantProps<typeof bottomNavItem>['appBtnPosition'];
interface BottomNavProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  activeUrl?: string | undefined | null;
  position?: PositionType;
  navType?: BottomNavVariantType;
  outerClass?: string | undefined | null;
  innerClass?: string | undefined | null;
  activeClass?: string | undefined | null;
}

interface BottomNavItemProps {
  children: Snippet;
  btnName?: string | undefined | null;
  appBtnPosition?: AppBtnPositionType;
  target?: string | undefined | null;
  activeClass?: string | undefined | null;
  href?: string | undefined | null;
  exact?: boolean;
  btnClass?: string | undefined | null;
  spanClass?: string | undefined | null;
}

export {
  BottomNav,
  BottomNavItem,
  type BottomNavProps,
  type BottomNavItemProps,
  type BottomNavContextType,
  type BottomNavVariantType
};
