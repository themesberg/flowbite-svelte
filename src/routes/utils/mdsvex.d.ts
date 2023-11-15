declare module '*.md' {
  import type { SvelteComponentDev } from 'svelte/internal';

  export default class Comp extends SvelteComponentDev {
    $$prop_def: {};
    metadata: Record<string, any>;
  }
  export const metadata: Record<string, any>;
}
