<script lang="ts">
  import { setContext } from "svelte";
  import { type ButtonToggleGroupProps, buttonToggleGroup, cn } from "$lib";

  let { multiSelect = false, name = "toggle-group", value = null, color, size = "md", roundedSize = "md", onSelect = (val: any) => {}, children, ctxIconClass, ctxBtnClass, class: className, ...restProps }: ButtonToggleGroupProps = $props();

  const base = $derived(buttonToggleGroup({ roundedSize }));
  type SelectedValue = string | null | string[];

  if (multiSelect) {
    if (value === null) {
      value = [];
    } else if (typeof value === "string") {
      value = [value];
    }
  } else {
    if (Array.isArray(value)) {
      value = value[0] || null;
    }
  }

  let selectedValues = $state<SelectedValue>(value);

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
  setContext("ctxIconClass", cn(ctxIconClass));
  setContext("ctxBtnClass", cn(ctxBtnClass));
</script>

<div class="inline">
  <div class={cn(base, className)} role={multiSelect ? "group" : "radiogroup"} aria-label={name} {...restProps}>
    {@render children()}
  </div>
</div>
