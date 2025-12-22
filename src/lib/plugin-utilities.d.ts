/**
 * Flowbite Utilities Plugin for Tailwind CSS v4
 *
 * This plugin generates utility classes for Flowbite's custom color variables.
 * In Tailwind v4, CSS custom properties defined in @theme are not automatically
 * converted to utility classes, so this plugin explicitly creates them.
 *
 * The plugin programmatically generates utilities for:
 * - Background colors (bg-*)
 * - Text colors (text-*)
 * - Border colors (border-*)
 * - Ring colors (ring-*)
 *
 * For color groups including: neutral, success, danger, warning, dark, brand,
 * and single colors like purple, sky, teal, pink, cyan, fuchsia, indigo, orange.
 */

interface TailwindPlugin {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (...args: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: any;
}

declare const flowbitePlugin: TailwindPlugin;
export default flowbitePlugin;
