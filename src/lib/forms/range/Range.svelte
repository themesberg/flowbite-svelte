<script lang="ts">
  import { range, type RangeProps as Props } from "./";

  let { value = $bindable(), appearance = "none", color = "blue", rangeSize = "md", inputClass, ...restProps }: Props = $props();

  const inputCls = $derived(range({ class: inputClass, appearance, color, size: rangeSize }));
</script>

<input type="range" bind:value {...restProps} class={inputCls} />

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: value: any = $bindable();
@props:appearance: any = "none";
@props:color: any = "blue";
@props:rangeSize: any = "md";
@props:inputClass: any;
-->
