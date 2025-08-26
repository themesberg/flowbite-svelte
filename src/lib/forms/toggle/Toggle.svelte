<script lang="ts">
  import { toggle } from "./index";
  import clsx from "clsx";
  import { type ToggleProps, Label } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, size = "default", value, checked = $bindable(), disabled, color = "primary", class: className, classes, inputClass, spanClass, offLabel, ...restProps }: ToggleProps = $props();

  warnThemeDeprecation("Toggle", { inputClass, spanClass }, { inputClass: "input", spanClass: "span" });
  const styling = $derived(classes ?? { input: inputClass, span: spanClass });

  const theme = getTheme("toggle");

  const { input, label, span } = $derived(toggle({ color, checked, size, disabled, off_state_label: !!offLabel }));
</script>

<Label class={label({ class: clsx(theme?.label, className) })}>
  {#if offLabel}
    {@render offLabel()}
  {/if}
  <input type="checkbox" bind:checked {value} {...restProps} {disabled} class={input({ class: clsx(theme?.input, styling.input) })} />
  <span class={span({ class: clsx(theme?.span, styling.span) })}></span>
  {#if children}
    {@render children()}
  {/if}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L971)
## Props
@prop children
@prop size = "default"
@prop value
@prop checked = $bindable()
@prop disabled
@prop color = "primary"
@prop class: className
@prop classes
@prop inputClass
@prop spanClass
@prop offLabel
@prop ...restProps
-->
