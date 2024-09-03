import CheckboxButton from './CheckboxButton.svelte';
import type { SizeType, ColorName } from '$lib/types';
import type { Snippet } from 'svelte';

interface CheckboxButtonProps {
  children: Snippet;
  class?: string;
  group?: (string | number)[];
  value?: string | number;
  checked?: boolean | undefined;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: SizeType;
  color?: ColorName | 'alternative' | 'dark' | 'light';
  shadow?: boolean;
}

export { CheckboxButton, type CheckboxButtonProps };
