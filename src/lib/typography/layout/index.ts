import Layout from './Layout.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { layout } from './theme';

interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

export { Layout, layout, type LayoutProps };
