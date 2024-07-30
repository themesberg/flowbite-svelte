import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import ButtonGroup from './ButtonGroup.svelte';
// import type { SizeType } from '$lib/types';

const buttonGroupVariants = tv({
  base: 'inline-flex rounded-lg shadow-sm',
  variants: {
    size: {
      sm: 'scale-90',
      md: 'scale-100',
      lg: 'scale-110'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

interface ButtonGroupProps {
  children: Snippet;
  size?: SizeType;
  class?: string | undefined;
}

type SizeType = VariantProps<typeof buttonGroupVariants>['size'];

export { ButtonGroup, type ButtonGroupProps, buttonGroupVariants };
