import Toast from "./Toast.svelte";
import { toast } from "./theme";
import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes } from "svelte/elements";

type ColorType = "primary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "sky" | "violet" | "fuchsia" | "rose" | undefined;
type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  toastStatus?: boolean;
  dismissable?: boolean;
  color?: ColorType;
  position?: PositionType;
  baseClass?: string;
  iconClass?: string;
  contentClass?: string;
  align?: boolean;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { Toast, toast, type ToastProps };
