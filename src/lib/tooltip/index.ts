import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import Tooltip from "./Tooltip.svelte";
// import TooltipScroll from './TooltipScroll.svelte';
import { tooltip } from "./theme";

type TooltipColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "default" | undefined;

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  triggeredBy?: string;
  showOn?: "hover" | "click";
  position?: "top" | "bottom" | "left" | "right";
  color?: TooltipColorType;
  arrow?: boolean;
  offset?: number;
  reference?: string;
  visible?: boolean;
}

export { Tooltip, tooltip, type TooltipProps };
