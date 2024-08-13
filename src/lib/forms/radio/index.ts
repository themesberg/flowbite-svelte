import Radio from './Radio.svelte';
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import { radio } from './theme';

type ColorType = VariantProps<typeof radio>['color'];
interface RadioProps extends HTMLInputAttributes {
  children: Snippet;
  aria_describedby?: string | undefined | null;
  color?: ColorType;
  group?: number | string | undefined;
  inputClass?: string | undefined;
  labelClass?: string | undefined;
}

export { Radio, radio, type RadioProps };
