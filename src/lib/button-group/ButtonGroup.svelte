<script lang="ts">
  import { setContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import type { SizeType } from '$lib/types';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    size?: SizeType;
    divClass?: string;
  }

  export let size: $$Props['size'] = 'md';
  export let divClass: $$Props['divClass'] = 'inline-flex rounded-lg shadow-sm';

  setContext('group', { size });
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)} role="group">
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let size: $$Props['size'] = 'md';
@prop export let divClass: $$Props['divClass'] = 'inline-flex rounded-lg shadow-sm';
-->
