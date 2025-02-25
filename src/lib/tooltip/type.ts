import type { PopperProps } from "../utils/Popper.svelte";

type TooltipColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "default" | undefined;
interface TooltipProps extends PopperProps {
  type?: "light" | "dark";
  color?: TooltipColorType;
}
export { type TooltipProps };

