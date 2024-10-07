import type { Snippet } from 'svelte';
import InputAddon from './InputAddon.svelte';
import type { HTMLAttributes } from 'svelte/elements';
interface InputAddonProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  class?: string;
  size?: 'sm' | 'md' | 'lg' | undefined;
}

export { InputAddon, type InputAddonProps };
