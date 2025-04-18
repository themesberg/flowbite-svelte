<script lang="ts" generics="T">
  import clsx from "clsx";
  import { search } from ".";
  import type { SearchProps } from "$lib/types";

  let { children, class: inputClass, size, placeholder = "Search", value = $bindable<T>(), ...restProps }: SearchProps<T> = $props();

  const { base, content, icon, input: inputCls, leftDiv } = $derived(search({ size }));
</script>

<div class={base()}>
  <div class={leftDiv()}>
    <svg class={icon()} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" bind:value class={inputCls({ class: clsx(inputClass) })} {placeholder} required {...restProps} />
  {#if children}
    <div class={content()}>
      {@render children()}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: 
-->
