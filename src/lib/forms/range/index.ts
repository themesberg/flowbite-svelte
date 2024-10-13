import Range from "./Range.svelte";
import { range } from "./theme";
import type { HTMLInputAttributes } from "svelte/elements";

type RangeColorType = "gray" | "red" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;
type AppearanceType = "auto" | "none" | undefined;
type RangeType = "sm" | "md" | "lg";

interface RangeProps extends HTMLInputAttributes {
  value?: number | string;
  appearance?: AppearanceType;
  color?: RangeColorType;
  rangeSize?: RangeType;
  inputClass?: string;
}
export { Range, range, type RangeProps, type RangeColorType };
