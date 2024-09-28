<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';
  import DropdownDivider from './DropdownDivider.svelte';
  
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    divClass?: string;
    divider?: boolean;
  }
  export let divClass: $$Props['divClass'] = 'py-2 px-4 text-gray-700 dark:text-white';
  export let divider: $$Props['divider'] = true;
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)}>
  <slot />
</div>
{#if divider}
  <DropdownDivider />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'py-2 px-4 text-gray-700 dark:text-white';
@prop export let divider: $$Props['divider'] = true;
-->
