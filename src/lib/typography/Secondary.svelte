<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLElement> {
    color?: string;
    secondaryClass?: string;
  }

  export let color: $$Props['color'] = 'text-gray-500 dark:text-gray-400';
  export let secondaryClass: $$Props['secondaryClass'] = 'font-semibold';
</script>

<small {...$$restProps} class={twMerge(color, secondaryClass, $$props.class)}>
  <slot />
</small>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: $$Props['color'] = 'text-gray-500 dark:text-gray-400';
@prop export let secondaryClass: $$Props['secondaryClass'] = 'font-semibold';
-->
