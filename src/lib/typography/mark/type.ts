import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

interface MarkProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	markClass?: string;
	class?: string;
}

export { type MarkProps };
