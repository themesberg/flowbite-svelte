import type { PopperProps } from "$lib/utils/Popper.svelte";
import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";

type PopoverColorType = "default" | "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;
interface PopoverProps extends PopperProps {
  titleSlot?: Snippet | string;
  color?: PopoverColorType;
  params?: ParamsType | undefined;
  transition?: TransitionFunc;
}



// interface TooltipPositionOptions {
//   tooltipRect: DOMRect;
//   referenceRect: DOMRect;
//   position: Position;
//   offset: number;
//   arrowRect?: DOMRect;
// }

// interface PositionResult {
//   top: number;
//   left: number;
//   arrowTop?: number;
//   arrowLeft?: number;
// }

// export type { PopoverProps, TooltipPositionOptions, PositionResult, Position };
export type { PopoverProps };

