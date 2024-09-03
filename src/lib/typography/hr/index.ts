import Hr from './Hr.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { hr } from './theme';

interface HrProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string;
  hrClass?: string;
  iconDivClass?: string;
  textSpanClass?: string;
  innerDivClass?: string;
}

export { Hr, hr, type HrProps };
