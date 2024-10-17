//This file contains the utility functions that are used to get the styles for the components based on the color prop.
//All colors should match the colors in the tailwind.config.js file.

import type { Colors } from '$lib/types';

export function getFocusRingClass(color: Colors): string {
  const colorMap: Record<Colors, string> = {
    primary: 'focus:ring-primary-500 dark:focus:ring-primary-400',
    pink: 'focus:ring-pink-500 dark:focus:ring-pink-400',
    fuchsia: 'focus:ring-fuchsia-500 dark:focus:ring-fuchsia-400',
    purple: 'focus:ring-purple-500 dark:focus:ring-purple-400',
    violet: 'focus:ring-violet-500 dark:focus:ring-violet-400',
    indigo: 'focus:ring-indigo-500 dark:focus:ring-indigo-400',
    blue: 'focus:ring-blue-500 dark:focus:ring-blue-400',
    sky: 'focus:ring-sky-500 dark:focus:ring-sky-400',
    cyan: 'focus:ring-cyan-500 dark:focus:ring-cyan-400',
    teal: 'focus:ring-teal-500 dark:focus:ring-teal-400',
    emerald: 'focus:ring-emerald-500 dark:focus:ring-emerald-400',
    green: 'focus:ring-green-500 dark:focus:ring-green-400',
    lime: 'focus:ring-lime-500 dark:focus:ring-lime-400',
    yellow: 'focus:ring-yellow-500 dark:focus:ring-yellow-400',
    amber: 'focus:ring-amber-500 dark:focus:ring-amber-400',
    orange: 'focus:ring-orange-500 dark:focus:ring-orange-400',
    red: 'focus:ring-red-500 dark:focus:ring-red-400',
    stone: 'focus:ring-stone-500 dark:focus:ring-stone-400',
    neutral: 'focus:ring-neutral-500 dark:focus:ring-neutral-400',
    zinc: 'focus:ring-zinc-500 dark:focus:ring-zinc-400',
    gray: 'focus:ring-gray-500 dark:focus:ring-gray-400',
    slate: 'focus:ring-slate-500 dark:focus:ring-slate-400'
  };
  return `focus:ring-2 ${colorMap[color]}`;
}

export function getBorderClass(color: Colors): string {
  const colorMap: Record<Colors, string> = {
    primary: 'border-primary-500 dark:border-primary-400',
    pink: 'border-pink-500 dark:border-pink-400',
    fuchsia: 'border-fuchsia-500 dark:border-fuchsia-400',
    purple: 'border-purple-500 dark:border-purple-400',
    violet: 'border-violet-500 dark:border-violet-400',
    indigo: 'border-indigo-500 dark:border-indigo-400',
    blue: 'border-blue-500 dark:border-blue-400',
    sky: 'border-sky-500 dark:border-sky-400',
    cyan: 'border-cyan-500 dark:border-cyan-400',
    teal: 'border-teal-500 dark:border-teal-400',
    emerald: 'border-emerald-500 dark:border-emerald-400',
    green: 'border-green-500 dark:border-green-400',
    lime: 'border-lime-500 dark:border-lime-400',
    yellow: 'border-yellow-500 dark:border-yellow-400',
    amber: 'border-amber-500 dark:border-amber-400',
    orange: 'border-orange-500 dark:border-orange-400',
    red: 'border-red-500 dark:border-red-400',
    stone: 'border-stone-500 dark:border-stone-400',
    neutral: 'border-neutral-500 dark:border-neutral-400',
    zinc: 'border-zinc-500 dark:border-zinc-400',
    gray: 'border-gray-500 dark:border-gray-400',
    slate: 'border-slate-500 dark:border-slate-400'
  };
  return colorMap[color];
}
