<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let ulClass: string = 'space-y-2';
  export let borderClass: string = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
  export let border: boolean = false;

  if (border) {
    ulClass += ' ' + borderClass;
  }
</script>

<ul {...$$restProps} class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>

<!--
  @component
  [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
  ## Props
  @prop ulClass: string = 'space-y-2';
  @prop borderClass: string = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
  @prop border: boolean = false;
-->
