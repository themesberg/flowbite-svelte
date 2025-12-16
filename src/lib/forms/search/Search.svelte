<script lang="ts">
  import { search } from "./theme";
  import clsx from "clsx";
  import type { SearchProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";
  import { untrack } from "svelte";

  let {
    children,
    inputClass,
    size,
    placeholder = "Search",
    value = $bindable(),
    elementRef = $bindable(),
    clearable = false,
    clearableSvgClass,
    clearableColor = "none",
    clearableClass,
    clearableOnClick,
    class: className,
    classes,
    ...restProps
  }: SearchProps = $props();

  warnThemeDeprecation(
    "Search",
    untrack(() => ({ inputClass, clearableSvgClass, clearableClass })),
    { inputClass: "input", clearableSvgClass: "svg", clearableClass: "close" }
  );

  const styling = $derived(classes ?? { input: inputClass, svg: clearableSvgClass, close: clearableClass });

  const { base, content, icon, close, input: inputCls, left } = $derived(search({ size }));

  const baseCls = $derived(base({ class: clsx(getTheme("search")?.base, className) }));
  const leftCls = $derived(left({ class: clsx(getTheme("search")?.left, classes?.left) }));
  const iconCls = $derived(icon({ class: clsx(getTheme("search")?.icon, classes?.icon) }));
  const inputClsFull = $derived(inputCls({ class: clsx(getTheme("search")?.input, styling.input) }));
  const contentCls = $derived(content({ class: clsx(getTheme("search")?.content, classes?.content) }));
  const closeCls = $derived(close({ class: clsx(getTheme("search")?.close, styling.close) }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);
</script>

<div class={baseCls}>
  <div class={leftCls}>
    <svg class={iconCls} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" bind:value bind:this={elementRef} class={inputClsFull} {placeholder} required {...restProps} />
  {#if children}
    <div class={contentCls}>
      {@render children()}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton class={closeCls} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling.svg)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L940)
## Props
@prop children
@prop inputClass
@prop size
@prop placeholder = "Search"
@prop value = $bindable()
@prop elementRef = $bindable()
@prop clearable = false
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop class: className
@prop classes
@prop ...restProps
-->
