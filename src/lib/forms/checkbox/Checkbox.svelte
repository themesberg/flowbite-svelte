<script lang="ts">
  import { checkbox } from "./theme";
  import clsx from "clsx";
  import { type CheckboxProps } from "$lib";
  import Label from "$lib/forms/label/Label.svelte";
  import { getTheme } from "$lib/theme/themeUtils";

  let {
    children,
    color = "brand",
    custom,
    inline,
    tinted,
    rounded,
    group = $bindable([]),
    choices = [],
    checked = $bindable(false),
    classes,
    class: className,
    disabled,
    value,
    labelProps = {},
    ...restProps
  }: CheckboxProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("checkbox"));

  const { base, label: labelStyle } = $derived(checkbox({ color, tinted, custom, rounded, inline, disabled: disabled ?? false }));

  $effect(() => {
    if (value !== undefined && Array.isArray(group)) {
      checked = group.includes(value);
    }
  });

  $effect(() => {
    if (value === undefined || !Array.isArray(group)) return;
    const index = group.indexOf(value);
    if (checked === undefined) checked = index >= 0;

    if (checked) {
      if (index < 0) {
        group.push(value);
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
      }
    }
  });
</script>

{#if choices.length > 0}
  {#each choices as choice, i (choice.value ?? i)}
    <Label show={!!children || !!choice.label} {...labelProps} class={labelStyle({ class: clsx(theme?.label, styling?.label) })}>
      <input type="checkbox" value={choice.value} checked={choice.checked ?? false} {disabled} bind:group {...restProps} class={base({ class: clsx(theme?.base, className) })} />
      {#if children}
        {@render children({ value: choice.value, checked: choice.checked, disabled })}
      {:else}
        {choice.label}
      {/if}
    </Label>
  {/each}
{:else}
  <Label show={!!children} {...labelProps} class={labelStyle({ class: clsx(theme?.label, styling?.label) })}>
    <input type="checkbox" {value} bind:checked {disabled} {...restProps} class={base({ class: clsx(theme?.base, className) })} />
    {#if children}
      {@render children({ value, checked, disabled })}
    {/if}
  </Label>
{/if}
