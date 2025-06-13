<script lang="ts">
  import { fileupload } from ".";
  import { CloseButton, type FileuploadProps, cn } from "$lib";

  let { files = $bindable(), size = "md", clearable = false, elementRef = $bindable(), class: className, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, wrapperClass, ...restProps }: FileuploadProps = $props();

  const { base, wrapper, right } = fileupload();

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      files = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={cn(wrapper(), wrapperClass)}>
  <input type="file" bind:files bind:this={elementRef} {...restProps} class={cn(base({ size }), className)} />
  {#if files && files.length > 0 && clearable}
    <CloseButton onclick={clearAll} class={cn(right(), clearableClass)} color={clearableColor} aria-label="Clear selected files" svgClass={cn(clearableSvgClass)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L719)
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
