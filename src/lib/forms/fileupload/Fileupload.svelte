<script lang="ts">
  import { fileupload } from ".";
  import { CloseButton, type FileuploadProps } from "$lib";
  import clsx from "clsx";

  let { files = $bindable(), size = "md", clearable = false, elementRef = $bindable(), class: className, clearableSvgClass, clearableClass, clearableOnClick,  ...restProps }: FileuploadProps = $props();

  const { base, wrapper, right } = fileupload();

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      files = undefined;
    }
    if(clearableOnClick) clearableOnClick();
  };
</script>

<div class={wrapper()}>
  <input type="file" bind:files bind:this={elementRef} {...restProps} class={base({ size, class: clsx(className) })} />
  {#if files && files.length > 0 && clearable}
    <CloseButton onclick={clearAll} class={right({class: clearableClass})} color="none" aria-label="Clear selected files" svgClass={clearableSvgClass} />
  {/if}
</div>


<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L685)
## Props
@prop files = $bindable<FileList | undefined>()
@prop size = "md"
@prop clearable = false
@prop class: className
@prop ...restProps
-->
