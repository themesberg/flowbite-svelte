<script lang="ts">
  import { textarea } from "./theme";
  import clsx from "clsx";
  import type { TextareaProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    header,
    footer,
    addon,
    value = $bindable(),
    elementRef = $bindable(),
    disabled,
    class: className,
    classes,
    clearable,
    clearableOnClick,
    closeButtonProps,
    ...restProps
  }: TextareaProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("textarea"));

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let hasAddon = $derived(!!addon);
  let wrapped: boolean = $derived(hasHeader || hasFooter || hasAddon);

  const { container, base, wrapper, inner, header: headerCls, footer: footerCls, addon: addonCls, close } = $derived(textarea({ wrapped, hasHeader, hasFooter }));

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
    classes: closeButtonProps?.classes ?? { svg: clsx(theme?.svg, styling?.svg) },
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick
  });
</script>

<div data-scope="textarea" data-part="container" class={container({ class: clsx(theme?.container, className) })}>
  {#if !wrapped}
    <textarea data-part="wrapper" bind:value bind:this={elementRef} {disabled} {...restProps} class={wrapper({ class: clsx(theme?.wrapper, styling?.wrapper) })}></textarea>
  {:else}
    <div data-part="wrapper" class={wrapper({ class: clsx(theme?.wrapper, styling?.wrapper) })}>
      {#if header}
        <div data-part="header" class={headerCls({ class: clsx(theme?.header, styling?.header) })}>
          {@render header()}
        </div>
      {/if}
      <div data-part="inner" class={inner({ class: clsx(theme?.inner, styling?.inner) })}>
        {#if addon}
          <div data-part="addon" class={addonCls({ class: clsx(theme?.addon, styling?.addon) })}>
            {@render addon()}
          </div>
        {/if}
        <textarea data-part="base" bind:value bind:this={elementRef} {disabled} {...restProps} class={base({ class: clsx(theme?.base) })}></textarea>
      </div>
      {#if footer}
        <div data-part="footer" class={footerCls({ class: clsx(theme?.footer, styling?.footer) })}>
          {@render footer()}
        </div>
      {/if}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton data-part="close" {...finalCloseProps} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L967)
## Props
@prop header
@prop footer
@prop addon
@prop value = $bindable()
@prop elementRef = $bindable()
@prop disabled
@prop class: className
@prop classes
@prop clearable
@prop clearableOnClick
@prop closeButtonProps
@prop ...restProps
-->
