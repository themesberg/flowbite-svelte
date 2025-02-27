<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLParagraphElement> {
    helperClass?: string;
    color?: 'gray' | 'green' | 'red' | 'disabled';
  }

  export let helperClass: $$Props['helperClass'] = 'text-xs font-normal text-gray-500 dark:text-gray-300';
  export let color: NonNullable<$$Props['color']> = 'gray';

  const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500 grayscale contrast-50'
  };
</script>

<p {...$$restProps} class={twMerge(helperClass, colorClasses[color], $$props.class)}>
  <slot />
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let helperClass: $$Props['helperClass'] = 'text-xs font-normal text-gray-500 dark:text-gray-300';
@prop export let color: NonNullable<$$Props['color']> = 'gray';
-->
