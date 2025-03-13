import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes } from 'svelte/elements';

type AnchorColorType =
	| 'primary'
	| 'secondary'
	| 'gray'
	| 'red'
	| 'orange'
	| 'amber'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'emerald'
	| 'teal'
	| 'cyan'
	| 'sky'
	| 'blue'
	| 'indigo'
	| 'violet'
	| 'purple'
	| 'fuchsia'
	| 'pink'
	| 'rose'
	| undefined;

interface AnchorProps extends HTMLAnchorAttributes {
	children: Snippet;
	color?: AnchorColorType;
	class?: string;
}

export { type AnchorProps, type AnchorColorType };
