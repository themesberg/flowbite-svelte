import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { ButtonVariants, GradientButtonVariantes } from "./theme";
import type { AnchorButtonAttributes } from "$lib/types";

type HTMLButtonOrAnchorAttributes = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, "color">;

type ButtonProps = ButtonVariants &
  AnchorButtonAttributes & {
    tag?: string;
    disabled?: boolean;
    outline?: boolean;
    shadow?: boolean;
  };

interface GradientButtonProps extends GradientButtonVariantes, HTMLButtonOrAnchorAttributes {
  tag?: string;
  disabled?: boolean;
  href?: string;
}

export { type ButtonProps, type GradientButtonProps };
