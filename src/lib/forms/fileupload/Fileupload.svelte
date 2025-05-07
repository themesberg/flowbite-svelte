<script lang="ts">
  import { fileupload } from ".";
  import type { FileuploadProps } from "$lib/types";
  import { CloseButton } from "$lib";
  import clsx from "clsx";
  let { files = $bindable<FileList | undefined>(), size = "md", clearable = false, class: className, ...restProps }: FileuploadProps = $props();
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
## Type
[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L683)
## Props
@prop files = $bindable<FileList | undefined>()
@prop size = "md"
@prop clearable = false
@prop class: className
@prop ...restProps
-->
