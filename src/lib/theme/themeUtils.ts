import { type ThemeConfig } from "$lib";
import type { ClassValue } from "clsx";
import { getContext } from "svelte";
// import { dev } from "$app/environment";
// for svelte users not using sveltekit substitute the above line with the following line
const dev = import.meta.env.MODE === "development";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const theme = getContext<ThemeConfig>("theme");
  return theme?.[componentKey];
}

type Slots<T extends { slots: Record<string, unknown> }> = Omit<T["slots"], "base">;
export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};

/**
 * Logs a warning when deprecated theme-related props are used in a component.
 *
 * This utility is intended to aid migration by detecting legacy class-related props
 * and printing a warning in the console during development. If a `replacements` map is
 * provided, it will suggest how to refactor the props using either the `class` prop
 * or the `classes` object.
 *
 * @param component - The name of the component where the deprecated props were used.
 * @param names - A record of deprecated prop names and their values (e.g. `{ aClass: "..." }`).
 * @param replacements - Optional mapping of deprecated keys to their new equivalents,
 * such as divClass: "class", div2Class: "top", div3Class: "leftTop", ...
 *
 * @example
 * ```ts
 * warnThemeDeprecation("Badge", {
 *   aClass: "text-sm"
 * }, {
 *   aClass: "class"
 * });
 * // Console output:
 * // The following "Badge" props are deprecated: "aClass".
 * // Please update your code to use the new "classes" or "class" prop.
 * // Migration example: class="text-sm"
 * ```
 */
export function warnThemeDeprecation(component: string, names: Record<string, unknown>, replacements?: Record<string, unknown>): void {
  if (!dev) return;

  const nonEmptyNames = Object.keys(names).filter((name) => names[name]);
  if (nonEmptyNames.length === 0) return;

  let migrationHint = "";

  const usesClass = nonEmptyNames.some((name) => replacements?.[name] === "class");
  const propText = usesClass ? `"classes" or "class"` : `"classes"`;

  if (replacements) {
    const classProps: string[] = [];
    const classesObjectEntries: string[] = [];

    for (const name of nonEmptyNames) {
      const newKey = replacements[name];
      const value = names[name];
      if (!newKey || !value) continue;

      if (newKey === "class") {
        classProps.push(`class="${value}"`);
      } else {
        classesObjectEntries.push(`${newKey}: "${value}"`);
      }
    }

    const hintLines: string[] = [];
    if (classProps.length > 0) hintLines.push(...classProps);
    if (classesObjectEntries.length > 0) {
      hintLines.push(`classes={{ ${classesObjectEntries.join(", ")} }}`);
    }

    if (hintLines.length > 0) {
      migrationHint = `\nMigration example: ${hintLines.join(" ")}`;
    }
  }

  console.warn(`The following "${component}" props are deprecated: ${nonEmptyNames.map((n) => `"${n}"`).join(", ")}.` + ` Please update your code to use the new ${propText} prop.${migrationHint}`);
}
