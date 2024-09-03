import Heading from './Heading.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { heading } from './theme';

type TagType = VariantProps<typeof heading>['tag'];

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag?: TagType;
  class?: string;
}

export { Heading, heading, type HeadingProps };
