<script lang="ts">
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { SizeType } from '$lib/types';

  export let size: SizeType = 'md';
  export let divClass: string = 'inline-flex rounded-lg shadow-sm';

  setContext('group', { size });
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)} role="group">
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let size: SizeType = 'md';
@prop export let divClass: string = 'inline-flex rounded-lg shadow-sm';
-->
