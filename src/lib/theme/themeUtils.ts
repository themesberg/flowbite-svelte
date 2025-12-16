import type { ThemeConfig } from "$lib";
import type { ClassValue } from "clsx";
import { getThemeContext } from "$lib/context";
import { DEV } from "esm-env";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const themeState = getThemeContext();

  const theme = themeState && "value" in themeState ? themeState.value : themeState;

  const finalTheme = theme as ThemeConfig | undefined;
  return finalTheme?.[componentKey];
}

type Slots<T extends { slots: Record<string, unknown> }> = Omit<T["slots"], "base">;
export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};

/**
 * Warns about deprecated theme-related props and suggests modern alternatives.
 *
 * Shows the component name, deprecated props, migration hints, and usage location (in dev mode).
 *
 * @param component - Name of the component using deprecated props.
 * @param names - Record of deprecated prop names and their values.
 * @param replacements - Optional map of deprecated keys to their replacements (e.g., "divClass" → "div").
 */
export function warnThemeDeprecation(component: string, names: Record<string, unknown>, replacements?: Record<string, unknown>): void {
  if (!DEV) return;

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

  // Stack trace parsing to find external caller
  const stack = new Error().stack;
  const externalCaller = getExternalCaller(stack);

  console.warn(
    `⚠️ The following "${component}" props are deprecated: ${nonEmptyNames.map((n) => `"${n}"`).join(", ")}.\n` +
      `💡 Please use the ${propText} prop instead.${migrationHint}\n` +
      (externalCaller ? `🔍 Used at: ${externalCaller}` : "")
  );
}

// Extracts the first file in the stack trace that is NOT the current component file
function getExternalCaller(stack?: string): string | null {
  if (!stack) return null;

  const lines = stack.split("\n").slice(2); // skip "Error" and self-call
  const currentFileMatch = lines[0]?.match(/(?:\()?(.*?\.svelte):\d+:\d+\)?$/);
  const currentFile = currentFileMatch?.[1];

  for (const line of lines) {
    const match = line.match(/(?:\()?(.*?\.svelte):\d+:\d+\)?$/);
    const file = match?.[1];
    if (file && file !== currentFile) {
      return line.trim().replace(/^at /, ""); // Clean format
    }
  }

  return null;
}