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
  ## Features
  [Go to Button Group](https://flowbite-svelte.com/docs/components/button-group)
  ## Props
  @prop size: SizeType = 'md';
  @prop divClass: string = 'inline-flex rounded-lg shadow-sm';  
-->
