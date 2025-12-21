/**
 * Flowbite Utilities Plugin for Tailwind CSS v4
 *
 * This plugin generates utility classes for Flowbite's custom color variables.
 * In Tailwind v4, CSS custom properties defined in @theme are not automatically
 * converted to utility classes, so this plugin explicitly creates them.
 */

interface TailwindPlugin {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (...args: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: any;
}

declare const flowbitePlugin: TailwindPlugin;
export default flowbitePlugin;
