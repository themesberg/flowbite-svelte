<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  
  interface $$Props extends Omit<HTMLInputAttributes, 'size'> {
    value?: number;
    size?: 'sm' | 'md' | 'lg';
  }

  export let value: $$Props['value'] = 0;
  export let size: NonNullable<$$Props['size']> = 'md';

  const sizes = {
    sm: 'h-1 range-sm',
    md: 'h-2',
    lg: 'h-3 range-lg'
  };
  let inputClass: string;
  $: inputClass = twMerge('w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700', sizes[size] ?? sizes.md, $$props.class);
</script>

<input type="range" bind:value {...$$restProps} class={inputClass} on:change on:click on:keydown on:keypress on:keyup />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let value: $$Props['value'] = 0;
@prop export let size: NonNullable<$$Props['size']> = 'md';
-->
