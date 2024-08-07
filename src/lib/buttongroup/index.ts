import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import ButtonGroup from './ButtonGroup.svelte';
import { buttonGroup } from './theme';

interface ButtonGroupProps {
  children: Snippet;
  size?: SizeType;
  class?: string | undefined;
}

type SizeType = VariantProps<typeof buttonGroup>['size'];

export { ButtonGroup, buttonGroup, type ButtonGroupProps };
