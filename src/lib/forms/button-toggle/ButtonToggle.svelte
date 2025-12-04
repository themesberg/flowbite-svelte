<script lang="ts">
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle } from "./theme";
  import type { VariantProps } from "tailwind-variants";
  import clsx from "clsx";
  import type { ButtonToggleProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { getButtonToggleContext } from "$lib/context";

  let { value, selected = false, children, iconSlot, color, class: className, iconClass, txtClass, contentClass, classes, ...restProps }: ButtonToggleProps = $props();

  // svelte-ignore state_referenced_locally
  warnThemeDeprecation("ButtonToggle", { iconClass, txtClass, contentClass }, { iconClass: "icon", txtClass: "text", contentClass: "content" });

  // button(className), content, text, icon
  const styling = $derived(classes ?? { icon: iconClass, text: txtClass, content: contentClass });

  const theme = getTheme("buttonToggle");

  // Get context - it will be undefined if used outside ButtonToggleGroup
  const ctx = getButtonToggleContext();

  // Extract context values with fallbacks
  const { toggleSelected, isSelected, multiSelect, size, roundedSize, ctxIconClass, ctxBtnClass } = {
    toggleSelected: ctx?.toggleSelected ?? (() => {}),
    isSelected: ctx?.isSelected ?? (() => false),
    multiSelect: ctx?.multiSelect ?? false,
    size: ctx?.size,
    roundedSize: ctx?.roundedSize,
    ctxIconClass: ctx?.ctxIconClass,
    ctxBtnClass: ctx?.ctxBtnClass
  };

  // Use context color if available, otherwise use prop color, otherwise default to "primary"
  const actualColor = $derived((ctx?.color ?? color ?? "primary") as VariantProps<typeof buttonToggle>["color"]);
  const actualIconClass = ctxIconClass;

  // Filter size to only valid buttonToggle sizes (no 'xs')
  const actualSize = (size === "xs" ? "sm" : size) as VariantProps<typeof buttonToggle>["size"];
  // roundedSize is already validated by type system
  const actualRoundedSize = roundedSize as VariantProps<typeof buttonToggle>["roundedSize"];

  function handleClick() {
    toggleSelected(value);
  }

  const { button, content, text, icon } = $derived(buttonToggle({ selected, color: actualColor, size: actualSize }));

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button
  type="button"
  class={button({ selected, color: actualColor, size: actualSize, roundedSize: actualRoundedSize, class: clsx(theme?.button, ctxBtnClass, className) })}
  data-selected={selected}
  onclick={handleClick}
  role={multiSelect ? "checkbox" : "radio"}
  aria-checked={selected}
  {...restProps}
>
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
@prop contentClass
@prop classes
@prop ...restProps
-->
