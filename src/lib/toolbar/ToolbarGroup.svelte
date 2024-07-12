<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Snippet } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string | undefined | null;
    divClass?: string | undefined | null;
  }

  let { children, class: className, divClass = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 first:sm:ps-0 last:sm:pe-0' }: Props = $props();

  const options: Writable<boolean> = getContext('toolbar');
  if (options) $options = true;
</script>

<div class={twMerge(divClass, className)}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop divClass = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 first:sm:ps-0 last:sm:pe-0'
-->
