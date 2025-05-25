import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export { default as CloseButton } from "./CloseButton.svelte";
export { closeButtonVariants } from "./theme";
export { trapFocus } from "./actions.svelte";
export { default as Popper } from "./Popper.svelte";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
