<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let solid: boolean = false;
  export let navClass: string = 'flex';
  export let solidClass: string = 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
  export let olClass: string = 'inline-flex items-center space-x-1 md:space-x-3';
  let classNav: string = solid ? solidClass : navClass;
</script>

<nav aria-label="Breadcrumb" {...$$restProps} class={twMerge(classNav, $$props.class)}>
  <ol class={twMerge(olClass, $$props.classOl)}>
    <slot />
  </ol>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let solid: boolean = false;
@prop export let navClass: string = 'flex';
@prop export let solidClass: string = 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
@prop export let olClass: string = 'inline-flex items-center space-x-1 md:space-x-3';
-->
