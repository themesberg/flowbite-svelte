declare module '*.md' {
  import type { SvelteComponentDev } from 'svelte/internal';

  export default class Comp extends SvelteComponentDev {
    $$prop_def: unknown;
    metadata: Record<string, unkown>;
  }
  export const metadata: Record<string, unknown>;
}
