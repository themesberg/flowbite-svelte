<script lang="ts">
  import { fileupload } from "./theme";
  import clsx from "clsx";
  import type { FileuploadProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";
  import { untrack } from "svelte";

  let {
    files = $bindable(),
    size = "md",
    clearable = false,
    elementRef = $bindable(),
    class: className,
    classes,
    clearableSvgClass,
    clearableColor = "none",
    clearableClass,
    clearableOnClick,
    wrapperClass,
    ...restProps
  }: FileuploadProps = $props();

  warnThemeDeprecation(
    "Fileupload",
    untrack(() => ({ wrapperClass, clearableClass, clearableSvgClass })),
    { wrapperClass: "wrapper", clearableClass: "close", clearableSvgClass: "svg" }
  );

  const styling = $derived(classes ?? { wrapper: wrapperClass, close: clearableClass, svg: clearableSvgClass });

  const { base, wrapper, close } = fileupload();

  const wrapperCls = $derived(wrapper({ class: clsx(getTheme("fileupload")?.wrapper, styling.wrapper) }));
  const baseCls = $derived(base({ size, class: clsx(getTheme("fileupload")?.base, className) }));
  const closeCls = $derived(close({ class: clsx(getTheme("fileupload")?.close, styling.close) }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      files = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);
</script>

<div class={wrapperCls}>
  <input type="file" bind:files bind:this={elementRef} {...restProps} class={baseCls} />
  {#if files && files.length > 0 && clearable}
    <CloseButton class={closeCls} color={clearableColor} aria-label="Clear selected files" svgClass={clsx(styling.svg)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L811)
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
