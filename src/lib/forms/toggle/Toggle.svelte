<script lang="ts">
  import { toggle } from "./index";
  import { type ToggleProps, Label, cn } from "$lib";

  let { children, size = "default", value, checked = $bindable(), disabled, color = "primary", class: className, inputClass, spanClass, offLabel, ...restProps }: ToggleProps = $props();

  const { input, label, span } = $derived(toggle({ color, checked, size, disabled, off_state_label: !!offLabel }));
</script>

<Label class={cn(label(), className)}>
  {#if offLabel}
    {@render offLabel()}
  {/if}
  <input type="checkbox" bind:checked {value} {...restProps} {disabled} class={cn(input(), inputClass)} />
  <span class={cn(span(), spanClass)}></span>
  {#if children}
    {@render children()}
  {/if}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L933)
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
