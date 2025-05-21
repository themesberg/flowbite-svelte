<script lang="ts">
  import { getContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle, buttonToggleContent, buttonToggleText } from "./theme";
  import type { ButtonToggleVariants } from "./theme";
  import { type ButtonToggleProps, type ButtonToggleContext } from "$lib";

  let { value, selected = false, children, iconSlot, color, class: className, iconClass, txtClass, ...restProps }: ButtonToggleProps = $props();

  const { toggleSelected, isSelected } = getContext<ButtonToggleContext>("button-toggle-group");
  const multiSelect = getContext<boolean>("multiSelect");
  const actualColor = getContext<ButtonToggleVariants["color"]>("buttonToggleColor") ? getContext<ButtonToggleVariants["color"]>("buttonToggleColor") : color ? color : "primary";
  const size = getContext<ButtonToggleVariants["size"]>("buttonToggleSize");
  const roundedSize = getContext<ButtonToggleVariants["roundedSize"]>("buttonToggleRounded");
  const ctxIconClass = getContext<string | undefined>("ctxIconClass");
  const actualIconClass = ctxIconClass || iconClass;
  const ctxBtnClass = getContext<string | undefined>("ctxBtnClass");

  function handleClick() {
    toggleSelected(value);
  }

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button type="button" class={twMerge(buttonToggle({ selected, color: actualColor, size, roundedSize }), ctxBtnClass, className)} data-selected={selected} onclick={handleClick} role={multiSelect ? "checkbox" : "radio"} aria-checked={selected} {...restProps}>
  <div class={buttonToggleContent()}>
    {#if selected}
      {#if iconSlot}
        {@render iconSlot()}
      {:else}
        <CheckIcon class={twMerge("absolute left-0 flex-shrink-0 text-green-600", actualIconClass)} />
      {/if}
    {/if}
    <span class={buttonToggleText({ selected, class: txtClass })}>
      {@render children()}
    </span>
  </div>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L374)
## Props
@prop value
@prop selected = false
@prop children
@prop iconSlot
@prop color
@prop class: className
@prop iconClass
@prop txtClass
@prop ...restProps
-->
