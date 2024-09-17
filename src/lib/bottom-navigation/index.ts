import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import BottomNav from './BottomNav.svelte';
import BottomNavItem from './BottomNavItem.svelte';
import BottomNavHeaderItem from './BottomNavHeaderItem.svelte';
import BottomNavHeader from './BottomNavHeader.svelte';
import { bottomNav, bottomNavItem, bottomnavheader, bottomnavheaderitem } from './theme';

type BottomNavVariantType = VariantProps<typeof bottomNav>['navType'];
type PositionType = VariantProps<typeof bottomNav>['position'];
type BottomNavContextType = {
  activeClass: string | undefined | null;
};

type AppBtnPositionType = VariantProps<typeof bottomNavItem>['appBtnPosition'];
interface BottomNavProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  activeUrl?: string;
  position?: PositionType;
  navType?: BottomNavVariantType;
  outerClass?: string;
  innerClass?: string;
  activeClass?: string;
}

interface BottomNavItemProps {
  children: Snippet;
  btnName?: string;
  appBtnPosition?: AppBtnPositionType;
  target?: string;
  activeClass?: string;
  href?: string;
  btnClass?: string;
  spanClass?: string;
}

interface BottomNavHeaderProps {
  children: Snippet;
  outerClass?: string;
  innerClass?: string;
}

interface BottomNavHeaderItemProps extends HTMLButtonAttributes{
  itemName: string;
  active?: boolean;
}

export { BottomNav, BottomNavItem, bottomNav, bottomNavItem, BottomNavHeader, bottomnavheader, BottomNavHeaderItem, bottomnavheaderitem, type BottomNavProps, type BottomNavItemProps, type BottomNavContextType, type BottomNavVariantType, type BottomNavHeaderProps, type BottomNavHeaderItemProps };
