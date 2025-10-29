<script lang="ts">
  import { setContext } from "svelte";
  import clsx from "clsx";
  import type { ButtonToggleGroupProps } from "$lib";
  import { buttonToggleGroup } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";

  let {
    multiSelect = false,
    name = "toggle-group",
    value = multiSelect ? [] : null,
    color,
    size = "md",
    roundedSize = "md",
    onSelect = () => {},
    children,
    ctxIconClass,
    ctxBtnClass,
    class: className,
    ...restProps
  }: ButtonToggleGroupProps = $props();

  const theme = getTheme("buttonToggleGroup");

  const base = $derived(buttonToggleGroup({ roundedSize, class: clsx(theme, className) }));
  type SelectedValue = string | null | string[];

  // Normalize incoming prop `value` to internal SelectedValue
  // Clones arrays to prevent external mutations affecting internal state
  function getInitialValue(): SelectedValue {
    if (multiSelect) {
      // Multi-select mode expects array
      if (Array.isArray(value)) {
        return [...value]; // Clone to prevent aliasing
      } else if (value === null || value === undefined) {
        return [];
      } else {
        // Single string passed but multiSelect is true - wrap in array
        return [value as string];
      }
    } else {
      // Single-select mode expects string or null
      if (Array.isArray(value)) {
        // Array passed but multiSelect is false - take first item
        return value[0] ?? null;
      } else {
        return value;
      }
    }
  }

  let selectedValues = $state<SelectedValue>(getInitialValue());

  interface ButtonToggleContext {
    toggleSelected: (toggleValue: string) => void;
    isSelected: (toggleValue: string) => boolean;
  }

  function toggleSelected(toggleValue: string) {
    if (multiSelect) {
      const currentSelected = [...(selectedValues as string[])];
      const index = currentSelected.indexOf(toggleValue);

      if (index === -1) {
        selectedValues = [...currentSelected, toggleValue];
      } else {
        currentSelected.splice(index, 1);
        selectedValues = currentSelected;
      }
    } else {
      selectedValues = toggleValue === selectedValues ? null : toggleValue;
    }
    onSelect(selectedValues); // ✅ ADD THIS LINE - call onSelect here
  }

  function isSelected(toggleValue: string): boolean {
    if (multiSelect) {
      return (selectedValues as string[]).includes(toggleValue);
    } else {
      return selectedValues === toggleValue;
    }
  }

  const buttonToggleContext: ButtonToggleContext = {
    toggleSelected,
    isSelected
  };

  // Set all the contexts separately
  setContext("button-toggle-group", buttonToggleContext);
  setContext("multiSelect", multiSelect);
  setContext("buttonToggleColor", color);
  setContext("buttonToggleSize", size);
  setContext("buttonToggleRounded", roundedSize);
  setContext("ctxIconClass", clsx(ctxIconClass));
  setContext("ctxBtnClass", clsx(ctxBtnClass));
</script>

<div class="inline">
  <div class={base} role={multiSelect ? "group" : "radiogroup"} aria-label={name} {...restProps}>
    {@render children()}
  </div>
</div>
