<script lang="ts">
  import { getContext } from "svelte";
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle, type ButtonToggleTheme } from ".";
  import type { ButtonToggleVariants } from "./theme";
  import clsx from "clsx";
  import { type ButtonToggleProps, type ButtonToggleContext } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { value, selected = false, children, iconSlot, color, class: className, iconClass, txtClass, contentClass, ...restProps }: ButtonToggleProps = $props();

  const theme = getTheme("buttonToggle");

  const { toggleSelected, isSelected } = getContext<ButtonToggleContext>("button-toggle-group");
  const multiSelect = getContext<boolean>("multiSelect");
  const actualColor = getContext<ButtonToggleVariants["color"]>("buttonToggleColor") ? getContext<ButtonToggleVariants["color"]>("buttonToggleColor") : color ? color : "primary";
  const size = getContext<ButtonToggleVariants["size"]>("buttonToggleSize");
  const roundedSize = getContext<ButtonToggleVariants["roundedSize"]>("buttonToggleRounded");
  const ctxIconClass = getContext<string | undefined>("ctxIconClass");
  const actualIconClass = ctxIconClass || clsx(iconClass);
  const ctxBtnClass = getContext<string | undefined>("ctxBtnClass");

  function handleClick() {
    toggleSelected(value);
  }

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button type="button" class={buttonToggle.button({ selected, color: actualColor, size, roundedSize, class: clsx((theme as ButtonToggleTheme)?.button, ctxBtnClass, className) })} data-selected={selected} onclick={handleClick} role={multiSelect ? "checkbox" : "radio"} aria-checked={selected} {...restProps}>
  <div class={buttonToggle.content({ class: clsx((theme as ButtonToggleTheme)?.content, contentClass) })}>
    {#if selected}
      {#if iconSlot}
        {@render iconSlot()}
      {:else}
        <CheckIcon class={clsx("absolute left-0 flex-shrink-0 text-green-600", actualIconClass)} />
      {/if}
    {/if}
    <span class={buttonToggle.text({ selected, class: clsx((theme as ButtonToggleTheme)?.text, txtClass) })}>
      {@render children()}
    </span>
  </div>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L328)
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
