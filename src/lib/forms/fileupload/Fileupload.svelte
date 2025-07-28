<script lang="ts">
  import { fileupload } from ".";
  import clsx from "clsx";
  import { CloseButton, type FileuploadProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { files = $bindable(), size = "md", clearable = false, elementRef = $bindable(), class: className, classes, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, wrapperClass, ...restProps }: FileuploadProps = $props();

  warnThemeDeprecation("Fileupload", { wrapperClass, clearableClass, clearableSvgClass }, { wrapperClass: "wrapper", clearableClass: "close", clearableSvgClass: "svg" });
  const styling = $derived(classes ?? { wrapper: wrapperClass, close: clearableClass, svg: clearableSvgClass });

  const theme = getTheme("fileupload");

  const { base, wrapper, close } = fileupload();

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      files = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={wrapper({ class: clsx(theme?.wrapper, styling.wrapper) })}>
  <input type="file" bind:files bind:this={elementRef} {...restProps} class={base({ size, class: clsx(theme?.base, className) })} />
  {#if files && files.length > 0 && clearable}
    <CloseButton onclick={clearAll} class={close({ class: clsx(theme?.close, styling.close) })} color={clearableColor} aria-label="Clear selected files" svgClass={clsx(styling.svg)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L706)
## Props
@prop files = $bindable()
@prop size = "md"
@prop clearable = false
@prop elementRef = $bindable()
@prop class: className
@prop classes
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop wrapperClass
@prop ...restProps
-->
