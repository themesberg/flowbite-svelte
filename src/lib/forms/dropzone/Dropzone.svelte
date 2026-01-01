<script lang="ts">
  import type { DragEventHandler, ChangeEventHandler } from "svelte/elements";
  import { dropzone } from "./theme";
  import clsx from "clsx";
  import type { DropzoneProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  type HTMLInputElementWithFiles = HTMLInputElement & { files: FileList | null };

  let { children, files = $bindable<FileList | null>(), class: className, classes, onDrop, onDragOver, onChange, ...restProps }: DropzoneProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("dropzone"));

  let inputElement: HTMLInputElement;

  const handleDrop: DragEventHandler<HTMLLabelElement> = function (this: Window, event) {
    event.preventDefault();

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      files = event.dataTransfer.files;
      if (inputElement) {
        // Don't try to set files, just update our binding
        // The input will be updated on next user interaction
      }
    }

    if (onDrop) {
      onDrop.call(this, event);
    }
  };

  const handleDragOver: DragEventHandler<HTMLLabelElement> = function (this: Window, event) {
    event.preventDefault();
    if (onDragOver) {
      onDragOver.call(this, event);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElementWithFiles> = function (this: Window, event) {
    // Update files from the input element
    files = event.currentTarget.files;

    if (onChange) {
      onChange.call(this, event);
    }
  };

  const { base, content, input } = $derived(dropzone());
</script>

<label data-part="base" class={base({ class: clsx(theme?.base, className) })} ondrop={handleDrop} ondragover={handleDragOver}>
  <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
    {@render children()}
  </div>

  <input data-part="input" {...restProps} bind:this={inputElement} onchange={handleChange} type="file" class={input({ class: clsx(theme?.input, styling?.input) })} />
</label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropzoneProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L755)
## Props
@prop children
@prop files = $bindable<FileList | null>()
@prop class: className
@prop onDrop
@prop onDragOver
@prop onChange
@prop ...restProps
-->
