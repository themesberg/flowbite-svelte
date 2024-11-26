import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

type ColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;
type SizeType = "md" | "sm" | "lg" | "xl" | "xs" | undefined;
type PlacementType = "top-left" | "top-center" | "top-right" | "center-left" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right" | "default" | "center" | undefined;

interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  color?: ColorType;
  cornerStyle?: "rounded" | "circular";
  size?: SizeType;
  border?: boolean;
  placement?: PlacementType | undefined;
  class?: string;
  offset?: boolean;
}

export { type IndicatorProps };
