import Label from './Label.svelte';
import { label } from './theme';
import type { Snippet } from 'svelte';
import type { HTMLLabelAttributes } from 'svelte/elements';
import { type ColorName } from '$lib/types';

interface LabelProps extends HTMLLabelAttributes {
  children: Snippet;
  color?: ColorName | 'disabled';
  show?: boolean;
  class?: string | undefined;
  for?: string | undefined | null;
}

export { Label, label, type LabelProps };
