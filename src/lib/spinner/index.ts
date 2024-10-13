import Spinner from "./Spinner.svelte";
import type { SVGAttributes } from "svelte/elements";
import { spinner } from "./theme";

type ColorType = "primary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "sky" | "violet" | "fuchsia" | "rose" | "secondary" | undefined;
type SizeType = "8" | "4" | "5" | "6" | "10" | "12" | "16" | undefined;

interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  color?: ColorType;
  size?: SizeType;
  currentFill?: string;
  currentColor?: string;
}

export { Spinner, spinner, type SpinnerProps };
