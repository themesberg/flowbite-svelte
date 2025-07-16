<script lang="ts" generics="T">
  import { select as selectCls, type SelectTheme } from ".";
  import clsx from 'clsx';
  import { type SelectProps, CloseButton } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, items, value = $bindable(), elementRef = $bindable(), underline, size = "md", disabled, selectClass, class: className, placeholder = "Choose option ...", clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, ...restProps }: SelectProps<T> = $props();

  const theme = getTheme("select");

  const { base, select, closebutton } = $derived(selectCls({ underline, size, disabled }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={base({class:clsx((theme as SelectTheme)?.base, className)})}>
  <select {disabled} {...restProps} bind:value bind:this={elementRef} class={select({class:clsx((theme as SelectTheme)?.select, selectClass)})}>
    {#if placeholder}
      <option disabled selected value="">{placeholder}</option>
    {/if}

    {#if items}
      {#each items as item}
        <option value={item.value} disabled={item.disabled}>{item.name}</option>
      {/each}
    {/if}

    {#if children}
      {@render children()}
    {/if}
  </select>
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={closebutton({class:clsx((theme as SelectTheme)?.closebutton, clearableClass)})} color={clearableColor} aria-label="Clear search value" svgClass={clsx(clearableSvgClass)} {disabled} />
  {/if}
</div>
<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
