import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

interface SearchProps<T> extends Omit<HTMLInputAttributes, 'size'> {
	children?: Snippet;
	inputClass?: string;
	size?: 'sm' | 'md' | 'lg';
	placeholder?: string;
	value?: T;
}

export { type SearchProps };
