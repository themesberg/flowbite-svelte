import Button from './Button.svelte';
import GradientButton from './GradientButton.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import { button, gradientButton } from './theme';

type ButtonColorType = VariantProps<typeof button>['color'];
type ButtonSizeType = VariantProps<typeof button>['size'];

interface ButtonProps {
  children: Snippet;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonSizeType;
  href?: HTMLAnchorAttributes['href'];
  target?: HTMLAnchorAttributes['target'];
  rel?: HTMLAnchorAttributes['rel'];
  type?: HTMLButtonAttributes['type'];
  disabled?: boolean;
  name?: HTMLButtonAttributes['name'];
  color?: ButtonColorType;
  shadow?: boolean;
  tag?: string | undefined | null;
  checked?: boolean | undefined;
  class?: string | undefined;
  onclick?: () => void;
}

type GradientButtonColorType = VariantProps<typeof gradientButton>['color'];

interface GradientButtonProps {
  children: Snippet;
  color?: GradientButtonColorType;
  shadow?: boolean;
  outline?: boolean;
  pill?: boolean;
  size?: ButtonSizeType;
  class?: string | undefined | null;
  href?: HTMLAnchorAttributes['href'];
  target?: HTMLAnchorAttributes['target'];
  rel?: HTMLAnchorAttributes['rel'];
  type?: HTMLButtonAttributes['type'];
  disabled?: boolean;
  name?: HTMLButtonAttributes['name'];
}

export { Button, GradientButton, gradientButton, button, type ButtonProps, type GradientButtonProps };
