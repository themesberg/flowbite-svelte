import Input from './Input.svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { FormSizeType } from '$lib/types';
import type { Snippet } from 'svelte';
import { input } from './theme';
import { type ColorName } from '$lib/types';

interface InputProps extends Omit<HTMLInputAttributes, 'size'> {
  children?: Snippet;
  left?: Snippet;
  right?: Snippet;
  size?: FormSizeType;
  value?: any;
  defaultClass?: string | undefined | null;
  color?: ColorName | 'default' | 'tinted';
  floatClass?: string | undefined | null;
  classLeft?: string | undefined | null;
  classRight?: string | undefined | null;
  class?: string | undefined | null;
  show?: boolean;
}

export { Input, input, type InputProps };
