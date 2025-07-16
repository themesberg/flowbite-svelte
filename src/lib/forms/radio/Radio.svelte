<script lang="ts" generics="T">
  import { getContext } from "svelte";
  import { radio, type RadioTheme } from ".";
  import clsx from "clsx";
  import { type RadioProps, Label } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, "aria-describedby": ariaDescribedby, inline = false, labelClass, color = "primary", custom = false, group = $bindable<T>(), value = $bindable<T>(), inputClass, ...restProps }: RadioProps<T> = $props();

  const theme = getTheme("radio");

  const { input, label } = $derived(radio({ color, tinted: !!getContext("background"), custom, inline }));
</script>

<Label class={label({ class: clsx((theme as RadioTheme)?.label, labelClass) })}>
  <input type="radio" bind:group {value} aria-describedby={ariaDescribedby} {...restProps} class={input({ class: clsx((theme as RadioTheme)?.input, inputClass) })} />
  {@render children?.()}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
