<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    divClass?: string;
  }

  export let divClass: $$Props['divClass'] = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded-sm dark:bg-gray-800';
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded-sm dark:bg-gray-800';
-->
