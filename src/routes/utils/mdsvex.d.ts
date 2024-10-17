/* eslint-disable  @typescript-eslint/no-empty-object-type */
declare module '*.md' {
  import type { SvelteComponent } from 'svelte';

  export default class Comp extends SvelteComponent {
    $$prop_def: {};
    metadata: Record<string, unknown>;
  }
  export const metadata: Record<string, unknown>;
}

declare module '*.svx' {
  import type { SvelteComponent } from 'svelte';

  export default class Comp extends SvelteComponent {}

  export const metadata: Record<string, unknown>;
}

declare module '*.svelte.md' {
  import type { SvelteComponent } from 'svelte';

  export default class Comp extends SvelteComponent {}

  export const metadata: Record<string, unknown>;
}
