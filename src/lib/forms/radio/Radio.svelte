<script lang="ts" generics="T">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import Label from "../label/Label.svelte";
  import { radio } from ".";
  import type { RadioProps } from "$lib/types";

  let { children, "aria-describedby": ariaDescribedby, inline = false, labelClass, color = "primary", custom = false, group = $bindable<T>(), value = $bindable<T>(), inputClass, ...restProps }: RadioProps<T> = $props();

  const { input, label } = $derived(radio({ color, tinted: !!getContext("background"), custom, inline }));
</script>

<Label class={twMerge(label(), clsx(labelClass))}>
  <input type="radio" bind:group {value} aria-describedby={ariaDescribedby} {...restProps} class={twMerge(input(), clsx(inputClass))} />
  {@render children?.()}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
