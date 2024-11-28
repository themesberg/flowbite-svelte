<script lang="ts" generics="T">
  import { type SearchProps as Props, search } from ".";

  let { children, inputClass, size = "md", placeholder = "Search", value = $bindable<T>(), ...restProps }: Props<T> = $props();

  const { base, content, icon, input: inputCls, leftDiv } = $derived(search({ size }));
</script>

<div class={base()}>
  <div class={leftDiv()}>
    <svg class={icon()} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" bind:value class={inputCls({ class: inputClass })} {placeholder} required {...restProps} />
  {#if children}
    <div class={content()}>
      {@render children()}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: 
-->
