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
  [Go to Timeline Activity Log](https://flowbite-svelte.com/docs/components/timeline#Activity_Log)
  ## Props
  @prop olClass: string = 'relative border-l border-gray-200 dark:border-gray-700';
-->
