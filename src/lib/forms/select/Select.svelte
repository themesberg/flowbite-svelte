<script lang="ts" generics="T">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { select as selectCls } from ".";
  import { type SelectProps, CloseButton } from "$lib";

  let { children, items, value = $bindable(), elementRef = $bindable(), underline, size = "md", disabled, selectClass, class: className, placeholder = "Choose option ...", clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, ...restProps }: SelectProps<T> = $props();

  const { base, select, clearbtn } = $derived(selectCls({ underline, size, disabled }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={twMerge(base(), clsx(className))}>
  <select {disabled} {...restProps} bind:value bind:this={elementRef} class={twMerge(select(), clsx(selectClass))}>
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
    <CloseButton onclick={clearAll} class={twMerge(clearbtn(), clsx(clearableClass))} color={clearableColor} aria-label="Clear search value" svgClass={clsx(clearableSvgClass)} {disabled} />
  {/if}
</div>
<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
