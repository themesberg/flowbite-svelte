<script lang="ts">
  import { textarea, type TextareaTheme } from ".";
  import clsx from "clsx";
  import { type TextareaProps, CloseButton } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { header, footer, addon, value = $bindable(), elementRef = $bindable(), divClass, innerClass, headerClass, footerClass, addonClass, disabled, class: className, classes, clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, textareaClass, ...restProps }: TextareaProps = $props();

  warnThemeDeprecation("Textarea", { divClass, innerClass, headerClass, footerClass, addonClass, textareaClass, clearableClass, clearableSvgClass }, { divClass: "div", innerClass: "inner", headerClass: "header", footerClass: "footer", addonClass: "addon", textareaClass: "class", clearableClass: "close", clearableSvgClass: "svg" });
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

  const theme = getTheme("textarea");

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let hasAddon = $derived(!!addon);
  let wrapped: boolean = $derived(hasHeader || hasFooter || hasAddon);

  const { div, base, wrapper, inner, header: headerCls, footer: footerCls, addon: addonCls, close } = $derived(textarea({ wrapped, hasHeader, hasFooter }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={div({ class: clsx((theme as TextareaTheme)?.div, styling.div) })}>
  {#if !wrapped}
    <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={wrapper({ class: clsx(className, classes?.wrapper) })}></textarea>
  {:else}
    <div class={wrapper({ class: clsx((theme as TextareaTheme)?.wrapper, classes?.wrapper) })}>
      {#if header}
        <div class={headerCls({ class: clsx((theme as TextareaTheme)?.header, styling.header) })}>
          {@render header()}
        </div>
      {/if}
      <div class={inner({ class: clsx((theme as TextareaTheme)?.inner, styling.inner) })}>
        {#if addon}
          <div class={addonCls({ class: clsx((theme as TextareaTheme)?.addon, styling.addon) })}>
            {@render addon()}
          </div>
        {/if}
        <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={base({ class: clsx((theme as TextareaTheme)?.base, className) })}></textarea>
      </div>
      {#if footer}
        <div class={footerCls({ class: clsx((theme as TextareaTheme)?.footer, styling.footer) })}>
          {@render footer()}
        </div>
      {/if}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={close({ class: clsx((theme as TextareaTheme)?.close, styling.close) })} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling.svg)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L941)
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
