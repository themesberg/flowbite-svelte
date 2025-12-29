import type { ThemeConfig } from "$lib";
import type { ClassValue } from "clsx";
import { getThemeContext } from "$lib/context";

/**
 * Retrieves the theme configuration for a specific component.
 *
 * Looks up the current theme from context and safely returns
 * the configuration associated with the given component key.
 *
 * @template K - A key of {@link ThemeConfig}
 * @param componentKey - The component key whose theme config should be returned
 * @returns The theme configuration for the given component, or `undefined`
 *          if no theme is available
 */
export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const themeState = getThemeContext();

  const theme = themeState && "value" in themeState ? themeState.value : themeState;

  const finalTheme = theme as ThemeConfig | undefined;
  return finalTheme?.[componentKey];
}

/**
 * Utility type that extracts slot names from a component definition,
 * excluding the `base` slot.
 *
 * @template T - A component type containing a `slots` record
 */
type Slots<T extends { slots: Record<string, unknown> }> = Omit<T["slots"], "base">;

/**
 * Optional class overrides for component slots.
 *
 * Allows consumers to provide Tailwind / utility class values
 * for individual slots, excluding the `base` slot.
 *
 * @template T - A component type containing a `slots` record
 */
export type Classes<T extends { slots: Record<string, unknown> }> = {
  /**
   * Mapping of slot names to class values.
   * Each slot is optional and may be partially specified.
   */
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};
