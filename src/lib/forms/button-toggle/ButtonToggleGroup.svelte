<script lang="ts">
  import clsx from "clsx";
  import type { ButtonToggleGroupProps, ButtonToggleContextType } from "$lib";
  import { buttonToggleGroup } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";
  import { setButtonToggleContext } from "$lib/context";

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

  // Create context object with all button toggle related values
  const ctx: ButtonToggleContextType = {
    get toggleSelected() { return toggleSelected; },
    get isSelected() { return isSelected; },
    get multiSelect() { return multiSelect; },
    get color() { return color; },
    get size() { return size; },
    get roundedSize() { return roundedSize; },
    get ctxIconClass() { return clsx(ctxIconClass); },
    get ctxBtnClass() { return clsx(ctxBtnClass); }
  };

  // Set context during initialization
  setButtonToggleContext(ctx);
</script>

<div class="inline">
  <div class={base} role={multiSelect ? "group" : "radiogroup"} aria-label={name} {...restProps}>
    {@render children()}
  </div>
</div>
