<script lang="ts">
  interface Props {
    value: number;
    size: 'sm' | 'md' | 'lg';
    inputclass: string;
  }
  import { twMerge } from 'tailwind-merge';
  // import '$lib/style.css';

  let { value, size = 'md', inputclass, ...attributes }: Props = $props();

  const sizes = {
    sm: 'h-1 range-sm',
    md: 'h-2',
    lg: 'h-3 range-lg'
  };
  let inputClass: string = twMerge('w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700', sizes[size] ?? sizes.md);
</script>

<input type="range" bind:value {...attributes} class={inputClass} />

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: value: number;
@props:size: 'sm' | 'md' | 'lg';
@props:inputclass: string;
-->
