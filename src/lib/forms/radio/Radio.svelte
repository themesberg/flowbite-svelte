<script lang="ts" generics="T">
  import { getContext } from "svelte";
  import { radio } from "./theme";
  import clsx from "clsx";
  import type { RadioProps } from "$lib";
  import Label from "$lib/forms/label/Label.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let {
    children,
    "aria-describedby": ariaDescribedby,
    inline = false,
    color = "brand",
    custom = false,
    group = $bindable<T>(),
    value = $bindable<T>(),
    classes,
    ...restProps
  }: RadioProps<T> = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("radio"));

  const { input, label } = $derived(radio({ color, tinted: !!getContext("background"), custom, inline }));
</script>

<Label class={label({ class: clsx(theme?.label, styling?.label) })}>
  <input type="radio" bind:group {value} aria-describedby={ariaDescribedby} {...restProps} class={input({ class: clsx(theme?.input, styling?.input) })} />
  {@render children?.()}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
