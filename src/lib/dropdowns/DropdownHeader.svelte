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
  ## Features
  [Go to Dropdown](https://flowbite-svelte.com/docs/components/dropdown)
  ## Props
  @prop divClass: string = 'py-2 px-4 text-gray-700 dark:text-white';
  @prop divider: boolean = true;
-->
