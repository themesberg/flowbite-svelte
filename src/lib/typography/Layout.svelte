<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    divClass?: string;
    cols?: string;
    gap?: number;
  }

  export let divClass: $$Props['divClass'] = 'grid';
  export let cols: $$Props['cols'] = 'grid-cols-1 sm:grid-cols-2';
  export let gap: $$Props['gap'] = 6;
  let classDiv = twMerge(divClass, 'gap-' + String(gap), cols);
</script>

<div {...$$restProps} class={classDiv}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'grid';
@prop export let cols: $$Props['cols'] = 'grid-cols-1 sm:grid-cols-2';
@prop export let gap: $$Props['gap'] = 6;
-->
