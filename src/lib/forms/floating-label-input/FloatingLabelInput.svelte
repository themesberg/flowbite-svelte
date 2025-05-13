<script lang="ts">
  import { idGenerator } from "../../uiHelpers.svelte";
  import { floatingLabelInput } from ".";
  import { type FloatingLabelInputProps, CloseButton } from "$lib";
  import clsx from "clsx";

  let { children, id = idGenerator(), value = $bindable(), elementRef = $bindable(), "aria-describedby": ariaDescribedby, variant = "standard", size = "default", color = "default", class: divClass, inputClass, labelClass, clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, ...restProps }: FloatingLabelInputProps = $props();

  const { base, input, label, clearbtn } = $derived(floatingLabelInput({ variant, size, color }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={base({ class: clsx(divClass) })}>
  <input {id} placeholder=" " bind:value bind:this={elementRef} {...restProps} aria-describedby={ariaDescribedby} class={input({ class: inputClass })} />
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={clearbtn({ class: clearableClass })} color={clearableColor} aria-label="Clear search value" svgClass={clearableSvgClass} />
  {/if}
  <label for={id} class={label({ class: labelClass })}>
    {@render children()}
  </label>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FloatingLabelInputProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L706)
## Props
@prop children
@prop id = idGenerator()
@prop value = $bindable()
@prop elementRef = $bindable()
@prop "aria-describedby": ariaDescribedby
@prop variant = "standard"
@prop size = "default"
@prop color = "default"
@prop class: divClass
@prop inputClass
@prop labelClass
@prop clearable
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop ...restProps
-->
