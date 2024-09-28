<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLUListElement> {
    ulClass?: string;
  }

  export let ulClass: $$Props['ulClass'] = 'text-gray-600 dark:text-gray-400';
</script>

<ul class={twMerge(ulClass, $$props.class)} {...$$restProps}>
  <slot />
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let ulClass: $$Props['ulClass'] = 'text-gray-600 dark:text-gray-400';
-->
