<script lang="ts">
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle } from "./theme";
  import type { VariantProps } from "tailwind-variants";
  import clsx from "clsx";
  import type { ButtonToggleProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { getButtonToggleContext } from "$lib/context";

  let { value, selected = false, children, iconSlot, color, class: className, classes, ...restProps }: ButtonToggleProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("buttonToggle"));

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

  const { button, content, label, icon } = $derived(buttonToggle({ selected, color: actualColor, size: actualSize }));

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button
  type="button"
  data-scope="button-toggle"
  class={button({ selected, color: actualColor, size: actualSize, roundedSize: actualRoundedSize, class: clsx(theme?.button, ctxBtnClass, className) })}
  data-selected={selected}
  onclick={handleClick}
  role={multiSelect ? "checkbox" : "radio"}
  aria-checked={selected}
  {...restProps}
>
  <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
    {#if selected}
      {#if iconSlot}
        {@render iconSlot()}
      {:else}
        <CheckIcon data-part="icon" class={icon({ class: clsx(theme?.icon ?? actualIconClass, styling?.icon) })} />
      {/if}
    {/if}
    <span data-part="label" class={label({ selected, class: clsx(theme?.label, styling?.label) })}>
      {@render children()}
    </span>
  </div>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L448)
## Props
@prop value
@prop selected = false
@prop children
@prop iconSlot
@prop color
@prop class: className
@prop classes
@prop ...restProps
-->
