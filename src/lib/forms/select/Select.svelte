<script lang="ts" generics="T">
  import clsx from "clsx";
  import { select as selectCls } from ".";
  import {type SelectProps, CloseButton } from "$lib";

  let { children, items, value = $bindable(), elementRef = $bindable(), underline, size = "md", selectClass, class: className, placeholder = "Choose option ...", clearable, clearableSvgClass, clearableClass, clearableOnClick, ...restProps }: SelectProps<T> = $props();

  const {base, select, clearbtn} = $derived(selectCls({ underline, size}));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if(clearableOnClick) clearableOnClick();
  };
</script>

<div class={base({class: clsx(className)})}>
<select {...restProps} bind:value bind:this={elementRef} class={select({class: clsx(selectClass) })}>
  {#if placeholder}
    <option disabled selected value="">{placeholder}</option>
  {/if}

  {#if items}
    {#each items as { value, name }}
      <option {value}>{name}</option>
    {/each}
  {/if}

  {#if children}
    {@render children()}
  {/if}
</select>
  {#if value !== undefined && value !== '' && clearable}
    <CloseButton onclick={clearAll} class={clearbtn({class: clearableClass})} color="none" aria-label="Clear search value" svgClass={clearableSvgClass} />
  {/if}
</div>
<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
