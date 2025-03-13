import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

interface HeadingProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	tag?: TagType;
	class?: string;
}

export { type HeadingProps };
