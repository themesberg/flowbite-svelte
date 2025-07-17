import { type ThemeConfig } from "$lib";
import type { ClassValue } from "clsx";
import { getContext } from "svelte";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const theme = getContext<ThemeConfig>("theme");
  return theme?.[componentKey];
}

type Slots<T extends { slots: Record<string, unknown> }> = Omit<T["slots"], "base">
export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue; }>;
};

export function themeDeprecated(component: string, names: Record<string, unknown>): void {
  const nonEmptyNames = Object.keys(names).filter(name => names[name]).map(name => `"${name}"`);
  if (nonEmptyNames.length === 0) return;
  console.warn(`The following "${component}" props are deprecated: ${nonEmptyNames.join(", ")}.\nPlease update your code to use the new "classes" property.`);
}