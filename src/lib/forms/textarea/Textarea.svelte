<script lang="ts">
  import { textarea, type TextareaTheme } from ".";
  import clsx from "clsx";
  import { type TextareaProps, CloseButton } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { header, footer, addon, value = $bindable(), elementRef = $bindable(), divClass, innerClass, headerClass, footerClass, addonClass, disabled, class: className, cols, clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, textareaClass, ...restProps }: TextareaProps = $props();

  const theme = getTheme("textarea");

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let hasAddon = $derived(!!addon);
  let wrapped: boolean = $derived(hasHeader || hasFooter || hasAddon);

  const { divWrapper, base, wrapper, innerWrapper, headerCls, footerCls, addonCls, closebutton } = $derived(textarea({ wrapped, hasHeader, hasFooter, cols: !!cols }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={divWrapper({ class: clsx((theme as TextareaTheme)?.divWrapper, divClass) })}>
  {#if !wrapped}
    <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={wrapper({ class: clsx(className) })}></textarea>
  {:else}
    <div class={wrapper({ class: clsx((theme as TextareaTheme)?.wrapper, className) })}>
      {#if header}
        <div class={headerCls({ class: clsx((theme as TextareaTheme)?.headerCls, headerClass) })}>
          {@render header()}
        </div>
      {/if}
      <div class={innerWrapper({ class: clsx((theme as TextareaTheme)?.innerWrapper, innerClass) })}>
        {#if addon}
          <div class={addonCls({ class: clsx((theme as TextareaTheme)?.addonCls, addonClass) })}>
            {@render addon()}
          </div>
        {/if}
        <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={base({ class: clsx((theme as TextareaTheme)?.base, textareaClass) })}></textarea>
      </div>
      {#if footer}
        <div class={footerCls({ class: clsx((theme as TextareaTheme)?.footerCls, footerClass) })}>
          {@render footer()}
        </div>
      {/if}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={closebutton({ class: clsx((theme as TextareaTheme)?.closebutton, clearableClass) })} color={clearableColor} aria-label="Clear search value" svgClass={clsx(clearableSvgClass)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L932)
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
@prop cols
@prop clearable
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop textareaClass
@prop ...restProps
-->
