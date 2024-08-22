import Button from './Button.svelte';
import GradientButton from './GradientButton.svelte';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

interface GradientButtonProps {
  children: Snippet;
  color?: keyof typeof gradientClasses;
  shadow?: boolean;
  outline?: boolean;
  pill?: boolean;
  class?: string | undefined | null;
  onclick?: () => void;
  href?: HTMLAnchorAttributes['href'];
  target?: HTMLAnchorAttributes['target'];
  rel?: HTMLAnchorAttributes['rel'];
  type?: HTMLButtonAttributes['type'];
  disabled?: HTMLButtonAttributes['disabled'];
  name?: HTMLButtonAttributes['name'];
}

export { Button, GradientButton, type GradientButtonProps };
