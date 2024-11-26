import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes } from "svelte/elements";

type alertColor = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  alertStatus?: boolean;
  closeIcon?: boolean;
  color?: alertColor;
  border?: boolean;
  rounded?: boolean;
  dismissable?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
}

export type { alertColor, AlertProps };
