<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLUListElement> {
    ulClass?: string;
    borderClass?: string;
    border?: boolean;
  }

  export let ulClass: $$Props['ulClass'] = 'space-y-2';
  export let borderClass: $$Props['borderClass'] = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
  export let border: $$Props['border'] = false;

  if (border) {
    ulClass += ' ' + borderClass;
  }
</script>

<ul {...$$restProps} class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let ulClass: $$Props['ulClass'] = 'space-y-2';
@prop export let borderClass: $$Props['borderClass'] = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
@prop export let border: $$Props['border'] = false;
-->
