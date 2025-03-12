import type { PopperProps } from "../utils/Popper.svelte";
import type { TooltipVariants } from "./theme";

interface TooltipProps extends PopperProps {
  type?: "light" | "dark";
  color?: TooltipVariants["color"];
}

export { type TooltipProps };
