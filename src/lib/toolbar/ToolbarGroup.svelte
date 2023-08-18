<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  export let divClass: string = 'flex items-center space-x-1 sm:pr-4 sm:pl-4 first:sm:pl-0 last:sm:pr-0';

  const options: Writable<boolean> = getContext('toolbar');
  if (options) $options = true;
</script>

<div class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
  @component
  @component
  [Go to Toolbar](https://flowbite-svelte.com/docs/utilities/toolbar)
  ## Props
  @prop divClass: string = 'flex items-center space-x-1 sm:pr-4 sm:pl-4 first:sm:pl-0 last:sm:pr-0';
-->
