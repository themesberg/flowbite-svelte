<script lang="ts">
  import { checkbox, type CheckboxTheme } from ".";
  import clsx from "clsx";
  import { type CheckboxProps, type CheckboxItem, Label } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, color = "primary", custom, inline, tinted, rounded, group = $bindable([]), choices = [], checked = $bindable(false), indeterminate, classes, class: className, divClass, disabled = false, value, labelProps = {}, ...restProps }: CheckboxProps = $props();

  warnThemeDeprecation("Checkbox", { divClass }, { divClass: "div" });
  let styling = $derived(classes ?? { div: divClass });

  const theme = getTheme("checkbox");

  const disabledValue = $derived(disabled === null ? undefined : disabled);
  const { base, div: divStyle } = $derived(checkbox({ color, tinted, custom, rounded, inline, disabled: disabledValue }));

  // Separate label rendering logic
  function renderLabel(choice?: CheckboxItem) {
    if (!choice) return "";

    if (children) {
      return children(choice);
    }
    return choice.label || "";
  }
</script>

{#if choices.length > 0}
  {#each choices as choice, i}
    <div class={divStyle({ class: clsx((theme as CheckboxTheme)?.div, styling.div) })}>
      <Label show={true} {...labelProps}>
        <input type="checkbox" value={choice.value} checked={choice.checked ?? false} {disabled} bind:group {...restProps} class={base({ class: clsx((theme as CheckboxTheme)?.base, className) })} />
        {renderLabel(choice)}
      </Label>
    </div>
  {/each}
{:else}
  <div class={divStyle({ class: clsx((theme as CheckboxTheme)?.div, styling.div) })}>
    <Label show={true} {...labelProps}>
      <input type="checkbox" {value} bind:checked {indeterminate} {disabled} {...restProps} class={base({ class: clsx((theme as CheckboxTheme)?.base, className) })} />
      {#if children}
        {@render children({ value, checked, disabled })}
      {/if}
    </Label>
  </div>
{/if}
