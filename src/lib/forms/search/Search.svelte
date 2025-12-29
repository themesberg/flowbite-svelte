<script lang="ts">
  import { search } from "./theme";
  import clsx from "clsx";
  import type { SearchProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    children,
    size,
    placeholder = "Search",
    value = $bindable(),
    elementRef = $bindable(),
    clearable = false,
    clearableColor = "none",
    clearableOnClick,
    class: className,
    classes,
    ...restProps
  }: SearchProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("search"));

  const { base, content, icon, close, input: inputCls, left } = $derived(search({ size }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);
</script>

<div class={base({ class: clsx(theme?.base, className) })}>
  <div class={left({ class: clsx(theme?.left, styling?.left) })}>
    <svg class={icon({ class: clsx(theme?.icon, styling?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" bind:value bind:this={elementRef} class={inputCls({ class: clsx(theme?.input, styling?.input) })} {placeholder} required {...restProps} />
  {#if children}
    <div class={content({ class: clsx(theme?.content, styling?.content) })}>
      {@render children()}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton class={close({ class: clsx(theme?.close, styling?.close) })} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling?.svg)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L862)
## Props
@prop children
@prop size
@prop placeholder = "Search"
@prop value = $bindable()
@prop elementRef = $bindable()
@prop clearable = false
@prop clearableColor = "none"
@prop clearableOnClick
@prop class: className
@prop classes
@prop ...restProps
-->
