<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'my-1 h-px bg-gray-100 dark:bg-gray-600';
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)} />

<!--
  @component
  ## Features
  [Go to Dropdown](https://flowbite-svelte.com/docs/components/dropdown)
  ## Props
  @prop  divClass: string = 'my-1 h-px bg-gray-100 dark:bg-gray-600';
-->
