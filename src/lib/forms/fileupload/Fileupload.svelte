<script lang="ts">
  import { type FileuploadProps as Props, fileupload } from '.';

  let { files = $bindable<FileList | undefined>(), size = 'md', class: className, ...restProps }: Props = $props();
  const base = $derived(fileupload({ size, class: className }));
</script>

<input type="file" bind:files {...restProps} class={base} />

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: files: any = $bindable<FileList | undefined>();
@props:size: any = 'md';
@props:class: string;
-->
