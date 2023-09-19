<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import DropdownDivider from './DropdownDivider.svelte';
  export let divClass: string = 'py-2 px-4 text-gray-700 dark:text-white';
  export let divider: boolean = true;
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
@prop export let divClass: string = 'py-2 px-4 text-gray-700 dark:text-white';
@prop export let divider: boolean = true;
-->
