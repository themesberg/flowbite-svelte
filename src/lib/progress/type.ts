import type { HTMLAttributes } from "svelte/elements";
import type { EasingFunction } from "svelte/transition";

type ColorType = "primary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  labelInside?: boolean;
  labelOutside?: string;
  easing?: EasingFunction;
  color?: ColorType;
  div2Class?: string;
  oustsideSpanClass?: string;
  oustsideProgressClass?: string;
  labeloutsidedivClass?: string;
  divClass?: string;
}

export { type ProgressbarProps };
