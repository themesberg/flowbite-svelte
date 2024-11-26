import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { Placement, Strategy } from "@floating-ui/dom";

type TooltipColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "default" | undefined;

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  triggeredBy?: string;
  reference?: string;
  showOn?: "hover" | "click";
  position?: Placement;
  color?: TooltipColorType;
  arrow?: boolean;
  offset?: number;
  strategy?: Strategy;
  visible?: boolean;
}

export { type TooltipProps };
