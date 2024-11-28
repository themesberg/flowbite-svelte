import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { TransitionFunc, ParamsType } from "../types";

type PopoverColorType = "default" | "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;
interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  triggeredBy: string;
  titleSlot?: Snippet | string;
  // placement?: 'top' | 'bottom' | 'left' | 'right';
  position?: "top" | "bottom" | "left" | "right" | "right-start" | "right-end" | "left-start" | "left-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end";
  color?: PopoverColorType;
  arrow?: boolean;
  offset?: number;
  reference?: string;
  params?: ParamsType | undefined;
  transition?: TransitionFunc;
}

type Position = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";

interface TooltipPositionOptions {
  tooltipRect: DOMRect;
  referenceRect: DOMRect;
  position: Position;
  offset: number;
  arrowRect?: DOMRect;
}

interface PositionResult {
  top: number;
  left: number;
  arrowTop?: number;
  arrowLeft?: number;
}

export type { PopoverProps, TooltipPositionOptions, PositionResult, Position };
