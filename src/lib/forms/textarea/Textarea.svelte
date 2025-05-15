<script lang="ts">
  import clsx from "clsx";
  import { textarea } from ".";
  import { type TextareaProps, CloseButton } from "$lib";

  let { header, footer, value = $bindable(), elementRef = $bindable(), divClass, innerClass, headerClass, footerClass, disabled, class: className, cols, clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, ...restProps }: TextareaProps = $props();

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let wrapped: boolean = $derived(hasHeader || hasFooter);

  const { divWrapper, base, wrapper, innerWrapper, headerCls, footerCls, clearbtn } = $derived(textarea({ wrapped, hasHeader, hasFooter, cols: !!cols }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={divWrapper({ class: divClass })}>
  {#if !wrapped}
    <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={wrapper({ class: clsx(className) })}></textarea>
  {:else}
    <div class={wrapper({ class: clsx(className) })}>
      {#if header}
        <div class={headerCls({ class: headerClass })}>
          {@render header()}
        </div>
      {/if}
      <div class={innerWrapper({ class: innerClass })}>
        <textarea bind:value bind:this={elementRef} {disabled} {...restProps} class={base()}></textarea>
      </div>
      {#if footer}
        <div class={footerCls({ class: footerClass })}>
          {@render footer()}
        </div>
      {/if}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={clearbtn({ class: clearableClass })} color={clearableColor} aria-label="Clear search value" svgClass={clearableSvgClass} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L891)
## Props
@prop header
@prop footer
@prop value = $bindable()
@prop elementRef = $bindable()
@prop divClass
@prop innerClass
@prop headerClass
@prop footerClass
@prop disabled
@prop class: className
@prop cols
@prop clearable
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop ...restProps
-->
