<script lang="ts" generics="T">
  import { getContext } from "svelte";
  import { radio, type RadioTheme } from ".";
  import clsx from "clsx";
  import { type RadioProps, Label } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  // remove inputClass in next major version
  let { children, "aria-describedby": ariaDescribedby, inline = false, labelClass, color = "primary", custom = false, group = $bindable<T>(), value = $bindable<T>(), class: className, inputClass, classes, ...restProps }: RadioProps<T> = $props();

  warnThemeDeprecation("Fileupload", { inputClass, labelClass }, { inputClass: "class", labelClass: "label" });
  const styling = $derived(classes ?? { label: labelClass });

  const theme = getTheme("radio");

  const { input, label } = $derived(radio({ color, tinted: !!getContext("background"), custom, inline }));
</script>

<Label class={label({ class: clsx((theme as RadioTheme)?.label, styling.label) })}>
  <input type="radio" bind:group {value} aria-describedby={ariaDescribedby} {...restProps} class={input({ class: clsx((theme as RadioTheme)?.input, className ?? inputClass) })} />
  {@render children?.()}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
