import Button from './Button.svelte';
import GradientButton from './GradientButton.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import { button, gradientButton } from './theme';

type ButtonColorType = VariantProps<typeof button>['color'];
type ButtonSizeType = VariantProps<typeof button>['size'];

type ButtonSpecificProps = {
  children: Snippet;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  shadow?: boolean;
  tag?: string;
  checked?: boolean;
  class?: string;
  disabled?: boolean;
};

type ButtonProps = ButtonSpecificProps &
  Omit<HTMLButtonAttributes, keyof ButtonSpecificProps> &
  Omit<HTMLAnchorAttributes, keyof ButtonSpecificProps> & {
    href?: string;
  };

type GradientButtonColorType = VariantProps<typeof gradientButton>['color'];

type GradientButtonSpecificProps = {
  children: Snippet;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonSizeType;
  color?: GradientButtonColorType;
  shadow?: boolean;
  tag?: string;
  checked?: boolean;
  class?: string;
  disabled?: boolean;
};

type GradientButtonProps = GradientButtonSpecificProps &
  Omit<HTMLButtonAttributes, keyof ButtonSpecificProps> &
  Omit<HTMLAnchorAttributes, keyof ButtonSpecificProps> & {
    href?: string;
  };

export { Button, GradientButton, gradientButton, button, type ButtonProps, type GradientButtonProps };
