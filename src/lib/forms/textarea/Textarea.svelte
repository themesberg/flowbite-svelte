<script lang="ts">
  import { textarea, type TextareaTheme } from ".";
  import { type TextareaProps, CloseButton, cn } from "$lib";
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

<div class={cn(divWrapper(), divClass, (theme as TextareaTheme)?.divWrapper)}>
  {#if !wrapped}
    <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={cn(wrapper(), className)}></textarea>
  {:else}
    <div class={cn(wrapper(), className, (theme as TextareaTheme)?.wrapper)}>
      {#if header}
        <div class={cn(headerCls(), headerClass, (theme as TextareaTheme)?.headerCls)}>
          {@render header()}
        </div>
      {/if}
      <div class={cn(innerWrapper(), innerClass, (theme as TextareaTheme)?.innerWrapper)}>
        {#if addon}
          <div class={cn(addonCls(), addonClass, (theme as TextareaTheme)?.addonCls)}>
            {@render addon()}
          </div>
        {/if}
        <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={cn(base(), textareaClass, (theme as TextareaTheme)?.base)}></textarea>
      </div>
      {#if footer}
        <div class={cn(footerCls(), footerClass, (theme as TextareaTheme)?.footerCls)}>
          {@render footer()}
        </div>
      {/if}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={cn(closebutton(), clearableClass, (theme as TextareaTheme)?.closebutton)} color={clearableColor} aria-label="Clear search value" svgClass={cn(clearableSvgClass)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L946)
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
