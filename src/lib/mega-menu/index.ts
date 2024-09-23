import type { Snippet } from 'svelte';
import MegaMenu from './MegaMenu.svelte';
import { megamenu } from './theme';

interface MegaMenuProps {
  children?: Snippet;
}

export { MegaMenu, type MegaMenuProps, megamenu }