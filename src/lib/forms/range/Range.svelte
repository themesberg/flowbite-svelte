<script lang="ts">
  import { range, type RangeProps as Props } from './';

  let { value = $bindable(), appearance = 'none', color = 'blue', rangeSize = 'md', inputClass, ...restProps }: Props = $props();

  const inputCls = $derived(range({ class: inputClass, appearance, color, size: rangeSize }));
  // let inputCls: string = twMerge(
  //   'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
  //   // range accent-red-500
  //   appearance === 'appearance-none' ? '' : 'range accent-red-500',
  //   sizes[rangeSize] ?? sizes.md,
  //   inputClass
  // );
</script>

<input type="range" bind:value {...restProps} class={inputCls} />

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: value: number | string = $bindable();
@props:appearance: VariantProps<typeof range>['appearance'] = 'none';
@props:color: 'gray' | 'red' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' = 'blue';
@props:rangeSize: 'sm' | 'md' | 'lg' = 'md';
@props:inputClass: string;
-->
