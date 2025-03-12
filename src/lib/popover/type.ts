import type { PopperProps } from "$lib/utils/Popper.svelte";
import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { PopoverVariants } from "./theme";

interface PopoverProps extends Omit<PopperProps, "title"> {
  title?: Snippet | string;
  color?: PopoverVariants["color"];
  params?: ParamsType | undefined;
  defaultClass?: string;
  transition?: TransitionFunc;
}

export type { PopoverProps };
