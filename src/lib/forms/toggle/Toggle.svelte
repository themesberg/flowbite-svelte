<script lang="ts">
  import { Label } from "../label";
  import { type ToggleProps as Props, toggle } from "./index";

  let { children, toggleSize = "default", value, checked = $bindable(), disabled, color = "primary", aria_describedby, labelClass, inputClass, spanClass, leftLabel, ...restProps }: Props = $props();

  const { input, label, span } = $derived(toggle({ color, checked, size: toggleSize, disabled }));
</script>

<Label class={label({ class: labelClass })}>
  {#if leftLabel}
    {@render leftLabel()}
  {/if}
  <input type="checkbox" bind:checked {value} aria-describedby={aria_describedby} {...restProps} {disabled} class={input({ class: inputClass })} />
  <span class={span({ class: spanClass })}></span>
  {#if children}
    {@render children()}
  {/if}
</Label>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:toggleSize: "default" | "small" | "large" | undefined = "default";
@props:value: string | number;
@props:checked: boolean | undefined = $bindable();
@props:disabled: boolean;
@props:color: "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined = "primary";
@props:aria_describedby: string;
@props:labelClass: string;
@props:inputClass: string;
@props:spanClass: string;
@props:leftLabel: Snippet;
-->
