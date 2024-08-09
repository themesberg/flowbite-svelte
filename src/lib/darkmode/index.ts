import Darkmode from './Darkmode.svelte';
import { darkmode } from './theme';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

interface DarkmodeProps extends HTMLButtonAttributes {
  class?: string | undefined;
  lightIcon?: Snippet;
  darkIcon?: Snippet;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string | undefined;
}

export { Darkmode, darkmode, type DarkmodeProps };
