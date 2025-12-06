<script lang="ts">
  import { checkbox } from "./theme";
  import clsx from "clsx";
  import { type CheckboxProps } from "$lib";
  import Label from "$lib/forms/label/Label.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let {
    children,
    color = "primary",
    custom,
    inline,
    tinted,
    rounded,
    group = $bindable([]),
    choices = [],
    checked = $bindable(false),
    classes,
    class: className,
    divClass,
    disabled,
    value,
    labelProps = {},
    ...restProps
  }: CheckboxProps = $props();

  // svelte-ignore state_referenced_locally
  warnThemeDeprecation("Checkbox", { divClass }, { divClass: "div" });

  const styling = $derived(classes ?? { div: divClass });

  const theme = getTheme("checkbox");

  const { base, div: divStyle } = $derived(checkbox({ color, tinted, custom, rounded, inline, disabled: disabled ?? false }));

  $effect(() => {
    if (value !== undefined && Array.isArray(group)) {
      checked = group.includes(value);
    }
  });

  $effect(() => {
    if (value === undefined || !Array.isArray(group)) return;
    // There's a bug in Svelte and bind:group is not working with wrapped checkbox
    // This workaround is taken from:
    // https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1
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
    <Label show={!!children || !!choice.label} {...labelProps} class={divStyle({ class: clsx(theme?.div, styling.div) })}>
      <input type="checkbox" value={choice.value} checked={choice.checked ?? false} {disabled} bind:group {...restProps} class={base({ class: clsx(theme?.base, className) })} />
      {#if children}
        {@render children({ value: choice.value, checked: choice.checked, disabled })}
      {:else}
        {choice.label}
      {/if}
    </Label>
  {/each}
{:else}
  <Label show={!!children} {...labelProps} class={divStyle({ class: clsx(theme?.div, styling.div) })}>
    <input type="checkbox" {value} bind:checked {disabled} {...restProps} class={base({ class: clsx(theme?.base, className) })} />
    {#if children}
      {@render children({ value, checked, disabled })}
    {/if}
  </Label>
{/if}
