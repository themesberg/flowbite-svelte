<script lang="ts">
  import { textarea } from "./theme";
  import clsx from "clsx";
  import type { TextareaProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";
  import { untrack } from "svelte";

  let {
    header,
    footer,
    addon,
    value = $bindable(),
    elementRef = $bindable(),
    divClass,
    innerClass,
    headerClass,
    footerClass,
    addonClass,
    disabled,
    class: className,
    classes,
    clearable,
    clearableSvgClass,
    clearableColor = "none",
    clearableClass,
    clearableOnClick,
    textareaClass,
    ...restProps
  }: TextareaProps = $props();

  warnThemeDeprecation(
    "Textarea",
    untrack(() => ({ divClass, innerClass, headerClass, footerClass, addonClass, textareaClass, clearableClass, clearableSvgClass })),
    { divClass: "div", innerClass: "inner", headerClass: "header", footerClass: "footer", addonClass: "addon", textareaClass: "class", clearableClass: "close", clearableSvgClass: "svg" }
  );

  const styling = $derived(
    classes ?? {
      div: divClass,
      inner: innerClass,
      header: headerClass,
      footer: footerClass,
      addon: addonClass,
      textarea: textareaClass,
      close: clearableClass,
      svg: clearableSvgClass
    }
  );

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let hasAddon = $derived(!!addon);
  let wrapped: boolean = $derived(hasHeader || hasFooter || hasAddon);

  const { div, base, wrapper, inner, header: headerCls, footer: footerCls, addon: addonCls, close } = $derived(textarea({ wrapped, hasHeader, hasFooter }));

  const divCls = $derived(div({ class: clsx(getTheme("textarea")?.div, styling.div) }));
  const wrapperCls = $derived(wrapper({ class: clsx(getTheme("textarea")?.wrapper, classes?.wrapper) }));
  const wrapperClsSimple = $derived(wrapper({ class: clsx(className, classes?.wrapper) }));
  const headerClsFull = $derived(headerCls({ class: clsx(getTheme("textarea")?.header, styling.header) }));
  const innerCls = $derived(inner({ class: clsx(getTheme("textarea")?.inner, styling.inner) }));
  const addonClsFull = $derived(addonCls({ class: clsx(getTheme("textarea")?.addon, styling.addon) }));
  const baseCls = $derived(base({ class: clsx(getTheme("textarea")?.base, className) }));
  const footerClsFull = $derived(footerCls({ class: clsx(getTheme("textarea")?.footer, styling.footer) }));
  const closeCls = $derived(close({ class: clsx(getTheme("textarea")?.close, styling.close) }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);
</script>

<div class={divCls}>
  {#if !wrapped}
    <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={wrapperClsSimple}></textarea>
  {:else}
    <div class={wrapperCls}>
      {#if header}
        <div class={headerClsFull}>
          {@render header()}
        </div>
      {/if}
      <div class={innerCls}>
        {#if addon}
          <div class={addonClsFull}>
            {@render addon()}
          </div>
        {/if}
        <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={baseCls}></textarea>
      </div>
      {#if footer}
        <div class={footerClsFull}>
          {@render footer()}
        </div>
      {/if}
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
[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1049)
## Props
@prop header
@prop footer
@prop addon
@prop value = $bindable()
@prop elementRef = $bindable()
@prop divClass
@prop innerClass
@prop headerClass
@prop footerClass
@prop addonClass
@prop disabled
@prop class: className
@prop classes
@prop clearable
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop textareaClass
@prop ...restProps
-->
