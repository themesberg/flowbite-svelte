<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let olClass: string = 'relative border-l border-gray-200 dark:border-gray-700';
  let olCls: string = twMerge(olClass, $$props.class);
</script>

<ol class={olCls}>
  <slot />
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let olClass: string = 'relative border-l border-gray-200 dark:border-gray-700';
-->
