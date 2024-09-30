<script lang="ts">
  import type { HTMLOlAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLOlAttributes {
    olClass?: string;
  }

  export let olClass: $$Props['olClass'] = 'relative border-s border-gray-200 dark:border-gray-700';
  
  let olCls: string = twMerge(olClass, $$props.class);
</script>

<ol class={olCls}>
  <slot />
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let olClass: $$Props['olClass'] = 'relative border-s border-gray-200 dark:border-gray-700';
-->
