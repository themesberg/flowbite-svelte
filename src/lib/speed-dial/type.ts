import type { ButtonProps } from "$lib/buttons";
import type { PopperProps } from "$lib/utils/Popper.svelte";
import type { Placement } from "@floating-ui/utils";
import type { Snippet } from "svelte";

export interface SpeedCtxType {
  pill: boolean;
  tooltip: Placement | "none";
  textOutside: boolean;
}

export type SpeedDialProps = PopperProps & {
  children: Snippet;
  button?: Snippet;
  popperClass?: string;
  placement?: Placement;
  tooltip?: Placement | "none";
  trigger?: PopperProps["trigger"];
  textOutside?: boolean;
  pill?: boolean;
  ontoggle?: PopperProps["ontoggle"];
  onbeforetoggle?: PopperProps["onbeforetoggle"];
};

export type SpeedDialButtonProps = ButtonProps & {
  name?: string;
  tooltip?: Placement | "none";
  pill?: boolean;
  textOutside?: boolean;
  textClass?: string;
};

export type SpeedDialTriggerProps = ButtonProps & {
  icon?: Snippet;
  gradient?: boolean;
  name?: string;
};
