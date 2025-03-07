import { type Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { ToolbarButtonVariants, ToolbarVariants } from "./theme";

type ToolbarColor = "primary" | "secondary" | "default" | undefined;

interface ToolbarProps extends ToolbarVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  children: Snippet;
  end?: Snippet;
  // embedded?: boolean;
  // color?: ToolbarColor;
}

type SpacingType = "default" | "tight" | "loose" | undefined;
type PaddingType = "default" | "none" | undefined;
type PositionType = "first" | "last" | "middle" | undefined;

interface ToolbarGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  class?: string;
  spacing?: SpacingType;
  padding?: PaddingType;
  position?: PositionType;
}

type HTMLButtonOrAnchorAttributes = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, "color">;

interface ToolbarButtonProps extends ToolbarButtonVariants, HTMLButtonOrAnchorAttributes {
  children: Snippet;
  name?: string;
  // ariaLabel?: string;
}

export type { ToolbarProps, ToolbarGroupProps, ToolbarButtonProps };
