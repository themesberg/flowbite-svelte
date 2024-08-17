<script lang="ts">
  import { type FileuploadProps as Props, fileupload } from '.'
  
  let {
    files = $bindable(),
    value = $bindable(),
    size = 'md',
    class: className, 
    ...attributes 
  }: Props = $props();
  const base = $derived(fileupload({ size, class: className }));
</script>

<input type="file" bind:files {...attributes} class={base}/>

