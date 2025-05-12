<script lang="ts">
  import Label from "../label/Label.svelte";
  import { checkbox } from ".";
  import { type CheckboxProps, type CheckboxItem } from "$lib";
  import clsx from "clsx";

  let { children, color = "primary", custom, inline, tinted, rounded, group = $bindable([]), choices = [], checked = $bindable(false), indeterminate, class: className, divClass, disabled = false, value, labelProps = {}, ...restProps }: CheckboxProps = $props();

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
    <div class={divStyle({ class: clsx(divClass) })}>
      <input type="checkbox" value={choice.value} checked={choice.checked ?? false} {disabled} bind:group {...restProps} class={base({ class: clsx(className) })} />
      <Label show={true} {...labelProps}>
        {renderLabel(choice)}
      </Label>
    </div>
  {/each}
{:else}
  <div class={divStyle({ class: clsx(divClass) })}>
    <input type="checkbox" {value} bind:checked {indeterminate} {disabled} {...restProps} class={base({ class: clsx(className) })} />
    {#if children}
      {@render children({ value, checked, disabled })}
    {/if}
  </div>
{/if}
