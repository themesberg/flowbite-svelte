import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import { type ColorName } from '$lib/types';

interface FloatingLabelInputProps extends Omit<HTMLInputAttributes, 'size'> {
	children: Snippet;
	id?: string;
	value?: string | number | readonly string[] | undefined;
	aria_describedby?: string;
	inputStyle?: 'filled' | 'outlined' | 'standard';
	size?: 'small' | 'default';
	color?: ColorName | 'default';
	divClass?: string;
	inputClass?: string;
	labelClass?: string;
}

export { type FloatingLabelInputProps };
