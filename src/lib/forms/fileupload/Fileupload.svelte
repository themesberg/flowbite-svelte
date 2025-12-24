<script lang="ts">
  import { fileupload } from "./theme";
  import clsx from "clsx";
  import type { FileuploadProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let { files = $bindable(), size = "md", clearable = false, elementRef = $bindable(), class: className, classes, clearableColor = "none", clearableOnClick, ...restProps }: FileuploadProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("fileupload"));

  const { base, wrapper, close } = fileupload();

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      // Manually trigger the change event to update files
      const event = new Event("change", { bubbles: true });
      elementRef.dispatchEvent(event);
    }
    files = undefined;

    if (clearableOnClick) clearableOnClick();
  };

  // Handle file changes via event instead of two-way binding
  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    files = target.files ?? undefined;
  }

  createDismissableContext(clearAll);

  // Check if we should show the clear button
  const showClearButton = $derived(clearable && files && files.length > 0);
</script>

<div class={wrapper({ class: clsx(theme?.wrapper, styling?.wrapper) })}>
  <input type="file" onchange={handleChange} bind:this={elementRef} {...restProps} class={base({ size, class: clsx(theme?.base, className) })} />
  {#if showClearButton}
    <CloseButton class={close({ class: clsx(theme?.close, styling?.close) })} color={clearableColor} ariaLabel="Clear selected files" svgClass={clsx(theme?.svg, styling?.svg)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L757)
## Props
@prop files = $bindable()
@prop size = "md"
@prop clearable = false
@prop elementRef = $bindable()
@prop class: className
@prop classes
@prop clearableColor = "none"
@prop clearableOnClick
@prop ...restProps
-->
