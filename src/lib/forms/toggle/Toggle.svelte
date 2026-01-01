<script lang="ts">
  import { toggle } from "./theme";
  import clsx from "clsx";
  import type { ToggleProps } from "$lib";
  import Label from "$lib/forms/label/Label.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, size = "default", value, checked = $bindable(), disabled, color = "primary", class: className, classes, offLabel, ...restProps }: ToggleProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("toggle"));

  const { input, label, track } = $derived(toggle({ color, checked, size, disabled, off_state_label: !!offLabel }));
</script>

<Label data-scope="toggle" data-part="label" class={label({ class: clsx(theme?.label, className) })}>
  {#if offLabel}
    {@render offLabel()}
  {/if}
  <input data-part="input" type="checkbox" bind:checked {value} {...restProps} {disabled} class={input({ class: clsx(theme?.input, styling?.input) })} />
  <span data-part="track" class={track({ class: clsx(theme?.track, styling?.track) })}></span>
  {#if children}
    {@render children()}
  {/if}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L983)
## Props
@prop children
@prop size = "default"
@prop value
@prop checked = $bindable()
@prop disabled
@prop color = "primary"
@prop class: className
@prop classes
@prop offLabel
@prop ...restProps
-->
