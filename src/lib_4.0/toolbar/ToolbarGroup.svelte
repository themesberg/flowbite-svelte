<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  export let divClass: string = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 sm:first:ps-0 sm:last:pe-0';

  const options: Writable<boolean> = getContext('toolbar');
  if (options) $options = true;
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 sm:first:ps-0 sm:last:pe-0';
-->
