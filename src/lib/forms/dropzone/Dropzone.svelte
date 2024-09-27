<script lang="ts">
  import { type DropzoneProps as Props, dropzone } from '.';

  let { children, value = $bindable<string | undefined>(), files = $bindable<FileList | null>(), class: className, ...restProps }: Props = $props();

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
</script>

<button class={base} onkeydown={keydown} onclick={onClick} type="button">
  {@render children()}
</button>
<label class="hidden">
  <input {...restProps} bind:value bind:files bind:this={input} type="file" />
</label>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop value = $bindable<string | undefined>()
@prop files = $bindable<FileList | null>()
@prop class: className
@prop ...restProps
-->
