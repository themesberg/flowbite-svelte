import Heading from './Heading.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const headingVariants = tv({
  base: 'font-bold text-gray-900 dark:text-white',
  variants: {
    tag: {
      h1: 'text-5xl font-extrabold',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
      h5: 'text-xl',
      h6: 'text-lg'
    }
  },
  defaultVariants: {
    tag: 'h1'
  }
});

type TagType = VariantProps<typeof headingVariants>['tag'];
interface HeadingProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag?: TagType;
  class?: string | undefined;
}

export { Heading, headingVariants, type HeadingProps };
