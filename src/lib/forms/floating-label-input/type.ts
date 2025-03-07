import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { FloatingLabelInputVaratiants } from "./theme";

interface FloatingLabelInputProps extends Omit<HTMLInputAttributes, "size"> {
  children: Snippet;
  id?: string;
  value?: string | number | readonly string[] | undefined;
  "aria-describedby"?: string;
  variant?: FloatingLabelInputVaratiants["variant"];
  size?: FloatingLabelInputVaratiants["size"];
  color?: FloatingLabelInputVaratiants["color"];
  inputClass?: string;
  labelClass?: string;
}

export { type FloatingLabelInputProps };
