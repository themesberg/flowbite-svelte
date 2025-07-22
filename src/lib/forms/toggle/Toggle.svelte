<script lang="ts">
  import { toggle, type ToggleTheme } from "./index";
  import clsx from "clsx";
  import { type ToggleProps, Label } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, size = "default", value, checked = $bindable(), disabled, color = "primary", class: className, inputClass, spanClass, offLabel, ...restProps }: ToggleProps = $props();

  const theme = getTheme("toggle");

  const { input, label, span } = $derived(toggle({ color, checked, size, disabled, off_state_label: !!offLabel }));
</script>

<Label class={label({ class: clsx((theme as ToggleTheme)?.label, className) })}>
  {#if offLabel}
    {@render offLabel()}
  {/if}
  <input type="checkbox" bind:checked {value} {...restProps} {disabled} class={input({ class: clsx((theme as ToggleTheme)?.input, inputClass) })} />
  <span class={span({ class: clsx((theme as ToggleTheme)?.span, spanClass) })}></span>
  {#if children}
    {@render children()}
  {/if}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L955)
## Props
@prop children
@prop size = "default"
@prop value
@prop checked = $bindable()
@prop disabled
@prop color = "primary"
@prop class: className
@prop inputClass
@prop spanClass
@prop offLabel
@prop ...restProps
-->
