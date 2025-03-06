import type { Snippet } from "svelte";
import type { HTMLButtonAttributes, HTMLAnchorAttributes } from "svelte/elements";

type ButtonColorType = "primary" | "dark" | "alternative" | "light" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
type ButtonSizeType = "sm" | "md" | "lg" | "xl" | "xs" | undefined;

type HTMLAttributesWithoutAbort = Omit<HTMLButtonAttributes, "on:abort"> & Omit<HTMLAnchorAttributes, "on:abort">;

interface ButtonProps extends HTMLAttributesWithoutAbort {
  children: Snippet;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  shadow?: boolean;
  tag?: string;
  checked?: boolean;
  disabled?: boolean;
  href?: string;
}

type GradientButtonColorType = "red" | "lime" | "green" | "teal" | "cyan" | "blue" | "purple" | "pink" | "purpleToBlue" | "cyanToBlue" | "greenToBlue" | "purpleToPink" | "pinkToOrange" | "tealToLime" | "redToYellow" | undefined;

interface GradientButtonProps extends HTMLAttributesWithoutAbort {
  children: Snippet;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonSizeType;
  color?: GradientButtonColorType;
  shadow?: boolean;
  tag?: string;
  checked?: boolean;
  disabled?: boolean;
  href?: string;
}

export { type ButtonProps, type GradientButtonProps };
