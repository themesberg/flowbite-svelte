<script lang="ts" generics="T">
  import { select as selectCls } from "./theme";
  import clsx from "clsx";
  import type { SelectProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";
  import { getButtonGroupContext } from "$lib/context";

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

  // clearableSvgClass, clearableClass, selectClass
  warnThemeDeprecation("Select", { selectClass, clearableSvgClass, clearableClass }, { selectClass: "select", clearableSvgClass: "svg", clearableClass: "close" });
  const styling = $derived(classes ?? { select: selectClass, svg: clearableSvgClass, close: clearableClass });

  const theme = getTheme("select");

  const groupCtx = getButtonGroupContext();
  const group = groupCtx;
  const { base, select, close } = $derived(selectCls({ underline, size, disabled, grouped: !!group }));

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

<div class={base({ class: clsx(theme?.base, className) })}>
  <select {disabled} {...restProps} bind:value bind:this={elementRef} class={select({ class: clsx(theme?.select, styling.select) })}>
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
    <CloseButton class={close({ class: clsx(theme?.close, styling.close) })} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling.svg)} {disabled} />
  {/if}
</div>
