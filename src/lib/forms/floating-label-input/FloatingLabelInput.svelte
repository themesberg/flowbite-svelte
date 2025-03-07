<script lang="ts">
  import { idGenerator } from "../../uiHelpers.svelte";
  import { type FloatingLabelInputProps as Props, floatingLabelInput } from ".";
  import clsx from "clsx";

  let { children, id = idGenerator(), value = $bindable(), "aria-describedby": ariaDescribedby, variant = "standard", size = "default", color = "default", class: divClass, inputClass, labelClass, ...restProps }: Props = $props();

  const { base, input, label } = $derived(floatingLabelInput({ variant, size, color }));
</script>

<div class={base({ class: clsx(divClass) })}>
  <input {id} placeholder=" " bind:value {...restProps} aria-describedby={ariaDescribedby} class={input({ class: inputClass })} />

  <label for={id} class={label({ class: labelClass })}>
    {@render children()}
  </label>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:id: any = idGenerator();
@props:value: any = $bindable();
@props:"aria-describedby": any;
@props:variant: any = "standard";
@props:size: any = "default";
@props:color: any = "default";
@props:class: string;
@props:inputClass: any;
@props:labelClass: any;
-->
