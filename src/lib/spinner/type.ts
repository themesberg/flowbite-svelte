import type { SVGAttributes } from "svelte/elements";
import type { SpinnerVaraiants } from "./theme";


interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  color?: SpinnerVaraiants["color"];
  size?: SpinnerVaraiants["size"];
  currentFill?: string;
  currentColor?: string;
}

export type { SpinnerProps };
