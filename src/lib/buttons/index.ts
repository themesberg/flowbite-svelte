import Button from './Button.svelte';
import GradientButton from './GradientButton.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import { gradientButton } from './theme';

type ColorType = VariantProps<typeof gradientButton>['color'];

interface GradientButtonProps {
  children: Snippet;
  color?: ColorType;
  shadow?: boolean;
  outline?: boolean;
  pill?: boolean;
  class?: string | undefined | null;
  href?: HTMLAnchorAttributes['href'];
  target?: HTMLAnchorAttributes['target'];
  rel?: HTMLAnchorAttributes['rel'];
  type?: HTMLButtonAttributes['type'];
  disabled?: HTMLButtonAttributes['disabled'];
  name?: HTMLButtonAttributes['name'];
}

export { Button, GradientButton, gradientButton, type GradientButtonProps };
