import type { Component, Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes } from "svelte/elements";
import type { AlertVariants } from "./theme";

type alertColor = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

interface AlertProps extends Omit<AlertVariants, "icon">, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  children: Snippet;
  icon?: Snippet;
  alertStatus?: boolean;
  closeIcon?: Component;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
}

export type { alertColor, AlertProps };
