/**
 * Flowbite Utilities Plugin for Tailwind CSS v4
 * 
 * This plugin generates utility classes for Flowbite's custom color variables.
 * In Tailwind v4, CSS custom properties defined in @theme are not automatically
 * converted to utility classes, so this plugin explicitly creates them.
 */

interface TailwindPlugin {
  handler: (...args: any[]) => void;
  config?: any;
}

declare const flowbitePlugin: TailwindPlugin;
export default flowbitePlugin;
