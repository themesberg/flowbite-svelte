import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { ButtonVariants, GradientButtonVariantes } from "./theme";

type HTMLButtonOrAnchorAttributes = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, "color">;

interface ButtonProps extends ButtonVariants, HTMLButtonOrAnchorAttributes {
  tag?: string;
  disabled?: boolean;
  href?: string;
}

interface GradientButtonProps extends GradientButtonVariantes, HTMLButtonOrAnchorAttributes {
  tag?: string;
  disabled?: boolean;
  href?: string;
}

export { type ButtonProps, type GradientButtonProps };
