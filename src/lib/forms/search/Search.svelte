<script lang="ts">
  import { search } from ".";
  import clsx from "clsx";
  import { CloseButton, type SearchProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let { children, inputClass, size, placeholder = "Search", value = $bindable(), elementRef = $bindable(), clearable = false, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, class: className, classes, ...restProps }: SearchProps = $props();

  warnThemeDeprecation("Search", { inputClass, clearableSvgClass, clearableClass }, { inputClass: "input", clearableSvgClass: "svg", clearableClass: "close" });
  const styling = $derived(classes ?? { input: inputClass, svg: clearableSvgClass, close: clearableClass });

  const theme = getTheme("search");

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
  <div class={left({ class: clsx(theme?.left, classes?.left) })}>
    <svg class={icon({ class: clsx(theme?.icon, classes?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" bind:value bind:this={elementRef} class={inputCls({ class: clsx(theme?.input, styling.input) })} {placeholder} required {...restProps} />
  {#if children}
    <div class={content({ class: clsx(theme?.content, classes?.content) })}>
      {@render children()}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton class={close({ class: clsx(theme?.close, styling.close) })} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling.svg)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L836)
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
