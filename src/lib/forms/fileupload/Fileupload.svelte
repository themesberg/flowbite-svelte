<script lang="ts">
  import { type FileuploadProps as Props, fileupload } from ".";
  import { CloseButton } from "$lib";
  import clsx from "clsx";
  let { files = $bindable<FileList | undefined>(), size = "md", clearable = false, class: className, ...restProps }: Props = $props();
  const { base, wrapper, right } = fileupload();

  let fileInputRef: HTMLInputElement | undefined = $state();
  const clearAll = () => {
    if (fileInputRef) {
      fileInputRef.value = "";
      files = undefined;
    }
  };
  const hasFiles = $derived(files && files.length > 0);
</script>

{#if clearable}
  <div class={wrapper()}>
    <input type="file" bind:files bind:this={fileInputRef} {...restProps} class={base({ size, class: clsx(className) })} />
    {#if hasFiles}
      <CloseButton onclick={clearAll} class={right()} />
    {/if}
  </div>
{:else}
  <input type="file" bind:files {...restProps} class={base({ size, class: clsx(className) })} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: files: any = $bindable<FileList | undefined>();
@props:size: any = "md";
@props:clearable: any = false;
@props:class: string;
-->
