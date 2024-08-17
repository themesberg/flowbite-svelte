<script lang="ts">
  import { type FileuploadProps as Props, fileupload } from '.';

  let {
    files = $bindable(),
    value = $bindable(),
    size = 'md',
    class: className,
    ...attributes
  }: Props = $props();
  const base = $derived(fileupload({ size, class: className }));
</script>

<input type="file" bind:files {...attributes} class={base} />

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop files = $bindable()
@prop value = $bindable()
@prop size = 'md'
@prop class: className
@prop ...attributes
-->
