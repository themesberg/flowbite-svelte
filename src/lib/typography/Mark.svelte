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
  [Go to Heading](https://flowbite-svelte.com/docs/typography/heading)
  ## Props
  @prop color: string = 'text-white dark:bg-blue-500';
  @prop bgColor: string = 'bg-blue-600';
  @prop markClass: string = 'px-2 rounded';
-->
