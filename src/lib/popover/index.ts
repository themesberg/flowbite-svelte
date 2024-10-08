import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import Popover from "./Popover.svelte";
import type { TransitionFunc, ParamsType } from "../types";
import { popover } from "./theme";
import { type VariantProps } from "tailwind-variants";

type PopoverColorType = VariantProps<typeof popover>["color"];
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

// tooltipPositioner.ts

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

/**
 * Calculates the position for a tooltip relative to a reference element.
 * @param options - The options for positioning
 * @returns The calculated position for the tooltip and arrow
 */
function calculateTooltipPosition({ tooltipRect, referenceRect, position, offset, arrowRect }: TooltipPositionOptions): PositionResult {
  const scrollX = window.scrollX || document.documentElement.scrollLeft;
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  let top: number, left: number, arrowTop: number | undefined, arrowLeft: number | undefined;

  switch (position) {
    case "top":
      top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset;
      left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
      if (arrowRect && offset === 0) {
        arrowTop = tooltipRect.height - 5;
        arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
      }
      break;
    case "top-start":
      top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset;
      left = referenceRect.left + scrollX;
      if (arrowRect && offset === 0) {
        arrowTop = tooltipRect.height - 5;
        arrowLeft = referenceRect.width / 2 - arrowRect.width / 2;
      }
      break;
    case "top-end":
      top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset;
      left = referenceRect.right + scrollX - tooltipRect.width;
      if (arrowRect && offset === 0) {
        arrowTop = tooltipRect.height - 5;
        arrowLeft = tooltipRect.width - referenceRect.width / 2 - arrowRect.width / 2;
      }
      break;
    case "bottom":
      top = referenceRect.bottom + scrollY + 10 + offset;
      left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
      if (arrowRect && offset === 0) {
        arrowTop = -arrowRect.height + 9;
        arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
      }
      break;
    case "bottom-start":
      top = referenceRect.bottom + scrollY + 10 + offset;
      left = referenceRect.left + scrollX;
      if (arrowRect && offset === 0) {
        arrowTop = -arrowRect.height + 9;
        arrowLeft = referenceRect.width / 2 - arrowRect.width / 2;
      }
      break;
    case "bottom-end":
      top = referenceRect.bottom + scrollY + 10 + offset;
      left = referenceRect.right + scrollX - tooltipRect.width;
      if (arrowRect && offset === 0) {
        arrowTop = -arrowRect.height + 9;
        arrowLeft = tooltipRect.width - referenceRect.width / 2 - arrowRect.width / 2;
      }
      break;
    case "left":
      top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
      left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset;
      if (arrowRect && offset === 0) {
        arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
        arrowLeft = tooltipRect.width - 5;
      }
      break;
    case "left-start":
      top = referenceRect.top + scrollY;
      left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset;
      if (arrowRect && offset === 0) {
        arrowTop = arrowRect.height;
        arrowLeft = tooltipRect.width - 5;
      }
      break;
    case "left-end":
      top = referenceRect.bottom + scrollY - tooltipRect.height;
      left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset;
      if (arrowRect && offset === 0) {
        arrowTop = tooltipRect.height - arrowRect.height * 2;
        arrowLeft = tooltipRect.width - 5;
      }
      break;
    case "right":
      top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
      left = referenceRect.right + scrollX + 10 + offset;
      if (arrowRect && offset === 0) {
        arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
        arrowLeft = -arrowRect.width / 2 + 2;
      }
      break;
    case "right-start":
      top = referenceRect.top + scrollY;
      left = referenceRect.right + scrollX + 10 + offset;
      if (arrowRect && offset === 0) {
        arrowTop = arrowRect.height;
        arrowLeft = -arrowRect.width / 2 + 2;
      }
      break;
    case "right-end":
      top = referenceRect.bottom + scrollY - tooltipRect.height;
      left = referenceRect.right + scrollX + 10 + offset;
      if (arrowRect && offset === 0) {
        arrowTop = tooltipRect.height - arrowRect.height * 2;
        arrowLeft = -arrowRect.width / 2 + 2;
      }
      break;
  }

  return { top, left, arrowTop, arrowLeft };
}

export { Popover, popover, type PopoverProps, calculateTooltipPosition };
