<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    value?: any;
    rangeSize?: 'sm' | 'md' | 'lg';
    inputClass?: string | undefined | null;
  }
  import { twMerge } from 'tailwind-merge';
  // import '$lib/style.css';

  let {
    value = $bindable(),
    rangeSize = 'md',
    inputClass,
    ...attributes
  }: Props = $props();

  const sizes = {
    sm: 'h-1 range-sm',
    md: 'h-2',
    lg: 'h-3 range-lg'
  };
  let inputCls: string = twMerge(
    'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
    sizes[rangeSize] ?? sizes.md,
    inputClass
  );
</script>

<input type="range" bind:value {...attributes} class={inputCls} />

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop value = $bindable()
@prop rangeSize = 'md'
@prop inputClass
@prop ...attributes
-->
