<script lang="ts" generics="T">
  import clsx from "clsx";
  import { select as selectCls } from ".";
  import type { SelectProps } from "$lib";

  let { children, items, value = $bindable(), elementRef = $bindable(), underline, size = "md", class: className, placeholder = "Choose option ...", ...restProps }: SelectProps<T> = $props();

  const selectStyle = $derived(selectCls({ underline, size, class: clsx(className) }));
</script>

<select {...restProps} bind:value bind:this={elementRef} class={selectStyle}>
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

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
