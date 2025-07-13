<script lang="ts" generics="T">
  import { getContext } from "svelte";
  import { radio, type RadioTheme } from ".";
  import { type RadioProps, Label, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, "aria-describedby": ariaDescribedby, inline = false, labelClass, color = "primary", custom = false, group = $bindable<T>(), value = $bindable<T>(), inputClass, ...restProps }: RadioProps<T> = $props();

  const theme = getTheme("radio");

  const { input, label } = $derived(radio({ color, tinted: !!getContext("background"), custom, inline }));
</script>

<Label class={cn(label(), labelClass, (theme as RadioTheme)?.label)}>
  <input type="radio" bind:group {value} aria-describedby={ariaDescribedby} {...restProps} class={cn(input(), inputClass,  (theme as RadioTheme)?.input)} />
  {@render children?.()}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
