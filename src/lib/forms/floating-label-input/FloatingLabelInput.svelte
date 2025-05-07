<script lang="ts">
  import { idGenerator } from "../../uiHelpers.svelte";
  import { floatingLabelInput } from ".";
  import type { FloatingLabelInputProps } from "$lib/types";
  import clsx from "clsx";

  let { children, id = idGenerator(), value = $bindable(), "aria-describedby": ariaDescribedby, variant = "standard", size = "default", color = "default", class: divClass, inputClass, labelClass, ...restProps }: FloatingLabelInputProps = $props();

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
## Type
[FloatingLabelInputProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L691)
## Props
@prop children
@prop id = idGenerator()
@prop value = $bindable()
@prop "aria-describedby": ariaDescribedby
@prop variant = "standard"
@prop size = "default"
@prop color = "default"
@prop class: divClass
@prop inputClass
@prop labelClass
@prop ...restProps
-->
