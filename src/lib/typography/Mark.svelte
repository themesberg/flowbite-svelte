<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLElement> {
    color?: string;
    bgColor?: string;
    markClass?: string;
  }

  export let color: $$Props['color'] = 'text-white dark:bg-blue-500';
  export let bgColor: $$Props['bgColor'] = 'bg-blue-600';
  export let markClass: $$Props['markClass'] = 'px-2 rounded';
</script>

<mark {...$$restProps} class={twMerge(markClass, bgColor, color, $$props.class)}>
  <slot />
</mark>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: $$Props['color'] = 'text-white dark:bg-blue-500';
@prop export let bgColor: $$Props['bgColor'] = 'bg-blue-600';
@prop export let markClass: $$Props['markClass'] = 'px-2 rounded';
-->
