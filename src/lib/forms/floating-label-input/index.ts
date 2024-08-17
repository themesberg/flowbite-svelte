import FloatingLabelInput from './FloatingLabelInput.svelte';
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import { floatingLabelInput } from './theme';
import { type ColorName } from '$lib/types';

interface FloatingLabelInputProps extends Omit<HTMLInputAttributes, 'size'> {
  children: Snippet;
  id?: string | undefined | null;
  aria_describedby?: string | undefined | null;
  style?: 'filled' | 'outlined' | 'standard';
  size?: 'small' | 'default';
  color?: ColorName | 'default';
  divClass?: string | undefined | null;
  inputClass?: string | undefined | null;
  labelClass?: string | undefined | null;
}

export { FloatingLabelInput, floatingLabelInput, type FloatingLabelInputProps };
