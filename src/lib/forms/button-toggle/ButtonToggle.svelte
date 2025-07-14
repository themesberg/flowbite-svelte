<script lang="ts">
  import { getContext } from "svelte";
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle, type ButtonToggleTheme } from ".";
  import type { ButtonToggleVariants } from "./theme";
  import { type ButtonToggleProps, type ButtonToggleContext, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { value, selected = false, children, iconSlot, color, class: className, iconClass, txtClass, contentClass, ...restProps }: ButtonToggleProps = $props();

  const theme = getTheme("buttonToggle");

  const { toggleSelected, isSelected } = getContext<ButtonToggleContext>("button-toggle-group");
  const multiSelect = getContext<boolean>("multiSelect");
  const actualColor = getContext<ButtonToggleVariants["color"]>("buttonToggleColor") ? getContext<ButtonToggleVariants["color"]>("buttonToggleColor") : color ? color : "primary";
  const size = getContext<ButtonToggleVariants["size"]>("buttonToggleSize");
  const roundedSize = getContext<ButtonToggleVariants["roundedSize"]>("buttonToggleRounded");
  const ctxIconClass = getContext<string | undefined>("ctxIconClass");
  const actualIconClass = ctxIconClass || cn(iconClass);
  const ctxBtnClass = getContext<string | undefined>("ctxBtnClass");

  function handleClick() {
    toggleSelected(value);
  }

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button type="button" class={cn(buttonToggle.button({ selected, color: actualColor, size, roundedSize }), ctxBtnClass, className, (theme as ButtonToggleTheme)?.button)} data-selected={selected} onclick={handleClick} role={multiSelect ? "checkbox" : "radio"} aria-checked={selected} {...restProps}>
  <div class={cn(buttonToggle.content(), contentClass, (theme as ButtonToggleTheme)?.content)}>
    {#if selected}
      {#if iconSlot}
        {@render iconSlot()}
      {:else}
        <CheckIcon class={cn("absolute left-0 flex-shrink-0 text-green-600", actualIconClass)} />
      {/if}
    {/if}
    <span class={cn(buttonToggle.text({ selected }), txtClass, (theme as ButtonToggleTheme)?.text)}>
      {@render children()}
    </span>
  </div>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L368)
## Props
@prop value
@prop selected = false
@prop children
@prop iconSlot
@prop color
@prop class: className
@prop iconClass
@prop txtClass
@prop contentClass
@prop ...restProps
-->
