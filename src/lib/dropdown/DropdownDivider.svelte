<script lang="ts">
  interface Props {
    divclass?: string | undefined;
  }

  import { twMerge } from 'tailwind-merge';
  let { divclass, ...attributes } = $props<Props>();
</script>

<div {...attributes} class={twMerge('my-1 h-px bg-gray-100 dark:bg-gray-600', divclass)} />

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop divclass,
@prop ...attributes
-->
