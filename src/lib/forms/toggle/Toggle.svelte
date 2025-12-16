<script lang="ts">
  import { toggle } from "./theme";
  import clsx from "clsx";
  import type { ToggleProps } from "$lib";
  import Label from "$lib/forms/label/Label.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, size = "default", value, checked = $bindable(), disabled, color = "primary", class: className, classes, inputClass, spanClass, offLabel, ...restProps }: ToggleProps = $props();

  warnThemeDeprecation(
    "Toggle",
    untrack(() => ({ inputClass, spanClass })),
    { inputClass: "input", spanClass: "span" }
  );

  const styling = $derived(classes ?? { input: inputClass, span: spanClass });

  const { input, label, span } = $derived(toggle({ color, checked, size, disabled, off_state_label: !!offLabel }));

  const labelCls = $derived(label({ class: clsx(getTheme("toggle")?.label, className) }));
  const inputCls = $derived(input({ class: clsx(getTheme("toggle")?.input, styling.input) }));
  const spanCls = $derived(span({ class: clsx(getTheme("toggle")?.span, styling.span) }));
</script>

<Label class={labelCls}>
  {#if offLabel}
    {@render offLabel()}
  {/if}
  <input type="checkbox" bind:checked {value} {...restProps} {disabled} class={inputCls} />
  <span class={spanCls}></span>
  {#if children}
    {@render children()}
  {/if}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1071)
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
