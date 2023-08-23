<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let ulClass: string = 'text-gray-600 dark:text-gray-400';
</script>

<ul class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let ulClass: string = 'text-gray-600 dark:text-gray-400';
-->
