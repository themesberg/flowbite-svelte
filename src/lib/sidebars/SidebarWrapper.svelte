<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let divClass: string = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800';
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800';
-->
