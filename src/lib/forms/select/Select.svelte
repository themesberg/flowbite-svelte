<script lang="ts" generics="T">
  import { select as selectCls } from "./theme";
  import clsx from "clsx";
  import type { SelectProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";
  import { getButtonGroupContext } from "$lib/context";
  import { untrack } from "svelte";

  let {
    children,
    items,
    value = $bindable(),
    elementRef = $bindable(),
    underline,
    size = "md",
    disabled,
    placeholder = "Choose option ...",
    clearable,
    clearableColor = "none",
    clearableOnClick,
    onClear,
    clearableSvgClass,
    clearableClass,
    selectClass,
    class: className,
    classes,
    ...restProps
  }: SelectProps<T> = $props();

  warnThemeDeprecation(
    "Select",
    untrack(() => ({ selectClass, clearableSvgClass, clearableClass })),
    { selectClass: "select", clearableSvgClass: "svg", clearableClass: "close" }
  );

  const styling = $derived(classes ?? { select: selectClass, svg: clearableSvgClass, close: clearableClass });

  const group = getButtonGroupContext();
  const { base, select, close } = $derived(selectCls({ underline, size, disabled, grouped: !!group }));

  const baseCls = $derived(base({ class: clsx(getTheme("select")?.base, className) }));
  const selectClsFull = $derived(select({ class: clsx(getTheme("select")?.select, styling.select) }));
  const closeCls = $derived(close({ class: clsx(getTheme("select")?.close, styling.close) }));

  const clearAll = () => {
    if (elementRef) {
      // Set to empty string to show placeholder and trigger change event
      elementRef.value = "";
      // Dispatch a synthetic change event to notify listeners
      elementRef.dispatchEvent(new Event("change", { bubbles: true }));
    }
    // Set reactive value to empty string to match placeholder option
    value = "" as T;

    // Support both old and new callback names for backward compatibility
    if (onClear) onClear();
    // remove this in next major version
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);
</script>

<div class={baseCls}>
  <select {disabled} {...restProps} bind:value bind:this={elementRef} class={selectClsFull}>
    {#if placeholder}
      <option disabled selected={value === "" || value === undefined} value="">{placeholder}</option>
    {/if}

    {#if items}
      {#each items as item (item.value)}
        <option value={item.value} disabled={item.disabled}>{item.name}</option>
      {/each}
    {/if}

    {#if children}
      {@render children()}
    {/if}
  </select>
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton class={closeCls} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling.svg)} {disabled} />
  {/if}
</div>
