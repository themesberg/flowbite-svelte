import Layout from './Layout.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const layoutVariants = tv({
  base: 'grid grid-cols-1 sm:grid-cols-2',
});

interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

export {
  Layout,
  layoutVariants,
  type LayoutProps
}