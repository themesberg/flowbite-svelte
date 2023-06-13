<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let ulClass: string = 'text-gray-600 dark:text-gray-400';
</script>

<ul class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>

<!--
  @component
  ## Feature
  [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
  ## Props
  @prop ulClass: string = 'text-gray-600 dark:text-gray-400';
-->
