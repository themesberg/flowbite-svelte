<script lang="ts">
  import { fileupload } from "./theme";
  import clsx from "clsx";
  import type { FileuploadProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let { files = $bindable(), size = "md", clearable = false, elementRef = $bindable(), class: className, classes, clearableOnClick, closeButtonProps, ...restProps }: FileuploadProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("fileupload"));

  const { input, base, closeButton } = fileupload();

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

  const finalCloseProps = $derived({
    class: closeButton({ class: clsx(theme?.closeButton, styling?.closeButton) }),
    color: closeButtonProps?.color ?? "gray",
    ariaLabel: closeButtonProps?.ariaLabel ?? "Clear selected files",
    size: closeButtonProps?.size,
    classes: closeButtonProps?.classes ?? { svg: clsx(theme?.closeIcon, styling?.closeIcon) },
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick
  });
</script>

<div class={base({ class: clsx(theme?.base, className) })} data-scope="fileupload" data-part="wrapper">
  <input type="file" onchange={handleChange} bind:this={elementRef} {...restProps} class={input({ size, class: clsx(theme?.input, styling?.input) })} data-part="input" />
  {#if showClearButton}
    <CloseButton {...finalCloseProps} data-part="close-button" />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L764)
## Props
@prop files = $bindable()
@prop size = "md"
@prop clearable = false
@prop elementRef = $bindable()
@prop class: className
@prop classes
@prop clearableOnClick
@prop closeButtonProps
@prop ...restProps
-->
