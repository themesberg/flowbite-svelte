<script lang="ts">
  import clsx from "clsx";
  import { Label } from "../label";
  import { type ToggleProps as Props, toggle } from "./index";

  let { children, size = "default", value, checked = $bindable(), disabled, color = "primary", class: className, inputClass, spanClass, offLabel, ...restProps }: Props = $props();

  const { input, label, span } = $derived(toggle({ color, checked, size, disabled, off_state_label: !!offLabel }));
</script>

<Label class={label({ class: clsx(className) })}>
  {#if offLabel}
    {@render offLabel()}
  {/if}
  <input type="checkbox" bind:checked {value} {...restProps} {disabled} class={input({ class: inputClass })} />
  <span class={span({ class: spanClass })}></span>
  {#if children}
    {@render children()}
  {/if}
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
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
