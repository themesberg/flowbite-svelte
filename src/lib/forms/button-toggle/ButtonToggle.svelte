<script lang="ts">
  import { getContext } from "svelte";
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle } from ".";
  import type { ButtonToggleVariants } from "./theme";
  import clsx from "clsx";
  import { type ButtonToggleProps, type ButtonToggleContext } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { value, selected = false, children, iconSlot, color, class: className, iconClass, txtClass, contentClass, classes, ...restProps }: ButtonToggleProps = $props();

  warnThemeDeprecation("ButtonToggle", { iconClass, txtClass, contentClass }, { iconClass: "icon", txtClass: "text", contentClass: "content" });
  // button(className), content, text, icon
  const styling = $derived(classes ?? { icon: iconClass, text: txtClass, content: contentClass });

  const theme = getTheme("buttonToggle");

  const { toggleSelected, isSelected } = getContext<ButtonToggleContext>("button-toggle-group");
  const multiSelect = getContext<boolean>("multiSelect");
  const actualColor = getContext<ButtonToggleVariants["color"]>("buttonToggleColor") ? getContext<ButtonToggleVariants["color"]>("buttonToggleColor") : color ? color : "primary";
  const size = getContext<ButtonToggleVariants["size"]>("buttonToggleSize");
  const roundedSize = getContext<ButtonToggleVariants["roundedSize"]>("buttonToggleRounded");
  const ctxIconClass = getContext<string | undefined>("ctxIconClass");
  const actualIconClass = ctxIconClass;
  const ctxBtnClass = getContext<string | undefined>("ctxBtnClass");

  function handleClick() {
    toggleSelected(value);
  }

  const { button, content, text, icon } = $derived(buttonToggle({ selected, color, size }));

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button type="button" class={button({ selected, color: actualColor, size, roundedSize, class: clsx(theme?.button, ctxBtnClass, className) })} data-selected={selected} onclick={handleClick} role={multiSelect ? "checkbox" : "radio"} aria-checked={selected} {...restProps}>
  <div class={content({ class: clsx(theme?.content, styling.content) })}>
    {#if selected}
      {#if iconSlot}
        {@render iconSlot()}
      {:else}
        <CheckIcon class={icon({ class: clsx(theme?.icon ?? actualIconClass, styling.icon) })} />
      {/if}
    {/if}
    <span class={text({ selected, class: clsx(theme?.text, styling.text) })}>
      {@render children()}
    </span>
  </div>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L335)
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
@prop classes
@prop ...restProps
-->
