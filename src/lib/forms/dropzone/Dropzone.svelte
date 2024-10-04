<script lang="ts">
  import type { DragEventHandler, ChangeEventHandler } from 'svelte/elements';
  import { type DropzoneProps as Props, dropzone } from '.';

  type HTMLInputElementWithFiles = HTMLInputElement & { files: FileList | null };


  let { children, files = $bindable<FileList | null>(), class: className, ...restProps }: Props & {
    ondrop?: DragEventHandler<HTMLButtonElement>;
    ondragover?: DragEventHandler<HTMLButtonElement>;
    onchange?: ChangeEventHandler<HTMLInputElementWithFiles>;
  } = $props();

  const base = $derived(dropzone({ className }));
  let input: HTMLInputElement;

  function keydown(ev: KeyboardEvent) {
    if ([' ', 'Enter'].includes(ev.key)) {
      ev.preventDefault();
      input.click();
    }
  }

  function onClick(event: MouseEvent) {
    event.preventDefault();
    input.click();
  }

  const onDrop: DragEventHandler<HTMLButtonElement> = function(this: Window, event) {
    event.preventDefault();
    if (ondrop) {
      ondrop.call(this, event);
    }
  };

  const onDragOver: DragEventHandler<HTMLButtonElement> = function(this: Window, event) {
    event.preventDefault();
    if (ondragover) {
      ondragover.call(this, event);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElementWithFiles> = function(this: Window, event) {
    if (onchange) {
      onchange.call(this, event);
    }
  };
</script>

<button class={base} onkeydown={keydown} onclick={onClick} ondrop={onDrop} ondragover={onDragOver} type="button">
  {@render children()}
</button>
<label class="hidden">
  <input {...restProps} bind:files bind:this={input} onchange={onChange} type="file" />
</label>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:value: any = $bindable<string | undefined>();
@props:files: any = $bindable<FileList | null>();
@props:class: any;
-->
