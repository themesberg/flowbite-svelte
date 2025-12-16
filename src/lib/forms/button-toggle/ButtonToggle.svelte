<script lang="ts">
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle } from "./theme";
  import type { VariantProps } from "tailwind-variants";
  import clsx from "clsx";
  import type { ButtonToggleProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { getButtonToggleContext } from "$lib/context";
  import { untrack } from "svelte";

  let { value, selected = false, children, iconSlot, color, class: className, iconClass, txtClass, contentClass, classes, ...restProps }: ButtonToggleProps = $props();

  warnThemeDeprecation(
    "ButtonToggle",
    untrack(() => ({ iconClass, txtClass, contentClass })),
    { iconClass: "icon", txtClass: "text", contentClass: "content" }
  );

  // button(className), content, text, icon
  const styling = $derived(classes ?? { icon: iconClass, text: txtClass, content: contentClass });

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

  const buttonCls = $derived(button({ selected, color: actualColor, size: actualSize, roundedSize: actualRoundedSize, class: clsx(getTheme("buttonToggle")?.button, ctxBtnClass, className) }));
  const contentCls = $derived(content({ class: clsx(getTheme("buttonToggle")?.content, styling.content) }));
  const iconCls = $derived(icon({ class: clsx(getTheme("buttonToggle")?.icon ?? actualIconClass, styling.icon) }));
  const textCls = $derived(text({ selected, class: clsx(getTheme("buttonToggle")?.text, styling.text) }));

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button type="button" class={buttonCls} data-selected={selected} onclick={handleClick} role={multiSelect ? "checkbox" : "radio"} aria-checked={selected} {...restProps}>
  <div class={contentCls}>
    {#if selected}
      {#if iconSlot}
        {@render iconSlot()}
      {:else}
        <CheckIcon class={iconCls} />
      {/if}
    {/if}
    <span class={textCls}>
      {@render children()}
    </span>
  </div>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L441)
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
