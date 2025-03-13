import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	tag: 'dt' | 'dd';
	class?: string;
}

export { type DescriptionListProps };
