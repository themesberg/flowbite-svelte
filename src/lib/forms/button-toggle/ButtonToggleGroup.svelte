<script lang="ts">
  import { setContext } from "svelte";
  import clsx from "clsx";
  import type { ButtonToggleGroupProps } from "$lib";
  import { buttonToggleGroup } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";

  let { multiSelect = false, name = "toggle-group", value = multiSelect ? [] : null, color, size = "md", roundedSize = "md", onSelect = (val: any) => {}, children, ctxIconClass, ctxBtnClass, class: className, ...restProps }: ButtonToggleGroupProps = $props();

  const theme = getTheme("buttonToggleGroup");

  const base = $derived(buttonToggleGroup({ roundedSize, class: clsx(theme, className) }));
  type SelectedValue = string | null | string[];

  let selectedValues = $state<SelectedValue>(multiSelect ? [] : null);

  interface ButtonToggleContext {
    toggleSelected: (toggleValue: string) => void;
    isSelected: (toggleValue: string) => boolean;
  }

  $effect(() => {
    value = selectedValues;
    onSelect(selectedValues);
  });

  function toggleSelected(toggleValue: string) {
    if (multiSelect) {
      // Handle multi-select mode
      const currentSelected = [...(selectedValues as string[])];
      const index = currentSelected.indexOf(toggleValue);

      if (index === -1) {
        selectedValues = [...currentSelected, toggleValue];
      } else {
        currentSelected.splice(index, 1);
        selectedValues = currentSelected;
      }
    } else {
      // Handle single-select mode
      selectedValues = toggleValue === selectedValues ? null : toggleValue;
    }
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
