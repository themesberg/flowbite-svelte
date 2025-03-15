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
## Props
@props: children: any;
@props:size: any = "default";
@props:value: any;
@props:checked: any = $bindable();
@props:disabled: any;
@props:color: any = "primary";
@props:class: string;
@props:inputClass: any;
@props:spanClass: any;
@props:offLabel: any;
-->
