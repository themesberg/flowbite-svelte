import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	href?: HTMLAnchorAttributes['href'];
	target?: HTMLAnchorAttributes['target'];
	src?: string;
	cornerStyle?: 'rounded' | 'circular';
	stacked?: boolean;
	dot?: object | undefined;
	alt?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	onclick?: () => void;
	border?: boolean;
	class?: string;
}

export { type AvatarProps };
