<script lang="ts">
  import clsx from "clsx";
  import { range, type RangeProps as Props } from "./";

  let { value = $bindable(), appearance = "none", color = "blue", size = "md", class: inputClass, ...restProps }: Props = $props();

  const inputCls = $derived(range({ class: clsx(inputClass), appearance, color, size }));
</script>

<input type="range" bind:value {...restProps} class={inputCls} />

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: value: any = $bindable();
@props:appearance: any = "none";
@props:color: any = "blue";
@props:size: any = "md";
@props:class: string;
-->
