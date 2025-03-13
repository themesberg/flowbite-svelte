import type { Snippet } from 'svelte';

interface ButtonGroupProps {
	children: Snippet;
	size?: SizeType;
	class?: string;
}

type SizeType = 'sm' | 'md' | 'lg' | undefined;

export { type ButtonGroupProps };
