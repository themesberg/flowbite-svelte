import { getContext } from "svelte";
import { type ThemeConfig } from "$lib";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const theme = getContext<ThemeConfig>("theme");
  return theme?.[componentKey];
}
