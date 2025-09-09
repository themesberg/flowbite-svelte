<script lang="ts">
  import type { DragEventHandler, ChangeEventHandler } from "svelte/elements";
  import { dropzone } from ".";
  import clsx from "clsx";
  import { type DropzoneProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  type HTMLInputElementWithFiles = HTMLInputElement & { files: FileList | null };

  let { children, files = $bindable<FileList | null>(), class: className, onDrop, onDragOver, onChange, ...restProps }: DropzoneProps = $props();

  const theme = getTheme("dropzone");

  let inputElement: HTMLInputElement;

  const handleDrop: DragEventHandler<HTMLLabelElement> = function (this: Window, event) {
    event.preventDefault();

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      files = event.dataTransfer.files;
      if (inputElement) {
        inputElement.files = event.dataTransfer.files;
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
    if (onChange) {
      onChange.call(this, event);
    }
  };
</script>

<label class={dropzone({ class: clsx(theme, className) })} ondrop={handleDrop} ondragover={handleDragOver}>
  {@render children()}

  <input {...restProps} bind:files bind:this={inputElement} onchange={handleChange} type="file" class="hidden" />
</label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropzoneProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L700)
## Props
@prop children
@prop files = $bindable<FileList | null>()
@prop class: className
@prop onDrop
@prop onDragOver
@prop onChange
@prop ...restProps
-->
