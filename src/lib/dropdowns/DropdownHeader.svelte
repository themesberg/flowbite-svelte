<script lang="ts">
  import classNames from 'classnames';
  import DropdownDivider from './DropdownDivider.svelte';
  export let divClass: string = 'py-2 px-4 text-gray-700 dark:text-white';
  export let divider: boolean = true;
</script>

<div {...$$restProps} class={classNames(divClass, $$props.class)}>
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
