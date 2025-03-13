import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { TransitionFunc, ParamsType } from '../types';

type WidthType = 'default' | 'full' | 'half' | undefined;
type PlacementType = 'left' | 'right' | 'top' | 'bottom' | undefined;
type PosisionType = 'fixed' | 'absolute' | undefined;

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
	buttonClass?: string;
	svgClass?: string;
	class?: string;
}

export { type DrawerProps, type DrawerheadProps };
