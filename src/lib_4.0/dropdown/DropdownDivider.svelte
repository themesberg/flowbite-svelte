<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    divClass?: string;
  }
  export let divClass: $$Props['divClass'] = 'my-1 h-px bg-gray-100 dark:bg-gray-600';
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'my-1 h-px bg-gray-100 dark:bg-gray-600';
-->
