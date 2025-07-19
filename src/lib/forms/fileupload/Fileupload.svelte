<script lang="ts">
  import { fileupload, type FileuploadTheme } from ".";
  import clsx from "clsx";
  import { CloseButton, type FileuploadProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { files = $bindable(), size = "md", clearable = false, elementRef = $bindable(), class: className, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, wrapperClass, ...restProps }: FileuploadProps = $props();

  const theme = getTheme("fileupload");

  const { base, wrapper, right } = fileupload();

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      files = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={wrapper({ class: clsx((theme as FileuploadTheme)?.wrapper, wrapperClass) })}>
  <input type="file" bind:files bind:this={elementRef} {...restProps} class={base({ size, class: clsx((theme as FileuploadTheme)?.base, className) })} />
  {#if files && files.length > 0 && clearable}
    <CloseButton onclick={clearAll} class={right({ class: clsx((theme as FileuploadTheme)?.right, clearableClass) })} color={clearableColor} aria-label="Clear selected files" svgClass={clsx(clearableSvgClass)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L694)
## Props
@prop files = $bindable()
@prop size = "md"
@prop clearable = false
@prop elementRef = $bindable()
@prop class: className
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop wrapperClass
@prop ...restProps
-->
