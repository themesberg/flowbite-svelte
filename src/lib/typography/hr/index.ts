import Hr from './Hr.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { hr } from './theme';

interface HrProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  icon?: boolean;
  divClass?: string | undefined;
  hrClass?: string | undefined;
  iconDivClass?: string | undefined;
  textSpanClass?: string | undefined;
  innerDivClass?: string | undefined;
}

export { Hr, hr, type HrProps };
