import type { ClassValue } from "clsx";
import * as themes from "./themes";
export { default as ThemeProvider } from "./ThemeProvider.svelte";

export type ThemeConfig = {
  [K in keyof typeof themes]?: (typeof themes)[K]["slots"] extends undefined ? ClassValue : Partial<{ [L in keyof (typeof themes)[K]["slots"]]: ClassValue }>;
};