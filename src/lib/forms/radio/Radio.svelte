<script lang="ts" generics="T">
  import { getContext } from "svelte";
  import Label from "../label/Label.svelte";
  import { radio } from ".";
  import type { RadioProps } from "$lib/types";
  import clsx from "clsx";

  let { children, "aria-describedby": ariaDescribedby, inline = false, class: labelClass, color = "primary", custom = false, group = $bindable<T>(), value = $bindable<T>(), inputClass, ...restProps }: RadioProps<T> = $props();

  const { input, label } = $derived(radio({ color, tinted: !!getContext("background"), custom, inline }));
</script>

<Label class={label({ class: clsx(labelClass) })}>
  <input type="radio" bind:group {value} aria-describedby={ariaDescribedby} {...restProps} class={input({ class: inputClass })} />
  {@render children?.()}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: 
-->
