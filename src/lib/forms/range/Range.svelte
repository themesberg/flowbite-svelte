<script lang="ts">
  import { range, type RangeProps as Props } from './';

  let {
    value = $bindable(),
    appearance = 'none',
    color = 'blue',
    rangeSize = 'md',
    inputClass,
    ...attributes
  }: Props = $props();
  
  const inputCls = $derived(range({ class: inputClass, appearance, color, size: rangeSize }))
  // let inputCls: string = twMerge(
  //   'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
  //   // range accent-red-500
  //   appearance === 'appearance-none' ? '' : 'range accent-red-500',
  //   sizes[rangeSize] ?? sizes.md,
  //   inputClass
  // );
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
