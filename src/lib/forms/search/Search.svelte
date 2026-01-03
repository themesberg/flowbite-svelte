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
    clearableOnClick,
    class: className,
    classes,
    closeButtonProps,
    ...restProps
  }: SearchProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("search"));

  const { base, rightContent, icon, close, input: inputCls, iconWrapper } = $derived(search({ size }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);

  const finalCloseProps = $derived({
    class: close({ class: clsx(theme?.close, styling?.close) }),
    color: closeButtonProps?.color ?? "gray",
    ariaLabel: closeButtonProps?.ariaLabel ?? "Clear search value",
    size: closeButtonProps?.size,
    classes: closeButtonProps?.classes ?? { svg: clsx(theme?.closeIcon, styling?.closeIcon) },
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick
  });
</script>

<div data-scope="search" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="icon-wrapper" class={iconWrapper({ class: clsx(theme?.iconWrapper, styling?.iconWrapper) })}>
    <svg data-part="icon" class={icon({ class: clsx(theme?.icon, styling?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input data-part="input" type="search" bind:value bind:this={elementRef} class={inputCls({ class: clsx(theme?.input, styling?.input) })} {placeholder} required {...restProps} />
  {#if children}
    <div data-part="right-content" class={rightContent({ class: clsx(theme?.rightContent, styling?.rightContent) })}>
      {@render children()}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton {...finalCloseProps} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L868)
## Props
@prop children
@prop size
@prop placeholder = "Search"
@prop value = $bindable()
@prop elementRef = $bindable()
@prop clearable = false
@prop clearableOnClick
@prop class: className
@prop classes
@prop closeButtonProps
@prop ...restProps
-->
