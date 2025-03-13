import type {
	BottomNavProps,
	BottomNavItemProps,
	BottomNavContextType,
	BottomNavVariantType,
	BottomNavHeaderProps,
	BottomNavHeaderItemProps
} from './type';
import BottomNav from './BottomNav.svelte';
import BottomNavItem from './BottomNavItem.svelte';
import BottomNavHeaderItem from './BottomNavHeaderItem.svelte';
import BottomNavHeader from './BottomNavHeader.svelte';
import { bottomNav, bottomNavItem, bottomnavheader, bottomnavheaderitem } from './theme';

export {
	BottomNav,
	BottomNavItem,
	bottomNav,
	bottomNavItem,
	BottomNavHeader,
	bottomnavheader,
	BottomNavHeaderItem,
	bottomnavheaderitem,
	type BottomNavProps,
	type BottomNavItemProps,
	type BottomNavContextType,
	type BottomNavVariantType,
	type BottomNavHeaderProps,
	type BottomNavHeaderItemProps
};
