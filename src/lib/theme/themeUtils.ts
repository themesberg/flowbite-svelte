import { type ThemeConfig } from "$lib";
import type { ClassValue } from "clsx";
import { getContext } from "svelte";
import { dev } from '$app/environment';
// add PUBLIC_SHOW_HINT=true to .env to show migration hints in the console during the playwright tests
import { PUBLIC_SHOW_HINT } from '$env/static/public';

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
  const theme = getContext<ThemeConfig>("theme");
  return theme?.[componentKey];
}

type Slots<T extends { slots: Record<string, unknown> }> = Omit<T["slots"], "base">;
export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};

export function themeDeprecated(
  component: string,
  names: Record<string, unknown>,
  replacements?: Record<string, unknown>
): void {
  const showHint = dev || PUBLIC_SHOW_HINT === 'true';
  if (!showHint) return;

  const nonEmptyNames = Object.keys(names).filter((name) => names[name]);
  if (nonEmptyNames.length === 0) return;

  let migrationHint = '';

  const usesClass = nonEmptyNames.some((name) => replacements?.[name] === 'class');
  const propText = usesClass ? `"classes" or "class"` : `"classes"`;

  if (replacements) {
    const classProps: string[] = [];
    const classesObjectEntries: string[] = [];

    for (const name of nonEmptyNames) {
      const newKey = replacements[name];
      const value = names[name];
      if (!newKey || !value) continue;

      if (newKey === 'class') {
        classProps.push(`class="${value}"`);
      } else {
        classesObjectEntries.push(`${newKey}: "${value}"`);
      }
    }

    const hintLines: string[] = [];
    if (classProps.length > 0) hintLines.push(...classProps);
    if (classesObjectEntries.length > 0) {
      hintLines.push(`classes={{ ${classesObjectEntries.join(', ')} }}`);
    }

    if (hintLines.length > 0) {
      migrationHint = `\nMigration example:  ${hintLines.join(' ')}`;
    }
  }

  console.warn(
    `The following "${component}" props are deprecated: ${nonEmptyNames
      .map((n) => `"${n}"`)
      .join(', ')}.` +
      ` Please update your code to use the new ${propText} prop.${migrationHint}`
  );
}

<<<<<<< HEAD
export function themeDeprecated(component: string, usedDeprecatedProps: Record<string, unknown>): void {
  const activeProps = Object.entries(usedDeprecatedProps).filter(([_, val]) => !!val);
  if (activeProps.length === 0) return;
=======
export function themeDeprecated(
  component: string,
  names: Record<string, unknown>,
  replacements?: Record<string, unknown>
): void {
  const showHint = dev || PUBLIC_SHOW_HINT === 'true';
  if (!showHint) return;
>>>>>>> 1ae5fdf43 (fix: update themeDeprecated)

  const nonEmptyNames = Object.keys(names).filter((name) => names[name]);
  if (nonEmptyNames.length === 0) return;

  let migrationHint = '';

  const usesClass = nonEmptyNames.some((name) => replacements?.[name] === 'class');
  const propText = usesClass ? `"classes" or "class"` : `"classes"`;

  if (replacements) {
    const classProps: string[] = [];
    const classesObjectEntries: string[] = [];

    for (const name of nonEmptyNames) {
      const newKey = replacements[name];
      const value = names[name];
      if (!newKey || !value) continue;

      if (newKey === 'class') {
        classProps.push(`class="${value}"`);
      } else {
        classesObjectEntries.push(`${newKey}: "${value}"`);
      }
    }

    const hintLines: string[] = [];
    if (classProps.length > 0) hintLines.push(...classProps);
    if (classesObjectEntries.length > 0) {
      hintLines.push(`classes={{ ${classesObjectEntries.join(', ')} }}`);
    }

    if (hintLines.length > 0) {
      migrationHint = `\nMigration example:\n  ${hintLines.join('   ')}`;
    }
  }

  console.warn(
    `The following "${component}" props are deprecated: ${nonEmptyNames
      .map((n) => `"${n}"`)
      .join(', ')}.` +
      ` Please update your code to use the new ${propText} prop.${migrationHint}`
  );
}
