import Input from './Input.svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { FormSizeType, ColorName, SizeType } from '$lib/types';
import type { Snippet } from 'svelte';
import { input } from './theme';

interface InputProps<T = string> extends Omit<HTMLInputAttributes, 'size' | 'children'> {
  children?: Snippet<[{ class: string } & Record<string, unknown>]>;
  left?: Snippet;
  right?: Snippet;
  size?: FormSizeType;
  value?: T;
  color?: ColorName | 'default' | 'tinted';
  classLeft?: string;
  classRight?: string;
  class?: string;
}

function clampSize(s: SizeType) {
  return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
}

export { Input, input, type InputProps, clampSize };
