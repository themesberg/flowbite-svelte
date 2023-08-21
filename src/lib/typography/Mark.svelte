<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let color: string = 'text-white dark:bg-blue-500';
  export let bgColor: string = 'bg-blue-600';
  export let markClass: string = 'px-2 rounded';
</script>

<mark {...$$restProps} class={twMerge(markClass, bgColor, color, $$props.class)}>
  <slot />
</mark>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: string = 'text-white dark:bg-blue-500';
@prop export let bgColor: string = 'bg-blue-600';
@prop export let markClass: string = 'px-2 rounded';
-->
